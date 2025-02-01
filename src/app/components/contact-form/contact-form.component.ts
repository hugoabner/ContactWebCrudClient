import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ContactService } from '../../service/contact.service';
import { Contact } from '../../model/contact.interface';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export default class ContactFormComponent implements OnInit{

  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);
  private readonly router = inject(Router);
  private readonly activateRoute = inject(ActivatedRoute);

  form? : FormGroup;
  contact?: Contact;


  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    if (id) {
      this.contactService.get(parseInt(id)).subscribe(
        contact => {
          this.contact = contact;
          this.form = this.fb.group({
          name: [contact.name, [Validators.required]],
          email: [contact.email, [Validators.required]]
          });
        }
      )
    } else {
      this.form = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required]]
      })
    }
  }

  create() {
    const contact =  this.form!.value
    this.contactService.create(contact).subscribe(
      () => {
        this.router.navigate(['/'])
      }
    );
  }

}
