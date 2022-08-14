import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  data = [
    {key: 'email', value: 'alvaroa.pavon@gmail.com' },
    {key: 'teléfono', value: '921-177-7363' },
    {key: 'github', value: 'www.github.com/bipper89' },
  ]

  stats = [
    {ability: 'HTML', value: 80},
    {ability: 'CSS', value: 80},
    {ability: 'Javascript', value: 80},
    {ability: 'Typescript', value: 80},
    {ability: 'Angular', value: 90},
    {ability: 'React', value: 60},
    {ability: 'Redux', value: 60},
    {ability: 'Spring Boot', value: 60},
    {ability: 'Quarkus', value: 60},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
