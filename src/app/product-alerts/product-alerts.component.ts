import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notifyalert = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  Notify()
  {
    window.alert('Button Clicked.Check in .ts file of this page');
  }

}