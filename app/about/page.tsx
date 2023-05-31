"use client"

import {useEffect,useState} from "react"
export default function About(){
    const [data,setData] = useState("");
    async function logJSONData() {
        const response = await fetch("https://393gr2-3000.csb.app/api/users");
         const jsonData = await response.json();
        setData(jsonData.data);
    }
    useEffect(()=>{
        logJSONData()
    },[])
    
    return (
    <div> 
        {data===""?<>Loading</>:<>We have loaded the data</>}
    </div>)

}