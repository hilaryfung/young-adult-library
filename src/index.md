---
title: My Young Adult Library
layout: base.njk
---

# Hilary’s Young Adult Library

<ul>
{% for post in collections.posts %}
<li><a href="{{ post.url | url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>