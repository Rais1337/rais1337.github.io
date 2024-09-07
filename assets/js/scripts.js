const localization = {
    'ru': {
        title: "Сайт находится на очередной перестройке :(",
        message: "Зайдите как-нибудь позже.",
        notification: "📋 Имя пользователя скопировано!"
    },
    'en': {
        title: "The website is under reconstruction :(",
        message: "Please visit again later.",
        notification: "📋 Username copied!"
    },
    'uk': {
        title: "Сайт знову знаходиться на перебудові :(",
        message: "Зайдіть якось пізніше.",
        notification: "📋 Ім'я користувача скопійовано!"
    }
};

const userLang = navigator.language || navigator.userLanguage;

function setLocalizedText(language) {
    const text = localization[language] || localization['ru'];
    document.querySelector('h1').textContent = text.title;
    document.querySelector('p').textContent = text.message;
}

if (userLang.startsWith('uk')) {
    setLocalizedText('uk');
} else if (userLang.startsWith('en')) {
    setLocalizedText('en');
} else {
    setLocalizedText('ru');
}

document.addEventListener("DOMContentLoaded", function () {
    const discordLogo = document.getElementById("discord-logo");
    const notification = document.getElementById("discord-notification");

    const language = userLang.startsWith('uk') ? 'uk' : userLang.startsWith('en') ? 'en' : 'ru';
    const notificationMessage = localization[language].notification;

    discordLogo.addEventListener("click", function (e) {
        e.preventDefault();

        notification.textContent = notificationMessage;
        notification.classList.add("show");

        navigator.clipboard.writeText("mr.rais");

        setTimeout(function () {
            notification.classList.remove("show");
        }, 3000);
    });
});