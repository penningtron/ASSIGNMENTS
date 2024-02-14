
from car_management import CarManager

def main_menu():
    menu = """
1. Add car
2. View all cars
3. View total number of cars
4. See car's details
5. Service a car
6. Update mileage
7. Quit

"""
    valid_inputs = ["1", "2", "3", "4", "5", "6", "7"]
    is_valid_input = False
        
   

    


def get_user_input():
    selection = input("Select and option...")
    return selection

def switch_cases(selection):
    while not (selection == '7'):



        if selection == "1":
            CarManager.add_car()
        if selection == "2":
            CarManager.view_all_cars()
        if selection== '3':
            CarManager.view_total_cars()
        if selection == '4':
            CarManager.car_details()
        if selection == '5':
            CarManager.service_car()
        if selection == '6':
            CarManager.update_mileage()
        if selection == '7':
            quit()
        else: 
            print("Invalid Choice. Please select a valid option,")
            main_menu()



main_menu()
get_user_input()
