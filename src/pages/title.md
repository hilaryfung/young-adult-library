---
title: Title Index
navText: Title
---

# Title index

<ol>
{% for post in collections.postsByTitle %}
  <li><a href="{{ post.url | url }}"><em>{{ post.data.title }}</em></a> {% if post.data.author != false %}by {{ post.data.author }} {% endif %}({{ post.data.publicationYear }})</li>
{% endfor %}
</ol>
