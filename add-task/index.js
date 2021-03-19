module.exports = async function (context, req) {
    context.log('Adding a task to the planner');
    const id = Math.floor(Math.random() * 100)
    const task = req.body;
    task.id = id;
    const responseMessage = { response: "Implement me!"};
    
    context.res = {
        status: 201,
        body: responseMessage
    };
}