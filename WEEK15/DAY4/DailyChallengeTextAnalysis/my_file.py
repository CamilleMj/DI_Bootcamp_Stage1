from collections import Counter

class Text:
    def __init__(self, text):
        self.text = text
        self.words = self.text.split()

    def word_frequency(self, word):
        word_count = Counter(self.words)
        return word_count.get(word, "Word not found in the text")

    def most_common_word(self):
        word_count = Counter(self.words)
        most_common = word_count.most_common(1)
        return most_common[0][0] if most_common else "No words in the text"

    def unique_words(self):
        return list(set(self.words))

    @classmethod
    def from_file(cls, file_path):
        try:
            with open(file_path, 'r') as file:
                text = file.read()
            return cls(text)
        except FileNotFoundError:
            print(f"The file {file_path} does not exist.")
            return None

sample_text = "A good book would sometimes cost as much as a good house."
text_instance = Text(sample_text)

print("Frequency of 'good':", text_instance.word_frequency("good"))

print("Most common word:", text_instance.most_common_word())

print("Unique words:", text_instance.unique_words())

file_text_instance = Text.from_file('the_stranger.txt')

if file_text_instance:
    print("Frequency of 'the':", file_text_instance.word_frequency("the"))

    print("Most common word:", file_text_instance.most_common_word())

    print("Unique words:", file_text_instance.unique_words())
