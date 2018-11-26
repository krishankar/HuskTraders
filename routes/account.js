var express=require("express")
var request=require("request")

require("dotenv").load();

var router = express.Router();
const sgMail = require('@sendgrid/mail')
var sendGridApiKey=process.env.SENDGRID_API_KEY || "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";

const { createApolloFetch } = require('apollo-fetch');
const apolloFetch = createApolloFetch({ uri: 'https://api.graph.cool/simple/v1/cjotle0ftk6x401432vr477h3' });

apolloFetch.use(({ request, options }, next) => {
	if (!options.headers) {
		options.headers = {}; // Create the headers object if needed.
	}
    options.headers['authorization'] =
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDE0MTYzNzksImNsaWVudElkIjoiY2piaGp6ZTRwMDg1ZTAxMjhxaXIwZHY2OCJ9.8E_bIf4w1iIBEOCYkPZrHHkpwe_jAh-yza8XQnKl4tU';
	next();
});

var sendSms=(phone,otp)=>{
        return new Promise((resolve,reject)=>{
            request(`http://api.msg91.com/api/sendhttp.php?sender=HTIND&route=4&mobiles=${phone}&authkey=191286AZ4Oytdz5a4dc716&country=91&message=${otp} is your OTP for Husk Trade website registration`,(err, res, data)=>{
                if(err) reject(false);
                resolve(true);
            })
        })
    }
    
router.post("/send/sms",(req, res)=>{
        var phone=req.body.phone;
        var otp=req.body.otp;
        console.log(req.body.phone)
        console.log(req.body.otp)

        sendSms(phone,otp)
        .then(()=>{
            res.status(200).send("OK")
        })
        .catch((err)=>{
            res.status(500).send("NOTOK")
        })

    })

var sendMail=(to,from,subject,html)=>{
        sgMail.setApiKey(sendGridApiKey);
        
        const msg = {
            to: to,
            from: from,
            subject: subject,
            html: html,
        };
    
        sgMail.send(msg)
        .then(() => {
            //Celebrate
            return "OK";
        })
        .catch(error => {
            //Log friendly error
            console.error(error.toString());
            //Extract error msg
            const {message, code, response} = error;
            return error;
        });
    }
                    
    
router.post("/send/welcomemail",(req, res)=>{
        var to=req.body.to;
        var from="info@husk.trade.com";
        var subject="Welcome to Husk Traders (HT)";
        var html=`
            <p>Hello,</p>

            <p>Thank you for registering at Husk Traders. You can access your account at https://husk.trade.com/ht</p>
            
                       
            <p>Best Regards
            Husk Traders Team</p>
        `
        console.log(req.body.to)
        sendMail(to,from,subject,html)
        .then((status)=>{
            res.status(200).send("OK")
        })
        .catch((err)=>{
            res.status(500).send("NOTOK")
        })
    })


var getUser = (email) => {
        return new Promise((resolve, reject) => {
            apolloFetch({
                query: `query allUserProfiles($email: String){
                            allUserProfiles(filter: {email:$email}){
                                id
                            }
                        }`,
                variables: { 
                            email:email,			
                            }
            })
            .then((res) => {
                console.log(JSON.stringify(res)+ "id");
                resolve(res.data.allUserProfiles[0].id);
            })
            .catch((err) => {
                reject(err);
            });
        });
    };

var forgotPassword=(to,from,subject,html)=>{
        sgMail.setApiKey(sendGridApiKey);
        
        const msg = {
            to: to,
            from: from,
            subject: subject,
            html: html,
        };    
        sgMail.send(msg)
        .then((res,msg) => {
            alert("Email sent")
            console.log("Email sent")
            //Celebrate
            res.send(200(msg))            
            return "OK";
        })
        .catch(error => {
            console.log("Email not sent")
            //Log friendly error
            console.error(error.toString());
            //Extract error msg
            const {message, code, response} = error;
            return error;
        });
    }
    
router.post("/send/reset",(req, res)=>{
        var to=req.body.to;
        var from="info@husk.trade.com";
        var subject="Password request for your Husk Trade account";
        console.log(JSON.stringify(req.body.to)+ "email")
        getUser(to)
        .then((id)=>{
            console.log("id" + JSON.stringify(id));
            var html=`
            <p>Hi,</p>
            
            <p>A password reset has been requested for a Husk Trade user associated with your email address ${to}
            in the account at https://husk.trade.com. To reset the password for that user, follow the link below:</p>
            
            <p><a href="https://husk.trade.com/account/changepwd/${id}">Change Password</a></p>
            
            <p>If you didn't request this password reset, you can ignore this message or contact support by replying to this message.</p>
            
            <p>regards</br>
            Husk Traders Team</p>
            `
            
            forgotPassword(to,from,subject,html)
            .then((res)=>{
                console.log(JSON.stringify(res))
                res.status(200).send("OK")
            })
            .catch((err)=>{
                console.log(JSON.stringify(err))
                res.status(500).send("NOTOK")
            })
        })
        .catch((err)=>{
            console.log(JSON.stringify(err))
            res.status(500).send("NOTOK")
        })

    })

module.exports=router;