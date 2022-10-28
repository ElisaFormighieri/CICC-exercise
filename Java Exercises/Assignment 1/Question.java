import java.util.Scanner;

public class Question {
    public static void main(String args[]) {
        System.out.println("Type the number: ");
        Scanner scan = new Scanner(System.in);
        int a = scan.nextInt();
        program(a);
    }

    public static void program(int a) {
        System.out.println(a * 10);
    }
}
