import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { DepartmentService } from 'src/app/Departments/department.service';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Gender } from '../gender';
import { Department } from 'src/app/Departments/department';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  form!: FormGroup;
  empId: number=0;
  emp1!: Employee;
  list: Department[]=[];

constructor(private depService:DepartmentService,private empService: EmployeeService,private route:ActivatedRoute,private router:Router,private dtpipe:DatePipe){}
  ngOnInit(): void {
    this.empId = this.route.snapshot.params['id'];
    console.log(this.empId);


    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('',Validators.required),
      dateOfBirth : new FormControl('',Validators.required),
      gender: new FormControl(Gender.Male,Validators.required),
      mobileNo: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      salary: new FormControl('',[Validators.min(1000),Validators.required]),
      departmentId : new FormControl('',Validators.required) 
    });


    this.depService.getList().subscribe(result => { //Here we are storing the data from the category component to the initialised list
      //it is done by the object of the service class
      console.log(result);
      this.list = result;
    }, err => {
      console.log(err);
      alert(err);
    })

    //service method
    this.empService.getById(this.empId).subscribe(p => {
      console.log(p);
      this.emp1= p;

      //this.form.patchValue(this.product1);
      this.form.setValue({
        id: this.emp1.id,
        name: this.emp1.name,
        dateOfBirth: this.dtpipe.transform(this.emp1.dateOfBirth,'yyyy-MM-dd'),
        gender: this.emp1.gender,
        mobileNo: this.emp1.mobileNo,
        email: this.emp1.email,
        salary: this.emp1.salary,
        departmentId: this.emp1.departmentId
      });
    }, err => {
      console.log(err);
      alert('error');
    });



  }



  submit() {
    this.empService.update(this.form.value).subscribe(()=>{   //observable is returning void,==> ()
        alert('updated successfully');
        //navigate to employee list
        this.router.navigate(['\employees']);
    },err=>{
      console.log(err);
      alert('error');
    })

    
  }

}
