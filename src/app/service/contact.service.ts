import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly http = inject(HttpClient)

  list() {
    return this.http.get('http://localhost:8080/api/contacts');
  }

  get(id: number) {
    return this.http.get(`http://localhost:8080/api/contacts/${id}`);
  }
}
