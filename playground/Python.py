import sys


def solution(*args):
    return args


sys.stdin = open("./dev/stdin", "r")
input = sys.stdin.read().strip()
args = input.split("\n")

output = solution(*args)
print(output)
