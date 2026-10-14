document.addEventListener("DOMContentLoaded", function () {

    // ===== Главная кнопка =====
    const openBtn = document.getElementById("openButton");
    const message = document.getElementById("message");
    if (openBtn && message) {
        openBtn.addEventListener("click", function () {
            message.classList.remove("hidden");
            openBtn.textContent = "Ты моё сокровище ❤️";
        });
    }

    // ===== Письма =====
    const letters = {
        miss: {
            title: "Когда ты скучаешь ❤️",
            text: `Моя принцесса!

Я знаю, что расстояние иногда мешает нам быть вместе.
Но мне хочется, чтобы ты помнила:
ты занимаешь самое выжное место в моей жизни.

Надеюсь, это маленькое письмо подарит тебе улыбку.

Крепко обнимаю тебя на расстоянии ❤️`
        },
        smile: {
            title: "Когда тебе грустно 🌹",
            text: `Моя хорошая!

Не каждый день бывает идеальным.
И тебе нужно всегда улыбаться
ведь твоя улыбка может спасти мой мир.

Я хочу, чтобы у тебя было время
на отдых, любимые занятия,
на сон, и на поедание твоих самых любимых вкусняшек
и всё, что помогает тебе чувствовать себя лучше.

И пусть это письмо напомнит тебе,
что ты мне очень дорога ❤️`
        },
        love: {
            title: "Несколько слов для тебя 💌",
            text: `Моя принцесса!

Мне нравится узнавать тебя всё лучше.
Нравятся наши разговоры,
твои мысли и твое мировозрения.
Я хочу чтобы все что есть у нас, 
переплелось в единое. Стать одним целом 

Я рад, что ты есть в моей жизни.

И сегодня мне просто захотелось
ещё раз тебе об этом сказать ❤️`
        },
        dream: {
            title: "О наших мечтах ✨",
            text: `Знаешь, о чём я иногда думаю?

О том, сколько интересного
мы ещё можем увидеть вместе.

О свиданиях  в самых разных местах,
о совместных фотографиях,
о засыпание вместе в обнимку,
и коненчо о порше.

Пусть у нас впереди будет
много счастливых моментов,
которые мы создадим вместе ❤️`
        }
    };

    const letterButtons = document.querySelectorAll(".letter");
    const letterContent = document.getElementById("letterContent");
    const letterTitle   = document.getElementById("letterTitle");
    const letterText    = document.getElementById("letterText");
    const closeLetter   = document.getElementById("closeLetter");

    if (letterButtons.length && letterContent) {
        letterButtons.forEach(function (btn) {
            btn.addEventListener("click", function () {
                const letter = letters[btn.dataset.letter];
                if (!letter) return;
                letterTitle.textContent = letter.title;
                letterText.textContent  = letter.text;
                letterContent.classList.remove("hidden");
                letterContent.scrollIntoView({ behavior: "smooth", block: "nearest" });
            });
        });
    }
    if (closeLetter) {
        closeLetter.addEventListener("click", function () {
            letterContent.classList.add("hidden");
        });
    }

    // ===== Роза =====
    const roseButton  = document.getElementById("roseButton");
    const roseHint    = document.getElementById("roseHint");
    const roseMessage = document.getElementById("roseMessage");
    if (roseButton && roseHint && roseMessage) {
        roseButton.addEventListener("click", function () {
            const isOpened = roseButton.classList.toggle("opened");
            roseButton.setAttribute("aria-expanded", String(isOpened));
            if (isOpened) {
                roseHint.textContent = "Для тебя, миледи ❤️";
                roseMessage.classList.remove("hidden");
                roseMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
            } else {
                roseHint.textContent = "Нажми на розу, чтобы она раскрылась";
                roseMessage.classList.add("hidden");
            }
        });
    }

    // ===== Стихотворение =====
    const poemButton = document.getElementById("poemButton");
    const poemText   = document.getElementById("poemText");
    const poemLines  = document.querySelectorAll("#poemText p");
    let poemStarted  = false;

    if (poemButton && poemText && poemLines.length) {
        poemButton.addEventListener("click", function () {
            if (poemStarted) {
                // Сброс: скрываем весь блок и убираем видимость строк
                poemText.classList.add("hidden");
                poemLines.forEach(function (l) { l.classList.remove("visible"); });
                poemStarted = false;
                poemButton.textContent = "Прочитать стихотворение ❤️";
                return;
            }

            // Показываем блок и запускаем появление строк по очереди
            poemText.classList.remove("hidden");
            poemStarted = true;
            poemButton.textContent = "Прочитать ещё раз ↻";

            poemLines.forEach(function (line, index) {
                setTimeout(function () {
                    line.classList.add("visible");
                }, index * 700);
            });
        });
    }

    // ===== КАРТА =====
    const cityA      = document.getElementById("cityA");
    const cityB      = document.getElementById("cityB");
    const routeLine  = document.getElementById("routeLine");
    const mapHint    = document.getElementById("mapHint");
    const mapMessage = document.getElementById("mapMessage");
    const mapMessageTitle = document.getElementById("mapMessageTitle");
    const mapMessageText  = document.getElementById("mapMessageText");

    // Координаты внутри viewBox 1000x500
    const CITIES = {
        a: { x: 560, y: 105, name: "Москва",
             message: "Здесь я. Каждый день я думаю о тебе, где бы ты ни была ❤️" },
        b: { x: 495, y: 165, name: "Рим",
             message: "Здесь ты. И даже на расстоянии ты чувствуешься рядом ❤️" }
    };

    if (cityA && cityB && routeLine) {
        cityA.setAttribute("transform", "translate(" + CITIES.a.x + ", " + CITIES.a.y + ")");
        cityB.setAttribute("transform", "translate(" + CITIES.b.x + ", " + CITIES.b.y + ")");

        routeLine.setAttribute("x1", CITIES.a.x);
        routeLine.setAttribute("y1", CITIES.a.y);
        routeLine.setAttribute("x2", CITIES.b.x);
        routeLine.setAttribute("y2", CITIES.b.y);

        routeLine.style.opacity = "0";
        setTimeout(function () { routeLine.style.opacity = "1"; }, 700);

        [cityA, cityB].forEach(function (cityEl) {
            cityEl.addEventListener("click", function () {
                const city = CITIES[cityEl.dataset.city];
                if (!city) return;
                mapMessageTitle.textContent = city.name;
                mapMessageText.textContent  = city.message;
                mapMessage.classList.remove("hidden");
                mapHint.textContent = "Города соединены линией, как и наши сердца ❤️";
                mapMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
            });
            cityEl.addEventListener("keydown", function (e) {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    cityEl.click();
                }
            });
        });
    }

    // ===== СЕКРЕТ: 5 ВОПРОСОВ =====
    const secretProgressText = document.getElementById("secretProgressText");
    const secretProgressFill = document.getElementById("secretProgressFill");
    const secretQuestion     = document.getElementById("secretQuestion");
    const secretAnswer       = document.getElementById("secretAnswer");
    const secretButton       = document.getElementById("secretButton");
    const secretFeedback     = document.getElementById("secretFeedback");
    const secretMessage      = document.getElementById("secretMessage");
    const secretMessageText  = document.getElementById("secretMessageText");

    // ⚠️ Здесь меняешь вопросы и ответы под вашу историю.
    // В answers можно указать несколько допустимых вариантов.
    const QUIZ = [
        {
            question: "Где я тебя встретил и понял что ты самая лучшая?",
            answers: ["в школе"],
            hint: "Почти... Попробуй ещё раз ❤️"
        },
        {
            question: "Что мы любим делать вместе?",
            answers: ["спать", "смотреть","отдыхать","обниматься", "кушать", "разговаривать"],
            hint: "Не угадала. Подсказка: твое любимое занятие? ❤️"
        },
        {
            question: "Какая наша с тобой мечта?",
            answers: ["порше", "деньги", "быть вместе"],
            hint: "Тут несколько вариантов ответа ❤️"
        },
        {
            question: "Как я называю тебя чаще всего?",
            answers: ["принцесса", "киса", "котик"],
            hint: "Ты же знаешь, как я тебя называю ❤️"
        },
        {
            question: "Что я хочу сделать вместе с тобой больше всего?",
            answers: ["находиться рядом"],
            hint: "Это то, о чём я мечтаю каждый день ❤️"
        }
    ];

    const FINAL_MESSAGE = `Ты справилась ❤️

Ты ответила на все пять вопросов — и это значит,
что ты помнишь нашу историю так же, как помню её я.

Спасибо, что ты есть. Спасибо за каждый разговор,
за каждую улыбку, за то, что ты — это ты.

Я очень дорожу тобой, моя принцесса.
И хочу, чтобы это никогда не заканчивалось ❤️`;

    let currentIndex = 0;

    function normalizeAnswer(value) {
        return value
            .toLowerCase()
            .replace(/ё/g, "е")
            .replace(/[^a-zа-я0-9\s]/gi, "")
            .trim()
            .replace(/\s+/g, " ");
    }

    function renderQuestion() {
        const total = QUIZ.length;
        const item  = QUIZ[currentIndex];

        secretProgressText.textContent = "Вопрос " + (currentIndex + 1) + " из " + total;
        secretProgressFill.style.width = ((currentIndex / total) * 100) + "%";

        secretQuestion.textContent = item.question;
        secretAnswer.value = "";
        secretFeedback.textContent = "";
        secretFeedback.classList.remove("correct", "wrong");

        secretQuestion.classList.remove("fade-in");
        void secretQuestion.offsetWidth;
        secretQuestion.classList.add("fade-in");

        secretAnswer.focus();
    }

    function showFinalMessage() {
        secretProgressText.textContent = "Вопрос " + QUIZ.length + " из " + QUIZ.length + " — готово ❤️";
        secretProgressFill.style.width = "100%";

        secretQuestion.textContent = "Ты ответила на все вопросы ❤️";
        secretAnswer.disabled = true;
        secretButton.disabled = true;

        secretMessageText.textContent = FINAL_MESSAGE;
        secretMessage.classList.remove("hidden");
        secretMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    if (secretButton && secretAnswer && secretFeedback && secretMessage) {
        secretButton.addEventListener("click", function () {
            const item = QUIZ[currentIndex];
            if (!item) return;

            const userAnswer = normalizeAnswer(secretAnswer.value);

            if (!userAnswer) {
                secretFeedback.textContent = "Напиши свой ответ, моя принцесса ❤️";
                secretFeedback.classList.add("wrong");
                secretFeedback.classList.remove("correct");
                return;
            }

            const isCorrect = item.answers.some(function (answer) {
                return normalizeAnswer(answer) === userAnswer;
            });

            if (isCorrect) {
                secretFeedback.textContent = "Верно ❤️";
                secretFeedback.classList.add("correct");
                secretFeedback.classList.remove("wrong");

                currentIndex += 1;

                if (currentIndex >= QUIZ.length) {
                    showFinalMessage();
                } else {
                    setTimeout(renderQuestion, 700);
                }
            } else {
                secretFeedback.textContent = item.hint || "Почти... Попробуй ещё раз ❤️";
                secretFeedback.classList.add("wrong");
                secretFeedback.classList.remove("correct");
            }
        });

        secretAnswer.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                secretButton.click();
            }
        });

        renderQuestion();
    }
});