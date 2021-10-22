const express = require('express')
const router = express.Router()

/**
 * Redirect to old MediaWiki install to fix broken links
 */
router.get('/wiki/*', (req, res, next) => {
  res.status(301).redirect('https://mediawiki.CrowdsourcingCures.org' + req.path)
})

module.exports = router
