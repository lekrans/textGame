let tokens = ["look", "watch", "pick", "examine", "open", "hit", "listen", "fish"];
let tokensSet = new Set(tokens);

let fillerWords = ["at", "the"];
let fillerWordsSet = new Set(fillerWords);

let Room = function () {
    this.fromDistance = "";
    this.overview = "";
    this.description = "";
};

let Action = function () {
    this.token = null;
    this.item = null;
};

let Item = function () {
    this.move = null;
};

let Person = function () {
    this.currentRoom = null;
};



let room1 = new Room();
room1.fromDistance = "a light livingroom";
room1.overview = "You are standing in a light livingroom that feels somewhat false";
room1.description = "It is an old room. The furnitures are rugged and dusty. It has a door to the left";

function handleAction (actionString) {
    const ary = actionString.split(" ");
    let i = 0;
    let actions = [];

    while (i < ary.length) {

        if (tokensSet.has(ary[i])) {
            let action = new Action();

            action.token = ary[i];
            i += 1;
            while (fillerWordsSet.has(ary[i])) {

                i += 1;
            }
            if (!tokensSet.has(ary[i])) {

                action.item = ary[i];
                i += 1;
            }
            actions.push(action);
        }
    }
    actions.forEach((element) => alert(`Token = ${element.token} , item = ${element.item}`));
}


let me = new Person();
me.currentRoom = room1;
{
    let action = "quit";

    do {
        action = prompt("What do you do?");
        handleAction(action);
    } while (action.toLowerCase() !== "quit");
}


