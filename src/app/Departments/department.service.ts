import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  apiUrl = environment.baseApiUrl + 'departments';

  constructor(private client: HttpClient) { }

  getList(): Observable<Department[]> {
    return this.client.get<Department[]>(this.apiUrl);
  }

  add(dep:Department):Observable<Department> {
    return this.client.post<Department>(this.apiUrl,dep)
  }

  getById(id:number):Observable<Department>{
    return this.client.get<Department>(this.apiUrl+'/'+ id);
  }

  update(d:Department):Observable<void>{
    return this.client.put<void>(this.apiUrl + '/'+ d.id,d)
  }



}
