const ApiRequest = async ({endPoint} : {endPoint : string}) =>{
    const res = await fetch("http://localhost:3000/api/" + endPoint);
    const result = await res.json()
    
    if(!res.ok){
        throw new Error("Failed to fetch data" + res.status);
    }

    return result
}

export default ApiRequest