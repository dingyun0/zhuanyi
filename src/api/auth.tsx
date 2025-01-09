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
