module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      role: { type: String, enum: ['buyer', 'seller'], default: 'buyer' },
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const createUser = mongoose.model("users", schema);
  return createUser;
};