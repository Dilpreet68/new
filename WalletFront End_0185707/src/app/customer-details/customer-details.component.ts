import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

import { CustomersListComponent } from '../customers-list/customers-list.component';

@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Customer;

  constructor(private customerService: CustomerService, private listComponent: CustomersListComponent) { }

  ngOnInit() {
    this.customerService.updateCustomer(this.customer. accountId,
      { mobileno: this.customer.mobileno, holdername: this.customer.holdername,balance:this.customer.balance })
      .subscribe(
        data => {
          console.log(data);
          this.customer = data as Customer;
        },
        error => console.log(error));
  }

  // updateActive(isActive: boolean) {
  //   this.customerService.updateCustomer(this.customer. accountId,
  //     { mobileno: this.customer.mobileno, holdername: this.customer.holdername,balance:this.customer.balance })
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.customer = data as Customer;
  //       },
  //       error => console.log(error));
  // }

  // deleteCustomer() {
  //   this.customerService.deleteCustomer(this.customer.accountId)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.listComponent.reloadData();
  //       },
  //       error => console.log(error));
  // }
}
