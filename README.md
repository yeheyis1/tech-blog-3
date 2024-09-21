# 14 Model-View-Controller (MVC): Tech Blog
# tech-blog-3

# Tech Blog - CMS-Style blog site

## Description

The **Tech Blog** project is a CMS-style blog site similar to WordPress that allows users to publish articles, edit posts, and interact with others through comments. Built using the Model-View-Controller (MVC) architecture, the project follows a structured approach that separates the application logic into models, views, and controllers for maintainability and scalability.

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Installation
To install the necessary dependencies, run the following command:

```bash
npm install


#### 3. **Usage**
```md
## Usage
To start the application, use the following command:

```bash
npm start


#### 4. **License**
```md
## License
This project is licensed under the MIT License.

## Contributing
If you would like to contribute, feel free to fork the repository and submit a pull request.

## Tests
To run tests, use the following command:

```bash
npm test


#### 7. **Questions**
```md
## Questions
If you have any questions, feel free to contact me at [your email]. You can also find more of my work at [your GitHub profile](https://github.com/yeheyis1).


Key features of the **Tech Blog**:
- **User Authentication**: Users can sign up, log in, and manage their profiles securely.
- **Create and Manage Posts**: Logged-in users can create new blog posts, edit or delete their existing posts.
- **Commenting System**: Visitors can leave comments on blog posts to foster interaction between readers and authors.
- **Dynamic Templating**: The site uses **Handlebars.js** for templating, allowing dynamic rendering of content based on user interaction.
- **Database Integration**: **Sequelize** is used to interact with a PostgreSQL database to store user data, blog posts, and comments.
- **Session Management**: **express-session** is used to maintain user sessions and authentication states.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```
![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./public/Assets/image/14-mvc-homework-demo-01.gif)