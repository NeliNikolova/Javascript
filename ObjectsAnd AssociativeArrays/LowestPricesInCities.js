function findLowestPrice(input) {
    let map = new Map();

    for(let line of input) {
        let tokens = line.split(" | ");
        let town = tokens[0];
        let product = tokens[1];
        let price = Number(tokens[2]);

        if(! map.has(product)) {
            map.set(product, new Map());
        }

        map.get(product).set(town, price);
    }

    for(let [product, insideMap] of map) {
        let lowestPrice = Number.POSITIVE_INFINITY;
        let townWithLowestPrice = "";
        for(let [town, price] of insideMap) {
            if(price < lowestPrice) {
                lowestPrice = price;
                townWithLowestPrice = town;
            }
        }

        console.log(`${product} -> ${lowestPrice} (${townWithLowestPrice})`);
    }
}
findLowestPrice(["Sample Town | Sample Product | 1000", "Sample Town | Orange | 3", "Sample Town | Peach | 1", "Sofia | Orange | 2", "Sofia | Peach | 2", "New York | Sample Product | 1000.1", "New York | Burger | 10"]);