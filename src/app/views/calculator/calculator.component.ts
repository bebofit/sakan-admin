import { Component, OnInit } from "@angular/core";
import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from "@angular/forms";
import { CalculatorService } from "src/app/services/calculator.service";
import { CalculatorResponseComponent } from "src/app/components/calculator-response/calculator-response.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"]
})
export class CalculatorComponent implements OnInit {
  calculatorForm: FormGroup;
  boughtBool = [false, true];
  constructor(
    private calcService: CalculatorService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.calculatorForm = new FormGroup({
      SwRentCommissionPercentage: new FormControl(null, [
        Validators.required,
        Validators.max(100),
        Validators.min(0)
      ]),
      InvestorSellCommissionPercentage: new FormControl(null, [
        Validators.required,
        Validators.max(100),
        Validators.min(0)
      ]),
      CustomerSellCommissionPercentage: new FormControl(null, [
        Validators.required,
        Validators.max(100),
        Validators.min(0)
      ]),
      units: new FormArray([])
    });
    this.onAddUnit();
  }

  get controls() {
    return (this.calculatorForm.get("units") as FormArray).controls;
  }

  onAddUnit() {
    const control = new FormGroup({
      originalPrice: new FormControl(null, [
        Validators.required,
        Validators.min(0)
      ]),
      initMonthlyRent: new FormControl(null, [
        Validators.required,
        Validators.min(0)
      ]),
      rentYears: new FormControl(null, [
        Validators.required,
        Validators.min(0)
      ]),
      upgradeFeePercentage: new FormControl(null, [
        Validators.required,
        Validators.max(100),
        Validators.min(0)
      ]),
      isBought: new FormControl(false),
      annualRentIncreasePercentage: new FormControl(null, [
        Validators.required,
        Validators.max(100),
        Validators.min(0)
      ]),
      annualAppreciationPercentage: new FormControl(null, [
        Validators.required,
        Validators.max(100),
        Validators.min(0)
      ])
    });
    (this.calculatorForm.get("units") as FormArray).push(control);
  }

  onRemoveUnit(index: number) {
    (this.calculatorForm.get("units") as FormArray).removeAt(index);
  }

  onSubmit() {
    const modelRef = this.modalService.open(CalculatorResponseComponent, {
      centered: true
    });
    const data = this.transformCalcData();
    modelRef.componentInstance.calcData = data;
  }

  transformCalcData() {
    const data: any = {};
    console.log(this.calculatorForm.value);
    data.CustomerSellCommissionPercentage =
      +this.calculatorForm.value.CustomerSellCommissionPercentage / 100;
    data.InvestorSellCommissionPercentage =
      +this.calculatorForm.value.InvestorSellCommissionPercentage / 100;
    data.SwRentCommissionPercentage =
      +this.calculatorForm.value.SwRentCommissionPercentage / 100;
    data.units = this.calculatorForm.value.units.map(u => ({
      originalPrice: +u.originalPrice,
      annualAppreciationPercentage: +u.annualAppreciationPercentage / 100,
      annualRentIncreasePercentage: +u.annualRentIncreasePercentage / 100,
      initMonthlyRent: +u.initMonthlyRent,
      isBought: u.isBought,
      upgradeFeePercentage: +u.upgradeFeePercentage / 100,
      rentYears: +u.rentYears
    }));
    return data;
  }
}
