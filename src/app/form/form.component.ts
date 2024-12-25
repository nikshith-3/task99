import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  viewForm:FormGroup=new FormGroup({});
  constructor(private fb:FormBuilder,private router:Router,private service:DataService){
    this.viewForm=this.fb.group({
      userName:['',Validators.required],
      userAge:['',Validators.required],
      userEmail:['',Validators.required],
      userPhone:['',Validators.required]

    })
  }
  addNow(){
    this.service.addNow(this.viewForm.value)
  }
  
  

}
