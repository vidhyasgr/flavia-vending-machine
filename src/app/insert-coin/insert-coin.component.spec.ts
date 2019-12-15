/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { InsertCoinComponent } from "./insert-coin.component";
import { VendingMachineService } from "src/shared/services/vending-machine.service";

describe("InsertCoinComponent", () => {
  let component: InsertCoinComponent;
  let fixture: ComponentFixture<InsertCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InsertCoinComponent],
      providers: [VendingMachineService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
