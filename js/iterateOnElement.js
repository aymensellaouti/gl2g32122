const regions = ['Djerba', 'Tunis', 'Nabeul', 'Jendouba', 'Mednine', 'Sousse'];
const villesOl = document.querySelector('#villes');

function iterateOnContainer(container, iterable, tag, timer = 1500) {
    let i = 0;
    setInterval(
        () => {
            if (i < iterable.length) {
                let element = `<${tag}>${iterable[i++]}</${tag}>`;
                container.innerHTML += element ;
            } else {
                container.innerHTML = '';
                i = 0;
            }
        },
        timer
    );
}

iterateOnContainer(villesOl, regions, 'li');
const itrableDiv = document.querySelector('#itrableDiv');
iterateOnContainer(itrableDiv, regions, 'span',1000);
