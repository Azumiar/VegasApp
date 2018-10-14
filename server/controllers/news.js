const news = [
    {
        title: "Для вчера сегодня завтра",
        description: "Невероятно но факт",
        imageUrl: "https://pp.userapi.com/c849328/v849328927/9bf59/cCMqdnyYluA.jpg",
        url: "https://vk.com/simferopolvegas?w=wall-122738850_3528"
    },
    {
        title: "Для вчера сегодня завтра",
        description: "Невероятно но факт",
        imageUrl: "https://pp.userapi.com/c849328/v849328927/9bf59/cCMqdnyYluA.jpg",
        url: "https://vk.com/simferopolvegas?w=wall-122738850_3528"
    }
]

function getNews(req, res) {
    res.send(JSON.stringify(news));
}

module.exports = {
    getNews
}