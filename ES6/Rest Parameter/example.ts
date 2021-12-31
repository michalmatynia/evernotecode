
  
  // REST Parameter

  // Passing to function
  
  const addrest = (...numbers: number[]) => {
  
    return numbers.reduce((accum, currentVal)=>{
       return accum + currentVal
     }, 0)
   
   }
   
   const addedNumbers = addrest(4,5,6,7,8,8)
   
  