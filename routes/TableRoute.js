const { Router } = require("express");

const { getToDo, saveToDo } = require("../controllers/ToDoController");

const router = Router();

router.get("/get-todo", getToDo);

router.post("/save-todo", saveToDo);

module.exports = router;