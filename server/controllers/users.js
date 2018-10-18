const users = [
    {
        name: "Бекир Шабутов",
        phone: "+79787139205",
        checks: "4",
        bonusCard: "835",
        avatarUrl: "https://pp.userapi.com/c831209/v831209787/1a1d22/-4m4mudhO7E.jpg?ava=1"
    }
]

function addUser(req, res) {
    console.log(req);
    users.push({
        name: req.body.name,
        phone: req.body.phone,
        checks: req.body.checks,
        bonusCard: req.body.bonusCard,
        avatarUrl: req.body.avatarUrl
    });
    console.log(users);
}

function getUser(req, res) {
    res.send(JSON.stringify(users));
}

module.exports = {
    getUser,
    addUser
}
