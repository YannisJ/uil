import { Tools } from '../core/Tools';
import { Proto } from '../core/Proto';

function FileInput(o) {

    Proto.call(this, o);

    this.callback = o.callback

    this.value = o.value || '';

    this.baseH = 50;

    this.c[2] = Tools.dom('input', Tools.css.txtselect, { type: 'file' });
    this.c[2].name = 'input';
    //this.c[2].style.color = ;
    this.c[2].textContent = this.value;

    this.c[2].events = ['change'];

    this.c[3] = Tools.dom('img', 'position: relative; width: 100%; display: block; cursor: pointer;');

    this.init();

};

FileInput.prototype = Object.assign(Object.create(Proto.prototype), {

    constructor: FileInput,

    handleEvent: function (e) {

        switch (e.type) {
            case 'change': this.input(e); break;
        }

    },

    input: function (e) {
        if (this.c[2].files && this.c[2].files[0]) {
            var reader = new FileReader()

            var _this = this

            reader.onload = function (e) {
                // let img = new Image()

                _this.c[3].src = e.target.result

                if (_this.callback) _this.callback(_this.c[3]);

                setTimeout(function () {
                    _this.rSizeContent()
                }, 10)
            }

            reader.readAsDataURL(this.c[2].files[0])
        }
    },

    rSizeContent() {
        this.rSize()
        this.main.calc(this.h - this.baseH);

        this.baseH = this.h
    },

    rSize: function () {

        Proto.prototype.rSize.call(this);

        this.s[0].height = 'auto'
        this.s[0].overflow = ''

        this.s[2].left = this.sa + 'px';
        this.s[2].width = this.sb + 'px';
        this.s[2].height = 20 + 'px';

        this.s[0].padding = '10px 0'

        this.s[3].marginTop = 30 + 'px'
        this.s[3].marginLeft = this.sa + 'px'
        this.s[3].width = this.sb + 'px'

        this.h = Math.max(20, this.c[0].clientHeight)
    }

});

export { FileInput };