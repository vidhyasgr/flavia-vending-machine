import { Component, OnInit } from "@angular/core";
import { VendingMachineService } from "src/shared/services/vending-machine.service";
import { Item } from "src/shared/models/item.class";

@Component({
  selector: "app-select-item",
  templateUrl: "./select-item.component.html",
  styleUrls: ["./select-item.component.css"]
})
export class SelectItemComponent implements OnInit {
  selectedValue: Item;
  listOfItems: Item[];
  constructor(private vendingMachineService: VendingMachineService) {
    this.listOfItems = this.vendingMachineService.itemInventory.getAllItems();
  }

  ngOnInit() {}

  onChangeOption() {
    this.vendingMachineService.setSelectedItem(this.selectedValue);
  }
}
