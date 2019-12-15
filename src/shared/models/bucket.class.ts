/**
 * A parameterized utility class to hold two different object.
 */
export class Bucket<E1, E2> {
  first: E1;
  second: E2;
  constructor(first: E1, second: E2) {
    this.first = first;
    this.second = second;
  }
  getFirst(): E1 {
    return this.first;
  }
  getSecond(): E2 {
    return this.second;
  }
}
