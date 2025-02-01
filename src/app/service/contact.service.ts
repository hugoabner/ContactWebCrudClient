import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Contact } from '../model/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly API_URL = 'http://localhost:8080/api/contacts';
  private readonly http = inject(HttpClient)

  list() {
    return this.http.get<Contact[]>(
      this.API_URL
    );
  }

  get(id: number) {
    return this.http.get<Contact>(
      `${this.API_URL}/${id}`
    );
  }

  create(contact: Contact) {
    return this.http.post<Contact>(
      this.API_URL, contact
    );
  }

  update(id: number, contact: Contact) {
    return this.http.put<Contact>(
      `${this.API_URL}/${id}`, contact
    );
  }

  delete(id: number) {
    return this.http.delete<void>(
       `${this.API_URL}/${id}`
    );
  }
}
