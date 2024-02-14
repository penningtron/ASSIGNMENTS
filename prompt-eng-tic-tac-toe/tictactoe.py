from rich.console import Console


x_art = """
X       X
 X     X
  X   X
   X X
    X
   X X
  X   X
 X     X
X       X
"""

print(x_art)

o_art = """
  OOOOO  
 O     O 
O       O
O       O
O       O
O       O
O       O
 O     O 
  OOOOO  
"""

print(o_art)

from rich.console import Console
from rich.table import Table

# Create a console instance
console = Console()

# Create a new table
table = Table(show_header=False)

# Add 3 columns to the table
for _ in range(3):
    table.add_column(justify="center", width=10)

# Add 3 rows to the table
for _ in range(3):
    table.add_row("", "", "")

# Render the table
console.print(table)

from rich.console import Console

# Create a console instance
console = Console()

# Define the symbols for X and O
X_SYMBOL = "[bold red]X[/bold red]"
O_SYMBOL = "[bold blue]O[/bold blue]"

# Define the board layout
board_layout = f"""
     1     2     3
  ┌─────┬─────┬─────┐
1 │     │     │     │
  ├─────┼─────┼─────┤
2 │     │     │     │
  ├─────┼─────┼─────┤
3 │     │     │     │
  └─────┴─────┴─────┘
"""

# Print the board with symbols
console.print(board_layout)
x_art = """
X       X
 X     X
  X   X
   X X
    X
   X X
  X   X
 X     X
X       X
"""

o_art = """
  OOOOO  
 O     O 
O       O
O       O
O       O
O       O
O       O
 O     O 
  OOOOO  
"""

# Splitting the X and O ASCII art into rows
x_rows = x_art.strip().split('\n')
o_rows = o_art.strip().split('\n')

# Create the Tic Tac Toe grid
grid = [
    [x_rows[0], o_rows[0], x_rows[0]],
    [o_rows[0], x_rows[0], o_rows[0]],
    [x_rows[0], o_rows[0], x_rows[0]]
]

# Print the Tic Tac Toe grid
for row in grid:
    print("".join(row))
