---
layout: page
permalink: /projects/
title: Projects
pubs:

    - title:   "Counter-Rotation of 'Pancake' of Sliding Discs in a Swirling Environment"
      note:    "I am currently working with <a href='http://cims.nyu.edu/~holmes/'> Miranda Holmes-Cerfon </a> on a physical simulation of sliding discs inside a circular boundary which moves around in a circle (see the demo below). When a certain density of discs inside the boundary is achieved, an interesting 'counter-rotation' phenomenon occurs. Our goal is to understand intuitively why this takes place, and what are the main contributing factors (ie friction, speed, etc). This is a summer research project funded by the Courant Institute of Mathematical Sciences."
      image:   "/pic.png"
      media:
        - name: "Demo"
          url:  "https://www.youtube.com/watch?v=nCTWe_epuL8"
          
        
    - title:   "UAV Pursuit of a Moving Target"
      note:    "I am currently working with <a href='http://cims.nyu.edu/~holmes/'> Miranda Holmes-Cerfon </a> on a physical simulation of sliding discs inside a circular boundary which moves around in a circle (see the demo below). When a certain density of discs inside the boundary is achieved, an interesting 'counter-rotation' phenomenon occurs. Our goal is to understand intuitively why this takes place, and what are the main contributing factors (ie friction, speed, etc). This is a summer research project funded by the Courant Institute of Mathematical Sciences."
      image:   "/pic.png"
      media:
        - name: "Paper"
          url:  "/uav.pdf"
        - name: "Demo"
          url:  "https://www.youtube.com/watch?v=Ibve4-tSOPM"
        

---



{% assign thumbnail="left" %}

{% for pub in page.pubs %}
{% if pub.image %}
{% include image.html url=pub.image caption="" height="100px" align=thumbnail %}
{% endif %}
**{{pub.title}}**<br />
{{pub.note}} <br />
{% if pub.media %}<br />Media: {% for article in pub.media %}[[{{article.name}}]({{article.url}})]{% endfor %}{% endif %}

{% endfor %}
