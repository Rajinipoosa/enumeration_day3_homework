var arrayTasks = {

	concat: function (arr1, arr2) {
		var newArray = [];
    for(i = 0 ;i < arr2.length; i++){
    	  arr1.push(arr2[i]);
    	} 
    return arr1;
     
	 },

	insertAt: function (arr, itemToAdd, index) {
		 arr.splice(index, 0, itemToAdd);
		    
		    return arr;
	},
	

	square: function (arr) {
		 var newArray = [];
		     for(var item of arr){
		     	newArray.push(item*item);
		 }
		 return newArray;
		
	},

	sum: function (arr) {
		var total = 0;
		   for (var item of arr){
		     total += item;
		   }
		   return total;
		 },

	findDuplicates: function (arr) {
		var newArray = [];
		for(i = 0; i < arr.length; i++){
			if(arr[i] != newArray){
				newArray.push(arr[i]);
			}

		}
      return newArray;

			
		
		
	},

	removeAndClone: function (arr, valueToRemove) {
		 var newArray = [];
		 for(var i = 0; i < arr.length; i++){
		 	if(arr[i] != valueToRemove){
		 		 newArray.push(arr[i]);
		 	}
		 }
		 return newArray;
		
	 },

	findIndexesOf: function (arr, itemToFind) {
		var newArray = [];
		for(var i = 0; i < arr.length; i++){
			if(arr[i] === itemToFind){
				    newArray.push(i);
				 // newArray.push( arr.indexOf(arr[i]));
			}
		}
		return newArray;
		
	}

	// sumOfAllEvenNumbersSquared: function (arr) {
	// 	total = 0;
	// 	for (var item of arr){
	// 	  if(item % 2 === 0){
	// 	  	total += item * item;
	// 	  }
	// 	}
	// 	return total;
	// }

}

module.exports = arrayTasks
