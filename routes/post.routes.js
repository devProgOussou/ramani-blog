const router = require('express').Router();
const postController = require('../controllers/post.controller');

router.post('/posts', postController.addPost);
router.get('/posts', postController.getPosts);
router.get('/posts/:id', postController.getPost);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

module.exports = router;