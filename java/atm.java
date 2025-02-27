
import java.util.Scanner;

public class atm {
    static int balance = 0;
    String name;

    atm(String name){
        this.name = name;
    }

    int getBalance() {
        return balance;
    }

    void setBalance(int balance) {
        this.balance = balance;
    }

    String getName() {
        return name;
    }

    static void main(){
        while (true) {
            System.out.println("============================");
            System.out.println("== Selamat Datang di ATM ==");
            System.out.println("============================");
            System.out.println("1. Cek Saldo");
            System.out.println("2. Tarik Tunai");
            System.out.println("3. Transfer");
            System.out.println("4. Keluar");
            System.out.println("============================");
            System.out.print("Pilihan : ");
            Scanner input = new Scanner(System.in);

            switch (input.nextInt()) {
                case 1 :
                    System.out.println("Saldo anda sebesar " + balance);
                    break;
                case 2 :
                    System.out.print("Masukkan jumlah uang : ");
                    int tarik = input.nextInt();
                    if (tarik > balance) {
                        System.out.println("Saldo anda tidak cukup");
                    } else {
                        balance -= tarik;
                        System.out.println("Anda telah mengeluarkan uang sebesar " + tarik);
                    }
                default:
                    throw new AssertionError();
            }

        }
    }
}
