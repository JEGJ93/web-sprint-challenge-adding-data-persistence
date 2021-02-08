// build your `Project` model here

const db = require('../../data/dbConfig')

module.exports = {
    find,
    add,
    findById
};

function find() {
    return db('projects');
}

function findById(id) {
    return db('projects')
    .where({project_id: id})
    .first();
}

function add(project) {
    return db('projects')
    .join('tasks', "project.project_id", 'task.project_id')
    .insert(project)
    .then(id => {
        return findById(id[0])
    })
}


