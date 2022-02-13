import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  public title = ''

  constructor( private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.router.data.subscribe(data => this.title = data['title']);
  }

}
