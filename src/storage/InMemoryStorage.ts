import { Storable } from "../interfaces/Storable";

export class InMemoryStorage<T> implements Storable<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(item: T): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getAll(): T[] {
    return [...this.items];
  }
}
