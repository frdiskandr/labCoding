import torch
import torch.nn as nn
import numpy as np
from torch.utils.data import Dataset, DataLoader

# Data contoh: kalimat sederhana
corpus = [
    "saya suka makan nasi",
    "nasi sangat enak dimakan",
    "saya suka minum air",
    "air sangat segar diminum"
]

# Membuat kamus kata
words = " ".join(corpus).split()
vocab = sorted(set(words))
word_to_idx = {word: idx for idx, word in enumerate(vocab)}
idx_to_word = {idx: word for word, idx in word_to_idx.items()}
vocab_size = len(vocab)

# Membuat data pelatihan (input: beberapa kata, output: kata berikutnya)
def prepare_sequences(corpus, word_to_idx, sequence_length=3):
    sequences = []
    for sentence in corpus:
        words = sentence.split()
        for i in range(len(words) - sequence_length):
            seq = words[i:i + sequence_length]
            target = words[i + sequence_length]
            sequences.append(([word_to_idx[w] for w in seq], word_to_idx[target]))
    return sequences

sequence_length = 3
data = prepare_sequences(corpus, word_to_idx, sequence_length)

# Dataset untuk PyTorch
class TextDataset(Dataset):
    def __init__(self, data):
        self.data = data
    
    def __len__(self):
        return len(self.data)
    
    def __getitem__(self, idx):
        seq, target = self.data[idx]
        return torch.tensor(seq, dtype=torch.long), torch.tensor(target, dtype=torch.long)

dataset = TextDataset(data)
dataloader = DataLoader(dataset, batch_size=2, shuffle=True)

# Definisi model LSTM
class SimpleLSTM(nn.Module):
    def __init__(self, vocab_size, embedding_dim, hidden_dim):
        super(SimpleLSTM, self).__init__()
        self.embedding = nn.Embedding(vocab_size, embedding_dim)
        self.lstm = nn.LSTM(embedding_dim, hidden_dim, batch_first=True)
        self.fc = nn.Linear(hidden_dim, vocab_size)
    
    def forward(self, x):
        embedded = self.embedding(x)
        output, (hidden, cell) = self.lstm(embedded)
        output = self.fc(output[:, -1, :])  # Ambil output terakhir
        return output

# Parameter model
embedding_dim = 10
hidden_dim = 20
model = SimpleLSTM(vocab_size, embedding_dim, hidden_dim)

# Loss dan optimizer
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.01)

# Pelatihan model
epochs = 50
for epoch in range(epochs):
    total_loss = 0
    for seq, target in dataloader:
        optimizer.zero_grad()
        output = model(seq)
        loss = criterion(output, target)
        loss.backward()
        optimizer.step()
        total_loss += loss.item()
    if (epoch + 1) % 10 == 0:
        print(f"Epoch {epoch+1}, Loss: {total_loss/len(dataloader):.4f}")

# Fungsi untuk prediksi
def predict_next_word(model, sequence, word_to_idx, idx_to_word):
    model.eval()
    seq_tensor = torch.tensor([word_to_idx[w] for w in sequence], dtype=torch.long).unsqueeze(0)
    with torch.no_grad():
        output = model(seq_tensor)
        predicted_idx = torch.argmax(output, dim=1).item()
    return idx_to_word[predicted_idx]

# Contoh penggunaan
test_sequence = ["air", "sangat"]
predicted_word = predict_next_word(model, test_sequence, word_to_idx, idx_to_word)
print(f"Input: {' '.join(test_sequence)}")
print(f"Prediksi kata berikutnya: {predicted_word}")