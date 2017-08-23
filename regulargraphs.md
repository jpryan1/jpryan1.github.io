---
layout: page
title: (2,4) Regular Graphs
permalink: /regulargraphs
---
<style>
p{display:inline;}
</style>

{% for image in site.static_files %}
  {% if image.path contains 'images/reg_graphs/' %}
 <a href="{{image.path}}"><img style="width:400px;" src="{{image.path}}" />
</a>
 {% endif %}
{% endfor %}
