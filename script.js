//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function loadImage(image) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.url;

        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
    });
}

// Function to handle button click and display images
function downloadAndDisplayImages() {
    output.innerHTML = ''; 

    // Download all images in parallel
    const imagePromises = images.map(loadImage);

    Promise.all(imagePromises)
        .then(downloadedImages => {
            downloadedImages.forEach(img => {
                output.appendChild(img);
            });
        })
        .catch(error => {
            console.error(error.message);
        });
}

// Attach click event to the button
btn.addEventListener('click', downloadAndDisplayImages);