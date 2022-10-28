package Shape;

public class Circle extends Shape {
  private double radius;

  public double getRadius() {
    return radius;
  }

  public void setRadius(double radius) {
    this.radius = radius;
  }

  public Circle(double r) {
    this.radius = r;
  }

  @Override
  public double getParameter() {
    return (Math.PI * 2) * this.radius;
  }
}
