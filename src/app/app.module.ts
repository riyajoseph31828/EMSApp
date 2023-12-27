import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDepartmentComponent } from './Departments/add-department/add-department.component';
import { ListDepartmentComponent } from './Departments/list-department/list-department.component';
import { UpdateDepartmentComponent } from './Departments/update-department/update-department.component';
import { AddEmployeeComponent } from './Employees/add-employee/add-employee.component';
import { ListEmployeeComponent } from './Employees/list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './Employees/update-employee/update-employee.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { DatePipe } from '@angular/common';
import { TokenInterceptor } from './Auth/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AddDepartmentComponent,
    ListDepartmentComponent,
    UpdateDepartmentComponent,
    AddEmployeeComponent,
    ListEmployeeComponent,
    UpdateEmployeeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
