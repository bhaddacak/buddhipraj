---
layout: default
title: ตารางแปรรูปนาม
parent: ภาคผนวก
grand_parent: บาลีสำหรับคนรุ่นใหม่
nav_order: 20
last_modified_date: 2023-06-15 12:00:00 +0700
---

# {{ page.title }}แบบทดลอง
{: .no_toc }

<div>
<span class="fs-2">
<button class="btn" onClick="insertChar('ā');">ā</button>&nbsp;
<button class="btn" onClick="insertChar('ī');">ī</button>&nbsp;
<button class="btn" onClick="insertChar('ū');">ū</button>&nbsp;
<button class="btn" onClick="insertChar('ṅ');">ṅ</button>&nbsp;
<button class="btn" onClick="insertChar('ñ');">ñ</button>&nbsp;
<button class="btn" onClick="insertChar('ṭ');">ṭ</button>&nbsp;
<button class="btn" onClick="insertChar('ḍ');">ḍ</button>&nbsp;
<button class="btn" onClick="insertChar('ṇ');">ṇ</button>&nbsp;
<button class="btn" onClick="insertChar('ḷ');">ḷ</button>&nbsp;
<button class="btn" onClick="insertChar('ṃ');">ṃ</button>&nbsp;
</span>
</div>
<div style="padding: 3px">
<input type="text" id="wordinput" placeholder="Type in Roman Pāli" size="34">&nbsp;<span class="fs-3"><button class="btn" onClick="wordClear();">Clear</button>&nbsp;<button class="btn" onClick="compute();">Compute</button></span>
</div>
<div>
<span style="padding: 3px">
<input type="radio" id="gendm" name="gender-radio" value="m" onChange="compute();" checked><label for="gendm">masculine</label>&nbsp;
<input type="radio" id="gendf" name="gender-radio" value="f" onChange="compute();"><label for="gendf">feminine</label>&nbsp;
<input type="radio" id="gendn" name="gender-radio" value="n" onChange="compute();"><label for="gendn">neuter</label>
</span>&nbsp;
<span><input type="checkbox" id="forcegen" onChange="compute();"><label for="forcegen">Force generic</label></span>&nbsp;
<span class="label" id="wordclass" style="display:none;"></span>
<span class="label label-green" id="computed" style="display:none;">computed</span>
</div>

{% include decl_table.html number="1" %}

<script src="{{ site.jsassets_url }}/declprog.js"></script>

ส่วนนี้เป็นโปรแกรมสำหรับศึกษาการแปรรูปนาม ผู้ใช้สามารถป้อนคำในรูปพจนานุกรมแล้วโปรแกรมจะคำนวณตารางการแปรรูปให้โดยอัตโนมัติ ถ้าคำนั้นตรงกับคำสรรพนามที่ตั้งไว้ เช่น amha tumha ta เป็นต้น การแปรรูปจะใช้ของสรรพนาม (รวมทั้งตัวเลข 1--4) ถ้าคำอยู่ในกลุ่มของคำพิเศษเช่น mana rāja atta satthu kattu pitu mātu เป็นต้น การแปรรูปจะเป็นแบบพิเศษ และถ้าส่วนท้ายของคำเป็น -tar จะแปรรูปตามแบบของ kattu (มีเฉพาะ m.) ถ้าส่วนท้ายเป็น -ant (ไม่ใช่ -antu) จะแปรรูปตามแบบของ guṇavantu ถ้าเป็น -anta จะแปรรูปตาม gacchanta ถ้าเงื่อนไขไม่ตรงตามที่กล่าวมาถือว่าเป็นคำปกติ ในการคำนวณจะสนใจเพียงรูปคำเท่านั้น ฉะนั้นคำต่าง ๆ ที่ได้อาจจะไม่มีความหมายก็ได้

