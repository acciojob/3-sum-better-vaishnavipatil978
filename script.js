function threeSum(arr, target) {
// write your code here

	let distance = 999999;
	let ans = 0;

	for(let i = 0 ; i < arr.length-2 ; i++){
		for(let j = i+1 ; j < arr.length-1 ; j++){
			for(let k = j+1 ; k < arr.length ; k++){
				let sum = arr[i]+arr[j]+arr[k];

				if(Math.abs(sum-target)<distance){
					distance = Math.abs(sum-target);
					ans = sum;
				}
			}
		}
	}

	return ans;
  
}

module.exports = threeSum;
