### Steps to create BACKEND

1. Generate package.json file -->  
   >npm init -y
    changes in package.json file - description, main, type

2. Create HTTP server
    - Install express module (downloaded in node_modules folder)
    >npm install express
    - Import express module

3. Create REST APIs
    - create routes
    Structure of route:
    app.METHOD(path,callback function)
    METHOD - GET, POST, PUT, DELETE

Note: TO restart server automatically for any change we use
>npm install nodemon
if any error occurs: npx nodemon filename

