from random import choice

class Game :
    def __init__(self):
         self.user = self.get_user_item()
         self.comp = self.get_computer_item()
    
    def get_user_item(self):
        user = input("Select an item between rock, paper and scissors :")
        item = ["rock", "paper", "scissors"]
        while user not in list(item):
             user = input("Please enter a valid input:")
        return user

    def get_computer_item(self):
        return choice(["rock", "paper", "scissors"])
    
    def get_game_result(self):
         if self.user == "rock" and self.comp == "scissors":
              print("win!")
         elif self.user == "rock" and self.comp == "paper":
              print("Loss!")
         elif self.user == "scissors" and self.comp == "paper":
              print("Win")
         else:
              print("draw")

    def play(self):
        print(f"You chose: {self.user}. The computer chose: {self.comp}. Result: {self.get_game_result()}")
        return self.get_game_result()