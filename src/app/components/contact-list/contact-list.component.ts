import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ContactService } from '../../service/contact.service';
import { RouterModule } from '@angular/router';
import { Contact } from '../../model/contact.interface';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    RouterModule
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export default class ContactListComponent implements OnInit {

  private readonly _serviceContact = inject(ContactService)


  contacts: Contact[] = [];

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll() {
    this._serviceContact.list().subscribe(
      contacts =>
        this.contacts = contacts
    )
  }

  deleteContact(contact: Contact) {
    this._serviceContact.delete(contact.id).subscribe(
      () => {
        this.loadAll();
      }
    )
  }

}
