import { Injectable } from '@angular/core';
import { users } from './users';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  updateuser:any;
  userList:users[]=[
    {
    userName:"Safi",
    userAge:40,
    userEmail:"safi12@gmail.com",
    userPhn:4561237891
    },
    {
      userName:"rabheel",
      userAge:32,
      userEmail:"rabheel@gmail.com",
      userPhn:456127842
      },
      {
        userName:"sahid raju",
        userAge:50,
        userEmail:"sahid@gmail.com",
        userPhn:4562356956
        },
        {
          userName:"Sukku",
          userAge:20,
          userEmail:"safi12@gmail.com",
          userPhn:4561237891
          }

  
  
];
getAllUsers(){
  return of(this.userList)
}
addNow(newuser:any){
  this.userList.push(newuser)
}
deleteuser(uname:any){
  let index=this.userList.findIndex((e)=>e.userName==uname);
  if(index!=-1){
    this.userList.splice(index,1)
  }
}
updateusers(uname:any,newpro:any){
  let index=this.userList.findIndex((u)=>u.userName==uname);
    if(index!=-1){
      this.userList.splice(index,1,newpro);
    }
    console.log(this.updateusers)
  

}

  
  constructor() { }
}
