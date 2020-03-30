# Python Solution #1
# O(j + d) time | O(j + d) space


def topologicalSort(jobs, deps):
    jobGraph = createJobGraph(jobs, deps)
    return getOrderedJobs(jobGraph)


def createJobGraph(jobs, deps):
    graph = JobGraph(jobs)
    for prereq, job in deps:
        graph.addPrereq(job, prereq)
    return graph


def getOrderedJobs(graph):
    orderedJobs = []
    nodes = graph.nodes
    while len(nodes):
        node = nodes.pop()
        containsCycle = depthFirstTraverse(node, orderedJobs)
        if containsCycle:
            return []
    return orderedJobs

def depthFirstTraverse(node, orderedJobs):
  if node.visited:
    return False
  if node.visiting:
    return True
  node.visiting = True
  for prereqNode in node.prereqs:
    containsCycle = depthFirstTraverse(prereqNode, orderedJobs)
    if containsCycle:
      return True
  node.visited = True
  node.visiting = False
  orderedJobs.append(node.job)
  return False
  