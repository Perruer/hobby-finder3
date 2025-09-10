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
        description: "Идеально для творческих личностей, которые любят сохранять воспоминания. Создавай уникальные альбомы с фотографиями и памятными вещами.",
        icon: "📔",
        tags: ["creative", "solo", "organized"],
        requirements: ["Альбом или тетрадь", "Фотографии и памятные вещи", "Декоративные элементы (наклейки, ленты)", "Клей, ножницы, маркеры"],
        communities: [
            { name: "Скрапбукинг по-русски", url: "#", icon: "fas fa-users" },
            { name: "Бумажное творчество", url: "#", icon: "fas fa-paint-brush" }
        ]
    },
    {
        title: "Скалолазание",
        description: "Для тех, кто ищет физические вызовы и адреналин. Развивает силу, выносливость и преодоление страхов.",
        icon: "🧗",
        tags: ["active", "sport", "competitive"],
        requirements: ["Специальная обувь для скалолазания", "Магнезия для рук", "Страховочная система", "Абонемент в скалодром"],
        communities: [
            { name: "Скалолазы Москвы", url: "#", icon: "fas fa-user-friends" },
            { name: "Альпинисты России", url: "#", icon: "fas fa-mountain" }
        ]
    },
    {
        title: "Йога и медитация",
        description: "Для ищущих внутреннюю гармонию и спокойствие. Помогает снизить стресс, улучшить концентрацию и общее самочувствие.",
        icon: "🧘",
        tags: ["calm", "mindful", "solo"],
        requirements: ["Коврик для йоги", "Удобная одежда", "Тихое пространство", "Приложения или видеоуроки для начинающих"],
        communities: [
            { name: "Йога дома", url: "#", icon: "fas fa-home" },
            { name: "Медитация для каждого", url: "#", icon: "fas fa-spa" }
        ]
    },
    {
        title: "Интеллектуальные игры",
        description: "Для тех, кто любит бросать вызов своему интеллекту и общаться в кругу единомышленников.",
        icon: "🧠",
        tags: ["social", "knowledge", "competitive"],
        requirements: ["Команда единомышленников", "Знание разных областей", "Быстрая реакция", "Логическое мышление"],
        communities: [
            { name: "МозгоБойня", url: "#", icon: "fas fa-brain" },
            { name: "Квиз-лига", url: "#", icon: "fas fa-trophy" }
        ]
    },
    {
        title: "Керамика",
        description: "Для любящих создавать что-то осязаемое своими руками. Отлично снимает стресс и развивает креативность.",
        icon: "🏺",
        tags: ["creative", "crafts", "solo"],
        requirements: ["Гончарный круг или материалы для лепки", "Глина разных видов", "Инструменты для работы", "Печь для обжига (или доступ к студии)"],
        communities: [
            { name: "Гончарное искусство", url: "#", icon: "fas fa-hands" },
            { name: "Керамисты России", url: "#", icon: "fas fa-palette" }
        ]
    }
];

// Глобальные переменные
let currentQuestion = 0;
let userScores = {};
let userAnswers = [];
let currentHobby = null;

// Показать указанную страницу
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    window.scrollTo(0, 0);
}

// Начать тест
function startTest() {
    currentQuestion = 0;
    userScores = {};
    userAnswers = [];
    showQuestion();
    showPage('questionPage');
}

// Показать текущий вопрос
function showQuestion() {
    const question = questions[currentQuestion];
    if (!question) return;

    document.getElementById('questionTitle').textContent = question.question;
    document.getElementById('currentQuestionNumber').textContent = currentQuestion + 1;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const option = document.createElement('div');
        option.className = 'option';
        if (userAnswers[currentQuestion] === index) {
            option.classList.add('selected');
        }
        option.textContent = answer.text;
        option.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(option);
    });
    
    // Обновить прогресс-бар
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
    
    // Обновить состояние кнопки
    document.getElementById('nextBtn').disabled = userAnswers[currentQuestion] === undefined;
}

// Выбор ответа
function selectAnswer(answerIndex) {
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    document.querySelectorAll('.option')[answerIndex].classList.add('selected');
    userAnswers[currentQuestion] = answerIndex;
    document.getElementById('nextBtn').disabled = false;
}

// Назад или к предыдущему вопросу
function prevQuestionOrBack() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    } else {
        showPage('start');
    }
}

// Следующий вопрос
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        calculateResult();
        showPage('resultPage');
    }
}

// Расчет результата
function calculateResult() {
    userScores = {};
    
    userAnswers.forEach((answerIndex, questionIndex) => {
        const answer = questions[questionIndex].answers[answerIndex];
        
        for (const [category, score] of Object.entries(answer.score)) {
            userScores[category] = (userScores[category] || 0) + score;
        }
    });
    
    let bestMatch = { hobby: null, score: 0 };
    
    hobbies.forEach(hobby => {
        let matchScore = 0;
        
        hobby.tags.forEach(tag => {
            if (userScores[tag]) {
                matchScore += userScores[tag];
            }
        });
        
        if (matchScore > bestMatch.score) {
            bestMatch = { hobby: hobby, score: matchScore };
        }
    });
    
    if (bestMatch.hobby) {
        currentHobby = bestMatch.hobby;
        document.getElementById('resultIcon').textContent = currentHobby.icon;
        document.getElementById('resultTitle').textContent = currentHobby.title;
        document.getElementById('resultDescription').textContent = currentHobby.description;
    }
}

// Показать детали хобби
function showDetails() {
    if (!currentHobby) return;
    
    const panel = document.getElementById('detailsPanel');
    const overlay = document.getElementById('overlay');
    const title = document.getElementById('detailsTitle');
    const content = document.getElementById('detailsContent');
    
    title.textContent = currentHobby.title;
    
    content.innerHTML = `
        <div class="details-item">
            <h3><i class="fas fa-tools"></i> Что потребуется:</h3>
            <ul class="requirements-list">
                ${currentHobby.requirements.map(req => `<li>${req}</li>`).join('')}
            </ul>
        </div>
        <div class="details-item">
            <h3><i class="fas fa-users"></i> Сообщества:</h3>
            ${currentHobby.communities.map(comm => `
                <a href="${comm.url}" class="community-link">
                    <i class="${comm.icon}"></i> ${comm.name}
                </a>
            `).join('')}
        </div>
        <div class="details-item">
            <h3><i class="fas fa-lightbulb"></i> Советы новичкам:</h3>
            <p>Начните с основ - посмотрите tutorial для начинающих, найдите единомышленников в вашем городе и не бойтесь делать ошибки. Каждый профессионал когда-то был новичком!</p>
        </div>
    `;
    
    panel.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Скрыть детали
function hideDetails() {
    const panel = document.getElementById('detailsPanel');
    const overlay = document.getElementById('overlay');
    
    panel.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Поделиться результатом
function shareResult() {
    if (!currentHobby) return;

    const shareText = `Я прошел тест и мое идеальное хобби: ${currentHobby.title}! 🎯\nПрисоединяйся и найди свое!`;
    
    // Пытаемся скопировать в буфер обмена
    if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText)
            .then(() => alert('Текст скопирован в буфер обмена! Поделись с друзьями!'))
            .catch(() => alert(shareText));
    } else {
        alert(shareText);
    }
}

// Перезапустить тест
function restartTest() {
    hideDetails();
    showPage('onboarding1');
}

// При загрузке страницы сразу показываем первую страницу
document.addEventListener('DOMContentLoaded', function() {
    console.log('Приложение загружено!');
    // Уже показываем onboarding1 по умолчанию через класс active
});
