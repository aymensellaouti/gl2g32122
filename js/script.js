
nbre = 5;
id = setInterval(
    () => {
        if (!nbre) {
            console.log('Boom !!!!!!');
            // clearInterval(id);
        } else {
            console.log(nbre--);
        }
    }, 1500
);
