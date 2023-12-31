const router = require('express').Router();
const { Project } = require('../models');

router.get('/', async (req, res) => {
  try {
    const projectData = await Project.findAll();

    const projects = projectData.map((project) => {
      return project.get({ plain: true })
    });
    res.render('homepage', {
      projects
    });
  } catch (err) {
    res.status(500).json(err)
  }

});

router.get('project/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id)
    const projects = project.get({ plain: true });
    res.render('project', {
      projects
    });
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/login', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
})

module.exports = router;