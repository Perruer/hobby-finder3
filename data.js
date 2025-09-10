// Данные вопросов и ответов
const questions = [
    {
        question: "Что тебе наименее близко?",
        answers: [
            { text: "Рутина и монотонность", score: { "creative": 2, "active": 1 } },
            { text: "Конкуренция и соперничество", score: { "calm": 2, "solo": 1 } },
            { text: "Одиночество и уединение", score: { "social": 2, "team": 1 } },
            { text: "Шум и большие компании", score: { "solo": 2, "calm": 1 } }
        ]
    },
    {
        question: "Какую суперсилу хочешь прокачать?",
        answers: [
            { text: "Творческое созидание", score: { "creative": 2, "crafts": 1 } },
            { text: "Невероятная концентрация", score: { "focus": 2, "mindful": 1 } },
            { text: "Физическая выносливость", score: { "active": 2, "sport": 1 } },
            { text: "Социальную интуицию", score: { "social": 2, "communication": 1 } }
        ]
    },
    {
        question: "Идеальное состояние во время занятия?",
        answers: [
            { text: "Полное погружение в себя", score: { "focus": 2, "solo": 1 } },
            { text: "Азарт и драйв", score: { "competitive": 2, "active": 1 } },
            { text: "Радость от общения", score: { "social": 2, "team": 1 } },
            { text: "Умиротворение", score: { "calm": 2, "mindful": 1 } }
        ]
    },
    {
        question: "На необитаемом острове будешь...",
        answers: [
            { text: "Строить и мастерить", score: { "crafts": 2, "practical": 1 } },
            { text: "Исследовать природу", score: { "knowledge": 2, "explore": 1 } },
            { text: "Придумывать истории", score: { "creative": 2, "imagination": 1 } },
            { text: "Наслаждаться одиночеством", score: { "calm": 2, "mindful": 1 } }
        ]
    },
    {
        question: "Что для тебя 'отдохнуть'?",
        answers: [
            { text: "Сменить деятельность", score: { "varied": 2, "active": 1 } },
            { text: "Полностью отключиться", score: { "calm": 2, "relax": 1 } },
            { text: "Выплеснуть энергию", score: { "active": 2, "sport": 1 } },
            { text: "Наполниться впечатлениями", score: { "explore": 2, "social": 1 } }
        ]
    }
];

// Данные результатов (хобби)
const hobbies = [
    {
        title: "Скрапбукинг",
        description: "Идеально для творческих личностей, которые любят сохранять воспоминания.",
        icon: "📔",
        tags: ["creative", "solo", "organized"],
        requirements: ["Альбом или тетрадь", "Фотографии", "Декоративные элементы", "Клей и ножницы"],
        communities: [
            { name: "Скрапбукинг по-русски", url: "#", icon: "fas fa-users" },
            { name: "Бумажное творчество", url: "#", icon: "fas fa-paint-brush" }
        ]
    },
    {
        title: "Скалолазание",
        description: "Для тех, кто ищет физические вызовы и адреналин.",
        icon: "🧗",
        tags: ["active", "sport", "competitive"],
        requirements: ["Специальная обувь", "Магнезия", "Страховочная система"],
        communities: [
            { name: "Скалолазы Москвы", url: "#", icon: "fas fa-user-friends" },
            { name: "Альпинисты", url: "#", icon: "fas fa-mountain" }
        ]
    },
    {
        title: "Йога и медитация",
        description: "Для ищущих внутреннюю гармонию и спокойствие.",
        icon: "🧘",
        tags: ["calm", "mindful", "solo"],
        requirements: ["Коврик для йоги", "Удобная одежда", "Тихое пространство"],
        communities: [
            { name: "Йога дома", url: "#", icon: "fas fa-home" },
            { name: "Медитация", url: "#", icon: "fas fa-spa" }
        ]
    },
    {
        title: "Интеллектуальные игры",
        description: "Для тех, кто любит бросать вызов своему интеллекту.",
        icon: "🧠",
        tags: ["social", "knowledge", "competitive"],
        requirements: ["Команда единомышленников", "Знания", "Быстрая реакция"],
        communities: [
            { name: "МозгоБойня", url: "#", icon: "fas fa-brain" },
            { name: "Квиз-лига", url: "#", icon: "fas fa-trophy" }
        ]
    },
    {
        title: "Керамика",
        description: "Для любящих создавать что-то своими руками.",
        icon: "🏺",
        tags: ["creative", "crafts", "solo"],
        requirements: ["Глина", "Инструменты", "Печь для обжига"],
        communities: [
            { name: "Гончарное искусство", url: "#", icon: "fas fa-hands" },
            { name: "Керамисты", url: "#", icon: "fas fa-palette" }
        ]
    }
];