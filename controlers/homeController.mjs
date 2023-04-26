'use strict';

const getHome = (req, res, next) => {
    try {
        res.status(200).send('Hello world');
    } catch (err) {
        res.status(400).send(err.message);
    }
};

export { getHome };
