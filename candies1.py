candies = [2,3,5,1,3]
extraCandies = 3
# Expected output: [true, true, true, false, true]

def kids(arr, integer):  
    new_arr = []
    for i in arr:
        if i + integer >= max(arr):
            new_arr.append(True)
        else:
            new_arr.append(False)
    print(new_arr)

kids(candies, extraCandies)