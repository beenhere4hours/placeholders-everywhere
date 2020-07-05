const url = `https://via.placeholder.com`;
let images = document.getElementsByTagName('img');

for (let i = 0; i < images.length; i++) {

    images[i].src = `${url}/${images[i].width}x${images[i].height}.png`;

    if (images[i].srcset.length > 0) {

        const aspect = (images[i].height / images[i].width);
        let srcSet = images[i].srcset.split(',');
        let newSrcSet = [];

        srcSet.forEach(src => {
            src = src.trim();

            // try to get width
            if (src.substr(src.length - 1) === 'w') {
                const width = Number(src.substring((src.lastIndexOf(' ') + 1), (src.length - 1)));
                const adjustedHeight = Math.floor(width * aspect);
                newSrcSet.push(`${url}/${width}x${adjustedHeight}.png`);
            }
        });

        images[i].srcset = newSrcSet.join();
    }
}
