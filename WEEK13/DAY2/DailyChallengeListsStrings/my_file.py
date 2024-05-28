#Challenge 1
def user():
    number = int(input("Enter a number: "))
    length = int(input("Enter the length of the list: "))

    multiples_list = []
    count = 1
    while len(multiples_list) < length:
        multiples_list.append(number * count)
        count += 1

    print("List of multiples:")
    print(multiples_list)

if __name__ == "__user__":
    user()

#Challenge 2
def duplicates_remove(string):
    new_string = string[0]

    for char in string[1:]:
        if char != new_string[-1]:
            new_string += char 

    return new_string

def user():
    user_input = input("Enter a string: ")
    new_string = duplicates_remove(user_input)
    print("New string with duplicate consecutive letters removed:", new_string)

if __name__ == "__user__":
    user()
