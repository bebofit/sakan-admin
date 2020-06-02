import { Component, OnInit } from "@angular/core";
import { AdminService } from "src/app/services/admin.service";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.css"]
})
export class SideNavComponent implements OnInit {
  items = [
    // {
    //   name: "Dashboard",
    //   icon: "dashboard",
    //   path: "dashboard"
    // },
    {
      name: "Property Requests",
      icon: "contact_support",
      path: "requests"
    },
    {
      name: "Calculator",
      icon: "person",
      path: "calculator"
    }
  ];

  constructor(private adminService: AdminService) {}

  ngOnInit() {}
}
