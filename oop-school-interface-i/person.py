class Person:
    """
    Parent class for students and staff
    - name
    - age 
     role

    
    """
    def __init__(self, name, age, role):
        self.name = name
        self.age = int(age) # TODO: handle cast error if age invalid
        self.role = role

    

    # def __str__(self):
    #     return f"Name: {self.name} | Age: {self.age} | Role: {self.role}"
    
    def __repr__(self):
        return f"Name: {self.name} | Age: {self.age} | Role: {self.role}"
        

alice = Person("Alice", "5", "student")
bob = Person("Bob", 6, "student" )

# print(alice)
# print(bob)
# print([alice, bob])