const booksModels = require('../../models/books.model');

exports.getAllBooks = async (req) => {
    try {
        const books = await booksModels.getAllBooks();
        return Response.json({
            success: true,
            data: books,
            message: 'Backend is running well!'
        });
    } catch (error) {
        return Response.json({ error: 'Internal server error' }, {status: 500});
    }
};