---
title: Format and medium index
navText: Format
---

# Format index

## Books

<ul>
{% for item in catalog.itemsByTitle %}
  {% if item.Format == "Book" %}
    <li><a href="{{ item.Slug | url }}"><em>{{ item.Title }}</em></a> by {{ item["Author for Title Index"] }}</li>
  {% endif %}
{% endfor %}
</ul>

### Audiobooks

<ul>
{% for item in catalog.itemsByTitle %}
  {% if item.Format == "Audiobook" %}
    <li><a href="{{ item.Slug | url }}"><em>{{ item.Title }}</em></a> by {{ item["Author for Title Index"] }}</li>
  {% endif %}
{% endfor %}
</ul>

### Graphic novels

<ul>
{% for item in catalog.itemsByTitle %}
  {% if item.Format == "Graphic novel" %}
    <li><a href="{{ item.Slug | url }}"><em>{{ item.Title }}</em></a> by {{ item["Author for Title Index"] }}</li>
  {% endif %}
{% endfor %}
</ul>

## Films

<ul>
{% for item in catalog.itemsByTitle %}
  {% if item.Format == "Film" %}
    <li><a href="{{ item.Slug | url }}"><em>{{ item.Title }}</em></a></li>
  {% endif %}
{% endfor %}
</ul>

## Musical releases

<ul>
{% for item in catalog.itemsByTitle %}
  {% if item.Format == "Musical release" %}
    <li><a href="{{ item.Slug | url }}"><em>{{ item.Title }}</em></a> by {{ item["Author for Title Index"] }}</li>
  {% endif %}
{% endfor %}
</ul>

## Podcasts

<ul>
{% for item in catalog.itemsByTitle %}
  {% if item.Format == "Podcast" %}
    <li><a href="{{ item.Slug | url }}"><em>{{ item.Title }}</em></a></li>
  {% endif %}
{% endfor %}
</ul>

## Television series

<ul>
{% for item in catalog.itemsByTitle %}
  {% if item.Format == "Television series" %}
    <li><a href="{{ item.Slug | url }}"><em>{{ item.Title }}</em></a></li>
  {% endif %}
{% endfor %}
</ul>

## Videogames

<ul>
{% for item in catalog.itemsByTitle %}
  {% if item.Format == "Videogame" %}
    <li><a href="{{ item.Slug | url }}"><em>{{ item.Title }}</em></a></li>
  {% endif %}
{% endfor %}
</ul>