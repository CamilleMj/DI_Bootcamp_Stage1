from game import Game

def get_user_menu_choice():
    choice = input("""Menu:
    (1) Play a new game
    (2) Show scores
     #  Press Enter to leave
     :  """)
    while choice not in ["1", "2", ""]:
        choice = input("Enter a valid choice: ")
    return choice

def print_results(results):
     print(f"""Game Results:
           Won {results['Win']} times
           Lost {results['Loss']} times
           Drew {results['Draw']} times""")
     
def main():
     scoreboard = {
          "Win" : 0,
          "Loss" : 0,
          "Draw" : 0
     }
     choice = get_user_menu_choice()
     while choice != "":
          if choice == "1":
               new_game = Game()
               scoreboard[new_game.play()] += 1
          else:
               print_results(scoreboard)
          choice = get_user_menu_choice()
     print("Thank you for playing")

main()

