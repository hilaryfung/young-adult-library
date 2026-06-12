---
title: My first page edited
layout: base.njk
---

## Blog Posts

<ul>
{% for post in collections.posts %}
<li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>