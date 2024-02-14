from person import Person

"""
2. Make a Students(Person) class
        - instance attributes:
            - name
            - role: "Student" - hardcode
            - age, int
            - school_id
            - password
        -create students from csv file

"""

class Student(Person):
    def __init__(self, name, age, role, school_id, password):
        super().__init__(name, age, role)
        self.school_id = int(school_id)
        self.password = password

    def __repr__(self):
        return f"Name: {self.name} | Age: {self.age} | Role: {self.role} | School ID: {self.school_id} | Password: {self.password}"

