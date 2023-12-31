const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./Data/categories.json');
const news = require('./Data/news.json');
app.use(cors());
app.get('/', (req, res) => {
    res.send('News API running');
})

app.get('/news-categories', (req, res) => {
    res.send(categories);
})


app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '0')
        res.send(news);
    else {
        const selectiveCategory = news.filter(n => n.category_id === id)
        res.send(selectiveCategory);
    }
})

app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectiveNews = news.find(n => n._id === id)
    res.send(selectiveNews);
})


app.listen(port, () => {
    console.log('Dragon News Server running on port', port);
})