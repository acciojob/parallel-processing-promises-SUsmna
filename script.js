//your JS code here. If required.
// const output = document.getElementById("output");
// const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

const outputDiv = document.getElementById('output');
const downloadButton = document.getElementById('download-images-button');
downloadButton.addEventListener('click', () => {
	outputDiv.innerHTML = 'Loading...';
	const imagePromises = imageUrls.map(imgObj => loadImage(imgObj.url));
	Promise.all(imagePromises)
		.then(images => {
			outputDiv.innerHTML = '';
			images.forEach(img => {
				outputDiv.appendChild(img);
                });
            })
            .catch(error => {
                outputDiv.innerHTML = error;
            });
    });
function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = () => reject(`Failed to load image's URL: ${url}`);
    });
}
