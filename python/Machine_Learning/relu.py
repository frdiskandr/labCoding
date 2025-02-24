# Impor pustaka yang dibutuhkan
import tensorflow as tf
from tensorflow.keras import layers, models
import numpy as np

# 1. Muat dataset MNIST (sudah tersedia di TensorFlow)
(x_train, y_train), (x_test, y_test) = tf.keras.datasets.mnist.load_data()

# 2. Pra-pemrosesan data
# Normalisasi nilai piksel (0-255 jadi 0-1) supaya lebih mudah diproses
x_train = x_train.astype('float32') / 255.0
x_test = x_test.astype('float32') / 255.0

# Ubah bentuk data agar sesuai input jaringan (tambahkan dimensi channel)
x_train = x_train.reshape((x_train.shape[0], 28, 28, 1))
x_test = x_test.reshape((x_test.shape[0], 28, 28, 1))

# Ubah label jadi one-hot encoding (misal 3 jadi [0,0,0,1,0,0,0,0,0,0])
y_train = tf.keras.utils.to_categorical(y_train, 10)
y_test = tf.keras.utils.to_categorical(y_test, 10)

# 3. Buat model jaringan saraf dalam (deep neural network)
model = models.Sequential([
    # Lapisan konvolusi pertama: ekstraksi fitur dari gambar
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    layers.MaxPooling2D((2, 2)),  # Mengurangi ukuran data
    
    # Lapisan konvolusi kedua
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    
    # Ratakan data jadi 1D untuk masuk ke lapisan fully connected
    layers.Flatten(),
    
    # Lapisan fully connected
    layers.Dense(128, activation='relu'),
    layers.Dropout(0.5),  # Cegah overfitting
    layers.Dense(10, activation='softmax')  # Output: 10 kelas (angka 0-9)
])

# 4. Kompilasi model
model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])

# 5. Latih model
model.fit(x_train, y_train, epochs=5, batch_size=64, validation_split=0.2)

# 6. Evaluasi model pada data uji
test_loss, test_acc = model.evaluate(x_test, y_test)
print(f"Akurasi pada data uji: {test_acc:.4f}")