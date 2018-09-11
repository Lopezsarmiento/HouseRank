const express = require('express');

const viewRankingRouter = express.Router();

viewRankingRouter.route('/')
  .get((req, res) => {
    res.render(
      'viewRank',
      {
        title: 'HouseRank'
      }
    );
  });
module.exports = viewRankingRouter;
