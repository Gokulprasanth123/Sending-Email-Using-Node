const mail=require('@sendgrid/mail');
require('dotenv').config();
mail.setApiKey(process.env.API_KEY);
const body=(to,from,subject,text)=>{
const msg={
    to,
    from,
    subject,
    text
}
mail.send(msg,(err,info)=>{
    if(err){
        console.log("mail not sent");
    }
    else
    {
        console.log("mail sent successfully");
    }
})
}

module.exports=body;