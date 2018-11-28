import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ContactService {
  private baseUri = 'https://portfolio-contact-e7580.firebaseio.com/msg.json';

  constructor(private http: Http) {}

  sendMessage(fn: String, ln: String, email: String, msg: String) {
    return this.http.post(this.baseUri, {msg: fn + ' ' + ln + ' ' + email + ' ' + msg, date: new Date()});
  }
}
