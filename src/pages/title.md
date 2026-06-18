---
title: Title Index
navText: Title
---

# Title index

<ol>
{% for post in collections.posts %}
  <li><a href="{{ post.url | url }}">{{ post.data.title }}</a> by {{ post.data.author }} ({{ post.data.publicationYear }})</li>
{% endfor %}
</ol>