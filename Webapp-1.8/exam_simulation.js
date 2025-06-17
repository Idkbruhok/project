// exam_simulation.js

class QuizAppSimulation {
    constructor(allQuestions) {
        this.allQuestions = allQuestions;
        this.selectedQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = {}; // Store user answers for each question ID
        this.timerInterval = null;
        this.timeRemaining = 2 * 60 * 60; // 2 sata (7200 sekundi)

        this.initializeElements();
        this.setupEventListeners();
        this.selectAndRandomizeQuestions();
        this.loadQuestion();
        this.startTimer();
    }

    initializeElements() {
        this.currentQuestionNumber = document.getElementById('currentQuestionNumber');
        this.totalQuestions = document.getElementById('totalQuestions');
        this.questionPoints = document.getElementById('questionPoints');
        this.questionIdDisplay = document.getElementById('questionIdDisplay');
        this.questionText = document.getElementById('questionText');
        this.optionsContainer = document.getElementById('options');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.endExamBtn = document.getElementById('end-exam');
        this.flagQuestionBtn = document.getElementById('flagQuestion');
        this.timeDisplay = document.getElementById('time');
        this.summary = document.getElementById('summary');
        this.summaryContent = document.getElementById('summaryContent');
        this.passFailMessage = document.getElementById('pass-fail-message');
        this.correctAnswersCount = document.getElementById('correct-answers-count');
        this.incorrectAnswersCount = document.getElementById('incorrect-answers-count');
        this.unansweredQuestionsCount = document.getElementById('unanswered-questions-count');
        this.incorrectQuestionsList = document.getElementById('incorrect-questions-list');
        this.backToQuizBtn = document.getElementById('backToQuizBtn');
        this.returnHomeBtn = document.getElementById('return-home');
    }

    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => this.navigateQuestions(-1));
        this.nextBtn.addEventListener('click', () => this.navigateQuestions(1));
        this.endExamBtn.addEventListener('click', () => this.endExam());
        if (this.backToQuizBtn) this.backToQuizBtn.addEventListener('click', () => this.hideSummary());
        if (this.returnHomeBtn) this.returnHomeBtn.addEventListener('click', () => window.location.href = 'landing.html');
        this.flagQuestionBtn.addEventListener('click', () => this.toggleFlag());
    }

    selectAndRandomizeQuestions() {
        // Precizno: C: 17, C#: 11, Veb dizajn: 6, Veb programiranje: 5, Baze podataka: 11 (ukupno 50)
        const distribution = {
            'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C': 17,
            'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#': 11,
            'ВЕБ ДИЗАЈН': 6,
            'ВЕБ ПРОГРАМИРАЊЕ': 5,
            'БАЗЕ ПОДАТАКА': 11
        };
        let selected = [];
        for (const [group, count] of Object.entries(distribution)) {
            let groupQuestions = this.allQuestions.filter(q => q.group === group);
            groupQuestions = this.shuffleArray(groupQuestions);
            selected = selected.concat(groupQuestions.slice(0, count));
        }
        this.selectedQuestions = this.shuffleArray(selected);
        this.totalQuestions.textContent = this.selectedQuestions.length;
    }

    shuffleArray(arr) {
        // Fisher-Yates shuffle
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    startTimer() {
        this.updateTimerDisplay();
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            if (this.timeRemaining <= 0) {
                clearInterval(this.timerInterval);
                this.endExam(true);
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const hours = Math.floor(this.timeRemaining / 3600);
        const minutes = Math.floor((this.timeRemaining % 3600) / 60);
        const seconds = this.timeRemaining % 60;
        this.timeDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes
            .toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    loadQuestion() {
        const q = this.selectedQuestions[this.currentQuestionIndex];
        if (!q) return;
        this.currentQuestionNumber.textContent = this.currentQuestionIndex + 1;
        this.questionPoints.textContent = q.points || '';
        this.questionIdDisplay.textContent = q.id;
        this.questionText.innerHTML = q.question;
        this.optionsContainer.innerHTML = '';

        const isMultipleChoice = Array.isArray(q.correctAnswer);

        // Prikaz opcija
        if (Array.isArray(q.options) && q.options.length > 0) {
            q.options.forEach((opt, idx) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                optionDiv.innerHTML = `<label>
                    <input type="${isMultipleChoice ? 'checkbox' : 'radio'}" name="option${this.currentQuestionIndex}" value="${idx}">
                    <span>${opt}</span>
                </label>`;
                this.optionsContainer.appendChild(optionDiv);
            });

            // Učitaj prethodno selektovane odgovore i oboji selektovane opcije
            const userAnswer = this.userAnswers[q.id];
            const optionDivs = this.optionsContainer.querySelectorAll('.option');
            optionDivs.forEach((optDiv, idx) => {
                const input = optDiv.querySelector('input');
                let selected = false;
                if (userAnswer) {
                    if (isMultipleChoice && Array.isArray(userAnswer)) {
                        selected = userAnswer.includes(idx);
                    } else if (!isMultipleChoice && typeof userAnswer === 'number') {
                        selected = userAnswer === idx;
                    }
                }
                input.checked = selected;
                if (selected) optDiv.classList.add('selected');
                else optDiv.classList.remove('selected');
                optDiv.addEventListener('click', (e) => {
                    const input = optDiv.querySelector('input');
                    if (isMultipleChoice) {
                        input.checked = !input.checked;
                    } else {
                        input.checked = true;
                        this.optionsContainer.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
                    }
                    if (input.checked) optDiv.classList.add('selected');
                    else optDiv.classList.remove('selected');
                    this.saveCurrentQuestionAnswer(); // Automatsko čuvanje odgovora
                });
            });
        }
        // Fill-in pitanja: učitaj prethodno unete odgovore
        if (q.type === 'fill-in') {
            const userAnswer = this.userAnswers[q.id];
            const inputElements = this.questionText.querySelectorAll('.fill-in-input');
            if (userAnswer && Array.isArray(userAnswer)) {
                inputElements.forEach((input, i) => {
                    input.value = userAnswer[i] || '';
                });
            }
            // Dodaj event listener za automatsko čuvanje odgovora
            inputElements.forEach(input => {
                input.addEventListener('input', () => {
                    this.saveCurrentQuestionAnswer();
                });
            });
        }
        if (q.flagged) {
            this.flagQuestionBtn.classList.add('flagged');
        } else {
            this.flagQuestionBtn.classList.remove('flagged');
        }
        this.updateNavigationButtons();
    }

    navigateQuestions(direction) {
        this.saveCurrentQuestionAnswer();
        this.currentQuestionIndex += direction;
        if (this.currentQuestionIndex < 0) this.currentQuestionIndex = 0;
        if (this.currentQuestionIndex >= this.selectedQuestions.length) this.currentQuestionIndex = this.selectedQuestions.length - 1;
        this.loadQuestion();
    }

    saveCurrentQuestionAnswer() {
        const q = this.selectedQuestions[this.currentQuestionIndex];
        if (!q) return;
        if (q.type === 'fill-in') {
            const inputElements = this.questionText.querySelectorAll('.fill-in-input');
            const values = Array.from(inputElements).map(input => input.value);
            this.userAnswers[q.id] = values;
            return;
        }
        if (!q.options) return;
        const isMultipleChoice = Array.isArray(q.correctAnswer);
        const optionInputs = this.optionsContainer.querySelectorAll('input');
        if (isMultipleChoice) {
            const selected = [];
            optionInputs.forEach((input, idx) => {
                if (input.checked) selected.push(idx);
            });
            this.userAnswers[q.id] = selected;
        } else {
            let selected = null;
            optionInputs.forEach((input, idx) => {
                if (input.checked) selected = idx;
            });
            if (selected !== null) this.userAnswers[q.id] = selected;
        }
    }

    toggleFlag() {
        const q = this.selectedQuestions[this.currentQuestionIndex];
        q.flagged = !q.flagged;
        this.loadQuestion();
    }

    endExam(timeExpired = false) {
        this.saveCurrentQuestionAnswer();
        clearInterval(this.timerInterval);
        // Prikaz izveštaja (implementacija kao i ranije)
        this.showSummary();
    }

    showSummary() {
        this.summary.classList.remove('hidden');
        // Prikaz rezultata
        const tbody = this.summaryContent.querySelector('tbody');
        if (tbody) tbody.innerHTML = '';
        let correct = 0, incorrect = 0, unanswered = 0;
        let totalPoints = 0, userPoints = 0;
        this.selectedQuestions.forEach((q, idx) => {
            const userAnswer = this.userAnswers[q.id];
            let isCorrect = false, isAnswered = false;
            if (Array.isArray(q.correctAnswer)) {
                isAnswered = Array.isArray(userAnswer) && userAnswer.length > 0;
                isCorrect = isAnswered && userAnswer.length === q.correctAnswer.length && userAnswer.every(val => q.correctAnswer.includes(val)) && q.correctAnswer.every(val => userAnswer.includes(val));
            } else {
                isAnswered = typeof userAnswer === 'number';
                isCorrect = isAnswered && userAnswer === q.correctAnswer;
            }
            if (!isAnswered) unanswered++;
            else if (isCorrect) correct++;
            else incorrect++;
            // Tabela
            let statusSymbol = '☐';
            if (isAnswered && isCorrect) statusSymbol = '☑';
            else if (isAnswered && !isCorrect) statusSymbol = '☒';
            if (tbody) {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${idx + 1}</td><td>${q.id}</td><td>${q.points || ''}</td><td>${statusSymbol}</td><td>${q.flagged ? '🔖' : ''}</td>`;
                tbody.appendChild(row);
            }
            // Saberi bodove
            totalPoints += q.points || 0;
            if (isAnswered && isCorrect) userPoints += q.points || 0;
        });
        this.correctAnswersCount.textContent = correct;
        this.incorrectAnswersCount.textContent = incorrect;
        this.unansweredQuestionsCount.textContent = unanswered;
        if (this.incorrectQuestionsList) this.incorrectQuestionsList.innerHTML = '';
        // Prikaz ocene i procenta
        if (this.passFailMessage) {
            let percent = totalPoints > 0 ? (userPoints / totalPoints) * 100 : 0;
            let grade = 1;
            let gradeText = 'недовољан (1)';
            if (percent > 87.5) { grade = 5; gradeText = 'одличан (5)'; }
            else if (percent > 75.5) { grade = 4; gradeText = 'врло добар (4)'; }
            else if (percent > 63.5) { grade = 3; gradeText = 'добар (3)'; }
            else if (percent > 50.5) { grade = 2; gradeText = 'довољан (2)'; }
            this.passFailMessage.textContent = `Освојено: ${userPoints} / ${totalPoints} (${percent.toFixed(1)}%) — Оцена: ${gradeText}`;
            this.passFailMessage.style.color = grade === 1 ? '#d32f2f' : (grade === 2 ? '#fbc02d' : (grade === 3 ? '#1976d2' : (grade === 4 ? '#388e3c' : '#6a1b9a')));
        }
        if (this.backToQuizBtn) this.backToQuizBtn.style.display = 'none';
    }

    hideSummary() {
        this.summary.classList.add('hidden');
    }

    updateNavigationButtons() {
        this.prevBtn.disabled = this.currentQuestionIndex === 0;
        this.nextBtn.disabled = this.currentQuestionIndex === this.selectedQuestions.length - 1;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof questionData !== 'undefined') {
        new QuizAppSimulation(questionData);
    } else {
        console.error('questionData array not found. Make sure script.js is loaded before exam_simulation.js and defines a global "questionData" array.');
    }
}); 