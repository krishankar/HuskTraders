const sgMail = require('@sendgrid/mail');
var sendGridApiKey=process.env.SENDGRID_API_KEY || "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";

exports.sendEmail=(to,from,subject,html)=>{
    sgMail.setApiKey(sendGridApiKey);
    
    const msg = {
        to: to,
        from: from,
        subject: subject,
        html: html,
    };

    sgMail.send(msg)
    .then(status => {
        alert("Emai sent successfully")
        console.log(JSON.stringify(status)+ "status")        
        this.setState({
            sgMail: {
                msg
            }
        })
    })
    .catch(error => {
        alert("Email not sent")
        console.log(JSON.stringify(error)+ "error")
        //Log friendly error
        console.error(error.toString());
        //Extract error msg
        const {message, code, response} = error;
        return error;
    });
}
                
