const pText = document.querySelector('p')
const character = document.querySelector('h2')
const textBox = document.querySelector('.text-box')
const buttonNext = document.querySelector('.next')
const buttonPrevious = document.querySelector('.previous')

const colors = ['white', 'blue']
const persons = ['Женя', 'Незнакомец', 'Незнакомец 2', 'Незнакомец 3']
const phrasesFirstAct = [
    '- Однажды меня спросили: "Кем среди трёх вариантов по вашему мнению является человек?"',
    '- 1. Самым величественным существом; 2. Самым несчастным существом; 3. Самым подлым существом',
    '- Тогда я согласился со всеми вариантами, ведь с точки зрения эволюции человек самый совершенный, самый подлый потому что даже самые благие намерения человека будут идти для его собственной выгоды будь то дружба или отношения, а насчастный из-за первого пункта, пока человек будет умным и склонным к самоанализу, он будет страдать.',
    '- Я не добился ничего в этой жизни, думал если ничего не делать в школе и университете меня ждёт успешная жизнь, ведь у меня были отличные навыки коммуникации с людьми, считал что именно это меня обеспечит…',
    '- Как только я закончил школу, вся моя жизнь пошла наперекосяк, все мои социальные навыки собранные годами будто забрали в большой сундук под названием отчаяние вместе с моими стремлениями и желаниями.',
    '- Друзей я так и не смог себе завести после школы, лишь девушку - Лиля кажется…',
    '- И то я без раздумий бросил её как сразу на горизонте появился ещё один шанс с моей школьной любовью - Юлей за которой я бегал с 9-го и до конца 11-го класса, хоть мы и не встречались, но она навсегда залезла ко мне в голову. Все мои следующие попытки найти девушку опирались лишь на на поиск типажа как у неё…',
    '- В итоге получилось так что через 2,5 месяцев нашего расставания она вышла замуж за нашего одноклассника, за 2 года родила ему Стёпу, Елисея и Макара, получила социальное жильё, а я выиграл спор: "Кто больше любит".',
    '- После 3-го курса меня отчислили за плохую успеваемость. Я подвёл бабушку с дедушкой которые взялись за моё воспитание в начале 11-го класса когда моей матери не стало.',
    '- Отца я вообще никогда не видел…',
    '- Сейчас мне 24 года, я веду затворнический образ жизни, избегая любых связей и контактов с людьми, единственное что меня держало хоть как-то это последнее время это работа фрилансером в интернете. Деньги были небольшими, но на гречку с сосиской по праздникам и оплату коммунальных услуг хватало.',
    '- Мне надоела такая жизнь, надоела вся эта серость вокруг, злые люди, очущение будто цепи безысходности тянут меня на дно. Но вот незадача - дно давно закончилось. Я устал…',
    '- Прощай жестокий мир, просите меня дедушка и бабушка, я не смог оправдать ваших надежд…'
];
const phrasesSecondActStranger = [
    '- Вы живы? Вы слышите меня?',
    '- Тут мужчина лет 30-ти.',
    '- Вот ведь беда, он не выживет...'
]
let act = 0
let level = 0
let i = 2
const nextSlide = (text, size, name, color, displayName, display) => {
    pText.innerHTML = text
    character.style.display = displayName
    character.innerHTML = name
    character.style.color = color
    pText.style.fontSize = size
    textBox.style.display = display
};
if(act === 0) {
    buttonNext.addEventListener('click', () => {
        level++
        if(level === 1) {
            textBox.style.display = 'block'
        } else if (level === 4) {
            nextSlide(phrasesFirstAct[level-2], '20px')
            i++
        } else if (level === 8) {
            nextSlide(phrasesFirstAct[level-2], '20px')
            i++
        } else if (level === 12) {
            nextSlide(phrasesFirstAct[level-2], '20px')
            i++
        } else if(level === 15) {
            textBox.style.display = 'none'
        } else if (level === i) {
            nextSlide(phrasesFirstAct[level-2], '25px', persons[-1], colors[-1], 'none', 'display')
            i++
        }
    })
    buttonPrevious.addEventListener('click', () => {
        console.log(level)
        console.log(i)
        if (level === 2 || level === 1) {
            textBox.style.display = 'none'
            level = 0
            i = 2
        } else if(level === i - 1) {
            nextSlide(phrasesFirstAct[level-3], '25px')
            i--
            level--
        }
    })
}


// buttonNext.addEventListener('click', () => {
//     level+=1 ;
    
//     if(!level) {
//         textBox.display = 'block';
//     } else if(level === 1) {
//         nextSlide(phrasesFirstAct[level-1], '25px', persons[0], colors[0], 'none', 'display');
//     } else if(level === 3) {
//         nextSlide(phrasesFirstAct[level-1], '20px');
//     } else if(level === 4) {
//         nextSlide(phrasesFirstAct[level-1], '25px');
//     } else if(level === 7) {
//         nextSlide(phrasesFirstAct[level-1], '20px');
//     } else if(level === 8) {
//         nextSlide(phrasesFirstAct[level-1], '25px');
//     } else if(level === 11) {
//         nextSlide(phrasesFirstAct[level-1], '20px');
//     } else if(level === 12) {
//         nextSlide(phrasesFirstAct[level-1], '25px');
//     } else if(level === 14) {
//         // Finish 
//         textBox.style.display = 'none'
//     }
// });
