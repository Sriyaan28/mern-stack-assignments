// OTP resend countdown
let i = 5
console.log(i--)
const resendOTP = setInterval(()=>{
    console.log(i--)

    if(i == 0)
    {
        clearInterval(resendOTP);
        console.log('Resend OTP')
    }
},1000)

// setTimeout(()=>{
//     clearInterval(resendOTP)
//     console.log('Resend OTP')
// },10000)