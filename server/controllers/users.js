function getUser(req, res) {
    res.send(JSON.stringify({
        name: "Шакир Бабутов",
        avatarUrl: "https://pp.userapi.com/c831209/v831209787/1a1d22/-4m4mudhO7E.jpg?ava=1"
    }));
}

module.exports = {
    getUser
}