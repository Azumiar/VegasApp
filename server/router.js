const express = require('express');
const router = express.Router();

const Users = require('./controllers/users');
const News = require('./controllers/news');

router.get('/', (req, res) => {
    res.sendFile(__dirname +  '/admin/index.html');
});

router.get('/api/users', Users.getUser);
router.get('/api/news', News.getNews);

module.exports = router;
