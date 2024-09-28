import { InMemoryStorage } from "./storage/InMemoryStorage";
import { Product } from "./models/Product";
import { Cart } from "./Cart";

const storage = new InMemoryStorage<Product>();
const cart = new Cart(storage);

const product1 = new Product("MacBookPro", 2500);
const product2 = new Product("Clavier", 200);
const product3 = new Product("Souris", 80);

cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);
console.log("Produits dans le panier :");

cart.getProducts().forEach((product: Product) => {
  console.log(`- ${product.name}: ${product.price}€`);
});

console.log(`Total du panier : ${cart.getTotalPrice()}€`);

cart.removeProduct(product2);

console.log(`Nouveau total après suppression : ${cart.getTotalPrice()}€`);
