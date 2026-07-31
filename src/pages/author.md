---
title: Author and creator index
navText: Author
---

# Author and creator index

<ul>
{% for item in catalog.itemsByAuthor %}
  <li>{{ item["Author for Author Index"] }} - <a href="{{ item['Slug'] | url }}"><em>{{ item["Title"] }}</em></a></li>
{% endfor %}
</ul>