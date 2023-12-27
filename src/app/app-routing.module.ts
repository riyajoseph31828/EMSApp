import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDepartmentComponent } from './Departments/list-department/list-department.component';
import { AddDepartmentComponent } from './Departments/add-department/add-department.component';
import { UpdateDepartmentComponent } from './Departments/update-department/update-department.component';
import { ListEmployeeComponent } from './Employees/list-employee/list-employee.component';
import { AddEmployeeComponent } from './Employees/add-employee/add-employee.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { UpdateEmployeeComponent } from './Employees/update-employee/update-employee.component';
import { routeAuthGuard } from './Auth/route-auth.guard';

const routes: Routes = [
  {path: 'departments', component: ListDepartmentComponent, canActivate:[routeAuthGuard]},
  {path : 'departments/add', component: AddDepartmentComponent, canActivate:[routeAuthGuard]},
  {path: 'departments/edit/:id', component:UpdateDepartmentComponent, canActivate:[routeAuthGuard]},
  {path: 'employees', component: ListEmployeeComponent, canActivate:[routeAuthGuard]},
  {path: 'employees/add', component: AddEmployeeComponent, canActivate:[routeAuthGuard]},
  {path: 'employees/edit/:id', component: UpdateEmployeeComponent, canActivate:[routeAuthGuard]},
  {path:'' , component:LoginComponent}, //initially loading login
  {path:'register',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
