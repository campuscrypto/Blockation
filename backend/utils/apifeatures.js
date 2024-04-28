class Apifeatures{
    constructor(query,queryStr){
        this.query=query;
        this.queryStr=queryStr
    }
    //search feature
    search(){
        const keyword=this.queryStr.keyword ? {
            originalfileName:{
                $regex:this.queryStr.keyword,
                $options:"i"
            }
        }:{};

        this.query=this.query.find({...keyword})
        return this
    }
 
    pagination(resultPerPage){
        const currentPage=Number(this.queryStr.page)||1; 
        const skip= resultPerPage * (currentPage-1)

        this.query=this.query.limit(resultPerPage).skip(skip)//This .limit tells about how much product we need to display and .skip tells about how much product we need to skip
        
        return this
    }
}

module.exports=Apifeatures
