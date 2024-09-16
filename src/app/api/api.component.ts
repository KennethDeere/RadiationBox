import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css',
})
export class ApiComponent {
  constructor(private _http: HttpClient) {
    this.test();
  }
  getJsonValue: any;
  postJsonValue: any;

  providor;

  test() {
    this._http.get('http://localhost:3000/').subscribe((value) => {
      console.log(value);
    });
  }
}
