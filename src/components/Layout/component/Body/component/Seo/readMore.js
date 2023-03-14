function readMore() {
    var moreText = document.getElementsByClassName('more');
    var btnText = document.getElementsByClassName('readmore');

    moreText.style.display = 'flex';
    btnText.style.display = 'none';
}

export default readMore