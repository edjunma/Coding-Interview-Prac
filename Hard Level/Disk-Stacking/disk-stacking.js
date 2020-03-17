// JavaScript Solution
// O(n^2) time | O(n) space

function diskStacking(disks) {
	disks.sort((a, b) => a[2] - b[2]);
	const heights = disks.map(disk => disk[2]);
	const sequences = new Array(disks.length);
	let maxHeightIdx = 0;
	for (let i = 1; i < disks.length; i++) {
		const currentDisk = disks[i];
		for (let j = 0; j < i; j++) {
			const otherDisk = disks[j];
		}
	}
}
