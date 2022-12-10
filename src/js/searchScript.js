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

export { checkInput };
