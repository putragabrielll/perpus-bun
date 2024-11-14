import { Router } from "mg-bun-router";

const booksController = require("../../controllers/global/books.controller");
const router = new Router();

router.get("/books", booksController.getAllBooks);

router.post("/books", (req) => {
    return Response.json({
        success: true,
        message: 'dawdawda well!'
    });
});

export default router;