function solve(object){
        let isValid=true;
        let regexMethod=/GET|POST|DELETE|CONNECT/g;
        let regexURI=/[a-z0-9.]+/g;
        let regexVersion=/HTTP\/0.9|HTTP\/1.0|HTTP\/1.1|HTTP\/2.0/g;
        let regexMessage=/[^<>\&'"]*/g;
        if(!regexMethod.test(object.method)|| object.method!==" "){
            throw new Error("Invalid request header: Invalid Method")
            return;
        };
        if(!regexURI.test(object.uri)|| object.uri!==" "){
            throw new Error('Invalid request header: Invalid URI')
            return;
        }
        if(!regexVersion.test(object.version)|| object.version!==" "){
            throw new Error("Invalid request header: Invalid Version")
             return;}
    if(!regexMessage.test(object.message)){
        throw new Error("Invalid request header: Invalid Message")
        return;
    }

    return object;

}
solve({
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'


})