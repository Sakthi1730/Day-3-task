var obj1 = {name:"Person 1",age:5};
  var obj2 = {age:5, name:"Person 1"};
  var objectString1 = JSON.stringify(obj1);
  var objectString2 = JSON.stringify(obj2);
  console.log(objectString1 === objectString2)
  if(objectString1 === objectString2){
      console.log("both have same properties");
  }
  else{
      console.log("both have different properties");
  }
 