function monkey(arg){

    let obj=(()=>{
      function upvote(){
          this.upvotes++;
      }
        function downvote(){
            this.downvotes++;
        }
        function score(){
            let isTrue=this.upvotes+this.downvotes>50;
            let voidsAdd=Math.ceil(0.25*Math.max(this.upvotes,this.downvotes));
            let rating;
            if(that.upvotes/(this.upvotes+this.downvotes) > 0.66){
                rating = "hot";
            } else if((this.upvotes > 100 || this.downvotes > 100) && this.upvotes >= this.downvotes){
                rating = "controversial";
            } else if(this.downvotes > this.upvotes){
                rating = "unpopular";
            } else {
                rating = "new";
            }

            if(this.upvotes + this.downvotes < 10){
                rating = "new";
            }
            if(isTrue){
                return [this.upvotes + voidsAdd, this.downvotes + voidsAdd, this.upvotes - this.downvotes, rating];
            } else {
                return [this.upvotes, this.downvotes, this.upvotes - this.downvotes, rating];
            }

        }


        return{upvote,downvote,score}


    })()
      return obj[arg]();



}