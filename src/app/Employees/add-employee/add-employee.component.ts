import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { DepartmentService } from 'src/app/Departments/department.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Department } from 'src/app/Departments/department';
import { Gender } from '../gender';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  form!:FormGroup;
  list: Department[]=[];
  constructor(private empService:EmployeeService,private depService:DepartmentService,private router:Router){}
  
  ngOnInit(): void {
    //initialize form
  this.form = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('',Validators.required),
    dateOfBirth : new FormControl('',Validators.required),
    gender: new FormControl(Gender.Male,Validators.required),
    mobileNo: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    salary: new FormControl('',[Validators.min(1000),Validators.required]),
    departmentId : new FormControl('',Validators.required) 
  })
  this.depService.getList().subscribe(result=>{
    console.log(result);
    this.list=result;
  },err=>{
    console.log(err);
    alert(err);
  })
  }
  submit(){
    console.group(this.form.value);
    this.empService.add(this.form.value).subscribe(result=>{
      alert('added successfully');
      console.log(this.form.value);
      //redirect to product list
      this.router.navigate(['/employees']);
    },err=>{
      alert('error');
      console.log(err);
    })
  }
  
  

}
