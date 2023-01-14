const skills = [
    {id: 154654, skill: 'Breakdancing', done: false},
    {id: 156669, skill: 'Solve a Rubics Cube', done: true},
    {id: 163232, skill: 'Drifting a Car', done: false }
];

module.exports = {

    getAll,
    getOne,
    create,
    deleteOne,
    updateOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    // URL params are strings convert to a number
    id = parseInt(id)
    return skills.find(skill => skill.id === id)

}

function create(skill) {
    skill.id = Date.now() % 100000
    skill.done = false
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id == id)
    skills.splice(idx, 1)
}

function updateOne(formData, id) {
    id = parseInt(id)
    const Skill = skills.find(skill => skill.id === id)
    skills.skill = formData.skill
    if(formData.done) {
        skills.done = true
    } else {
        skills.done = false
    }
}

