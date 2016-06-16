---
layout: page
permalink: /research/
title: Research
pubs:

    - title:   "Path Planning for Simple Robots using Soft Subdivision Search"
      author:  "Ching-Hsiang Hsu, John Paul Ryan, and Chee Yap"
      journal: "32nd International Symposium on Computational Geometry"
      note:    ""
      year:    "(2016)"
      url:     "http://drops.dagstuhl.de/opus/frontdoor.php?source_opus=5960"
      doi:     ""
      image:   "/robpic.png"
      media:
        - name: "Demo"
          url:  "https://www.youtube.com/watch?v=YYbzUEXy2Sk&feature=youtu.be"

    - title:   ""Coloring Blocks of Consecutive Integers to Forbid Three Distances"
      author:  "John Paul Ryan"
      journal: "Geombinatorics"
      note:    ""
      year:    "(2016)"
      url:     "/color.pdf"
      doi:     ""
      image:   "/graph.png"
      

   
---

## Publications

{% assign thumbnail="left" %}

{% for pub in page.pubs %}
{% if pub.image %}
{% include image.html url=pub.image caption="" height="100px" align=thumbnail %}
{% endif %}
[**{{pub.title}}**]({% if pub.internal %}{{pub.url | prepend: site.baseurl}}{% else %}{{pub.url}}{% endif %})<br />
{{pub.author}}<br />
*{{pub.journal}}*
 *{{pub.year}}* 
{% if pub.media %}<br />Media: {% for article in pub.media %}[[{{article.name}}]({{article.url}})]{% endfor %}{% endif %}

{% endfor %}
