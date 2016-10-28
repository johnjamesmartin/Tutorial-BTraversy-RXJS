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


/* 5.

const myPromise = new Promise((resolve, reject) => {
    console.log('creating promise');
    setTimeout(() => {
        resolve('hello from promise');
    }, 3000);
});


myPromise.then(x => {
    console.log(x);
});

// or...

const source$ = Rx.Observable.fromPromise(myPromise);
source$.subscribe(x => console.log(x));


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
}); */


/* 6.
const source$ = Rx.Observable.interval(100)
    .take(5);

source$.subscribe(
    x => {
        console.log(x);
    },
    err => {
        console.log(err);
    },
    complete => {
        console.log('completed');
    }

);
*/


/*
const source$ = Rx.Observable.timer(5000, 2000)
    .take(5);

source$.subscribe(
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


/*
const source$ = Rx.Observable.range(25, 100);

source$.subscribe(
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


/* 7.
const source$ = Rx.Observable.interval(1000)
    .take(10)
    .map(v => v * 2);
source$.subscribe(v => console.log(v));

const source$ = Rx.Observable.from(['John', 'Tom', 'Shawn'])
    .map(v => v.toUpperCase())
    .map(v => 'I am ' + v);

source$.subscribe(v => console.log(v));
*/


/*
function getUser(username) {
    return $.ajax({
        url: 'https://api.github.com/users/' + username,
        dataType: 'jsonp'
    }).promise();
}

Rx.Observable.fromPromise(getUser('johnjamesmartin'))
    .map(name => name.data.login)
    .subscribe(name => {
        console.log(name);
    }
);*/

/*
const users = [
    { name: 'Will', age: 34 },
    { name: 'Mike', age: 35 },
    { name: 'Paul', age: 35 }
];

const users$ = Rx.Observable.from(users)
    .pluck('name');

users$.subscribe(x => console.log(x));
*/


/* 8
Rx.Observable.of('hello')
    .merge(Rx.Observable.of('everyone'))
    .subscribe(x => console.log(x));
*/

/*
Rx.Observable.interval(2000)
    .merge(Rx.Observable.interval(500))
    .take(25)
    .subscribe(x => console.log(x));
*/

/*
const source1$ = Rx.Observable.interval(2000).map(v => 'Merge1: ' + v);
const source2$ = Rx.Observable.interval(500).map(v => 'Merge2: ' + v);

Rx.Observable.merge(source1$, source2$)
    .take(25)
    .subscribe(x => console.log(x));
*/

/*
const source1$ = Rx.Observable.range(0, 5).map(v => 'Source1: ' + v);
const source2$ = Rx.Observable.range(6, 5).map(v => 'Source2: ' + v);

Rx.Observable.merge(source1$, source2$)
    .subscribe(x => console.log(x));
*/

/* 9.
Rx.Observable.of('hello')
    .mergeMap(v => {
        return Rx.Observable.of(v + ' everyone');
    }
).subscribe(x => console.log(x));
*/


function getUser(username) {
    return $.ajax({
        url: 'https://api.github.com/users/' + username,
        dataType: 'jsonp'
    }).promise();
}

/* BAD WAY (see good way below):
const inputSource$ = Rx.Observable.fromEvent($('#input'), 'keyup');

Rx.Observable.fromPromise(getUser(e.target.value))
    .subscribe(x => {
        $('#name').text(x.data.login);
        $('#repos').text('Repos: ' + x.data.public_repos);
        $('#bio').text('Bio: ' + x.data.bio);
    }
);
*/


const inputSource$ = Rx.Observable.fromEvent($('#input'), 'keyup')
    .map(e => e.target.value)
    .switchMap(v => {
        return Rx.Observable.fromPromise(getUser(v));
    }
)

inputSource$.subscribe(x => {
    $('#name').text(x.data.login);
    $('#repos').text('Repos: ' + x.data.public_repos);
    $('#bio').text('Bio: ' + x.data.bio);
});
