function getSorted(){
    return{
        array:[],
        size:0,
        add:function(element){
            this.array.push(element);
            this.size++;
            this.sort();
        },
        remove:function(index){
            if(index>=0 && index<this.array.length){
                this.array.splice(index,1);
                this.size--;
            }
        },
        get:function(index){
            if(index>=0 && index<this.array.length){
                return   this.array[index];
            }
        },
        toString:function(){
            return this.array.join(" ");
        },
        sort:function(){
            this.array=this.array.sort((a,b)=>a-b);
        }

    }
}
