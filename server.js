/*const mail=require('@sendgrid/mail')
mail.setApiKey('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');

const msg={
    to:'gokulneymer@gmail.com',
    from:'gokulprasanth.1905028@srec.ac.in',
    subject:'Testing node mail service',
    text:'this is a mail send from node js'
}

mail.send(msg,(err,info)=>{
  if(err)
  {
      console.log("email not sent");
  }
  else{
      console.log("email sent successfully");
  }
})*/

const express=require('express')
const app=express();
const body=require('./utility/sendEmail');
const path=require('path');
app.use(express.urlencoded({extended:false}));

app.use('/public',express.static(path.join(__dirname,'public')))

app.set('view engine','ejs');


app.get("/",(req,res)=>{
    res.render('contact');
})
app.get("/sent",(req,res)=>{
    res.render('sent');
})

app.post('/sendEmail',(req,res)=>{
    const {name,Sname,Email}=req.body;
    const from="gokulprasanth.1905028@srec.ac.in";
    const subject=`hi how are you ${name}`;
    const text=`i am gokulprasanth leader of so company.I am happy to see you ${name}`;

    body(Email,from,subject,text);
    res.redirect('/sent');
})
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`server running in port ${PORT}`);
})