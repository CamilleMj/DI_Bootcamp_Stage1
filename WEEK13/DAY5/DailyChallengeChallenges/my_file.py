#Challenge 1 : Sorting
mylist = ["without","hello","bag","world"]
mylist.sort()

#Challenge 2 : Longest Word
def longest_word(sentence):

    words = sentence.split()

    longest = ""
    max_length = 0

    for word in words:
        length = len(word)

        if length > max_length:
            longest = word
            max_length = length

    return longest

print(longest_word("Margaret's toy is a pretty doll."))  #Margaret's
print(longest_word("A thing of beauty is a joy forever."))  #forever
print(longest_word("Forgetfulness is by all means powerless!"))  #Forgetfulness
