import { Component, OnInit } from "@angular/core";
import {
  VendingMachineService,
  COINS_TO_INITIALIZE
} from "src/shared/services/vending-machine.service";
import { Coin } from "src/shared/models/coin.class";

@Component({
  selector: "app-insert-coin",
  templateUrl: "./insert-coin.component.html",
  styleUrls: ["./insert-coin.component.css"]
})
export class InsertCoinComponent implements OnInit {
  allCoins: Coin[];

  constructor(public vendingMachineService: VendingMachineService) {
    this.allCoins = COINS_TO_INITIALIZE;
  }

  ngOnInit() {}

  insertCoin(coin: Coin) {
    this.vendingMachineService.insertCoin(coin);
  }
}
