---
layout: default
title: ตารางแปรรูปนาม
parent: ภาคผนวก
grand_parent: บาลีสำหรับคนรุ่นใหม่
nav_order: 10
last_modified_date: 2023-06-10 12:00:00 +0700
---

# {{ page.title }}แบบทดลอง
{: .no_toc }

<div>
<span class="fs-2">
<button type="button" class="btn" onClick="insertChar('ā');">ā</button>&nbsp;
<button type="button" class="btn" onClick="insertChar('ī');">ī</button>&nbsp;
<button type="button" class="btn" onClick="insertChar('ū');">ū</button>&nbsp;
<button type="button" class="btn" onClick="insertChar('ṅ');">ṅ</button>&nbsp;
<button type="button" class="btn" onClick="insertChar('ñ');">ñ</button>&nbsp;
<button type="button" class="btn" onClick="insertChar('ṭ');">ṭ</button>&nbsp;
<button type="button" class="btn" onClick="insertChar('ḍ');">ḍ</button>&nbsp;
<button type="button" class="btn" onClick="insertChar('ṇ');">ṇ</button>&nbsp;
<button type="button" class="btn" onClick="insertChar('ḷ');">ḷ</button>&nbsp;
<button type="button" class="btn" onClick="insertChar('ṃ');">ṃ</button>&nbsp;
</span>
</div>
<div style="padding: 3px">
<input type="text" id="wordinput" placeholder="Type in Roman Pāli" size="34">&nbsp;<span class="fs-3"><button type="button" class="btn" onClick="wordClear();">Clear</button>&nbsp;<button type="button" class="btn" onClick="compute();">Compute</button></span>
</div>
<div>
<span style="padding: 3px">
	<input type="radio" id="gendm" name="gender-radio" value="m" onChange="compute();" checked>
	<label for="gendm">masculine</label>&nbsp;
	<input type="radio" id="gendf" name="gender-radio" value="f" onChange="compute();">
	<label for="gendf">feminine</label>&nbsp;
	<input type="radio" id="gendn" name="gender-radio" value="n" onChange="compute();">
	<label for="gendn">neuter</label>
</span>&nbsp;
<span><input type="checkbox" id="forcegen" onChange="compute();">&nbsp;<label for="forcegen">Force generic</label></span>&nbsp;
<span class="label label-blue" id="wordclass" style="display:none;"></span>
<span class="label label-green" id="computed" style="display:none;">computed</span>
</div>

{% include decl_table.html number="1" %}

<script>
declFunc = {
	generic: getGenericDeclensionStr,
	pronoun: getPronounDeclensionStr,
	irregular: getIrrnDeclensionStr
};
paliNumber = { "1": "eka", "2": "dvi", "3": "ti", "4": "catu" };
pron_parad = [ "sabba", "pubba" ];
pron_child_list = {
	"sabba": [ "katara", "katama", "ubhaya", "itara", "añña", "aññatara", "aññatama" ],
	"pubba": [ "para", "apara", "dakkhiṇa", "uttara", "adhara" ]
};
irrn_parad = [ "mana", "kattu", "pitu", "mātu" ];
irrn_child_list = {
	"mana": [ "aya", "aha", "ura", "ceta", "chanda", "tapa", "tama", "teja", "paya", "yasa", "raha", "vaca", "vaya", "sara", "sira" ],
	"kattu": [ "akkhātu", "abhibhavitu", "uṭṭhātu", "uppādetu", "okkamitu", "kāretu", "khattu", "khantu", "gajjitu", "gantu", "cetu", "chettu", "jetu", "ñātu", "tatu", "tātu", "dātu", "dhātu", "nattu", "netu", "nettu", "paṭisedhitu", "paṭisevitu", "panattu", "pabrūhetu", "pucchitu", "bhattu", "bhāsitu", "bhettu", "bhoddhu", "bhodhetu", "metu", "mucchitu", "vattu", "vassitu", "viññāpetu", "vinetu", "sandassetu", "sahitu", "sāvetu", "sotu", "hantu" ],
	"pitu":[ "cūlapitu", "bhātu", "jeṭṭhabhātu", "kaṇiṭṭhabhātu", "jāmātu", "mātāpitu" ],
	"mātu": [ "cūlamātu", "dhītu", "duhitu", "bhātudhītu" ]
};

const input = document.getElementById("wordinput");
input.addEventListener("keydown", wordInputKeyDown);
function wordInputKeyDown(event) {
	if (event.key === "Enter")
		compute();
}
function insertChar(ch) {
	input.value = input.value + ch;
	input.focus();
}
function wordClear() {
	input.value = "";
	input.focus();
	fillTable(1);
}
function compute() {
	const inputWord = input.value.trim().toLowerCase();
	if (inputWord.length >= 2) {
		updateDeclTable(inputWord);
	} else {
		if (paliNumber[inputWord] === undefined)
			fillTable(1);
		else
			updateDeclTable(paliNumber[inputWord]);
	}
}
function getSelectedGender() {
	let result = 'm';
	const elem = document.getElementById("gendm");
	const elef = document.getElementById("gendf");
	const elen = document.getElementById("gendn");
	if (elef.checked)
		result = 'f';
	else if (elen.checked)
		result = 'n';
	return result;
}
function getFixedLastChar(term, gender) {
	let lastCh = term.charAt(term.length-1);
	switch (gender) {
		case "m":
			if (lastCh === "ā") lastCh = "a";
			break;
		case "f":
			if (lastCh === "a") lastCh = "ā";
			break;
		case "n":
			if (lastCh === "ā") lastCh = "a";
			else if (lastCh === "ī") lastCh = "i";
			else if (lastCh === "ū") lastCh = "u";
			break;
	}
	return lastCh;
}
function getGenericParam(term, gender) {
	let result = { nclass: "generic", group: "", stem: term };
	const lastCh = getFixedLastChar(term, gender);
	if ("aāiīuū".indexOf(lastCh) > -1) {
		result.group = lastCh + "," + gender;
		result.stem = term.slice(0, term.length-1);
	} else {
		result.group = "";
	}
	return result;
}
function updateDeclTable(term) {
	const selgen = getSelectedGender();
	const forceGeneric = document.getElementById("forcegen").checked;
	let param = {};
	let computed = false;
	if (forceGeneric) {
		param = getGenericParam(term, selgen);
		computed = true;
	} else {
		const lastCh = getFixedLastChar(term, selgen);
		let group = term + ";" + lastCh + "," + selgen;
		if (paradn_pron[group] != undefined) {
			param.nclass = "pronoun";
			param.group = group;
			param.stem = term.slice(0, term.length-1);
		} else if (paradn_irrn[group] != undefined) {
			param.nclass = "irregular";
			param.group = group;
			const cutAt = term.endsWith("t") ? 3 : 1;
			param.stem = term.slice(0, term.length - cutAt);
		} else if (term === "go") {
			const end = selgen === "f" ? "ā" : "a";
			param.nclass = "irregular";
			param.group = selgen === "n" ? "" : "go;" + end + "," + selgen;
			param.stem = "g";
		} else if (term === "kiṃ" || term === "ka") {
			const end = selgen === "f" ? "ā" : "a";
			param.nclass = "pronoun";
			param.group = "kiṃ;" + end + "," + selgen;
			param.stem = "k";
		} else if (term === "ubho") {
			const end = selgen === "f" ? "ā" : "a";
			param.nclass = "pronoun";
			param.group = "ubho;" + end + "," + selgen;
			param.stem = "ubh";
		} else if (term.endsWith("ant")) {
			param.nclass = "irregular";
			param.group = "guṇavant;t," + selgen;
			const cutAt = term.endsWith("u") ? 4 : 3;
			param.stem = term.slice(0, term.length - cutAt);
			computed = true;
		} else if (term.endsWith("anta")) {
			if (selgen === "f") {
				param.nclass = "generic";
				param.group = "ā," + selgen;
				param.stem = term.slice(0, term.length-1);
			} else {
				param.nclass = "irregular";
				param.group = "gacchanta;a," + selgen;
				param.stem = term.slice(0, term.length-1);
			}
			computed = true;
		} else if (term.endsWith("tar") && selgen === "m") {
			param.nclass = "irregular";
			param.group = "kattu;u,m";
			param.stem = term.slice(0, term.length-2);
			computed = true;
		} else {
			let generic = true;
			for (let i=0; i<pron_parad.length; i++) {
				if (pron_child_list[pron_parad[i]].indexOf(term) >= 0) {
					const end = selgen === "f" ? "ā" : "a";
					param.nclass = "pronoun";
					param.group = pron_parad[i] + ";" + lastCh + "," + selgen;
					param.stem = term.slice(0, term.length-1);
					generic = false;
				}
			}
			for (let i=0; i<irrn_parad.length; i++) {
				if (irrn_child_list[irrn_parad[i]].indexOf(term) >= 0) {
					if (selgen === "m" || (irrn_parad[i] === "mātu" && selgen === "f")) {
						param.nclass = "irregular";
						param.group = irrn_parad[i] + ";" + term[term.length-1] + "," + selgen;
						param.stem = term.slice(0, term.length-1);
						generic = false;
					}
				}
			}
			if (generic) {
				param = getGenericParam(term, selgen);
				computed = true;
			}
		}
	}
	if (param.group.length > 0)
		fillTable(1, param.stem, param.group, param.nclass);
	else
		fillTable(1);
	const lblComputed = document.getElementById("computed");
	if (computed)
		lblComputed.style.display = "inline";
	else
		lblComputed.style.display = "none";
}
function fillTable(tnumber, stem, group, nclass) {
	const isClear = stem === undefined;
	const lblWordClass = document.getElementById("wordclass");
	for (let i = 0; i < case_abbr.length; i++) {
 		let cas = case_abbr[i];
		for (let g = 0; g < gender_abbr.length; g++) {
			const gen = gender_abbr[g];
			const elem = document.getElementById(cas+"_"+gen+tnumber);
			if (isClear) {
				elem.innerHTML = "";
			} else {
				elem.innerHTML = declFunc[nclass](stem, group, i, g);
			}
		}
	}
	if (isClear || document.getElementById("forcegen").checked) {
		lblWordClass.innerHTML = "";
		lblWordClass.style.display = "none";
	} else {
		lblWordClass.innerHTML = nclass;
		lblWordClass.style.display = "inline";
	}
}
</script>

ส่วนนี้เป็นโปรแกรมสำหรับศึกษาการแปรรูปนาม ผู้ใช้สามารถป้อนคำในรูปพจนานุกรมแล้วโปรแกรมจะคำนวณตารางการแปรรูปให้โดยอัตโนมัติ ถ้าคำนั้นตรงกับคำสรรพนามที่ตั้งไว้ เช่น amha tumha ta เป็นต้น การแปรรูปจะใช้ของสรรพนาม (รวมทั้งตัวเลข 1--4) ถ้าคำอยู่ในกลุ่มของคำพิเศษเช่น mana rāja atta satthu kattu pitu mātu เป็นต้น การแปรรูปจะเป็นแบบพิเศษ และถ้าส่วนท้ายของคำเป็น -tar จะแปรรูปตามแบบของ kattu (มีเฉพาะ m.) ถ้าส่วนท้ายเป็น -ant (ไม่ใช่ -antu) จะแปรรูปตามแบบของ guṇavantu ถ้าเป็น -anta จะแปรรูปตาม gacchanta ถ้าเงื่อนไขไม่ตรงตามที่กล่าวมาถือว่าเป็นคำปกติ ในการคำนวณจะสนใจเพียงรูปคำเท่านั้น ฉะนั้นคำต่าง ๆ ที่ได้อาจจะไม่มีความหมายก็ได้

{: .remark }
> **DECLENSION TABLE CALCULATOR**<br>
> The declension table can be calculated from the following inputs:
> - a pronoun in raw form e.g. amha tumha ta etc. (including number 1--4)
> - an irregular noun or its related word e.g. mana rāja atta kattu pitu etc.
> - a word ending with -tar, declining as *kattu* or *kattar* (only m.)
> - a word ending with -ant (not -antu), declining as *guṇavant* or *guṇavantu*
> - a word ending with -anta, declining as *gacchanta*
> - otherwise a generic word (ending with a valid vowel)
>
> All recognizable whole-word inputs are:
> - *Pronouns*: amha, tumha, ta, eta, ima, amu, ka, kiṃ, kiṃci, ya, sabba, katara, katama, ubhaya, itara, añña, aññatara, aññatama, pubba, para, apara, dakkhiṇa, uttara, adhara, eka (1), dvi (2), ti (3), catu (4), and ubho
> - *Irregular nouns*:
> 	- Masculine: *mana* and its group, rāja, brahma, atta, ātuma, satthu, *kattu* and its group, *pitu* and its group, yuva, addhā, muddhā, sā, bhavanta, karonta, arahanta, santa 
> 	- Others: *mātu* and its group (f.), kamma (nt.), go (m., f.), gacchanta (m., nt.), himavant (m.), satimant (m.), guṇavant (m., f., nt.)
>
> The computed results can be totally meaningless.

