# Given lists
a = [3, 1, 4, 2] 
b = [1, 3, 4, 2]
c = [1, 3, 4, 2]
d = [1, 3, 2, 4]
e = [1, 3, 2, 4]
f = [1, 2, 3, 4]

# John's Solution
def bubble(arr):
    index = len(arr) - 1
    sorted = False
    while not sorted:
        sorted = True
        for i in range(0, index):
            if arr[i] > arr[i+1]:
                sorted = False
                a = arr[i]
                b = arr[i + 1]
                arr[i] = b
                arr[i + 1] = a
            print(arr)
        
bubble(a)
print("*" * 10)
bubble(b)
print("*" * 10)
bubble(c)
print("*" * 10)
bubble(d)
print("*" * 10)
bubble(e)
print("*" * 10)
bubble(f)