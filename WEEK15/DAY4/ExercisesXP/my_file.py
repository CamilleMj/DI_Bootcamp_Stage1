#Exercise 1 – Random Sentence Generator
import random

def get_words_from_file():
    try:
        with open("sowpods.txt", 'r') as file:
            words = file.read().split()
            return words
    except FileNotFoundError:
        print(f"The file {"sowpods.txt"} does not exist.")
        return []

def get_random_sentence(words, length):
    if length > len(words):
        print("Not enough words in the file to create a sentence of this length.")
        return ""
    random_words = random.sample(words, length)
    sentence = ' '.join(random_words).lower()
    return sentence

def main():
    while True:
        try:
            length = int(input("How long do you want the sentence to be (between 2 and 20)? "))
            if 2 <= length <= 20:
                break
            else:
                print("Error: Please enter an integer between 2 and 20.")
        except ValueError:
            print("Error: Please enter a valid integer.")

    words = get_words_from_file()
    
    if words:
        sentence = get_random_sentence(words, length)
        if sentence:
            print("Generated Sentence:", sentence)
    else:
        print("Error: No words to generate a sentence.")

if __name__ == "__main__":
    main()

#Exercise 2: Working With JSON
import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)

salary = data["company"]["employee"]["payable"]["salary"]
print("Salary:", salary)

data["company"]["employee"]["birth_date"] = "1999-12-05"

with open("modified_sample.json", "w") as file:
    json.dump(data, file, indent=4)

print("Modified JSON saved to 'modified_sample.json'")
