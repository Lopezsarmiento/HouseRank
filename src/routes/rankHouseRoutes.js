const express = require('express');

const rankHouseRouter = express.Router();

function router() {
  rankHouseRouter.route('/')
    .get((req, res) => {
      res.render(
        'rankHouse',
        {
          title: 'HouseRank'
        }
      );
    });
  return rankHouseRouter;
}

module.exports = router();
