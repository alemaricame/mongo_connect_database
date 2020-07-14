module.exports = app => {
    const routes = require("../controllers/controller.js");
  
    var router = require("express").Router();
  
    //Login 
    router.post("/login", routes.login);


    // Create a new Tutorial
    router.post("/", routes.create);
  
    // Retrieve all routes
    router.get("/", routes.findAll);
  
    // Retrieve all published routes
    router.get("/published", routes.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", routes.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", routes.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", routes.delete);
  
    // Create a new Tutorial
    router.delete("/", routes.deleteAll);
  
    app.use('/api/tribuu', router);
  };