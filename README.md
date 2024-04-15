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
For this project, I completed and focused on the home page, galleries and other css styling issues. My direction with the home page came from the figma prototype. We aimed to have a hero image, covering the entire page and the navigation. To do this, I had to first find out what link url of the images were inside the wordpress and tailwind intergration. I inspected our site and found that the images were defined by the class "wp-block-image img".
* [Image Link](http://canberramodernlocal/wp-content/uploads/2022/08/rsw_1160-5-1200x300-c-default.webp)
From this, I made a class within the 'tailwind.css' file called 'hero'. This was done with the help with Ben in class. From the creation of this class, I proceeded to add different css styling. I ran into my first issue with this after I realised that to apply the hero class to the entire page, I would have to apply it to base.twig. This would have been an issue as it would have applied the hero image to every page. Except this was the only way I knew to apply the class, as I had to put it in the class above the navigation and the logo, to make it cover the entire page. So after troubleshooting, I made a duplicate base.twig, naming it base-background.twig. Within base-background.twig I then edited the page-home.twig to "{% extends "base-background.twig" %}". This enabled me to use it as a seperate template and the changes to not apply to the other pages. 

I still encountered issues with this and found that the contrast of all the images embedded in the site did not work with our dark theme, with light text. So I used the classes "bg-black p-4 rounded-lg bg-opacity-65 md:rounded-md". This added a text box that was responsive and had opacity, to refrain from looking blocky and big. 

Apart from this, I also helped with the creation of the classes in the pure css template which allowed specific decoration of heaidngs, images, paragraphs and elements that we couldnt see in the code. For example:

* .wp-block-image .figcaption  
font-size: 1.875rem; /* 30px */
line-height: 2.25rem; /* 36px */

*  .wp-block-image img 
 padding-bottom: 25px;
 padding-top: 25px;
 display: block;
 margin-left: auto;
 margin-right: auto; 

The text was imbedded as a caption so I had to call on the image, then the class. 



## Team Collaboration: 

## References and resources: 

# Reflection Forest

## Individual Contribution: Document individual contributions to the project, outlining specific tasks undertaken, any relevant code examples and personal growth.

## Issue Resolution: Discuss any challenges encountered during the development process and provide reflections on how these challenges were addressed. 

## Team Collaboration: Reflect on the effectiveness of team collaboration, communication, and the distribution of tasks among group members.

## References and resources: provide a briefly annotated list of resources that you found helpful while creating the website. 

# Reflection Jonathan

## Individual Contribution: Document individual contributions to the project, outlining specific tasks undertaken, any relevant code examples and personal growth.

## Issue Resolution: Discuss any challenges encountered during the development process and provide reflections on how these challenges were addressed. 

## Team Collaboration: Reflect on the effectiveness of team collaboration, communication, and the distribution of tasks among group members.

## References and resources: provide a briefly annotated list of resources that you found helpful while creating the website. 