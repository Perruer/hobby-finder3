<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>Найди хобби</title>
    <script src="https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="app">
        <!-- Страница загрузки -->
        <div class="page active" id="loadingPage">
            <div class="content">
                <div class="loading-spinner">
                    <i class="fas fa-spinner fa-spin"></i>
                </div>
                <p>Загрузка приложения...</p>
                <p class="loading-subtext">Подключаемся к ВКонтакте</p>
            </div>
        </div>

        <!-- Страница онбординга 1 -->
        <div class="page" id="onboarding1">
            <div class="header">
                <div class="header-title">Найди хобби</div>
            </div>
            <div class="content">
                <div class="illustration">🎯</div>
                <h1 id="welcomeTitle">Найди свое идеальное хобби!</h1>
                <p>Пройди короткий тест из 5 вопросов, и мы подберем хобби, которое идеально подходит именно тебе!</p>
                <button class="vk-button primary" onclick="showPage('onboarding2')">
                    Далее <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
        
        <!-- Страница онбординга 2 -->
        <div class="page" id="onboarding2">
            <div class="header">
                <div class="back-button" onclick="showPage('onboarding1')">
                    <i class="fas fa-arrow-left"></i>
                </div>
                <div class="header-title">Как это работает?</div>
            </div>
            <div class="content">
                <div class="illustration">❤️</div>
                <p>Отвечай на вопросы честно, не задумываясь слишком долго. Выбирай то, что ближе именно тебе.</p>
                <button class="vk-button primary" onclick="showPage('start')">
                    Понятно <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
        
        <!-- Стартовая страница -->
        <div class="page" id="start">
            <div class="header">
                <div class="back-button" onclick="showPage('onboarding2')">
                    <i class="fas fa-arrow-left"></i>
                </div>
                <div class="header-title">Начнем тест</div>
            </div>
            <div class="content">
                <div class="illustration">🌟</div>
                <p>Тест займет не более 3 минут. Твои ответы помогут нам понять, какое занятие принесет тебе наибольшее удовольствие!</p>
                <button class="vk-button primary" onclick="startTest()">
                    Начать тест <i class="fas fa-play"></i>
                </button>
            </div>
        </div>
        
        <!-- Страницы с вопросами -->
        <div class="page" id="questionPage">
            <div class="header">
                <div class="back-button" onclick="prevQuestionOrBack()">
                    <i class="fas fa-arrow-left"></i>
                </div>
                <div class="header-title">Вопрос <span id="currentQuestionNumber">1</span>/5</div>
            </div>
            <div class="content">
                <h2 id="questionTitle">Вопрос</h2>
                <div class="progress-container">
                    <div class="progress-bar" id="progressBar"></div>
                </div>
                <div class="options" id="optionsContainer">
                    <!-- Варианты ответов будут добавляться динамически -->
                </div>
                <button class="vk-button primary" id="nextBtn" onclick="nextQuestion()" disabled>
                    Далее <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
        
        <!-- Страница результата -->
        <div class="page" id="resultPage">
            <div class="header">
                <div class="header-title">Ваш результат</div>
            </div>
            <div class="content">
                <h1>Ваше идеальное хобби</h1>
                <div class="result-card">
                    <div class="result-icon" id="resultIcon">🎨</div>
                    <div class="result-title" id="resultTitle">Название хобби</div>
                    <div class="result-description" id="resultDescription">Описание будет здесь</div>
                    <button class="vk-button secondary" onclick="showDetails()">
                        <i class="fas fa-info-circle"></i> Что нужно для начала?
                    </button>
                </div>
                
                <div class="action-buttons">
                    <button class="vk-button primary" onclick="shareResult()">
                        <i class="fas fa-share"></i> Поделиться
                    </button>
                    <button class="vk-button outline" onclick="restartTest()">
                        <i class="fas fa-redo"></i> Пройти еще раз
                    </button>
                </div>
            </div>
        </div>

        <!-- Страница ошибки -->
        <div class="page" id="errorPage">
            <div class="content">
                <div class="illustration">😕</div>
                <h1>Что-то пошло не так</h1>
                <p>Попробуйте перезагрузить приложение или вернуться позже</p>
                <button class="vk-button primary" onclick="location.reload()">
                    <i class="fas fa-refresh"></i> Перезагрузить
                </button>
            </div>
        </div>
    </div>

    <!-- Панель с деталями хобби -->
    <div class="overlay" id="overlay" onclick="hideDetails()"></div>
    <div class="details-panel" id="detailsPanel">
        <div class="panel-header">
            <div class="drag-handle"></div>
            <h2 id="detailsTitle">Детали хобби</h2>
        </div>
        <div class="close-btn" onclick="hideDetails()"><i class="fas fa-times"></i></div>
        <div class="details-content" id="detailsContent">
            <!-- Контент будет добавляться динамически -->
        </div>
    </div>

    <script src="data.js"></script>
    <script src="script.js"></script>
</body>
</html>
