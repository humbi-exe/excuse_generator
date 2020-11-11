window.onload = () => {
document.querySelector("#excuse"). innerHTML = generateExcuse();
}

function generateExcuse() {

    let pronun = ['A', 'The'];
    let subject = ['kid', 'rat', 'train', 'weather',];
    let action = ['took my', 'eat my', 'detroy my', 'stole my'];
    let thing = ['homework', 'creditcard', 'wallet', 'laptop'];
    let where = ['in the park', 'at school', 'at the disco', 'at the walmart'];

    let pronunIndx = Math.floor(Math.random() * pronun.length);
    let subjectIndx = Math.floor(Math.random() * subject.length);
    let actionIndx = Math.floor(Math.random() * action.length);
    let thingIndx = Math.floor(Math.random() * thing.length);
    let whereIndx = Math.floor(Math.random() * where.length);

    return pronun[pronunIndx] + ' ' + subject[subjectIndx] + ' ' + action[actionIndx] + ' ' + thing[thingIndx] + ' ' + where[whereIndx];
}