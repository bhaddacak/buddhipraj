---
layout: default
title: พจนานุกรม
parent: ภาคผนวก
grand_parent: บาลีสำหรับคนรุ่นใหม่
nav_order: 10
last_modified_date: 2023-08-08 12:00:00 +0700
---

# {{ page.title }}
{: .no_toc }

พจนานุกรมบาลี-อังกฤษ (New Concise Pali-English Dictionary) เรียบเรียงโดย [SuttaCentral](https://suttacentral.net) จาก Concise Pali-English Dictionary ฉบับเดิมของพุทธทัตตะมหาเถระโดยปรับปรุงแก้ไขเพิ่มเติมจาก Dictionary of Pali ของ Margaret Cone จากนั้นผู้จัดทำนำมาดัดแปลงเล็กน้อย

{% include pali_input.html button="Search" function="ncpedHost.search();" after_clear="ncpedHost.clearResult();" placeholder="Search for ..." %}
{% include dict_components.html %}
<script src="{{ site.jsassets_url }}/bcutil.js"></script>
<script src="{{ site.jsassets_url }}/ncpedhost.js"></script>
<script src="{{ site.jsassets_url }}/ncped.js"></script>
<script>
ncped.url = "{{ site.ncped_url }}";
ncped.util = bcUtil;
ncpedHost.util = bcUtil;
ncpedHost.dict = ncped;
ncpedHost.blockquote_class = "remark";
ncpedHost.paliInput = paliInput;
</script>
