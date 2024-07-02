#Exercise 1: Counting Frequencies
def word_frequency(input_str):
    words = input_str.split()

    wordfreq = {}

    for raw_word in words:
        word = raw_word.strip(".,-_")

        if word:
            wordfreq[word] = wordfreq.get(word, 0) + 1

    return wordfreq

input_str = "apple orange apple banana orange apple"
result = word_frequency(input_str)
print(result)

#Exercise 2: Longest Substring Without Repeating Characters
def longest_unique_substring(s):
    char_index = {}
    max_length = 0
    start = 0

    for end, char in enumerate(s):
        if char in char_index:
            start = max(start, char_index[char] + 1)
        char_index[char] = end
        max_length = max(max_length, end - start + 1)

    return max_length

s = "abcabcbb"
result = longest_unique_substring(s)
print(result)
