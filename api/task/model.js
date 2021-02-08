// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
    find,
    add,
    findById
};

function find() {
    return db('tasks as t')
    .join('projects as p', 'p.project_id', 't.project_id')
    .select(
        'p.project_description',
        'p.project_name',
        'p.project_id',
        't.task_completed',
        't.task_description',
        't.task_id',
        't.task_notes')
}

function findById(id) {
    return db('task')
    .where({task_id: id})
    .first();
}

function add(task) {
    return db('tasks')
    .join('projects', 'projects.project_id', 'tasks.project_id')
    .insert(task)
    .then(id => {
        return findById(id[0])
    })
}