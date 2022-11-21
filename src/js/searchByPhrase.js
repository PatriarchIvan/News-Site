let url = 'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    `from=${new Date()}&` +
    'sortBy=popularity&' +
    'apiKey=239aedc5071947fdb8f0ce856f541bfb';

const request = new Request(url);
const searchBlock = document.querySelector('.search');
const input = document.querySelector('.input');
const main = document.querySelector('.main');
let articlesObj = {};

// **************************FETCH ONLY 50 TIMES PER 12 HOURS!!!!DO NOT FORGET!!!!!!!!!!!!!****************************

// fetch(request)
//     .then(response => response.json())
//     .then(data => articlesObj = data)
//     .then(console.log(articlesObj))
// .then(data => {
//         console.log(typeof(data));
//         console.log(typeof(articlesObj)
// })

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




const testArticles = {
    "status": "ok",
    "totalResults": 10864,
    "articles": [{
            "source": {
                "id": null,
                "name": "Seeking Alpha"
            },
            "author": "Rida Morwa",
            "title": "Oil And Gas: Private Equity Backs Up The Truck",
            "description": "The revenge of the “pariah” oil and gas will be costly on your wallet and chaotic for the economy. See our two quality picks yielding up to 7%.",
            "url": "https://seekingalpha.com/article/4558722-oil-and-gas-private-equity-backs-up-the-truck",
            "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1058274866/image_1058274866.jpg?io=getty-c-w750",
            "publishedAt": "2022-11-21T16:00:00Z",
            "content": "William_Potter\r\nCo-produced with \"Hidden Opportunities.\"\r\n Defunding hydrocarbon is a costly mistake\r\n The International Energy Forum has called on companies to raise investment in oil (USO) and natu… [+13819 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Bleeding Cool News"
            },
            "author": "Rich Johnston",
            "title": "Elon Musk Tweets Milo Manara Artwork As Thirst Trap For Donald Trump",
            "description": "Elon Musk recently allowed the former President Of The United States, Donald Trump, back on Twitter, after he was banned for involvement with the January 6th insurrection movement. Not that Trump has chosen to take advantage of the situation yet, he seems hap…",
            "url": "https://bleedingcool.com/comics/elon-musk-tweets-milo-manara-artwork-as-thirst-trap-for-donald-trump/",
            "urlToImage": "https://bleedingcool.com/wp-content/uploads/2022/11/91AcmPCsfOL-1200x628.jpg",
            "publishedAt": "2022-11-21T15:57:13Z",
            "content": "Elon Musk recently allowed the former President Of The United States, Donald Trump, back on Twitter, after he was banned for involvement with the January 6th insurrection movement. Not that Trump has… [+1894 chars]"
        },
    ]
};

// console.log(testArticles);
console.log(testArticles.articles[0].title);
console.log(testArticles.articles[0].url);
console.log(testArticles.articles[0].source.name);
console.log(testArticles.articles[1].title);
console.log(testArticles.articles[1].url);
console.log(testArticles.articles[1].source.name);