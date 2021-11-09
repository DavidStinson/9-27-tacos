import { Taco } from "../models/taco.js"


function index(req, res) {
  Taco.find({})
  .then(tacos => {
    res.render("tacos/index", {
      tacos
    })
  })
}

function newTaco(req, res) {
  res.render("tacos/new")
}

function create(req, res) {
  req.body.tasty = !!req.body.tasty
  Taco.create(req.body)
  .then(() => {
    res.redirect("/tacos")
  })
}

function show(req, res) {
  Taco.findById(req.params.id)
  .then(taco => {
    res.render("tacos/show", {
      taco
    })
  })
}

function deleteTaco(req, res) {
  Taco.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect("/tacos")
  })
}

export {
  index,
  newTaco as new,
  create,
  show,
  deleteTaco as delete
}