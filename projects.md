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
        - name: "Source"
          url: "https://github.com/jpryan1/rolling-spheres"
          
        
    - title:   "UAV Pursuit of a Moving Target"
      note:    "This was a group project for my Robotics class at NYU, and my group members were Andrew Klingelhofer and Jacqui Abalo. We passed video from a flying Parrot Bebop 2.0 drone through the object tracking program described in <a href='http://www.gnebehay.com/publications/wacv_2014/wacv_2014.pdf'> this </a> paper to track the clothing of a person in front of the drone. We then passed the results of the object tracking program through a Kalman Filter, and, based on these filtered results, issued commands to the drone to navigate so as to keep the object in view. The hardest part was getting video feed from the drone to the computer! More details are in the paper."
      image:   "/uav1.png"
      media:
        - name: "Paper"
          url:  "/uav.pdf"
        - name: "Demo"
          url:  "https://www.youtube.com/watch?v=Ibve4-tSOPM"
        - name: "Source"
          url: "https://github.com/jpryan1/uav-pursuit"
          
        
    - title:   "Stress Detection Using Techniques From Computer Vision"
      note:    "This was a project for my Social Networks class at NYU. The program finds the user's mouth using Haar Cascade Classification, and then identifies the crease of the lips by convolving with certain Morlet Wavelets and identifying noisy regions (more details in the paper). Ultimately, the curvature of the lips is compared against a learned threshold (depending on the person), and the stress level of the user is evaluated. The ultimate goal is this: to alert desk-dwelling employees when they should take a break from their work and have a walk!"
      image:   "/stress1.png"
      media:
        - name: "Paper"
          url:  "/stress.pdf"
        - name: "Demo"
          url:  "https://www.youtube.com/watch?v=WGSRE9fRaE0"
        - name: "Source"
          url: "https://github.com/jpryan1/stress-test"
          
        
    - title:   "Cinema Information Retrieval from Wikipedia"
      note:    "In this project, I explored various methods for information retrieval from a text corpus and how they compare when used to find the common link between several elements of a query. I did so with several experiments on a corpus of Wikipedia articles on movies and actors in cinema. This was my first project as a CS major, and I spent the majority of the time learning to write a program to scrape the Wiki articles!"
      image:   "/cinema1.png"
      media:
        - name: "Paper"
          url:  "/cinema.pdf"
        - name: "Source"
          url: "https://github.com/jpryan1/cinema-info"
---



{% assign thumbnail="left" %}

{% for pub in page.pubs %}
{% if pub.image %}
{% include image.html url=pub.image caption="" height="100px" align=thumbnail %}
{% endif %}
**{{pub.title}}**<br />
{{pub.note}} <br />
{% if pub.media %}{% for article in pub.media %}[[{{article.name}}]({{article.url}})]{% endfor %}{% endif %}

{% endfor %}
