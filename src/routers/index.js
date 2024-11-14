import { Router } from "mg-bun-router";

const router = new Router();

router.get("/makan", (req) => {
    return Response.json({
        hello: 'wodawdawdawdawrld'
    });
});

// All request to file Router Books
router.useQoper8("/books", require('./global/books.router')) // "/books" tidak menjadi masalah, hanya untuk penamaan saja

export default router;