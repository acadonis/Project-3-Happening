const Happening = require('..models/Happening')

/* Note to team:
- I'm not building is user related pieces yet (e.g. populating records)
- I'm also not chaining the .catch(next) elements in yet
- In both cases, that's becuase these are highly dependant elements we haven't assinged yet (secureRoute and errorHandler)
- I haven't added anything related to comments becuase we're not building those in yet.
*/

function indexRoute(req, res) {
  Happening.find(req.query)
    .then(happening => res.json(happening))
}

function createRoute(req, res) {
  const happening = new Happening(req.body)

  happening.save()
    .then(happening => res.status(201).json(happening))
}

function showRoute(req, res) {
  Happening.findById(req.params.id)
    .then(happening => {
      if (!happening) return res.sendStatus(404)
      return res.json(happening)
    })
}

function updateRoute(req, res) {
  Happening.findById(req.params.id)
    .then(happening => {
      if (!happening) return res.sendStatus(404)
      return happening.set(req.body)
    })
    .then(happening => happening.save())
    .then(happening => res.json(happening))
}

function deleteRoute(req, res) {
  Happening.findById(req.params.id)
    .then(happening => {
      if (!happening) return res.sendStatus(404)

      return happening.remove()
        .then(() => res.sendStatus(204))
    })
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
}
