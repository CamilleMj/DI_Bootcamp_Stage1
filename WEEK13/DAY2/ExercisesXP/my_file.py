# Exercise 1 : What Is The Output ?
>>> 5 < 3 #FALSE
>>> 3 == 3 #TRUE
>>> 3 == "3" #FALSE
>>> "3" > 3 #FALSE 
#Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# TypeError: '>' not supported between instances of 'str' and 'int'
>>> "Hello" == "hello" #FALSE


#Exercise 2 : Your Information
my_name = "Camille"
my_age = "24"
shoe_size = "36"
info = "Hello, my name is " + my_name + ", I am " + my_age + " and I wear shoes of the size " + shoe_size
print(info)


#Exercise 3 : Odd Or Even
number = input('Give a number:')
if number % 2 == 0:
    print("Even")
else:
    print("Odd")


#Exercise 4 : Tall Enough To Ride A Roller Coaster
max_height = input('What is your height in inches:')
if max_height * 2.54 > 145:
    print("You are tall enouh to ride !")
else:
    print("You need to grow some more to ride!")


#Exercise 5 : How Many Characters In A Sentence ?
my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
print(len(my_text))


#Exercise 6 : Longest Word Without A Specific Character
sentence = input("Longest sentence without the letter A:")
if "A" not in sentence:
  print("Yay ! You successfully dit it !")


#Exercise 7 : Set
my_fav_numbers = set(2, 12, 14, 20, 16)
my_fav_numbers.add(24, 44)
my_fav_numbers.remove(44)
friend_fav_numbers = set(23, 18, 5, 76)
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)


#Exercise 8 : List
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.append("Kiwi")
basket.insert(0, "Apples")
basket.len("Apples")
basket.clear
print(basket)


#Exercise 9 : Floats
Recap – What is a float? What is the difference between an integer and a float?
#Integer is a whole number, a float is a decimal
Can you think of another way to generate a sequence of floats?
#with an "e" to indicate the power of 10
numbers = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]


#Exercise 10 : For Loop
numbers = range(0, 21)

for number in numbers:
  print(number)

numbers = range(0, 21)
if numbers % 2 == 0:
  print(numbers)


#Exercise 11 : Cinemax
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

##
def main():
    names = ["Alice", "Bob", "Charlie", "David", "Emma"]

    permitted_names = []

    for name in names:
        age = int(input(f"Enter the age of {name}: "))
        if 16 <= age <= 21:
            permitted_names.append(name)

    print("Final list of teenagers permitted to watch the movie:")
    print(permitted_names)

if __name__ == "__main__":
    main()

