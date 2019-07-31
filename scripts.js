// junior level
function removeFromFront(arr) {
    		// check for empty arrays
	if(arr.length > 0 ){
         arr.splice(0,1);
        return arr; 
    }

// return empty array if not operated
return []; 
}


// mid-level 
function removeFromFrontv2(arr){
arr.shift(); 
return arr; 
}

// senior
function removeFromFrontv3(arr){
return arr.slice(1,arr.length);
}


function removeFromBackOfNew(arr) {
    var newArr = arr.slice(0,arr.length);
  if ( newArr.length > 0 ){
      newArr.splice(newArr.length-1,1); // position on last item, and take that
      return newArr; // return the array without last item
  }else
  return []; // if empty, return empty array
}

function removeFromBackOfNew(arr) {
    var newArr = arr.slice(0,arr.length-1);
return newArr; 
}



function removeElement(array, discarder) {
  // your code here
  /* START SOLUTION */
    /* var newArrayFiltered = array.filter(function(index){
         return index !== discarder; 
     });*/
     
     var newArray = array.filter(index => index !== discarder);
     return newArray; 
    // return newArrayFiltered; 
  /* END SOLUTION */
}


function keep(array, keeper) {
  // your code here
  /* START SOLUTION */
    // var keeper = array.filter( finder => finder === keeper);
    // return keeper;
    
    var keeper = array.filter(function(finder){
       return finder === keeper;  
    });
    return keeper;
  /* END SOLUTION */
}

function computeAverageOfNumbers(nums) {
  // your code here
  /* START SOLUTION */
  if (nums.length > 0){
        var arrAvg = nums.reduce((a,b) => a + b, 0);
        var arrAvg = arrAvg / nums.length; 
        return arrAvg; 
  }
    return 0; 
  /* END SOLUTION */
}

function getOddLengthWordsAtProperty(obj, key) {
  // your code here
  /* START SOLUTION */

    if (obj.hasOwnProperty(key) == true && typeof obj[key] == "object"){
         var arrayWithOdds = obj[key].filter(index => index.length % 2 != 0);
    return arrayWithOdds; 
    }
   return [];
  /* END SOLUTION */
}

function getOddLengthWordsAtProperty(obj, key) {
  // your code here
  /* START SOLUTION */

    if (obj.hasOwnProperty(key) == true && typeof obj[key] == "object"){
         var arrayWithOdds = obj[key].filter(function(index){
             if (index.length % 2 != 0)
                return index; 
         });
    return arrayWithOdds; 
    }
   return [];
  /* END SOLUTION */
}

function getOddLengthWordsAtProperty(obj, key) {
  // your code here
  /* START SOLUTION */

    if (obj.hasOwnProperty(key) == true && typeof obj[key] == "object"){
        var oddWords = [];
        for (var i in obj[key]){
            if ( obj[key][i].length % 2 != 0){ // check for length
                oddWords.push(obj[key][i]); // add word
            }
        }
        return oddWords; 
    }
   return [];
  /* END SOLUTION */
}
function getOddLengthWordsAtProperty(obj, key) {
  // your code here
  /* START SOLUTION */

    if (obj.hasOwnProperty(key) == true && typeof obj[key] == "object"){
        var oddWords = [];
        for (var i = 0; i < obj[key].length ; i++){
            if ( obj[key][i].length % 2 != 0){ // check for length
                oddWords.push(obj[key][i]); // add word
            }
        }
        return oddWords; 
    }
   return [];
  /* END SOLUTION */
}
function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  /* START SOLUTION */
  if ( obj.hasOwnProperty(key) == true && Array.isArray(obj[key]) && obj[key].length > 0){
      var mean = obj[key].reduce( (a,b) => a+b, 0 );
      var mean = mean / obj[key].length; 
      return mean; 
  }
  return 0; 

  /* END SOLUTION */
}
function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  /* START SOLUTION */
  if ( obj.hasOwnProperty(key) == true && Array.isArray(obj[key]) && obj[key].length > 0){
      var mean = obj[key].reduce(function(a,b){
          return a+b; 
      } );
      var mean = mean / obj[key].length; 
      return mean; 
  }
  return 0; 

  /* END SOLUTION */
}

function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  /* START SOLUTION */
  if ( obj.hasOwnProperty(key) == true && typeof obj[key] == "object" && obj[key].length > 0){
      var mean = obj[key].reduce(function(a,b){
          return a+b; 
      } );
      var mean = mean / obj[key].length; 
      return mean; 
  }
  return 0; 

  /* END SOLUTION */
}
function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  /* START SOLUTION */
  if ( obj.hasOwnProperty(key) == true && typeof obj[key] == "object" && obj[key].length > 0){
     var mean = 0; 
     for (var index in obj[key]){
         mean += obj[key][index]; // add all indexes
     }
     mean /= obj[key].length; 
     return mean; 
  }
  return 0; 

  /* END SOLUTION */
}
function getEvenLengthWordsAtProperty(obj, key) {

    if ( obj.hasOwnProperty(key) != false ){
        if (typeof obj[key] == "object" && obj[key].length > 0){
            var evenWordsArray = obj[key].filter(word => word.length % 2 == 0);
            return evenWordsArray; 
        }else
        return [];
    }else{
        return [];
    }
}
function getSquaredElementsAtProperty(obj, key) {
  // your code here
  /* START SOLUTION */
  
  if (assesment(obj,key)){
      var squaredArray = obj[key].map(index => Math.pow(index,2));
      return squaredArray; 
  }
  
  return [];

  /* END SOLUTION */
}

function assesment(obj,key){
    return obj.hasOwnProperty(key) && typeof obj[key] == "object" && obj[key].length > 0;
}
function getLengthOfLongestElement(arr) {
  // your code here
  /* START SOLUTION */
  if (arr.length > 0 ){
      var max = 0; 
      arr.map(function(word){
          if (word.length > max){
              max = word.length; 
          }
      });
      return max; 
  }
  return 0; 

  /* END SOLUTION */
}
function getLengthOfLongestElement(arr) {
  // your code here
  /* START SOLUTION */
  if (arr.length > 0 ){
      var max = 0; 
      arr.map( index => (index.length > max) ? max = index.length : 0); 
      return max; 
  }
  return 0; 

  /* END SOLUTION */
}

function getSmallestElementAtProperty(obj, key) {
    if ( obj.hasOwnProperty(key) == true ){
        if (typeof obj[key] == "object" ){
                if ( obj[key].length > 0){
                    var min = obj[key][0]; 
                    obj[key].map( index => (index < min) ? min = index : 0);
                    return min; 
                }   
                return undefined; 
        }
        return undefined
    }
    
    return undefined; 
}

function getLargestElementAtProperty(obj, key) {
  if ( obj.hasOwnProperty(key) == true ){
        if (typeof obj[key] == "object" ){
                if ( obj[key].length > 0){
                    var max = obj[key][0]; 
                    obj[key].map( index => (index > max) ? max = index : 0);
                    return max; 
                }   
                return undefined; 
        }
        return undefined
    }
    
    return undefined; 
}
function getAllButLastElementOfProperty(obj, key) {
  // your code here
  /* START SOLUTION */
    if ( obj.hasOwnProperty(key) == true && Array.isArray(obj[key]) == true && obj[key].length > 0){
       return obj[key].slice(0,obj[key].length-1);
    }
    return [];
  /* END SOLUTION */
}
function getAllButLastElementOfProperty(obj, key) {
  // your code here
  /* START SOLUTION */
    if ( obj.hasOwnProperty(key) == true && Array.isArray(obj[key]) == true && obj[key].length > 0){
        obj[key].splice(obj[key].length-1,1);
       return obj[key];
       
    }
    return [];
  /* END SOLUTION */
}
function getElementOfArrayProperty(obj, key, index) {
    if ( obj.hasOwnProperty(key) == true && Array.isArray(obj[key]) == true && obj[key].length > 0 && index < obj[key].length ){
        return obj[key][index];
    }
    return undefined; 
}
