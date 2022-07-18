import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any

  db:any={
    1000:{"acno":1000,"username":"Max","password":1000},
    1001:{"acno":1001,"username":"arun","password":1001},
    1002:{"acno":1002,"username":"varun","password":1002}
  }

  


  constructor() { }

saveDetails(){
  if(this.db){
    localStorage.setItem("database",JSON.stringify(this.db))
  }
  if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  }
}


  login(acno:any,pswd:any){

      let db=this.db

    if(acno in db){
      if( pswd == db[acno]["password"]){
       this.currentUser= db[acno]["username"]
       this.saveDetails()
        return true
      }
      else{
        alert('incorrect password')
        return false
      }
    }
    else{
      alert("user does not exists")
      return  false
    }
  }



//register

register(userame:any,acno:any,password:any){

  let db= this.db

  if(acno in db){
    return false
    
  }
  else{
    db[acno]={
      acno,
      userame,
      password,
      
      
    }
    this.saveDetails()
    return true
  }


}

viewevent(){
  
}



}
