import express from 'express';

const app=express();

const PORT=process.env.PORT || 8000;

app.get('/',(req,res)=>{
    return res.json({message: "This is from VS-Code for Docker Tutotial!"});
});

app.listen(PORT,()=> console.log(`Server is listening on PORT: ${PORT}`));


