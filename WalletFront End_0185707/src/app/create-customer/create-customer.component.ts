import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  hidden = false;
  

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  newCustomer(): void {
    
    window.location.reload()
    
  }

  save() {
    this.customerService.createCustomer(this.customer)
      .subscribe(data => console.log(data), error => console.log(error));
    // this.customer.accountId="";
    // this.customer.mobileno="";
    // this.customer.balance="";
    // this.customer.holdername="";
  }

  onSubmit() {
    this.hidden = true;
    this.save();
  }
}
