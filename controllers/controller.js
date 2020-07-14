const db = require("../models");
const Db = db.connect;

// Create and Save a new Tutorial
exports.create = (req, res) => {
   // Validate request
   if (!req.body.email) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const loginData = new Db({
    email: req.body.email,
    password: req.body.password,
  });

  // Save Tutorial in the database
  loginData
    .save('users')
    .then(data => {
      res.status(200).send({
        message:
        "El usuario se agrego correctamente"
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
        "Error al crear un usuario."+err.message || "Error al crear un usuario."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};

//Login

exports.login = (req, res) => {

    const id = req.body.email;

    Db.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Tutorial with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Tutorial with id=" + id });
      });

    
};
