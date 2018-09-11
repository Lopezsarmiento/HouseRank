const express = require('express');

const rankHouseRouter = express.Router();

rankHouseRouter.route('/')
  .get((req, res) => {
    res.render(
      'rankHouse',
      {
        title: 'HouseRank'
      }
    );
  });
module.exports = rankHouseRouter;
