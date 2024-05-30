#Challenge 1
def index(word):
    index_dict = {}

    for index, char in enumerate(word):
        char = str(char)

        if char not in index_dict:
            index_dict[char] = []
        
        index_dict[char].append(index)

    return index_dict

def main():
    word = input("Enter a word: ")
    index_dictionary = index(word)
    print("Index Dictionary:")
    for key, value in index_dictionary.items():
        print(f"'{key}': {value}")

if __name__ == "__main__":
    main()

#Challenge 2
def parse_price(price_str):
    return float(price_str.replace("$", "").replace(",", ""))

def affordable_item(wallet_amount, store_items):
    affordable_items = []
    wallet_amount = parse_price(wallet_amount)

    for item, price in store_items.items():
        if parse_price(price) <= wallet_amount:
            affordable_items.append(item)

    return sorted(affordable_items)

def main():
    wallet_amount = input("Enter the amount of money you have in your wallet: $")
    store_items = {
        "apple": "$0.99",
        "banana": "$1.49",
        "orange": "$1.29",
        "milk": "$2.99",
        "bread": "$1.99",
        "eggs": "$2.49"
    }

    affordable_items = affordable_item(wallet_amount, store_items)

    if affordable_items:
        print("You can afford the following items from the store:")
        for item in affordable_items:
            print(item)
    else:
        print("Nothing")

if __name__ == "__main__":
    main()

