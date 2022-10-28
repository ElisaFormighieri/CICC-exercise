public class Fruit {

  private float price;
  private double weight;
  private String name;
  private String color;
  private int quantity;
  private boolean istasty;

  public Fruit() {
    this.price = 0.0f;
    this.weight = 0.0d;
    this.name = "Unknown";
    this.color = "Unknown";
    this.quantity = 0;
    this.istasty = false;
  }

  public Fruit(float price, double weight, String name, String color, boolean istasty) {

    this.price = price;
    this.weight = weight;
    this.name = name;
    this.color = color;
    this.quantity = 1;
    this.istasty = istasty;
  }

  public String getName() {
    return this.name;
  }

  public String getColor() {
    return this.color;
  }

  public boolean getIsTasty() {
    return this.istasty;
  }

  public double getWeight() {
    return this.weight;
  }

  public void addWeight(double weight) {
    this.weight = getWeight() + weight;
  }

  public void removeWeight(double weight) {
    this.weight = getWeight() - weight;
  }

  public float getPrice() {
    return this.price;
  }

  public void addPrice(float price) {
    this.price = getPrice() + price;
  }

  public void removePrice(float price) {
    this.price = getPrice() - price;
  }

  public int getQuantity() {
    return this.quantity;
  }

  public void addQuantity(float price, double weight) {
    addWeight(weight);
    addPrice(price);
    this.quantity = getQuantity() + 1;
  }

  public void removeQuantity(float price, double weight) {
    removeWeight(weight);
    removePrice(price);
    this.quantity = getQuantity() - 1;
  }

}