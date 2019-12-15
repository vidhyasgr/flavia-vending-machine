import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { DispenseItemComponent } from "./dispense-item/dispense-item.component";
import { SelectItemComponent } from "./select-item/select-item.component";
import { InsertCoinComponent } from "./insert-coin/insert-coin.component";
import { FormsModule } from "@angular/forms";
import { VendingMachineService } from "src/shared/services/vending-machine.service";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [
        AppComponent,
        DispenseItemComponent,
        SelectItemComponent,
        InsertCoinComponent
      ],
      providers: [VendingMachineService]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'flavia-angular-vending-machine'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("flavia-angular-vending-machine");
  });
});
