/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SelectItemComponent } from "./select-item.component";
import {
  VendingMachineService,
  COINS_TO_INITIALIZE
} from "src/shared/services/vending-machine.service";
import { FormsModule } from "@angular/forms";
import { Coin } from "src/shared/models/coin.class";

describe("SelectItemComponent", () => {
  let component: SelectItemComponent;
  let vendingMachineService: VendingMachineService;
  let fixture: ComponentFixture<SelectItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectItemComponent],
      imports: [FormsModule],
      providers: [VendingMachineService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectItemComponent);
    vendingMachineService = new VendingMachineService();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("test insertCoin", () => {
    beforeEach(() => {
      vendingMachineService.insertCoin(COINS_TO_INITIALIZE[2]);
    });

    it("should have balance 50 cent", () => {
      expect(vendingMachineService.currentBalance).toEqual(0.5);
    });
    it("should count 50 cent coin in cash inventory", () => {
      expect(
        vendingMachineService.cashInventory.hasItem(COINS_TO_INITIALIZE[2])
      ).toEqual(true);
    });
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
