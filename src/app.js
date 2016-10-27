import $ from 'jquery';
import Rx from 'rxjs/Rx';

const btn = $('#btn');
const input = $('#input');
const output = $('#output');


/* $ represents a stream (not required but best practice). 
   Log button's event observable data:*/

const btnStream$ = Rx.Observable.fromEvent(btn, 'click');

btnStream$.subscribe(
    function(e) {
        console.log(e.target.innerHTML);

    },
    function(err) {
        console.log(err);
    },
    function() {
        console.log('completed');
    }
);


/* Output text value for input event observable: */

const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');

inputStream$.subscribe(
    function(e) {
        console.log(e.target.value);
        output.append(e.target.value);
    },
    function(err) {
        console.log(err);
    },
    function() {
        console.log('completed');
    }
);


/* Output X and Y co-ordinates for document event observable: */

const moveStream$ = Rx.Observable.fromEvent(document, 'mousemove');

moveStream$.subscribe(
    function(e) {
        console.log(e.target.value);
        output.html('X: ' + e.clientX + ' Y: ' + e.clientY);
    },
    function(err) {
        console.log(err);
    },
    function() {
        console.log('completed');
    }
);