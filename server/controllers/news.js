const news = [
    {
        title: "",
        description: "Долгожданная Суббота - самое время отметить её в VEGAS",
        date: "13.10.2018",
        imageUrl: "https://pp.userapi.com/c849328/v849328927/9bf59/cCMqdnyYluA.jpg",
        url: "https://vk.com/simferopolvegas?w=wall-122738850_3528"
    },
    {
        title: "",
        description: "Ждем в гости на Дымный Четверг в VEGAS!",
        date: "18.10.2018",
        imageUrl: "https://pp.userapi.com/c845322/v845322198/11025f/_VmYEkaMd1M.jpg",
        url: "https://vk.com/simferopolvegas?w=wall-122738850_3537%2Fall"
    }
]

function getNews(req, res) {
    res.send(JSON.stringify(news));
}

function addNews(req, res) {
    news.push({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        url: req.body.url
    });
    console.log(news);
}

module.exports = {
    getNews,
    addNews
}
