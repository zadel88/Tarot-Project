let num = Math.floor(Math.random() * 23)
let x = Math.floor(Math.random() * 2);

function reverse(x) {
    if (x == 1) {
        x = 'upwards';
    } else {
        x = 'reversed';
    }
    return x;
}
switch (num) {
    case 0:
        num = 'Fool';
        break;
    case 1:
        num = 'Magician';
        break;
    case 2:
        num = 'High Priestess';
        break;
    case 3:
        num = 'Empress';
        break;
    case 4:
        num = 'Emperor';
        break;
    case 5:
        num = 'Hierophant';
        break;
    case 6:
        num = 'Lovers';
        break;
    case 7:
        num = 'Chariot';
        break;
    case 8:
        num = 'Strength';
        break;
    case 9:
        num = 'Hermit';
        break;
    case 10:
        num = 'Wheel of Fortune';
        break;
    case 11:
        num = 'Justice';
        break;
    case 12:
        num = 'Hanged Man';
        break;
    case 13:
        num = 'Death';
        break;
    case 14:
        num = 'Temperance';
        break;
    case 15:
        num = 'Devil';
        break;
    case 16:
        num = 'Tower';
        break;
    case 17:
        num = 'Star';
        break;
    case 18:
        num = 'Moon';
        break;
    case 19:
        num = 'Sun';
        break;
    case 20:
        num = 'Judgement';
        break;
    case 21:
        num = 'World';
        break;
}

function reading(num) {
    if (x == 1) {
        console.log('Your card is The ' + num);
    } else {
        console.log('Your card is The ' + num + ' reversed')
    }
}
reading(num)