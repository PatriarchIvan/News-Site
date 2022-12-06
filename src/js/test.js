const searchBlock = document.querySelector('.search');
const input = document.querySelector('.input');
const main = document.querySelector('.main');
const inputCounter = document.querySelector('.counter');
const outputCounter = document.querySelector('.outputcounter');
const filtersMenu = document.querySelector('.filters');
const sourceList = document.querySelector('.source');
const countryList = document.querySelector('.country');
const categoryList = document.querySelector('.category');
const btnFilter = document.querySelector('.find__btn');
const btnClose = document.querySelector('.close__btn');
const btnSearch = document.querySelector('.search__btn');
const btnScroll = document.querySelector('.scroll');
let articlesCounter = 15;

const initSourceList = (list, articles) => {
    const arr = [];

    for (let i = 0; i < articlesCounter; i++) {
        if (articles.length === 0) {
            break;
        } else {
            arr.push(articles[i].source.name);
        }
    }

    const set = new Set(arr);
    const result = Array.from(set);

    for (let i = 0; i < result.length; i++) {
        if (arr.length === 0) {
            list.setAttribute('value', 'select');
        } else {
            const listItem = document.createElement('option');
            listItem.setAttribute('value', result[i]);
            listItem.innerText = result[i];
            list.append(listItem);
        }
    }
}

const clearList = (list) => {
    while (list.firstChild) {
        list.lastChild.remove();
        if (list.length === 1) {
            break;
        }
    }
}

class NewsBlock {
    constructor(article) {
        this.article = article;
        this.counter = articlesCounter;
    }

    render() {
        for (let i = 0; i < this.counter; i++) {
            const elem = document.createElement('div');
            elem.classList.add('article');
            elem.innerHTML = `
            <div class="article__header">
                <h3 class="title">${this.article.articles[i].title}</h3>
            </div>
            <div class="img">
                <img src=${this.article.articles[i].urlToImage} alt="article image">
            </div>
            <div class="article__suptitle">
                <p class="desc">${this.article.articles[i].description}</p>
                <a class="link" href="${this.article.articles[i].url}">Link to this article</a>
            </div>
            <div class="article__content">
            <div class=author-src>
                <h3 class="author"><span class="italic">Author: </span>${this.article.articles[i].author}</h3>
                <h4 class="source src_link"><span class="italic">Source: </span>${this.article.articles[i].source.name}</h4>
            </div>
            </div>`;
            main.append(elem);
        }
    }
}

const checkSource = (source) => {
    if (source.value.match(/(?:\.[a-z\.]+[\/]?)\w+/g, '')) {
        makeRequest('https://newsapi.org/v2/everything?' +
            `domains=${sourceList.value.toLowerCase().replace(/\s/g, '-')}&` +
            'sortBy=popularity&' +
            'apiKey=239aedc5071947fdb8f0ce856f541bfb'
        )
    } else {
        makeRequest('https://newsapi.org/v2/everything?' +
            `sources=${source.value.toLowerCase().replace(/\s/g, '-')}&` +
            'sortBy=popularity&' +
            'apiKey=239aedc5071947fdb8f0ce856f541bfb'
        )
    }
}

const clearPage = (parent) => {
    while (parent.lastChild) {
        parent.lastChild.remove();
    }
}

const checkInput = () => {
    if (input.value === '' && sourceList.value === 'source' && countryList.value === 'country' && categoryList.value != 'category') {
        makeRequest('https://newsapi.org/v2/top-headlines?' +
            `category=${categoryList.value.toLowerCase()}&` +
            'apiKey=239aedc5071947fdb8f0ce856f541bfb');
    }

    if (input.value === '' && sourceList.value === 'source' && countryList.value != 'country' && categoryList.value === 'category') {
        makeRequest('https://newsapi.org/v2/top-headlines?' +
            `country=${country}&` +
            'apiKey=239aedc5071947fdb8f0ce856f541bfb');
    }
    if (input.value !== '' && sourceList.value === 'source' && countryList.value === 'country' && categoryList.value === 'category') {
        makeRequest('https://newsapi.org/v2/everything?' +
            `q=${input.value.trim().toLowerCase()}&` +
            'sortBy=popularity&' +
            'apiKey=239aedc5071947fdb8f0ce856f541bfb');
    }
    if (sourceList.value !== 'source' && input.value === '' && countryList.value === 'country' && categoryList.value === 'category') {
        checkSource(sourceList);
    }
    if (sourceList.value === 'source' && input.value === '' && countryList.value !== 'country' && categoryList.value !== 'category') {
        makeRequest('https://newsapi.org/v2/top-headlines?' +
            `country=${country}&` +
            `category=${categoryList.value.toLowerCase()}&` +
            'apiKey=239aedc5071947fdb8f0ce856f541bfb');
    }

    if (sourceList.value !== 'source' && input.value !== '' && countryList.value != 'country') {
        // console.log('All three exists')
        makeRequest('https://newsapi.org/v2/top-headlines?' +
            `country=${country}&` +
            // `sources=${sourceList.value.toLowerCase().replace(/\s/g, '-')}&` +
            `q=${input.value.trim().toLowerCase()}&` +
            'sortBy=popularity&' +
            'apiKey=239aedc5071947fdb8f0ce856f541bfb'
        )
    }
    // if (sourceList.value !== 'source' && input.value === '' && countryList.value != 'country') {
    //     makeRequest('https://newsapi.org/v2/top-headlines?' +
    //         `sources=${sourceList.value.toLowerCase().replace(/\s/g, '-')}&` +
    //         `country=${country}&` +
    //         'sortBy=popularity&' +
    //         'apiKey=239aedc5071947fdb8f0ce856f541bfb'
    //     )
    // }

    if (sourceList.value === 'source' && input.value !== '' && countryList.value !== 'country') {
        // console.log('QUOTE AND COUNTRY FETCH')
        makeRequest('https://newsapi.org/v2/top-headlines?' +
            `country=${country}&` +
            `q=${input.value.trim().toLowerCase()}&` +
            'sortBy=popularity&' +
            'apiKey=239aedc5071947fdb8f0ce856f541bfb'
        )
    }
    if (sourceList.value !== 'source' && input.value !== '' && countryList.value === 'country') {
        makeRequest('https://newsapi.org/v2/top-headlines?' +
            `sources=${sourceList.value.toLowerCase().replace(/\s/g, '-')}&` +
            `q=${input.value.trim().toLowerCase()}&` +
            'sortBy=popularity&' +
            'apiKey=239aedc5071947fdb8f0ce856f541bfb'
        )
    }

    if (sourceList.value === 'source' && input.value === '' && countryList.value === 'country' && categoryList.value === 'category') {
        makeRequest(API);
    }
}

const API = 'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    `from=${new Date()}` +
    'sortBy=popularity&' +
    'apiKey=239aedc5071947fdb8f0ce856f541bfb';

const makeRequest = (url) => {
    const request = new Request(url);
    fetch(request)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            console.log(url);
            if (json.articles.length === 0) {
                const errorMsg = 'Nothing to show here...Try another filter options';
                const errorSpan = document.createElement('span');
                errorSpan.textContent = errorMsg;
                clearPage(main);
                main.append(errorSpan);
            } else {
                if (json.articles.length < articlesCounter) {
                    articlesCounter = json.articles.length;
                    clearList(sourceList);
                    initSourceList(sourceList, json.articles);
                    clearPage(main);
                    new NewsBlock(json).render();
                }
                clearList(sourceList);
                initSourceList(sourceList, json.articles);
                clearPage(main);
                new NewsBlock(json).render();
            }
        })
        .then(console.log('Fetch Completed'))
        .catch(error => console.log(error))
}

btnFilter.addEventListener('click', () => {
    filtersMenu.classList.remove('filters__hide');
    filtersMenu.classList.add('filters__active');
    btnFilter.classList.remove('find__btn-active');
    btnFilter.classList.add('find__btn-hidden');
})

btnClose.addEventListener('click', () => {
    filtersMenu.classList.add('filters__hide');
    filtersMenu.classList.remove('filters__active');
    btnFilter.classList.remove('find__btn-hidden');
    btnFilter.classList.add('find__btn-active');
})

btnSearch.addEventListener('click', () => {
    checkInput();
    sourceList.value = 'source';
    countryList.value = 'country';
    categoryList.value = 'category';
})

inputCounter.addEventListener('change', () => {
    articlesCounter = inputCounter.value;
    outputCounter.textContent = inputCounter.value;
    return articlesCounter;
});

countryList.addEventListener('change', () => {
    if (countryList.value != 'country') {
        country = countryList.value;
        return country;
    }
})

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('src_link')) {
        if (e.target.textContent.match(/(?:\.[a-z\.]+[\/]?)\w+/g, '')) {
            makeRequest('https://newsapi.org/v2/everything?' +
                `domains=${e.target.textContent.replace(/Source:\s/g, '').toLowerCase().replace(/\s/g, '-')}&` +
                'sortBy=popularity&' +
                'apiKey=239aedc5071947fdb8f0ce856f541bfb')
        } else {
            makeRequest('https://newsapi.org/v2/everything?' +
                `sources=${e.target.textContent.replace(/Source:\s/g, '').toLowerCase().replace(/\s/g, '-')}&` +
                'sortBy=popularity&' +
                'apiKey=239aedc5071947fdb8f0ce856f541bfb')
        }

    }
})



// const getInnerHeight = () => {
//     if (document.body.pageYOffset >= '600') {
//         btnScroll.classList.add('scroll__visible');
//     } else {
//         btnScroll.classList.remove('scroll__visible')
//     }
// };

// window.addEventListener('scroll', getInnerHeight);
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    btnScroll.style.display = "block";
  } else {
    btnScroll.style.display = "none";
  }
}

btnScroll.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});



makeRequest(API)