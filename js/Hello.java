public class Hello{
    public static void main(String[] args) {
        int x = 10;
        int y = 20;

        int result = add(x, y);
        System.out.println(result);
    }

    private static int add(int a, int b) {
        return a + b;
    }
}