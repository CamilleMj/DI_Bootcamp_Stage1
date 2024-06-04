def display_board(board):

    for row in board:
        print(" | ".join(row))
        print("-" * 9)

def player_input(player):

    while True:
        try:
            position = input(f"{player}, enter your position: ")
            row, col = map(int, position.split(','))
            if row < 1 or row > 3 or col < 1 or col > 3:
                raise ValueError("Position out of range.")
            return row - 1, col - 1
        except ValueError as e:
            print(e)
        except Exception as e:
            print("Invalid input.")

def check_win(board, player):

    for i in range(3):
        if all(board[i][j] == player for j in range(3)):
            return True
        if all(board[j][i] == player for j in range(3)):
            return True
    if all(board[i][i] == player for i in range(3)) or all(board[i][2 - i] == player for i in range(3)):
        return True
    return False

def play():
    board = [[" " for _ in range(3)] for _ in range(3)]
    players = ['X', 'O']
    turn = 0
    while True:
        display_board(board)
        player = players[turn]
        row, col = player_input(player)
        if board[row][col] == " ":
            board[row][col] = player
            if check_win(board, player):
                display_board(board)
                print(f"Player {player} wins!")
                break
            elif all(all(cell != " " for cell in row) for row in board):
                display_board(board)
                print("It's a tie!")
                break
            turn = (turn + 1) % 2
        else:
            print("That position is already taken. Please choose another one.")

play()
