const btnvalue=(num)=>{
    if(result.value=='')
    {
        result.innerHTML=num;
    }
    else{
        result.innerHTML+=num;
    }
}
const clearLast=()=>{
     result.innerHTML=result.innerHTML.slice(0,-1)
    
}
const clearAll=()=>{
    result.innerHTML=''
}
const equalbtn=()=>{
    try{
        result.innerHTML=eval(result.innerHTML)
    }
    catch(error)
    {
        result.innerHTML='error'
        setTimeout(() => {
            result.innerHTML=''
        }, 1000);
    }
   
}