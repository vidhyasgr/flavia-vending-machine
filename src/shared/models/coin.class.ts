export class Coin {
  coinValue: CoinValue;
  constructor(coinValue: CoinValue) {
    this.coinValue = coinValue;
  }
}

export type CoinValue = 0.1 | 0.2 | 0.5 | 1.0 | 2.0;
