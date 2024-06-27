#Exercises XP
for i in range(10):
    print(i) #O(N) 9

for i in range(n):
    for j in range(n):
        print(i, j) #O(N^2)

i = 1
while i < n:
    i *= 2
    print(i) #O(N^2)

#Exercise 2: Understanding Insertion Sort
numbers = [5, 2, 9, 1, 5, 6]

def insertion_sort(numbers):
    swapped = True
    while swapped:
        swapped = False
        for i in range(len(numbers)-1):
            if numbers[i] > numbers[i+1]:
                numbers[i], numbers[i+1] = numbers[i+1], numbers[i]
                swapped = True

insertion_sort(numbers)
print(numbers)

#Exercise 3: Understanding Binary Search
numbers = [1, 3, 5, 7, 9, 11]

def binary_search(numbers: list, value: int) -> int:
    n = len(numbers)
    left = 0
    right = n - 1
    while left <= right:
        middle = (left + right) // 2
        if value < numbers[middle]:
            right = middle - 1
        elif value > numbers[middle]:
            left = middle + 1
        else:
            return middle
    raise ValueError('Value is not in the list')

binary_search(numbers, 7)