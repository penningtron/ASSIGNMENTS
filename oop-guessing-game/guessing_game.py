"""
    Class: GuessingGame
    Attributes: input -> user_guess
                output -> answer (correct, high, low) 
                correct_answer (random number generated upon class init)
                
    Methods:    guess -> Receive input
                solved -> True, False

"""
import random

class GuessingGame():
    """An example guessing game class"""
    def __init__(self,answer = random.randint(1,100)):
        self.answer = answer
        self.last_guess = False

    def guess(self, user_guess):
        """guess method
        
        Args:
            user_guess Int that the user is guessing
        Returns:
            string - high, low, correct
        """
        if user_guess > self.answer:
            return "high"
        
        elif user_guess < self.answer:
            return "low"
        self.last_guess = True
        return "correct"
        

    def solved(self):

        return self.last_guess

        


game = GuessingGame(10)

print(game.solved())   # => False

print(game.guess(5))  # => 'low'
print(game.guess(20)) # => 'high'
print(game.solved())   # => False

print(game.guess(10)) # => 'correct'
print(game.solved())   # => True