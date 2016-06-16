---
layout: page
permalink: /projects/
title: Projects
pubs:

    - title:   "Counter-rotation of 'Pancake' of Sliding Discs in Swirling Environment"
      note:    "GGG"
      image:   "/robpic.png"
      media:
        - name: "Demo"
          url:  "https://www.youtube.com/watch?v=YYbzUEXy2Sk&feature=youtu.be"

---



{% assign thumbnail="left" %}

{% for pub in page.pubs %}
{% if pub.image %}
{% include image.html url=pub.image caption="" height="100px" align=thumbnail %}
{% endif %}
**{{pub.title}}**<br />
pub.note <br />
{% if pub.media %}<br />Media: {% for article in pub.media %}[[{{article.name}}]({{article.url}})]{% endfor %}{% endif %}

{% endfor %}
