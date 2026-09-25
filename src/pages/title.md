---
title: Title index
navText: Title
---

# Title index

<ol>
{% for item in catalog.itemsByTitle %}
  <li><a href="{{ item['Slug'] | url }}"><em>{{ item['Title'] }}</em></a> {% if item['Author for Title Index'] != "FALSE" %}by {{ item['Author for Title Index'] }} {% endif %}({{ item['Year'] }})
  </li>
{% endfor %}
</ol>