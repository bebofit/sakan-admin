import { Component, OnInit } from "@angular/core";
import { AdminService } from "src/app/services/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.adminService
      .login(this.email, this.password)
      .subscribe((result: any) => {
        console.log(result);
        localStorage.setItem("token", result.data.token);
        this.router.navigateByUrl("/requests");
      });
  }
}
