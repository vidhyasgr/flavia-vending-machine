import { Component, OnInit } from "@angular/core";
import { VendingMachineService } from "src/shared/services/vending-machine.service";
import { Bucket } from "src/shared/models/bucket.class";
import { Item } from "src/shared/models/item.class";
import { Coin } from "src/shared/models/coin.class";

@Component({
  selector: "app-dispense-item",
  templateUrl: "./dispense-item.component.html",
  styleUrls: ["./dispense-item.component.css"]
})
export class DispenseItemComponent implements OnInit {
  constructor(private vendingMachineService: VendingMachineService) {}

  ngOnInit() {}

  dispenseItem() {
    const bucketWithItemAndChange: Bucket<
      Item,
      Coin[]
    > = this.vendingMachineService.collectItemAndChange();
    alert(" you got the item " + JSON.stringify(bucketWithItemAndChange));
  }
}
