// let url = 'https://newsapi.org/v2/everything?' +
//     'q=Apple&' +
//     `from=${new Date()}&` +
//     'sortBy=popularity&' +
//     'apiKey=239aedc5071947fdb8f0ce856f541bfb';

// const request = new Request(url);
// const searchBlock = document.querySelector('.search');
// const input = document.querySelector('.input');
// const main = document.querySelector('.main');
let articlesObj = {};

// **************************FETCH ONLY 50 TIMES PER 12 HOURS!!!!DO NOT FORGET!!!!!!!!!!!!!****************************

// fetch(request)
//     .then(response => response.json())
//     .then(data => console.log(data));
//     .then(data => articlesObj = data)
//     .then(console.log(articlesObj))
//     .then(data => {
//             console.log(typeof (data));
//             console.log(typeof (articlesObj));
//             });

// articles.index.source.name ==== site name;
// articles.index.title ==== title of article;


// input.addEventListener('input', () => {
//     console.log(input.value);
//     fetch(request)
//     .then(response => response.json());
//     .then(data => data.articles.forEach(elem => console.log(elem.description)))
//     .then(data => console.log(typeof(data.articles[0].author)))
//     .then(data => console.log(data.articles[0].author))
//     .then(data => console.log(typeof(input.value)))
//     .then(data =>  {
//         if(input.value == data.articles[0].author) {
//             console.log('Match');
//         } else {
//             console.log('Not found...');
//         }
//     });
// })