#Exercise 1: Cats
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

first_cat = Cat("Timmy", 1)
second_cat = Cat("Lola", 3)
third_cat = Cat("Minou", 6)

def find_oldest_cat(cats):
    oldest_cat = None
    max_age = 0
    for cat in cats:
        if cat.age > max_age:
            oldest_cat = cat
            max_age = cat.age
    return oldest_cat

cats = [first_cat, second_cat, third_cat]

oldest_cat = find_oldest_cat(cats)

print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")

#Exercise 2 : Dogs

class Dog:
    def __init__(self, name, height):
        print("A new dog has been initialized !")
        self.name = name
        self.height = height
    
    def bark(self):
        print(f"{self.name} goes woof!")
    
    def jump(self):
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high!")

davids_dog = Dog("Rex", 50)
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
sarahs_dog.bark
sarahs_dog.jump()

def biggest_dog(dogs):
    biggest = None
    max_height = 0
    for dog in dogs:
        if dog.height > max_height:
            biggest = dog
            max_height = dog.height
    return biggest

dogs = [davids_dog, sarahs_dog]

biggest = biggest_dog(dogs)

print(f"The biggest is {biggest.name}")

#Exercise 3 : Who’s The Song Producer?
class Song :
    def __init__(self, lyrics):
        print("A new song has been initialized !")
        self.lyrics = lyrics

    def sing_me_a_song(self):
        print(f"{self.lyrics}")

stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()

#Exercise 4 : Afternoon At The Zoo
class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} added!")
        else:
            print(f"{new_animal} is already in the zoo.")

    def get_animals(self):
        print("Animals in the zoo:")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold.")
        else:
            print(f"{animal_sold} is not in the zoo.")

    def sort_animals(self):
        self.animals.sort()

    def get_groups(self):
        animal_groups = {}
        for animal in self.animals:
            first_letter = animal[0]
            if first_letter not in animal_groups:
                animal_groups[first_letter] = [animal]
            else:
                animal_groups[first_letter].append(animal)

        print("Animals grouped by first letter:")
        for letter, group in animal_groups.items():
            print(f"{letter.upper()}: {', '.join(group)}")

ramat_gan_safari = Zoo("Ramat Gan Safari")

ramat_gan_safari.add_animal("Lion")
ramat_gan_safari.add_animal("Tiger")
ramat_gan_safari.add_animal("Elephant")
ramat_gan_safari.add_animal("Giraffe")

ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()

