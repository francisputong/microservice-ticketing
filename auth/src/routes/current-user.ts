import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
  res.send('HIII');
});

export { router as currentUserRouter };
