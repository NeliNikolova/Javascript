function solve(n,k){
    n=Number(n);
    k=Number(k);

    let result = [1];

    for(let i=1; i<n; i++) {
        let startIndex = Math.max(0, i-k);
        let currentElement = result.slice(startIndex, startIndex + k).reduce((a, b) => a + b, 0);
        result.push(currentElement);
    }

    console.log(result.join(" "));
}
solve(8,2)