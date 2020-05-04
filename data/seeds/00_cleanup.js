
exports.seed = async function(knex) {
 await knex("resources_projects").truncate()
 await knex("resources").truncate()
 await knex("tasks").truncate() 
 await knex("projects").truncate()
};
