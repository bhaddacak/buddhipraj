---
layout: default
title: พจนานุกรม
parent: ภาคผนวก
grand_parent: บาลีสำหรับคนรุ่นใหม่
nav_order: 10
last_modified_date: 2023-06-24 12:00:00 +0700
---

# {{ page.title }}
{: .no_toc }

พจนานุกรมบาลี-อังกฤษ (New Concise Pali-English Dictionary) เรียบเรียงโดย [SuttaCentral](https://suttacentral.net) จาก Concise Pali-English Dictionary ฉบับเดิมของพุทธทัตตะมหาเถระโดยปรับปรุงแก้ไขเพิ่มเติมจาก Dictionary of Pali ของ Margaret Cone จากนั้นผู้จัดทำนำมาดัดแปลงเล็กน้อย

{% include pali_input.html button="Search" function="search();" after_clear="clearResult();" placeholder="Search for ..." %}
{% include dict_components.html %}
<script>
let ncped_url = "{{ site.ncped_url }}";
let blockquote_class = "remark";
</script>
<script src="{{ site.jsassets_url }}/dictcommon.js"></script>
<script src="{{ site.jsassets_url }}/ncped.js"></script>
<script>
dict = ncped;
</script>
