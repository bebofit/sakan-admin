import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http.post(`${environment.apiUrl}/admin/login`, {
      email,
      password
    });
  }

  async getRequests() {
    return this.http
      .get(`${environment.apiUrl}/admin/property/requests`, {})
      .toPromise();
  }

  async respondToRentRequest(rentReqId: string, status: string) {
    return this.http
      .post(`${environment.apiUrl}/admin/property/rent/req`, {
        rentReqId,
        status
      })
      .toPromise();
  }

  async respondToAddRequest(addReqId: string, status: string) {
    return this.http
      .post(`${environment.apiUrl}/admin/property/add/req`, {
        addReqId,
        status
      })
      .toPromise();
  }
}
