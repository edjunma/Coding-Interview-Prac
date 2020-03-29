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
