---
title: Title index
navText: Title
---

# Title index

<ol>
{% for item in data %}
  <li><a href="{{ item['Slug'] | url }}">  {{ item['Title'] }}</a> {% if item['Author for Title Index'] != "FALSE" %}by {{ item['Author for Title Index'] }} {% endif %}({{ item['Year'] }})
  </li>
{% endfor %}
</ol>