import { TestBed } from '@angular/core/testing';
 
import { DepartmentService } from './department.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Department } from './department';
 
describe('DepartmentService', () => {
  let service: DepartmentService;
  let httpMock: HttpTestingController;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[DepartmentService]
    });
    service = TestBed.inject(DepartmentService);
    httpMock= TestBed.inject(HttpTestingController);
  });
 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
 
  it('get department list',()=>{
    let dept:Department[]=[
      {id:1, name:'Human Resource'},
      {id:2, name:'DevOps'}
    ];
 
    service.getList().subscribe(list=>{
      expect(list).toEqual(dept);
    });
 
    const req = httpMock.expectOne(`${service.apiUrl}`);
    expect(req.request.method).toBe('GET');
    req.flush(dept);
  });
 
});