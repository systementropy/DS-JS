const floodFill = (image, sr, sc, color, srcColor = null, isTouched = {}) => {

	if (srcColor === null){
		srcColor = image[sr][sc]
	}
	if ((image[sr][sc] === color || image[sr][sc] !== srcColor || isTouched[`${sr}-${sc}`]) ){
		
	}else{
		image[sr][sc] = color;
		isTouched[`${sr}-${sc}`] = 1
		if ((sr-1) >= 0){
			 floodFill(image, sr -1 , sc, color, srcColor, isTouched)
		}
		if ((sr+1) < image.length){
			 floodFill(image, sr +1 , sc, color, srcColor, isTouched)
		}
		if ((sc-1) >= 0){
			 floodFill(image, sr , sc -1 , color, srcColor, isTouched)
		}
		if ((sc+1) < image[sr].length){
			 floodFill(image, sr , sc +1 , color, srcColor, isTouched)
		}
	}
	return image
}

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1,1, 2));
console.log(floodFill([[0,0,0],[0,0,0]], 1,1, 2));