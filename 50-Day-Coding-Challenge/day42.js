// Day 42 Coding Challenge
// Create a function that will return a boolean value indicating if two circle defined by center coordinates and radius are intersecting

print(collisionCircleCircle(200, 200, 100, 300, 300, 50));

function collisionCircleCircle(circle1X, circle1Y, circle1R, circle2X, circle2Y, circle2R) {
	let d = getDistance(circle1X, circle1Y, circle2X, circle2Y);
	return d <= circle1R + circle2R;
}

// Calculates the distance between the two specified points
function getDistance(x1, y1, x2, y2) {
	var l1 = x2 - x1;
	var l2 = y2 - y1;

	return Math.sqrt(l1 * l1 + l2 * l2);
}
