function printProduct(strArr){
    let map=new Map();
        for(let str of strArr){
            let product=str.split(/\s*:\s*/g);
            let firstLetter=product[0][0];
            let productName=product[0];
            let price=Number(product[1]);

            if(!map.has(firstLetter)){
                map.set(firstLetter,new Map());

            }
            if (!map.get(firstLetter).has(productName)){
                map.get(firstLetter).set(productName,price);
            }
        }
            map=[...map].sort();
       for(let [letter,product] of map){
            console.log(`${letter}`);
            product=[...product].sort();
            for(let [name,price] of product){
                console.log(`  ${name}: ${price}`);
            }
       }

}

printProduct(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);