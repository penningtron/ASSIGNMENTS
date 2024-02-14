


class CarManager:

    all_cars = []
    total_cars = 0

    def __init__(self, make, model, year = 0, services=[]):
        # Update total_cars and create id for this car
        self._id = CarManager.total_cars
        CarManager.total_cars += 1
        
        self._make = make
        self._model = model
        self._services = services
        self._year = year

        # update all cars
        CarManager.all_cars.append(self)

    def __str__(self):
        return f"ID: {self._id} | Make: {self._make} | Model: {self._model}"
    
    # gets used in more cases in Python 
    def __repr__(self):
        return f"ID: {self._id} | Make: {self._make} | Model: {self._model}"
        
    
    @staticmethod
    def addCar(new_make, new_model, new_mileage):
        new_make = input("What is the make?")
        new_model = input("What is the model?")
        new_mileage = input("what is the mileage?")

    
    def view_all_cars():
        print(CarManager.all_cars)  
    



    


        
print("total cars: " + str(CarManager.total_cars))
print("car1")
car1 = CarManager("Subaru", "Outback")
print(car1._id)
print(car1._make)
print(car1._model)
print(CarManager.all_cars)

print("total cars: " + str(CarManager.total_cars))
print("car2")
car2 = CarManager("Toyota", "Tacoma")
print(car2._id)
print(car2._make)
print(car2._model)
print(str(CarManager.all_cars))



