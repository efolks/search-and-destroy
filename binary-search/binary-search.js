'use strict';

// Complete this algo
// const binarySearch = (array, target) => {
// 	console.log('ARRAY: ', array)
// 	if(array.length === 1 && array[0] !== target){
// 		return false;
// 	}
// 	if(array.length === 0) {
// 		return false
// 	}
// 	const midPoint = Math.floor(array.length/2);
// 	console.log('MIDPOINT: ', midPoint)
// 	if(array[midPoint] === target){
// 		return true
// 	} else if (array[midPoint] > target){
// 		return binarySearch(array.slice(0, midPoint), target);
// 	} else if (array[midPoint] < target){
// 		return binarySearch(array.slice(midPoint), target);
// 	}
	
// };

const binarySearch = (array, target) => {
	let leftPointer = 0;
	let rightPointer = array.length - 1;
	let midPoint = Math.floor((leftPointer + rightPointer) / 2);
	
	function movePointers(leftPointer, rightPointer){
		if(leftPointer > rightPointer){
			return false
		}
	}

	console.log('ARRAY: ', array)
	if(array.length === 1 && array[0] !== target){
		return false;
	}
	if(array.length === 0) {
		return false
	}
	
	console.log('MIDPOINT: ', midPoint)
	if(array[midPoint] === target){
		return true
	} else if (array[midPoint] > target){
		rightPointer = midPoint - 1
		return movePointers(leftPointer, rightPointer);
	} else if (array[midPoint] < target){
		leftPointer = midPoint;
		return binarySearch(array.slice(midPoint), target);
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch