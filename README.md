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

## Individual Contribution:
I was regularly involved throughout the whole project except nearing the last few days of some last minute code configurations. Knowing of my inconvenience for unavailibility during this time frame, I ensured I completed a share of work prior to this. My contributions mostly lie within the initial prototyping of the website in figma, and then coding the following pages; buildings, news and video pages, including their respective solo showcase and information pages. I was able to understand tailwind css quite quickly and was able to manipulate these pages into functional layouts. Other contributions would be just small quick edits on other pages for spacing or typographical issues. 

I enjoyed collaborating with other people for the initial design of the project as it pushed me to explore unique options for a website - one of those being dark mode which is something I adapted to for contrast and text mitigation for usability. I found it fun experimenting with new colour combinations and using tailwind css to retrieve colours that have been established.

One of the parts I enjoyed coding the most was the buildings gallery page. I did get stressed a couple time because the div boxes for each post wouldn't work correctly, but I was able to manipulate it so it's not just aesthetically pleasing, but also interactive. I used tailwind css hover features to change the colour and text. I had struggle getting the entire div to be selectable rather than just the image or the text but I worked it out in the end and it was worth that time spent. I then used this similar principle to implement for the videos and news page for consistency. This was the example I took inspiration from:

* <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">Save changes</button>



## Issue Resolution:
One challenges for me was initially understanding how twig and wordpress works. This was a whole new world of code for me that I couldn't understand or make sense out of. It took a few different explanations for me to finally understand the functionality, from where I was able to get on with coding the website. Saskia explained it really well and I began to understand it better and better as I started coding.

Another challenge was wordpress files. Within the videos page, I had spent all day and night trying to extract the video thumbnail or mp4 file only for display in the videos gallery but it didn't end up working. I went between searching google, which is very unreliable in solving issues like this, to ChatGpt which was quite helpful but gave me a code that is broken, or that only extracts both the text and youtube video rather than just the video. I found out that this information is inside the {{post.content}} area which is affected by wordpress resources which I couldn't understand how to work and would involve a more entailed process. In the end I just expanded some padding room at the top of each post to act as if there is video thumbnail.

Here is an one example of many codes ChatGpt tried to fix:

	{% extends "base.twig" %}
	{% block content %}
		<div class="post">
			<h1>{{ post.title }}</h1>
			<div class="post-content">
				{{ post.content|raw }}
			</div>
			{% if post.link %}
				{% set video_url = post.link|replace({'https://www.youtube.com/watch?v=': '', 'https://youtu.be/': ''}) %}
				<div class="video-container relative">
					<video class="video w-full h-auto transition-transform duration-300 transform hover:scale-110" loop muted preload="auto" controls>
						<source src="{{ 'https://www.youtube.com/watch?v=' ~ video_url }}" type="video/mp4">
						Your browser does not support the video tag.
					</video>
				</div>
			{% endif %}
		</div>
	{% endblock %}


Another challenge involved how one twig file would affect multiple other twig files. I wanted to work on the partners page at a point, but couldn't seem to edit it without affecting the gallery, home, about, partners and supporters pages. I think I knew that Saskia managed to edit a home page without affecting the other files but this involved a process of creating new files and editing it there. I also realised that the content was sourced again only through {{post.content}} which I couldn't edit it specifically. Using flex and grid codes would make the page go hectic so we all had to resort to a center aligned page for every one. This is definitely not something we intended or desired, but we were unable to go further into this due to time constraints.

## Team Collaboration:
I think that our team collaboration was a little distorted but we worked around it and found a balance. To the start of the project, one of our group members had missed out on the initial research and prototyping of ideas which affected the group of having a wider perspective and higher inclusion. We reset and balanced ideas across the table, influencing the prototype in a positive direction. I know that a group member prototyped the code in Glitch for a more polished and finalised prototype before we all understood tailwind and wordpress a bit better.

Next part comes down to the coding. All of us were very confused about how it all worked with twig and wordpress. One group member had to seek the support of their parent to understand and then share with the group. After we all understood, attempting to starting coding then merging on a collaborative codespace deemed difficult to manage. We ended up assigning pages or elements that we found interesting to one and working on those pages individually to avoid issues rising in our code. When we would come into class together, we'd discuss ideas from a design POV and share around issues and attempt to solve them together. 

Towards the end of the project, we would communicate online and then edit the codespace at different times to not affect each other's progresss. Sometimes we found each other fixing little spacing or typography issues on each other pages near the end and committing them straight away to avoid chaotic merges and ensure updates on the git are fresh.

## References and resources: provide a briefly annotated list of resources that you found helpful while creating the website. 
ChatGPT Open AI: For trouble shooting code and searching for solutions
https://chat.openai.com/

For translation of css into tailwind to build on the learning curve
https://tailwindcss.com/

Researching on how to make entire divs linkable when self directed coding was unsuccessful.
https://stackoverflow.com/questions/4465923/a-href-link-for-entire-div-in-html-css




