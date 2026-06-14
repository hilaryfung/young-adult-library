---
title: The California Teen Library
layout: base.njk
templateEngineOverride: njk, md
---

<h3>Welcome to</h3>
<h1>{{ title }}</h1>
<p>A collection of books, movies, shows, and more for young adults who are curious about the world. </p>

<h3>Explore by</h3>
<nav class="homepage__nav constrained">
{%- for page in collections.pages -%}
  <a class="button--large" href="{{ page.url | url }}">{{ page.data.navText }}</a>
{%- endfor -%}
</nav>

<h3>About the collection</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia eros sed iaculis scelerisque. In at semper tellus. Proin rhoncus nunc at justo condimentum, et elementum sem rutrum. Curabitur nisl sem, faucibus at tempus sed, ultricies quis ipsum. Morbi pulvinar egestas erat. Nunc ullamcorper pretium mollis. In dignissim placerat nunc, eu gravida leo accumsan aliquam. Curabitur sed metus ut augue finibus rhoncus eu non orci. Praesent non mollis risus. Proin tincidunt varius convallis. Etiam commodo enim sit amet nunc posuere, eu iaculis ipsum lacinia. Vivamus vel tempus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>

<h3>About the librarian</h3>
<p>Curabitur varius diam nec nibh malesuada, nec auctor purus sagittis. Phasellus a purus vestibulum sapien accumsan faucibus nec nec justo. Aenean tempor bibendum lectus, vel aliquam nisi elementum et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam ornare ligula metus, id efficitur erat dignissim at. Proin ut erat iaculis, vestibulum lorem at, ultricies lectus. Cras gravida ut lacus eu commodo. Maecenas quis sagittis ante. Donec leo mi, dapibus sit amet leo eget, placerat viverra justo. Nam posuere erat ac ipsum convallis, et varius ante molestie. Aenean at mi non risus fermentum blandit et id mi. Suspendisse potenti. Suspendisse potenti. Maecenas porta vitae urna nec viverra. Phasellus dignissim diam et mi sodales ultricies. </p>

<h3>Reflections</h3>
<p>Coming soon!</p>

<ul>
{% for post in collections.posts %}
  <li><a href="{{ post.url | url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>