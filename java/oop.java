public class oop {

    static class child {
        String name;
        child(String name){
            this.name = name;
        }

        void sayName(){
            System.out.println("say " + this.name);
        }
    }

    public static void main(String[] args) {
        child child1 = new child("John");
        child1.sayName();
    }
}
