import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  users:any;
  updateu:any;
  constructor(private service:DataService){}
  ngDoCheck(){
    this.service.getAllUsers().subscribe((res)=>this.users=res) 
  }
  updateNow(){
    this.service.updateuser(this.updateu.userName,this.updateu);
  }
  userSelected(s:any){
    this.updateu=s;
  }
  deleteNow(uname:any){
    this.service.deleteuser(uname)
  }

}
