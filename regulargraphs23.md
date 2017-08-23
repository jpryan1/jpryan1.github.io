---
layout: page
title: (2,3) Regular Graphs
permalink: /regulargraphs23
---

{% for image in site.static_files %}
  {% if image.path contains 'images/reg_graphs23/' %}
<figure><a href="{{image.path}}"><img style="width:400px;" src="{{image.path}}" />
</a></figure>
 {% endif %}
{% endfor %}

