import React from 'react'

let database = [
    {
      id: 1,
      student: "Evelyn",
      assignment: "SCRUM",
      difficulty: 3,
      liking: 4
    },
    {
      id: 2,
      student: "Evelyn",
      assignment: "W1D1-1",
      difficulty: 3,
      liking: 3
    },
    {
      id: 3,
      student: "Evelyn",
      assignment: "W1D2-1",
      difficulty: 1,
      liking: 3
    },
    {
      id: 4,
      student: "Evelyn",
      assignment: "W1D2-2",
      difficulty: 1,
      liking: 4
    },
    {
      id: 5,
      student: "Evelyn",
      assignment: "W1D2-3",
      difficulty: 2,
      liking: 3
    },
    {
      id: 6,
      student: "Evelyn",
      assignment: "W1D2-4",
      difficulty: 3,
      liking: 4
    },
    {
      id: 7,
      student: "Evelyn",
      assignment: "W1D2-5",
      difficulty: 3,
      liking: 4
    },
    {
      id: 8,
      student: "Evelyn",
      assignment: "W1D3-1",
      difficulty: 3,
      liking: 4
    },
    {
      id: 9,
      student: "Evelyn",
      assignment: "W1D3-2",
      difficulty: 3,
      liking: 4
    },
    {
      id: 10,
      student: "Evelyn",
      assignment: "W1D3-4",
      difficulty: 4,
      liking: 4
    },
    {
      id: 11,
      student: "Evelyn",
      assignment: "W1D3-5",
      difficulty: 4,
      liking: 4
    },
    {
      id: 12,
      student: "Evelyn",
      assignment: "W1D3 - Project - Guess-the-number",
      difficulty: 5,
      liking: 5
    },
    {
      id: 13,
      student: "Evelyn",
      assignment: "W1D4-1",
      difficulty: 4,
      liking: 5
    },
    {
      id: 14,
      student: "Evelyn",
      assignment: "W1D4 - Project - Kleurentoggle",
      difficulty: 3,
      liking: 4
    },
    {
      id: 15,
      student: "Evelyn",
      assignment: "W1D5 - Project - Galgje",
      difficulty: 3,
      liking: 3
    },
    {
      id: 16,
      student: "Evelyn",
      assignment: "W2D1-1",
      difficulty: 1,
      liking: 5
    },
    {
      id: 17,
      student: "Evelyn",
      assignment: "W2D1-2",
      difficulty: 2,
      liking: 5
    },
    {
      id: 18,
      student: "Evelyn",
      assignment: "W2D2-1",
      difficulty: 3,
      liking: 4
    },
    {
      id: 19,
      student: "Evelyn",
      assignment: "W2D2-2",
      difficulty: 3,
      liking: 4
    },
    {
      id: 20,
      student: "Evelyn",
      assignment: "W2D2-3",
      difficulty: 3,
      liking: 4
    },
    {
      id: 21,
      student: "Evelyn",
      assignment: "W2D3-1",
      difficulty: 4,
      liking: 4
    },
    {
      id: 22,
      student: "Evelyn",
      assignment: "W2D3-2",
      difficulty: 1,
      liking: 3
    },
    {
      id: 23,
      student: "Evelyn",
      assignment: "W2D3-3",
      difficulty: 4,
      liking: 4
    },
    {
      id: 24,
      student: "Evelyn",
      assignment: "W2D4-1",
      difficulty: 1,
      liking: 3
    },
    {
      id: 25,
      student: "Evelyn",
      assignment: "W2D4-2",
      difficulty: 4,
      liking: 4
    },
    {
      id: 26,
      student: "Evelyn",
      assignment: "W2D4-3",
      difficulty: 1,
      liking: 3
    },
    {
      id: 27,
      student: "Evelyn",
      assignment: "W2D5 - Project - Filmzoeker",
      difficulty: 3,
      liking: 4
    },
    {
      id: 28,
      student: "Evelyn",
      assignment: "W3D1-1",
      difficulty: 3,
      liking: 4
    },
    {
      id: 29,
      student: "Evelyn",
      assignment: "W3D1-2",
      difficulty: 2,
      liking: 4
    },
    {
      id: 30,
      student: "Evelyn",
      assignment: "W3D1-3",
      difficulty: 3,
      liking: 4
    },
    {
      id: 31,
      student: "Evelyn",
      assignment: "W3D1-4",
      difficulty: 3,
      liking: 3
    },
    {
      id: 32,
      student: "Evelyn",
      assignment: "W3D2-1",
      difficulty: 2,
      liking: 4
    },
    {
      id: 33,
      student: "Evelyn",
      assignment: "W3D2-2",
      difficulty: 3,
      liking: 3
    },
    {
      id: 34,
      student: "Evelyn",
      assignment: "W3D2-3",
      difficulty: 3,
      liking: 5
    },
    {
      id: 35,
      student: "Evelyn",
      assignment: "W3D3-1",
      difficulty: 4,
      liking: 4
    },
    {
      id: 36,
      student: "Evelyn",
      assignment: "W3D3-2",
      difficulty: 4,
      liking: 5
    },
    {
      id: 37,
      student: "Evelyn",
      assignment: "W3D3-3",
      difficulty: 3,
      liking: 5
    },
    {
      id: 38,
      student: "Evelyn",
      assignment: "W3D3-4",
      difficulty: 4,
      liking: 5
    },
    {
      id: 39,
      student: "Evelyn",
      assignment: "W3D4-1",
      difficulty: 5,
      liking: 5
    },
    {
      id: 40,
      student: "Evelyn",
      assignment: "W3D4-2",
      difficulty: 1,
      liking: 5
    },
    {
      id: 41,
      student: "Evelyn",
      assignment: "W3D5 - Project - Todo-List",
      difficulty: 2,
      liking: 5
    },
    {
      id: 42,
      student: "Evelyn",
      assignment: "W4D2-1",
      difficulty: 1,
      liking: 5
    },
    {
      id: 43,
      student: "Evelyn",
      assignment: "W4D2-2",
      difficulty: 1,
      liking: 5
    },
    {
      id: 44,
      student: "Evelyn",
      assignment: "W4D2-3",
      difficulty: 1,
      liking: 5
    },
    {
      id: 45,
      student: "Evelyn",
      assignment: "W4D2-4",
      difficulty: 1,
      liking: 5
    },
    {
      id: 46,
      student: "Evelyn",
      assignment: "W4D3-1",
      difficulty: 1,
      liking: 5
    },
    {
      id: 47,
      student: "Evelyn",
      assignment: "W4D3-2",
      difficulty: 1,
      liking: 5
    },
    {
      id: 48,
      student: "Evelyn",
      assignment: "W4D3-3",
      difficulty: 1,
      liking: 5
    },
    {
      id: 49,
      student: "Evelyn",
      assignment: "W4D3-4",
      difficulty: 1,
      liking: 5
    },
    {
      id: 50,
      student: "Evelyn",
      assignment: "W4D3-5",
      difficulty: 1,
      liking: 5
    },
    {
      id: 51,
      student: "Evelyn",
      assignment: "W4D3 - Project - Next-Level CSS",
      difficulty: 1,
      liking: 5
    },
    {
      id: 52,
      student: "Evelyn",
      assignment: "W5D4-1",
      difficulty: 3,
      liking: 4
    },
    {
      id: 53,
      student: "Evelyn",
      assignment: "W5D5 - Project - Lil_Playlist",
      difficulty: 4,
      liking: 3
    },
    {
      id: 54,
      student: "Evelyn",
      assignment: "W6D1-1",
      difficulty: 5,
      liking: 5
    },
    {
      id: 55,
      student: "Evelyn",
      assignment: "W6D2-1",
      difficulty: 4,
      liking: 3
    },
    {
      id: 56,
      student: "Evelyn",
      assignment: "W6D2 - Project - Eindopdracht",
      difficulty: 5,
      liking: 5
    },
    {
      id: 57,
      student: "Aranka",
      assignment: "SCRUM",
      difficulty: 1,
      liking: 1
    },
    {
      id: 58,
      student: "Aranka",
      assignment: "W1D1-1",
      difficulty: 4,
      liking: 3
    },
    {
      id: 59,
      student: "Aranka",
      assignment: "W1D2-1",
      difficulty: 3,
      liking: 1
    },
    {
      id: 60,
      student: "Aranka",
      assignment: "W1D2-2",
      difficulty: 3,
      liking: 2
    },
    {
      id: 61,
      student: "Aranka",
      assignment: "W1D2-3",
      difficulty: 4,
      liking: 1
    },
    {
      id: 62,
      student: "Aranka",
      assignment: "W1D2-4",
      difficulty: 2,
      liking: 3
    },
    {
      id: 63,
      student: "Aranka",
      assignment: "W1D2-5",
      difficulty: 4,
      liking: 2
    },
    {
      id: 64,
      student: "Aranka",
      assignment: "W1D3-1",
      difficulty: 3,
      liking: 2
    },
    {
      id: 65,
      student: "Aranka",
      assignment: "W1D3-2",
      difficulty: 2,
      liking: 1
    },
    {
      id: 66,
      student: "Aranka",
      assignment: "W1D3-4",
      difficulty: 1,
      liking: 2
    },
    {
      id: 67,
      student: "Aranka",
      assignment: "W1D3-5",
      difficulty: 4,
      liking: 1
    },
    {
      id: 68,
      student: "Aranka",
      assignment: "W1D3 - Project - Guess-the-number",
      difficulty: 2,
      liking: 3
    },
    {
      id: 69,
      student: "Aranka",
      assignment: "W1D4-1",
      difficulty: 3,
      liking: 2
    },
    {
      id: 70,
      student: "Aranka",
      assignment: "W1D4 - Project - Kleurentoggle",
      difficulty: 4,
      liking: 3
    },
    {
      id: 71,
      student: "Aranka",
      assignment: "W1D5 - Project - Galgje",
      difficulty: 4,
      liking: 1
    },
    {
      id: 72,
      student: "Aranka",
      assignment: "W2D1-1",
      difficulty: 2,
      liking: 4
    },
    {
      id: 73,
      student: "Aranka",
      assignment: "W2D1-2",
      difficulty: 4,
      liking: 4
    },
    {
      id: 74,
      student: "Aranka",
      assignment: "W2D2-1",
      difficulty: 3,
      liking: 4
    },
    {
      id: 75,
      student: "Aranka",
      assignment: "W2D2-2",
      difficulty: 3,
      liking: 4
    },
    {
      id: 76,
      student: "Aranka",
      assignment: "W2D2-3",
      difficulty: 1,
      liking: 4
    },
    {
      id: 77,
      student: "Aranka",
      assignment: "W2D3-1",
      difficulty: 4,
      liking: 3
    },
    {
      id: 78,
      student: "Aranka",
      assignment: "W2D3-2",
      difficulty: 4,
      liking: 1
    },
    {
      id: 79,
      student: "Aranka",
      assignment: "W2D3-3",
      difficulty: 1,
      liking: 1
    },
    {
      id: 80,
      student: "Aranka",
      assignment: "W2D4-1",
      difficulty: 1,
      liking: 4
    },
    {
      id: 81,
      student: "Aranka",
      assignment: "W2D4-2",
      difficulty: 2,
      liking: 3
    },
    {
      id: 82,
      student: "Aranka",
      assignment: "W2D4-3",
      difficulty: 2,
      liking: 3
    },
    {
      id: 83,
      student: "Aranka",
      assignment: "W2D5 - Project - Filmzoeker",
      difficulty: 2,
      liking: 2
    },
    {
      id: 84,
      student: "Aranka",
      assignment: "W3D1-1",
      difficulty: 4,
      liking: 2
    },
    {
      id: 85,
      student: "Aranka",
      assignment: "W3D1-2",
      difficulty: 3,
      liking: 2
    },
    {
      id: 86,
      student: "Aranka",
      assignment: "W3D1-3",
      difficulty: 1,
      liking: 4
    },
    {
      id: 87,
      student: "Aranka",
      assignment: "W3D1-4",
      difficulty: 1,
      liking: 3
    },
    {
      id: 88,
      student: "Aranka",
      assignment: "W3D2-1",
      difficulty: 1,
      liking: 3
    },
    {
      id: 89,
      student: "Aranka",
      assignment: "W3D2-2",
      difficulty: 2,
      liking: 3
    },
    {
      id: 90,
      student: "Aranka",
      assignment: "W3D2-3",
      difficulty: 2,
      liking: 3
    },
    {
      id: 91,
      student: "Aranka",
      assignment: "W3D3-1",
      difficulty: 2,
      liking: 2
    },
    {
      id: 92,
      student: "Aranka",
      assignment: "W3D3-2",
      difficulty: 4,
      liking: 3
    },
    {
      id: 93,
      student: "Aranka",
      assignment: "W3D3-3",
      difficulty: 3,
      liking: 3
    },
    {
      id: 94,
      student: "Aranka",
      assignment: "W3D3-4",
      difficulty: 1,
      liking: 3
    },
    {
      id: 95,
      student: "Aranka",
      assignment: "W3D4-1",
      difficulty: 1,
      liking: 1
    },
    {
      id: 96,
      student: "Aranka",
      assignment: "W3D4-2",
      difficulty: 3,
      liking: 2
    },
    {
      id: 97,
      student: "Aranka",
      assignment: "W3D5 - Project - Todo-List",
      difficulty: 1,
      liking: 1
    },
    {
      id: 98,
      student: "Aranka",
      assignment: "W4D2-1",
      difficulty: 2,
      liking: 1
    },
    {
      id: 99,
      student: "Aranka",
      assignment: "W4D2-2",
      difficulty: 3,
      liking: 2
    },
    {
      id: 100,
      student: "Aranka",
      assignment: "W4D2-3",
      difficulty: 2,
      liking: 2
    },
    {
      id: 101,
      student: "Aranka",
      assignment: "W4D2-4",
      difficulty: 3,
      liking: 4
    },
    {
      id: 102,
      student: "Aranka",
      assignment: "W4D3-1",
      difficulty: 2,
      liking: 1
    },
    {
      id: 103,
      student: "Aranka",
      assignment: "W4D3-2",
      difficulty: 4,
      liking: 4
    },
    {
      id: 104,
      student: "Aranka",
      assignment: "W4D3-3",
      difficulty: 3,
      liking: 1
    },
    {
      id: 105,
      student: "Aranka",
      assignment: "W4D3-4",
      difficulty: 3,
      liking: 1
    },
    {
      id: 106,
      student: "Aranka",
      assignment: "W4D3-5",
      difficulty: 4,
      liking: 3
    },
    {
      id: 107,
      student: "Aranka",
      assignment: "W4D3 - Project - Next-Level CSS",
      difficulty: 4,
      liking: 4
    },
    {
      id: 108,
      student: "Aranka",
      assignment: "W5D4-1",
      difficulty: 1,
      liking: 3
    },
    {
      id: 109,
      student: "Aranka",
      assignment: "W5D5 - Project - Lil_Playlist",
      difficulty: 3,
      liking: 2
    },
    {
      id: 110,
      student: "Aranka",
      assignment: "W6D1-1",
      difficulty: 1,
      liking: 1
    },
    {
      id: 111,
      student: "Aranka",
      assignment: "W6D2-1",
      difficulty: 2,
      liking: 2
    },
    {
      id: 112,
      student: "Aranka",
      assignment: "W6D2 - Project - Eindopdracht",
      difficulty: 3,
      liking: 4
    },
    {
      id: 113,
      student: "Floris",
      assignment: "SCRUM",
      difficulty: 2,
      liking: 1
    },
    {
      id: 114,
      student: "Floris",
      assignment: "W1D1-1",
      difficulty: 4,
      liking: 3
    },
    {
      id: 115,
      student: "Floris",
      assignment: "W1D2-1",
      difficulty: 1,
      liking: 2
    },
    {
      id: 116,
      student: "Floris",
      assignment: "W1D2-2",
      difficulty: 1,
      liking: 4
    },
    {
      id: 117,
      student: "Floris",
      assignment: "W1D2-3",
      difficulty: 1,
      liking: 4
    },
    {
      id: 118,
      student: "Floris",
      assignment: "W1D2-4",
      difficulty: 3,
      liking: 4
    },
    {
      id: 119,
      student: "Floris",
      assignment: "W1D2-5",
      difficulty: 1,
      liking: 3
    },
    {
      id: 120,
      student: "Floris",
      assignment: "W1D3-1",
      difficulty: 2,
      liking: 4
    },
    {
      id: 121,
      student: "Floris",
      assignment: "W1D3-2",
      difficulty: 4,
      liking: 4
    },
    {
      id: 122,
      student: "Floris",
      assignment: "W1D3-4",
      difficulty: 4,
      liking: 2
    },
    {
      id: 123,
      student: "Floris",
      assignment: "W1D3-5",
      difficulty: 2,
      liking: 4
    },
    {
      id: 124,
      student: "Floris",
      assignment: "W1D3 - Project - Guess-the-number",
      difficulty: 2,
      liking: 2
    },
    {
      id: 125,
      student: "Floris",
      assignment: "W1D4-1",
      difficulty: 1,
      liking: 3
    },
    {
      id: 126,
      student: "Floris",
      assignment: "W1D4 - Project - Kleurentoggle",
      difficulty: 4,
      liking: 3
    },
    {
      id: 127,
      student: "Floris",
      assignment: "W1D5 - Project - Galgje",
      difficulty: 4,
      liking: 4
    },
    {
      id: 128,
      student: "Floris",
      assignment: "W2D1-1",
      difficulty: 2,
      liking: 2
    },
    {
      id: 129,
      student: "Floris",
      assignment: "W2D1-2",
      difficulty: 4,
      liking: 1
    },
    {
      id: 130,
      student: "Floris",
      assignment: "W2D2-1",
      difficulty: 4,
      liking: 1
    },
    {
      id: 131,
      student: "Floris",
      assignment: "W2D2-2",
      difficulty: 2,
      liking: 2
    },
    {
      id: 132,
      student: "Floris",
      assignment: "W2D2-3",
      difficulty: 4,
      liking: 2
    },
    {
      id: 133,
      student: "Floris",
      assignment: "W2D3-1",
      difficulty: 1,
      liking: 1
    },
    {
      id: 134,
      student: "Floris",
      assignment: "W2D3-2",
      difficulty: 1,
      liking: 2
    },
    {
      id: 135,
      student: "Floris",
      assignment: "W2D3-3",
      difficulty: 3,
      liking: 3
    },
    {
      id: 136,
      student: "Floris",
      assignment: "W2D4-1",
      difficulty: 4,
      liking: 4
    },
    {
      id: 137,
      student: "Floris",
      assignment: "W2D4-2",
      difficulty: 3,
      liking: 1
    },
    {
      id: 138,
      student: "Floris",
      assignment: "W2D4-3",
      difficulty: 4,
      liking: 1
    },
    {
      id: 139,
      student: "Floris",
      assignment: "W2D5 - Project - Filmzoeker",
      difficulty: 4,
      liking: 1
    },
    {
      id: 140,
      student: "Floris",
      assignment: "W3D1-1",
      difficulty: 4,
      liking: 3
    },
    {
      id: 141,
      student: "Floris",
      assignment: "W3D1-2",
      difficulty: 2,
      liking: 3
    },
    {
      id: 142,
      student: "Floris",
      assignment: "W3D1-3",
      difficulty: 2,
      liking: 3
    },
    {
      id: 143,
      student: "Floris",
      assignment: "W3D1-4",
      difficulty: 3,
      liking: 3
    },
    {
      id: 144,
      student: "Floris",
      assignment: "W3D2-1",
      difficulty: 3,
      liking: 2
    },
    {
      id: 145,
      student: "Floris",
      assignment: "W3D2-2",
      difficulty: 2,
      liking: 2
    },
    {
      id: 146,
      student: "Floris",
      assignment: "W3D2-3",
      difficulty: 3,
      liking: 2
    },
    {
      id: 147,
      student: "Floris",
      assignment: "W3D3-1",
      difficulty: 4,
      liking: 4
    },
    {
      id: 148,
      student: "Floris",
      assignment: "W3D3-2",
      difficulty: 2,
      liking: 4
    },
    {
      id: 149,
      student: "Floris",
      assignment: "W3D3-3",
      difficulty: 2,
      liking: 1
    },
    {
      id: 150,
      student: "Floris",
      assignment: "W3D3-4",
      difficulty: 3,
      liking: 2
    },
    {
      id: 151,
      student: "Floris",
      assignment: "W3D4-1",
      difficulty: 1,
      liking: 3
    },
    {
      id: 152,
      student: "Floris",
      assignment: "W3D4-2",
      difficulty: 2,
      liking: 2
    },
    {
      id: 153,
      student: "Floris",
      assignment: "W3D5 - Project - Todo-List",
      difficulty: 4,
      liking: 2
    },
    {
      id: 154,
      student: "Floris",
      assignment: "W4D2-1",
      difficulty: 1,
      liking: 4
    },
    {
      id: 155,
      student: "Floris",
      assignment: "W4D2-2",
      difficulty: 2,
      liking: 3
    },
    {
      id: 156,
      student: "Floris",
      assignment: "W4D2-3",
      difficulty: 2,
      liking: 4
    },
    {
      id: 157,
      student: "Floris",
      assignment: "W4D2-4",
      difficulty: 1,
      liking: 2
    },
    {
      id: 158,
      student: "Floris",
      assignment: "W4D3-1",
      difficulty: 1,
      liking: 4
    },
    {
      id: 159,
      student: "Floris",
      assignment: "W4D3-2",
      difficulty: 4,
      liking: 4
    },
    {
      id: 160,
      student: "Floris",
      assignment: "W4D3-3",
      difficulty: 3,
      liking: 2
    },
    {
      id: 161,
      student: "Floris",
      assignment: "W4D3-4",
      difficulty: 2,
      liking: 2
    },
    {
      id: 162,
      student: "Floris",
      assignment: "W4D3-5",
      difficulty: 4,
      liking: 1
    },
    {
      id: 163,
      student: "Floris",
      assignment: "W4D3 - Project - Next-Level CSS",
      difficulty: 2,
      liking: 2
    },
    {
      id: 164,
      student: "Floris",
      assignment: "W5D4-1",
      difficulty: 1,
      liking: 3
    },
    {
      id: 165,
      student: "Floris",
      assignment: "W5D5 - Project - Lil_Playlist",
      difficulty: 3,
      liking: 1
    },
    {
      id: 166,
      student: "Floris",
      assignment: "W6D1-1",
      difficulty: 3,
      liking: 2
    },
    {
      id: 167,
      student: "Floris",
      assignment: "W6D2-1",
      difficulty: 1,
      liking: 1
    },
    {
      id: 168,
      student: "Floris",
      assignment: "W6D2 - Project - Eindopdracht",
      difficulty: 4,
      liking: 1
    },
    {
      id: 169,
      student: "Hector",
      assignment: "SCRUM",
      difficulty: 1,
      liking: 2
    },
    {
      id: 170,
      student: "Hector",
      assignment: "W1D1-1",
      difficulty: 1,
      liking: 4
    },
    {
      id: 171,
      student: "Hector",
      assignment: "W1D2-1",
      difficulty: 2,
      liking: 4
    },
    {
      id: 172,
      student: "Hector",
      assignment: "W1D2-2",
      difficulty: 2,
      liking: 3
    },
    {
      id: 173,
      student: "Hector",
      assignment: "W1D2-3",
      difficulty: 1,
      liking: 2
    },
    {
      id: 174,
      student: "Hector",
      assignment: "W1D2-4",
      difficulty: 1,
      liking: 3
    },
    {
      id: 175,
      student: "Hector",
      assignment: "W1D2-5",
      difficulty: 3,
      liking: 1
    },
    {
      id: 176,
      student: "Hector",
      assignment: "W1D3-1",
      difficulty: 1,
      liking: 4
    },
    {
      id: 177,
      student: "Hector",
      assignment: "W1D3-2",
      difficulty: 4,
      liking: 3
    },
    {
      id: 178,
      student: "Hector",
      assignment: "W1D3-4",
      difficulty: 3,
      liking: 1
    },
    {
      id: 179,
      student: "Hector",
      assignment: "W1D3-5",
      difficulty: 4,
      liking: 2
    },
    {
      id: 180,
      student: "Hector",
      assignment: "W1D3 - Project - Guess-the-number",
      difficulty: 3,
      liking: 1
    },
    {
      id: 181,
      student: "Hector",
      assignment: "W1D4-1",
      difficulty: 1,
      liking: 1
    },
    {
      id: 182,
      student: "Hector",
      assignment: "W1D4 - Project - Kleurentoggle",
      difficulty: 1,
      liking: 3
    },
    {
      id: 183,
      student: "Hector",
      assignment: "W1D5 - Project - Galgje",
      difficulty: 2,
      liking: 4
    },
    {
      id: 184,
      student: "Hector",
      assignment: "W2D1-1",
      difficulty: 4,
      liking: 4
    },
    {
      id: 185,
      student: "Hector",
      assignment: "W2D1-2",
      difficulty: 3,
      liking: 2
    },
    {
      id: 186,
      student: "Hector",
      assignment: "W2D2-1",
      difficulty: 4,
      liking: 3
    },
    {
      id: 187,
      student: "Hector",
      assignment: "W2D2-2",
      difficulty: 1,
      liking: 2
    },
    {
      id: 188,
      student: "Hector",
      assignment: "W2D2-3",
      difficulty: 3,
      liking: 2
    },
    {
      id: 189,
      student: "Hector",
      assignment: "W2D3-1",
      difficulty: 3,
      liking: 1
    },
    {
      id: 190,
      student: "Hector",
      assignment: "W2D3-2",
      difficulty: 4,
      liking: 2
    },
    {
      id: 191,
      student: "Hector",
      assignment: "W2D3-3",
      difficulty: 4,
      liking: 2
    },
    {
      id: 192,
      student: "Hector",
      assignment: "W2D4-1",
      difficulty: 2,
      liking: 4
    },
    {
      id: 193,
      student: "Hector",
      assignment: "W2D4-2",
      difficulty: 4,
      liking: 1
    },
    {
      id: 194,
      student: "Hector",
      assignment: "W2D4-3",
      difficulty: 3,
      liking: 2
    },
    {
      id: 195,
      student: "Hector",
      assignment: "W2D5 - Project - Filmzoeker",
      difficulty: 4,
      liking: 1
    },
    {
      id: 196,
      student: "Hector",
      assignment: "W3D1-1",
      difficulty: 1,
      liking: 1
    },
    {
      id: 197,
      student: "Hector",
      assignment: "W3D1-2",
      difficulty: 1,
      liking: 4
    },
    {
      id: 198,
      student: "Hector",
      assignment: "W3D1-3",
      difficulty: 3,
      liking: 2
    },
    {
      id: 199,
      student: "Hector",
      assignment: "W3D1-4",
      difficulty: 4,
      liking: 3
    },
    {
      id: 200,
      student: "Hector",
      assignment: "W3D2-1",
      difficulty: 1,
      liking: 3
    },
    {
      id: 201,
      student: "Hector",
      assignment: "W3D2-2",
      difficulty: 4,
      liking: 3
    },
    {
      id: 202,
      student: "Hector",
      assignment: "W3D2-3",
      difficulty: 2,
      liking: 1
    },
    {
      id: 203,
      student: "Hector",
      assignment: "W3D3-1",
      difficulty: 4,
      liking: 4
    },
    {
      id: 204,
      student: "Hector",
      assignment: "W3D3-2",
      difficulty: 3,
      liking: 1
    },
    {
      id: 205,
      student: "Hector",
      assignment: "W3D3-3",
      difficulty: 2,
      liking: 4
    },
    {
      id: 206,
      student: "Hector",
      assignment: "W3D3-4",
      difficulty: 4,
      liking: 1
    },
    {
      id: 207,
      student: "Hector",
      assignment: "W3D4-1",
      difficulty: 3,
      liking: 4
    },
    {
      id: 208,
      student: "Hector",
      assignment: "W3D4-2",
      difficulty: 1,
      liking: 4
    },
    {
      id: 209,
      student: "Hector",
      assignment: "W3D5 - Project - Todo-List",
      difficulty: 2,
      liking: 4
    },
    {
      id: 210,
      student: "Hector",
      assignment: "W4D2-1",
      difficulty: 1,
      liking: 1
    },
    {
      id: 211,
      student: "Hector",
      assignment: "W4D2-2",
      difficulty: 2,
      liking: 1
    },
    {
      id: 212,
      student: "Hector",
      assignment: "W4D2-3",
      difficulty: 3,
      liking: 3
    },
    {
      id: 213,
      student: "Hector",
      assignment: "W4D2-4",
      difficulty: 1,
      liking: 3
    },
    {
      id: 214,
      student: "Hector",
      assignment: "W4D3-1",
      difficulty: 3,
      liking: 3
    },
    {
      id: 215,
      student: "Hector",
      assignment: "W4D3-2",
      difficulty: 1,
      liking: 4
    },
    {
      id: 216,
      student: "Hector",
      assignment: "W4D3-3",
      difficulty: 3,
      liking: 1
    },
    {
      id: 217,
      student: "Hector",
      assignment: "W4D3-4",
      difficulty: 1,
      liking: 3
    },
    {
      id: 218,
      student: "Hector",
      assignment: "W4D3-5",
      difficulty: 1,
      liking: 2
    },
    {
      id: 219,
      student: "Hector",
      assignment: "W4D3 - Project - Next-Level CSS",
      difficulty: 3,
      liking: 1
    },
    {
      id: 220,
      student: "Hector",
      assignment: "W5D4-1",
      difficulty: 3,
      liking: 4
    },
    {
      id: 221,
      student: "Hector",
      assignment: "W5D5 - Project - Lil_Playlist",
      difficulty: 3,
      liking: 1
    },
    {
      id: 222,
      student: "Hector",
      assignment: "W6D1-1",
      difficulty: 1,
      liking: 1
    },
    {
      id: 223,
      student: "Hector",
      assignment: "W6D2-1",
      difficulty: 4,
      liking: 2
    },
    {
      id: 224,
      student: "Hector",
      assignment: "W6D2 - Project - Eindopdracht",
      difficulty: 2,
      liking: 4
    },
    {
      id: 225,
      student: "Martina",
      assignment: "SCRUM",
      difficulty: 1,
      liking: 1
    },
    {
      id: 226,
      student: "Martina",
      assignment: "W1D1-1",
      difficulty: 4,
      liking: 1
    },
    {
      id: 227,
      student: "Martina",
      assignment: "W1D2-1",
      difficulty: 3,
      liking: 3
    },
    {
      id: 228,
      student: "Martina",
      assignment: "W1D2-2",
      difficulty: 2,
      liking: 1
    },
    {
      id: 229,
      student: "Martina",
      assignment: "W1D2-3",
      difficulty: 2,
      liking: 1
    },
    {
      id: 230,
      student: "Martina",
      assignment: "W1D2-4",
      difficulty: 4,
      liking: 2
    },
    {
      id: 231,
      student: "Martina",
      assignment: "W1D2-5",
      difficulty: 3,
      liking: 4
    },
    {
      id: 232,
      student: "Martina",
      assignment: "W1D3-1",
      difficulty: 3,
      liking: 4
    },
    {
      id: 233,
      student: "Martina",
      assignment: "W1D3-2",
      difficulty: 2,
      liking: 1
    },
    {
      id: 234,
      student: "Martina",
      assignment: "W1D3-4",
      difficulty: 3,
      liking: 2
    },
    {
      id: 235,
      student: "Martina",
      assignment: "W1D3-5",
      difficulty: 1,
      liking: 1
    },
    {
      id: 236,
      student: "Martina",
      assignment: "W1D3 - Project - Guess-the-number",
      difficulty: 2,
      liking: 2
    },
    {
      id: 237,
      student: "Martina",
      assignment: "W1D4-1",
      difficulty: 4,
      liking: 2
    },
    {
      id: 238,
      student: "Martina",
      assignment: "W1D4 - Project - Kleurentoggle",
      difficulty: 1,
      liking: 3
    },
    {
      id: 239,
      student: "Martina",
      assignment: "W1D5 - Project - Galgje",
      difficulty: 1,
      liking: 4
    },
    {
      id: 240,
      student: "Martina",
      assignment: "W2D1-1",
      difficulty: 1,
      liking: 4
    },
    {
      id: 241,
      student: "Martina",
      assignment: "W2D1-2",
      difficulty: 4,
      liking: 2
    },
    {
      id: 242,
      student: "Martina",
      assignment: "W2D2-1",
      difficulty: 4,
      liking: 1
    },
    {
      id: 243,
      student: "Martina",
      assignment: "W2D2-2",
      difficulty: 3,
      liking: 3
    },
    {
      id: 244,
      student: "Martina",
      assignment: "W2D2-3",
      difficulty: 3,
      liking: 1
    },
    {
      id: 245,
      student: "Martina",
      assignment: "W2D3-1",
      difficulty: 4,
      liking: 2
    },
    {
      id: 246,
      student: "Martina",
      assignment: "W2D3-2",
      difficulty: 3,
      liking: 4
    },
    {
      id: 247,
      student: "Martina",
      assignment: "W2D3-3",
      difficulty: 3,
      liking: 3
    },
    {
      id: 248,
      student: "Martina",
      assignment: "W2D4-1",
      difficulty: 1,
      liking: 4
    },
    {
      id: 249,
      student: "Martina",
      assignment: "W2D4-2",
      difficulty: 3,
      liking: 4
    },
    {
      id: 250,
      student: "Martina",
      assignment: "W2D4-3",
      difficulty: 3,
      liking: 4
    },
    {
      id: 251,
      student: "Martina",
      assignment: "W2D5 - Project - Filmzoeker",
      difficulty: 2,
      liking: 4
    },
    {
      id: 252,
      student: "Martina",
      assignment: "W3D1-1",
      difficulty: 1,
      liking: 1
    },
    {
      id: 253,
      student: "Martina",
      assignment: "W3D1-2",
      difficulty: 3,
      liking: 3
    },
    {
      id: 254,
      student: "Martina",
      assignment: "W3D1-3",
      difficulty: 3,
      liking: 1
    },
    {
      id: 255,
      student: "Martina",
      assignment: "W3D1-4",
      difficulty: 3,
      liking: 2
    },
    {
      id: 256,
      student: "Martina",
      assignment: "W3D2-1",
      difficulty: 1,
      liking: 2
    },
    {
      id: 257,
      student: "Martina",
      assignment: "W3D2-2",
      difficulty: 2,
      liking: 4
    },
    {
      id: 258,
      student: "Martina",
      assignment: "W3D2-3",
      difficulty: 3,
      liking: 1
    },
    {
      id: 259,
      student: "Martina",
      assignment: "W3D3-1",
      difficulty: 1,
      liking: 4
    },
    {
      id: 260,
      student: "Martina",
      assignment: "W3D3-2",
      difficulty: 4,
      liking: 1
    },
    {
      id: 261,
      student: "Martina",
      assignment: "W3D3-3",
      difficulty: 3,
      liking: 3
    },
    {
      id: 262,
      student: "Martina",
      assignment: "W3D3-4",
      difficulty: 2,
      liking: 3
    },
    {
      id: 263,
      student: "Martina",
      assignment: "W3D4-1",
      difficulty: 4,
      liking: 4
    },
    {
      id: 264,
      student: "Martina",
      assignment: "W3D4-2",
      difficulty: 3,
      liking: 1
    },
    {
      id: 265,
      student: "Martina",
      assignment: "W3D5 - Project - Todo-List",
      difficulty: 2,
      liking: 3
    },
    {
      id: 266,
      student: "Martina",
      assignment: "W4D2-1",
      difficulty: 3,
      liking: 4
    },
    {
      id: 267,
      student: "Martina",
      assignment: "W4D2-2",
      difficulty: 1,
      liking: 2
    },
    {
      id: 268,
      student: "Martina",
      assignment: "W4D2-3",
      difficulty: 3,
      liking: 4
    },
    {
      id: 269,
      student: "Martina",
      assignment: "W4D2-4",
      difficulty: 4,
      liking: 1
    },
    {
      id: 270,
      student: "Martina",
      assignment: "W4D3-1",
      difficulty: 2,
      liking: 4
    },
    {
      id: 271,
      student: "Martina",
      assignment: "W4D3-2",
      difficulty: 1,
      liking: 3
    },
    {
      id: 272,
      student: "Martina",
      assignment: "W4D3-3",
      difficulty: 2,
      liking: 4
    },
    {
      id: 273,
      student: "Martina",
      assignment: "W4D3-4",
      difficulty: 4,
      liking: 1
    },
    {
      id: 274,
      student: "Martina",
      assignment: "W4D3-5",
      difficulty: 3,
      liking: 2
    },
    {
      id: 275,
      student: "Martina",
      assignment: "W4D3 - Project - Next-Level CSS",
      difficulty: 3,
      liking: 4
    },
    {
      id: 276,
      student: "Martina",
      assignment: "W5D4-1",
      difficulty: 1,
      liking: 4
    },
    {
      id: 277,
      student: "Martina",
      assignment: "W5D5 - Project - Lil_Playlist",
      difficulty: 1,
      liking: 1
    },
    {
      id: 278,
      student: "Martina",
      assignment: "W6D1-1",
      difficulty: 2,
      liking: 1
    },
    {
      id: 279,
      student: "Martina",
      assignment: "W6D2-1",
      difficulty: 1,
      liking: 4
    },
    {
      id: 280,
      student: "Martina",
      assignment: "W6D2 - Project - Eindopdracht",
      difficulty: 1,
      liking: 4
    },
    {
      id: 281,
      student: "Maurits",
      assignment: "SCRUM",
      difficulty: 3,
      liking: 4
    },
    {
      id: 282,
      student: "Maurits",
      assignment: "W1D1-1",
      difficulty: 4,
      liking: 3
    },
    {
      id: 283,
      student: "Maurits",
      assignment: "W1D2-1",
      difficulty: 2,
      liking: 2
    },
    {
      id: 284,
      student: "Maurits",
      assignment: "W1D2-2",
      difficulty: 1,
      liking: 4
    },
    {
      id: 285,
      student: "Maurits",
      assignment: "W1D2-3",
      difficulty: 2,
      liking: 2
    },
    {
      id: 286,
      student: "Maurits",
      assignment: "W1D2-4",
      difficulty: 3,
      liking: 1
    },
    {
      id: 287,
      student: "Maurits",
      assignment: "W1D2-5",
      difficulty: 2,
      liking: 3
    },
    {
      id: 288,
      student: "Maurits",
      assignment: "W1D3-1",
      difficulty: 2,
      liking: 4
    },
    {
      id: 289,
      student: "Maurits",
      assignment: "W1D3-2",
      difficulty: 2,
      liking: 2
    },
    {
      id: 290,
      student: "Maurits",
      assignment: "W1D3-4",
      difficulty: 2,
      liking: 2
    },
    {
      id: 291,
      student: "Maurits",
      assignment: "W1D3-5",
      difficulty: 1,
      liking: 3
    },
    {
      id: 292,
      student: "Maurits",
      assignment: "W1D3 - Project - Guess-the-number",
      difficulty: 1,
      liking: 1
    },
    {
      id: 293,
      student: "Maurits",
      assignment: "W1D4-1",
      difficulty: 3,
      liking: 4
    },
    {
      id: 294,
      student: "Maurits",
      assignment: "W1D4 - Project - Kleurentoggle",
      difficulty: 4,
      liking: 1
    },
    {
      id: 295,
      student: "Maurits",
      assignment: "W1D5 - Project - Galgje",
      difficulty: 3,
      liking: 2
    },
    {
      id: 296,
      student: "Maurits",
      assignment: "W2D1-1",
      difficulty: 1,
      liking: 1
    },
    {
      id: 297,
      student: "Maurits",
      assignment: "W2D1-2",
      difficulty: 2,
      liking: 3
    },
    {
      id: 298,
      student: "Maurits",
      assignment: "W2D2-1",
      difficulty: 1,
      liking: 2
    },
    {
      id: 299,
      student: "Maurits",
      assignment: "W2D2-2",
      difficulty: 4,
      liking: 1
    },
    {
      id: 300,
      student: "Maurits",
      assignment: "W2D2-3",
      difficulty: 2,
      liking: 2
    },
    {
      id: 301,
      student: "Maurits",
      assignment: "W2D3-1",
      difficulty: 2,
      liking: 2
    },
    {
      id: 302,
      student: "Maurits",
      assignment: "W2D3-2",
      difficulty: 3,
      liking: 3
    },
    {
      id: 303,
      student: "Maurits",
      assignment: "W2D3-3",
      difficulty: 2,
      liking: 1
    },
    {
      id: 304,
      student: "Maurits",
      assignment: "W2D4-1",
      difficulty: 1,
      liking: 3
    },
    {
      id: 305,
      student: "Maurits",
      assignment: "W2D4-2",
      difficulty: 3,
      liking: 2
    },
    {
      id: 306,
      student: "Maurits",
      assignment: "W2D4-3",
      difficulty: 3,
      liking: 3
    },
    {
      id: 307,
      student: "Maurits",
      assignment: "W2D5 - Project - Filmzoeker",
      difficulty: 3,
      liking: 1
    },
    {
      id: 308,
      student: "Maurits",
      assignment: "W3D1-1",
      difficulty: 4,
      liking: 4
    },
    {
      id: 309,
      student: "Maurits",
      assignment: "W3D1-2",
      difficulty: 1,
      liking: 3
    },
    {
      id: 310,
      student: "Maurits",
      assignment: "W3D1-3",
      difficulty: 1,
      liking: 4
    },
    {
      id: 311,
      student: "Maurits",
      assignment: "W3D1-4",
      difficulty: 1,
      liking: 2
    },
    {
      id: 312,
      student: "Maurits",
      assignment: "W3D2-1",
      difficulty: 1,
      liking: 4
    },
    {
      id: 313,
      student: "Maurits",
      assignment: "W3D2-2",
      difficulty: 1,
      liking: 1
    },
    {
      id: 314,
      student: "Maurits",
      assignment: "W3D2-3",
      difficulty: 4,
      liking: 3
    },
    {
      id: 315,
      student: "Maurits",
      assignment: "W3D3-1",
      difficulty: 1,
      liking: 1
    },
    {
      id: 316,
      student: "Maurits",
      assignment: "W3D3-2",
      difficulty: 2,
      liking: 1
    },
    {
      id: 317,
      student: "Maurits",
      assignment: "W3D3-3",
      difficulty: 1,
      liking: 3
    },
    {
      id: 318,
      student: "Maurits",
      assignment: "W3D3-4",
      difficulty: 4,
      liking: 1
    },
    {
      id: 319,
      student: "Maurits",
      assignment: "W3D4-1",
      difficulty: 4,
      liking: 4
    },
    {
      id: 320,
      student: "Maurits",
      assignment: "W3D4-2",
      difficulty: 1,
      liking: 3
    },
    {
      id: 321,
      student: "Maurits",
      assignment: "W3D5 - Project - Todo-List",
      difficulty: 3,
      liking: 4
    },
    {
      id: 322,
      student: "Maurits",
      assignment: "W4D2-1",
      difficulty: 3,
      liking: 1
    },
    {
      id: 323,
      student: "Maurits",
      assignment: "W4D2-2",
      difficulty: 4,
      liking: 4
    },
    {
      id: 324,
      student: "Maurits",
      assignment: "W4D2-3",
      difficulty: 4,
      liking: 1
    },
    {
      id: 325,
      student: "Maurits",
      assignment: "W4D2-4",
      difficulty: 2,
      liking: 3
    },
    {
      id: 326,
      student: "Maurits",
      assignment: "W4D3-1",
      difficulty: 3,
      liking: 1
    },
    {
      id: 327,
      student: "Maurits",
      assignment: "W4D3-2",
      difficulty: 3,
      liking: 2
    },
    {
      id: 328,
      student: "Maurits",
      assignment: "W4D3-3",
      difficulty: 3,
      liking: 4
    },
    {
      id: 329,
      student: "Maurits",
      assignment: "W4D3-4",
      difficulty: 1,
      liking: 3
    },
    {
      id: 330,
      student: "Maurits",
      assignment: "W4D3-5",
      difficulty: 2,
      liking: 1
    },
    {
      id: 331,
      student: "Maurits",
      assignment: "W4D3 - Project - Next-Level CSS",
      difficulty: 2,
      liking: 3
    },
    {
      id: 332,
      student: "Maurits",
      assignment: "W5D4-1",
      difficulty: 1,
      liking: 3
    },
    {
      id: 333,
      student: "Maurits",
      assignment: "W5D5 - Project - Lil_Playlist",
      difficulty: 4,
      liking: 2
    },
    {
      id: 334,
      student: "Maurits",
      assignment: "W6D1-1",
      difficulty: 1,
      liking: 3
    },
    {
      id: 335,
      student: "Maurits",
      assignment: "W6D2-1",
      difficulty: 1,
      liking: 4
    },
    {
      id: 336,
      student: "Maurits",
      assignment: "W6D2 - Project - Eindopdracht",
      difficulty: 3,
      liking: 3
    },
    {
      id: 337,
      student: "Rahima",
      assignment: "SCRUM",
      difficulty: 2,
      liking: 4
    },
    {
      id: 338,
      student: "Rahima",
      assignment: "W1D1-1",
      difficulty: 3,
      liking: 4
    },
    {
      id: 339,
      student: "Rahima",
      assignment: "W1D2-1",
      difficulty: 2,
      liking: 4
    },
    {
      id: 340,
      student: "Rahima",
      assignment: "W1D2-2",
      difficulty: 1,
      liking: 2
    },
    {
      id: 341,
      student: "Rahima",
      assignment: "W1D2-3",
      difficulty: 1,
      liking: 3
    },
    {
      id: 342,
      student: "Rahima",
      assignment: "W1D2-4",
      difficulty: 1,
      liking: 2
    },
    {
      id: 343,
      student: "Rahima",
      assignment: "W1D2-5",
      difficulty: 1,
      liking: 3
    },
    {
      id: 344,
      student: "Rahima",
      assignment: "W1D3-1",
      difficulty: 1,
      liking: 1
    },
    {
      id: 345,
      student: "Rahima",
      assignment: "W1D3-2",
      difficulty: 2,
      liking: 4
    },
    {
      id: 346,
      student: "Rahima",
      assignment: "W1D3-4",
      difficulty: 1,
      liking: 2
    },
    {
      id: 347,
      student: "Rahima",
      assignment: "W1D3-5",
      difficulty: 2,
      liking: 2
    },
    {
      id: 348,
      student: "Rahima",
      assignment: "W1D3 - Project - Guess-the-number",
      difficulty: 3,
      liking: 1
    },
    {
      id: 349,
      student: "Rahima",
      assignment: "W1D4-1",
      difficulty: 4,
      liking: 3
    },
    {
      id: 350,
      student: "Rahima",
      assignment: "W1D4 - Project - Kleurentoggle",
      difficulty: 2,
      liking: 4
    },
    {
      id: 351,
      student: "Rahima",
      assignment: "W1D5 - Project - Galgje",
      difficulty: 3,
      liking: 3
    },
    {
      id: 352,
      student: "Rahima",
      assignment: "W2D1-1",
      difficulty: 2,
      liking: 2
    },
    {
      id: 353,
      student: "Rahima",
      assignment: "W2D1-2",
      difficulty: 3,
      liking: 1
    },
    {
      id: 354,
      student: "Rahima",
      assignment: "W2D2-1",
      difficulty: 1,
      liking: 1
    },
    {
      id: 355,
      student: "Rahima",
      assignment: "W2D2-2",
      difficulty: 1,
      liking: 1
    },
    {
      id: 356,
      student: "Rahima",
      assignment: "W2D2-3",
      difficulty: 4,
      liking: 2
    },
    {
      id: 357,
      student: "Rahima",
      assignment: "W2D3-1",
      difficulty: 1,
      liking: 1
    },
    {
      id: 358,
      student: "Rahima",
      assignment: "W2D3-2",
      difficulty: 1,
      liking: 4
    },
    {
      id: 359,
      student: "Rahima",
      assignment: "W2D3-3",
      difficulty: 4,
      liking: 2
    },
    {
      id: 360,
      student: "Rahima",
      assignment: "W2D4-1",
      difficulty: 4,
      liking: 4
    },
    {
      id: 361,
      student: "Rahima",
      assignment: "W2D4-2",
      difficulty: 4,
      liking: 4
    },
    {
      id: 362,
      student: "Rahima",
      assignment: "W2D4-3",
      difficulty: 2,
      liking: 3
    },
    {
      id: 363,
      student: "Rahima",
      assignment: "W2D5 - Project - Filmzoeker",
      difficulty: 3,
      liking: 1
    },
    {
      id: 364,
      student: "Rahima",
      assignment: "W3D1-1",
      difficulty: 1,
      liking: 1
    },
    {
      id: 365,
      student: "Rahima",
      assignment: "W3D1-2",
      difficulty: 1,
      liking: 2
    },
    {
      id: 366,
      student: "Rahima",
      assignment: "W3D1-3",
      difficulty: 2,
      liking: 3
    },
    {
      id: 367,
      student: "Rahima",
      assignment: "W3D1-4",
      difficulty: 2,
      liking: 4
    },
    {
      id: 368,
      student: "Rahima",
      assignment: "W3D2-1",
      difficulty: 3,
      liking: 2
    },
    {
      id: 369,
      student: "Rahima",
      assignment: "W3D2-2",
      difficulty: 1,
      liking: 4
    },
    {
      id: 370,
      student: "Rahima",
      assignment: "W3D2-3",
      difficulty: 2,
      liking: 1
    },
    {
      id: 371,
      student: "Rahima",
      assignment: "W3D3-1",
      difficulty: 3,
      liking: 1
    },
    {
      id: 372,
      student: "Rahima",
      assignment: "W3D3-2",
      difficulty: 4,
      liking: 4
    },
    {
      id: 373,
      student: "Rahima",
      assignment: "W3D3-3",
      difficulty: 1,
      liking: 4
    },
    {
      id: 374,
      student: "Rahima",
      assignment: "W3D3-4",
      difficulty: 2,
      liking: 2
    },
    {
      id: 375,
      student: "Rahima",
      assignment: "W3D4-1",
      difficulty: 1,
      liking: 2
    },
    {
      id: 376,
      student: "Rahima",
      assignment: "W3D4-2",
      difficulty: 3,
      liking: 3
    },
    {
      id: 377,
      student: "Rahima",
      assignment: "W3D5 - Project - Todo-List",
      difficulty: 2,
      liking: 4
    },
    {
      id: 378,
      student: "Rahima",
      assignment: "W4D2-1",
      difficulty: 2,
      liking: 4
    },
    {
      id: 379,
      student: "Rahima",
      assignment: "W4D2-2",
      difficulty: 4,
      liking: 3
    },
    {
      id: 380,
      student: "Rahima",
      assignment: "W4D2-3",
      difficulty: 3,
      liking: 3
    },
    {
      id: 381,
      student: "Rahima",
      assignment: "W4D2-4",
      difficulty: 4,
      liking: 1
    },
    {
      id: 382,
      student: "Rahima",
      assignment: "W4D3-1",
      difficulty: 2,
      liking: 1
    },
    {
      id: 383,
      student: "Rahima",
      assignment: "W4D3-2",
      difficulty: 1,
      liking: 1
    },
    {
      id: 384,
      student: "Rahima",
      assignment: "W4D3-3",
      difficulty: 2,
      liking: 1
    },
    {
      id: 385,
      student: "Rahima",
      assignment: "W4D3-4",
      difficulty: 2,
      liking: 2
    },
    {
      id: 386,
      student: "Rahima",
      assignment: "W4D3-5",
      difficulty: 3,
      liking: 2
    },
    {
      id: 387,
      student: "Rahima",
      assignment: "W4D3 - Project - Next-Level CSS",
      difficulty: 1,
      liking: 2
    },
    {
      id: 388,
      student: "Rahima",
      assignment: "W5D4-1",
      difficulty: 3,
      liking: 3
    },
    {
      id: 389,
      student: "Rahima",
      assignment: "W5D5 - Project - Lil_Playlist",
      difficulty: 2,
      liking: 3
    },
    {
      id: 390,
      student: "Rahima",
      assignment: "W6D1-1",
      difficulty: 4,
      liking: 4
    },
    {
      id: 391,
      student: "Rahima",
      assignment: "W6D2-1",
      difficulty: 1,
      liking: 4
    },
    {
      id: 392,
      student: "Rahima",
      assignment: "W6D2 - Project - Eindopdracht",
      difficulty: 4,
      liking: 1
    },
    {
      id: 393,
      student: "Sandra",
      assignment: "SCRUM",
      difficulty: 4,
      liking: 1
    },
    {
      id: 394,
      student: "Sandra",
      assignment: "W1D1-1",
      difficulty: 2,
      liking: 4
    },
    {
      id: 395,
      student: "Sandra",
      assignment: "W1D2-1",
      difficulty: 3,
      liking: 4
    },
    {
      id: 396,
      student: "Sandra",
      assignment: "W1D2-2",
      difficulty: 3,
      liking: 2
    },
    {
      id: 397,
      student: "Sandra",
      assignment: "W1D2-3",
      difficulty: 3,
      liking: 4
    },
    {
      id: 398,
      student: "Sandra",
      assignment: "W1D2-4",
      difficulty: 3,
      liking: 1
    },
    {
      id: 399,
      student: "Sandra",
      assignment: "W1D2-5",
      difficulty: 4,
      liking: 3
    },
    {
      id: 400,
      student: "Sandra",
      assignment: "W1D3-1",
      difficulty: 1,
      liking: 1
    },
    {
      id: 401,
      student: "Sandra",
      assignment: "W1D3-2",
      difficulty: 1,
      liking: 1
    },
    {
      id: 402,
      student: "Sandra",
      assignment: "W1D3-4",
      difficulty: 3,
      liking: 3
    },
    {
      id: 403,
      student: "Sandra",
      assignment: "W1D3-5",
      difficulty: 4,
      liking: 3
    },
    {
      id: 404,
      student: "Sandra",
      assignment: "W1D3 - Project - Guess-the-number",
      difficulty: 2,
      liking: 4
    },
    {
      id: 405,
      student: "Sandra",
      assignment: "W1D4-1",
      difficulty: 3,
      liking: 2
    },
    {
      id: 406,
      student: "Sandra",
      assignment: "W1D4 - Project - Kleurentoggle",
      difficulty: 1,
      liking: 3
    },
    {
      id: 407,
      student: "Sandra",
      assignment: "W1D5 - Project - Galgje",
      difficulty: 3,
      liking: 3
    },
    {
      id: 408,
      student: "Sandra",
      assignment: "W2D1-1",
      difficulty: 4,
      liking: 1
    },
    {
      id: 409,
      student: "Sandra",
      assignment: "W2D1-2",
      difficulty: 4,
      liking: 3
    },
    {
      id: 410,
      student: "Sandra",
      assignment: "W2D2-1",
      difficulty: 3,
      liking: 4
    },
    {
      id: 411,
      student: "Sandra",
      assignment: "W2D2-2",
      difficulty: 2,
      liking: 3
    },
    {
      id: 412,
      student: "Sandra",
      assignment: "W2D2-3",
      difficulty: 4,
      liking: 3
    },
    {
      id: 413,
      student: "Sandra",
      assignment: "W2D3-1",
      difficulty: 1,
      liking: 2
    },
    {
      id: 414,
      student: "Sandra",
      assignment: "W2D3-2",
      difficulty: 3,
      liking: 2
    },
    {
      id: 415,
      student: "Sandra",
      assignment: "W2D3-3",
      difficulty: 2,
      liking: 2
    },
    {
      id: 416,
      student: "Sandra",
      assignment: "W2D4-1",
      difficulty: 1,
      liking: 3
    },
    {
      id: 417,
      student: "Sandra",
      assignment: "W2D4-2",
      difficulty: 2,
      liking: 4
    },
    {
      id: 418,
      student: "Sandra",
      assignment: "W2D4-3",
      difficulty: 2,
      liking: 2
    },
    {
      id: 419,
      student: "Sandra",
      assignment: "W2D5 - Project - Filmzoeker",
      difficulty: 2,
      liking: 4
    },
    {
      id: 420,
      student: "Sandra",
      assignment: "W3D1-1",
      difficulty: 3,
      liking: 3
    },
    {
      id: 421,
      student: "Sandra",
      assignment: "W3D1-2",
      difficulty: 3,
      liking: 4
    },
    {
      id: 422,
      student: "Sandra",
      assignment: "W3D1-3",
      difficulty: 2,
      liking: 4
    },
    {
      id: 423,
      student: "Sandra",
      assignment: "W3D1-4",
      difficulty: 2,
      liking: 2
    },
    {
      id: 424,
      student: "Sandra",
      assignment: "W3D2-1",
      difficulty: 2,
      liking: 4
    },
    {
      id: 425,
      student: "Sandra",
      assignment: "W3D2-2",
      difficulty: 2,
      liking: 3
    },
    {
      id: 426,
      student: "Sandra",
      assignment: "W3D2-3",
      difficulty: 1,
      liking: 2
    },
    {
      id: 427,
      student: "Sandra",
      assignment: "W3D3-1",
      difficulty: 1,
      liking: 2
    },
    {
      id: 428,
      student: "Sandra",
      assignment: "W3D3-2",
      difficulty: 2,
      liking: 2
    },
    {
      id: 429,
      student: "Sandra",
      assignment: "W3D3-3",
      difficulty: 4,
      liking: 4
    },
    {
      id: 430,
      student: "Sandra",
      assignment: "W3D3-4",
      difficulty: 3,
      liking: 2
    },
    {
      id: 431,
      student: "Sandra",
      assignment: "W3D4-1",
      difficulty: 2,
      liking: 3
    },
    {
      id: 432,
      student: "Sandra",
      assignment: "W3D4-2",
      difficulty: 1,
      liking: 1
    },
    {
      id: 433,
      student: "Sandra",
      assignment: "W3D5 - Project - Todo-List",
      difficulty: 1,
      liking: 2
    },
    {
      id: 434,
      student: "Sandra",
      assignment: "W4D2-1",
      difficulty: 3,
      liking: 3
    },
    {
      id: 435,
      student: "Sandra",
      assignment: "W4D2-2",
      difficulty: 1,
      liking: 1
    },
    {
      id: 436,
      student: "Sandra",
      assignment: "W4D2-3",
      difficulty: 3,
      liking: 4
    },
    {
      id: 437,
      student: "Sandra",
      assignment: "W4D2-4",
      difficulty: 1,
      liking: 4
    },
    {
      id: 438,
      student: "Sandra",
      assignment: "W4D3-1",
      difficulty: 3,
      liking: 1
    },
    {
      id: 439,
      student: "Sandra",
      assignment: "W4D3-2",
      difficulty: 1,
      liking: 3
    },
    {
      id: 440,
      student: "Sandra",
      assignment: "W4D3-3",
      difficulty: 2,
      liking: 4
    },
    {
      id: 441,
      student: "Sandra",
      assignment: "W4D3-4",
      difficulty: 1,
      liking: 4
    },
    {
      id: 442,
      student: "Sandra",
      assignment: "W4D3-5",
      difficulty: 1,
      liking: 3
    },
    {
      id: 443,
      student: "Sandra",
      assignment: "W4D3 - Project - Next-Level CSS",
      difficulty: 3,
      liking: 4
    },
    {
      id: 444,
      student: "Sandra",
      assignment: "W5D4-1",
      difficulty: 1,
      liking: 1
    },
    {
      id: 445,
      student: "Sandra",
      assignment: "W5D5 - Project - Lil_Playlist",
      difficulty: 2,
      liking: 2
    },
    {
      id: 446,
      student: "Sandra",
      assignment: "W6D1-1",
      difficulty: 1,
      liking: 4
    },
    {
      id: 447,
      student: "Sandra",
      assignment: "W6D2-1",
      difficulty: 2,
      liking: 3
    },
    {
      id: 448,
      student: "Sandra",
      assignment: "W6D2 - Project - Eindopdracht",
      difficulty: 4,
      liking: 1
    },
    {
      id: 449,
      student: "Wietske",
      assignment: "SCRUM",
      difficulty: 1,
      liking: 1
    },
    {
      id: 450,
      student: "Wietske",
      assignment: "W1D1-1",
      difficulty: 4,
      liking: 3
    },
    {
      id: 451,
      student: "Wietske",
      assignment: "W1D2-1",
      difficulty: 1,
      liking: 4
    },
    {
      id: 452,
      student: "Wietske",
      assignment: "W1D2-2",
      difficulty: 1,
      liking: 2
    },
    {
      id: 453,
      student: "Wietske",
      assignment: "W1D2-3",
      difficulty: 2,
      liking: 3
    },
    {
      id: 454,
      student: "Wietske",
      assignment: "W1D2-4",
      difficulty: 2,
      liking: 1
    },
    {
      id: 455,
      student: "Wietske",
      assignment: "W1D2-5",
      difficulty: 3,
      liking: 4
    },
    {
      id: 456,
      student: "Wietske",
      assignment: "W1D3-1",
      difficulty: 1,
      liking: 2
    },
    {
      id: 457,
      student: "Wietske",
      assignment: "W1D3-2",
      difficulty: 1,
      liking: 4
    },
    {
      id: 458,
      student: "Wietske",
      assignment: "W1D3-4",
      difficulty: 2,
      liking: 1
    },
    {
      id: 459,
      student: "Wietske",
      assignment: "W1D3-5",
      difficulty: 3,
      liking: 4
    },
    {
      id: 460,
      student: "Wietske",
      assignment: "W1D3 - Project - Guess-the-number",
      difficulty: 2,
      liking: 4
    },
    {
      id: 461,
      student: "Wietske",
      assignment: "W1D4-1",
      difficulty: 2,
      liking: 4
    },
    {
      id: 462,
      student: "Wietske",
      assignment: "W1D4 - Project - Kleurentoggle",
      difficulty: 2,
      liking: 3
    },
    {
      id: 463,
      student: "Wietske",
      assignment: "W1D5 - Project - Galgje",
      difficulty: 3,
      liking: 3
    },
    {
      id: 464,
      student: "Wietske",
      assignment: "W2D1-1",
      difficulty: 3,
      liking: 1
    },
    {
      id: 465,
      student: "Wietske",
      assignment: "W2D1-2",
      difficulty: 4,
      liking: 1
    },
    {
      id: 466,
      student: "Wietske",
      assignment: "W2D2-1",
      difficulty: 2,
      liking: 2
    },
    {
      id: 467,
      student: "Wietske",
      assignment: "W2D2-2",
      difficulty: 2,
      liking: 4
    },
    {
      id: 468,
      student: "Wietske",
      assignment: "W2D2-3",
      difficulty: 3,
      liking: 4
    },
    {
      id: 469,
      student: "Wietske",
      assignment: "W2D3-1",
      difficulty: 2,
      liking: 1
    },
    {
      id: 470,
      student: "Wietske",
      assignment: "W2D3-2",
      difficulty: 1,
      liking: 1
    },
    {
      id: 471,
      student: "Wietske",
      assignment: "W2D3-3",
      difficulty: 2,
      liking: 3
    },
    {
      id: 472,
      student: "Wietske",
      assignment: "W2D4-1",
      difficulty: 1,
      liking: 1
    },
    {
      id: 473,
      student: "Wietske",
      assignment: "W2D4-2",
      difficulty: 2,
      liking: 4
    },
    {
      id: 474,
      student: "Wietske",
      assignment: "W2D4-3",
      difficulty: 4,
      liking: 3
    },
    {
      id: 475,
      student: "Wietske",
      assignment: "W2D5 - Project - Filmzoeker",
      difficulty: 2,
      liking: 2
    },
    {
      id: 476,
      student: "Wietske",
      assignment: "W3D1-1",
      difficulty: 1,
      liking: 3
    },
    {
      id: 477,
      student: "Wietske",
      assignment: "W3D1-2",
      difficulty: 4,
      liking: 4
    },
    {
      id: 478,
      student: "Wietske",
      assignment: "W3D1-3",
      difficulty: 4,
      liking: 2
    },
    {
      id: 479,
      student: "Wietske",
      assignment: "W3D1-4",
      difficulty: 1,
      liking: 4
    },
    {
      id: 480,
      student: "Wietske",
      assignment: "W3D2-1",
      difficulty: 3,
      liking: 2
    },
    {
      id: 481,
      student: "Wietske",
      assignment: "W3D2-2",
      difficulty: 1,
      liking: 3
    },
    {
      id: 482,
      student: "Wietske",
      assignment: "W3D2-3",
      difficulty: 2,
      liking: 4
    },
    {
      id: 483,
      student: "Wietske",
      assignment: "W3D3-1",
      difficulty: 1,
      liking: 4
    },
    {
      id: 484,
      student: "Wietske",
      assignment: "W3D3-2",
      difficulty: 3,
      liking: 1
    },
    {
      id: 485,
      student: "Wietske",
      assignment: "W3D3-3",
      difficulty: 1,
      liking: 3
    },
    {
      id: 486,
      student: "Wietske",
      assignment: "W3D3-4",
      difficulty: 3,
      liking: 4
    },
    {
      id: 487,
      student: "Wietske",
      assignment: "W3D4-1",
      difficulty: 3,
      liking: 4
    },
    {
      id: 488,
      student: "Wietske",
      assignment: "W3D4-2",
      difficulty: 4,
      liking: 2
    },
    {
      id: 489,
      student: "Wietske",
      assignment: "W3D5 - Project - Todo-List",
      difficulty: 2,
      liking: 4
    },
    {
      id: 490,
      student: "Wietske",
      assignment: "W4D2-1",
      difficulty: 3,
      liking: 3
    },
    {
      id: 491,
      student: "Wietske",
      assignment: "W4D2-2",
      difficulty: 2,
      liking: 4
    },
    {
      id: 492,
      student: "Wietske",
      assignment: "W4D2-3",
      difficulty: 1,
      liking: 2
    },
    {
      id: 493,
      student: "Wietske",
      assignment: "W4D2-4",
      difficulty: 4,
      liking: 3
    },
    {
      id: 494,
      student: "Wietske",
      assignment: "W4D3-1",
      difficulty: 2,
      liking: 1
    },
    {
      id: 495,
      student: "Wietske",
      assignment: "W4D3-2",
      difficulty: 1,
      liking: 2
    },
    {
      id: 496,
      student: "Wietske",
      assignment: "W4D3-3",
      difficulty: 1,
      liking: 4
    },
    {
      id: 497,
      student: "Wietske",
      assignment: "W4D3-4",
      difficulty: 3,
      liking: 4
    },
    {
      id: 498,
      student: "Wietske",
      assignment: "W4D3-5",
      difficulty: 4,
      liking: 3
    },
    {
      id: 499,
      student: "Wietske",
      assignment: "W4D3 - Project - Next-Level CSS",
      difficulty: 4,
      liking: 2
    },
    {
      id: 500,
      student: "Wietske",
      assignment: "W5D4-1",
      difficulty: 3,
      liking: 1
    },
    {
      id: 501,
      student: "Wietske",
      assignment: "W5D5 - Project - Lil_Playlist",
      difficulty: 4,
      liking: 2
    },
    {
      id: 502,
      student: "Wietske",
      assignment: "W6D1-1",
      difficulty: 1,
      liking: 1
    },
    {
      id: 503,
      student: "Wietske",
      assignment: "W6D2-1",
      difficulty: 2,
      liking: 1
    },
    {
      id: 504,
      student: "Wietske",
      assignment: "W6D2 - Project - Eindopdracht",
      difficulty: 1,
      liking: 2
    },
    {
      id: 505,
      student: "Storm",
      assignment: "SCRUM",
      difficulty: 1,
      liking: 1
    },
    {
      id: 506,
      student: "Storm",
      assignment: "W1D1-1",
      difficulty: 2,
      liking: 2
    },
    {
      id: 507,
      student: "Storm",
      assignment: "W1D2-1",
      difficulty: 2,
      liking: 3
    },
    {
      id: 508,
      student: "Storm",
      assignment: "W1D2-2",
      difficulty: 1,
      liking: 3
    },
    {
      id: 509,
      student: "Storm",
      assignment: "W1D2-3",
      difficulty: 1,
      liking: 2
    },
    {
      id: 510,
      student: "Storm",
      assignment: "W1D2-4",
      difficulty: 4,
      liking: 3
    },
    {
      id: 511,
      student: "Storm",
      assignment: "W1D2-5",
      difficulty: 3,
      liking: 3
    },
    {
      id: 512,
      student: "Storm",
      assignment: "W1D3-1",
      difficulty: 2,
      liking: 3
    },
    {
      id: 513,
      student: "Storm",
      assignment: "W1D3-2",
      difficulty: 1,
      liking: 1
    },
    {
      id: 514,
      student: "Storm",
      assignment: "W1D3-4",
      difficulty: 1,
      liking: 1
    },
    {
      id: 515,
      student: "Storm",
      assignment: "W1D3-5",
      difficulty: 2,
      liking: 2
    },
    {
      id: 516,
      student: "Storm",
      assignment: "W1D3 - Project - Guess-the-number",
      difficulty: 3,
      liking: 4
    },
    {
      id: 517,
      student: "Storm",
      assignment: "W1D4-1",
      difficulty: 4,
      liking: 2
    },
    {
      id: 518,
      student: "Storm",
      assignment: "W1D4 - Project - Kleurentoggle",
      difficulty: 3,
      liking: 2
    },
    {
      id: 519,
      student: "Storm",
      assignment: "W1D5 - Project - Galgje",
      difficulty: 4,
      liking: 4
    },
    {
      id: 520,
      student: "Storm",
      assignment: "W2D1-1",
      difficulty: 2,
      liking: 4
    },
    {
      id: 521,
      student: "Storm",
      assignment: "W2D1-2",
      difficulty: 3,
      liking: 2
    },
    {
      id: 522,
      student: "Storm",
      assignment: "W2D2-1",
      difficulty: 4,
      liking: 4
    },
    {
      id: 523,
      student: "Storm",
      assignment: "W2D2-2",
      difficulty: 2,
      liking: 1
    },
    {
      id: 524,
      student: "Storm",
      assignment: "W2D2-3",
      difficulty: 1,
      liking: 1
    },
    {
      id: 525,
      student: "Storm",
      assignment: "W2D3-1",
      difficulty: 2,
      liking: 3
    },
    {
      id: 526,
      student: "Storm",
      assignment: "W2D3-2",
      difficulty: 3,
      liking: 4
    },
    {
      id: 527,
      student: "Storm",
      assignment: "W2D3-3",
      difficulty: 3,
      liking: 2
    },
    {
      id: 528,
      student: "Storm",
      assignment: "W2D4-1",
      difficulty: 3,
      liking: 4
    },
    {
      id: 529,
      student: "Storm",
      assignment: "W2D4-2",
      difficulty: 4,
      liking: 3
    },
    {
      id: 530,
      student: "Storm",
      assignment: "W2D4-3",
      difficulty: 2,
      liking: 1
    },
    {
      id: 531,
      student: "Storm",
      assignment: "W2D5 - Project - Filmzoeker",
      difficulty: 4,
      liking: 1
    },
    {
      id: 532,
      student: "Storm",
      assignment: "W3D1-1",
      difficulty: 2,
      liking: 1
    },
    {
      id: 533,
      student: "Storm",
      assignment: "W3D1-2",
      difficulty: 2,
      liking: 2
    },
    {
      id: 534,
      student: "Storm",
      assignment: "W3D1-3",
      difficulty: 1,
      liking: 2
    },
    {
      id: 535,
      student: "Storm",
      assignment: "W3D1-4",
      difficulty: 2,
      liking: 3
    },
    {
      id: 536,
      student: "Storm",
      assignment: "W3D2-1",
      difficulty: 1,
      liking: 4
    },
    {
      id: 537,
      student: "Storm",
      assignment: "W3D2-2",
      difficulty: 3,
      liking: 3
    },
    {
      id: 538,
      student: "Storm",
      assignment: "W3D2-3",
      difficulty: 3,
      liking: 4
    },
    {
      id: 539,
      student: "Storm",
      assignment: "W3D3-1",
      difficulty: 3,
      liking: 4
    },
    {
      id: 540,
      student: "Storm",
      assignment: "W3D3-2",
      difficulty: 1,
      liking: 2
    },
    {
      id: 541,
      student: "Storm",
      assignment: "W3D3-3",
      difficulty: 3,
      liking: 1
    },
    {
      id: 542,
      student: "Storm",
      assignment: "W3D3-4",
      difficulty: 3,
      liking: 1
    },
    {
      id: 543,
      student: "Storm",
      assignment: "W3D4-1",
      difficulty: 2,
      liking: 4
    },
    {
      id: 544,
      student: "Storm",
      assignment: "W3D4-2",
      difficulty: 3,
      liking: 4
    },
    {
      id: 545,
      student: "Storm",
      assignment: "W3D5 - Project - Todo-List",
      difficulty: 3,
      liking: 2
    },
    {
      id: 546,
      student: "Storm",
      assignment: "W4D2-1",
      difficulty: 2,
      liking: 1
    },
    {
      id: 547,
      student: "Storm",
      assignment: "W4D2-2",
      difficulty: 3,
      liking: 3
    },
    {
      id: 548,
      student: "Storm",
      assignment: "W4D2-3",
      difficulty: 2,
      liking: 2
    },
    {
      id: 549,
      student: "Storm",
      assignment: "W4D2-4",
      difficulty: 3,
      liking: 4
    },
    {
      id: 550,
      student: "Storm",
      assignment: "W4D3-1",
      difficulty: 3,
      liking: 4
    },
    {
      id: 551,
      student: "Storm",
      assignment: "W4D3-2",
      difficulty: 2,
      liking: 3
    },
    {
      id: 552,
      student: "Storm",
      assignment: "W4D3-3",
      difficulty: 1,
      liking: 1
    },
    {
      id: 553,
      student: "Storm",
      assignment: "W4D3-4",
      difficulty: 3,
      liking: 1
    },
    {
      id: 554,
      student: "Storm",
      assignment: "W4D3-5",
      difficulty: 2,
      liking: 3
    },
    {
      id: 555,
      student: "Storm",
      assignment: "W4D3 - Project - Next-Level CSS",
      difficulty: 4,
      liking: 1
    },
    {
      id: 556,
      student: "Storm",
      assignment: "W5D4-1",
      difficulty: 2,
      liking: 2
    },
    {
      id: 557,
      student: "Storm",
      assignment: "W5D5 - Project - Lil_Playlist",
      difficulty: 1,
      liking: 2
    },
    {
      id: 558,
      student: "Storm",
      assignment: "W6D1-1",
      difficulty: 4,
      liking: 4
    },
    {
      id: 559,
      student: "Storm",
      assignment: "W6D2-1",
      difficulty: 1,
      liking: 1
    },
    {
      id: 560,
      student: "Storm",
      assignment: "W6D2 - Project - Eindopdracht",
      difficulty: 3,
      liking: 3
    }
  ]
export default database