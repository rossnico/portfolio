const quotationfr = [
    "On considère que les neuf dixièmes du code correspondent à environ 90% du temps de développement. Les 10% restant correspondent également à 90% du temps de développement — Tom Cargill.",
    "Vous ne pouvez pas comprendre la récursivité sans avoir d’abord compris la récursivité — Auteur Inconnu.",
    "J’ai toujours rêvé que mon ordinateur soit aussi simple à utiliser que mon téléphone. Ce rêve est devenu réalité : je ne comprends plus comment utiliser mon téléphone — Bjarne Stroustrup.",
    "Un ordinateur vous permet de faire plus de bêtises, beaucoup plus rapidement, que n’importe quelle autre invention dans l’histoire de l’humanité. À l’exception notable des armes à feu et de la tequila — Mitch Ratcliffe.",
    "Il y existe deux manières de concevoir un logiciel. La première, c’est de le faire si simple qu’il est évident qu’il ne présente aucun problème. La seconde, c’est de le faire si compliqué qu’il ne présente aucun problème évident. La première méthode est de loin la plus complexe — C.A.R. Hoare.",
    "Le fossé séparant théorie et pratique est moins large en théorie qu’il ne l’est en pratique — Auteur Inconnu.",
    "Si les ouvriers construisaient les bâtiments comme les développeurs écrivent leurs programmes, le premier pivert venu aurait détruit toute civilisation — Gerald Weinberg.",
    "Si debugger, c’est supprimer des bugs, alors programmer ne peut être que les ajouter — Edsger Dijkstra.",
    "Mesurer la progression du développement d’un logiciel à l’aune de ses lignes de code revient à mesurer la progression de la construction d’un avion à l’aune de son poids — Bill Gates.",
    "Avant de vouloir qu’un logiciel soit réutilisable, il faudrait d’abord qu’il ait été utilisable — Ralph Johnson."
]

const quotationen = [
    "The best thing about a boolean is even if you are wrong, you are only off by a bit. (Anonymous).",
    "Without requirements or design, programming is the art of adding bugs to an empty text file. (Louis Srygley).",
    "Before software can be reusable it first has to be usable. (Ralph Johnson).",
    "If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization. (Gerald Weinberg).",
    "There are two ways to write error-free programs; only the third one works. (Alan J. Perlis).",
    "It’s not a bug – it’s an undocumented feature. (Anonymous).",
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. (Martin Golding).",
    "Deleted code is debugged code. (Jeff Sickel).",
    "In order to understand recursion, one must first understand recursion. (Anonymous)",
    "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job. (Mosher’s Law of Software Engineering)"
]
async function loopQuotationFr(){
    for(let i = 0; i < quotationfr.length; i++){
        document.getElementById("quotationfr").innerHTML = quotationfr[i]
        await new Promise(r => setTimeout(r, 10000));
        if(i == quotationfr.length - 1){
            i = -1;
        }
    }
}

async function loopQuotationEn(){
    for(let i = 0; i < quotationen.length; i++){
        document.getElementById("quotationen").innerHTML = quotationen[i]
        await new Promise(r => setTimeout(r, 10000));
        if(i == quotationen.length - 1){
            i = -1;
        }
    }
}
if(document.getElementById("quotationen") == null)
    loopQuotationFr()
else
    loopQuotationEn()