#Exercise 1 : Pets
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    

bengal_cat = Bengal("Bengal", 5)
chartreux_cat = Chartreux("Chartreux", 3)
siamese_cat = Siamese("Siamese", 2)

all_cats = [bengal_cat, chartreux_cat, siamese_cat]

sara_pets = Pets(all_cats)

sara_pets.walk()

#Exercise 2 : Dogs
class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        print(f"{self.name} is barking")

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight:
            return f"{self.name} won the fight!"
        elif self.run_speed() * self.weight < other_dog.run_speed() * other_dog.weight:
            return f"{other_dog.name} won the fight!"
        else:
            return "It's a tie!"

dog1 = Dog("Max", 3, 20)
dog2 = Dog("Buddy", 5, 25)
dog3 = Dog("Charlie", 4, 18)

print(dog1.bark())
print(f"{dog1.name}'s running speed is {dog1.run_speed()} units.")
print(dog2.bark())
print(f"{dog2.name}'s running speed is {dog2.run_speed()} units.")
print(dog3.bark())
print(f"{dog3.name}'s running speed is {dog3.run_speed()} units.")

print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog3.fight(dog1))

#Exercise 4 : Family
class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family!")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f"Family {self.last_name}:")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is Child: {member['is_child']}")

family_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

my_family = Family("Smith", family_members)

my_family.born(name='John', age=0, gender='Male', is_child=True)
print(my_family.is_18('Michael'))
my_family.family_presentation()

#Exercise 5 : TheIncredibles Family
class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{name}'s power is {member['power']}")
                else:
                    raise ValueError(f"{name} is not over 18 years old.")

    def incredible_presentation(self):
        print("*Here is our powerful family*")
        super().family_presentation()

incredibles_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]

incredibles_family = TheIncredibles("Incredibles", incredibles_members)

incredibles_family.incredible_presentation()

incredibles_family.born(name='Baby Jack', age=0, gender='Male', is_child=True, power='Unknown Power', incredible_name='Jack')

incredibles_family.incredible_presentation()

