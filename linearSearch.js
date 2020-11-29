const linearSearch = (list, target) => {
    for (let i = 0; i < list.length; i++){
      if( list[i] == target) return i
    }
    return null;
  }
  
  const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  let result = linearSearch(list, 20);
  console.log(result); 
  result = linearSearch(list, 8);
  console.log(result); 
 

