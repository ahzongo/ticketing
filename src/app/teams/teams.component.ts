import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  public title = ''

  constructor( private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.router.data.subscribe(data => this.title = data['title']);
  }

}
