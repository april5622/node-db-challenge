
exports.seed = async function(knex) {
  await knex("tasks").insert([
    {descriptions: "research", notes:"first step", completed: false, project_id: 1},
    {descriptions: "code", notes: "task notes", completed: false, project_id: 3},
    {descriptions: "task descriptions", notes: "more notes", completed: false, project_id: 2}
  ])
};
