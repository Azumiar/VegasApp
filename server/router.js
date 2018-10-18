const express = require('express');
const router = express.Router();

const Users = require('./controllers/users');
const News = require('./controllers/news');

router.get('/', (_, res) => {
    res.sendFile(__dirname +  '/admin/index.html');
});

router.get('/api/users', Users.getUser);
router.post('/api/users', Users.addUser);

router.get('/api/news', News.getNews);
router.post('/api/news', News.addNews);

module.exports = router;
