---
layout: default
title: พจนานุกรม
parent: ภาคผนวก
grand_parent: บาลีสำหรับคนรุ่นใหม่
nav_order: 10
last_modified_date: 2023-06-15 12:00:00 +0700
---

# {{ page.title }}
{: .no_toc }

พจนานุกรมบาลี-อังกฤษ (New Concise Pali-English Dictionary) เรียบเรียงโดย [SuttaCentral](https://suttacentral.net) จาก Concise Pali-English Dictionary ฉบับเดิมของพุทธทัตตะมหาเถระโดยปรับปรุงแก้ไขเพิ่มเติมจาก Dictionary of Pali ของ Margaret Cone จากนั้นผู้จัดทำนำมาดัดแปลงเล็กน้อย

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
<input type="text" id="textinput" placeholder="Search for ..." size="34">&nbsp;<span class="fs-3"><button class="btn" onClick="wordClear();">Clear</button>&nbsp;<button class="btn" onClick="search();">Search</button></span>
</div>
<div>
<span><input type="checkbox" id="showdetails" onChange="search();">&nbsp;<label for="showdetails">Show details</label>&nbsp;&nbsp;<input type="checkbox" id="findindef" onChange="search();">&nbsp;<label for="findindef">Search in definitions</label></span>&nbsp;
<span class="label" id="wordcount" style="display:none;"></span>&nbsp;
<span class="label label-yellow" id="searching" style="display:none;">Searching ...</span>
</div>
<p id="dictresult"></p>
<script>
let ncped_url = "{{ site.ncped_url }}";
let blockquote_class = "remark";
</script>
<script src="{{ site.jsassets_url }}/ncped.js"></script>
