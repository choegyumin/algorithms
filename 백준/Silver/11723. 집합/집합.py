import sys

Set = set()

length = int(sys.stdin.readline().strip())
for i in range(length):
    command = sys.stdin.readline().split()
    method = command[0]
    arg = int(command[1]) if len(command) > 1 else None

    if method == "add":
        Set.add(arg)

    elif method == "remove":
        Set.discard(arg)

    elif method == "check":
        print(1 if arg in Set else 0)

    elif method == "toggle":
        if arg in Set:
            Set.discard(arg)
        else:
            Set.add(arg)

    elif method == "all":
        Set = set([number for number in range(1, 21)])

    elif method == "empty":
        Set = set()
