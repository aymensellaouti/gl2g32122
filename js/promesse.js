var soldeCompte = 5;
const promesseRendreArgent = new Promise(
    ( resolve, reject) => {
        setTimeout(
            () => {
                if (soldeCompte > 10) {
                    resolve(10);
                } else {
                    reject('désolé je n ai pas la somme voulu :(');
                }
            },
            3000
        );
    });

    promesseRendreArgent.then(
        (argent) => {
            console.log(`Merci de m'avoir rendu mes ${argent} dinars :)`)
        }
    ).catch(
        (error) => {
            console.log(error);
        }
    );
