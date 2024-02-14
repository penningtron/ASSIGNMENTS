class Animal:

    def __init__(self, name, species, sound= "animal sound") -> None:
        self.name = name
        self.species = species
        self.sound = sound

    def __str__(self):
        pass

    def speak(self):
        return f"{self.sound}"   
    
class Mammal(Animal):
    def __init__(self, name, species, sound="animal sound") -> None:
        super().__init__(name, species, sound = "animal sound")

    def give_birth(self):
        print(f"{self.name} the {self.species} has given birth")




class Bird(Animal):
    def __init__(self, name, species, wingspan) -> None:
        super().__init__(name, species)
        self.wingspan = wingspan

class Reptile(Animal):
    def __init__(self, name, species) -> None:
        super().__init__(name, species)

    def bask_in_sun(self):
        return (f"{self.name} the {self.species} is basking in the sun")


class Primate(Mammal):
    
    def __init__(self, name, species) -> None:
        super().__init__(name, species)

    def climb_trees(self):
        print(f"{self.name} the {self.species} is climbing trees")


class Marsupial(Mammal):
    def __init__(self, name, species) -> None:
        super().__init__(name, species)

    def carry_baby(self):
        print(f"{self.name} the {self.species} is carrying its baby")


    


mammal = Mammal("Giragge", "Giraffa camelopardalis")
mammal.give_birth()