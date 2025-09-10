// Глобальные переменные
let currentQuestion = 0;
let userScores = {};
let userAnswers = [];
let currentHobby = null;

// Инициализация VK Mini App
function initVK() {
    if (typeof vkBridge !== 'undefined') {
        vkBridge.send('VKWebAppInit', {});
        
        // Установка цветовой схемы
        vkBridge.send('VKWebAppSetViewSettings', {
            status_bar_style: 'light',
            action_bar_color: '#2688eb'
        });
    }
}

// Показать указанную страницу
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    
    // Прокрутка вверх
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
    // Снять выделение со всех вариантов
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Выделить выбранный вариант
    document.querySelectorAll('.option')[answerIndex].classList.add('selected');
    
    // Сохранить ответ
    userAnswers[currentQuestion] = answerIndex;
    
    // Активировать кнопку
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
                <a href="#" class="community-link" onclick="openCommunity('${comm.url}')">
                    <i class="${comm.icon}"></i> ${comm.name}
                </a>
            `).join('')}
        </div>
        <div class="details-item">
            <h3><i class="fas fa-lightbulb"></i> Советы:</h3>
            <p>Начните с основ - посмотрите tutorial для начинающих и не бойтесь делать ошибки!</p>
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
    if (typeof vkBridge !== 'undefined') {
        vkBridge.send('VKWebAppShare', {
            link: 'https://vk.com/app12345678'
        });
    } else {
        alert('Поделитесь результатом с друзьями!');
    }
}

// Открыть сообщество
function openCommunity(url) {
    if (typeof vkBridge !== 'undefined') {
        vkBridge.send('VKWebAppOpenURL', { url: url });
    }
}

// Перезапустить тест
function restartTest() {
    hideDetails();
    showPage('onboarding1');
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    initVK();
});