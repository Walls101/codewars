function divisors(integer) {
  let results = []
  for (i=2; i<integer; i++){
      if (integer % i == 0){
        results.push(i)
      }
  }
  if(results.length == 0){
    return integer.toString()+" is prime"
    }

return(results)
}
