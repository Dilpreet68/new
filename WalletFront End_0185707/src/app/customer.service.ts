import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  private baseUrl = "http://localhost:3000/api/accounts";

  constructor(private http: HttpClient) {}

  getCustomer(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, customer);
  }

  updateCustomer(mobileno: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${mobileno}`, value);
  }

  deleteCustomer(mobileno: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/mobileno/${mobileno}`, {
      responseType: "text"
    });
  }

  getCustomersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCustomersByMobile(mobileno: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/mobileno/${mobileno}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, {
      responseType: "text"
    });
  }

  deposite(mobileno: any, amount: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/deposite/mobileno/${mobileno}/amount/${amount}`
    );
  }

  withdraw(mobileno: any, amount: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/withdraw/mobileno/${mobileno}/amount/${amount}`
    );
  }

  transfer(from: any, to: any, amount: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/transfer/${from}/${to}/${amount}`
    );
  }
}
