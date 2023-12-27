import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../department';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {
  list: Department[] =[];

  constructor(private depService: DepartmentService){}

  ngOnInit(): void {
    this.depService.getList().subscribe(result=>{
      console.log(result);
      this.list = result;
    }, err=>{
      alert(err);
    })
   
  }

}
