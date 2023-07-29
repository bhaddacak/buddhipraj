---
layout: default
title: อักษรบาลี
parent: บาลีสำหรับคนรุ่นใหม่
nav_order: 15
last_modified_date: 2023-07-25 12:00:00 +0700
---

# {{ page.title  }}
{: .no_toc }

สิ่งแรกที่จะต้องรู้คือตัวอักษรที่เราจะใช้ ในที่นี้จะใช้อักษรโรมันเป็นหลัก เพื่อสร้างความคุ้นเคยในการค้นคว้าด้วยสื่อระดับสากล รายละเอียดต่าง ๆ ไม่ได้จำเป็นมากนักขอให้อ่านจากหนังสือ จะแนะนำเพียงสรุป ด้านล่างจะมีตัวช่วยแปลงอักษรไทยบาลีเป็นโรมัน ผู้ศึกษาสามารถเรียนรู้อักษรบาลีแบบอื่น ๆ รวมทั้งใช้เครื่องมือช่วยแปลงที่สมบูรณ์กว่าด้วย [`Pāli Platform`](https://bhaddacak.github.io/paliplatform)

อักษรโรมันบาลีมีดังนี้

```
a   ā   i   ī   u   ū   e   o 
k   kh  g   gh  ṅ
c   ch  j   jh  ñ
ṭ   ṭh  ḍ   ḍh  ṇ
t   th  d   dh  n
p   ph  b   bh  m
y   r   l   v   s   h   ḷ   ṃ
```
{: .fs-6 }

เทียบกับอักษรไทยบาลีได้ดังนี้

```
อ อา  อิ  อี  อุ  อู เอ โอ
ก  ข  ค  ฆ  ง
จ  ฉ  ช  ฌ  ญ
ฏ  ฐ  ฒ  ฑ  ณ
ต  ถ  ท  ฑ  น
ป  ผ  พ  ภ  ม
ย  ร  ล  ว  ส  ห  ฬ  อํ
```
{: .fs-7 }

แถวแรกเป็นสระ ที่เหลือเป็นพยัญชนะ ตัวสุดท้ายเรียกว่า *นิคหิต* ในตำราแนวขนบท่านจัดเป็นพยัญชนะด้วย เป็นการเพิ่มตัวสะกด (ง/ม) เข้าไป อักษรไทยใช้วงกลมข้างบน ส่วนอักษรโรมันใช้ ṃ (บางทีใช้ ṁ อย่างใน suttacentral.net ในตำราเก่าจะเห็นเป็น n หางยาว) อักษรโรมันใดที่ประกอบด้วย h เช่น kh gh ch เป็นต้น ถือว่าเป็นพยัญชนะตัวเดียว

ความแตกต่างสำคัญของสองระบบอยู่ที่การใช้สระอะ (a) อักษรโรมันจะคงรูปไว้ตลอด ส่วนอักษรไทยเมื่อเขียนเป็นบาลี สระอะจะไม่มีรูปวิสรรชนีย์ คือเมื่อประกอบกับพยัญชนะจะไม่ปรากฏ แต่เมื่อเป็นสระโดดจะเขียนเป็น **อ** ดังนั้นเมื่อพยัญชนะใดไม่มีสระ อักษรไทยจะใช้*พินทุ* (จุดล่าง) เพื่อแสดงว่าตัวนั้นเป็นพยัญชนะซ้อน (หรือเป็นตัวสะกดของสระข้างหน้า) ส่วนอักษรโรมันเมื่อไม่มีสระ รูปสระก็ไม่ปรากฏ ดูคาถาด้านล่างเป็นตัวอย่าง

> อตฺตา หิ อตฺตโน นาโถ, โก หิ นาโถ ปโร สิยา;<br>
> อตฺตนา หิ สุทนฺเตน, นาถํ ลภติ ทุลฺลภํ.
> 
> Attā hi attano nātho, ko hi nātho paro siyā;<br>
> Attanā hi sudantena, nāthaṃ labhati dullabhaṃ. (Dham 12.160)
> 
> One [is] the guardian of his own self. Who else would be the guardian?<br>
> With oneself well-trained, [one] gets the guardian hard to obtain. (my translation)

### Thai-Roman Converter
<div><input type="text" id="thaipali" placeholder="พิมพ์อักษรไทยบาลี" size="50" onKeyUp="convertLetters();">&nbsp;<span class="fs-3"><button type="button" class="btn" onClick="clearInput();">Clear</button></span></div>
<div><input type="text" id="romanpali" size="50" readonly>&nbsp;<span class="fs-3"><button type="button" class="btn" onClick="copyResult();">Copy</button></span></div>
<script>
const romanVowels = "aāiīiuūeo";
const romanNumbers = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
const romanConsonantsStr = [
	"k", "kh", "g", "gh", "ṅ",
	"c", "ch", "j", "jh", "ñ",
	"ṭ", "ṭh", "ḍ", "ḍh", "ṇ",
	"t", "th", "d", "dh", "n",
	"p", "ph", "b", "bh", "m",
	"y", "r", "l", "v", "s", "h", "ḷ", "ṃ" ];
const thaiVowels = [ '\u{0E2D}', '\u{0E32}', '\u{0E34}', '\u{0E35}', '\u{0E36}', '\u{0E38}', '\u{0E39}', '\u{0E40}', '\u{0E42}' ];
const thaiNumbers = [ '\u{0E50}', '\u{0E51}', '\u{0E52}', '\u{0E53}', '\u{0E54}', '\u{0E55}', '\u{0E56}', '\u{0E57}', '\u{0E58}', '\u{0E59}' ];
const thaiBindu = '\u{0E3A}';
const thaiPeriod = '\u{0E2F}';
const thaiConsonants = [
	'\u{0E01}', '\u{0E02}', '\u{0E04}', '\u{0E06}', '\u{0E07}',
	'\u{0E08}', '\u{0E09}', '\u{0E0A}', '\u{0E0C}', '\u{0E0D}',
	'\u{0E0F}', '\u{0E10}', '\u{0E11}', '\u{0E12}', '\u{0E13}',
	'\u{0E15}', '\u{0E16}', '\u{0E17}', '\u{0E18}', '\u{0E19}',
	'\u{0E1B}', '\u{0E1C}', '\u{0E1E}', '\u{0E20}', '\u{0E21}',
	'\u{0E22}', '\u{0E23}', '\u{0E25}', '\u{0E27}', '\u{0E2A}', '\u{0E2B}', '\u{0E2C}', '\u{0E4D}' ];
function thaiToRoman(input, alsoNumber) {
	let output = "";
	let vowelMap = {};
	for(let i=0; i<thaiVowels.length; i++)
		vowelMap[thaiVowels[i]] = romanVowels[i];
	let consonantMap = {};
	for(let i=0; i<thaiConsonants.length; i++)
		consonantMap[thaiConsonants[i]] = romanConsonantsStr[i];
	let numberMap = {};
	for(let i=0; i<thaiNumbers.length; i++)
		numberMap[thaiNumbers[i]] = romanNumbers[i];
	let rch = null;
	let tch = null;
	let suspendedChar = "";
	let skipFlag = false;
	for(let index = 0; index<input.length; index++) {
		if(skipFlag) {
			skipFlag = false;
			continue;
		}
		tch = input[index];
		rch = tch;	
		if(thaiNumbers.indexOf(tch) >= 0) {
			if(alsoNumber)
				rch = numberMap[tch];
		} else if(tch === thaiPeriod) {
			rch = ".";
		} else if(tch === '\u{0E40}' || tch === '\u{0E42}') {
			rch = vowelMap[tch];
		} else if(tch === '\u{0E2D}'){
			if(index < input.length-1) {
				if(input[index+1] === '\u{0E32}' || input[index+1] === '\u{0E34}' || input[index+1] === '\u{0E35}' || input[index+1] === '\u{0E36}' || input[index+1] === '\u{0E38}' || input[index+1] === '\u{0E39}') {
					rch = vowelMap[input[index+1]];
					if(input[index+1] === '\u{0E36}')
						rch += "ṃ";
					skipFlag = true;
				} else {
					rch = "a";
				}
			} else {
				rch = "a";
			}
		} else if(tch === '\u{0E32}' || tch === '\u{0E34}' || tch === '\u{0E35}' || tch === '\u{0E36}' || tch === '\u{0E38}' || tch === '\u{0E39}') {
			rch = vowelMap[tch];
		} else {
			rch = consonantMap[tch];
			if(rch === undefined)
				rch = tch;
		}
		if(tch === '\u{0E40}' || tch === '\u{0E42}') {
			if(index < input.length-1) {
				if(input[index+1] === '\u{0E2D}') {
					skipFlag = true;
					output += rch;
				} else {
					suspendedChar = rch;
				}
			}
		} else if(tch === '\u{0E36}') {
			output += rch + 'ṃ';
		} else {
			output += rch;
			if(index < input.length-1) {
				if(input[index+1] === thaiBindu) {
					skipFlag = true;
				} else if(consonantMap[tch] !== undefined && tch !== '\u{0E4D}' && input[index+1] !== '\u{0E32}' && input[index+1] !== '\u{0E34}' && input[index+1] !== '\u{0E35}' && input[index+1] !== '\u{0E36}' && input[index+1] !== '\u{0E38}' && input[index+1] !== '\u{0E39}') {
					if(suspendedChar.length > 0) {
						output += suspendedChar;
						suspendedChar = "";
					} else {
						output += 'a';
					}
				}
			} else {
				if(suspendedChar.length > 0) {
					output += suspendedChar;
					suspendedChar = "";
				} else {
					if(consonantMap[tch] !== undefined && tch !== '\u{0E4D}')
						output += 'a';
				}
			}			
		}
	}		
	return output;
}
function convertLetters() {
	const elmth = document.getElementById("thaipali");
	const elmrm = document.getElementById("romanpali");
	elmrm.value = thaiToRoman(elmth.value, true);
}
function clearInput() {
	document.getElementById("thaipali").value = "";
	document.getElementById("romanpali").value = "";
}
function copyResult() {
	const elmrm = document.getElementById("romanpali");
	window.navigator.clipboard.writeText(elmrm.value);
}
</script>
