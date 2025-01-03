export async function loginApi(params:any){
    return fetch("http://localhost:3000/api/login",{
        method:"POST",
        body:JSON.stringify(params)
    })
}