const request = require('supertest')
const app = require('../server')
describe('Post Endpoints', () => {
    it('should create a new post', async () => {
        const res = await request(app)
            .post('/api/v1/posts')
            .send({
                title: 'mySecondTitle',
                content: 'MySecondContent',
                imagePath: 'MySecondImage.jpg',
            })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('post')
    })


    //TEST IF IT CAN RETURN A SINGLE POST BY ID
    it('should fetch a single post', async () => {
        const id = "620f8510f3a321d4d9fb645d";
        const res = await request(app)
            .get(`/api/v1/posts/${id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('post');
    });

    //TEST IF IT CAN RETURN ALL POSTS
    it('should fetch all posts', async () => {
        const res = await request(app)
            .get('/api/v1/posts');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('posts');
    });

    //TEST IF IT CAN UPDATE A POST
    it('should update a post', async () => {
        const res = await request(app)
            .put('/api/v1/posts/620f8510f3a321d4d9fb645d')
            .send({
                title: 'updated title',
                content: 'Lorem ipsum',
                imagePath: 'myFirstImage.jpg',
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('post');
        expect(res.body.post).toHaveProperty('title', 'updated title');
    });

    it('should respond with status code 404 if resource is not found', async () => {
        const id = 1;
        const res = await request(app)
            .get(`/api/v1/posts/${id}`);
        expect(res.statusCode).toEqual(404);
    });

    it('should delete a post', async () => {
        const res = await request(app)
            .delete('/api/v1/posts/620f8510f3a321d4d9fb645d');
        expect(res.statusCode).toEqual(204);
    });
})

