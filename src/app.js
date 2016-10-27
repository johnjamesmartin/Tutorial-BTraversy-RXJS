import $ from 'jquery';
import Rx from 'rxjs/Rx';

/* 1.
const btn = $('#btn');
const input = $('#input');
const output = $('#output');


// $ represents a stream (not required but best practice). 
   Log button's event observable data:

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


// Output text value for input event observable:

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


// Output X and Y co-ordinates for document event observable:

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
*/


/* 2.

const numbers = [33, 44, 55, 66, 77];
const numbers$ = Rx.Observable.from(numbers);

numbers$.subscribe(
    v => {
        console.log(v);
    },
    err => {
        console.log(err);
    },
    complete => {
        console.log('completed');
    }
);


const posts = [
    { title: 'Post One', body: 'This is the body' },
    { title: 'Post Two', body: 'This is the body' },
    { title: 'Post Three', body: 'This is the body' }
];

const posts$ = Rx.Observable.from(posts);

posts$.subscribe(
    post => {
        console.log(post);
        $('#posts').append('<li><h3>' + post.title + '</h3></li><p>' + post.body + '</p>')
    },
    err => {
        console.log(err);
    },
    complete => {
        console.log('completed');
    }
); */


/* 3.
const set = new Set(['hello', 42, { title: 'My title'} ]);
const set$ = Rx.Observable.from(set);

set$.subscribe(
    v => {
        console.log(v);
    },
    err => {
        console.log(err);
    },
    complete => {
        console.log('completed');
    }
);*/


/* 4.
const map = new Map([[1, 2], [3, 4], [5, 6]]);
const map$ = Rx.Observable.from(map);

map$.subscribe(
    v => {
        console.log(v);
    },
    err => {
        console.log(err);
    },
    complete => {
        console.log('completed');
    }
);*/


/*
const source$ = new Rx.Observable(observer => {
    console.log('creating observable');

    // emit message
    observer.next('hello world');
    observer.next('another value');

    observer.error(new Error('Error: something went wrong'));

    setTimeout(() => {
        observer.next('yet another value');
        observer.complete();
    }, 3000);
});

source$
.catch(err => Rx.Observable.of(err))
.subscribe(
    x => {
        console.log(x);
    },
    err => {
        console.log(err);
    },
    complete => {
        console.log('completed');
    }
);*/


const myPromise = new Promise((resolve, reject) => {
    console.log('creating promise');
    setTimeout(() => {
        resolve('hello from promise');
    }, 3000);
});

/*
myPromise.then(x => {
    console.log(x);
});

// or...

const source$ = Rx.Observable.fromPromise(myPromise);
source$.subscribe(x => console.log(x));
*/

function getUser(username) {
    return $.ajax({
        url: 'https://api.github.com/users/' + username,
        dataType: 'jsonp'
    }).promise();
}

const inputSource$ = Rx.Observable.fromEvent($('#input'), 'keyup');

inputSource$.subscribe(e => {
    Rx.Observable.fromPromise(getUser(e.target.value))
        .subscribe(x => {
            $('#name').text(x.data.login);
            $('#repos').text('Repos: ' + x.data.public_repos);
            $('#bio').text('Bio: ' + x.data.bio);
        }
    );
});
