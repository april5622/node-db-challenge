
exports.seed = async function(knex) {
  await knex("projects").insert([
    {name:"first project", desciptions:"first description", completed:false},
    {name:"second project", desciptions:"second description", completed:false},
    {name:"third project", desciptions:"third description", completed:false}
  ])
};
