# 너비 우선 탐색(BFS: Breadth-First Search)

> [(이코테 2021 강의 몰아보기) 3. DFS & BFS](https://www.youtube.com/watch?v=7C9RgOcvkvo&list=PLRx0vPvlEmdAghTr5mXQxGpHjWqSz0dgC)

**그래프의 루트 노드에서 인접한 노드들을 순서대로 탐색하는 알고리즘**  
queue를 이용해서 노드의 방문 처리와 함께 구현.

![bfs.gif](bfs.gif)

## 동작 과정

1. queue(`Array`)에 첫 번째 노드를 넣고, queue가 비워질 때까지 반복문(`while`) 실행.
1. 반복문 안에서 노드를 `shift`.
1. 현재 노드가 문제의 조건에 부합하는지 확인하고, 부합하지 않는다면 `continue`.
1. visited(`Set`)를 이용해 현재 노드를 방문 처리.
1. 목표에 도달했다면 `return`, 아니라면 방문하지 않은 인접 노드들을 `push`.


## 예시

- 최단경로
