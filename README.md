# Friend Finder

Friend Finder is a compatibility-based user matching application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

## Table of Contents:

* [Getting Started](#getting-started)
* [Architecture](#architecture)
* [Bugs](#bugs)

## Getting Started <a name="getting-started"></a>
To install, run the following codes in your git bash:

```bash
git clone https://github.com/joshespr/11-Friend-finder.git
```

```bash
npm install
```

To start the application on your localhost, run the following code in your git bash: 

```bash
node server.js
```

## Architecture <a name="architecture"></a>
This application uses bootstrap for styling, express to handle routing, data parsing, and server set-up on the localhost, and node to provide a real-time environment for the app; it is also built with HTML, and Javscript to gather user inputs. 

## Bugs <a name="bugs"></a>

- Validation for user's information is not implemented. Will be matched with no one.

- Undefined tag appears when HTML gets built dynamically with the "/api/friends" route

<!-- ## Change Log
Use this are to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples: 

01-01-2001 4:59pm - Application now has a fully-functional express server, with GET and POST routes for the book resource.

## Credits and Collaborations
Give credit (and a link) to other people or resources that helped you build this application.  -->

<!-- https://guides.github.com/features/wikis/ -->

--- 

**Author**: Joshua Manuel  
**License**: MIT 
**Version**: 1.0.0
