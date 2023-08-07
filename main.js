window.addEventListener('scroll', function () {
    var utilityHeader = document.querySelector('.utilityHeaderWrap');
    var headerPrimary = document.querySelector('.headerPrimaryWrap');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        headerPrimary.style.top = '0';
    } else {
        headerPrimary.style.top = '50px';
    }
});