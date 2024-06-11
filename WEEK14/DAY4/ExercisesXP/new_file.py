#Exercise 3 : Dogs Domesticated
from random import choice
from my_file import Dog

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = ", ".join(args)
        print(f"{dog_names} all play together")

    def do_a_trick(self):
        if self.trained:
            trick = choice(["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"])
            print(f"{self.name} {trick}")
        else:
            print(f"{self.name} is not trained yet")

if __name__ == "__main__":
    pet_dog = PetDog("Buddy", 3, 15)
    pet_dog.train()
    pet_dog.play("Max", "Charlie", "Luna")
    pet_dog.do_a_trick()