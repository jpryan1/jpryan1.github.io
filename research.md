---
layout: page
permalink: /research/
title: Research
pubs:

    - title:   "Parallel Skeletonization for Integral Equations in Evolving Multiply-Connected Domains"
      author:  "John Paul Ryan and Anil Damle"
      journal: "Submitted"
      note:    ""
      year:    ""
      url:     "https://arxiv.org/abs/2001.11619"
      doi:     ""
      image:   "/images/parskel.png"

    - title:   "Geometric frustration induces the transition between rotation and counterrotation in swirled granular media"
      author:  "Lisa M. Lee, John Paul Ryan, Yoav Lahini, Miranda Holmes-Cerfon, and Shmuel M. Rubinstein"
      journal: "Physical Review E"
      note:    ""
      year:    "(2019)"
      url:     "https://journals.aps.org/pre/abstract/10.1103/PhysRevE.100.012903"
      doi:     ""
      image:   "/images/counterrotate.png"

    - title:   "Path Planning for Simple Robots using Soft Subdivision Search"
      author:  "Ching-Hsiang Hsu, John Paul Ryan, and Chee Yap"
      journal: "32nd International Symposium on Computational Geometry"
      note:    ""
      year:    "(2016)"
      url:     "http://drops.dagstuhl.de/opus/frontdoor.php?source_opus=5960"
      doi:     ""
      image:   "/images/robpic.png"
      media:
        - name: "Demo"
          url:  "https://www.youtube.com/watch?v=YYbzUEXy2Sk&feature=youtu.be"

    - title:   "Coloring Blocks of Consecutive Integers to Forbid Three Distances"
      author:  "John Paul Ryan"
      journal: "Geombinatorics"
      note:    ""
      year:    "(2016)"
      url:     "/documents/color.pdf"
      doi:     ""
      image:   "/images/graph.png"

    - title:   "Theoretical Friends of Finite Proximity"
      author:  "Edna Jones and John Paul Ryan"
      journal: "International Journal of Mathematics and Computer Science"
      note:    ""
      year:    "(2015)"
      url:     "http://ijmcs.future-in-tech.net/10.2/R-Jones-Ryan.pdf"
      doi:     ""
      image:   "/images/math.png"

   
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
 *{{pub.year}}* <br />
{% if pub.media %}Media: {% for article in pub.media %}[[{{article.name}}]({{article.url}})]{% endfor %}
{% endif %}
 <br />
{% endfor %}

