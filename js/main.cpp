#include <iostream>
#include <vector>

void Short (std::vector<int> &arr){ 
    int size = arr.size();
    std::cout << size << std::endl;

    for (int i = 0; i < size ; i++){
        for(int j = 0; j < size - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    };

    for(int i = 0; i < size; i++){
        std::cout << arr[i] << " ";
    }
}

int main(){

    std::vector<int> Arr= {
        1,2,3,9,6,7,4,5,6,0
    };

    Short(Arr);

    return 0;
}