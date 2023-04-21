---
layout: page
title: Canvas
permalink: /Canva/
---



```
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Canvas Drawing</title>
</head>
<body>
	<canvas id="myCanvas" width="500" height="500"></canvas>
	<script>
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		
		// Set the line color and width
		ctx.strokeStyle = "black";
		ctx.lineWidth = 5;

		// Drawing the line
		var isDrawing = false;
		canvas.addEventListener("mousedown", function(event) {
			isDrawing = true;
			ctx.beginPath();
			ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
		});

		canvas.addEventListener("mousemove", function(event) {
			if(isDrawing){
				ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
				ctx.stroke();
			}
		});

		canvas.addEventListener("mouseup", function(event) {
			isDrawing = false;
		});
	</script>
</body>
</html>
```


