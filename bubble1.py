one = [3, 1, 4, 2] 
two = [1, 3, 4, 2]
three = [1, 3, 4, 2]
four = [1, 3, 2, 4]
five = [1, 3, 2, 4]
six = [1, 2, 3, 4]

#Crystal Solution
def bubble_sort(list_1):
    for j in range(len(list_1)-1):
        for i in range(len(list_1)-1):
            if list_1[i] > list_1[i+1]:
                a = list_1[i]
                b = list_1[i+1]
                list_1[i] = b
                list_1[i+1] = a
    return list_1

print(bubble_sort([2, 4, 6, 3, 11, 5, 1]))
# print(bubble_sort(one))
# print(bubble_sort(two))
# print(bubble_sort(three))
# print(bubble_sort(four))
# print(bubble_sort(five))
# print(bubble_sort(six))