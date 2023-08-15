window.addEventListener('scroll', function () {
    var headerPrimary = document.querySelector('.headerPrimaryWrap');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        headerPrimary.style.top = '0';
    } else {
        headerPrimary.style.top = '50px';
    }
});

// Modal drop down
const modalHeader = document.querySelector('.modalHeader');
const dropDownItems = modalHeader.getElementsByClassName('headerDropDownItem');
const primaryDrops = document.getElementsByClassName('headerPrimaryDrop');
const headerWrap = document.querySelector('.wrap-header');
const dropSearch = document.querySelector('.dropDownSearch');
const body = document.body;

Array.from(primaryDrops).forEach((element, index) => {
    element.addEventListener('click', () => {
        modalHeader.classList.add('active');
        headerWrap.classList.add('active');
        body.style.overflow = 'hidden';

        for (let i = 0; i < dropDownItems.length; i++) {
            if (i === index) {
                dropDownItems[i].classList.add('active');
            } else {
                dropDownItems[i].classList.remove('active');
            }
        }
    });
});

dropSearch.addEventListener('click', () => {
    modalHeader.classList.add('active');
    headerWrap.classList.add('active');
    body.style.overflow = 'hidden';
});

modalHeader.addEventListener('click', () => {
    modalHeader.classList.remove('active');
    headerWrap.classList.remove('active');
    body.style.overflow = 'auto';
});

// Modal sign in
const signInModal = document.querySelector('.modalSignIn');
const signInBtn = document.querySelector('.headerSignIn');
const closeBtn = document.querySelector('.closeSignIn');

signInBtn.addEventListener('click', () => {
    signInModal.classList.add('active');
    body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    signInModal.classList.remove('active');
    body.style.overflow = 'auto';
});