import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../department.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../department';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit{
  form!: FormGroup;
  departmentId: number=0;
  department1!: Department;

  constructor(private depService: DepartmentService ,private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    this.departmentId = this.route.snapshot.params['id'];

    console.log(this.departmentId);

    //initialize form
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('',Validators.required)
    });


    //service method
    this.depService.getById(this.departmentId).subscribe(result => {
      console.log(result);
      this.department1 = result;

      //this.form.patchValue(this.product1);
      this.form.setValue({
        id: this.department1.id,
        name: this.department1.name,

      });
    }, err => {
      console.log(err);
      alert('error');
    });

  }

  submit() {
    this.depService.update(this.form.value).subscribe(()=>{   //observable is returning void,==> ()
      alert('updated successfully');
      //navigate to department list
      this.router.navigate(['\departments']);
  },err=>{
    console.log(err);
    alert('error');
  })

} 
  
  
}

