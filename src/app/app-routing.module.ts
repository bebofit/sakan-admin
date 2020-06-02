import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RequestsComponent } from "./views/requests/requests.component";
import { CalculatorComponent } from "./views/calculator/calculator.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "requests", component: RequestsComponent },
  { path: "calculator", component: CalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
