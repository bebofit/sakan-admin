import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { MaterialModule } from "./material.module";
import { InterceptorModule } from "./interceptor.module";
import { RequestsComponent } from "./views/requests/requests.component";
import { LoginComponent } from "./auth/login/login.component";
import { CalculatorComponent } from "./views/calculator/calculator.component";
import { CalculatorResponseComponent } from "./components/calculator-response/calculator-response.component";

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    RequestsComponent,
    LoginComponent,
    CalculatorComponent,
    CalculatorResponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    InterceptorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CalculatorResponseComponent]
})
export class AppModule {}
