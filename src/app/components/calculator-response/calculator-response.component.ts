import { Component, OnInit, Input } from "@angular/core";
import { ICalculator } from "src/app/interfaces/ICalculator";
import { CalculatorService } from "src/app/services/calculator.service";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-calculator-response",
  templateUrl: "./calculator-response.component.html",
  styleUrls: ["./calculator-response.component.css"]
})
export class CalculatorResponseComponent implements OnInit {
  @Input() calcData: ICalculator;
  data: any;
  constructor(
    private calcService: CalculatorService,
    private modal: NgbActiveModal
  ) {}

  ngOnInit() {
    this.calcService.sendData(this.calcData).subscribe((res: any) => {
      console.log(res);
      this.data = res.data;
    });
  }

  Ok() {
    this.modal.close();
  }
}
