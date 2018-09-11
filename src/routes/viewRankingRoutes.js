const express = require('express');

const viewRankingRouter = express.Router();

function router() {
  viewRankingRouter.route('/')
    .get((req, res) => {
      res.render(
        'viewRank',
        {
          title: 'HouseRank'
        }
      );
    });
  return viewRankingRouter;
}

module.exports = router();
