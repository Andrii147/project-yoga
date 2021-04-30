function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
// class Options {
//     constructor(height, width, bg, fontSize, textAlign) {
//         this.height = height;
//         this.width = width;
// 	    this.bg = bg;
// 	    this.fontSize = fontSize;
// 	    this.textAlign = textAlign;
//     }
//     createDiv() {
//         let elem = document.createElement('div');
//         document.body.appendChild(elem);
//         let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
//         elem.style.cssText = param;
//     }
// }
// const item = new Options(300, 350, "red", 14, "center");

// item.createDiv();
}

module.exports = modal;