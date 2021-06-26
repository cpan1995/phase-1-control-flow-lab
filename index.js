function scuberGreetingForFeet(num){
  let result;
  if (num <= 400){
    result = 'This one is on me!';
  }
  else if(num > 2000 && num < 2500){
    result = "I will gladly take your thirty bucks.";
  }
  else if (num > 2500){
    result = "No can do.";
  }
  return result;
}

function ternaryCheckCity(city){
  // Write your code here!
  let result;
  if (city == 'NYC'){
    result = 'Ok, sounds good.';
  }
  else if (city != 'NYC'){
    result = "No go."
  }
  return result;
}

function switchOnCharmFromTip(someString){
  // Write your code here!
  let result;
  if (someString == 'generous'){
    result = 'Thank you so much.';
  }
  else if (someString == 'not as generous'){
    result = 'Thank you.';
  }
  else{
    result = 'Bye.';
  }
  return result;
}