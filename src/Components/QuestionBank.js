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
    {
        id: 2,
        question: "I dislike conflict",
        options: [
			{key: 10, typeScore: [0,2,0,0,0,2,0,-2,3]},
			{key: 9, typeScore: [0,2,0,0,0,1,1,-2,2]},
			{key: 8, typeScore: [0,2,0,0,0,1,1,-2,2]},
			{key: 7, typeScore: [0,2,0,0,0,1,1,-2,2]},
			{key: 6, typeScore: [1,0,2,1,1,1,2,1,-1]},
			{key: 5, typeScore: [1,0,2,1,1,1,2,1,-1]},
			{key: 4, typeScore: [1,0,2,1,1,1,2,1,-1]},
			{key: 3, typeScore: [-1,-2,-1,0,0,-1,1,2,-2]},
			{key: 2, typeScore: [-1,-2,-1,0,0,-1,1,2,-2]},
			{key: 1, typeScore: [-1,-2,-1,0,0,-1,1,2,-2]},
			{key: 0, typeScore: [0,0,0,0,0,0,0,3,-2]}
		]
    },
    {
        id: 3,
        question: "I strive to be the best at what I do",
        options: [
            {key: 10, typeScore: [3,0,3,0,1,0,0,2,-2]},
            {key: 9, typeScore: [2,1,2,0,2,2,1,2,-1]},
            {key: 8, typeScore: [2,1,2,0,2,2,1,2,-1]},
            {key: 7, typeScore: [2,1,2,0,2,2,1,2,-1]},
            {key: 6, typeScore: [0,1,0,2,1,1,2,0,1]},
            {key: 5, typeScore: [0,1,0,2,1,1,2,0,1]},
            {key: 4, typeScore: [0,1,0,2,1,1,2,0,1]},
            {key: 3, typeScore: [-2,-1,-2,0,0,-1,-1,-2,2]},
            {key: 2, typeScore: [-2,-1,-2,0,0,-1,-1,-2,2]},
            {key: 1, typeScore: [-2,-1,-2,0,0,-1,-1,-2,2]},
            {key: 0, typeScore: [-2,0,-2,0,0,0,0,-2,3]}
        ]
    },
    {
        id: 4,
        question: "I think a lot about the future",
        options: [
            {key: 10, typeScore: [0,0,3,0,0,0,3,3,0]},
            {key: 9, typeScore: [1,1,2,0,-1,2,2,2,0]},
            {key: 8, typeScore: [1,1,2,0,-1,2,2,2,0]},
            {key: 7, typeScore: [1,1,2,0,-1,2,2,2,0]},
            {key: 6, typeScore: [1,1,0,1,1,0,0,0,1]},
            {key: 5, typeScore: [1,1,0,1,1,0,0,0,1]},
            {key: 4, typeScore: [1,1,0,1,1,0,0,0,1]},
            {key: 3, typeScore: [-1,-1,-2,2,2,-2,-2,-2,2]},
            {key: 2, typeScore: [-1,-1,-2,2,2,-2,-2,-2,2]},
            {key: 1, typeScore: [-1,-1,-2,2,2,-2,-2,-2,2]},
            {key: 0, typeScore: [0,0,-2,0,3,0,-2,-2,3]}
        ]
    },
    {
        id: 5,
        question: "I find it hard to make decisions",
        options: [
            {key: 10, typeScore: [0,0,0,0,0,3,0,-2,3]},
            {key: 9, typeScore: [1,1,-2,0,0,2,-2,-2,2]},
            {key: 8, typeScore: [1,1,-2,0,0,2,-2,-2,2]},
            {key: 7, typeScore: [1,1,-2,0,0,2,-2,-2,2]},
            {key: 6, typeScore: [0,1,0,1,1,0,0,0,1]},
            {key: 5, typeScore: [0,1,0,1,1,0,0,0,1]},
            {key: 4, typeScore: [0,1,0,1,1,0,0,0,1]},
            {key: 3, typeScore: [-1,-1,2,0,1,-2,2,2,-2]},
            {key: 2, typeScore: [-1,-1,2,0,1,-2,2,2,-2]},
            {key: 1, typeScore: [-1,-1,2,0,1,-2,2,2,-2]},
            {key: 0, typeScore: [0,0,0,0,0,-2,0,3,-2]}
        ]
    },
    {
        id: 6,
        question: "I rarely feel I have done something well enough",
        options: [
            {key: 10, typeScore: [3,0,0,0,0,2,0,0,0]},
            {key: 9, typeScore: [2,2,1,2,1,2,-1,-2,0]},
            {key: 8, typeScore: [2,2,1,2,1,2,-1,-2,0]},
            {key: 7, typeScore: [2,2,1,2,1,2,-1,-2,0]},
            {key: 6, typeScore: [0,0,1,1,0,0,0,0,1]},
            {key: 5, typeScore: [0,0,1,1,0,0,0,0,1]},
            {key: 4, typeScore: [0,0,1,1,0,0,0,0,1]},
            {key: 3, typeScore: [-2,-2,-1,-1,0,-2,2,2,0]},
            {key: 2, typeScore: [-2,-2,-1,-1,0,-2,2,2,0]},
            {key: 1, typeScore: [-2,-2,-1,-1,0,-2,2,2,0]},
            {key: 0, typeScore: [-2,-2,-1,-1,0,-2,1,3,-1]}
        ]
    },
    {
        id: 7,
        question: "I feel anxious a lot of the time",
        options: [
            {key: 10, typeScore: [1,0,0,0,0,3,0,-2,-1]},
            {key: 9, typeScore: [1,1,0,1,-1,2,-2,-2,0]},
            {key: 8, typeScore: [1,1,0,1,-1,2,-2,-2,0]},
            {key: 7, typeScore: [1,1,0,1,-1,2,-2,-2,0]},
            {key: 6, typeScore: [2,2,1,2,1,1,0,-1,1]},
            {key: 5, typeScore: [2,2,1,2,1,1,0,-1,1]},
            {key: 4, typeScore: [2,2,1,2,1,1,0,-1,1]},
            {key: 3, typeScore: [-1,-1,1,0,0,-2,2,2,1]},
            {key: 2, typeScore: [-1,-1,1,0,0,-2,2,2,1]},
            {key: 1, typeScore: [-1,-1,1,0,0,-2,2,2,1]},
            {key: 0, typeScore: [0,0,0,0,0,-2,0,3,0]}
        ]
    },
    {
        id: 8,
        question: "I seek input from others before making a decision",
        options: [
            {key: 10, typeScore: [1,2,0,0,-2,3,-1,-2,0]},
            {key: 9, typeScore: [1,2,0,0,0,2,-1,-2,-1]},
            {key: 8, typeScore: [1,2,0,0,0,2,-1,-2,-1]},
            {key: 7, typeScore: [1,2,0,0,0,2,-1,-2,-1]},
            {key: 6, typeScore: [1,1,0,1,1,1,0,0,1]},
            {key: 5, typeScore: [1,1,0,1,1,1,0,0,1]},
            {key: 4, typeScore: [1,1,0,1,1,1,0,0,1]},
            {key: 3, typeScore: [-1,-2,1,1,2,-1,1,2,2]},
            {key: 2, typeScore: [-1,-2,1,1,2,-1,1,2,2]},
            {key: 1, typeScore: [-1,-2,1,1,2,-1,1,2,2]},
            {key: 0, typeScore: [-2,-2,2,0,0,0,2,3,0]}
        ]
    },
    {
        id: 9,
        question: "I like having rules to follow",
        options: [
            {key: 10, typeScore: [3,0,0,0,0,0,-2,-2,0]},
            {key: 9, typeScore: [2,1,-1,0,0,2,-2,-2,2]},
            {key: 8, typeScore: [2,1,-1,0,0,2,-2,-2,2]},
            {key: 7, typeScore: [2,1,-1,0,0,2,-2,-2,2]},
            {key: 6, typeScore: [0,1,0,1,1,1,0,-1,1]},
            {key: 5, typeScore: [0,1,0,1,1,1,0,-1,1]},
            {key: 4, typeScore: [0,1,0,1,1,1,0,-1,1]},
            {key: 3, typeScore: [-2,-2,1,1,-1,-2,2,2,-2]},
            {key: 2, typeScore: [-2,-2,1,1,-1,-2,2,2,-2]},
            {key: 1, typeScore: [-2,-2,1,1,-1,-2,2,2,-2]},
            {key: 0, typeScore: [0,0,0,0,0,0,3,3,-2]}
        ]
    },
    {
        id: 10,
        question: "I really want life to be exciting",
        options: [
            {key: 10, typeScore: [0,1,2,0,-1,0,3,2,-1]},
            {key: 9, typeScore: [0,1,1,0,-1,1,2,2,-1]},
            {key: 8, typeScore: [0,1,1,0,-1,1,2,2,-1]},
            {key: 7, typeScore: [0,1,1,0,-1,1,2,2,-1]},
            {key: 6, typeScore: [2,2,1,2,0,1,0,0,0]},
            {key: 5, typeScore: [2,2,1,2,0,1,0,0,0]},
            {key: 4, typeScore: [2,2,1,2,0,1,0,0,0]},
            {key: 3, typeScore: [0,0,0,1,2,-1,-2,-2,2]},
            {key: 2, typeScore: [0,0,0,1,2,-1,-2,-2,2]},
            {key: 1, typeScore: [0,0,0,1,2,-1,-2,-2,2]},
            {key: 0, typeScore: [0,-1,-1,1,3,-1,-2,-2,3]}
        ]
    },
    {
        id: 11,
        question: "I like to be spontaneous",
        options: [
            {key: 10, typeScore: [0,0,0,0,-1,-2,3,0,-2]},
            {key: 9, typeScore: [-1,0,0,0,-1,-1,2,2,-1]},
            {key: 8, typeScore: [-1,0,0,0,-1,-1,2,2,-1]},
            {key: 7, typeScore: [-1,0,0,0,-1,-1,2,2,-1]},
            {key: 6, typeScore: [0,1,1,0,0,0,0,1,0]},
            {key: 5, typeScore: [0,1,1,0,0,0,0,1,0]},
            {key: 4, typeScore: [0,1,1,0,0,0,0,1,0]},
            {key: 3, typeScore: [2,1,1,0,2,2,-2,0,2]},
            {key: 2, typeScore: [2,1,1,0,2,2,-2,0,2]},
            {key: 1, typeScore: [2,1,1,0,2,2,-2,0,2]},
            {key: 0, typeScore: [1,0,0,0,3,2,-2,0,3]}
        ]
    },
    {
        id: 12,
        question: "I often feel that people don't understand me",
        options: [
            {key: 10, typeScore: [0,0,0,3,2,0,0,0,0]},
            {key: 9, typeScore: [0,0,0,2,1,0,0,0,0]},
            {key: 8, typeScore: [0,0,0,2,1,0,0,0,0]},
            {key: 7, typeScore: [0,0,0,2,1,0,0,0,0]},
            {key: 6, typeScore: [0,0,0,1,1,0,0,0,0]},
            {key: 5, typeScore: [0,0,0,1,1,0,0,0,0]},
            {key: 4, typeScore: [0,0,0,1,1,0,0,0,0]},
            {key: 3, typeScore: [0,0,0,0,0,0,0,0,0]},
            {key: 2, typeScore: [0,0,0,0,0,0,0,0,0]},
            {key: 1, typeScore: [0,0,0,0,0,0,0,0,0]},
            {key: 0, typeScore: [0,0,0,-2,-2,0,0,1,1]}
        ]
    },
    {
        id: 13,
        question: "I've been told that I'm too emotional sometimes",
        options: [
            {key: 10, typeScore: [0,0,0,3,-2,1,-2,0,-2]},
            {key: 9, typeScore: [0,1,0,2,-1,1,-2,1,-1]},
            {key: 8, typeScore: [0,1,0,2,-1,1,-2,1,-1]},
            {key: 7, typeScore: [0,1,0,2,-1,1,-2,1,-1]},
            {key: 6, typeScore: [1,1,0,0,0,1,0,1,0]},
            {key: 5, typeScore: [1,1,0,0,0,1,0,1,0]},
            {key: 4, typeScore: [1,1,0,0,0,1,0,1,0]},
            {key: 3, typeScore: [0,0,0,-1,1,0,2,0,2]},
            {key: 2, typeScore: [0,0,0,-1,1,0,2,0,2]},
            {key: 1, typeScore: [0,0,0,-1,1,0,2,0,2]},
            {key: 0, typeScore: [0,-1,-1,-2,3,-1,3,-1,2]}
        ]
    },
    {
        id: 14,
        question: "I really just want things to be peaceful",
        options: [
            {key: 10, typeScore: [0,2,0,0,2,0,-2,-2,3]},
            {key: 9, typeScore: [1,1,0,1,2,1,-1,-2,2]},
            {key: 8, typeScore: [1,1,0,1,2,1,-1,-2,2]},
            {key: 7, typeScore: [1,1,0,1,2,1,-1,-2,2]},
            {key: 6, typeScore: [1,1,0,1,1,0,0,-1,1]},
            {key: 5, typeScore: [1,1,0,1,1,0,0,-1,1]},
            {key: 4, typeScore: [1,1,0,1,1,0,0,-1,1]},
            {key: 3, typeScore: [0,0,0,0,0,0,1,2,0]},
            {key: 2, typeScore: [0,0,0,0,0,0,1,2,0]},
            {key: 1, typeScore: [0,0,0,0,0,0,1,2,0]},
            {key: 0, typeScore: [0,-1,0,-1,-2,-1,2,3,-2]}
        ]
    },
    {
        id: 15,
        question: "I can easily see lots of different points of view",
        options: [
            {key: 10, typeScore: [-2,1,0,0,0,3,1,-1,3]},
            {key: 9, typeScore: [-1,2,2,1,1,2,1,0,2]},
            {key: 8, typeScore: [-1,2,2,1,1,2,1,0,2]},
            {key: 7, typeScore: [-1,2,2,1,1,2,1,0,2]},
            {key: 6, typeScore: [0,2,1,1,1,1,0,0,1]},
            {key: 5, typeScore: [0,2,1,1,1,1,0,0,1]},
            {key: 4, typeScore: [0,2,1,1,1,1,0,0,1]},
            {key: 3, typeScore: [2,-1,-1,0,0,0,0,1,0]},
            {key: 2, typeScore: [2,-1,-1,0,0,0,0,1,0]},
            {key: 1, typeScore: [2,-1,-1,0,0,0,0,1,0]},
            {key: 0, typeScore: [3,-2,-1,0,0,-2,0,3,-2]}
        ]
    },
    {
        id: 16,
        question: "I like to take charge and to be in control",
        options: [
            {key: 10, typeScore: [3,1,2,0,-2,1,0,3,-2]},
            {key: 9, typeScore: [2,1,2,0,-1,1,1,2,-1]},
            {key: 8, typeScore: [2,1,2,0,-1,1,1,2,-1]},
            {key: 7, typeScore: [2,1,2,0,-1,1,1,2,-1]},
            {key: 6, typeScore: [0,1,1,0,0,0,1,0,0]},
            {key: 5, typeScore: [0,1,1,0,0,0,1,0,0]},
            {key: 4, typeScore: [0,1,1,0,0,0,1,0,0]},
            {key: 3, typeScore: [-2,0,0,1,2,-2,0,-2,2]},
            {key: 2, typeScore: [-2,0,0,1,2,-2,0,-2,2]},
            {key: 1, typeScore: [-2,0,0,1,2,-2,0,-2,2]},
            {key: 0, typeScore: [-2,0,-2,1,3,-2,0,-2,3]}
        ]
    },
    {
        id: 17,
        question: "I love a good debate",
        options: [
            {key: 10, typeScore: [0,-1,1,0,2,0,1,3,-2]},
            {key: 9, typeScore: [1,0,1,0,1,1,1,2,-2]},
            {key: 8, typeScore: [1,0,1,0,1,1,1,2,-2]},
            {key: 7, typeScore: [1,0,1,0,1,1,1,2,-2]},
            {key: 6, typeScore: [1,0,0,0,0,1,0,0,0]},
            {key: 5, typeScore: [1,0,0,0,0,1,0,0,0]},
            {key: 4, typeScore: [1,0,0,0,0,1,0,0,0]},
            {key: 3, typeScore: [0,0,0,0,0,0,0,-1,2]},
            {key: 2, typeScore: [0,0,0,0,0,0,0,-1,2]},
            {key: 1, typeScore: [0,0,0,0,0,0,0,-1,2]},
            {key: 0, typeScore: [0,-1,-1,0,0,-1,-1,-2,3]}
        ]
    },
    {
        id: 18,
        question: "I procrastinate a lot",
        options: [
            {key: 10, typeScore: [-1,-1,-2,3,2,1,1,-2,3]},
            {key: 9, typeScore: [-1,-1,-1,2,1,1,1,-2,2]},
            {key: 8, typeScore: [-1,-1,-1,2,1,1,1,-2,2]},
            {key: 7, typeScore: [-1,-1,-1,2,1,1,1,-2,2]},
            {key: 6, typeScore: [0,0,0,1,0,0,0,0,1]},
            {key: 5, typeScore: [0,0,0,1,0,0,0,0,1]},
            {key: 4, typeScore: [0,0,0,1,0,0,0,0,1]},
            {key: 3, typeScore: [1,1,2,-1,-1,-1,-1,2,-1]},
            {key: 2, typeScore: [1,1,2,-1,-1,-1,-1,2,-1]},
            {key: 1, typeScore: [1,1,2,-1,-1,-1,-1,2,-1]},
            {key: 0, typeScore: [1,2,3,-2,-2,-1,-1,3,-2]}
        ]
    },
    {
        id: 19,
        question: "I tend to put other people's needs first",
        options: [
            {key: 10, typeScore: [1,3,0,-2,-1,1,-1,-2,2]},
            {key: 9, typeScore: [1,2,0,-2,-1,1,-1,-2,2]},
            {key: 8, typeScore: [1,2,0,-2,-1,1,-1,-2,2]},
            {key: 7, typeScore: [1,2,0,-2,-1,1,-1,-2,2]},
            {key: 6, typeScore: [2,0,1,0,0,2,0,0,1]},
            {key: 5, typeScore: [2,0,1,0,0,2,0,0,1]},
            {key: 4, typeScore: [2,0,1,0,0,2,0,0,1]},
            {key: 3, typeScore: [0,-2,1,2,1,0,1,2,0]},
            {key: 2, typeScore: [0,-2,1,2,1,0,1,2,0]},
            {key: 1, typeScore: [0,-2,1,2,1,0,1,2,0]},
            {key: 0, typeScore: [-2,-3,0,3,2,-1,1,3,-2]}
        ]
    },
    {
        id: 20,
        question: "I take pride in being logical and analytical",
        options: [
            {key: 10, typeScore: [2,0,1,-2,3,2,1,0,0]},
            {key: 9, typeScore: [1,0,2,-2,2,2,1,1,1]},
            {key: 8, typeScore: [1,0,2,-2,2,2,1,1,1]},
            {key: 7, typeScore: [1,0,2,-2,2,2,1,1,1]},
            {key: 6, typeScore: [0,2,0,0,0,1,0,0,1]},
            {key: 5, typeScore: [0,2,0,0,0,1,0,0,1]},
            {key: 4, typeScore: [0,2,0,0,0,1,0,0,1]},
            {key: 3, typeScore: [-1,1,-1,-2,-2,-1,0,0,0]},
            {key: 2, typeScore: [-1,1,-1,-2,-2,-1,0,0,0]},
            {key: 1, typeScore: [-1,1,-1,-2,-2,-1,0,0,0]},
            {key: 0, typeScore: [-2,0,-2,3,-3,-2,-1,-1,-1]}
        ]
    },
    {
        id: 21,
        question: "I measure my self-worth by my achievements",
        options: [
            {key: 10, typeScore: [2,1,3,-2,-2,-1,-1,1,-2]},
            {key: 9, typeScore: [1,1,2,-1,-1,0,0,1,0]},
            {key: 8, typeScore: [1,1,2,-1,-1,0,0,1,0]},
            {key: 7, typeScore: [1,1,2,-1,-1,0,0,1,0]},
            {key: 6, typeScore: [0,0,0,0,0,0,0,0,1]},
            {key: 5, typeScore: [0,0,0,0,0,0,0,0,1]},
            {key: 4, typeScore: [0,0,0,0,0,0,0,0,1]},
            {key: 3, typeScore: [-1,0,-2,1,1,0,0,-1,1]},
            {key: 2, typeScore: [-1,0,-2,1,1,0,0,-1,1]},
            {key: 1, typeScore: [-1,0,-2,1,1,0,0,-1,1]},
            {key: 0, typeScore: [-2,-1,-3,2,2,-1,0,-2,0]}
        ]
    }
]

export default qBank;