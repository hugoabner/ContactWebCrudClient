import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ContactService } from '../../service/contact.service';
import { RouterModule } from '@angular/router';

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


  contacts: any[] = [];

  ngOnInit(): void {
    this._serviceContact.list().subscribe(
      (contacts: any ) =>
        this.contacts = contacts
    )
  }



}
