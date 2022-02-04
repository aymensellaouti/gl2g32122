const book = {
    "main title": "JavaScript",
    'sub-title': "The Guide",
    "for": "all audiences",
    author: {
        firstname: "David",
        surname: "Flanagan"
    }
};
(function (objet) {
    for (key in objet) {
        console.log(' with point ' + objet.key);
        console.log(' with brackets' + objet[key]);
    }
})(book);

const { author } = book;
console.log(author);
