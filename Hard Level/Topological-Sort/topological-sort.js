// JavaScript Solution #1
// O(j + d) time | O(j + d) space

function topologicalSort(jobs, deps) {
	const jobGraph = createJobGraph(jobs, deps);
	return getOrderedJobs(jobGraph);
}

function createJobGraph(jobs, deps) {
	const graph = new jobGraph(jobs);
	for (const [prereq, job] of deps) {
		graph.addPrereq(job, prereq);
	}
	return graph;
}

function getOrderedJobs(graph) {
	const getOrderedJobs = [];
	const { nodes } = graph;
	while (nodes.length) {
		const node = nodes.pop();
		const containsCycle = depthFirstTraverse(node, orderedJobs);
		if (containsCycle) return [];
	}
	return orderedJobs;
}
