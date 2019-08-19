const Happening = require('../models/Happening')

/* Note to team:
- I'm not building is user related pieces yet (e.g. populating records)
- I'm also not chaining the .catch(next) elements in yet
- In both cases, that's becuase these are highly dependant elements we haven't assinged yet (secureRoute and errorHandler)
- I haven't added anything related to comments becuase we're not building those in yet.
*/

function indexRoute(req, res, next) {
  Happening.find(req.query) // This won't work until we have the query handler plugged in
    .limit(5)
    .then(happening => res.json(happening))
    .catch(next)
}

function createRoute(req, res, next) {
  const happening = new Happening(req.body)

  happening.save()
    .then(happening => res.status(201).json(happening))
    .catch(next)
}

function showRoute(req, res, next) {
  Happening.findById(req.params.id)
    .then(happening => {
      if (!happening) return res.sendStatus(404)
      return res.json(happening)
    })
    .catch(next)
}

function updateRoute(req, res, next) {
  Happening.findById(req.params.id)
    .then(happening => {
      if (!happening) return res.sendStatus(404)
      return happening.set(req.body)
    })
    .then(happening => happening.save())
    .then(happening => res.json(happening))
    .catch(next)
}

function deleteRoute(req, res, next) {
  Happening.findById(req.params.id)
    .then(happening => {
      if (!happening) return res.sendStatus(404)

      return happening.remove()
        .then(() => res.sendStatus(204))
        .catch(next)
    })
}

function commentCreateRoute(req, res, next) {
  req.body.user = req.currentUser._id

  Happening.findById(req.params.id)
    .then(happening => {
      if(!happening) return res.sendStatus(404)
      happening.comments.push(req.body)
      return happening.save()
    })
    .then(happening => Happening.populate(happening, 'user comments.user'))
    .then(happening => res.json(happening))
    .catch(next)
}

function commentDeleteRoute(req, res, next) {
  console.log('HERE')
  Happening.findById(req.params.id)
    .then(happening => {
      if(!happening) return res.sendStatus(404)
      const comment = happening.comments.id(req.params.commentId)
      if(!comment) return res.sendStatus(404)
      comment.remove()
      return happening.save()
    })
    .then(happening => Happening.populate(happening, 'user comments.user'))
    .then(happening => res.json(happening))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute,
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute
}
