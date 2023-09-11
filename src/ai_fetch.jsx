import { useEffect, useState } from "react"


const useAPI=function(name){
    const [age,setage]=useState(0)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(false)
    useEffect(()=>{
        fetch("https://api.agify.io?name="+name)
        .then(response=>response.json())
        .then(data=>{console.log(data["age"])
            setage(data["age"])
        setLoading(false)
    }
        )
        .catch(()=>setError(true))
    },[])

    return {age ,loading,error}
}


export function SimpleAPI(){
    
    const result=useAPI("ahmed")
    console.log(result)
    if (result.loading){return <h1>Loading....</h1>}
    if (result.error || result.age==null){return <h1>Error 404: Not Found</h1>}
    
    return(<div>
        <h1>REST API</h1>
        <h2>If your name is Ahmed, you will die at {result.age}</h2>
    </div>)
}