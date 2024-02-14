# In this exercise you are going to create a function that takes a number parameter and returns the factorial of it.

# Factorial has a very specific definition. Learn more here. As an overview though, a factorial is the result of multiplying a sequence of descending numbers down to 0. Factorials are only defined for non-negative integer numbers. This definition includes zero. Though 0! is equal to 1, so treat it as an edge case.

def factorial(num):

    # if num is 0 or 1 ... return 1
    fac = 1


    for i in range(num, 0, -1):
        fac *= i
        # print(i)
        # print(f"the factorial of {num} is {fac}")
        # print(fac * i)
    return fac


print(factorial(4))