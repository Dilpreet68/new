import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
    selector: 'customer-operation',
    templateUrl: './operation.component.html'
    //styleUrls: ['./customer-details.component.css']
  })

export class OperationComponent{
    @Input() customer: Customer;
    mobileno: any;
    amount:any
    fromMobileno:any
    toMobileno:any
    customers: Customer[];
    result:any="";
    flag:any=false;

    constructor(private dataService: CustomerService) { }


   
    newCustomer(): void {
    
      window.location.reload()
      
    }

      
    
      onDeposite() {
        this.flag=false
        this.result="";
       if(this.dataService.deposite(this.mobileno,this.amount)
          .subscribe(customers => this.customers = customers))
          {
            this.flag=true;
            this.result="Money has been Deposited";
           
          }
      }

      
    
      onWithdraw() {
        this.flag=false;
        this.result="";
        if( this.dataService.withdraw(this.mobileno,this.amount)
        .subscribe(customers => this.customers = customers))
        {
          this.flag=true;
          this.result="Money has been Withdrawn";
        }
        
      }

      new()

      {
        this.flag=false;
        this.result="";
      }
      
    
      onTransfer() {
        this.flag=false;
        this.result="";
        if( this.dataService.transfer(this.fromMobileno,this.toMobileno,this.amount)
        .subscribe(customers => this.customers = customers))
        {
          this.flag=true;
          this.result="Money has been Transferred";
         
        }
      }
}