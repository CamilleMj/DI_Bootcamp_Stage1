class AnagramChecker:
    def __init__(self, filename):
        with open(filename, 'r') as file:
            self.words = set(file.read().split())

    def is_valid_word(self, word):
        """Check if the given word is valid."""
        return word in self.words

    def get_anagrams(self, word):
        """Find all anagrams for the given word."""
        if not self.is_valid_word(word):
            return []
        
        sorted_word = ''.join(sorted(word.lower()))
        anagrams = [w for w in self.words if ''.join(sorted(w.lower())) == sorted_word and w.lower() != word.lower()]
        return anagrams



