var filter = function(arr, fn) {
    let filteredarray = []
    for(let i =0;i<arr.length;i++){
        if(fn(arr[i],i)){
            filteredarray.push(arr[i])
        }
    }
    return filteredarray;
};