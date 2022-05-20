# phase-1-project

Welcome to JavaScript Project Mode!

You’ve worked so hard to get here and have learned a ton. Now it's time to bring it all together!

For this project, you're going build a Single Page Application (SPA). Building this application will be challenging because it will integrate everything you've learned up to this point. Your frontend will be built with HTML, CSS, and JavaScript and will communicate with a public API.

Project Requirements:
1. Your app must be a HTML/CSS/JS frontend that accesses data from a public API. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format.
2. Your entire app must run on a single page. There should be NO redirects. In other words, your project will contain a single HTML file.
3. Your app needs to incorporate at least 3 separate event listeners (DOMContentLoaded, click, change, submit, etc).
4. Some interactivity is required. This could be as simple as adding a "like" button or adding comments. These interactions do not need to persist after reloading the page.
5. Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.

//Dog Liker Page - Idea
SPA page that presents a title of "Dream Car Garage" and has two main sections:
- Dog images:
1. Square window that displays random images pulled from a dog API, asynchronously and using JSON
2. Two buttons appear: "Like!" or "Next!"
- Like! -> Allows the user to like the image and will change the like button to red to highlight the selection
- Next! -> Allows the user to skip the current image and featch a new one from the API
3. DOMContentLoaded, click and context-menu eventlisteners