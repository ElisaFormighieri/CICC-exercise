import Shape.Circle;
import Shape.Rectangle;

public class App {
  public static void main(String[] args) throws Exception {
    Rectangle r1 = new Rectangle(40, 20);
    Circle c1 = new Circle(20);
    double r1Rectangle = r1.getParameter();
    double c1Circle = c1.getParameter();
    System.out.println("Parameter of Rectangle is : " + r1Rectangle);
    System.out.println("Parameter of Circle is : " + c1Circle);
  }
}
