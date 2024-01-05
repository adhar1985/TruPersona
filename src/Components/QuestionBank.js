const qBank = [
    {
        id: 1,
        question: "It is important to me to be liked by others",
        options: [
            {key: 10, typeScore: [0,3,0,0,0,0,0,-2,0]},
            {key: 9, typeScore: [1,2,2,2,-1,1,0,-2,1]},
            {key: 8, typeScore: [1,2,2,2,-1,1,0,-2,1]},
            {key: 7, typeScore: [1,2,2,2,-1,1,0,-2,1]},
            {key: 6, typeScore: [2,1,1,1,0,2,2,0,2]},
            {key: 5, typeScore: [2,1,1,1,0,2,2,0,2]},
            {key: 4, typeScore: [2,1,1,1,0,2,2,0,2]},
            {key: 3, typeScore: [0,-2,-2,-2,2,-1,0,2,0]},
            {key: 2, typeScore: [0,-2,-2,-2,2,-1,0,2,0]},
            {key: 1, typeScore: [0,-2,-2,-2,2,-1,0,2,0]},
            {key: 0, typeScore: [0,-2,-2,-2,0,0,0,3,0]}
        ]
    },
    // {
    //     id: 2,
    //     question: "I dislike conflict",
    //     options: [
    //         {key: 10, typeScore: [0,2,0,0,0,2,0,-2,3]},
    //         {key: 9, typeScore: [0,2,0,0,0,1,1,-2,2]},
    //         {key: 8, typeScore: [0,2,0,0,0,1,1,-2,2]},
    //         {key: 7, typeScore: [0,2,0,0,0,1,1,-2,2]},
    //         {key: 6, typeScore: [1,0,2,1,1,1,2,1,-1]},
    //         {key: 5, typeScore: [1,0,2,1,1,1,2,1,-1]},
    //         {key: 4, typeScore: [1,0,2,1,1,1,2,1,-1]},
    //         {key: 3, typeScore: [-1,-2,-1,0,0,-1,1,2,-2]},
    //         {key: 2, typeScore: [-1,-2,-1,0,0,-1,1,2,-2]},
    //         {key: 1, typeScore: [-1,-2,-1,0,0,-1,1,2,-2]},
    //         {key: 0, typeScore: [0,0,0,0,0,0,0,3,-2]}
    //     ]
    // },
    // {
    //     id: 3,
    //     question: "I strive to be the best at what I do",
    //     options: [
    //         {key: 10, typeScore: [3,0,3,0,1,0,0,2,-2]},
    //         {key: 9, typeScore: [2,1,2,0,2,2,1,2,-1]},
    //         {key: 8, typeScore: [2,1,2,0,2,2,1,2,-1]},
    //         {key: 7, typeScore: [2,1,2,0,2,2,1,2,-1]},
    //         {key: 6, typeScore: [0,1,0,2,1,1,2,0,1]},
    //         {key: 5, typeScore: [0,1,0,2,1,1,2,0,1]},
    //         {key: 4, typeScore: [0,1,0,2,1,1,2,0,1]},
    //         {key: 3, typeScore: [-2,-1,-2,0,0,-1,-1,-2,2]},
    //         {key: 2, typeScore: [-2,-1,-2,0,0,-1,-1,-2,2]},
    //         {key: 1, typeScore: [-2,-1,-2,0,0,-1,-1,-2,2]},
    //         {key: 0, typeScore: [-2,0,-2,0,0,0,0,-2,3]}
    //     ]
    // },
    // {
    //     id: 4,
    //     question: "I think a lot about the future",
    //     options: [
    //         {key: 10, typeScore: [0,0,3,0,0,0,3,3,0]},
    //         {key: 9, typeScore: [1,1,2,0,-1,2,2,2,0]},
    //         {key: 8, typeScore: [1,1,2,0,-1,2,2,2,0]},
    //         {key: 7, typeScore: [1,1,2,0,-1,2,2,2,0]},
    //         {key: 6, typeScore: [1,1,0,1,1,0,0,0,1]},
    //         {key: 5, typeScore: [1,1,0,1,1,0,0,0,1]},
    //         {key: 4, typeScore: [1,1,0,1,1,0,0,0,1]},
    //         {key: 3, typeScore: [-1,-1,-2,2,2,-2,-2,-2,2]},
    //         {key: 2, typeScore: [-1,-1,-2,2,2,-2,-2,-2,2]},
    //         {key: 1, typeScore: [-1,-1,-2,2,2,-2,-2,-2,2]},
    //         {key: 0, typeScore: [0,0,-2,0,3,0,-2,-2,3]}
    //     ]
    // },
    // {
    //     id: 5,
    //     question: "I find it hard to make decisions",
    //     options: [
    //         {key: 10, typeScore: [0,0,0,0,0,3,0,-2,3]},
    //         {key: 9, typeScore: [1,1,-2,0,0,2,-2,-2,2]},
    //         {key: 8, typeScore: [1,1,-2,0,0,2,-2,-2,2]},
    //         {key: 7, typeScore: [1,1,-2,0,0,2,-2,-2,2]},
    //         {key: 6, typeScore: [0,1,0,1,1,0,0,0,1]},
    //         {key: 5, typeScore: [0,1,0,1,1,0,0,0,1]},
    //         {key: 4, typeScore: [0,1,0,1,1,0,0,0,1]},
    //         {key: 3, typeScore: [-1,-1,2,0,1,-2,2,2,-2]},
    //         {key: 2, typeScore: [-1,-1,2,0,1,-2,2,2,-2]},
    //         {key: 1, typeScore: [-1,-1,2,0,1,-2,2,2,-2]},
    //         {key: 0, typeScore: [0,0,0,0,0,-2,0,3,-2]}
    //     ]
    // },
    // {
    //     id: 6,
    //     question: "I rarely feel I have done something well enough",
    //     options: [
    //         {key: 10, typeScore: [3,0,0,0,0,2,0,0,0]},
    //         {key: 9, typeScore: [2,2,1,2,1,2,-1,-2,0]},
    //         {key: 8, typeScore: [2,2,1,2,1,2,-1,-2,0]},
    //         {key: 7, typeScore: [2,2,1,2,1,2,-1,-2,0]},
    //         {key: 6, typeScore: [0,0,1,1,0,0,0,0,1]},
    //         {key: 5, typeScore: [0,0,1,1,0,0,0,0,1]},
    //         {key: 4, typeScore: [0,0,1,1,0,0,0,0,1]},
    //         {key: 3, typeScore: [-2,-2,-1,-1,0,-2,2,2,0]},
    //         {key: 2, typeScore: [-2,-2,-1,-1,0,-2,2,2,0]},
    //         {key: 1, typeScore: [-2,-2,-1,-1,0,-2,2,2,0]},
    //         {key: 0, typeScore: [-2,-2,-1,-1,0,-2,1,3,-1]}
    //     ]
    // },
    // {
    //     id: 7,
    //     question: "I feel anxious a lot of the time",
    //     options: [
    //         {key: 10, typeScore: [1,0,0,0,0,3,0,-2,-1]},
    //         {key: 9, typeScore: [1,1,0,1,-1,2,-2,-2,0]},
    //         {key: 8, typeScore: [1,1,0,1,-1,2,-2,-2,0]},
    //         {key: 7, typeScore: [1,1,0,1,-1,2,-2,-2,0]},
    //         {key: 6, typeScore: [2,2,1,2,1,1,0,-1,1]},
    //         {key: 5, typeScore: [2,2,1,2,1,1,0,-1,1]},
    //         {key: 4, typeScore: [2,2,1,2,1,1,0,-1,1]},
    //         {key: 3, typeScore: [-1,-1,1,0,0,-2,2,2,1]},
    //         {key: 2, typeScore: [-1,-1,1,0,0,-2,2,2,1]},
    //         {key: 1, typeScore: [-1,-1,1,0,0,-2,2,2,1]},
    //         {key: 0, typeScore: [0,0,0,0,0,-2,0,3,0]}
    //     ]
    // },
    // {
    //     id: 8,
    //     question: "I like having rules to follow",
    //     options: [
    //         {key: 10, typeScore: [3,0,0,0,0,0,-2,-2,0]},
    //         {key: 9, typeScore: [2,1,-1,0,0,2,-2,-2,2]},
    //         {key: 8, typeScore: [2,1,-1,0,0,2,-2,-2,2]},
    //         {key: 7, typeScore: [2,1,-1,0,0,2,-2,-2,2]},
    //         {key: 6, typeScore: [0,1,0,1,1,1,0,-1,1]},
    //         {key: 5, typeScore: [0,1,0,1,1,1,0,-1,1]},
    //         {key: 4, typeScore: [0,1,0,1,1,1,0,-1,1]},
    //         {key: 3, typeScore: [-2,-2,1,1,-1,-2,2,2,-2]},
    //         {key: 2, typeScore: [-2,-2,1,1,-1,-2,2,2,-2]},
    //         {key: 1, typeScore: [-2,-2,1,1,-1,-2,2,2,-2]},
    //         {key: 0, typeScore: [0,0,0,0,0,0,3,3,-2]}
    //     ]
    // },
    // {
    //     id: 9,
    //     question: "I really want life to be exciting",
    //     options: [
    //         {key: 10, typeScore: [0,1,2,0,-1,0,3,2,-1]},
    //         {key: 9, typeScore: [0,1,1,0,-1,1,2,2,-1]},
    //         {key: 8, typeScore: [0,1,1,0,-1,1,2,2,-1]},
    //         {key: 7, typeScore: [0,1,1,0,-1,1,2,2,-1]},
    //         {key: 6, typeScore: [2,2,1,2,0,1,0,0,0]},
    //         {key: 5, typeScore: [2,2,1,2,0,1,0,0,0]},
    //         {key: 4, typeScore: [2,2,1,2,0,1,0,0,0]},
    //         {key: 3, typeScore: [0,0,0,1,2,-1,-2,-2,2]},
    //         {key: 2, typeScore: [0,0,0,1,2,-1,-2,-2,2]},
    //         {key: 1, typeScore: [0,0,0,1,2,-1,-2,-2,2]},
    //         {key: 0, typeScore: [0,-1,-1,1,3,-1,-2,-2,3]}
    //     ]
    // },
    // {
    //     id: 10,
    //     question: "I am spontaneous and adventurous",
    //     options: [
    //         {key: 10, typeScore: [0,0,0,0,-1,-2,3,0,-2]},
    //         {key: 9, typeScore: [-1,0,0,0,-1,-1,2,2,-1]},
    //         {key: 8, typeScore: [-1,0,0,0,-1,-1,2,2,-1]},
    //         {key: 7, typeScore: [-1,0,0,0,-1,-1,2,2,-1]},
    //         {key: 6, typeScore: [0,1,1,0,0,0,0,1,0]},
    //         {key: 5, typeScore: [0,1,1,0,0,0,0,1,0]},
    //         {key: 4, typeScore: [0,1,1,0,0,0,0,1,0]},
    //         {key: 3, typeScore: [2,1,1,0,2,2,-2,0,2]},
    //         {key: 2, typeScore: [2,1,1,0,2,2,-2,0,2]},
    //         {key: 1, typeScore: [2,1,1,0,2,2,-2,0,2]},
    //         {key: 0, typeScore: [1,0,0,0,3,2,-2,0,3]}
    //     ]
    // },
    // {
    //     id: 11,
    //     question: "I often feel that people don't understand me",
    //     options: [
    //         {key: 10, typeScore: [0,0,0,3,2,0,0,0,0]},
    //         {key: 9, typeScore: [0,0,0,2,1,0,0,0,0]},
    //         {key: 8, typeScore: [0,0,0,2,1,0,0,0,0]},
    //         {key: 7, typeScore: [0,0,0,2,1,0,0,0,0]},
    //         {key: 6, typeScore: [0,0,0,1,1,0,0,0,0]},
    //         {key: 5, typeScore: [0,0,0,1,1,0,0,0,0]},
    //         {key: 4, typeScore: [0,0,0,1,1,0,0,0,0]},
    //         {key: 3, typeScore: [0,0,0,0,0,0,0,0,0]},
    //         {key: 2, typeScore: [0,0,0,0,0,0,0,0,0]},
    //         {key: 1, typeScore: [0,0,0,0,0,0,0,0,0]},
    //         {key: 0, typeScore: [0,0,0,-2,-2,0,0,1,1]}
    //     ]
    // },
    // {
    //     id: 12,
    //     question: "I've been told that I'm too emotional sometimes",
    //     options: [
    //         {key: 10, typeScore: [0,0,0,3,-2,1,-2,0,-2]},
    //         {key: 9, typeScore: [0,1,0,2,-1,1,-2,1,-1]},
    //         {key: 8, typeScore: [0,1,0,2,-1,1,-2,1,-1]},
    //         {key: 7, typeScore: [0,1,0,2,-1,1,-2,1,-1]},
    //         {key: 6, typeScore: [1,1,0,0,0,1,0,1,0]},
    //         {key: 5, typeScore: [1,1,0,0,0,1,0,1,0]},
    //         {key: 4, typeScore: [1,1,0,0,0,1,0,1,0]},
    //         {key: 3, typeScore: [0,0,0,-1,1,0,2,0,2]},
    //         {key: 2, typeScore: [0,0,0,-1,1,0,2,0,2]},
    //         {key: 1, typeScore: [0,0,0,-1,1,0,2,0,2]},
    //         {key: 0, typeScore: [0,-1,-1,-2,3,-1,3,-1,2]}
    //     ]
    // },
    // {
    //     id: 13,
    //     question: "I really just want things to be peaceful",
    //     options: [
    //         {key: 10, typeScore: [0,2,0,0,2,0,-2,-2,3]},
    //         {key: 9, typeScore: [1,1,0,1,2,1,-1,-2,2]},
    //         {key: 8, typeScore: [1,1,0,1,2,1,-1,-2,2]},
    //         {key: 7, typeScore: [1,1,0,1,2,1,-1,-2,2]},
    //         {key: 6, typeScore: [1,1,0,1,1,0,0,-1,1]},
    //         {key: 5, typeScore: [1,1,0,1,1,0,0,-1,1]},
    //         {key: 4, typeScore: [1,1,0,1,1,0,0,-1,1]},
    //         {key: 3, typeScore: [0,0,0,0,0,0,1,2,0]},
    //         {key: 2, typeScore: [0,0,0,0,0,0,1,2,0]},
    //         {key: 1, typeScore: [0,0,0,0,0,0,1,2,0]},
    //         {key: 0, typeScore: [0,-1,0,-1,-2,-1,2,3,-2]}
    //     ]
    // },
    // {
    //     id: 14,
    //     question: "I can easily see lots of different points of view",
    //     options: [
    //         {key: 10, typeScore: [-2,1,0,0,0,3,1,-1,3]},
    //         {key: 9, typeScore: [-1,2,2,1,1,2,1,0,2]},
    //         {key: 8, typeScore: [-1,2,2,1,1,2,1,0,2]},
    //         {key: 7, typeScore: [-1,2,2,1,1,2,1,0,2]},
    //         {key: 6, typeScore: [0,2,1,1,1,1,0,0,1]},
    //         {key: 5, typeScore: [0,2,1,1,1,1,0,0,1]},
    //         {key: 4, typeScore: [0,2,1,1,1,1,0,0,1]},
    //         {key: 3, typeScore: [2,-1,-1,0,0,0,0,1,0]},
    //         {key: 2, typeScore: [2,-1,-1,0,0,0,0,1,0]},
    //         {key: 1, typeScore: [2,-1,-1,0,0,0,0,1,0]},
    //         {key: 0, typeScore: [3,-2,-1,0,0,-2,0,2,-2]}
    //     ]
    // },
    // {
    //     id: 15,
    //     question: "I like to take charge and to be in control",
    //     options: [
    //         {key: 10, typeScore: [3,1,2,0,-2,1,0,3,-2]},
    //         {key: 9, typeScore: [2,1,2,0,-1,1,1,2,-1]},
    //         {key: 8, typeScore: [2,1,2,0,-1,1,1,2,-1]},
    //         {key: 7, typeScore: [2,1,2,0,-1,1,1,2,-1]},
    //         {key: 6, typeScore: [0,1,1,0,0,0,1,0,0]},
    //         {key: 5, typeScore: [0,1,1,0,0,0,1,0,0]},
    //         {key: 4, typeScore: [0,1,1,0,0,0,1,0,0]},
    //         {key: 3, typeScore: [-2,0,0,1,2,-2,0,-2,2]},
    //         {key: 2, typeScore: [-2,0,0,1,2,-2,0,-2,2]},
    //         {key: 1, typeScore: [-2,0,0,1,2,-2,0,-2,2]},
    //         {key: 0, typeScore: [-2,0,-2,1,3,-2,0,-2,3]}
    //     ]
    // },
    // {
    //     id: 16,
    //     question: "I love a good debate",
    //     options: [
    //         {key: 10, typeScore: [0,-1,1,0,2,0,1,3,-2]},
    //         {key: 9, typeScore: [1,0,1,0,1,1,1,2,-2]},
    //         {key: 8, typeScore: [1,0,1,0,1,1,1,2,-2]},
    //         {key: 7, typeScore: [1,0,1,0,1,1,1,2,-2]},
    //         {key: 6, typeScore: [1,0,0,0,0,1,0,0,0]},
    //         {key: 5, typeScore: [1,0,0,0,0,1,0,0,0]},
    //         {key: 4, typeScore: [1,0,0,0,0,1,0,0,0]},
    //         {key: 3, typeScore: [0,0,0,0,0,0,0,-1,2]},
    //         {key: 2, typeScore: [0,0,0,0,0,0,0,-1,2]},
    //         {key: 1, typeScore: [0,0,0,0,0,0,0,-1,2]},
    //         {key: 0, typeScore: [0,-1,-1,0,0,-1,-1,-2,3]}
    //     ]
    // },
    // {
    //     id: 17,
    //     question: "I procrastinate a lot",
    //     options: [
    //         {key: 10, typeScore: [-1,-1,-2,3,2,1,1,-2,3]},
    //         {key: 9, typeScore: [-1,-1,-1,2,1,1,1,-2,2]},
    //         {key: 8, typeScore: [-1,-1,-1,2,1,1,1,-2,2]},
    //         {key: 7, typeScore: [-1,-1,-1,2,1,1,1,-2,2]},
    //         {key: 6, typeScore: [0,0,0,1,0,0,0,0,1]},
    //         {key: 5, typeScore: [0,0,0,1,0,0,0,0,1]},
    //         {key: 4, typeScore: [0,0,0,1,0,0,0,0,1]},
    //         {key: 3, typeScore: [1,1,2,-1,-1,-1,-1,2,-1]},
    //         {key: 2, typeScore: [1,1,2,-1,-1,-1,-1,2,-1]},
    //         {key: 1, typeScore: [1,1,2,-1,-1,-1,-1,2,-1]},
    //         {key: 0, typeScore: [1,2,3,-2,-2,-1,-1,3,-2]}
    //     ]
    // },
    // {
    //     id: 18,
    //     question: "I tend to put other people's needs first",
    //     options: [
    //         {key: 10, typeScore: [1,3,0,-2,-1,1,-1,-2,2]},
    //         {key: 9, typeScore: [1,2,0,-2,-1,1,-1,-2,2]},
    //         {key: 8, typeScore: [1,2,0,-2,-1,1,-1,-2,2]},
    //         {key: 7, typeScore: [1,2,0,-2,-1,1,-1,-2,2]},
    //         {key: 6, typeScore: [2,0,1,0,0,2,0,0,1]},
    //         {key: 5, typeScore: [2,0,1,0,0,2,0,0,1]},
    //         {key: 4, typeScore: [2,0,1,0,0,2,0,0,1]},
    //         {key: 3, typeScore: [0,-2,1,2,1,0,1,2,0]},
    //         {key: 2, typeScore: [0,-2,1,2,1,0,1,2,0]},
    //         {key: 1, typeScore: [0,-2,1,2,1,0,1,2,0]},
    //         {key: 0, typeScore: [-2,-3,0,3,2,-1,1,3,-2]}
    //     ]
    // },
    // {
    //     id: 19,
    //     question: "I take pride in being logical and analytical",
    //     options: [
    //         {key: 10, typeScore: [2,0,1,-2,3,2,1,0,0]},
    //         {key: 9, typeScore: [1,0,2,-2,2,2,1,1,1]},
    //         {key: 8, typeScore: [1,0,2,-2,2,2,1,1,1]},
    //         {key: 7, typeScore: [1,0,2,-2,2,2,1,1,1]},
    //         {key: 6, typeScore: [0,2,0,0,0,1,0,0,1]},
    //         {key: 5, typeScore: [0,2,0,0,0,1,0,0,1]},
    //         {key: 4, typeScore: [0,2,0,0,0,1,0,0,1]},
    //         {key: 3, typeScore: [-1,1,-1,-2,-2,-1,0,0,0]},
    //         {key: 2, typeScore: [-1,1,-1,-2,-2,-1,0,0,0]},
    //         {key: 1, typeScore: [-1,1,-1,-2,-2,-1,0,0,0]},
    //         {key: 0, typeScore: [-2,0,-2,3,-3,-2,-1,-1,-1]}
    //     ]
    // },
    // {
    //     id: 20,
    //     question: "I measure my self-worth by my achievements",
    //     options: [
    //         {key: 10, typeScore: [2,1,3,-2,-2,-1,-1,1,-2]},
    //         {key: 9, typeScore: [1,1,2,-1,-1,0,0,1,0]},
    //         {key: 8, typeScore: [1,1,2,-1,-1,0,0,1,0]},
    //         {key: 7, typeScore: [1,1,2,-1,-1,0,0,1,0]},
    //         {key: 6, typeScore: [0,0,0,0,0,0,0,0,1]},
    //         {key: 5, typeScore: [0,0,0,0,0,0,0,0,1]},
    //         {key: 4, typeScore: [0,0,0,0,0,0,0,0,1]},
    //         {key: 3, typeScore: [-1,0,-2,1,1,0,0,-1,1]},
    //         {key: 2, typeScore: [-1,0,-2,1,1,0,0,-1,1]},
    //         {key: 1, typeScore: [-1,0,-2,1,1,0,0,-1,1]},
    //         {key: 0, typeScore: [-2,-1,-3,2,2,-1,0,-2,0]}
    //     ]
    // },
    // {
    //     id: 21,
    //     question: "I've been told I'm a perfectionist",
    //     options: [
    //         {key: 10, typeScore: [3,0,0,-1,0,1,-2,0,-2]},
    //         {key: 9, typeScore: [2,0,0,0,1,1,-1,0,-1]},
    //         {key: 8, typeScore: [2,0,0,0,1,1,-1,0,-1]},
    //         {key: 7, typeScore: [2,0,0,0,1,1,-1,0,-1]},
    //         {key: 6, typeScore: [0,1,0,0,0,0,0,0,0]},
    //         {key: 5, typeScore: [0,1,0,0,0,0,0,0,0]},
    //         {key: 4, typeScore: [0,1,0,0,0,0,0,0,0]},
    //         {key: 3, typeScore: [-1,1,0,1,0,0,1,0,2]},
    //         {key: 2, typeScore: [-1,1,0,1,0,0,1,0,2]},
    //         {key: 1, typeScore: [-1,1,0,1,0,0,1,0,2]},
    //         {key: 0, typeScore: [-2,0,-1,2,0,-1,2,0,3]}
    //     ]
    // },
    // {
    //     id: 22,
    //     question: "When things go wrong, I tend to stay upset for some time",
    //     options: [
    //         {key: 10, typeScore: [1,-1,-2,3,0,1,-3,-2,-3]},
    //         {key: 9, typeScore: [2,-1,-1,2,0,1,-2,-1,-2]},
    //         {key: 8, typeScore: [2,-1,-1,2,0,1,-2,-1,-2]},
    //         {key: 7, typeScore: [2,-1,-1,2,0,1,-2,-1,-2]},
    //         {key: 6, typeScore: [1,0,0,0,0,0,0,0,0]},
    //         {key: 5, typeScore: [1,0,0,0,0,0,0,0,0]},
    //         {key: 4, typeScore: [1,0,0,0,0,0,0,0,0]},
    //         {key: 3, typeScore: [-1,1,1,-2,0,-1,2,1,2]},
    //         {key: 2, typeScore: [-1,1,1,-2,0,-1,2,1,2]},
    //         {key: 1, typeScore: [-1,1,1,-2,0,-1,2,1,2]},
    //         {key: 0, typeScore: [-2,1,2,-3,1,-1,3,2,3]}
    //     ]
    // },
    // {
    //     id: 23,
    //     question: "I am very critical of myself",
    //     options: [
    //         {key: 10, typeScore: [3,1,0,2,-1,1,-2,-2,-2]},
    //         {key: 9, typeScore: [2,1,0,1,0,1,-1,-1,-1]},
    //         {key: 8, typeScore: [2,1,0,1,0,1,-1,-1,-1]},
    //         {key: 7, typeScore: [2,1,0,1,0,1,-1,-1,-1]},
    //         {key: 6, typeScore: [0,0,1,0,0,0,0,0,2]},
    //         {key: 5, typeScore: [0,0,1,0,0,0,0,0,2]},
    //         {key: 4, typeScore: [0,0,1,0,0,0,0,0,2]},
    //         {key: 3, typeScore: [-2,-1,0,-2,0,-1,1,1,1]},
    //         {key: 2, typeScore: [-2,-1,0,-2,0,-1,1,1,1]},
    //         {key: 1, typeScore: [-2,-1,0,-2,0,-1,1,1,1]},
    //         {key: 0, typeScore: [-3,-1,0,-2,1,-1,1,2,1]}
    //     ]
    // },
    // {
    //     id: 24,
    //     question: "Others tell me I worry too much",
    //     options: [
    //         {key: 10, typeScore: [1,0,-1,0,0,3,-2,-2,-2]},
    //         {key: 9, typeScore: [1,1,-1,1,0,2,-2,-2,-2]},
    //         {key: 8, typeScore: [1,1,-1,1,0,2,-2,-2,-2]},
    //         {key: 7, typeScore: [1,1,-1,1,0,2,-2,-2,-2]},
    //         {key: 6, typeScore: [0,1,0,1,0,0,0,0,0]},
    //         {key: 5, typeScore: [0,1,0,1,0,0,0,0,0]},
    //         {key: 4, typeScore: [0,1,0,1,0,0,0,0,0]},
    //         {key: 3, typeScore: [-1,-1,1,-1,0,-2,1,2,2]},
    //         {key: 2, typeScore: [-1,-1,1,-1,0,-2,1,2,2]},
    //         {key: 1, typeScore: [-1,-1,1,-1,0,-2,1,2,2]},
    //         {key: 0, typeScore: [-1,-1,1,-1,0,-3,2,2,3]}
    //     ]
    // },
    // {
    //     id: 25,
    //     question: "I often feel sorry for myself",
    //     options: [
    //         {key: 10, typeScore: [0,0,-2,3,0,0,-2,-2,-1]},
    //         {key: 9, typeScore: [0,0,-1,2,0,0,-1,-1,0]},
    //         {key: 8, typeScore: [0,0,-1,2,0,0,-1,-1,0]},
    //         {key: 7, typeScore: [0,0,-1,2,0,0,-1,-1,0]},
    //         {key: 6, typeScore: [1,1,0,0,0,1,0,0,0]},
    //         {key: 5, typeScore: [1,1,0,0,0,1,0,0,0]},
    //         {key: 4, typeScore: [1,1,0,0,0,1,0,0,0]},
    //         {key: 3, typeScore: [1,0,1,-2,0,1,1,1,1]},
    //         {key: 2, typeScore: [1,0,1,-2,0,1,1,1,1]},
    //         {key: 1, typeScore: [1,0,1,-2,0,1,1,1,1]},
    //         {key: 0, typeScore: [0,0,2,-3,1,0,2,2,1]}
    //     ]
    // },
    // {
    //     id: 26,
    //     question: "Other people's emotions really affect me",
    //     options: [
    //         {key: 10, typeScore: [-1,3,-1,-1,0,2,-3,-2,-2]},
    //         {key: 9, typeScore: [0,2,-1,0,-1,1,-2,-1,-1]},
    //         {key: 8, typeScore: [0,2,-1,0,-1,1,-2,-1,-1]},
    //         {key: 7, typeScore: [0,2,-1,0,-1,1,-2,-1,-1]},
    //         {key: 6, typeScore: [1,0,0,0,0,1,-1,0,1]},
    //         {key: 5, typeScore: [1,0,0,0,0,1,-1,0,1]},
    //         {key: 4, typeScore: [1,0,0,0,0,1,-1,0,1]},
    //         {key: 3, typeScore: [1,-2,1,1,1,-1,2,1,2]},
    //         {key: 2, typeScore: [1,-2,1,1,1,-1,2,1,2]},
    //         {key: 1, typeScore: [1,-2,1,1,1,-1,2,1,2]},
    //         {key: 0, typeScore: [0,-3,0,2,1,-2,3,2,1]}
    //     ]
    // },
    // {
    //     id: 27,
    //     question: "I care deeply about helping people",
    //     options: [
    //         {key: 10, typeScore: [1,3,0,0,0,2,0,-1,0]},
    //         {key: 9, typeScore: [1,2,0,0,0,1,0,0,1]},
    //         {key: 8, typeScore: [1,2,0,0,0,1,0,0,1]},
    //         {key: 7, typeScore: [1,2,0,0,0,1,0,0,1]},
    //         {key: 6, typeScore: [0,0,1,1,1,0,1,0,2]},
    //         {key: 5, typeScore: [0,0,1,1,1,0,1,0,2]},
    //         {key: 4, typeScore: [0,0,1,1,1,0,1,0,2]},
    //         {key: 3, typeScore: [-1,-2,0,0,1,-1,0,1,1]},
    //         {key: 2, typeScore: [-1,-2,0,0,1,-1,0,1,1]},
    //         {key: 1, typeScore: [-1,-2,0,0,1,-1,0,1,1]},
    //         {key: 0, typeScore: [-2,-3,0,0,1,-2,0,2,-1]}
    //     ]
    // },
    // {
    //     id: 28,
    //     question: "I like working on problems by myself",
    //     options: [
    //         {key: 10, typeScore: [2,-2,0,0,3,-2,1,0,2]},
    //         {key: 9, typeScore: [1,-1,1,0,2,-1,0,1,1]},
    //         {key: 8, typeScore: [1,-1,1,0,2,-1,0,1,1]},
    //         {key: 7, typeScore: [1,-1,1,0,2,-1,0,1,1]},
    //         {key: 6, typeScore: [0,0,1,1,0,0,0,0,0]},
    //         {key: 5, typeScore: [0,0,1,1,0,0,0,0,0]},
    //         {key: 4, typeScore: [0,0,1,1,0,0,0,0,0]},
    //         {key: 3, typeScore: [-1,1,0,0,-2,1,0,1,-1]},
    //         {key: 2, typeScore: [-1,1,0,0,-2,1,0,1,-1]},
    //         {key: 1, typeScore: [-1,1,0,0,-2,1,0,1,-1]},
    //         {key: 0, typeScore: [-2,2,-1,0,-3,2,-1,0,-2]}
    //     ]
    // },
    // {
    //     id: 29,
    //     question: "I'm a very private person, I don't let many people in",
    //     options: [
    //         {key: 10, typeScore: [1,-2,1,-3,3,1,1,2,2]},
    //         {key: 9, typeScore: [1,-1,1,-2,2,1,1,1,1]},
    //         {key: 8, typeScore: [1,-1,1,-2,2,1,1,1,1]},
    //         {key: 7, typeScore: [1,-1,1,-2,2,1,1,1,1]},
    //         {key: 6, typeScore: [0,0,0,0,0,0,0,0,0]},
    //         {key: 5, typeScore: [0,0,0,0,0,0,0,0,0]},
    //         {key: 4, typeScore: [0,0,0,0,0,0,0,0,0]},
    //         {key: 3, typeScore: [0,1,-1,2,-2,-1,-1,-1,-1]},
    //         {key: 2, typeScore: [0,1,-1,2,-2,-1,-1,-1,-1]},
    //         {key: 1, typeScore: [0,1,-1,2,-2,-1,-1,-1,-1]},
    //         {key: 0, typeScore: [-1,2,-1,3,-3,-2,-2,2,2]}
    //     ]
    // },
    // {
    //     id: 30,
    //     question: "It's important to me to feel successful",
    //     options: [
    //         {key: 10, typeScore: [0,0,3,0,0,0,0,2,-2]},
    //         {key: 9, typeScore: [1,1,2,1,-1,1,0,1,-1]},
    //         {key: 8, typeScore: [1,1,2,1,-1,1,0,1,-1]},
    //         {key: 7, typeScore: [1,1,2,1,-1,1,0,1,-1]},
    //         {key: 6, typeScore: [0,0,0,1,0,0,1,1,0]},
    //         {key: 5, typeScore: [0,0,0,1,0,0,1,1,0]},
    //         {key: 4, typeScore: [0,0,0,1,0,0,1,1,0]},
    //         {key: 3, typeScore: [0,0,-2,0,0,0,1,-2,1]},
    //         {key: 2, typeScore: [0,0,-2,0,0,0,1,-2,1]},
    //         {key: 1, typeScore: [0,0,-2,0,0,0,1,-2,1]},
    //         {key: 0, typeScore: [-1,-1,-3,-2,1,-1,0,-2,2]}
    //     ]
    // },
    // {
    //     id: 31,
    //     question: "I stop doing things when they stop feeling enjoyable",
    //     options: [
    //         {key: 10, typeScore: [-2,-1,1,3,1,-2,3,0,2]},
    //         {key: 9, typeScore: [-1,0,1,2,1,-1,2,0,1]},
    //         {key: 8, typeScore: [-1,0,1,2,1,-1,2,0,1]},
    //         {key: 7, typeScore: [-1,0,1,2,1,-1,2,0,1]},
    //         {key: 6, typeScore: [0,1,0,0,0,0,0,1,0]},
    //         {key: 5, typeScore: [0,1,0,0,0,0,0,1,0]},
    //         {key: 4, typeScore: [0,1,0,0,0,0,0,1,0]},
    //         {key: 3, typeScore: [1,1,-1,-2,-1,1,-2,1,1]},
    //         {key: 2, typeScore: [1,1,-1,-2,-1,1,-2,1,1]},
    //         {key: 1, typeScore: [1,1,-1,-2,-1,1,-2,1,1]},
    //         {key: 0, typeScore: [2,2,-1,-3,-1,2,-3,0,2]}
    //     ]
    // },
    // {
    //     id: 32,
    //     question: "I hate being bored",
    //     options: [
    //         {key: 10, typeScore: [0,1,2,-2,1,0,3,2,-2]},
    //         {key: 9, typeScore: [1,1,1,-1,1,0,2,1,-1]},
    //         {key: 8, typeScore: [1,1,1,-1,1,0,2,1,-1]},
    //         {key: 7, typeScore: [1,1,1,-1,1,0,2,1,-1]},
    //         {key: 6, typeScore: [1,0,0,0,0,1,0,0,0]},
    //         {key: 5, typeScore: [1,0,0,0,0,1,0,0,0]},
    //         {key: 4, typeScore: [1,0,0,0,0,1,0,0,0]},
    //         {key: 3, typeScore: [0,-1,-1,1,0,1,-2,-1,1]},
    //         {key: 2, typeScore: [0,-1,-1,1,0,1,-2,-1,1]},
    //         {key: 1, typeScore: [0,-1,-1,1,0,1,-2,-1,1]},
    //         {key: 0, typeScore: [0,-1,-2,2,-1,0,-3,-2,2]}
    //     ]
    // },
    // {
    //     id: 33,
    //     question: "When there’s a problem I am more likely to initially",
    //     options: [
    //         {key: 1, typeScore: [3,-2,3,-2,3,0,0,0,0], label: "Focus on the logical details that will help us to solve it - emotions will just get in the way"},
    //         {key: 2, typeScore: [0,0,0,3,-2,3,-2,3,-2], label: "Express my feelings/opinions about it - people need to understand this is a big deal and we need to do something about it"},
    //         {key: 3, typeScore: [-2,3,-2,0,0,-2,3,-2,3], label: "Focus on the positives - it’s usually not all that bad"}
    //     ]
    // },
    // {
    //     id: 34,
    //     question: "Choose the statement that most accurately describes you",
    //     options: [
    //         {key: 1, typeScore: [-2,3,0,0,0,0,3,-2,3], label: "I am generally an optimistic person and like helping others to be happy"},
    //         {key: 2, typeScore: [0,0,-2,3,-2,3,-2,3,-2], label: "I tend to have strong feelings - people can tell when I’m not happy about something"},
    //         {key: 3, typeScore: [3,-2,3,-2,3,-2,0,0,0], label: "I am quite a logical person and try not to let my feelings affect my actions"}
    //     ]
    // },
    {
        id: 35,
        question: "Choose the statement that most accurately describes you",
        options: [
            {key: 1, typeScore: [0,0,3,-2,-2,0,3,3,-2], label: "I am independent and assertive, I like to make things happen"},
            {key: 2, typeScore: [-2,-2,-2,3,3,-2,0,-2,3], label: "I enjoy time on my own and don’t feel the need to be productive all the time"},
            {key: 3, typeScore: [3,3,0,0,-2,3,-2,0,0], label: "I am very responsible, I keep my commitments and want to be seen as reliable"}
        ]
    },
    {
        id: 36,
        question: "A lot depends on me",
        options: [
            {key: 10, level2Options: [
                {key: "10_1", typeScore: [0,3,0,-1,-1,3,0,0,-2], label: "I feel a strong sense of responsibility for others"},
                {key: "10_2", typeScore: [3,0,3,-1,0,0,0,3,-2], label: "I tend to know how to do things well/work harder than other people"}
            ]},
            {key: 9, level2Options: [
                {key: "9_1", typeScore: [0,2,0,-1,-1,2,0,0,-1], label: "I feel a strong sense of responsibility for others"},
                {key: "9_2", typeScore: [3,0,2,-1,0,0,0,2,-1], label: "I tend to know how to do things well/work harder than other people"}
            ]},
            {key: 8, level2Options: [
                {key: "8_1", typeScore: [0,2,0,-1,-1,2,0,0,-1], label: "I feel a strong sense of responsibility for others"},
                {key: "8_2", typeScore: [3,0,2,-1,0,0,0,2,-1], label: "I tend to know how to do things well/work harder than other people"}
            ]},
            {key: 7, level2Options: [
                {key: "7_1", typeScore: [0,2,0,-1,-1,2,0,0,-1], label: "I feel a strong sense of responsibility for others"},
                {key: "7_2", typeScore: [3,0,2,-1,0,0,0,2,-1], label: "I tend to know how to do things well/work harder than other people"}
            ]},
            {key: 6, typeScore: [1,1,0,1,1,0,1,0,1]},
            {key: 5, typeScore: [1,1,0,1,1,0,1,0,1]},
            {key: 4, typeScore: [1,1,0,1,1,0,1,0,1]},
            {key: 3, typeScore: [-2,-2,-2,1,2,-2,1,-2,2]},
            {key: 2, typeScore: [-2,-2,-2,1,2,-2,1,-2,2]},
            {key: 1, typeScore: [-2,-2,-2,1,2,-2,1,-2,2]},
            {key: 0, typeScore: [-2,-2,-2,3,3,-2,0,-2,3]}
        ]
    },
    // {
    //     id: 37,
    //     question: "I hate mistakes",
    //     options: [
    //         {key: 10, level2Options: [
    //             {key: "10_1", typeScore: [2,0,3,-2,0,1,0,3,-2], label: "Mistakes get in the way of success/progression"},
    //             {key: "10_2", typeScore: [3,2,1,1,-2,2,0,-2,1], label: "Mistakes reflect badly on me"}
    //         ]},
    //         {key: 9, level2Options: [
    //             {key: "9_1", typeScore: [1,0,2,-2,0,1,0,2,-2], label: "Mistakes get in the way of success/progression"},
    //             {key: "9_2", typeScore: [2,2,1,1,-2,2,0,-2,0], label: "Mistakes reflect badly on me"}
    //         ]},
    //         {key: 8, level2Options: [
    //             {key: "8_1", typeScore: [1,0,2,-2,0,1,0,2,-2], label: "Mistakes get in the way of success/progression"},
    //             {key: "8_2", typeScore: [2,2,1,1,-2,2,0,-2,0], label: "Mistakes reflect badly on me"}
    //         ]},
    //         {key: 7, level2Options: [
    //             {key: "7_1", typeScore: [1,0,2,-2,0,1,0,2,-2], label: "Mistakes get in the way of success/progression"},
    //             {key: "7_2", typeScore: [2,2,1,1,-2,2,0,-2,0], label: "Mistakes reflect badly on me"}
    //         ]},
    //         {key: 6, typeScore: [-1,0,0,1,1,0,1,-1,1]},
    //         {key: 5, typeScore: [-1,0,0,1,1,0,1,-1,1]},
    //         {key: 4, typeScore: [-1,0,0,1,1,0,1,-1,1]},
    //         {key: 3, typeScore: [-2,-1,-2,1,2,-1,1,-2,2]},
    //         {key: 2, typeScore: [-2,-1,-2,1,2,-1,1,-2,2]},
    //         {key: 1, typeScore: [-2,-1,-2,1,2,-1,1,-2,2]},
    //         {key: 0, typeScore: [-2,0,0,0,0,0,0,-2,3]}
    //     ]
    // },
    // {
    //     id: 38,
    //     question: "I often try to win people over",
    //     options: [
    //         {key: 10, level2Options: [
    //             {key: "10_1", typeScore: [0,3,2,2,-2,2,0,-2,1], label: "I want them to like me"},
    //             {key: "10_2", typeScore: [1,0,2,0,0,0,2,3,-2], label: "I want them to do what I want them to do"}
    //         ]},
    //         {key: 9, level2Options: [
    //             {key: "9_1", typeScore: [0,2,2,2,-2,1,0,-2,1], label: "I want them to like me"},
    //             {key: "9_2", typeScore: [1,0,2,0,0,0,1,2,-2], label: "I want them to do what I want them to do"}
    //         ]},
    //         {key: 8, level2Options: [
    //             {key: "8_1", typeScore: [0,2,2,2,-2,1,0,-2,1], label: "I want them to like me"},
    //             {key: "8_2", typeScore: [1,0,2,0,0,0,1,2,-2], label: "I want them to do what I want them to do"}
    //         ]},
    //         {key: 7, level2Options: [
    //             {key: "7_1", typeScore: [0,2,2,2,-2,1,0,-2,1], label: "I want them to like me"},
    //             {key: "7_2", typeScore: [1,0,2,0,0,0,1,2,-2], label: "I want them to do what I want them to do"}
    //         ]},
    //         {key: 6, typeScore: [1,1,1,1,0,1,0,0,0]},
    //         {key: 5, typeScore: [1,1,1,1,0,1,0,0,0]},
    //         {key: 4, typeScore: [1,1,1,1,0,1,0,0,0]},
    //         {key: 3, typeScore: [0,-2,-2,-1,2,-2,1,-1,2]},
    //         {key: 2, typeScore: [0,-2,-2,-1,2,-2,1,-1,2]},
    //         {key: 1, typeScore: [0,-2,-2,-1,2,-2,1,-1,2]},
    //         {key: 0, typeScore: [0,-2,-2,0,3,0,0,-1,3]}
    //     ]
    // },
    // {
    //     id: 39,
    //     question: "My brain feels busy most of the time",
    //     options: [
    //         {key: 10, level2Options: [
    //             {key: "10_1", typeScore: [0,0,3,0,0,0,3,3,0], label: "Future plans/goals"},
    //             {key: "10_2", typeScore: [0,3,0,0,0,0,0,0,1], label: "Other people/relationships"},
    //             {key: "10_3", typeScore: [3,0,0,0,0,3,0,0,0], label: "Doing something right/making the right decision"},
    //             {key: "10_4", typeScore: [0,0,0,2,2,0,0,0,1], label: "Something I'm interested in right now"}
    //         ]},
    //         {key: 9, level2Options: [
    //             {key: "9_1", typeScore: [0,0,2,0,0,0,2,2,0], label: "Future plans/goals"},
    //             {key: "9_2", typeScore: [0,2,0,0,0,0,0,0,0], label: "Other people/relationships"},
    //             {key: "9_3", typeScore: [2,0,0,0,0,2,0,0,0], label: "Doing something right/making the right decision"},
    //             {key: "9_4", typeScore: [0,0,0,1,1,0,0,0,0], label: "Something I'm interested in right now"}
    //         ]},
    //         {key: 8, level2Options: [
    //             {key: "8_1", typeScore: [0,0,2,0,0,0,2,2,0], label: "Future plans/goals"},
    //             {key: "8_2", typeScore: [0,2,0,0,0,0,0,0,0], label: "Other people/relationships"},
    //             {key: "8_3", typeScore: [2,0,0,0,0,2,0,0,0], label: "Doing something right/making the right decision"},
    //             {key: "8_4", typeScore: [0,0,0,1,1,0,0,0,0], label: "Something I'm interested in right now"}
    //         ]},
    //         {key: 7, level2Options: [
    //             {key: "7_1", typeScore: [0,0,2,0,0,0,2,2,0], label: "Future plans/goals"},
    //             {key: "7_2", typeScore: [0,2,0,0,0,0,0,0,0], label: "Other people/relationships"},
    //             {key: "7_3", typeScore: [2,0,0,0,0,2,0,0,0], label: "Doing something right/making the right decision"},
    //             {key: "7_4", typeScore: [0,0,0,1,1,0,0,0,0], label: "Something I'm interested in right now"}
    //         ]},
    //         {key: 6, typeScore: [1,1,0,1,1,0,0,0,0]},
    //         {key: 5, typeScore: [1,1,0,1,1,0,0,0,0]},
    //         {key: 4, typeScore: [1,1,0,1,1,0,0,0,0]},
    //         {key: 3, typeScore: [0,0,0,1,1,-1,-1,-1,2]},
    //         {key: 2, typeScore: [0,0,0,1,1,-1,-1,-1,2]},
    //         {key: 1, typeScore: [0,0,0,1,1,-1,-1,-1,2]},
    //         {key: 0, typeScore: [-2,-2,-1,0,0,-2,-2,-2,3]}
    //     ]
    // }
]

export default qBank;