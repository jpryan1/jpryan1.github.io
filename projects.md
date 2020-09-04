---
layout: page
permalink: /projects/
title: Projects
pubs:
   
    - title:   "UAV Pursuit of a Moving Target"
      note:    "This was a group project for my Robotics class at NYU, and my group members were Andrew Klingelhofer and Jacqui Abalo. We passed video from a flying Parrot Bebop 2.0 drone through the object tracking program described in <a href='http://www.gnebehay.com/publications/wacv_2014/wacv_2014.pdf'> this </a> paper to track the clothing of a person in front of the drone. We then passed the results of the object tracking program through a Kalman Filter, and, based on these filtered results, issued commands to the drone to navigate so as to keep the object in view. The hardest part was getting video feed from the drone to the computer! More details are in the paper."
      image:   "/images/uav1.png"
      media:
        - name: "Paper"
          url:  "/documents/uav.pdf"
        - name: "Demo"
          url:  "https://www.youtube.com/watch?v=Ibve4-tSOPM"
        - name: "Source"
          url: "https://github.com/jpryan1/uav-pursuit"
          
        
    - title:   "Stress Detection Using Techniques From Computer Vision"
      note:    "This was a project for my Social Networks class at NYU. The program finds the user's mouth using Haar Cascade Classification, and then identifies the crease of the lips by convolving with certain Morlet Wavelets and identifying noisy regions (more details in the paper). Ultimately, the curvature of the lips is compared against a learned threshold (depending on the person), and the stress level of the user is evaluated. The ultimate goal is this: to alert desk-dwelling employees when they should take a break from their work and have a walk!"
      image:   "/images/stress1.png"
      media:
        - name: "Paper"
          url:  "/documents/stress.pdf"
        - name: "Demo"
          url:  "https://www.youtube.com/watch?v=WGSRE9fRaE0"
        - name: "Source"
          url: "https://github.com/jpryan1/stress-test"
          
        
    - title:   "Cinema Information Retrieval from Wikipedia"
      note:    "In this project, I explored various methods for information retrieval from a text corpus and how they compare when used to find the common link between several elements of a query. I did so with several experiments on a corpus of Wikipedia articles on movies and actors in cinema. This was my first project as a CS major, and I spent the majority of the time learning to write a program to scrape the Wiki articles!"
      image:   "/images/cinema1.png"
      media:
        - name: "Paper"
          url:  "/documents/cinema.pdf"
        - name: "Source"
          url: "https://github.com/jpryan1/cinema-info"
          
        
    - title:   "Web PGN-based Chess Visualizer"
      note:    "As a toy project, I developed a visualizer for chess games based on their portable game notation (typically provided by, for example, chess.com and lichess.org) on my personal website. I found it a fun way to begin to learn JavaScript and explore the considerations that go into computer chess games. My original idea was to eventually write a simple engine to play against, but I've since decided to explore writing bots for other games (in particular, where there is an active approachable competitive engine scene). You can upload a PGN to see it at the below link (barring some things I haven't implemented like promotion), or click 'Example' to see Bobby Fischer's 'Game of the Century.' Pay no attention to the source code, it is that of a John long ago just learning how to program :)."
      image:   "/images/pgn.png"
      media:
        - name: "PGN Viewer"
          url:  "/pgn-viewer"
          
          
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
