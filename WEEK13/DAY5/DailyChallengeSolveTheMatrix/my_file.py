matrix = """
7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!
"""

lines = matrix.strip().split('\n')

decrypted_columns = [''] * len(lines[0])

for col in range(len(lines[0])):
    for row in range(len(lines)):

        char = lines[row][col]

        if char.isalpha():
            decrypted_columns[col] += char
        else:
            decrypted_columns[col] += ' '

secret_message = ''.join(decrypted_columns)

print(secret_message)
#This is my secret