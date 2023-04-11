---
toc: true
layout: post
description: Daily Calorie Tracker
categories: [markdown]
title: CPT Blog Write-up
---


- **Describe Procedural Abstraction, discussion on code and abstraction techniques used: Frontend/Backend, Functions, Classes, etc.**

The identified procedure, getNutritionInfo gathers the nutrition facts from the API. The function gets passed in the query and results in data of the searched food. This contributes to the overall functionality of the program because the calorie data is being gathered to help the user receive the requested calorie information. In terms of classes, I made a food class, Food and decoder class, and FoodDecoder in order to decode the JSON. I have multiple functions in my code, getNutritionInfo, home, and result. In my frontend, I made a table organizing the name of food and calories of food data. The technique I used to make the table was a for loop that went through the nameFoodList list. In my Backend, I made a result route and I used a parameter in the getNutritionInfo function. The function getNutritionInfo gets the query from the user and calls the API and as a result the API returns the food data. 

- **Describe Data Abstraction, discussion on data used and data structures to support project: JSON, Dictionaries, Lists, and/or Database Tables.**

The name of the variable representing the list being used in this response is nameFoodList. The data contained in this list represents all the foods the user is inputting into the search bar and storing them in the program. The data I used was an API that provides data about the amount of calories in any food. Data structures I used to support my project are JSON, dictionaries, lists, and tuples. I used a dictionary, foodDict, to support my project, which is storing what the user is inputting into the search field. I used JSON as well and I converted the JSON into the food object that I made. In addition, I used a list, nameFoodList to store the names of the foods the user types into the search bar. Finally, I used tuples, I made a list of tuples to group together the name of the food and the calories of that food. 


- **Describe Usage of Control Structures, ie Iteration and Conditional Statements. Areas where you use lists and interation in Frontend Display. Areas were you decide and execulte different paths of code, for instance Create vs Read vs Update vs Delete. Also, show a function where a different parameter or condition causes a differen result.**

My usage of control structures consists of conditional statements specifically if statements. I used an if statement in my routing code for my search bar, so when the user opens the website there are no numbers in the calorie calculator. It ensures previous data is not stored, and only new data is stored. I also used an if statement for the printed data table on the bottom. This if statement ensures that when the user initially opens the website, there is no data showing up. There will only be an empty table, with headers, Name of Food and Calories of Food. Areas where I use lists are nameFoodList. I used a list of tuples consisting of the name of food and calories for that food.  I also used an iteration in Frontend Display. I used a for loop to iterate the items in the nameFoodList. 

