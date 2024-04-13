import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getMenuData(): Observable<any> {
    const apiUrl = 'https://url-backendapi.onrender.com/food_get_menu';
    return this.http.get(apiUrl);
  }
}

