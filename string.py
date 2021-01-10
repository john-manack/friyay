s = "odce"
indices = [1, 2, 0, 3]
# Returns “code”

def unjumble(arr_1, str_1):
    str_1 = list(str_1)
    index = len(arr_1)
    sorted = False
    while not sorted:
        sorted = True
        for i in range(0, index):
            if arr_1[i] > arr_1[i+1]:
                sorted = False
                a = str_1[i]
                b = str_1[i + 1]
                str_1[i] = b
                str_1[i + 1] = a
            print(str_1)

unjumble(indices, s)

# samp_str = "stfarClatigiD"
# samp_list = [12,11,10,9,8,7,6,5,4,3,2,1,0]

# unjumble(samp_list, samp_str)