import { Component, OnInit } from "@angular/core";
import { AdminService } from "src/app/services/admin.service";

@Component({
  selector: "app-requests",
  templateUrl: "./requests.component.html",
  styleUrls: ["./requests.component.css"]
})
export class RequestsComponent implements OnInit {
  constructor(private adminService: AdminService) {}
  reqs: any;
  async ngOnInit() {
    await this.getRequests();
  }

  async getRequests() {
    try {
      const result: any = await this.adminService.getRequests();
      this.reqs = result.data;
    } catch (error) {
      console.log(error);
    }
  }

  async accept(i) {
    try {
      const result = await this.adminService.respondToAddRequest(
        this.reqs[i]._id,
        "accepted"
      );
      this.reqs.slice(i, 1);
    } catch (error) {
      console.log(error);
    }
  }

  async reject(i) {
    try {
      const result = await this.adminService.respondToAddRequest(
        this.reqs[i]._id,
        "rejected"
      );
      this.reqs.slice(i, 1);
    } catch (error) {
      console.log(error);
    }
  }
}
