import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class CalculatorService {
  constructor(private http: HttpClient, private router: Router) {}

  sendData(data: any) {
    return this.http.post(`${environment.apiUrl}/calculator/calc`, data);
  }
}
