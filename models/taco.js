import mongoose from "mongoose"

const tacoSchema = new mongoose.Schema({
  name: String,
  tasty: Boolean,
})

const Taco = mongoose.model("Taco", tacoSchema)

export { Taco }