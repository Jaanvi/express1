require('dotenv').config();
const express=require('express');
const app=express();


app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("Myself jaanvi")
})

app.get('/youtube',(req,res)=>{
   res.send("<h1>my youtube channel</h1>")
})

//listen function is use to start the express.js server and make it listen for incoming HTTP request
/* Why We Do Not Insert req and res in app.listen Callback?
In Express.js, the app.listen(port, callback) method is used only to start the server and does not handle any HTTP requests directly.

The callback function inside app.listen is simply a notification that the server has started successfully.
Since no client request is involved, there is no need for req (request) and res (response). */
const port = process.env.PORT || 4000; // Fallback to 4000 if PORT is not defined
app.listen(port, () => {
    console.log(`I am on the port ${port}`);
});



