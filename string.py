s = "odce"
indices = [1, 2, 0, 3]
# Returns “code”

def spelling(str1, lst1):
    empty_str = ""
    for i in lst1:
        empty_str += str(str1[lst1[i]])
    print(empty_str)

spelling(s, indices)