import { Component, OnInit, Input } from "@angular/core";
import { Customer } from "../customer";
import { CustomerService } from "../customer.service";
import{ROUTES, Router}from '@angular/router';
import { CustomersListComponent } from "../customers-list/customers-list.component";
@Component({
  selector: "search-customers",
  templateUrl: "./search-customers.component.html",
  styleUrls: ["./search-customers.component.css"]
})
export class SearchCustomersComponent implements OnInit {
  @Input() customer: Customer;
  mobileno: any;
  customers: Customer[];
  
  

  constructor(private dataService: CustomerService,private router:Router) {}

  ngOnInit() {
    this.mobileno ="";
  }

  private searchCustomers() {
    
    this.dataService
      .getCustomersByMobile(this.mobileno)
      .subscribe(customers => (this.customers = customers));
     
      
  }

  onSubmit() {
    this.searchCustomers();
  }

  onUpdate() {
    
    this.searchCustomers();
  }

  deleteCustomer(data :number):any {

    
    if(this.dataService.deleteCustomer(this.mobileno).subscribe(
      data => {
        console.log(data);
        
      },
      error => console.log(error)
    ))
    {
     
      
      if (confirm('Are You Sure You want To delete ?')) {
        
        this.customers.splice(data,1);
   }
    }
  }

  updateCustomer() {
    this.dataService
      .updateCustomer(this.mobileno, {
        id: this.customer.accountId,
        mobileno: this.customer.mobileno,
        holdlername: this.customer.holdername,
        balance: this.customer.balance
      })
      .subscribe(
        data => {
          console.log(data);
          this.customer = data as Customer;
        },
        error => console.log(error)
      );
    
  }
}
