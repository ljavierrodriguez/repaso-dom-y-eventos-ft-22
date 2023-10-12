let images_collection = [
    "https://picsum.photos/id/237/400/300",
    "https://picsum.photos/id/371/300/300",
    "https://picsum.photos/id/249/300/300",
    "https://picsum.photos/id/666/300/300",
    "https://picsum.photos/id/120/300/300",
    "https://picsum.photos/id/902/300/300",
    "https://picsum.photos/id/400/800/600",
    "https://picsum.photos/id/510/300/300",
    "https://picsum.photos/id/765/300/300",
    "https://picsum.photos/id/999/300/300",
];

let listViewer = document.querySelector('.list-viewer');
let loader = document.querySelector('#loader');
let total_images = images_collection.length;
for(let i = 0; i < total_images; i++){
    //console.log(images_collection[i]);
    let img = document.createElement('img');
    img.src = images_collection[i];
    img.addEventListener('click', (e) => {
        loader.src = e.target.src;
    })
    listViewer.appendChild(img);
}