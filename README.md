# 03 JavaScript: Password Generator

## Your Task
As a developer I was given two files, a stylesheet with completed styles added and a index.html, which had 
complete structure of a generate password button.The purpose of this project was to have a functional button,
which would generate a random password based on acceptance criteria. My approach to this project was different from the last two projects I worked on, being that I used a technique called psuedo coding. Psuedo coding is evaluating each piece of smaller tasks that is needed to reach the ending goal. You will notice that in JavaScript it can be easy to "get lost in the code", meaning because Javascript adds interactivity to the app, there could be many different programs within the code that do one thing each. This can add confusion to anyone writing the code or reading it. I structured the java script code, so that it is in the order of human interactivity to using the app. I chose to start with the basic keys or variables a user would need to generate a password. A password requires letters, numbers, special characters, and ranges of lengths. I used arrays to store these characters because arrays allow you to enter multiple data types. As you notice, there is alot of different inputs that the user has avaialable to choose from when creating their password. To save myself the heachache, time, and potential confusion when writing functions for each character generated into the password, I used a method called "if statements". If statements allow me to add multiple conditions with different executions depending on if condition is true or false. If statements allow me to collect input and use a feature called "console.log" to see the user's inputs. Another method I used was the "for loop". The for loop is what is doing all the work, this method allows the code to cycle many times until condition is false. By using these two methods, I was able to take user input, store it in a variable which I used to add it to the for loop, which is generating random passwords. I was able to plug in stored values from user's input to adjust the  length of password used in the for loop. For example, in the for loop, if user decides to enter 20 character legnth in prompt, the loop will run the code as long as password length does not exceed 20, which would be false. The required criteria needs at least one prompt to be true, so the user needs to pick at least one character to include in their password. If user declines all prompts, then code will not run. In the future, I would like to learn how to return the first prompt if user inputs wrong information. It would make the app more accessible and saves time rather than clicking the button again if user input invalid information. Afer all, this project was one of my favorite projects to tackle, I enjoyed watching the interactivity in the console and watching the different passwords generate.


## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

![Alt text](Assets/03-javascript-homework-demo.png)