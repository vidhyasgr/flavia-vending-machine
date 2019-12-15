/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DispenseItemComponent } from "./dispense-item.component";
import {
  VendingMachineService,
  ITEMS_TO_INITIALIZE
} from "src/shared/services/vending-machine.service";
import { Item } from "src/shared/models/item.class";

describe("DispenseItemComponent", () => {
  let component: DispenseItemComponent;
  let vendingMachineService: VendingMachineService;
  let fixture: ComponentFixture<DispenseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DispenseItemComponent],
      providers: [VendingMachineService]
    }).compileComponents();
  }));

  beforeEach(() => {
    vendingMachineService = new VendingMachineService();
    fixture = TestBed.createComponent(DispenseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  describe("test vendingMachineService collectItemAndChange", () => {
    beforeEach(() => {
      vendingMachineService.currentItem = ITEMS_TO_INITIALIZE[0];
      vendingMachineService.currentBalance = 0.5;
    });
    it("should return 3 times 10 cent", () => {
      const bucketWithItemAndChange = vendingMachineService.collectItemAndChange();
      let countTenCents = 0;
      bucketWithItemAndChange.getSecond().forEach(coin => {
        if (coin.coinValue === 0.1) {
          countTenCents = countTenCents + 1;
        }
      });
      expect(countTenCents).toEqual(3);
    });

    it("should return item pepsi", () => {
      const bucketWithItemAndChange = vendingMachineService.collectItemAndChange();
      expect(bucketWithItemAndChange.getFirst().name).toEqual("Coke");
    });
    it("should have called getChange", () => {
      spyOn(vendingMachineService, "getChange");
      vendingMachineService.collectItemAndChange();
      expect(vendingMachineService.getChange).toHaveBeenCalled();
    });
    it("should have called collectItem", () => {
      spyOn(vendingMachineService, "collectItem");
      vendingMachineService.collectItemAndChange();
      expect(vendingMachineService.collectItem).toHaveBeenCalled();
    });
    it("should deduct item from itemInventory", () => {
      vendingMachineService.collectItemAndChange();
      expect(
        vendingMachineService.itemInventory.getQuantity(ITEMS_TO_INITIALIZE[0])
      ).toEqual(9);
    });
  });
});
