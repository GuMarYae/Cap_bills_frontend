# Capstone

#### By Tony Daniels

## Project Summary

Im building a Bills app using Postgress(PSQL), Python, JavaScript and React and tailwind. The app is to bring the user excitement with the bills that they come up with but to store it in their pockets and use the app whenever they forget whats on their bill list.

## Models

The Model will consist of a schema that will have 3 properties or possibly the edit create 

- name: String
- description: String
- date: String

## Route Table

List your routes in a table

| url                 | method | action                                 |        |
|---------------------|--------|----------------------------------------|--------|
| /bills           | get    | get all bills items (index)         | index  |
| /bills/:id       | get    | get a particular bills item (show)  | show   |
| /bills/:id/new   | get    | make a new item                        | new    |
| /bills/          | post   | post the new item                      | create |
| /bills/:id/edit  | get    | edit any item on the list              | edit   |
| /bills/:id/      | put    | update the edited item from the list   | update |
| /bills/:id       | delete | delete any item                        | delete |

## User Stories

- User should be able to put down what they want on this app so that they don’t have to worry about forgetting after. 
- User should be aboe to view all bills n their list
- User should be able to add a bill to the list
- User should be able to update a bill to the list
- User should be able to delete a bill to the list

## Challenges
making a border and respomsive screen with respect to Tailwind wasnt working so I had to put it back into CSS

could not figure out a way to make a button icon/ logo for the create button  since its a rooute,. Tried outting a button inside the route but the whole page went blank so Left it alone

Had trouble putting the new contents on the index contents so I can have the modal on the index. So, I left the modal iside form.


## List of Technologies

- Python
- PSQL
- JavaScript
- React
- CSS
- Tailwind



