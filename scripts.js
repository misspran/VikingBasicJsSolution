// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    var a = array.sort(function(a, b){
      return b - a;
    })
    return a[0];
  },
  
  reversed: function(string){  
    var a = string.split('').reverse()
    var b = a.join('');
    return b;
  },

  loudSnakeCase: function(string){  
    var noSpecialChar = string.replace(/[^\w\s]/gi, '');
    noSpecialChar = noSpecialChar.split(' ');
    var upCaseArray = []
    for (var i = 0; i< noSpecialChar.length; i++){
      var firstLetter = noSpecialChar[i].charAt(0).toUpperCase();
      var restOfWord = noSpecialChar[i].slice(1, noSpecialChar[i].length);
      var fullWord = firstLetter + restOfWord;
      upCaseArray.push(fullWord);

    }
    upCaseArray = upCaseArray.join('_');
    return upCaseArray;

  },

  compareArrays: function(array1, array2){ 
  if(JSON.stringify(array1)==JSON.stringify(array2)){
    return true;
  }else{
    return false;
  }
  },

  fizzBuzz: function(number){  
    var fizzBuzzArray = []
    for(var i = 1; i <=number; i++ ){
      if(i%3===0 && i%5==0){
        fizzBuzzArray.push('FIZZBUZZ');
      } else if(i%5===0){
        fizzBuzzArray.push('BUZZ')
      } else if(i%3===0){
        fizzBuzzArray.push('FIZZ')
      }else{
        fizzBuzzArray.push(i);
      }
    }
    return fizzBuzzArray;
  },

  myMap: function(arr, func){  
   return arr.map(func);
  },

  primes: function(number){
  var primeArr = []  

  function checkPrime(n){
    if(n===2){
      return true;
    }else if( n < 2){
      return false
    }else {
    for(var x = 2; x < n; x++){
      if(n % x === 0){
        return false;
      }
    }
    return true;  
    }
  }
  var e = 1;
  do{
    e++;
    if(checkPrime(e)===true){
      primeArr.push(e);
    }

  }while(e < number);
  return primeArr;
  },
}