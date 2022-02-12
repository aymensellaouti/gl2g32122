function createImage(
    src = '',
    alt = 'Alternative',
    title = 'image'
) {
    const image = document.createElement('img');
    image.src = src;
    image.alt = alt;
    image.title = title;
    return image;
}

setTimeout(
    () => {
        const body = document.querySelector('body');
        body.insertBefore(
            createImage('images/techwall.png'),
            body.firstChild
        )
    },
    3000
)
