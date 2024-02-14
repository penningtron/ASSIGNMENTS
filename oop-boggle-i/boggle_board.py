import random
from os import system

class BoggleBoard:
  # alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  dice_list = ["AAEEGN", 
          "ELRTTY",
          "AOOTTW",
          "ABBJOO",
          "EHRTVW",
          "CIMOTU",
          "DISTTY",
          "EIOSST",
          "DELRVY", 
          "ACHOPS",
          "HIMNQU",
          "EEINSU",
          "EEGHNW",
          "AFFKPS",
          "HLNNRZ", 
          "DEILRX",]

  def __init__(self):
    '''
    Constructor outputs empty boggle board on initialization
    '''
    self.board = ["----", "----", "----", "----"]
    self.printBoard()

  
  def clear(self):
    ''' Clear system terminal before rolling'''
    system('clear')  
  

  def shake(self):
    ''' Shake Board : Outputs randomly generated letters in a 4x4 grid'''
    self.clear()
    self.board = []
    letters = []
    # randomly shuffles the order of the strings in the dice list
    random.shuffle(BoggleBoard.dice_list)

    # iterates through dice list and randomly choses one of the 6 face values and appends to letters list
    for dice in BoggleBoard.dice_list:
      dice_face = random.randint(0,5)
      # Correct for spacing issues and allow for Qu dice option
      if dice[dice_face] == 'Q':
        letters.append(dice[dice_face]+'u ')
      else:
        letters.append(dice[dice_face]+'  ')   
    # Choose the last 4 letters from the letters list and append it to the board attribute as a string - slices the last four indexes from list on each iteration
    for _ in range(4):
      self.board.append("".join(letters[-4:]))
      letters = letters[:-4]
    
    self.printBoard()

    # for row in range(4):
    #   random.shuffle(BoggleBoard.alphabet)
    #   letters = BoggleBoard.alphabet[:4]
    #   self.board.append("".join(letters))
    
    

    
  
  def printBoard(self):
    '''printBoard - no input
    
    prints board in 4x4 grid'''
    for row in self.board:
      print(row)

newgame = BoggleBoard()
newgame.shake()
newgame.shake()