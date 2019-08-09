import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Account} from "./app.Account"
import { Observable, Subject, empty } from "rxjs";
//import { runInThisContext } from 'vm';
@Injectable({
  providedIn: "root"
})
export class AccountService {
  API_URL: string = "http://localhost:3000/accounts";
  constructor(private httpClient: HttpClient) {}

  create(acc: Account):Observable<any> {
    let options = { "headers": 
                  new HttpHeaders({ "Content-Type": "application/json" }) };
    return this.httpClient.post<Account>(this.API_URL + "/create", acc, options);
  }


}
