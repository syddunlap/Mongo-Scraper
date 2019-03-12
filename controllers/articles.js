// This file will control the main routes that the user will be taken to based on
// the article links that the user clicks (from the navbar or from 'next' & 'prev'
// buttons).

const express = require('express');
const moment = require('moment');
const db = require('../models');

const router = express.Router();

function getPage(req, res, source) {
  const perPage = 10;
  const page = Math.max(1, req.param('pageNum'));
  const query = {};
  if (source) {
    query.source = source;
  }
  db.Article.find(query).limit(Number(perPage)).skip(perPage * page - perPage).sort({ createdAt: -1 })
    .then((dbArticle) => {
      db.Article.count(query).then((count) => {
        dbArticle.forEach((article) => {
          article.timeElapsed = moment(article.createdAt, 'YYYY-MM-DD').fromNow();
        });
        res.render('articles', {
          articles: dbArticle,
          prev: Number(page - 1),
          page,
          next: Number(page + 1),
          pages: Math.ceil(count / perPage),
          source,
        });
      });
    });
}

router.get('/', (req, res) => {
  res.redirect('/articles/page/1');
});

router.get('/page/:pageNum', (req, res) => {
  getPage(req, res);
});

router.get('/outsidemagazine', (req, res) => {
  res.redirect('/articles/outsidemagazine/page/1');
});

router.get('/outsidemagazine/page/:pageNum', (req, res) => {
  getPage(req, res, 'Outside Magazine');
});

module.exports = router;