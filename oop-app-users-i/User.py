# your User class goes here
class User:
    def __init__(self, name, email, address, DLnumber):
        self.name = name
        self.email = email
        self.address = address
        self.DLnumber = DLnumber

    def display_user(self):
        print("Name:", self.name, "\nEmail:", self.email, "\nAddress: ", self.address, "\nDriver's License Number: ", self.DLnumber)

user1 = User("natedog", 
             "nathantp@gmail.com", 
             "1234 Buckwood Drive", 
             "5773829934")


user1.display_user()