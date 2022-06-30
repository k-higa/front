import {Item} from "./item";


let elem = document.getElementById('output');
let book = new Item('はじめてのtypescript', 1900);
book.say(elem);