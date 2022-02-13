import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { TeamsComponent } from './teams/teams.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {
    path: 'teams',
    component: TeamsComponent,
    data : {'title': 'My Teams'}
  },
  {
    path: "projects",
    component: ProjectsComponent,
    data : {'title': 'My Projects'}
  },
  {
    path: "tickets",
    component: TicketsComponent,
    data : {'title': 'My Tickets'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
