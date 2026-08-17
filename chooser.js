//@ts-check
'use strict';

const VERSION = '20.2.10.0'; // examined by bake.tcl

const Variants = [
{
    'Name':'Косынка',
    'Type':'Все,Косынка,Классические,Маленькое поле',
    'Desc':' ',
    'File':'Klondike1',
    'Wikipedia':'https://en.wikipedia.org/wiki/Klondike_(solitaire)'
},
{
    'Name':'Косынка Сложные',
    'Type':'Все,Косынка,Сложные,Маленькое поле',
    'Desc':' ',
    'File':'Klondike1-1',
    'Wikipedia':'https://en.wikipedia.org/wiki/Klondike_(solitaire)'
},
{
    'Name':'Косынка Draw Three',
    'Type':'Все,Косынка,Маленькое поле',
    'Desc':' ',
    'File':'Klondike3',
    'Wikipedia':'https://en.wikipedia.org/wiki/Klondike_(solitaire)'
},
{
    'Name':'Двойная косынка',
    'Type':'Все,Косынка,Two Packs',
    'Desc':' ',
    'File':'DoubleKlondike',
    'Wikipedia':'https://en.wikipedia.org/wiki/Klondike_(solitaire)'
},
{
    'Name':'Тройная косынка',
    'Type':'Все,Косынка,Three Packs',
    'Desc':' ',
    'File':'TripleKlondike',
    'Wikipedia':'https://en.wikipedia.org/wiki/Klondike_(solitaire)'
},
{
    'Name':'Четверная косынка',
    'Type':'Все,Косынка',
    'Desc':' ',
    'File':'QuadKlondike',
    'Wikipedia':'https://en.wikipedia.org/wiki/Klondike_(solitaire)'
},
{
    'Name':'Вдумчивый пасьянс',
    'Type':'Все,Косынка,Маленькое поле',
    'Desc':' ',
    'File':'Thoughtful',
    'Wikipedia':'https://en.wikipedia.org/wiki/Klondike_(solitaire)'
},
{
    'Name':'Леди Джейн',
    'Type':'Все,Косынка,Two Packs',
    'Desc':' ',
    'File':'LadyJane',
    'Wikipedia':''
},
{
    'Name':'Блокада',
    'Type':'Все,Лёгкие,Пауки,Two Packs',
    'Desc':' ',
    'File':'Blockade',
    'Wikipedia':'https://en.wikipedia.org/wiki/Blockade_(solitaire)'
},
{
    'Name':'Площадь Наполеона',
    'Type':'Все,Лёгкие,Сорок разбойников,Two Packs',
    'Desc':' ',
    'File':'NapSq',
    'Wikipedia':'https://en.wikipedia.org/wiki/Napoleon%27s_Square'
},
{
    'Name':'Белая голова',
    'Type':'Все,Косынка,Лёгкие,Маленькое поле',
    'Desc':' ',
    'File':'Whitehead',
    'Wikipedia':'https://en.wikipedia.org/wiki/Klondike_(solitaire)#Variations'
},
{
    'Name':'Agnes Bernauer',
    'Type':'Все,Canfield,Маленькое поле',
    'Desc':' ',
    'File':'AgnesBernauer',
    'Wikipedia':'https://en.wikipedia.org/wiki/Agnes_(card_game)'
},
{
    'Name':'Agnes Sorel',
    'Type':'Все,Canfield,Сложные,Маленькое поле',
    'Desc':' ',
    'File':'AgnesSorel',
    'Wikipedia':'https://en.wikipedia.org/wiki/Agnes_(card_game)'
},
{
    'Name':'Восточная гавань',
    'Type':'Все,Косынка,Сложные',
    'Desc':' ',
    'File':'Easthaven',
    'Wikipedia':''
},
{
    'Name':'Двойная Восточная гавань',
    'Type':'Все,Косынка,Сложные,Two Packs',
    'Desc':' ',
    'File':'DoubleEasthaven',
    'Wikipedia':''
},
{
    'Name':'Западный утес',
    'Type':'Все,Косынка,Лёгкие',
    'Desc':' ',
    'File':'Westcliff',
    'Wikipedia':'https://en.wikipedia.org/wiki/Westcliff_(solitaire)'
},
{
    'Name':'Юкон',
    'Type':'Все,Юкон,Классические,Маленькое поле',
    'Desc':' ',
    'File':'Yukon',
    'Wikipedia':'https://en.wikipedia.org/wiki/Yukon_(solitaire)'
},
{
  'Name':'Русский пасьянс',
  'Type':'Все,Юкон,Маленькое поле',
  'Desc':' ',
  'File':'Russian',
  'Wikipedia':'https://en.wikipedia.org/wiki/Russian_(solitaire)'
},
{
    'Name':'Юкон - одна масть',
    'Type':'Все,Лёгкие,Юкон,Маленькое поле,Одна масть',
    'Desc':' ',
    'File':'Yukon1',
    'Wikipedia':'https://en.wikipedia.org/wiki/Yukon_(solitaire)'
},
{
    'Name':'Двойной Юкон',
    'Type':'Все,Юкон,Two Packs',
    'Desc':' ',
    'File':'DoubleYukon',
    'Wikipedia':'https://en.wikipedia.org/wiki/Yukon_(solitaire)'
},
{

    'Name':'Аляска',
    'Type':'Все,Юкон,Сложные,Маленькое поле',
    'Desc':' ',
    'File':'Alaska',
    'Wikipedia':'https://en.wikipedia.org/wiki/Yukon_(solitaire)'
},
{
    'Name':'Brisbane',
    'Type':'Все,Лёгкие,Юкон,Маленькое поле',
    'Desc':' ',
    'File':'Brisbane',
    'Wikipedia':'https://en.wikipedia.org/wiki/Yukon_(solitaire)'
},
{
    'Name':'Австралия',
    'Type':'Все,Косынка,Юкон,Лёгкие,Маленькое поле',
    'Desc':' ',
    'File':'Australian',
    'Wikipedia':'https://en.wikipedia.org/wiki/Australian_Patience'
},
{
    'Name':'Canfield',
    'Type':'Все,Canfield,Классические,Маленькое поле',
    'Desc':' ',
    'File':'Canfield',
    'Wikipedia':'https://en.wikipedia.org/wiki/Canfield_(solitaire)'
},
{
    'Name':'Радуга',
    'Type':'Все,Canfield,Маленькое поле',
    'Desc':' ',
    'File':'Rainbow',
    'Wikipedia':'https://en.wikipedia.org/wiki/Canfield_(solitaire)'
},
{
    'Name':'Склад',
    'Type':'Все,Canfield',
    'Desc':' ',
    'File':'Storehouse',
    'Wikipedia':'https://en.wikipedia.org/wiki/Canfield_(solitaire)'
},
{
    'Name':'Жаба',
    'Type':'Все,Canfield,Two Packs,Лёгкие',
    'Desc':' ',
    'File':'AmericanToad',
    'Wikipedia':'https://en.wikipedia.org/wiki/American_Toad_(solitaire)'
},
{
  'Name':'Герцогиня',
  'Type':'Все,Canfield',
  'Desc':' ',
  'File':'Duchess',
  'Wikipedia':'https://en.wikipedia.org/wiki/Duchess_(solitaire)',
},
{
    'Name':'Гольф',
    'Type':'Все,Гольф',
    'Desc':' ',
    'File':'Golf',
    'Wikipedia':'https://en.wikipedia.org/wiki/Golf_(patience)'
},
{
    'Name':'Гольф 2',
    'Type':'Все,Гольф',
    'Desc':' ',
    'File':'GolfRelaxed',
    'Wikipedia':'https://en.wikipedia.org/wiki/Golf_(patience)'
},
{
    'Name':'Альтернатива',
    'Type':'Все,Другие,Two Packs',
    'Desc':' ',
    'File':'Alternation',
    'Wikipedia':'https://en.wikipedia.org/wiki/Alternation_(solitaire)'
},
{
    'Name':'Цветник',
    'Type':'Все,Другие',
    'Desc':' ',
    'File':'FlowerGarden',
    'Wikipedia':'https://en.wikipedia.org/wiki/Flower_Garden_(solitaire)'
},
{
    'Name':'Бригада',
    'Type':'Все,Другие',
    'Desc':' ',
    'File':'Brigade',
    'Wikipedia':'https://en.wikipedia.org/wiki/Flower_Garden_(solitaire)'
},
{
    'Name':'Ковёр',
    'Type':'Все,Лёгкие,Другие',
    'Desc':' ',
    'File':'Carpet',
    'Wikipedia':'https://en.wikipedia.org/wiki/Carpet_(solitaire)'
},
{
    'Name':'Сорок разбойников',
    'Type':'Все,Сорок разбойников,Классические,Two Packs,Сложные',
    'Desc':' ',
    'File':'FortyThieves',
    'Wikipedia':'https://en.wikipedia.org/wiki/Forty_Thieves_(card_game)'
},
{
    'Name':'Эскадрилья',
    'Type':'Все,Сорок разбойников,Two Packs',
    'Desc':' ',
    'File':'Squadron',
    'Wikipedia':'https://en.wikipedia.org/wiki/Forty_Thieves_(card_game)'
},
{
    'Name':'Сорок и Восемь',
    'Type':'Все,Сорок разбойников,Two Packs',
    'Desc':' ',
    'File':'FortyAndEight',
    'Wikipedia':'https://en.wikipedia.org/wiki/Forty_Thieves_(card_game)'
},
{
    'Name':'Конгресс',
    'Type':'Все,Сорок разбойников,Two Packs',
    'Desc':' ',
    'File':'Congress',
    'Wikipedia':'https://en.wikipedia.org/wiki/Congress_(solitaire)'
},
{
    'Name':'Парламент',
    'Type':'Все,Сорок разбойников,Two Packs',
    'Desc':' ',
    'File':'Parliament',
    'Wikipedia':'https://en.wikipedia.org/wiki/Congress_(solitaire)'
},
{
    'Name':'Жозефина',
    'Type':'Все,Сорок разбойников,Two Packs',
    'Desc':' ',
    'File':'Josephine',
    'Wikipedia':'https://en.wikipedia.org/wiki/Josephine_(solitaire)'
},
{
    'Name':'Мария',
    'Type':'Все,Сорок разбойников,Two Packs',
    'Desc':' ',
    'File':'Maria',
    'Wikipedia':'https://en.wikipedia.org/wiki/Forty_Thieves_(card_game)'
},
{
    'Name':'Номер десять',
    'Type':'Все,Сорок разбойников,Two Packs',
    'Desc':' ',
    'File':'NumberTen',
    'Wikipedia':'https://en.wikipedia.org/wiki/Forty_Thieves_(card_game)'
},
{
    'Name':'Индеец',
    'Type':'Все,Сорок разбойников,Two Packs',
    'Desc':' ',
    'File':'Indian',
    'Wikipedia':'https://en.wikipedia.org/wiki/Forty_Thieves_(card_game)'
},
{
    'Name':'Lucas',
    'Type':'Все,Сорок разбойников,Two Packs',
    'Desc':' ',
    'File':'Lucas',
    'Wikipedia':'https://en.wikipedia.org/wiki/Josephine_(solitaire)'
},
{
    'Name':'Ограниченный пасьянс',
    'Type':'Все,Two Packs,Сорок разбойников',
    'Desc':' ',
    'File':'Limited',
    'Wikipedia':'https://en.wikipedia.org/wiki/Forty_Thieves_(card_game)'
},
{   'Name': 'Монорельс',
    'Type': 'Все,Сорок разбойников,Маленькое поле',
    'Desc': ' ',
    'File': 'SingleRail',
},
{
    'Name':'Свободная ячейка',
    'Type':'Все,Свободная яейка,Классические,Маленькое поле',
    'Desc':' ',
    'File':'Свободная яейка',
    'Wikipedia':'https://en.wikipedia.org/wiki/Свободная яейка'
},
{
    'Name':'Forecell',
    'Type':'Все,Свободная яейка,Маленькое поле',
    'Desc':' ',
    'File':'Forecell',
    'Wikipedia':'https://en.wikipedia.org/wiki/Свободная яейка'
},
{
    'Name':'Свободная ячейка - Оригинал',
    'Type':'Все,Свободная яейка,Маленькое поле',
    'Desc':' ',
    'File':'Свободная яейка0',
    'Wikipedia':'https://en.wikipedia.org/wiki/Свободная яейка'
},
{
    'Name':'Свободная ячейка - лёгкая',
    'Type':'Все,Лёгкие,Свободная яейка,Маленькое поле',
    'Desc':' ',
    'File':'Свободная яейкаЛёгкие',
    'Wikipedia':'https://en.wikipedia.org/wiki/Свободная яейка'
},
{
    'Name':'Слепая свободная ячейка',
    'Type':'Все,Свободная яейка',
    'Desc':' ',
    'File':'BlindСвободная яейка',
    'Wikipedia':'https://en.wikipedia.org/wiki/Свободная яейка'
},
{
    'Name':'Морские башни',
    'Type':'Все,Свободная яейка',
    'Desc':' ',
    'File':'SeaTowers',
    'Wikipedia':'https://en.wikipedia.org/wiki/Seahaven_Towers_(solitaire)'
},
{
    'Name':'Большая свободная ячейка',
    'Type':'Все,Свободная яейка,Two Packs,Лёгкие',
    'Desc':' ',
    'File':'BigСвободная яейка',
    'Wikipedia':'https://en.wikipedia.org/wiki/Свободная яейка'
},
{
    'Name':'Двойная свободная ячейка',
    'Type':'Все,Свободная яейка,Two Packs',
    'Desc':' ',
    'File':'DoubleСвободная яейка',
    'Wikipedia':'https://en.wikipedia.org/wiki/Свободная яейка'
},
{
    'Name':'Восемь Off',
    'Type':'Все,Свободная яейка',
    'Desc':' ',
    'File':'EightOff',
    'Wikipedia':'https://en.wikipedia.org/wiki/Eight_Off'
},
{
    'Name':'Чёртова игра',
    'Type':'Все,Свободная яейка',
    'Desc':' ',
    'File':'Baker\'sGame',
    'Wikipedia':'https://en.wikipedia.org/wiki/Baker%27s_Game'
},
{
    'Name':'Пингвин',
    'Type':'Все,Свободная яейка',
    'Desc':' ',
    'File':'Penguin',
    'Wikipedia':'http://www.parlettgames.uk/patience/penguin.html'
},
{
    'Name':'Смокинг',
    'Type':'Все,Свободная яейка',
    'Desc':' ',
    'File':'Tuxedo',
    'Wikipedia':'https://politaire.com/help/tuxedo'
},
{
    'Name':'Скорпион',
    'Type':'Все,Скорпион,Классические,Маленькое поле',
    'Desc':' ',
    'File':'Скорпион',
    'Wikipedia':'https://en.wikipedia.org/wiki/Скорпион_(solitaire)'
},
{
    'Name':'Три слепые мыши',
    'Type':'Все,Скорпион',
    'Desc':' ',
    'File':'ThreeBlindMice',
    'Wikipedia':'https://en.wikipedia.org/wiki/Скорпион_(solitaire)'
},
{
    'Name':'Двойной Скорпион',
    'Type':'Все,Сложные,Скорпион,Two Packs',
    'Desc':' ',
    'File':'DoubleСкорпион',
    'Wikipedia':'https://en.wikipedia.org/wiki/Скорпион_(solitaire)'
},
{
    'Name':'Тройной Скорпион',
    'Type':'Все,Скорпион,Three Packs',
    'Desc':' ',
    'File':'TripleСкорпион',
    'Wikipedia':'https://en.wikipedia.org/wiki/Скорпион_(solitaire)'
},
{
    'Name':'Оса',
    'Type':'Все,Лёгкие,Скорпион,Маленькое поле',
    'Desc':' ',
    'File':'Wasp',
    'Wikipedia':'https://en.wikipedia.org/wiki/Скорпион_(solitaire)'
},
{
    'Name':'Паук - одна масть',
    'Type':'Все,Пауки,Лёгкие,Классические,Одна масть',
    'Desc':' ',
    'File':'Пауки1',
    'Wikipedia':'https://en.wikipedia.org/wiki/Пауки_(solitaire)'
},
{
    'Name':'Паук - две масти',
    'Type':'Все,Пауки,Две масти',
    'Desc':' ',
    'File':'Пауки2',
    'Wikipedia':'https://en.wikipedia.org/wiki/Пауки_(solitaire)'
},
{
    'Name':'Паук',
    'Type':'Все,Пауки,Two Packs',
    'Desc':' ',
    'File':'Пауки4',
    'Wikipedia':'https://en.wikipedia.org/wiki/Пауки_(solitaire)'
},
{
    'Name':'Паучиха - одна масть',
    'Type':'Все,Пауки,Лёгкие,Маленькое поле,Одна масть',
    'Desc':' ',
    'File':'Паукиette1',
    'Wikipedia':'https://en.wikipedia.org/wiki/Пауки_(solitaire)'
},
{
    'Name':'Паучиха - две масти',
    'Type':'Все,Пауки,Маленькое поле,Две масти',
    'Desc':'',
    'File':'Паукиette2',
    'Wikipedia':'https://en.wikipedia.org/wiki/Пауки_(solitaire)'
},
{
    'Name':'Паучиха',
    'Type':'Все,Пауки,Сложные,Маленькое поле',
    'Desc':'',
    'File':'Паукиette4',
    'Wikipedia':'https://en.wikipedia.org/wiki/Пауки_(solitaire)'
},
{
    'Name':'Простой Симон',
    'Type':'Все,Лёгкие,Простые,Пауки',
    'Desc':' ',
    'File':'ПростыеSimon',
    'Wikipedia':'https://en.wikipedia.org/wiki/Простые_Simon_(solitaire)'
},
{
  'Name':'Мистер Моп',
  'Type':'Все,Простые,Пауки',
  'Desc':' ',
  'File':'MrsMop',
  'Wikipedia':'https://en.wikipedia.org/wiki/Mrs._Mop'
},
{
  'Name':'Мистер Моп 2',
  'Type':'Все,Простые,Пауки',
  'Desc':' ',
  'File':'MrsMopRelaxed',
  'Wikipedia':'https://en.wikipedia.org/wiki/Mrs._Mop'
},
{
    'Name':'Крепость',
    'Type':'Все,Сложные,Простые,Крепости',
    'Desc':' ',
    'File':'Fortress',
    'Wikipedia':'https://en.wikipedia.org/wiki/Fortress_(card_game)'
},
{
    'Name':'Жестокий пасьянс',
    'Type':'Все,Tableau Redeal',
    'Desc':' ',
    'File':'Cruel',
    'Wikipedia':'https://en.wikipedia.org/wiki/Cruel_(solitaire)'
},
{
    'Name':'Необычный',
    'Type':'Все,Tableau Redeal,Two Packs',
    'Desc':' ',
    'File':'Unusual',
    'Wikipedia':'https://en.wikipedia.org/wiki/Cruel_(solitaire)'
},
{
    'Name':'Пульсирующий вентилятор',
    'Type':'Все,Tableau Redeal',
    'Desc':' ',
    'File':'RippleВентилятор',
    'Wikipedia':'https://en.wikipedia.org/wiki/Cruel_(solitaire)'
},
{
    'Name':'Упорство',
    'Type':'Все,Tableau Redeal',
    'Desc':' ',
    'File':'Perseverance',
    'Wikipedia':'https://en.wikipedia.org/wiki/Perseverance_(solitaire)'
},
{
    'Name':'Неутомимый',
    'Type':'Все,Tableau Redeal',
    'Desc':' ',
    'File':'Indefatigable',
    'Wikipedia':'https://en.wikipedia.org/wiki/Perseverance_(solitaire)'
},
{
    'Name':'Осаждённый замок',
    'Type':'Все,Крепости',
    'Desc':' ',
    'File':'BeleagueredКрепости',
    'Wikipedia':'https://en.wikipedia.org/wiki/Beleaguered_Крепости'
},
{
    'Name':'Крепость 2',
    'Type':'Все,Крепости',
    'Desc':' ',
    'File':'Stronghold',
    'Wikipedia':'https://en.wikipedia.org/wiki/Beleaguered_Крепости'
},
{
    'Name':'Somerset',
    'Type':'Все,Косынка,Сложные',
    'Desc':' ',
    'File':'Somerset',
    'Wikipedia':'https://politaire.com/help/somerset'
},
{
    'Name':'Somerset 2',
    'Type':'Все,Косынка',
    'Desc':' ',
    'File':'SomersetRelaxed',
    'Wikipedia':'https://politaire.com/help/somerset'
},
{
    'Name':'Usk',
    'Type':'Все,Косынка,Tableau Redeal',
    'Desc':' ',
    'File':'Usk',
    'Wikipedia':'https://politaire.com/help/usk'
},
{
    'Name':'Бриз',
    'Type':'Все,Вентилятор,Лёгкие,Простые',
    'Desc':' ',
    'File':'Breeze',
    'Wikipedia':''
},
{
    'Name':'Вентилятор',
    'Type':'Все,Вентилятор',
    'Desc':' ',
    'File':'Вентилятор',
    'Wikipedia':'https://en.wikipedia.org/wiki/La_Belle_Lucie'
},
{
    'Name':'Прекрасная Люси',
    'Type':'Все,Вентилятор,Tableau Redeal,Сложные',
    'Desc':' ',
    'File':'LaBelleLucie',
    'Wikipedia':'https://en.wikipedia.org/wiki/La_Belle_Lucie'
},
{
    'Name':'Трилистник',
    'Type':'Все,Вентилятор,Tableau Redeal',
    'Desc':' ',
    'File':'Trefoil',
    'Wikipedia':'https://en.wikipedia.org/wiki/La_Belle_Lucie'
},
{
    'Name':'Трилистник 2',
    'Type':'Все,Вентилятор,Tableau Redeal,Лёгкие',
    'Desc':' ',
    'File':'TrefoilRelaxed',
    'Wikipedia':'https://en.wikipedia.org/wiki/La_Belle_Lucie'
},
{
    'Name':'Бисли',
    'Type':'Все,Bisley',
    'Desc':' ',
    'File':'Bisley',
    'Wikipedia':'https://en.wikipedia.org/wiki/Bisley_(solitaire)'
},
{
    'Name':'Тузы и Короли',
    'Type':'Все,Bisley,Two Packs',
    'Desc':' ',
    'File':'AcesAndKings',
    'Wikipedia':'https://en.wikipedia.org/wiki/Aces_and_Kings'
},
{
    'Name':'Тузы и короли 2',
    'Type':'Все,Bisley,Two Packs',
    'Desc':' ',
    'File':'AceyAndKingsley',
    'Wikipedia':'https://en.wikipedia.org/wiki/Aces_and_Kings'
},
{
    'Name':'Марфа',
    'Type':'Все,Лёгкие,Bisley',
    'Desc':' ',
    'File':'Martha',
    'Wikipedia':'https://en.wikipedia.org/wiki/Martha_(solitaire)'
},
{
    'Name':'Стюардесса',
    'Type':'Все,Bisley',
    'Desc':' ',
    'File':'Stewart',
    'Wikipedia':'https://en.wikipedia.org/wiki/Martha_(solitaire)'
},
{
    'Name':'Чёртова дюжина',
    'Type':'Все,Bisley,Простые',
    'Desc':' ',
    'File':'Baker\'sDozen',
    'Wikipedia':'https://en.wikipedia.org/wiki/Baker%27s_Dozen_(solitaire)'
},
{
    'Name':'Испанский пасьянс',
    'Type':'Все,Лёгкие,Простые',
    'Desc':' ',
    'File':'Spanish',
    'Wikipedia':'https://en.wikipedia.org/wiki/Baker%27s_Dozen_(solitaire)'
},
{
    'Name':'Португальский пасьянс',
    'Type':'Все,Простые',
    'Desc':' ',
    'File':'Portuguese',
    'Wikipedia':'https://en.wikipedia.org/wiki/Baker%27s_Dozen_(solitaire)'
},
{
    'Name':'Замки в Испании',
    'Type':'Все,Bisley,Простые',
    'Desc':' ',
    'File':'КрепостиsInSpain',
    'Wikipedia':'https://en.wikipedia.org/wiki/Baker%27s_Dozen_(solitaire)'
},
{
    'Name':'Лягушка',
    'Type':'Все,Лягушка,Two Packs',
    'Desc':' ',
    'File':'Лягушка',
    'Wikipedia':'https://en.wikipedia.org/wiki/Лягушка_(game)'
},
{
    'Name':'Полёт',
    'Type':'Все,Лягушка,Two Packs',
    'Desc':' ',
    'File':'Fly',
    'Wikipedia':'https://en.wikipedia.org/wiki/Лягушка_(game)'
},
{
    'Name':'Комар',
    'Type':'Все,Лягушка',
    'Desc':' ',
    'File':'Gnat',
    'Wikipedia':'https://en.wikipedia.org/wiki/Лягушка_(game)'
},
{
    'Name':'Муха',
    'Type':'Все,Лягушка',
    'Desc':' ',
    'File':'HouseFly',
    'Wikipedia':'https://en.wikipedia.org/wiki/Лягушка_(game)'
},
{
    'Name':'Дедушкины часы',
    'Type':'Все,Часы,Лёгкие',
    'Desc':' ',
    'File':'GЧасы',
    'Wikipedia':'https://en.wikipedia.org/wiki/Grandfather%27s_Часы'
},
{
    'Name':'Осмос',
    'Type':'Все,Другие',
    'Desc':' ',
    'File':'Osmosis',
    'Wikipedia':'https://en.wikipedia.org/wiki/Osmosis_(solitaire)'
},
{
    'Name':'Peek',
    'Type':'Все,Другие',
    'Desc':' ',
    'File':'Peek',
    'Wikipedia':'https://en.wikipedia.org/wiki/Osmosis_(solitaire)'
},
{
    'Name':'Занятые тузы',
    'Type':'Все,Простые,Two Packs',
    'Desc':' ',
    'File':'BusyAces',
    'Wikipedia':''
},
{
    'Name':'Двор',
    'Type':'Все,Простые,Two Packs',
    'Desc':' ',
    'File':'Courtyard',
    'Wikipedia':''
},
{
    'Name':'Фортуна',
    'Type':'Все,Лёгкие,Простые',
    'Desc':' ',
    'File':'FortunesFavor',
    'Wikipedia':'https://en.wikipedia.org/wiki/Fortune%27s_Favor'
},
{
    'Name':'Этажи',
    'Type':'Все,Простые,Two Packs',
    'Desc':' ',
    'File':'Stages',
    'Wikipedia':''
},
{
    'Name':'Нечетный поток',
    'Type':'Все,Оригинальные,Маленькое поле',
    'Desc':' ',
    'File':'Oddstream',
    'Wikipedia':''
},
{
    'Name':'Нечетный поток K',
    'Type':'Все,Оригинальные,Маленькое поле',
    'Desc':' ',
    'File':'OddstreamK',
    'Wikipedia':''
},
{
    'Name':'Нечетный поток S',
    'Type':'Все,Оригинальные,Маленькое поле',
    'Desc':' ',
    'File':'OddstreamS',
    'Wikipedia':''
},
{
  'Name':'Флип-Флоп - одна масть',
  'Type':'Все,Другие,Маленькое поле,Одна масть',
  'Desc':' ',
  'File':'Flipflop1',
  'Wikipedia':''
},
{
  'Name':'Флип-Флоп - две масти',
  'Type':'Все,Другие,Маленькое поле,Две масти',
  'Desc':'',
  'File':'Flipflop2',
  'Wikipedia':''
},
{
  'Name':'Флип-флоп - четыре масти',
  'Type':'Все,Другие,Маленькое поле',
  'Desc':'',
  'File':'Flipflop4',
  'Wikipedia':''
},
{
    'Name':'Быстрый провал',
    'Type':'Debug',
    'Desc':'',
    'File':'QuickFail',
    'Wikipedia':''
},
{
    'Name':'Быстрая победа',
    'Type':'Debug',
    'Desc':'',
    'File':'QuickWin',
    'Wikipedia':''
}
];

// polyfills for Array.prototypefor.Each and Array.prototype.includes

/**
 * @param {string} str 
 */
function search(str) {

  str = str.toLowerCase();
  const hits = new Set();

  if ( str.length ) {
    Variants.forEach( v => {
      if ( -1 != v.Name.toLowerCase().indexOf(str) ) {
        hits.add(v);
      }
    });

    if ( 0 === hits.size ) {
      Variants.forEach( v => {
        if ( -1 != v.Desc.toLowerCase().indexOf(str) ) {
          hits.add(v);
        }
      });
    }

    if ( 0 === hits.size ) {
      Variants.forEach( v => {
        if ( -1 != v.Type.toLowerCase().indexOf(str) ) {
          hits.add(v);
        }
      });
    }
  }

  const res = document.getElementById('searchResults');
  while ( res.firstChild ) {
    res.removeChild(res.firstChild);
  }

  if ( hits.size ) {
    const ul = peach(res, 'ul');
    hits.forEach( v => {
      peach(ul, 'li', null, null, 
        peach(res, 'a', {href:v.File + '.html'}, v.Name)
      )
    });
  }
}

/**
 * @param {InputEvent} e
 */
function searchEvent(e) {
  search(e.target.value);
}

/**
 * 
 * @param {Element} p 
 * @param {String} eleName 
 * @param {Object=} attribs 
 * @param {String=} text
 * @param {...Element[]=} ch 
 * @returns {Element}
 * or use https://github.com/KoryNunn/crel
 */
function peach(p, eleName, attribs, text, ...ch) {
  const ele = document.createElement(eleName);
  if ( attribs ) for ( let a in attribs ) {
    ele.setAttribute(a, attribs[a]);
  }
  if ( text ) ele.innerHTML = text;
  if ( ch ) ch.forEach( c => ele.appendChild(c) );
  if ( p ) p.appendChild(ele);
  return ele;
}

const types = [];
Variants.forEach( function(v) {
  v.Type.split(',').forEach( function(t) {
    if ( !types.includes(t) )
      types.push(t);
  });
});
types.sort();

const ulOuter = peach(document.getElementById('content'), 'ul', {class:'collapsible'});

for ( let i=0; i<types.length; i++ ) {
  const liOuter = peach(ulOuter, 'li', null, null, 
    peach(null, 'div', {class:'collapsible-header', id:`ch${i}`}, null,
      peach(null, 'h6', null, types[i])
    ));

  const cb = peach(liOuter, 'div', {class:'collapsible-body', id:`cb${i}`});
  const ulInner = peach(cb, 'ul');

  const ty = Variants.filter( function(v) {
    return v.Type.split(',').includes(types[i]);
  });
  ty.sort(function(a, b) { return a.Name.localeCompare(b.Name); });
  ty.forEach( function(t) {
    const listItem = peach(ulInner, 'li');
      const a = peach(listItem, 'a', {href:t.File + '.html'}, null,
        peach(null, 'strong', null, t.Name)
      );
      if ( window.innerWidth > 640 ) {
        peach(listItem, 'span', {class:'right'}, t.Desc);
      }
  });
}

// could use M.AutoInit(document.body)
// (which uses document.body if no context is given)
// instead just init the bits we are using
M.Collapsible.init(document.querySelectorAll('.collapsible'));
M.Modal.init(document.querySelectorAll('.modal'));
M.Tooltip.init(document.querySelectorAll('.tooltipped'));

document.getElementById('searchText').oninput = searchEvent;
document.getElementById('modalLoadSavedDiv').style.display = window.location.protocol === 'file:' ? '' : 'none';

const LOCALSTORAGE_SETTINGS = 'Oddstream Solitaire Settings';
const LOCALSTORAGE_GAMES = 'Oddstream Solitaire Games';
const DROPBOX_GAMES = '/gameState.json';

const settings = JSON.parse(localStorage.getItem(LOCALSTORAGE_SETTINGS)) || {};

const collapsibleFn = M.Collapsible.getInstance(ulOuter);
collapsibleFn.options.onOpenEnd = function() {
  const h6 = document.querySelector('body>div#content>ul.collapsible>li.active>div>h6');
  if ( h6 ) {
    settings.activeType = h6.innerHTML;
  } else {
    delete settings.activeType;
  }
}

const modalSearchFn = M.Modal.getInstance(document.getElementById('modalSearch'));
modalSearchFn.options.onOpenStart = function() {
  const ele = /** @type {HTMLInputElement} */(document.getElementById("searchText"));
  ele.value = '';
  ele.focus();
}

const modalCloudFn = M.Modal.getInstance(document.getElementById('modalCloud'));
modalCloudFn.options.onOpenStart = function() {
  const HIDE_CLASS = 'hide';
  if ( settings.dropboxAccessToken && settings.dropboxAccessToken.length ) {
    document.getElementById('dropboxAccessToken').value = settings.dropboxAccessToken;
    document.getElementById('modalCloudAuto').checked = !!settings.autoCloudSync; // might be undefined
    document.getElementById('modalLoadSaved').checked = !!settings.loadSaved;     // might be undefined
    document.getElementById('modalCloudConnected').classList.remove(HIDE_CLASS);
    document.getElementById('modalCloudNotConnected').classList.add(HIDE_CLASS);
  } else {
    document.getElementById('modalCloudConnected').classList.add(HIDE_CLASS);
    document.getElementById('modalCloudNotConnected').classList.remove(HIDE_CLASS);
    const btn = document.getElementById('btnAuthenticate');
    try {
      const dbx = new Dropbox.Dropbox({fetch: window.fetch.bind(window), clientId: 'gpmr1d1u1j4h2d4'});
      // window.location.origin = 'http://localhost'
      // window.location.pathname = '/solitaire/index.html'
      const redirect = window.location.origin + window.location.pathname;
      // console.log(redirect);
      btn.href = dbx.getAuthenticationUrl(redirect);
    } catch(err) {
      M.toast({html:'cannot connect to Dropbox'});
      console.error(err);
    }
  }
};

modalCloudFn.options.onCloseEnd = function() {
  getAccessTokenFromModal();
  settings.autoCloudSync = document.getElementById('modalCloudAuto').checked;
  settings.loadSaved = document.getElementById('modalLoadSaved').checked;
};

window.onload = function () {
  if ( settings.lastGame ) {
    document.getElementById('lastgame').setAttributeNS(null, 'href', settings.lastGame);
  } else {
    document.getElementById('lastgame').hidden = true;
  }
  if ( settings.activeType ) {
    const nodes = document.querySelectorAll('div.collapsible-header>h6');
    for ( let i=0; i<nodes.length; i++ ) {
      if ( nodes[i].innerHTML === settings.activeType ) {
        collapsibleFn.open(i);
        document.getElementById(`cb${i}`).scrollIntoView();
        break;
      }
    }
  }
  if ( settings.autoCloudSync && settings.dropboxAccessToken ) {
    doSyncDropbox();
  }
}

window.onbeforeunload = function(e) {
  saveSettings(); // may have been changed by modalCloud or active collapsible
}

let params = null;
if ( window.location.hash ) {
  // a DOMString containing a '#' followed by the fragment identifier of the URL
  // #access_token=OvVYXrtX708AAAAAAAAEy7SaxISnKu7zhwZOMWHLFEMjg-GgODz4Ez2vA9HJlLs8&token_type=bearer&uid=154172014&account_id=dbid%3AAADL4ma-7BXSPnEmldVqS9OSe2xHqlV7e1o
  params = new URLSearchParams(window.location.hash.slice(1));
} else if ( window.location.search ) {
  // a DOMString containing a '?' followed by the parameters or 'querystring' of the URL
  params = new URLSearchParams(window.location.search.slice(1));
}

if ( params && params.has('access_token') ) {
  settings.dropboxAccessToken = params.get('access_token');
  modalCloudFn.open();
}

function getAccessTokenFromModal() {
  const txt = settings.dropboxAccessToken = document.getElementById('dropboxAccessToken').value;
  if ( txt.length ) {
    settings.dropboxAccessToken = txt;
  } else {
    delete settings.dropboxAccessToken;
  }
  return settings.dropboxAccessToken && settings.dropboxAccessToken.length > 0;
}

function saveSettings() {
  try {
    localStorage.setItem(LOCALSTORAGE_SETTINGS, JSON.stringify(settings));
    // M.toast({html:'settings saved'});
  } catch(err) {
    M.toast({html:'error saving settings'});
    console.error(err);
  }
}

function saveGameStateToLocalStorage(newGameState) {
  try {
    localStorage.setItem(LOCALSTORAGE_GAMES, JSON.stringify(newGameState));
    M.toast({html:'local games saved'});
  } catch(err) {
    M.toast({html:'error saving games'});
    console.error(err);
  }
}

function loadGameStateFromDropbox(fn) {
  if ( modalCloudFn.isOpen ) {
    if ( !getAccessTokenFromModal() ) {
      M.toast({html:'no access token'});
    }
  }

  let newGameState = {};

  // you can load our UMD package directly from unpkg. This will expose Dropbox as a global - window.Dropbox.Dropbox within browsers.
  let dbx = new Dropbox.Dropbox({ fetch: fetch, accessToken: settings.dropboxAccessToken });
  dbx.filesDownload({path: DROPBOX_GAMES})
  .then(function(response) {
  /*
    response looks like:
        client_modified: '2018-12-16T14:16:01Z'
        content_hash: 'b4b241dc5df25837a6294782f5ac7c6013e9ab17ece41b2d4e9e2696e5beaa9a'
        fileBlob: Blob(52969) {size: 52969, type: 'application/octet-stream'}
        id: 'id:dS3043s2iUgAAAAAAAAJaQ'
        name: 'gameState.json'
        path_display: '/gameState.json'
        path_lower: '/gamestate.json'
        rev: '0170000000107fb1eb0'
        server_modified: '2018-12-16T14:16:02Z'
        size: 52969
    ECMAScript defines a string interchange format for date-times based upon a simplification of the ISO 8601 Extended Format.
    The format is as follows: YYYY-MM-DDTHH:mm:ss.sssZ

    Date.parse('2018-12-16T14:16:01Z') > Date.now()
  */
    let blob = response.fileBlob;
    let reader = new FileReader();
    reader.addEventListener('loadend', function() {
      try {
        newGameState = JSON.parse(reader.result);
        // M.toast({html:'games loaded'});
        fn(newGameState);
      } catch (err) {
        console.error(err);
        M.toast({html:'error in format of cloud games'});
      }
    });
    reader.readAsText(blob);
  })
  .catch(function(error) {
    M.toast({html:'error loading cloud games'});
    console.error(error);
  });
}

function saveGameStateToDropbox(newGameState) {
  if ( modalCloudFn.isOpen ) {
    if ( !getAccessTokenFromModal() ) {
      M.toast({html:'no access token'});
      return;
    }
  }
  // you can load our UMD package directly from unpkg. This will expose Dropbox as a global - window.Dropbox.Dropbox within browsers.
  let dbx = new Dropbox.Dropbox({ fetch: fetch, accessToken: settings.dropboxAccessToken });
  dbx.filesUpload({path: DROPBOX_GAMES, contents: JSON.stringify(newGameState), mode: 'overwrite'})
  .then(function(response) {
    // console.log(response);
    M.toast({html:'games saved to cloud'});
  })
  .catch(function(error) {
    console.error(error);
    M.toast({html:'error saving games to cloud'});
  });
}

function syncDropbox0(cloudGameState) {
  const localGameState = JSON.parse(localStorage.getItem(LOCALSTORAGE_GAMES)) || {};
  const newGameState = {};
  let saveCloud = false;
  let saveLocal = false;
  const sortedVariants = Variants.sort(function(a, b) { return a.Name.localeCompare(b.Name); });
  sortedVariants.forEach( function(v) {
    const cloud = cloudGameState[v.Name];
    const local = localGameState[v.Name];
    if ( local && cloud ) {
      if ( local.modified && cloud.modified ) {
        // modified = Date.now(), introduced 25/12/18
        if ( local.modified > cloud.modified ) {
          console.log(v.Name, 'local newer than cloud');
          newGameState[v.Name] = local;
          saveCloud = true;
        } else if ( cloud.modified > local.modified ) {
          console.log(v.Name, 'cloud newer than local');
          newGameState[v.Name] = cloud;
          saveLocal = true;
        } else {
          newGameState[v.Name] = local; // whatever
        }
      } else {
        if ( local.totalGames > cloud.totalGames ) {
          console.log(v.Name, 'local > cloud');
          newGameState[v.Name] = local;
          saveCloud = true;
        } else if ( cloud.totalGames > local.totalGames ) {
          console.log(v.Name, 'cloud > local');
          newGameState[v.Name] = cloud;
          saveLocal = true;
        } else {
          newGameState[v.Name] = local; // whatever
        }
      }
    } else if ( local ) {
      console.log(v.Name, 'local but not cloud');
      newGameState[v.Name] = local;
      saveCloud = true;
    } else if ( cloud ) {
      console.log(v.Name, 'cloud but not local');
      newGameState[v.Name] = cloud;
      saveLocal = true;
    } else {
      console.log(v.Name, 'neither');
    }
  });
  if ( saveLocal ) {
    saveGameStateToLocalStorage(newGameState);
  }
  if ( saveCloud ) {
    saveGameStateToDropbox(newGameState);
  }
  if ( saveLocal || saveCloud ) {
    // M.toast({html:'game sync completed'});
  } else {
    M.toast({html:'no changes to save'});
  }
}

function doSyncDropbox() {
  loadGameStateFromDropbox(syncDropbox0);
}
