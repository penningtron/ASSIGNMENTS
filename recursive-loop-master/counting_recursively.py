

def print_int(n):
    if n >= 0:
        print_int(n - 1)
        print(n)

num = 5
print_int(num)

def count_down_to_zero(n):
    if n >= 0:
        print(n)
        count_down_to_zero(n - 1)
        

print(count_down_to_zero(5))