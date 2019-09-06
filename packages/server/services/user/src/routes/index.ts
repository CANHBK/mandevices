import express from 'express';

const router = express.Router();

router.get('/', (_, res) => {
	res.end('Service User');
});

export default router;
