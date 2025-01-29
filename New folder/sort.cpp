#include <iostream>

class bank {
    private:
        int acc = 1;
        int balance = 10000;
        std::string name = "mamat";
    public:
    void getbank (){
        std::cout << acc << " " << balance << " " << name << std::endl;
    };

    void setbank (int balance, std::string name){
        this->balance = balance;
        this->name = name;
    }
};

int main(){
    while(true){
    int bigvalue = 1;
        int i = 2;
            if(i == 1000){
                std::cout << "end" << std::endl;
                return 0;
            };

            bigvalue *= i;
            bigvalue += bigvalue;
            bigvalue *= i;

            std::cout << i << std::endl;
        i += 1;
    };

    return 0;
}