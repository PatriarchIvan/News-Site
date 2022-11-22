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
        {
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
const searchBlock = document.querySelector('.search');
const input = document.querySelector('.input');
const main = document.querySelector('.main');

const copyObjectExample = {};

const copy = (object) => {
    for (let key in object) {
        copyObjectExample[key] = object[key];
    }
    return copyObjectExample;
};

copy(testArticles);

class newsItem {
    constructor(article, counter = 50) {
        this.article = article;
        this.counter = counter;

    }

    render() {
        for (let i = 0; i < this.counter; i++) {
            const elem = document.createElement('div');
            elem.classList.add('article');
            elem.innerHTML = `
            <div class="article__header">
                <h3 class="title">${this.article.articles[i].title}</h3>
                <h3 class="author"><span class="italic">Author: </span>${this.article.articles[i].author}</h3>
                <h4 class="source"><span class="italic">Source: </span>${this.article.articles[i].source.name}</h4>
            </div>
            <div class="article__suptitle>
                <p class="desc">${this.article.articles[i].description}</p>
                <a class="link" href="${this.article.articles[i].url}">Link to this article</a>
            </div>
            <div class="article__content">
                <div class="img">
                    <img src=${this.article.articles[i].urlToImage} alt="article image">
                </div>
                <p class="text">${this.article.articles[i].content}</p>
            </div>
            `;
            main.append(elem);
        }
    }
}

const news = new newsItem(copyObjectExample, 4).render();

const createElement = () => {

};



// let url = 'https://newsapi.org/v2/everything?' +
//     'q=Apple&' +
//     `from=${new Date()}&` +
//     'sortBy=popularity&' +
//     'apiKey=239aedc5071947fdb8f0ce856f541bfb';

// const request = new Request(url);
// fetch(request)
//     .then(response => response.json())
//     .then(data => new newsItem(data, 50).render())
//     .then(console.log('Fetch Completed'));