---
title: Genre and theme index
navText: Genre
---

# Genre index

## Books

{% for genre in catalog.bookGenres %}
 <h3>{{ genre }}</h3>
  <ul>
  {% for item in catalog.itemsByTitle %}
    {% if item.genreArray contains genre %}
      {% if item.Format == "Book" or item.Format == "Graphic novel" or item.Format == "Audiobook" %}
       <li><a href="{{ item.Slug | url }}">{{ item.Title }}</a> {% if item['Author for Title Index'] != "FALSE" %}by {{ item['Author for Title Index'] }} {% endif %}</li>
      {% endif %}
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}

## Audiovisual media

{% for genre in catalog.audioVisualGenres %}
 <h3>{{ genre }}</h3>
  <ul>
  {% for item in catalog.itemsByTitle %}
    {% if item.genreArray contains genre %}
      {% if item.Format != "Book" and item.Format != "Graphic novel" and item.Format != "Audiobook" %}
        <li><a href="{{ item.Slug | url }}">{{ item.Title }}</a> {% if item['Author for Title Index'] != "FALSE" %}by {{ item['Author for Title Index'] }} {% endif %}</li>
      {% endif %}
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}