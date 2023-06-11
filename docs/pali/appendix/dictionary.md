---
layout: default
title: พจนานุกรม
parent: ภาคผนวก
grand_parent: บาลีสำหรับคนรุ่นใหม่
nav_order: 20
last_modified_date: 2023-06-11 12:00:00 +0700
---

# {{ page.title }}
{: .no_toc }

*New Concise Pali-English Dictionary*, compiled by SuttaCentral from Buddhadatta's Concise Pali-English Dictionary, updated and corrected from Margaret Cone's Dictionary of Pali, then slightly modified by J.R. Bhaddacak (i.e. converting ṁ to ṃ, partitioning, and some editing).

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
<input type="text" id="wordinput" placeholder="Search for ..." size="34" onKeyDown="wordInputKeyDown();">&nbsp;<span class="fs-3"><button type="button" class="btn" onClick="wordClear();">Clear</button>&nbsp;<button type="button" class="btn" onClick="compute();">Compute</button></span>
</div>
<div>
<span><input type="checkbox" id="showdetails" onChange="compute();">&nbsp;<label for="showdetails">Show details</label></span>&nbsp;
<span class="label" id="wordcount" style="display:none;"></span>
</div>
<p id="dictresult"></p>
<script>
const initList = [ "ak", "ag", "aṅ", "ac", "aj", "añ", "aṭ", "aḍ", "aṇ", "at", "ad", "an", "ap", "ab", "am", "ay", "ar", "al", "av", "as", "ah", "aḷ", "aṃ", "āk", "āg", "āc", "āj", "āñ", "āṇ", "āt", "ād", "ān", "āp", "āb", "ām", "āy", "ār", "āl", "āv", "ās", "āh", "āḷ", "ik", "iṅ", "ic", "ij", "iñ", "iṭ", "iṇ", "it", "id", "in", "ib", "im", "ir", "iv", "is", "īt", "īd", "īs", "uk", "ug", "uc", "uj", "uñ", "uṭ", "uḍ", "uṇ", "ut", "ud", "un", "up", "ub", "um", "uy", "ur", "ul", "uv", "us", "uḷ", "ūn", "ūm", "ūr", "ūs", "ūh", "ek", "ej", "eṇ", "et", "ed", "en", "em", "er", "el", "ev", "es", "eh", "eḷ", "ok", "og", "oc", "oj", "oñ", "oṭ", "oḍ", "oṇ", "ot", "od", "on", "op", "ob", "om", "oy", "or", "ol", "ov", "os", "oh", "oḷ", "ka", "kā", "ki", "kī", "ku", "kū", "ke", "ko", "kr", "kl", "kv", "kh", "ga", "gā", "gi", "gī", "gu", "gū", "ge", "go", "gh", "ca", "cā", "ci", "cī", "cu", "cū", "ce", "co", "ch", "ja", "jā", "ji", "jī", "ju", "jū", "je", "jo", "jy", "jh", "ña", "ñā", "ñe", "ṭa", "ṭh", "ḍa", "ḍā", "ḍi", "ḍe", "ta", "tā", "ti", "tī", "tu", "tū", "te", "to", "ty", "tv", "th", "da", "dā", "di", "dī", "du", "dū", "de", "do", "dv", "dh", "na", "nā", "ni", "nī", "nu", "nū", "ne", "no", "nh", "pa", "pā", "pi", "pī", "pu", "pū", "pe", "po", "pr", "pl", "ph", "ba", "bā", "bi", "bī", "bu", "be", "bo", "by", "br", "bh", "ma", "mā", "mi", "mī", "mu", "mū", "me", "mo", "ya", "yā", "yi", "yu", "yū", "ye", "yo", "ra", "rā", "ri", "ru", "rū", "re", "ro", "la", "lā", "li", "lī", "lu", "lū", "le", "lo", "va", "vā", "vi", "vī", "vu", "vū", "ve", "vo", "vy", "sa", "sā", "si", "sī", "su", "sū", "se", "so", "sn", "sv", "ha", "hā", "hi", "hī", "hu", "he", "ho", "ḷa", "ḷā" ];
const notfound = "Nothing found";
let dict = [];
let foundList = [];
function wordInputKeyDown() {
	if (event.key === "Enter")
		compute();
}
function insertChar(ch) {
	const input = document.getElementById("wordinput");
	input.value = input.value + ch;
	input.focus();
}
function wordClear() {
	const input = document.getElementById("wordinput");
	input.value = "";
	input.focus();
	clearResult();
}
function showWordCount(num) {
	const wordcount = document.getElementById("wordcount");
	if (num === 0) {
		wordcount.style.display = "none";	
	} else {
		const s = num === 1 ? "" : "s";
		wordcount.innerHTML = num + " term" + s + " found";
		wordcount.style.display = "inline";	
	}
}
function clearNode(node) {
	while (node.firstChild) {
		node.removeChild(node.firstChild);
	}
}
function clearResult() {
	const result = document.getElementById("dictresult");
	showWordCount(0);
	clearNode(result);
}
function compute() {
	const input = document.getElementById("wordinput");
	const result = document.getElementById("dictresult");
	const inputWord = input.value.trim().toLowerCase();
	clearResult();
	if (inputWord.length >= 2) {
		let initial = inputWord.slice(0, 2);
		if (initList.indexOf(initial) >= 0) {
			loadDict(initial);
		} else {
			result.innerHTML = notfound;
		}
	}
}
function loadDict(initial) {
	const request = new XMLHttpRequest();
	request.open("GET", "{{ site.url }}" + "/assets/ncped/" + initial + ".json", true);
	request.onload = function(){
		if (request.status >= 200 && request.status < 400) {
			dict = JSON.parse(request.responseText);
			showResult();
		} else {
			console.log("Error loading ajax request. Request status:" + request.status);
		}
	};
	request.onerror = function(){
		console.log("There was a connection error");
	};
	request.send();
}
function showResult() {
	const result = document.getElementById("dictresult");
	const input = document.getElementById("wordinput");
	const inputWord = input.value.trim().toLowerCase();
	if (dict.length > 0) {
		foundList = [];
		for (let i=0; i<dict.length; i++) {
			if (dict[i].entry.startsWith(inputWord)) {
				let div = document.createElement("div");
				let term = dict[i].entry;
				div.id = term;
				foundList.push(dict[i]);
				const ind = foundList.length - 1;
				div.onclick = function() {
					showDetail(ind);
				};
				div.innerHTML = term;
				div.style.cursor = "pointer";
				result.appendChild(div);
			}
		}
		showWordCount(foundList.length);
		if (foundList.length === 0) {
			result.innerHTML = notfound;
		} else {
			if (document.getElementById("showdetails").checked) {
				for (let i=0; i<foundList.length; i++) {
					showDetail(i);
				}
			} else {
				if (foundList.length === 1) showDetail(0);
			}
		}
	} else {
		result.innerHTML = notfound;
	}
}
function showDetail(index) {
	const item = foundList[index];
	const termNode = document.getElementById(item.entry);
	if (termNode.children.length > 0) {
		if (event.target.id === item.entry) {
			clearNode(termNode);
			termNode.innerHTML = item.entry;
		}
	} else {
		const block = document.createElement("blockquote");
		block.className = "remark";
		block.appendChild(getDetail(item));
		termNode.appendChild(block);
	}
}
function getGrammar(grammar) {
	const gramNode = document.createElement("div");
	gramNode.className = "fs-2";
	gramNode.innerHTML = grammar === undefined ? "" : grammar;
	return gramNode;
}
function getDefinition(definition) {
	const defNode = document.createElement("ul");
	let def = typeof definition === "string" ? [ definition ] : definition;
	for (let i=0; i<def.length; i++) {
		let liNode = document.createElement("li");
		liNode.className = "fs-4";
		liNode.innerHTML = def[i];
		defNode.appendChild(liNode);
	}
	return defNode;
}
function getXR(xr) {
	const xrNode = document.createElement("div");
	const seealso = typeof xr === "string" ? xr : xr.join(", ");
	xrNode.className = "fs-3";
	xrNode.innerHTML = "See also: <em>" + seealso + "</em>";
	return xrNode;
}
function getHomonyms(homonyms) {
	const homoNode = document.createElement("p");
	if (typeof homonyms === "object") {
		for (let i=0; i < homonyms.length; i++) {
			let item = homonyms[i];
			let homoChild = document.createElement("div");
			if (item.grammar != undefined)
				homoChild.appendChild(getGrammar(item.grammar));
			if (item.definition != undefined)
				homoChild.appendChild(getDefinition(item.definition));
			if (item.xr != undefined)
				homoChild.appendChild(getXR(item.xr));
			homoNode.appendChild(homoChild);
		}
	}
	return homoNode;
}
function getDetail(item) {
	const para = document.createElement("p");
	const head = document.createElement("strong");
	const term = item.entry;
	head.className = "fs-5";
	head.innerHTML = term;
	para.appendChild(head);
	para.appendChild(getGrammar(item.grammar));
	if (item.definition != undefined)
		para.appendChild(getDefinition(item.definition));
	if (item.homonyms != undefined)
		para.appendChild(getHomonyms(item.homonyms));
	if (item.xr != undefined)
		para.appendChild(getXR(item.xr));
	return para
}
</script>
