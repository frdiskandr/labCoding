import numpy as np
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

def main():
    print("Hello World")
    # Data contoh: ukuran rumah (m²) dan harga (dalam juta rupiah)
    ukuran_rumah = np.array([50, 60, 80, 100, 120, 150]).reshape(-1, 1)  # fitur
    harga_rumah = np.array([150, 180, 230, 280, 340, 420])              # target

    # Membuat dan melatih model
    model = LinearRegression()
    model.fit(ukuran_rumah, harga_rumah)

    # Membuat prediksi
    ukuran_test = np.array([70, 90, 110]).reshape(-1, 1)
    prediksi_harga = model.predict(ukuran_test)

    # Visualisasi data
    plt.scatter(ukuran_rumah, harga_rumah, color='blue', label='Data Asli')
    plt.plot(ukuran_rumah, model.predict(ukuran_rumah), color='red', label='Garis Regresi')
    plt.scatter(ukuran_test, prediksi_harga, color='green', label='Prediksi')
    plt.xlabel('Ukuran Rumah (m²)')
    plt.ylabel('Harga (juta Rp)')
    plt.title('Prediksi Harga Rumah')
    plt.legend()
    plt.show()

    # Menampilkan hasil
    print(f"Koefisien (kemiringan): {model.coef_[0]:.2f}")
    print(f"Intersep: {model.intercept_:.2f}")
    print("\nPrediksi harga:")
    for ukuran, harga in zip(ukuran_test, prediksi_harga):
        print(f"Ukuran {ukuran[0]} m²: {harga:.2f} juta Rp")



if __name__ == '__main__':
    main()