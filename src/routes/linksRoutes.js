const express = require('express');

const linksRouter = express.Router();

function router() {
  linksRouter.route('/')
    .get((req, res) => {
      res.render(
        'links',
        {
          title: 'HouseRank'
        }
      );
    });

  return linksRouter;
}
module.exports = router();
