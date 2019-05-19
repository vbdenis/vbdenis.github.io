 window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js'), 
        modals = require('./parts/modals.js'), 
        forms = require('./parts/forms.js'), 
        slider = require('./parts/slider.js'), 
        calculator = require('./parts/calculator.js');

        tabs();
        timer();
        modals();
        forms();
        slider();
        calculator();

   
});