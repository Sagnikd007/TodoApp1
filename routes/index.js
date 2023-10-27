const router=require('express').Router()
const Todo=require('../models/Todo');


router.get("/",async(req,res)=>{
    const allTodo=await Todo.find();
//res.send("Welcome to home page!")
res.render("index",{todo:allTodo});
})


module.exports=router;


