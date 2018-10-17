const express = require('express');
const router = express.Router();

const Users = require('./controllers/users');
const News = require('./controllers/news');

router.get('/', (req, res) => {
    res.sendFile(__dirname +  '/admin/index.html');
});

router.get('/user', Users.getUser);
router.get('/news', News.getNews);

module.exports = router;