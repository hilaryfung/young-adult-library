---
title: Home
layout: base.njk
templateEngineOverride: njk, md
---

<main class="constrained">

#### Welcome to

<h1 class="blog-title">The California Teen Library</h1>

### A collection of books, movies, shows, and more for young adults who are curious about the world.

#### Explore by
<nav class="homepage__nav constrained">
{%- for page in collections.pages -%}
  <a class="button--large button-{{ loop.index }}" href="{{ page.url | url }}">{{ page.data.navText }}</a>
{%- endfor -%}
</nav>

## About the collection
I created this miniature library of 27 works for Lisa Houde’s Young Adult Materials course at San José State University. But I also created this library for every teenager who’s curious about the world and wants to understand their place in it.

With Bay Area teens in mind, I selected titles set in <a href="{{ '/estela-undrowning/' | url }}">San Francisco</a> and <a href="{{ '/accountable/' | url }}">Albany, California</a> high schools, plus a <a href="{{ '/victory-stand/' | url }}">graphic memoir</a> that illuminates a slice of San Jose history. I chose <a href="{{ '/few-blue-skies/' | url }}">_Few Blue Skies_</a> and <a href="{{ '/catalog-of-burnt-objects/' | url }}">_A Catalog of Burnt Objects_</a> because they address climate emergencies that have acute effects on California communities. 

The state is home to many diasporas, and for this reason, I selected several works related to migration. <a href="{{ '/everything-we-never-had/' | url }}">_Everything We Never Had_</a> tells a story of Filipino farmworkers in 1960s California, <a href="{{ '/venba/' | url }}">_Venba_</a> of a Tamil family in Toronto, and <a href="{{ '/high-spirits/' | url }}">_High Spirits_</a> of Dominican families in New York. Of course, California is also home to Indigenous peoples, including the Pomo, Miwok, Yokuts, Chumash, and many more (Castillo, n.d.). The podcast <a href="{{ '/all-my-relations/' | url }}">_All My Relations_</a> covers contemporary Native life, and <a href="{{ '/this-place/' | url }}">_This Place: 150 Years Retold_</a> shows us the history of settler colonization in Canada.

Because today’s world is so globally connected, I chose titles set outside the United States for half of the collection. Read, watch, and listen your way through this library, and you’ll travel from <a href="{{ '/libertad/' | url }}">Honduras</a> to <a href="{{ '/baddawi/' | url }}">Lebanon</a>, <a href="{{ '/black-burns-fast/' | url }}">South Africa</a> to <a href="{{ '/how-to-make-millions-before-grandma-dies/' | url }}">Thailand</a>. I chose primarily works that were created for a young adult audience, but a few are adult works that I found to be appropriate for, and of interest to, older teens. Finally, I aimed for a diversity of genres and characters, including stories of <a href="{{ '/i-want-to-be-a-wall/' | url }}">asexual</a>, <a href="{{ '/luis-ortega-survival-club/' | url }}">autistic</a>, and <a href="{{ '/light-from-uncommon-stars/' | url }}">transgender</a> teens who have historically been underrepresented in libraries. 

I hope every reader finds someone like them in this collection, whether it’s because they share an identity, a homeland, an experience, or a dream.

## About the librarian
<div class="flexbox">
  <figure>
    <img src="{{ '/images/hilary.jpg' | url }}" class="flexbox__image">
  </figure>
  <p>My name is Hilary, and I’m a student living in Oakland, California. I grew up in the suburbs of Chicago reading <em>The House On Mango Street</em> and <em>The Baby-Sitters Club</em>. I worked as a journalist and visual designer for ten years before starting graduate school. Thank you for visiting my library!
  </p>
</div>

## Reflection
What a summer. I’m grateful to have read a recent selection of young adult books, which are much more diverse than the ones I had access to as a teen. As I worked my way through these novels, podcasts, movies, and shows, I saw myself in many of the stories, but I also ventured into territory that I didn’t really know. I learned about big problems that teens face today — issues like climate change, authoritarianism, and social media extremism — and I enjoyed music and video games that I never would have found, if not for this project.

In building out this blog, one of my favorite tasks was researching the authors and artists. So many of them put their life experiences — their full souls — into their work. Engaging with Sonido Reyes’ honesty, Sandulela Asanda’s humor, Carolina Ixta’s research, and Leila Abdelrazaq’s artistry, I found renewed inspiration and hope. Maybe I “came of age” a bit this summer, too.

## References
Castillo, E. D. (n.d.). _California Indian History._ California Native American Heritage Commission. Retrieved June 14, 2026, from [https://nahc.ca.gov/native-americans/california-indian-history/](https://nahc.ca.gov/native-americans/california-indian-history/)

</main>
