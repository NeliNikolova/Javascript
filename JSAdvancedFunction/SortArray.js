function sort(arr,order){
    let ascendingOrder=function(a,b){
        return a-b;
    }
    let descendingOrder=function(a,b){
        return b-a;
    }
    let object={
        'asc':ascendingOrder,
        'desc':descendingOrder
    }
    return arr.sort(object[order]);
}