class Person {
    constructor(fname,lname){
        this.fname = fname;
        this.lname = lname;
    }
    getfullName(){
        return (this.fname+' '+this.lname)
    }
    
    setName(){
        return (this.fname+' '+this.lname)
    }
}


module.exports = Person;