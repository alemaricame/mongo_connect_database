module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      email: String,
      password: String,
      username: { type: String, required: true, unique: true },
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const collection = mongoose.model("users", schema);
  return collection;
};