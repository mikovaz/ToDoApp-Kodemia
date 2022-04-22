const Task = require("../../models/tasks").model;

const get = async () => {
  return await Task.find({}).exec();
};

const getById = async (id) => {
  return await Task.findById(id).exec();
};

const create = async (task) => {
  //console.log(name);
  const { nameTask, timeTask, completeTask } = task;
  const newTask = new Task({
    nameTask,
    timeTask,
    completeTask,
  });

  return await newTask.save();
};

const update = async (id, name) => {
  const task = await Task.findById(id).exec();
  task.name = name;
  return await task.save();
};

const patch = async (id, taskData) => {
  return await Task.findByIdAndUpdate(id, { ...taskData }).exec();
};

module.exports = {
  get,
  getById,
  create,
  update,
  patch,
};
