import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  @Input() types!: [];

  constructor() { }

  ngOnInit(): void {
  }

}
