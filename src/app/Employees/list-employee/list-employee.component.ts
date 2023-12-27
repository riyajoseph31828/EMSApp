import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { DepartmentService } from 'src/app/Departments/department.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  list: Employee[]=[];
  private EmployeeId=0;

  constructor(private empService: EmployeeService,private depService: DepartmentService){}


  ngOnInit(): void {
    this.empService.getList().subscribe(result=>{
      console.log(result);
      this.list = result;
    }, err=>{
      alert(err);
    })
   
  }
  delete() {
    console.log('Employee to delete:' + this.EmployeeId);
    this.empService.delete(this.EmployeeId).subscribe(()=>{ //subscribe return type is void. so ()=> used
        alert('delete successful');
        this.ngOnInit(); //reloading that samepage without refreshing
    }, err=>{
      console.log(err);
      alert('error');
    })
  }

  setEmployeeId(id: number) {
    this.EmployeeId = id;
  }

  getGender(gen:number):string{
    if(gen===1){
      return 'Male';
    }
    else{
      return 'Female';
    }
  }



}
