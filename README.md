# This is a Bible Verse Reader App

this is a simple web App that'll publish random verses using the Bible.org API
Architecture - React & Vite following Chapter 9

**Operations**
Button click -- Random Verse -- random bible verse
Lookup -- Search verse Enter button click 
the verses are displayed with references in textbook and chapter.

 Node.js has been installed 
 Root folder created and dependencies are installed through terminals 

npm install 

this started the development server

 Server in local browser link http://localhost:5173

Technologies 

React - For building the user interface.
Vite - Development server and build tool
Bible.org API - Free API for Bible verses (https://labs.bible.org/api_web_service)
JavaScript Fetch API- To make API calls

Learning graph

This was my first time building a React app that uses an external API,Here are some things I learned:

1. Using useState hook - To manage component state (loading, verse data, user input)
2.Fetch API - How to make GET requests to an API
3. Promise handling - Using `.then()` and `.catch()` for async operations
4. Event handling - Click events for buttons, onChange for inputs
5.Conditional rendering - Only showing verses when they're loaded
6. Component structure - making reusable components 

Problems faced 
error handling 
Statemanagement 
Lookup issues when triggering Enter key 
Documetation referred 
- React Documentation: https://react.dev/
- Vite Documentation: https://vitejs.dev/
- Bible.org API Docs: https://labs.bible.org/api_web_service
- MDN Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API



