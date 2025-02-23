import os

path = os.getcwd()

print(f"path {path}")

list = os.listdir("/")

for i in list:
    print(i)
