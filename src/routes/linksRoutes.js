const express = require('express');

const linksRouter = express.Router();

linksRouter.route('/')
  .get((req, res) => {
    res.render(
      'links',
      {
        title: 'HouseRank'
      }
    );
  });
module.exports = linksRouter;
