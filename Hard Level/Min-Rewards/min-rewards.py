# Python Solution #1
# O(n^2) time | O(n) space - where in is the length of the input array


def minRewards(scores):
    rewards = [1 for _ in scores]
    for i in range(1, len(scores)):
        j = i - 1
        if scores[i] > scores[j]:
            rewards[i] = rewards[j] + 1
        else:
            while j >= 0 and scores[j] > scores[j + 1]:
                rewards[j] = max(rewards[j], rewards[j + 1] + 1)
                j -= 1
    return sum(rewards)

# Python Solution #2
# O(n) time | O(n) space - where in is the length of the input array


def minRewards(scores):
    rewards = [1 for _ in scores]
    localMinIdxs = getLocalMinIdxs(scores)
    for localMinIdx in localMinIdxs:
        expandFromLocalMinIdx(localMinIdx, scores, rewards)
    return sum(rewards)


def getLocalMinIdxs(array):
    if len(array) == 1:
        return [0]
    localMinIdxs = []
    for i in range(len(array)):
        if i == 0 and array[i] < array[i + 1]:
            localMinIdxs.append(i)
        if i == len(array) - 1 and array[i] < array[i - 1]:
            localMinIdxs.append(i)
        if i == 0 or i == len(array) - 1:
            continue
        if array[i] < array[i + 1] and array[i] < array[i - 1]:
            localMinIdxs.append(i)
    return localMinIdxs
