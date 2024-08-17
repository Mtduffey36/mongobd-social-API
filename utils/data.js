const users = [
    {
        username: 'johnSmith',
        email: 'john@email.com',
    },
    {
        username: 'janeSmith',
        email: 'jane@email.com',
    }
];

const thoughts = [
    {
        thoughtText: 'Is this really happening?',
        username: 'johnSmith',
    },
    {
        thoughtText: 'Today is going to be a FUN day!',
        username: 'janeSmith',
    }
];

const reactions = [
    {
        reactionBody: 'It sure is!',
        username: 'janeSmith',
    },
    {
        reactionBody: 'Are you sure about that??',
        username: 'johnSmith',
    }
];
module.exports = { users, thoughts, reactions };