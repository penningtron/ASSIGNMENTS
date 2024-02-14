import random

def print_board(board):
    for row in board:
        print(" | ".join(row))
        print("-" * 9)

def check_winner(board, player):
    # Check rows, columns, and diagonals for a win
    for i in range(3):
        if all(board[i][j] == player for j in range(3)) or \
           all(board[j][i] == player for j in range(3)):
            return True
    if all(board[i][i] == player for i in range(3)) or \
       all(board[i][2-i] == player for i in range(3)):
        return True
    return False

def available_moves(board):
    return [(i, j) for i in range(3) for j in range(3) if board[i][j] == ' ']

def player_move(board, player):
    while True:
        try:
            row, col = map(int, input(f"Player {player}, enter your move (row col): ").split())
            if board[row-1][col-1] == ' ':
                board[row-1][col-1] = player
                break
            else:
                print("Invalid move. Try again.")
        except (ValueError, IndexError):
            print("Invalid input. Try again.")

def computer_move(board, player):
    print("Computer is thinking...")
    available = available_moves(board)
    row, col = random.choice(available)
    board[row][col] = player

def play_game():
    board = [[' ']*3 for _ in range(3)]
    players = ['X', 'O']
    current_player = random.choice(players)

    while True:
        print_board(board)
        if check_winner(board, 'X'):
            print("Player X wins!")
            break
        elif check_winner(board, 'O'):
            print("Player O wins!")
            break
        elif len(available_moves(board)) == 0:
            print("It's a tie!")
            break

        if current_player == 'X':
            player_move(board, current_player)
        else:
            computer_move(board, current_player)

        current_player = 'X' if current_player == 'O' else 'O'

if __name__ == "__main__":
    play_game()
