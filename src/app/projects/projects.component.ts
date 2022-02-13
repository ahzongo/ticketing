import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  public title = ''

  constructor( private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.router.data.subscribe(data => this.title = data['title']);
  }

  ngOnDestroy(): void {

  }

}
