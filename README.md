# E-commerce Back End 

## USER STORY
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
## Table of Contents 
------

* [Installation](#installation)

* [About](#about)

* [Demo](#demo)

* [Author](#author)

## Installation
1. Clone repository using 'git clone"
2. Install necessary dependencies, run the following command: <br> 'npm install'
3. To run application 'node server.js' in the command line

## About
This a project was built using <br>
* Node.js
* Inquirer
* MySQL2
* javaScript
* dotenv

## Demo
![e-commerce-walkthrough example video](/video_walkthrough/e-commerce-bacckend.gif) <br>
Link to video: https://drive.google.com/file/d/1V5_xcfL26-2g--ggW4vUbNVZu3BGlyy8/view
## Author 
Me :)

## SPECIFICATIONS
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database