function switchLanguage(language) {
    var elements = document.querySelectorAll('.lang-content');
    elements.forEach(function(element) {
        element.classList.remove('active');
    });
    
    var activeElements = document.querySelectorAll('.lang-' + language);
    activeElements.forEach(function(element) {
        element.classList.add('active');
    });
}