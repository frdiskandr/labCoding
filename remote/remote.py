import websocket
import cv2
import numpy as np
import pyautogui
import threading
import time

ANDROID_SERVER_IP = "192.168.1.11"  # Ganti dengan IP Android Server Anda
ANDROID_SERVER_PORT = 8080
WS_URL = f"ws://{ANDROID_SERVER_IP}:{ANDROID_SERVER_PORT}"

# Fungsi untuk menerima stream video
def receive_stream(ws):
    while True:
        try:
            message = ws.recv()
            np_arr = np.frombuffer(message, np.uint8)
            frame = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)
            if frame is not None:
                cv2.imshow("Android Screen", frame)
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
        except Exception as e:
            print(f"Error receiving stream: {e}")
            break
    ws.close()
    cv2.destroyAllWindows()

# Fungsi untuk mengirim input mouse
def send_mouse_input(ws, x, y, action):
    message = f"input:{x},{y},{action}"
    ws.send(message)

# Fungsi untuk menangkap input mouse dan keyboard
def capture_input(ws):
    while True:
        x, y = pyautogui.position()
        if pyautogui.mouseDown():
            send_mouse_input(ws, x, y, 0)  # 0 = ACTION_DOWN
        elif pyautogui.mouseUp():
            send_mouse_input(ws, x, y, 1)  # 1 = ACTION_UP
        time.sleep(0.1)

# Fungsi untuk mengirim file ke Android
def send_file(ws, file_path):
    with open(file_path, "rb") as f:
        file_data = f.read()
    ws.send(f"file:{file_data}")

# Fungsi utama
def main():
    ws = websocket.WebSocket()
    ws.connect(WS_URL)

    # Jalankan thread untuk menerima stream
    thread_stream = threading.Thread(target=receive_stream, args=(ws,))
    thread_stream.start()

    # Jalankan thread untuk menangkap input
    thread_input = threading.Thread(target=capture_input, args=(ws,))
    thread_input.start()

    # Tunggu hingga selesai
    thread_stream.join()
    thread_input.join()

if __name__ == "__main__":
    main()
