class Employe {
    
    constructor (name,salary){

        this.name = name ;
        this.changesalary = salary ;

    }

    get salary(){
        return this.changesalary
    }

    set salary(newsalary){
        if(newsalary > 0){

            this.changesalary = newsalary
        }
        else{
            console.log("the salary must be in positive")
        }
    }
}

const employ = new Employe("sani",3000)
console.log(employ.changesalary)