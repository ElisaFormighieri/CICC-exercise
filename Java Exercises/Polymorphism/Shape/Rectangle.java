package Shape;

public class Rectangle extends Shape {
  private double width;
  private double height;

  public Rectangle(double w, double h) {
    this.width = w;
    this.height = h;
  }

  @Override
  public double getParameter() {
    return this.width * 2 + this.height * 2;
  }

  public double getWidth() {
    return width;
  }

  public void setWidth(double width) {
    this.width = width;
  }

  public double getHeight() {
    return height;
  }

  public void setHeight(double height) {
    this.height = height;
  }
}
