def check(string):
    stack = []
    open_list = ["[", "{", "("]
    close_list = ["]", "}", ")"]

    for char in string:
        if char in open_list:
            stack.append(char)
        elif char in close_list:
            if not stack or open_list.index(stack.pop()) != close_list.index(char):
                return "False"

    return "True"

string1 = "(1 + 2) * {[(3 / 4) - 5]}"
print(string1, "-", check(string1))

string2 = "[1 + 2) * (3 - 4)]"
print(string2, "-", check(string2))