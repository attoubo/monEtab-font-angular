import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environmentDev } from '../../../../environments/environement.dev';

@Injectable({
  providedIn: 'root'
})

export class BaseService {
  private baseUrl: string = environmentDev.baseUrl;

  constructor(private httpClient: HttpClient) { }

  // getOne(endpoint: string, id: string): Observable<any> {
  //   return this.httpClient.get(`${this.baseUrl}/${endpoint}/${id}`);
  // }

  getOne<T>(endpoint: string, id: string): Observable<T> {
    return this.httpClient.get<T>(`${this.baseUrl}/${endpoint}/${id}`);
}


  getOneBySlug(endpoint: string, slug: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${endpoint}/${slug}`);
  }

  // getAll(endpoint: string, id?: any) {
  //   return id !== null
  //     ? this.httpClient.get(`${this.baseUrl}/${endpoint}/${id}`)
  //     : this.httpClient.get(`${this.baseUrl}/${endpoint}`);
  // }

  getAll<T>(endpoint: string, id?: any): Observable<T> {
    // return id !== null
    //   ? this.httpClient.get<T>(`${this.baseUrl}/${endpoint}/${id}`)
      return this.httpClient.get<T>(`${this.baseUrl}/${endpoint}`);
  }
  

  // create(endPoint: string, data: any, item?: any): Observable<any>{
  //   return item !== null
  //     ? this.http.post(${this.baseUrl}/${endPoint}/${item}, data)
  //     : this.http.post(${this.baseUrl}/${endPoint}, data);
  // }

create(endPoint: string, data: any): Observable<any>{
    return  this.httpClient.post(`${this.baseUrl}/${endPoint}`, data);
}
createById(endPoint: string, data: any, item: any): Observable<any>{
  return this.httpClient.post(`${this.baseUrl}/${endPoint}/${item}`, data);
}

  updateData(endpoint: string, data: any, id: string) {
    return this.httpClient.put(`${this.baseUrl}/${endpoint}/${id}`, data);
  }

  deleteData(endpoint: string, id: string) {
    return this.httpClient.delete(`${this.baseUrl}/${endpoint}/${id}`);
  }
}
