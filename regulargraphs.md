---
layout: page
title: (2,4) Regular Graphs
permalink: /regulargraphs
---

{% for image in site.static_files %}
  {% if image.path contains 'images/reg_graphs/' %}
<div style="text-align:center;"><figure><a href="{{image.path}}"><img style="width:400px;" src="{{image.path}}" />
</a></figure></div>
 {% endif %}
{% endfor %}

