import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InsertCoinComponent } from "./insert-coin/insert-coin.component";
import { SelectItemComponent } from "./select-item/select-item.component";
import { DispenseItemComponent } from "./dispense-item/dispense-item.component";
import { VendingMachineService } from "src/shared/services/vending-machine.service";

@NgModule({
  declarations: [
    AppComponent,
    InsertCoinComponent,
    SelectItemComponent,
    DispenseItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [VendingMachineService],
  bootstrap: [AppComponent]
})
export class AppModule {}
