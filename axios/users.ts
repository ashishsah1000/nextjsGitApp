import axios from "axios";
export const getUsers = async () = >{
    console.log("Axios get request was called");
    axios.get("https://393gr2-3000.csb.app/api/users").then((res)=>{
        console.log("We recived the response",res)
    }).catch((err)=>{
        console.log("error",err)
        return res;
    }).finally(()=>{
        console.log("axios function was completed");
    })
}