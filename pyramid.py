floor = int(input("Enter number of floor: "))

for q in range(floor):
    for w in range(q + 1):
        print(w + 1, end=" ")
    print()
