import express from 'express';
const router = express.Router();

router.get('/',function (req, res, next) {
    res.json({Response: 'The API Works!'})
})

export { router }