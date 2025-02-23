import torch
import torch.nn as nn

# Define a simple neural network model with ReLU
class SimpleNeuralNetwork(nn.Module):
    def __init__(self):
        super(SimpleNeuralNetwork, self).__init__()
        self.fc1 = nn.Linear(784, 128)  # Fully connected layer 1
        self.relu = nn.ReLU()           # ReLU activation function
        self.fc2 = nn.Linear(128, 10)   # Fully connected layer 2 (output)
    
    def forward(self, x):
        x = self.fc1(x)
        x = self.relu(x)  # Applying ReLU activation
        x = self.fc2(x)
        return x

# Initialize the network
model = SimpleNeuralNetwork()

# Example input tensor (batch_size, input_size)
input_tensor = torch.randn(32, 784)

# Forward pass
output = model(input_tensor)
print(output.shape)  # Output: torch.Size([32, 10])
