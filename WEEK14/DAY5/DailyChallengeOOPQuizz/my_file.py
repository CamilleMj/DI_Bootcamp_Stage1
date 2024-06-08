#Part 1 : Quizz :

What is a class? #object constructor to create objects
What is an instance? #function in a class
What is encapsulation? #restriction access to methods and variables
What is abstraction? #hiding the complexity of a sysyem by providing a simpler user interface
What is inheritance? #process by which one class takes on the attributes and methods of another.
What is multiple inheritance? # a class that inherit from two different classes
What is polymorphism? #different or related classes that use the same name for their functions
What is method resolution order or MRO? #denotes the way a programming language resolves a method or attribute

#Part 2: Create A Deck Of Cards Class.
import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __str__(self):
        return f"{self.value} of {self.suit}"

class Deck:
    def __init__(self):
        self.cards = []
        self.populate_deck()
        self.shuffle()

    def populate_deck(self):
        suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        for suit in suits:
            for value in values:
                self.cards.append(Card(suit, value))

    def shuffle(self):
        random.shuffle(self.cards)

    def deal(self):
        if len(self.cards) == 0:
            print("No cards left in the deck.")
            return None
        else:
            return self.cards.pop()

deck = Deck()
print("Original deck:")
for card in deck.cards:
    print(card)

print("\nShuffled deck:")
deck.shuffle()
for card in deck.cards:
    print(card)

print("\nDealing a card:")
dealt_card = deck.deal()
print("Dealt card:", dealt_card)
