export async function registerApi(username:any,email:any,password:any){
    return fetch("http://127.0.0.1:9005/ai/users/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({username,password,email})
    })
    
}
export async function loginApi(username:any,password:any){
    return fetch("http://127.0.0.1:9005/ai/auth/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({username,password})
    })
}
// export async function getCaptchaApi(username_or_email:any){
//     console.log(JSON.stringify({username_or_email}));
//     return fetch("http://127.0.0.1:9005/ai/users/password/reset/code",{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({username_or_email})
//     })
// }
// export async function resetPasswordApi(code:any,password:any,confirmPassword:any){
//     return fetch("http://127.0.0.1:9005/ai/users/password/reset",{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({code,password,confirmPassword})
//     })
// }
// export async function resetPasswordDown(){
//     return fetch("http://127.0.0.1:9005/ai/users/password/reset/down",{
//         method:"GET",
//         headers:{
//             "Content-Type":"application/json"
//         }
//     })
// }
