# Assignment 1 - Food Builder App.

Name: Farazulla Baig Mohammed

## Overview.
It is a food builder application wherein you add individual ingredients. As we add the ingredients, it is populated on screen by css styling.


 . . . . . List of user features . . . . 
 
 + Create food using different ingredients
 + Dynamic price calculation
 + Protected order list against unauthenticated users
 + Authenticated and signed up user detail along with form data stored in Realtime DB of Firebase
 + Custom Form Validation(RegeX Code used)
 + Firebase app deployment
 + Custom styled CSS elements.
 + Orders viewable for logged in users only(obtained from Realtime DataBase)
 

## Installation requirements.

npm install

## Data Model Design.

Diagram of app's data model (see example below) AND a sample of the test data used .

![][model1]
![][model2]

## App Component Design.

A screenshot showing the component stories from Storybook  

![][stories]


## UI Design.


![][image1] 
###FoodBuilder screen
![][image2] 
###Orders screen(protected)


## Routing.

+ / - displays the FoodBuilder
+ /checkout - Checkout component
+ /auth - authentication
+ /orders - shows all orders placed(protected)
+ /logout - logs out of current user


## Independent learning and Extra features implemented

 + Custom CSS Element styling
 + Added Prop type validation
 + Used axios
 + Custom form validation
 + User sign up and login(details saved on firebase)
 + React Redux for efficient state management.
 + Authentication and token management.
 + Redux middleware (Thunk) for asynchronous tasks
 
 ## Third Party Libraries 

 + Firebase
 + prop-types
 + axios
 + react-redux
 + redux-thunk
 + Semantic-UI-React
 + Redux Dev Tools
 + Storybook


[model1]: ./data.
[model2]: ./model2.
[image1]: ./screen1.png
[image2]: ./screen2.png
[stories]: ./storybook.png