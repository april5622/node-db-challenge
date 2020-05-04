
exports.seed = async function(knex) {
 await knex("resources").insert([
   {name: "computer", description: "computer computer"},
   {name: "conference room", description: "a place for meetings"},
   {name: "mircophone", description: "speak louder"},
   {name: "delivery van", description: "for delivering things"}

 ])
};
