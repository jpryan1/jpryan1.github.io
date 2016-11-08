---
layout: page
title: Blog
permalink: /blog/
---

<ul class="listing">
<h3> Science/Programming </h3>
{% for post in site.posts %}
  {% if post.categories[0]!="Science/Programming" %}
    {% continue %}
  {% endif %}
  <li class="listing-item">
    <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
    <a href="{{ post.url | prepend: site.baseurl }}" title="{{ post.title }}">{{ post.title }}</a>
  </li>
{% endfor %}
<h3> Music </h3>
{% for post in site.posts %}
  {% if post.categories[0]!="Music" %}
    {% continue %}
  {% endif %}
  <li class="listing-item">
    <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
    <a href="{{ post.url | prepend: site.baseurl }}" title="{{ post.title }}">{{ post.title }}</a>
  </li>
{% endfor %}


</ul>
