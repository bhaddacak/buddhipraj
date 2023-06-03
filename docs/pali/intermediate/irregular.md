---
layout: default
title: คำนามพิเศษ
parent: การแต่งประโยคขั้นกลาง
grand_parent: บาลีสำหรับคนรุ่นใหม่
nav_order: 10
last_modified_date: 2023-06-03 12:00:00 +0700
---

# {{ page.title  }}
{: .no_toc }

<details open markdown="block">
<summary>สารบัญ</summary>
- TOC
{:toc}
</details>

สำหรับผู้เริ่มเรียนบาลีการแปรรูปนามถือว่าเป็นภาระหนักเริ่มต้นที่ต้องจดจำ สิ่งที่เราได้เรียนผ่านมากก็นับว่ามากอยู่ มีทั้งการแปรรูปนามปกติรวมทั้งคำคุณศัพท์ และการแปรรูปคำสรรพนามที่ใช้บ่อย นั่นเพียงพอแก่การเริ่มต้นแต่ยังไม่พอที่จะอ่านคัมภีร์ต่าง ๆ ได้ เราต้องเรียนคำนามที่มีการแปรรูปแบบพิเศษด้วย เพราะคำเหล่านี้ใช้บ่อยมากในคัมภีร์ (อาจเพราะเป็นคำเก่าที่ถือกฎโบราณในการแปรรูป) เราควรจะจำให้ได้ด้วย อย่างน้อยก็ควรรู้ว่าคำใดบ้างอยู่ในกลุ่มพิเศษ ส่วนรูปการแปรอาจจะอาศัยตารางช่วยไปก่อนในระยะแรก ๆ เมื่อเราอ่านคัมภีร์ไปสักพักก็จะคุ้นเอง ส่วนการแปรรูปคำสรรพนามอื่น ๆ จะได้กล่าวถึงในบทที่เกี่ยวข้องต่อไป ยังมีรายละเอียดปลีกย่อยที่ไม่ได้กล่าวถึง ให้ศึกษาจาก Appendix B.4 ใน [*Pāli for New Learners*, Book 1](https://bhaddacak.github.io/palicon)

## มโนคณะ
มีคำชุดหนึ่งเรียกว่า *มโนคณะ* มีการแปรรูปแบบเดียวกัน ดูได้จากตารางข้างล่าง นอกจากคำชุดนี้ยังมีคำปกติบางคำมีบางรูปที่ใช้ตรงกับคำชุดนี้ เช่น *pāda* (foot) มีรูป pādaso pādasā และ *mukha* (mouth) มีรูป mukhasā เป็นต้น เราถือสองศัพท์นี้มีรูปพิเศษเฉพาะ แต่ไม่นับรวมในมโนคณะ

ส่วนคำในมโนคณะเองถ้าใช้ในความหมายอื่นก็ถือว่าไม่ได้อยู่ในกลุ่มนี้เช่นกัน โดยให้แปรรูปตามกฎปกติ คำเหล่านี้ได้แก่ *vaya* ที่แปลว่า decay และ *sara* ที่แปลว่า sound หรือ arrow เมื่อใช้ในความหมายดังกล่าวให้ถือว่าเป็นคำนามปกติ

<div>
<select id="mana" class="fs-4" onChange="optChange('mana',1);">
	<option value="mana;a,m:mana:mind">mana</option>
	<option value="mana;a,m:aya:iron">aya</option>
	<option value="mana;a,m:aha:day">aha</option>
	<option value="mana;a,m:ura:chest">ura</option>
	<option value="mana;a,m:ceta:mind">ceta</option>
	<option value="mana;a,m:chanda:prosody, will">chanda</option>
	<option value="mana;a,m:tapa:penance">tapa</option>
	<option value="mana;a,m:tama:darkness">tama</option>
	<option value="mana;a,m:teja:heat">teja</option>
	<option value="mana;a,m:paya:milk">paya</option>
	<option value="mana;a,m:yasa:fame">yasa</option>
	<option value="mana;a,m:raha:secret place">raha</option>
	<option value="mana;a,m:vaca:word">vaca</option>
	<option value="mana;a,m:vaya:age">vaya</option>
	<option value="mana;a,m:sara:pond">sara</option>
	<option value="mana;a,m:sira:the head">sira</option>
</select>
<span id="mana-meaning"></span>
</div>

{% include decl_table.html number="1" %}

## Rāja brahma atta เป็นต้น
คำกลุ่มนี้ไม่ได้จัดเป็นชุดแต่ก็มีลักษณะคล้ายกันคือส่วนใหญ่เป็น m. ที่มีรูป nom. ลงท้ายด้วย ā นอกจากนี้ยังมีคำจิปาถะอีกจำนวนหนึ่งที่ไม่มีกลุ่มจะลงจึงนำมารวมไว้ด้วย

<div>
<select id="raja" class="fs-4" onChange="optChange('raja',2);">
	<option value="rāja;a,m:rāja:king">rāja</option>
	<option value="brahma;a,m:brahma:the Brahma">brahma</option>
	<option value="atta;a,m:atta:self">atta</option>
	<option value="sakha;a,m:sakha:friend">sakha</option>
</select>
<span id="raja-meaning"></span>
</div>

{% include decl_table.html number="2" %}

(ยังมีต่อ)
{: .fs-5 }

<script>
function optChange(code, tnum) {
	let opt = document.getElementById(code);
	let ind = opt.selectedIndex;
	updateDeclTable(opt.options[ind].value, code, tnum);
}
function updateDeclTable(word, code, tnum) {
	let termmean = word.split(":");
	let group = termmean[0];
	let term = termmean[1];
	let tgen = group.slice(group.indexOf(',') + 1);
	if (tgen === 'n') tgen = "nt";
	let meaning = "(" + tgen + ".) = " + termmean[2];
	let stem = term.slice(0, term.length-1);
	let tnumber = tnum;
	for (let i = 0; i < case_abbr.length; i++) {
 		let cas = case_abbr[i];
		for (let g = 0; g < gender_abbr.length; g++) {
			let gen = gender_abbr[g];
			let elem = document.getElementById(cas+"_"+gen+tnumber);
			elem.innerHTML = getIrrnDeclensionStr(stem, group, i, g);
		}
	}
	let meanElm = document.getElementById(code+"-meaning");
	meanElm.innerHTML = meaning;
}
updateDeclTable("mana;a,m:mana:mind", "mana", 1);
updateDeclTable("rāja;a,m:rāja:king", "raja", 2);
</script>
