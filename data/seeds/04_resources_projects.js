
exports.seed = async function(knex) {
  await knex("resources_projects").insert([
    {resource_id: 1, project_id: 1},
    {resource_id: 1, project_id: 2},
    {resource_id: 2, project_id: 3},

  ])
};
