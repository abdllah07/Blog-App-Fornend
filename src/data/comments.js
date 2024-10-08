export const getCommentsData = async () => {
    return [
        {
            _id: Math.random().toString(),
            user: {
                _id: "a",
                name: "Mohammad Rezaii",
            },
            desc: "it was a nice post, Thank you!",
            post: "1",
            parent: null,
            replyOnUser: null,
            createdAt: new Date().toISOString(),
        },
        {
            _id: Math.random().toString(),
            user: {
                _id: "b",
                name: "Paul M. Williams",
            },
            desc: "a reply for Mohammad",
            post: "1",
            parent: "10",
            replyOnUser: "a",
            createdAt: new Date().toISOString(),
        },
        {
            _id: Math.random().toString(),
            user: {
                _id: "b",
                name: "Paul M. Williams",
            },
            desc: "keep it up bro <3",
            post: "1",
            parent: null,
            replyOnUser: null,
            createdAt: new Date().toISOString(),
        },
        {
            _id: Math.random().toString(),
            user: {
                _id: "c",
                name: "Jessica C. Stephens",
            },
            desc: "I'm always interested in your content :)",
            post: "1",
            parent: null,
            replyOnUser: null,
            createdAt: new Date().toISOString(),
        },
    ];
};