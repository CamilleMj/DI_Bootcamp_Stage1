from anagram_checker import AnagramChecker

def main():
    checker = AnagramChecker('sowpods1.txt')
    print("Welcome to the Anagram Checker!")

    while True:
        print("\nMenu:")
        print("1. Input a word")
        print("2. Exit")
        choice = input("Please choose an option (1 or 2): ").strip()

        if choice == '2':
            print("Goodbye!")
            break

        if choice == '1':
            user_input = input("Enter a word to find its anagrams: ").strip()

            if not user_input.isalpha():
                print("Invalid input. Only alphabetic characters are allowed.")
                continue

            if len(user_input.split()) > 1:
                print("Invalid input. Please enter only a single word.")
                continue

            if not checker.is_valid_word(user_input):
                print(f"'{user_input}' is not a valid word.")
                continue

            anagrams = checker.get_anagrams(user_input)
            if anagrams:
                print(f"YOUR WORD '{user_input}'this is a valid English word. Anagrams for your word: {', '.join(anagrams)}")
            else:
                print(f"No anagrams found for '{user_input}'.")

        else:
            print("Invalid choice. Please select 1 or 2.")

if __name__ == "__main__":
    main()
    
