// Модальне вікно точного часу народження
function openTimeModal() {
    const modal = document.getElementById('timeModal');
    if (modal) modal.classList.remove('hidden');
}

function closeTimeModal() {
    const modal = document.getElementById('timeModal');
    if (modal) modal.classList.add('hidden');
}

window.onclick = function(event) {
    const modal = document.getElementById('timeModal');
    if (event && event.target === modal) {
        closeTimeModal();
    }
}

// Інтерактивний Квіз підбору послуг
function quizNext(step, choice) {
    const prevStep = document.getElementById(`quiz-step-${step - 1}`);
    const nextStep = document.getElementById(`quiz-step-${step}`);
    if (prevStep) prevStep.classList.add('hidden');
    if (nextStep) nextStep.classList.remove('hidden');
}

function showQuizResult(recommendation) {
    const step3 = document.getElementById('quiz-step-3');
    const result = document.getElementById('quiz-result');
    const title = document.getElementById('quiz-recommendation-title');
    
    if (step3) step3.classList.add('hidden');
    if (result) result.classList.remove('hidden');
    if (title) title.innerText = recommendation;
}

// Обробка відправки форми запису
function handleBookingSubmit(event) {
    event.preventDefault();
    const bookingForm = document.getElementById('bookingForm');
    const successMsg = document.getElementById('successMessage');
    if (bookingForm) bookingForm.classList.add('hidden');
    if (successMsg) successMsg.classList.remove('hidden');
}

// Оформлення сертифікатів
function selectCertType(type) {
    const select = document.getElementById('cert-type-select');
    if (select) {
        select.value = (type === 'Електронний') ? 'Електронний' : 'Друкований';
    }
}

function handleCertSubmit(event) {
    event.preventDefault();
    const certForm = document.getElementById('certForm');
    const successMsg = document.getElementById('certSuccessMessage');
    if (certForm) certForm.classList.add('hidden');
    if (successMsg) successMsg.classList.remove('hidden');
}