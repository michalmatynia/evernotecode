/// ----- CREATE SHALLOW COPY AND NO VALUES IN PROPERTIES
const raw = {
    item1: { key: 'sdfd', value: 'sdfd' },
    item2: { key: 'sdfd', value: 'sdfd' },
    item3: { key: 'sdfd', value: 'sdfd' }
};

const allowed = ['item1', 'item3'];

const filtered = Object.keys(raw)
    .filter(key => allowed.includes(key))
    .reduce((obj, key) => {
        return {
            ...obj,
            [key]: raw[key]
        };
    }, {});

// ------------ CREATE A COPY WITH VALUES

const raw = {
    item1: { key: 'sdfd', value: 'sdfd' },
    item2: { key: 'sdfd', value: 'sdfd' },
    item3: { key: 'sdfd', value: 'sdfd' }
};

const allowed = ['item1', 'item3'];

const filtered = Object.keys(raw)
    .filter(key => allowed.includes(key))
    .reduce((obj, key) => {
        obj[key] = raw[key];
        return obj;
    }, {});

console.log(filtered);

// Mutating the Same Object
for (let i = 0; i < articles.length; i++) {
    const newArticle = Object.assign(articles[i], { rating: 5 });
    amazingArticles.push(newArticle);
}



// Mutating and creating new Object
const amazingArticles = articles.map((article) => {
return Object.assign(article, {rating: 5});});


const highlyRatedArticles = articles.filter((article) => {
return article.rating >= 3;});


// Testing Object - will return booleans
const every = myArray.every((current, index, array) => {
return true or false});

const some = myArray.some((current, index, array) => { 
return true or false});