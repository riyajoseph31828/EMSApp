import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDepartmentComponent } from './add-department.component';
import { DepartmentService } from '../department.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
 
describe('AddDepartmentComponent', () => {
    let component: AddDepartmentComponent;
    let fixture: ComponentFixture<AddDepartmentComponent>;
    let departmentService: DepartmentService;
    let router: Router;
   
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddDepartmentComponent],
            imports: [
                ReactiveFormsModule,
                RouterTestingModule,
                HttpClientTestingModule,
            ],
            providers: [DepartmentService],
        }).compileComponents();
    });
 
    beforeEach(() => {
        fixture = TestBed.createComponent(AddDepartmentComponent);
        component = fixture.componentInstance;
        departmentService = TestBed.inject(DepartmentService);
        router = TestBed.inject(Router);
        fixture.detectChanges();
    });
 
    it('should create', () => {
        expect(component).toBeTruthy();
    });
 
 
    it('should initialize the form with default values', () => {
        expect(component.form).toBeDefined();
        expect(component.form instanceof FormGroup).toBeTruthy();
        expect(component.form.get('id')?.value).toEqual(0);
        expect(component.form.get('name')?.value).toEqual('');
        expect(component.form.get('name')?.hasError('required')).toBeTruthy();
    });
 
});