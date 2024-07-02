#Exercise 1: Task Scheduler
from collections import deque

class TaskScheduler:
    def __init__(self):
        self.queue = deque()

    def add_task(self, description, priority):
        self.queue.append((description, priority))

    def execute_next_task(self):
        if self.queue:
            description, _ = self.queue.popleft()
            print(f"Executing task: {description}")
        else:
            print("No tasks in the queue.")

    def show_task_queue(self):
        print("Task queue:")
        for description, priority in self.queue:
            print(f"Priority {priority}: {description}")

scheduler = TaskScheduler()
scheduler.add_task("Write code", 2)
scheduler.add_task("Review documentation", 1)
scheduler.add_task("Test functionality", 2)

scheduler.show_task_queue()
scheduler.execute_next_task()
scheduler.show_task_queue()

#Exercise 2: Palindrome Checker
from collections import deque

def check_palindrome(word):
    cleaned_word = "".join(word.lower().split())

    char_queue = deque(cleaned_word)

    while len(char_queue) > 1:
        if char_queue.popleft() != char_queue.pop():
            return False

    return True

print(check_palindrome("Racecar"))  # Output: True
print(check_palindrome("hello"))    # Output: False

#Exercise 3: Merge Two Sorted Linked Lists
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def merge_sorted_linked_lists(list1, list2):
    dummy = Node(None)
    current = dummy

    while list1 and list2:
        if list1.value < list2.value:
            current.next = list1
            list1 = list1.next
        else:
            current.next = list2
            list2 = list2.next
        current = current.next

    if list1:
        current.next = list1
    elif list2:
        current.next = list2
    return dummy.next

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, value):
        new_node = Node(value)
        if not self.head:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node

list1 = LinkedList()
list1.append(1)
list1.append(3)
list1.append(5)

list2 = LinkedList()
list2.append(2)
list2.append(4)
list2.append(6)

merged_head = merge_sorted_linked_lists(list1.head, list2.head)

current = merged_head
while current:
    print(current.value, end=" -> ")
    current = current.next
print("None")
