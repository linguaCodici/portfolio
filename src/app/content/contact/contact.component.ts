import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from 'src/app/_service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {
  contactForm: FormGroup;
  pos: number;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
    const formData = this.contactForm.value;
    this.contactService.sendMessage(formData.firstname, formData.lastname, formData.email, formData.message)
      .subscribe(
        (res) => { console.log(res); },
        (error) => { console.log(error); }
      );
    this.contactForm.reset();
    confirm('Your message is on its way!');
  }

  ngAfterViewInit() {
    this.pos = document.getElementById('contact').offsetTop;
  }
}
