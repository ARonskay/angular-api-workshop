import { Component, OnInit } from '@angular/core';
import { StarwarsService } from './starwars.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Star Wars roster</h1>
    <ul>
      <li *ngFor="let person of people">{{ person.name }}</li>
    </ul>
  `,
})
export class AppComponent implements OnInit {
  people: any[] = [];

  constructor(private readonly starwarsService: StarwarsService) {}

  ngOnInit() {
    this.starwarsService.getPeople().subscribe((data) => {
      this.people = data.results;
    });
  }
}
