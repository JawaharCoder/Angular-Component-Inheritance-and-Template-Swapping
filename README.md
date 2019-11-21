# Angular-Component-Inheritance-and-Template-Swapping
Student Mark List Project Using Angular Component Inheritance and Template Swapping

# Student Marksheet Project Displaying Sample Data
Displaying student in two different formats list and table.
Same logics applied inherited from the base component.

# Component Features
Component has Input & Output variable.
Input importing dataset from other component.
Output EventEmitter emitting the value to the parent component.

Angular components are a fantastic way to break up our web apps into small easy to understand pieces of UI code. Sometimes in specific apps, we have drastic layout differences for the same data being displayed. An example could be differences between mobile and desktop layouts. Sometimes it could be showing our data in different formats such as a list view vs. a table view.

In these instances many times our component is a presentation component displaying this data and we have the same Inputs and Output data. In these cases, it would be beneficial to be able to swap the templates when displaying the data in different formats. In this post, we are going to use Angular Component Inheritance to derive two subcomponents to display some data. One component will be a list view and another a table view.

Base Component Class
Overall I do not recommend using Component Inheritance but rather use composition to mix and match multiple components together. In this particular use case Component Inheritance is rather helpful when our templates have drastic differences in markup but display the same data.

First, we need to define our base class that contains all of the logic we want to share.
