import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, AfterViewInit {
  @ViewChild(AboutComponent) aboutComp: AboutComponent;
  @ViewChild(ProjectsComponent) projectsComp: ProjectsComponent;
  @ViewChild(ContactComponent) contactComp: ContactComponent;
  a_pos: number;
  p_pos: number;
  c_pos: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.a_pos = this.aboutComp.pos;
    this.p_pos = this.projectsComp.pos;
    this.c_pos = this.contactComp.pos;
  }

}
