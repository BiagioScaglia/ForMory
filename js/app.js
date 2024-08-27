const subjects = [
    "Il mio cuore", 
    "Il tuo sorriso", 
    "Il nostro amore", 
    "Ogni momento con te", 
    "Il tuo abbraccio", 
    "Il tuo sguardo", 
    "Il nostro legame", 
    "Il tuo profumo", 
    "Il tuo tocco", 
    "La tua voce",
    "Il nostro futuro", 
    "I tuoi occhi", 
    "Il nostro viaggio insieme"
];

const verbs = [
    "illumina", 
    "scalda", 
    "riempie", 
    "abbraccia", 
    "accende", 
    "colora", 
    "nutre", 
    "rinvigorisce", 
    "ispira", 
    "guidare",
    "trasforma", 
    "proteggere", 
    "incoraggia", 
    "amplifica"
];

const objects = [
    "le mie giornate", 
    "il mio mondo", 
    "la mia vita", 
    "ogni mia emozione", 
    "i miei sogni", 
    "il mio futuro", 
    "il mio cuore", 
    "il mio universo", 
    "la mia esistenza", 
    "il mio cammino",
    "ogni battito del mio cuore", 
    "ogni passo che faccio", 
    "tutte le mie speranze"
];

const endings = [
    "di gioia.", 
    "di felicità.", 
    "di amore eterno.", 
    "di passione.", 
    "di serenità.", 
    "di magia.", 
    "di luce.", 
    "di dolcezza.", 
    "di tranquillità.", 
    "di meraviglia.",
    "di gratitudine.", 
    "di stupore.", 
    "di incanto."
];

const textTemplates = [
    "Quando penso a [SUBJECT], sento che [VERB] [OBJECT]. Questo è l'effetto che hai su di me, Mory.",
    "[SUBJECT] è la ragione per cui [VERB] [OBJECT]. Non smetterò mai di amarti.",
    "Ogni volta che [SUBJECT], [VERB] [OBJECT]. Sei tutto ciò di cui ho bisogno.",
    "[SUBJECT] mi ricorda sempre quanto [VERB] [OBJECT]. Sei la mia fonte di ispirazione.",
    "Mory, [SUBJECT] [VERB] [OBJECT]. Questo amore non conosce limiti.",
    "[SUBJECT] è la cosa più preziosa che ho, perché [VERB] [OBJECT] ogni giorno.",
    "Sei come una stella nel cielo: [SUBJECT] [VERB] [OBJECT] con la tua luce.",
"Non importa dove sei, [SUBJECT] [VERB] sempre [OBJECT] dentro di me.",
"[SUBJECT] non è solo una cosa, ma [VERB] [OBJECT] in modo unico e speciale."
];

const extendedTextTemplates = [
    "Ogni volta che penso a [SUBJECT], il mio cuore si riempie di calore e serenità. La tua presenza nella mia vita [VERB] ogni angolo del mio mondo, rendendolo un posto migliore. Non c'è niente di più bello di [OBJECT], perché con te accanto, tutto sembra più semplice e pieno di gioia.",
    "Quando siamo insieme, sento che [SUBJECT] [VERB] [OBJECT] in un modo che non ho mai sperimentato prima. La tua dolcezza e il tuo amore mi fanno sentire la persona più fortunata del mondo. Mi sento completamente e profondamente innamorato, e ogni giorno con te è una benedizione.",
    "[SUBJECT] non è solo qualcosa che apprezzo, ma è una parte fondamentale della mia vita. Grazie a te, ogni giorno [VERB] [OBJECT] con nuovi colori, nuove emozioni, e una luce che non ho mai conosciuto prima. Sei il mio tutto, Mory.",
    "Non importa dove ci porterà la vita, so che [SUBJECT] [VERB] [OBJECT] ovunque andremo. Il nostro amore è una forza inarrestabile, capace di superare qualsiasi ostacolo. Con te, ogni giorno è un'avventura meravigliosa, piena di amore e felicità.",
    "Quando penso al futuro, vedo solo [SUBJECT] che [VERB] [OBJECT] con tutto l'amore che posso immaginare. Sei la mia ispirazione, la mia guida, e la luce che illumina ogni mio passo. Con te al mio fianco, so che possiamo affrontare qualsiasi cosa.",
    "La mia vita è cambiata da quando ti ho incontrato. [SUBJECT] [VERB] [OBJECT] come mai avrei potuto immaginare. Ogni istante con te è un regalo prezioso che custodisco nel profondo del mio cuore.",
    "Nel silenzio della notte, penso a [SUBJECT] che [VERB] [OBJECT], e mi rendo conto di quanto sono fortunato ad averti al mio fianco. Sei il mio sogno diventato realtà.",
    "Ogni passo che facciamo insieme rafforza [SUBJECT] e [VERB] [OBJECT] in modi che non avrei mai creduto possibili. La nostra connessione è unica e insostituibile, e mi riempie di speranza per il futuro.",
    "Non c'è nulla di più bello di [SUBJECT] che [VERB] [OBJECT] in ogni istante della mia vita. Con te, ogni giorno è una nuova scoperta, un nuovo motivo per sorridere e amare.",
    "Insieme abbiamo costruito un legame indissolubile. [SUBJECT] [VERB] [OBJECT] e mi dà la forza di affrontare qualsiasi cosa, sapendo che con te tutto è possibile."
];

let savedMessages = [];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomPhrase() {
    const subject = getRandomElement(subjects);
    const verb = getRandomElement(verbs);
    const object = getRandomElement(objects);
    const ending = getRandomElement(endings);

    return `${subject} ${verb} ${object} ${ending}`;
}

function generateRandomText() {
    const template = getRandomElement(extendedTextTemplates);
    return template
        .replace("[SUBJECT]", getRandomElement(subjects))
        .replace("[VERB]", getRandomElement(verbs))
        .replace("[OBJECT]", getRandomElement(objects));
}

function saveCustomMessage() {
    const message = document.getElementById('custom-message').value.trim();
    if (message) {
        savedMessages.push(message);
        displaySavedMessages();
        document.getElementById('custom-message').value = '';
    } else {
        alert("Scrivi un messaggio prima di salvarlo.");
    }
}

function displaySavedMessages() {
    const savedMessagesDiv = document.getElementById('saved-messages');
    savedMessagesDiv.innerHTML = savedMessages.map(msg => `<p>${msg}</p>`).join('');
}

document.getElementById('generate-phrase').addEventListener('click', function() {
    document.getElementById('phrase-display').textContent = generateRandomPhrase();
});

document.getElementById('generate-text').addEventListener('click', function() {
    document.getElementById('text-display').textContent = generateRandomText();
});

document.getElementById('save-message').addEventListener('click', saveCustomMessage);

document.getElementById('theme-select').addEventListener('change', function() {
    const selectedTheme = this.value;
    document.body.className = `${selectedTheme}-theme`;
});
