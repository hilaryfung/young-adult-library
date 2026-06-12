---
title: My first page edited
layout: base.njk
---

# Genre index

{% for genre in genres %}
  <p>{{ genre }}</p>
{% endfor %}