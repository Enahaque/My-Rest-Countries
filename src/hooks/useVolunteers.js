import { useEffect, useState } from "react"

const useVolunteers=()=>{
    const[volunteers,setVolunteers]=useState([]);
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(res=>res.json())
            .then(data=>setVolunteers(data.slice(0,9)));
    },[]);
    return[volunteers,setVolunteers];
}

export default useVolunteers;