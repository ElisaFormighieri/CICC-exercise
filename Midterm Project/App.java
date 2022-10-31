import java.util.Scanner;
import convertions.TimeConverter;
import convertions.TemperatureConverter;

public class App {
  static Scanner scan = new Scanner(System.in);
  static TimeConverter timeConverter = new TimeConverter();
  static TemperatureConverter temperatureConverter = new TemperatureConverter();
  static int convertionType;

  public static void chooseConvertion(int convertionType) {

    switch (convertionType) {
      case 1:
        TimeConverter.options();
        break;
      case 2:
        TemperatureConverter.options();
        break;
      default:
        System.out.println("Bye!");
        break;
    }
  }

  public static void main(String[] args) {

    do {
      System.out.println("Choose your convertion type:");
      System.out.println("> Type 1 for time convertion");
      System.out.println("> Type 2 for temperature convertion");
      System.out.println("> Type any other number to quit");
      convertionType = scan.nextInt();
      chooseConvertion(convertionType);
    } while (convertionType >= 1 && convertionType <= 2);
  }

}
