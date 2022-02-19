const pText = document.querySelector('p')
const character = document.querySelector('h2')
const textBox = document.querySelector('.text-box')
const buttonNext = document.querySelector('.next')
const buttonPrevious = document.querySelector('.previous')
const background = document.querySelector('body')
const buttonSelect1 = document.querySelector('.button-Select1')
const buttonSelect2 = document.querySelector('.button-Select2')
const buttonsSelect = document.querySelector('.select')

const colors = ['white', 'blue', 'rgb(0, 255, 0)', 'red']
const persons = ['Женя', 'Незнакомец', 'Незнакомец 2', 'Незнакомец 3', 'Врач', 'Врач 2', 'Фигура', 'Девочка']
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
const phrasesThirdAct = [
    '- Вы понимаете где вы?',
    '- Давление падает, срочно нужно переливание!',
    '- Вы слышите меня? Вы помните своё имя?',
    '- Говорить можете?',
    '- Вот чёрт, я всё же умираю. Впрочем это было моё решение.'
]
const phrasesFourthAct = [
    '- Чувство покоя медленно наполняло меня, будто руки родного и любимого человека утешали тебя после тяжёлого рабочего дня.',
    '- Где я? Я что умер?',
    '- Тут неожиданно предо мной проявилась странная белая фигура без лица, будто не из нашего мира и начала говорить со мной на моём языке.',
    '- Что? Умер? - Нет.',
    '- Ты сейчас находишься между жизнью и смертью и я здесь не просто так стою возле тебя.',
    '- Ты мой проводник на тот свет или что-то типа того?',
    '- Та нет же, глупенький! Я пришёл предложить тебе сделку.',
    '- Аааа, Дьявол значит. Так знай, на никакие с тобой сделки я не пойду не под каким предлогом, пусть даже ты мне идеальную жизнь пообещай и золотые горы.',
    '- Обзываться тебя никто не просил между прочим. Чтобы ты знал по другою сторону нет ни ангелов, ни демонов. Я всего лишь оболочка твоих надежд и стремлений - твой друг, который не хочет приченить тебе вреда.',
    '- Бред правдоподобнее не мог придумать, Сатана? Какое ещё воплощение надежд и стремлений, которых у меня давно нету?',
    '- Вот поэтому я и здесь, чтобы подарить тебе их снова. В этом мире может у тебя их забрали, но как же другие миры где ты смог себя успешно реализовать?',
    '- Успешно… Реализовать… Как это???',
    '- Видишь! Уже заинтересовался, можешь звать меня Котэром. Если согласишься я смогу вернуть тебя ровно на одну неделю в прошлое когда ты учился в школе где ты сможешь исправить своё нынешнее положение.',
    '- Звучит как бред какой-то, что за сделка если у меня ничего нету та и с чего бы это вдруг тебе мне помагать если ты не Дьявол?',
    '- Всё просто - с тобой весело! Я долго за тобой наблюдал, Женя. Ты не заслуживаешь своих страданий и я как существо которое знает на что ты способен на самом деле и у меня есть возможность дать тебе себя проявить, хочу тебе искренне помочь.',
    '- Единственное что я возьму в замен это контроль к твоим снам.',
    '- Зачем тебе мои сны?',
    '- По-любому будет выпаривать мне тёмные желания про убийства и изнасилования.',
    '- Чтобы я мог в случае чего дать тебе советы, только думай пожалуйста быстрее, я могу надолго поддерживать эту форму, скоро про люблю сделку можно будет забыть.',
    '- Стой, последний вопрос! Что если пойти за другую сторону? Ждёт ли там меня вечный отдых и мама...',
    '- Не знаю, единственное что скажу точно, там везде ловит бесплатный вайфай без перебоев в любом месте, разве не круто?',
    '- Ну что согласен ли ты исправить будущее?',
]
const phrasesFifthAct = [
    '- Отлично!',
    '- Силой, дарованной мне 12-ти высших прародителей, с разрешения Жени и только по его собственной воле даю возможность прожить ему ещё одну жизнь.',
    '- Так ты вернулся? Зачем?',
    '- Я... Я не знаю...',
    '- Ты снова сделаешь мне больно...',
    '- Прости...'
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
}

buttonNext.addEventListener('click', () => {
    if (act === 0) {
        firstAct()
    } else if (act === 1) {
        secondAct()
    } else if (act === 2) {
        thirdAct()
    } else if (act === 3) {
        fourthAct()
    } else if (act === 4) {
        fifthAct()
    } else if (act === 5) {
        // интро
        act = 6
    }
})

const firstAct = () => {
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
    } else if (level === 15) {
        textBox.style.display = 'none'
        background.style.backgroundImage = 'url(../img/Zhenya/firstAct/drop.jpg)'
        act = 1
        level = 0
    } else if (level === i) {
        nextSlide(phrasesFirstAct[level-2], '25px', persons[-1], colors[-1], 'none')
        i++
    } else if (level === 16) {
        level--
    }
}
        /* buttonPrevious.addEventListener('click', () => {
            if (level === 2 || level === 1) {
                textBox.style.display = 'none'
                level = 0
                i = 2
            } else if (level === 5) {
                nextSlide(phrasesFirstAct[level-3], '20px')
                i--
                level--
            } else if (level === 9) {
                nextSlide(phrasesFirstAct[level-3], '20px')
                i--
                level--
            } else if (level === 13) {
                nextSlide(phrasesFirstAct[level-3], '20px')
                i--
                level--
            } else if (level === 15) {
                textBox.style.display = 'block'
                nextSlide(phrasesFirstAct[level-3], '25px')
                i--
                level--
            } else if(level === i - 1) {
                nextSlide(phrasesFirstAct[level-3], '25px')
                i--
                level--
            }
        }) */
const secondAct = () => {
    level++
    if (level === 1) {
        textBox.style.display = 'block'
        nextSlide(phrasesSecondActStranger[0], '25px', persons[1], colors[1], 'block')
    } else if (level === 2) {
        nextSlide(phrasesSecondActStranger[1], '25px', persons[2], colors[1], 'block')
    } else if (level === 3) {
        nextSlide(phrasesSecondActStranger[2], '25px', persons[3], colors[1], 'block')
    } else if (level === 4) {
        textBox.style.display = 'none'
        nextSlide(phrasesSecondActStranger[-1], '25px', persons[3], colors[0], 'none')
        background.style.backgroundImage = 'url(../img/Zhenya/firstAct/hospital.jpg)'
        act = 2
        level = 0
    }
}
const thirdAct = () => {
    level++
    if (level === 1) {
        textBox.style.display = 'block'
        nextSlide(phrasesThirdAct[0], '25px', persons[4], colors[2], 'block')
    } else if (level === 2) {
        nextSlide(phrasesThirdAct[1], '25px', persons[5], colors[2])
    } else if (level === 3) {
        nextSlide(phrasesThirdAct[2], '25px', persons[4], colors[2])
    } else if (level === 4) {
        nextSlide(phrasesThirdAct[3], '25px', persons[4], colors[2], 'block', 'block')
    } else if (level === 5) {
        nextSlide(phrasesThirdAct[4], '25px', persons[0], colors[0], 'none', 'block')
    } else if (level === 6) {
        textBox.style.display = 'none'
        nextSlide(phrasesSecondActStranger[-1], '25px', persons[3], colors[0], 'none')
        background.style.backgroundImage = 'none'
        background.style.backgroundColor = 'rgb(34, 34, 34)'
        act = 3
        level = 0
    }
}
const fourthAct = () => {
    level++
    if (level === 1) {
        textBox.style.display = 'block'
        nextSlide(phrasesFourthAct[0], '25px', persons[0], colors[0], 'none')
    } else if (level === 2) {
        nextSlide(phrasesFourthAct[1], '25px', persons[0], colors[0], 'block')
    } else if (level === 3) {
        nextSlide(phrasesFourthAct[2], '25px', persons[0], colors[0], 'none')
    } else if (level === 4) {
        nextSlide(phrasesFourthAct[3], '25px', persons[6], colors[3], 'block')
        background.style.backgroundImage = 'none'
    } else if (level === 5) {
        nextSlide(phrasesFourthAct[4], '25px', persons[6], colors[3], 'block', 'block')
    } else if (level === 6) {
        nextSlide(phrasesFourthAct[5], '25px', persons[0], colors[0])
    } else if (level === 7) {
        nextSlide(phrasesFourthAct[6], '25px', persons[6], colors[3])
    } else if (level === 8) {
        nextSlide(phrasesFourthAct[7], '25px', persons[0], colors[0])
    } else if (level === 9) {
        nextSlide(phrasesFourthAct[8], '25px', persons[6], colors[3])
    } else if (level === 10) {
        nextSlide(phrasesFourthAct[9], '25px', persons[0], colors[0])
    } else if (level === 11) {
        nextSlide(phrasesFourthAct[10], '25px', persons[6], colors[3])
    } else if (level === 12) {
        nextSlide(phrasesFourthAct[11], '25px', persons[0], colors[0])
    } else if (level === 13) {
        nextSlide(phrasesFourthAct[12], '25px', persons[6], colors[3])
    } else if (level === 14) {
        nextSlide(phrasesFourthAct[13], '25px', persons[0], colors[0])
    } else if (level === 15) {
        persons.splice(6, 1, 'Котэр')
        nextSlide(phrasesFourthAct[14], '25px', persons[6], colors[3])
    } else if (level === 16) {
        nextSlide(phrasesFourthAct[15], '25px', persons[6], colors[3])
    } else if (level === 17) {
        nextSlide(phrasesFourthAct[16], '25px', persons[0], colors[0])
    } else if (level === 18) {
        nextSlide(phrasesFourthAct[17], '25px', persons[0], colors[0], 'none')
    } else if (level === 19) {
        nextSlide(phrasesFourthAct[18], '25px', persons[6], colors[3], 'block')
    } else if (level === 20) {
        nextSlide(phrasesFourthAct[19], '25px', persons[0], colors[0])
    } else if (level === 21) {
        nextSlide(phrasesFourthAct[20], '25px', persons[6], colors[3])
    } else if (level === 22) {
        nextSlide(phrasesFourthAct[21], '25px', persons[6], colors[3])
    } else if (level === 23) {
        nextSlide(phrasesFourthAct[-1], '25px', persons[0], colors[0], 'none', 'none')
        buttonNext.style.display = 'none'
        buttonPrevious.style.display = 'none'
        buttonsSelect.style.display = 'flex'
        buttonSelect1.innerHTML = 'Согласиться' // (все концовки кроме Лили +1 балл)
        buttonSelect2.innerHTML = 'Не согласиться' // (концовка Лили +1 балл)
        buttonSelect1.addEventListener('click', () => {
            buttonsSelect.style.display = 'none'
            buttonNext.style.display = 'block'
            buttonPrevious.style.display = 'block'
            act = 4
            level = 0
            // выбор согласится
        })
    }
}
const fifthAct = () => {
    level++
    if (level === 1) {
        nextSlide(phrasesFifthAct[0], '25px', persons[6], colors[3], 'block', 'block')
    } else if (level === 2) {
        nextSlide(phrasesFifthAct[1], '25px', persons[6], colors[3])
    } else if (level === 3) {
        // *Начинает сильно тригерить слайды после чего появляется силуэт девочки во тьме:
    } else if (level === 4) {
        nextSlide(phrasesFifthAct[2], '25px', persons[7], colors[0])
    } else if (level === 5) {
        nextSlide(phrasesFifthAct[3], '25px', persons[0], colors[0])
    } else if (level === 6) {
        nextSlide(phrasesFifthAct[4], '25px', persons[7], colors[0])
    } else if (level === 7) {
        nextSlide(phrasesFifthAct[5], '25px', persons[0], colors[0])
    } else if (level === 8) {
        nextSlide(phrasesFifthAct[-1], '25px', persons[0], colors[0], 'none', 'none')
        buttonNext.style.display = 'none'
        buttonPrevious.style.display = 'none'
        act = 5
        level = 0
    }
}
