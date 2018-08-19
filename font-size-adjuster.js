function adjustLines(className, maxLines) {
	const elements = document.getElementsByClassName(className);
	for(let element of elements){
		let lines = countLines(element);
		while(lines > maxLines){
			const newFontSize = parseInt(getComputedStyle(element).fontSize)-1;
			element.style.fontSize = newFontSize+"px";
			lines = countLines(element);
		}
	}
}

function countLines(element) {
	const divHeight = element.offsetHeight;
  const computedHeight = getComputedStyle(element).lineHeight;
  let lineHeight;
  if(computedHeight === "normal") {
    lineHeight = parseInt(getComputedStyle(element).fontSize)*1.2;
  }
	else {
    lineHeight = parseInt(getComputedStyle(element).lineHeight);
  }
	const lines = divHeight / lineHeight;
	return lines;
}
