const main = document.querySelector('.main');
let articlesCounter = 15;

const clearList = (list) => {
    while (list.firstChild) {
        list.lastChild.remove();
        if (list.length === 1) {
            break;
        }
    }
}

const initSourceList = (list, articles) => {
    const arr = [];
    // if (articles.length !== 0) articles.map((item) => ) 
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

const clearPage = (parent) => {
    while (parent.lastChild) {
        parent.lastChild.remove();
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

export {
    main,
    articlesCounter,
    clearList,
    initSourceList,
    clearPage,
    NewsBlock,
};