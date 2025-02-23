import hashlib
import datetime

class Block:
    def __init__(self, index, timestamp, data, previous_hash):
        self.index = index
        self.timestamp = timestamp
        self.data = data
        self.previous_hash = previous_hash
        self.hash = self.hash_block()

    def hash_block(self):
        sha = hashlib.sha256()
        sha.update(str(self.index).encode('utf-8'))
        sha.update(str(self.timestamp).encode('utf-8'))
        sha.update(str(self.data).encode('utf-8'))
        sha.update(str(self.previous_hash).encode('utf-8'))
        return sha.hexdigest()

def create_genesis_block():
    return Block(0, datetime.datetime.now(), "Genesis Block", "0")

def next_block(last_block):
    this_index = last_block.index + 1
    this_timestamp = datetime.datetime.now()
    this_data = f"Block #{this_index}"
    this_previous_hash = last_block.hash
    return Block(this_index, this_timestamp, this_data, this_previous_hash)

# Membuat blockchain dan menambahkan blok genesis
blockchain = [create_genesis_block()]
previous_block = blockchain[0]

# Menambahkan 20 blok ke blockchain
num_of_blocks_to_add = 20
for i in range(0, num_of_blocks_to_add):
    block_to_add = next_block(previous_block)
    blockchain.append(block_to_add)
    previous_block = block_to_add
    # Menampilkan informasi blok
    print(f"Block #{block_to_add.index} telah ditambahkan ke blockchain!")
    print(f"Timestamp: {block_to_add.timestamp}")
    print(f"Data: {block_to_add.data}")
    print(f"Hash: {block_to_add.hash}")
    print(f"Previous Hash: {block_to_add.previous_hash}\n")