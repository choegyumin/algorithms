import sys


# 데이터 가공 후 solution 함수를 구현해, 일반적인 코딩 인터뷰 플랫폼처럼 풀이하면 메모리 초과 발생
# (메모리 제한으로 데이터 가공과 연산이 함께 이루어져야 통과 가능)
# https://www.acmicpc.net/board/view/86182
def solution(length, commands):
    Set = set()
    Log = []

    for method, arg in commands:
        if method == "add":
            Set.add(arg)

        elif method == "remove":
            Set.discard(arg)

        elif method == "check":
            Log.append(1 if arg in Set else 0)

        elif method == "toggle":
            if arg in Set:
                Set.discard(arg)
            else:
                Set.add(arg)

        elif method == "all":
            Set = set([i for i in range(1, 21)])

        elif method == "empty":
            Set = set()

    return Log


input = sys.stdin.read().strip()
args = input.split("\n")
length = int(args[0])
commands = [
    (parts[0], int(parts[1]) if len(parts) > 1 else None)
    for parts in (value.split(" ") for value in args)
]

output = solution(length, commands)
print("\n".join(map(str, output)))
