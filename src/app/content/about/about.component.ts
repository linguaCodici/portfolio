import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {
  pos: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.pos = document.getElementById('about').offsetTop;
  }

}
