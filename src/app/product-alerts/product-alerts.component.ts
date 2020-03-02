import { Component, OnInit } from '@angular/core';
// Set up the new product alerts component to receive a product as input:
import { Input } from '@angular/core';

// Notice the @Component() decorator. This indicates that the following class is a component. It provides metadata about the component, including its selector, templates, and styles.

// The selector identifies the component. The selector is the name you give the Angular component when it is rendered as an HTML element on the page. By convention, Angular component selectors begin with the prefix app-, followed by the component name.

// The template and style filenames reference the HTML and CSS files that StackBlitz generates.

// The component definition also exports the class, ProductAlertsComponent, which handles functionality for the component.

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  // In the ProductAlertsComponent class definition, define a property named product with an @Input() decorator. The @Input() decorator indicates that the property value passes in from the component's parent, the product list component.

  @Input() product;

  constructor() { }

  ngOnInit() {
  }

}