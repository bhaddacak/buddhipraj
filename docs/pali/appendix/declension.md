---
layout: default
title: ตารางแปรรูปนาม
parent: ภาคผนวก
grand_parent: บาลีสำหรับคนรุ่นใหม่
nav_order: 20
last_modified_date: 2023-06-29 12:00:00 +0700
---

# {{ page.title }}แบบทดลอง
{: .no_toc }

{% include pali_input.html button="Compute" function="declHost.compute();" after_clear="declHost.fillTable(1);" placeholder="Type in Roman Pāli" %}
<div>
<span style="padding: 3px">
<label for="gendm"><input type="radio" id="gendm" name="gender-radio" value="m" onChange="declHost.compute();" checked> m.</label>&nbsp;
<label for="gendf"><input type="radio" id="gendf" name="gender-radio" value="f" onChange="declHost.compute();"> f.</label>&nbsp;
<label for="gendn"><input type="radio" id="gendn" name="gender-radio" value="n" onChange="declHost.compute();"> nt.</label>
</span>&nbsp;
<span><label for="forcegen"><input type="checkbox" id="forcegen" onChange="declHost.compute();"> Force generic</label></span>
<span class="label" id="wordclass" style="display:none;"></span><span class="label label-green" id="computed" style="display:none;">computed</span>
</div>

{% include decl_table.html number="1" %}

<script src="{{ site.jsassets_url }}/declprog.js"></script>

ส่วนนี้เป็นโปรแกรมสำหรับศึกษาการแปรรูปนาม ผู้ใช้สามารถป้อนคำในรูปพจนานุกรมแล้วโปรแกรมจะคำนวณตารางการแปรรูปให้โดยอัตโนมัติ ถ้าคำนั้นตรงกับคำสรรพนามที่ตั้งไว้ เช่น amha tumha ta เป็นต้น การแปรรูปจะใช้ของสรรพนาม (รวมทั้งตัวเลข 1--4) ถ้าคำอยู่ในกลุ่มของคำพิเศษเช่น mana rāja atta satthu kattu pitu mātu เป็นต้น การแปรรูปจะเป็นแบบพิเศษ และถ้าส่วนท้ายของคำเป็น -tar จะแปรรูปตามแบบของ kattu (มีเฉพาะ m.) ถ้าส่วนท้ายเป็น -ant (ไม่ใช่ -antu) จะแปรรูปตามแบบของ guṇavantu ถ้าเป็น -anta จะแปรรูปตาม gacchanta ถ้าเงื่อนไขไม่ตรงตามที่กล่าวมาถือว่าเป็นคำปกติ ในการคำนวณจะสนใจเพียงรูปคำเท่านั้น ฉะนั้นคำต่าง ๆ ที่ได้อาจจะไม่มีความหมายก็ได้

