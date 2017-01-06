const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.json({
    codes: [
      { 
        title: 'code 1 title',
        repoUri: 'https://git.epfl.ch/toto/youpi',
        tags: ['enac', 'template', 'tequila', 'have fun'],
        unitOwner: 'ENAC-IT',
        languages: ['js', 'python', 'html', 'css'],
        visibility: 'restricted',
        contact: '1234@epfl.ch'
      },
      {
        title: 'code 2 title', 
        repoUri: 'https://git.epfl.ch/titi/123',
        tags: ['enac', 'template', 'tequila', 'have fun'],
        unitOwner: 'ENAC-IT',
        languages: ['js', 'python', 'html', 'css'],
        visibility: 'public',
        contact: '1234@epfl.ch'
      },
      {
        title: 'code 3 title', 
        repoUri: 'https://git.epfl.ch/toto/plop',
        tags: ['enac', 'template', 'tequila', 'have fun'],
        unitOwner: 'ENAC-IT',
        languages: ['js', '.net', 'html', 'css'],
        visibility: 'public',
        contact: '1234@epfl.ch'
      }
    ]
  })
})

module.exports = router