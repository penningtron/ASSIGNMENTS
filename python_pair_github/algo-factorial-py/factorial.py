def factorial(num):
	  # if num is 0 or 1 ... return 1
    fac = 1


    for i in range(num, 0, -1):
        fac *= i
        # print(i)
        # print(f"the factorial of {num} is {fac}")
        # print(fac * i)
    return fac
	# your code here
print(factorial(4))	