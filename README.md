# Canberra Modern Theme - Tailwind CSS version

The basic bones of this theme have been created by Ben Ennis Butler as a starting point for students studying front-end web design (11056).

This version has been set up to use TailwindCSS.

## Built upon
There are quite a few things in use in order to get this to work:

### TailwindCSS v3.4.1
Tailwind is a utility-first CSS framework
[Tailwind Docs](https://tailwindcss.com/docs/)

### Timber Starter Theme
The "_s" for Timber: a dead-simple theme that you can build from. The primary purpose of this theme is to provide a file structure rather than a framework for markup or styles. [Starter Theme](https://travis-ci.com/github/timber/starter-theme)

### Twig
Timber uses Twig. Twig is a flexible and secure template engine for PHP used primarily in web development to separate the logic of the application from its presentation layer.
[Twig](https://twig.symfony.com/)

## Other Resources

* [Twig for Timber Cheatsheet](http://notlaura.com/the-twig-for-timber-cheatsheet/)
* [Timber and Twig Reignited My Love for WordPress](https://css-tricks.com/timber-and-twig-reignited-my-love-for-wordpress/) on CSS-Tricks
* [A real live Timber theme](https://github.com/laras126/yuling-theme).

# Reflection Saskia 

## Individual Contribution: 
For this project, I completed and focused on the home page, galleries and other css styling issues. My direction with the home page came from the figma prototype. We aimed to have a hero image, covering the entire page and the navigation. To do this, I had to first find out what link url of the images were inside the wordpress and tailwind integration. I inspected our site and found that the images were defined by the class "wp-block-image img".
* [Image Link](http://canberramodernlocal/wp-content/uploads/2022/08/rsw_1160-5-1200x300-c-default.webp)
From this, I made a class within the 'tailwind.css' file called 'hero'. This was done with the help with Ben in class. From the creation of this class, I proceeded to add different css styling. I ran into my first issue with this after I realised that to apply the hero class to the entire page, I would have to apply it to base.twig. This would have been an issue as it would have applied the hero image to every page. Except this was the only way I knew to apply the class, as I had to put it in the class above the navigation and the logo, to make it cover the entire page. So after troubleshooting, I made a duplicate base.twig, naming it base-background.twig. Within base-background.twig I then edited the page-home.twig to "{% extends "base-background.twig" %}". This enabled me to use it as a separate template and the changes to not apply to the other pages. 

I still encountered issues with this and found that the contrast of all the images embedded in the site did not work with our dark theme, with light text. So I used the classes "bg-black p-4 rounded-lg bg-opacity-65 md:rounded-md". This added a text box that was responsive and had opacity, to refrain from looking blocky and big. 

Apart from this, I also helped with the creation of the classes in the pure css template which allowed specific decoration of headings, images, paragraphs and elements that we couldn't see in the code. For example:

* .wp-block-image .figcaption  
font-size: 1.875rem; /* 30px */
line-height: 2.25rem; /* 36px */

*  .wp-block-image img 
 padding-bottom: 25px;
 padding-top: 25px;
 display: block;
 margin-left: auto;
 margin-right: auto; 

The text was embedded as a caption so I had to call on the image, then the class.




## Team Collaboration: 
For the delegation and distribution of tasks, we had to first understand that any changes multiple people were editing into the same page, would have serious merge issues. The merging of content did become a problem a few times throughout the initial build, when creating the nav and logo of the site, or when working on pages that affected multiple places. Regardless of our initial problems with the merging over overall elements, we moved on. Delegation looked like each of us separating and choosing two or three pages to work on. If we had issues on these pages or they affected others, we would communicate and then potentially swap pages or focus on one page as a group. This was always done after talking and sharing ideas so that there wasn’t overlap, but still implementing a team effort. I personally thought that there was a fair dividation of tasks between the three of us and that each of us was also doing content we were choosing, and more interested to do. Towards the end of the project we did focus on less singular work, instead discussing things as a team, then implementing and sharing photos and documentation of what the different code looked like. 

## References and resources:

# Reflection Forest

<h1><strong>Assessment 1: Responsive Design System</strong></h1>
<h1>Rationale Answers:</h1>
<p> <strong>By Forest</strong> </p>

<p> <strong>1.</strong> Throughout the project, I played a role by designing and implementing the events page, as well as the individual pages for each event. Additionally, I contributed to ensuring consistent alignment and visual coherence across various sections of the website. While reflecting on my contributions, I recognize areas where I could have improved, particularly in my initial struggle to fully leverage Tailwind CSS for styling. Despite my efforts to prototype using traditional CSS and HTML, I found myself grappling with adapting to Tailwind's inline style approach. This hindered my ability to achieve the desired aesthetics efficiently. I acknowledge the need for deeper immersion in Tailwind CSS tutorials and resources to enhance my proficiency. Furthermore, health issues and a demanding research unit impacted my availability towards the project's completion, limiting my contributions during crucial phases. </p>
<p> <strong>The events page:</strong> </p>


 	{% extends "index.twig" %}

	{% block content %}

	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 px-4">
    	{% for post in posts %}
    	<a href="{{ post.link }}" class="rounded overflow-hidden shadow-lg block hover:shadow-xl transition duration-300">
        	<div class="h-full">
            	{% set image_urls = post.content|split('src="') %}
            	{% set found_image = false %}
            	{% for image_url in image_urls %}
            	{% if loop.index > 1 and not found_image %}
            	{% set image_url = image_url|split('"')|first %}
            	<img class="w-full h-48 object-cover mr-3.5" src="{{ image_url }}" alt="{{ post.title }}">
            	{% set found_image = true %}
            	{% endif %}
            	{% endfor %}
            	<div class="px-6 py-4">
                	<div class="font-bold text-xl mb-2">{{ post.title }}</div>
                	<p class="text-gray-700 text-base">{{ post.description }}</p>
            	</div>
            	<div class="px-6 py-4">
                	<a href="{{ post.link }}" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ post.category }}</a>
            	</div>
        	</div>
    	</a>
    	{% endfor %}
	</div>

	{% include 'partial/pagination.twig' with { pagination: posts.pagination({show_all: false, mid_size: 3, end_size: 2}) } %}

	{% endblock %}


<p> <strong>The single events pages:</strong> </p>

	{% extends "base.twig" %}

	{% block content %}
	<div class="content-wrapper">
    	<div class="m-5 content-center text-center">
        	<article class="post-type-{{ post.post_type }}" id="post-{{ post.ID }}">
            	<div class="text-center">
                	<div class="image-wrapper">
                    	<a href="{{ post.url }}">
                        	<img src="{{ post.thumbnail.src|resize(1200, 300) }}" class="mx-auto">
                    	</a>
                	</div>
                	<section class="article-content">
                    	<h1 class="article-h1 text-5xl pb-8">
                        	<a href="{{ post.url }}">{{ post.title }}</a>
                    	</h1>
                    	<p class="blog-author text-2xl pt-8">
                        	<time datetime="{{ post.date|date('Y-m-d H:i:s') }}">{{ post.date }}</time>
                    	</p>
                    	<div class="article-body md:px-96">
                        	{{post.content}}
                    	</div>
                	</section>
            	</div>
        	</article>
    	</div>

    	<div class="debug p-8 bg-debug">
        	{# useful for debugging, delete later #}
        	<h1>Debug info</h1>

        	<p class="pb-4">post name:
            	{{post.name}}
        	</p>

        	<p>file name: single-events.twig</p>

        	{% endblock %}
	</div>


<p> <strong>The footer:</strong> </p>

	<div class="text-center">
    	<h1 class="text-5xl py-8 bg-gradient-to-r from-cyan-300 via-pink-400 to-yellow-400 inline-block text-transparent bg-clip-text">Thanks For Visiting!</h1>
	</div>
	<div class="text-center">
    	<p class="bg-gradient-to-r from-cyan-300 via-pink-400 to-yellow-400 inline-block text-transparent bg-clip-text md:px-96 md:text-center">
        	Produced by Saskia, Jonathan and Forest, students in the Faculty of Arts and Design, University of Canberra, 2024. In partnership with Canberra Modern.
    	</p>
	</div>


<p> <strong>2.</strong> The development process presented several challenges, notably in implementing the envisioned design elements for the events page. Implementing card-based layouts while integrating external images proved particularly hard and I still do not feel I have in any form mastered the art. Despite attempts to utilize resources like ChatGPT, and consulting others around me like dev group, my assignment team and friends I know have experience in the industry, completing my self-set requirements to a satisfactory remained a thus far unachievable obstacle. However, reconciling idealistic design aspirations with practical implementation within project constraints posed ongoing dilemmas. Ultimately, prioritizing functionality over elaborate aesthetics became imperative to meet project deadlines. </p>
<p> <strong>3.</strong> Our team demonstrated commendable collaboration throughout the project, fostering open communication and mutual support. Despite occasional setbacks, such as misunderstandings regarding individual responsibilities during absences, we maintained a cohesive approach. However, challenges arose from differing expectations regarding the pace of progress and project scope. For instance, misalignment in scheduling brainstorming sessions caused initial friction. Moving forward, clearer delineation of tasks, improved attendance to classes and online discussions, as well as proactive communication strategies could have further enhanced our team's efficiency in the future. Perhaps we could look back and implement such ideals. </p>
<p> <strong>4.</strong> In terms of resources for me personally: Collaboration with the team turned out to be my main source of help, when I got stuck I often found Saskia was good at finding the flaws in my code which I no longer saw after hours of staring at it. Beyond teamwork, the Tailwind CSS website served as a primary reference/resource for implementing styling elements within the project. While initially challenging to navigate, it provided essential guidance on learning and utilizing Tailwind effectively/efficiently. However, troubleshooting specific issues, such as gradient implementation, required additional experimentation and collaboration with team members. <a href="https://tailwindcss.com/" title="" target="_blank">https://tailwindcss.com/</a> In moments of uncertainty, ChatGPT offered assistance in formulating code queries and conceptualizing solutions. Despite it not being of much use due to my own limitations in properly articulating complex requirements I wanted it to help me achieve. <a href="https://chat.openai.com/" title="" target="_blank">https://chat.openai.com/</a> This was the site I used to get the gradient working as the regular tailwind cite code didn't work effectively for the inside of the text; it really only would have been useful for the background. <a href="https://design2tailwind.com/blog/tailwindcss-gradient-text/" title="" target="_blank">https://design2tailwind.com/blog/tailwindcss-gradient-text/</a> I did also reach out to the UC DEVS group in the discord server in hopes someone might be able to help me troubleshoot things like the link overflow alignment problem but none of them knew tailwind so it ended up being kinda a dead end to spite trying our best. <a href="https://clubs.canberra.edu.au/Clubs/UCDEVS" title="" target="_blank">https://clubs.canberra.edu.au/Clubs/UCDEVS</a> </p>

<p> <strong>References</strong> </p>
<p> UC Developers Engineers and Visionaries Society ( UC DEVS ) . (n.d.). Clubs.canberra.edu.au; UCX Ltd - UCX Clubs and Societies. Retrieved April 15, 2024, from https://clubs.canberra.edu.au/Clubs/UCDEVS 
<br>
Open AI. (2024, February 14). ChatGPT; (Model 3.5). https://chat.openai.com/ 
<br>
Tailwind CSS - Rapidly build modern websites without ever leaving your HTML. (2023). Tailwindcss.com; Tailwindcss. https://tailwindcss.com/ 
<br>
Vivian. (2022, August 29). How to do gradient text with Tailwind CSS. Design2Tailwind. https://design2tailwind.com/blog/tailwindcss-gradient-text/ </p>

# Reflection Jonathan

## Individual Contribution: Document individual contributions to the project, outlining specific tasks undertaken, any relevant code examples and personal growth.

## Issue Resolution: Discuss any challenges encountered during the development process and provide reflections on how these challenges were addressed. 

## Team Collaboration: Reflect on the effectiveness of team collaboration, communication, and the distribution of tasks among group members.

## References and resources: provide a briefly annotated list of resources that you found helpful while creating the website. 

