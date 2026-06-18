---
title: Home
layout: base.njk
templateEngineOverride: njk, md
---

<main class="constrained">

#### Welcome to

<h1>The California Teen Library</h1>

### A collection of books, movies, shows, and more for young adults who are curious about the world.

#### Explore by
<nav class="homepage__nav constrained">
{%- for page in collections.pages -%}
  <a class="button--large" href="{{ page.url | url }}">{{ page.data.navText }}</a>
{%- endfor -%}
</nav>

## About the collection
I created this miniature library of 30 works for Lisa Houde’s Young Adult Materials course at San José State University. But I also created this library for every teenager who’s curious about the world and wants to understand their place in it.

With Bay Area teens in mind, I selected titles set in San Francisco and Albany, CA high schools, plus a <a href="{{ '/victory-stand/' | url }}">graphic memoir</a> that illuminates a slice of San Jose history. I chose _Few Blue Skies_ and _A Catalog of Burnt Objects_ because they address climate emergencies that have acute effects on California communities. 

The state is home to many diasporas, and for this reason, I selected several titles related to migration. _Everything We Never Had_ tells a story of Filipino farmworkers in 1960s California, _Together We See_ of a Bribri American teen visiting her ancestral Costa Rica, and _High Spirits_ of Dominican families in New York. Of course, California is also home to many indigenous peoples, including the Pomo, Miwok, Yokuts, Chumash, and many more (Castillo, n.d.). Though I couldn’t fit a title about California’s native tribes into the collection, I hope _This Place: 150 Years Retold_ helps readers grapple with the ongoing settler colonization of North America.

Because today’s world is so globally connected, I chose titles set outside the United States for half of the collection. Read, watch, and listen your way through this library, and you’ll travel from Haiti to Lebanon, South Africa to Japan. I chose primarily works that were created for a young adult audience, but a few are adult works that I found to be appropriate for, and of interest to, older teens. Finally, I aimed for a diversity of genres and characters, including stories of <a href="{{ '/luis-ortega-survival-club/' | url }}">autistic</a>, asexual, and <a href="{{ '/light-from-uncommon-stars/' | url }}">transgender</a> teens. I hope every reader finds someone like them in this collection, whether it’s because they share an identity, a homeland, an experience, a feeling, or a dream.

## About the librarian
<div class="flexbox">
  <figure>
    <img src="{{ '/images/hilary.jpg' | url }}" class="flexbox__image">
  </figure>
  <p>My name is Hilary, and I’m a student living in Oakland, CA. I grew up in the suburbs of Chicago reading <em>The House On Mango Street</em> and <em>The Baby-Sitters Club</em>. I worked as a journalist and visual designer for ten years before starting graduate school. Thank you for visiting my library!
  </p>
</div>

## Reflection
Coming soon!

## Works cited
Castillo, E. D. (n.d.). _California Indian History._ California Native American Heritage Commission. Retrieved June 14, 2026, from [https://nahc.ca.gov/native-americans/california-indian-history/](https://nahc.ca.gov/native-americans/california-indian-history/)

</main>