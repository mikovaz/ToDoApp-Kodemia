const router = require("express").Router();
const task = require("../usecases/task");
const { authHandler } = require("../middlewares/authHandler");

router.get("/", async (req, res, next) => {
  try {
    const retrievTask = await task.get();
    res.json({
      success: true,
      playload: retrievTask,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const retrievTask = await task.getById(id);
    res.json({
      success: true,
      playload: retrievTask,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", authHandler, async (req, res, next) => {
  try {
    const { nameTask, timeTask, completeTask } = req.body;
    const createTask = await task.create({ nameTask, timeTask, completeTask });
    res.json({
      success: true,
      playload: createTask,
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", authHandler, async (req, res, next) => {
  try {
    const { id } = req.params;
    const taskUpdate = await task.patch(id, { ...req.body });
    res.json({
      success: true,
      playload: { taskUpdate },
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const taskUpdate = await task.patch(id, { ...req.body });
    res.json({
      success: true,
      playload: { taskUpdate },
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
