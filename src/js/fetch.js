// import {  main, articlesCounter, clearList, initSourceList, clearPage, NewsBlock } from ('./pageActions.js');

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

export { API, makeRequest }