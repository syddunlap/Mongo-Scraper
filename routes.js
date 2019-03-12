// Routes

module.exports = (app) => {
    app.use('/', require('./controllers/home'));
    app.use('/scrape', require('./controllers/scrape'));
    app.use('/articles', require('./controllers/articles'));
    app.use('/api/articles', require('./controllers/articlesAPI'));
    app.use('/api/comments', require('./controllers/commentsAPI'));
  };