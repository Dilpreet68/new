import { Component, OnInit } from "@angular/core";
import { AccountService } from "./app.accountService";
import { Account } from "./app.Account";
import { ROUTES, Router } from "@angular/router";

@Component({
  selector: "add-comp",
  templateUrl: "addAccount.html"
})
export class AddAccountComponent implements OnInit {
  acc: Account = null;

  constructor(private empService: AccountService) {}

  ngOnInit() {
    this.acc = new Account();
  }

  addAccount() {
    console.log("About to create " + this.acc.acc_Balance);
    this.empService.create(this.acc).subscribe(result => {
      console.log(result.statusText);
    });
  }
}
