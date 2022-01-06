const persons = [
    'The man',
    'The woman',
    'The child',
    'The kangaroo',
    'You',
];

const places = [
    'the beach',
    'the store',
    'the office',
    'the restaraunt',
    'the park',
    'the campground',
    'school',
    'Hong Kong',
    'Kalamazoo',
];

const transports = [
    'a bicycle',
    'a kangaroo',
    'an elephant',
    'a bus',
    'a rhino',
    'a ninja',
    'a pet rock',
];

const actions = [
    'found',
    'bought',
    'dug up',
    'tripped over'
];


// TODO - This could be improved by changing items to be objects
// that specified their article. Otherwise this can produce
// some bad English. (mdr)
const items = [
    'pickled beats',
    'candied pickles',
    'old socks',
    'fried twinkies',
    'calendar from 1972',
    'pet rock food',
];

const person    = persons[Math.floor(Math.random() * persons.length)];
const place     = places[Math.floor(Math.random() * places.length)];
const transport = transports[Math.floor(Math.random() * transports.length)];
const action    = actions[Math.floor(Math.random() * actions.length)];
const item      = items[Math.floor(Math.random() * items.length)];

const phraseArticle = function(item) {
    if (item[item.length-1] === 's') {
        return 'some';
    } else {
        return 'a';
    }
}

console.log(`${person} rode ${transport} to ${place} and ${action} ${phraseArticle(item)} ${item}`);