#Exercise 1 : Convert Lists Into Dictionaries
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

for item in zip(keys, values):
    print(item)

#Exercise 2 : Cinemax
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

def family_age(age):
    if age < 3:
        return 0
    elif 3 <= age <= 12:
        return 10
    else:
        return 15

def main():
    family_members = int(input("Enter the number of family members: "))
    total_cost = 0

    for i in range(1, family_members + 1):
        age = int(input(f"Enter the age of family member {i}: "))
        ticket_price = family_age(age)
        total_cost += ticket_price

    print(f"The total cost for the family's tickets is ${total_cost}.")

if __name__ == "__main__":
    main()

#Exercise 3: Zara
brand = {
  "name": "Zara", 
  "creation_date": 1975,
  "creator_name": "Amancio Ortega Gaona" ,
  "type_of_clothes": ["men, women, children, home"], 
  "international_competitors": ["Gap, H&M, Benetton"],
  "number_stores": 7000,
  "major_color": {
      "France": "blue", 
      "Spain": "red", 
      "US": "pink, green"
    } 
}
print(brand)
brand["number_stores"] = 2
print(brand['name'] , "clients are mostly women looking for fashion clothes")
brand["country_creation"] = "Spain"
if "international_competitors" in brand:
  x = brand.items()
  brand["international_competitors"] = "Desigual"
brand.pop("creation_date")
print(brand)
print(x)
print(brand["major_color"]["US"])
print(len(brand))
y = brand.keys()
print(y)
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000,
}
brand.update({"more_on_zara"})
print(brand["number_stores"])

#Exercise 4 : Disney Characters
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

for (num,item) in enumerate(users):
    print(item,":", num+1)
for (num,item) in enumerate(users):
    print(num+1,":", item)
users.sort()
print(users)

if "i" in users:
print(item,":", num+1)

if "m" or "p" in users:
print(item,":", num+1)

#Exercise 5 : Random
import random

def compare_numbers(user_number):

    if 1 <= user_number <= 100:
        random_number = random.randint(1, 100)
        if user_number == random_number:
            return f"Success!"
        else:
            return f"Fail!"
    else:
        return "Please provide a valid number between 1 and 100."

user_input = int(input("Enter a number between 1 and 100: "))
result = compare_numbers(user_input)
print(result)

#Exercise 6 : Temperature Advice
import random

def get_random_temp(season):
    if season.lower() == 'winter':
        return random.randint(-10, 16)
    elif season.lower() == 'summer':
        return random.randint(16, 40)
    elif season.lower() == 'spring' or season.lower() == 'autumn' or season.lower() == 'fall':
        return random.randint(0, 23)
    else:
        print("Invalid season. Please choose from: summer, autumn, winter, spring.")
        return None

def main():
    season = input("Enter the season (summer, autumn, winter, spring): ")
    temperature = get_random_temp(season)
    if temperature is not None:
        print("The temperature right now is", temperature, "degrees Celsius.")

        if temperature < 0:
            print("Brrr, that’s freezing! Wear some extra layers today.")
        elif 0 <= temperature <= 16:
            print("Quite chilly! Don’t forget your coat.")
        elif 16 < temperature <= 23:
            print("The weather is mild. Enjoy the day!")
        elif 24 <= temperature <= 32:
            print("It's warm outside. Stay hydrated!")
        else:
            print("It's hot! Find some shade and keep cool.")

if __name__ == "__main__":
    main()

#Exercise 7 : Star Wars Quiz
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def quiz():
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []

    for question_data in data:
        question = question_data["question"]
        answer = question_data["answer"]

        user_answer = input(question + " ")
        if user_answer.lower() == answer.lower():
            print("Correct!")
            correct_answers += 1
        else:
            print("Incorrect. The correct answer is:", answer)
            incorrect_answers += 1
            wrong_answers.append(question)

    return correct_answers, incorrect_answers, wrong_answers

def inform_user(correct_answers, incorrect_answers, wrong_answers):
    print("Quiz Results:")
    print("Correct Answers:", correct_answers)
    print("Incorrect Answers:", incorrect_answers)
    if incorrect_answers > 0:
        print("Questions you got wrong:")
        for idx, question in enumerate(wrong_answers, 1):
            print(f"{idx}. {question}")

def main():
    correct, incorrect, wrong = quiz()
    inform_user(correct, incorrect, wrong)

if __name__ == "__main__":
    main()