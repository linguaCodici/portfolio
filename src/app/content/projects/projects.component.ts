import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor() { }

  ngOnInit() {
    this.projects = [
      new Project(
          'Recipes editing and Shopping List Printing Service',
          'https://bit.ly/2QnX4w9',
          [],
          ['Frontend web application with Angular6 and Bootstrap3',
          'Integrated data storage and authentication via Google Firebase and deployment on AWS',
          'Optimized with lazy loading and pre-loading lazy loading components']
        ),
      new Project(
        'David Chu\'s Chinese Restaurant Website',
        'https://bit.ly/2Apg33P',
        [],
        ['Frontend web application with AngularJS and Bootstrap',
          'Featuring a menu page which pulls data from API automatically']
      ),
      new Project(
        'Raceday Application',
        'https://bit.ly/2yDYs7d',
        [],
        ['Rails backend application integration with PostgresSQL. ',
          'Allows racers registration and performance records queries']
      ),
      new Project(
        'Binary Tree Iterator Traversals',
        '',
        [],
        // tslint:disable-next-line:max-line-length
        ['Abstract C++11 iterator class which allows re-usability of code for derived pre-order, in-order, and post- order tree traversals classes.']
      ),
      new Project(
        'Graph Visualization on Linux Terminal',
        '',
        [],
        // tslint:disable-next-line:max-line-length
        ['A visualization of graph data structure outputted to terminal after applying reinforcement learning algorithm. C++ (Graphviz)']
      ),
    ];
  }

}
