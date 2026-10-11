---
title: Genre and theme index
navText: Genre
---

# Genre index

{% for genre in catalog.allGenres %}
 <h3 id="{{ genre | slugify }}">{{ genre }}</h3>
  <ul>
  {% for item in catalog.itemsByTitle %}
    {% if item.genreArray contains genre %}
       <li><a href="{{ item.Slug | url }}"><em>{{ item.Title }}</em></a> {% if item['Author for Title Index'] != "FALSE" %}by {{ item['Author for Title Index'] }} {% endif %}{% if item.Format == "Film" or item.Format == "Television series" or item.Format == "Musical release" or item.Format == "Podcast" or item.Format == "Videogame" %} ({{ item.Format | lowercase }}){% endif %}</li>
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}