const express = require('express');
const app = express();

//route handler
app.get('/',function(req,res){
    //all things related to the request // id ever wnat to extract to body i can find in req
    res.send('Hello World')
})
app.post('/',function(req,res){
    res.send('Hello World from the psot endpoint')
})

app.listen(3000); // which port i am listening on port infitely











/*
// assignment creating your own todo application and storing the data in memory
let todos = [];
 
app.post('/',function(req,res){

    //create a random id for the todo
    //extract the todo title form the body
    todos.push({
        title,
        id
    })
})


app.delete('/',function(res,req){
    //extract the todo id
    //remove the todo from here
})

app.get('/',function(req,res){
// it will 
    res.json({
        todos 
    })
})
*/

