def linear_search_unsorted(arr, target):
    steps = 0
    for num in arr:
        steps += 1
        print (f"steps: {steps} num: {num}")






# def binary_search_unsorted(arr, target):
#     steps = 0
#     low, high = 0, len(arr) -1
#     while low <= high:
#         steps += 1
#         mid = (low + high) // 2
#         if arr[mid] == target:
#             return mid, steps
#         elif arr[mid] < target:
#             low = mid + 1
#         else:
#             high = mid -1
#     return -1, steps # return -1 and steps taken

# unsorted_list = [42, 15, 7, 30, 22, 10, 18]
# target = 30
# # linear_search_unsorted(unsorted_list, target)
# print(binary_search_unsorted(unsorted_list, target))
        
def binary_search(list, item):
    low = 0
    high = len(list)-1

    while low <= high:
        mid = (low + high)
        guess = list[mid]
        if guess == item:
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None

my_list = [1, 3, 5, 7, 9]
print (binary_search(my_list, 3))
print (binary_search(my_list, -1))