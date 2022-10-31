package convertions;

import java.util.Scanner;

public class TimeConverter {
  static Scanner scan = new Scanner(System.in);

  static int fromUnity, toUnity;
  static double value, result;

  public static double yearCoefficient(int unity) {
    double coefficient = 0;

    switch (unity) {

      case 1: // Second
        coefficient = 31557600;
        break;

      case 2: // Minute
        coefficient = 525960;
        break;

      case 3: // Hour
        coefficient = 8766;
        break;

      case 4: // Day
        coefficient = 365.25;
        break;

      case 5: // Week
        coefficient = 52.178571429;
        break;

      case 6: // Month
        coefficient = 12;
        break;

      case 7: // Year
        coefficient = 1;
        break;
    }

    return coefficient;
  }

  public static double convert(int fromUnity, int toUnity, double value) {
    return (value / yearCoefficient(fromUnity) * yearCoefficient(toUnity));
  }

  public static void options() {
    System.out.println("Type the unity you are converting from:");
    System.out.println("> 1 - Second");
    System.out.println("> 2 - Minute");
    System.out.println("> 3 - Hour");
    System.out.println("> 4 - Day");
    System.out.println("> 5 - Week");
    System.out.println("> 6 - Month");
    System.out.println("> 7 - Year");

    fromUnity = scan.nextInt();

    System.out.println("Type the value to be converted :");
    value = scan.nextDouble();

    System.out.println("Type the unity you are converting to:");
    System.out.println("> 1 - Second");
    System.out.println("> 2 - Minute");
    System.out.println("> 3 - Hour");
    System.out.println("> 4 - Day");
    System.out.println("> 5 - Week");
    System.out.println("> 6 - Month");
    System.out.println("> 7 - Year");

    toUnity = scan.nextInt();

    result = convert(fromUnity, toUnity, value);
    System.out.printf("Result: %f %n", result);

  }

}