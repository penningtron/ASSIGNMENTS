from person import Person

"""
Staff class


"""


class Staff(Person):
    def __init__(self, name, age, role, employee_id, password):
        super().__init__(name, age, role)
        self.employee_id = int(employee_id)
        self.password = password

        def __repr__(self):
            return f"Name: {self.name} | Age: {self.age} | Role: {self.role} | Employee ID: {self.employee_id} | Password: {self.password}"
        




