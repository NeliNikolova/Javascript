function capture(arr){
    let pattern=/(www)\.[A-Za-z0-9\-]+(\.[a-z]+)+/g;

    let match;
    let data=[];
    for(let a of arr){
        while(match=pattern.exec(a)){
            data.push(match[0]);
        }
    }
    console.log(data.join('\n'));
}
capture(["Join WebStars now for free, at www.web-stars.com", "You can also support our partners:", "Internet - www.internet.com", "WebSpiders - www.webspiders101.com", "Sentinel - www.sentinel.-ko "]);