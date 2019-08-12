class Token {

    constructor() {}

    public isAuth(req, res, next) {
        if (!req.headers.token) {
            return res.status(403).send({ message: 'Incorrect Token or not exist' });
        }
        next();
    }
}

export default new Token();
