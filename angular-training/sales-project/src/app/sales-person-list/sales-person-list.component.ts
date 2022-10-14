import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // Create Array of Objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("KK", "Woo", "kkwoo@sales.com", 1000),
    new SalesPerson("John", "Doe", "jd@sales.com", 2000),
    new SalesPerson("Claire", "St.", "sclaire@sales.com", 3000),
    new SalesPerson("May", "Throng", "emtee@sales.com", 4000),

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
