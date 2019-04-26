[X] Mention two parts of Express that you learned about this week.
	This week we learned about Express and how it works with node.js in the backend to handle http requests. Two parts about express that we learned this week is that express can handle the server-side routing from backend similar to front-end routing. Express also handles middleware which is an important aspect of express, node and backend programming.

[X] Describe Middleware?
	middleware is a function that is executed to preform some functionality, checking if errors or many other functionality. Middleware can be custom built by the programmer, installed by a third-party library or built-in. Middleware can be created by the user, but making sure to add “ server.use(express.json())” to your code ensures that express can use middleware code. We use middleware to preform actions within a database such as logging or checking conditions are met. When we create custom middleware we make sure to add req, res, next to the parameters of the callback function. When we are creating error handlers we call the error parameter within next that is called within the middleware we create
[ ] Describe a Resource?
	A resource is a list of particular data that the API is working with. In past projects our Resource has been hobbits and in todays project there where two resources both the actions and projects. together they create a bigger set of resources that the API maintains.

[X] What can the API return to help clients know if a request was successful?
	the API can send a client status codes to help the client understand if they were successful or failed at a certain task they were trying to do.

[X] How can we partition our application into sub-applications?
	within Express we can use server side routing to ensure that our application files don’t get overloaded and look messy. With server side routing this eliminates this issue and allows for separate files to hold specific routes and crud operations.

