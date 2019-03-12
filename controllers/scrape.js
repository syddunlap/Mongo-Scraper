const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const db = require('../models');

const router = express.Router();

const scrapeOutsideMag= (req, res) => {
  // Probably will have to rework some or most of these to grab the correct fields of info
  axios.get('https://www.outsideonline.com/news-field').then((response) => {
    const $ = cheerio.load(response.data);
    $('.listingResult').each((i, element) => {
      const result = {};
      result.title = $(element).find('.article-name').text();
      result.link = $(element).find('a').attr('href');
      result.image = $(element).find('img').attr('data-src');
      result.summary = $(element).find('.synopsis').clone().children()
        .remove()
        .end()
        .text();

      result.source = 'Outside Magazine';
      result.sourceLink = 'https://www.outsideonline.com/news-field';
      db.Article.create(result).catch((err) => {
        console.log(err);
      });
    });
    res.redirect('/articles/outsidemagazine');
  }).catch((err) => {
    console.log(res);
    console.log(err);
    res.render('error', { error: err });
  });
};

router.get('/outsidemagazine', scrapeOutsideMag);