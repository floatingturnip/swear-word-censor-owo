/* File: content.js
 * ---------------
 * Hello! You'll be making most of your changes
 * in this file. At a high level, this code replaces
 * the substring "cal" with the string "butt" on web pages.
 *
 * This file contains javascript code that is executed
 * everytime a webpage loads over HTTP or HTTPS.
 * 
 * This has been turned into a useless chrome extension where you can replace stuff on websites with other stuff
 */

/*function clean (text) {
    var dictionary = { bad: 'good', worse: 'better', awful: 'wonderful'},
        regexp = RegExp ('\\b(' + Object.keys (dictionary).join ('|') + ')\\b', 'ig');

    return text.replace (regexp, function (_, word) { 
      _ = dictionary[word.toLowerCase ()];
      if (/^[A-Z][a-z]/.test (word)) // initial caps
        _ = _.slice (0,1).toUpperCase () + _.slice (1);
      else if (/^[A-Z][A-Z]/.test (word)) // all caps
        _ = _.toUpperCase ();
      return _;
    });
  }*/



/*
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.storage.sync.get('state', function (data) {
    if (data.state === 'on') {
      chrome.storage.sync.set({ state: 'off' });
      //do something, removing the script or whatever
      changeText();
    } else {
      chrome.storage.sync.set({ state: 'on' });
      //inject your script
      
    }
  });
});
*/
var dictionary = {
  'bad': 'good',
  'worse': 'better',
  'awful': 'wonderful',
  'worst': 'best',
  'loss': 'win',
  'threats': 'gifts',
  'terrible': 'amazing',
  'tragedy': 'fortune',
  'death': 'life',
  'deaths': 'lives',
  'dead': 'alive',
  'fire': 'fun water fight',
  'injured': 'healthy',
  'disaster': 'great event',
  'catastrophe': 'event where everyone is safe',
  'horrible': 'great',
  'agressive': 'kind',
  'evil': 'nice',
  'unfortunate': 'amazing',
  'fight': 'team up',
  'enemy': 'friend',
  'defeat': 'win'
},
//idk how this works, found it on stack overflow
  regexp = RegExp('\\b(' + Object.keys(dictionary).join('|') + ')\\b', 'ig'); //idk how this work found on stack overflow and it works

  //certain words we don't want to 
var dictionary2 = {
  'crap': 'OwU',
  'ass': 'UwO',
  'asshole': 'UwOhole',
  'shitass': 'uwuUwO',
  'jackass': 'jackUwO'
},
  regexp2 = RegExp('\\b(' + Object.keys(dictionary2).join('|') + ')\\b', 'ig');

//TODO: change this
function changeText() {
  
  var elements = document.getElementsByTagName('*');

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];

      if (node.nodeType === 3) {
        var text = node.nodeValue;
        var replacedText = swearWords(text)
        

        if (replacedText !== text) {
          element.replaceChild(document.createTextNode(replacedText), node);
        }
      }
    }
  }
}

function swearWords(replacedText){
  replacedText = replacedText.replace(regexp2, function (_, word) { return dictionary2[word.toLowerCase()]; });

  //curse words
  replacedText = replacedText.replace(/fuck/gi, "owo");
  replacedText = replacedText.replace(/shit/gi, "uwu");
  replacedText = replacedText.replace(/bitch/gi, "OwO");
  replacedText = replacedText.replace(/whore/gi, "UwU");
  replacedText = replacedText.replace(/cunt/gi, "0w0");
  replacedText = replacedText.replace(/nigga/gi, "Owo");
  replacedText = replacedText.replace(/slut/gi, "owO");

  return replacedText;
}

function negativeWords(replacedText){
  replacedText = replacedText.replace(regexp, function (_, word) { return dictionary[word.toLowerCase()]; });
}

changeText();

//TODO: figure out button stuff
/*
let state = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  if (!state) {
    //chrome.tabs.insertCSS(null, { file: "dark_mode.css" });
    changeText();
    state = !state;
    return;
  }
  //chrome.tabs.insertCSS(null, { file: "light_mode.css" });
  state = !state;
});
*/