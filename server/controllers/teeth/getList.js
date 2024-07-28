// @desc    Get user
// @route   GET /api/users
// @access  Public

import asyncHandler from 'express-async-handler'

export const getTeethList = asyncHandler(async (req, res) => {
	const result = [
		{
			"ID": 1,
			"NAME": "Моляры",
			"NUMBER_POSITION": 18,
			"SECTION": 1,
			"SECTION_POSITION": 8,
			"PICTURE": {
				ID: 1,
				SRC: "https://www.clipartmax.com/png/middle/469-4695104_tooth-svg-png-icon-free-tooth-svg.png"
			}
		},
		{
			"ID": "2",
			"NAME": "Моляры",
			"NUMBER_POSITION": "17",
			"SECTION": "1",
			"SECTION_POSITION": "7",
			"PICTURE": "37"
		},
		{
			"ID": "3",
			"NAME": "Моляры",
			"NUMBER_POSITION": "16",
			"SECTION": "1",
			"SECTION_POSITION": "6",
			"PICTURE": "38"
		},
		{
			"ID": "4",
			"NAME": "Премоляры",
			"NUMBER_POSITION": "15",
			"SECTION": "1",
			"SECTION_POSITION": "5",
			"PICTURE": "39"
		},
		{
			"ID": "5",
			"NAME": "Премоляры",
			"NUMBER_POSITION": "14",
			"SECTION": "1",
			"SECTION_POSITION": "4",
			"PICTURE": "40"
		},
		{
			"ID": "6",
			"NAME": "Клык",
			"NUMBER_POSITION": "13",
			"SECTION": "1",
			"SECTION_POSITION": "3",
			"PICTURE": "41"
		},
		{
			"ID": "7",
			"NAME": "Резцы",
			"NUMBER_POSITION": "12",
			"SECTION": "1",
			"SECTION_POSITION": "2",
			"PICTURE": "42"
		},
		{
			"ID": "8",
			"NAME": "Резцы",
			"NUMBER_POSITION": "11",
			"SECTION": "1",
			"SECTION_POSITION": "1",
			"PICTURE": "43"
		},
		{
			"ID": "9",
			"NAME": "Резцы",
			"NUMBER_POSITION": "21",
			"SECTION": "2",
			"SECTION_POSITION": "1",
			"PICTURE": "44"
		},
		{
			"ID": "10",
			"NAME": "Резцы",
			"NUMBER_POSITION": "22",
			"SECTION": "2",
			"SECTION_POSITION": "2",
			"PICTURE": "45"
		},
		{
			"ID": "11",
			"NAME": "Клык",
			"NUMBER_POSITION": "23",
			"SECTION": "2",
			"SECTION_POSITION": "3",
			"PICTURE": "46"
		},
		{
			"ID": "12",
			"NAME": "Премоляры",
			"NUMBER_POSITION": "24",
			"SECTION": "2",
			"SECTION_POSITION": "4",
			"PICTURE": "47"
		},
		{
			"ID": "14",
			"NAME": "Премоляры",
			"NUMBER_POSITION": "25",
			"SECTION": "2",
			"SECTION_POSITION": "5",
			"PICTURE": "48"
		},
		{
			"ID": "15",
			"NAME": "Моляры",
			"NUMBER_POSITION": "26",
			"SECTION": "2",
			"SECTION_POSITION": "6",
			"PICTURE": "49"
		},
		{
			"ID": "16",
			"NAME": "Моляры",
			"NUMBER_POSITION": "27",
			"SECTION": "2",
			"SECTION_POSITION": "7",
			"PICTURE": "50"
		},
		{
			"ID": "17",
			"NAME": "Моляры",
			"NUMBER_POSITION": "28",
			"SECTION": "2",
			"SECTION_POSITION": "8",
			"PICTURE": "51"
		},
		{
			"ID": "18",
			"NAME": "Моляры",
			"NUMBER_POSITION": "38",
			"SECTION": "4",
			"SECTION_POSITION": "8",
			"PICTURE": "52"
		},
		{
			"ID": "19",
			"NAME": "Моляры",
			"NUMBER_POSITION": "37",
			"SECTION": "4",
			"SECTION_POSITION": "7",
			"PICTURE": "53"
		},
		{
			"ID": "20",
			"NAME": "Моляры",
			"NUMBER_POSITION": "36",
			"SECTION": "4",
			"SECTION_POSITION": "6",
			"PICTURE": "54"
		},
		{
			"ID": "21",
			"NAME": "Премоляры",
			"NUMBER_POSITION": "35",
			"SECTION": "4",
			"SECTION_POSITION": "5",
			"PICTURE": "55"
		},
		{
			"ID": "22",
			"NAME": "Премоляры",
			"NUMBER_POSITION": "34",
			"SECTION": "4",
			"SECTION_POSITION": "4",
			"PICTURE": "56"
		},
		{
			"ID": "23",
			"NAME": "Клык",
			"NUMBER_POSITION": "33",
			"SECTION": "4",
			"SECTION_POSITION": "3",
			"PICTURE": "57"
		},
		{
			"ID": "24",
			"NAME": "Резцы",
			"NUMBER_POSITION": "32",
			"SECTION": "4",
			"SECTION_POSITION": "2",
			"PICTURE": "58"
		},
		{
			"ID": "25",
			"NAME": "Резцы",
			"NUMBER_POSITION": "31",
			"SECTION": "4",
			"SECTION_POSITION": "1",
			"PICTURE": "59"
		},
		{
			"ID": "26",
			"NAME": "Резцы",
			"NUMBER_POSITION": "41",
			"SECTION": "3",
			"SECTION_POSITION": "1",
			"PICTURE": "60"
		},
		{
			"ID": "27",
			"NAME": "Резцы",
			"NUMBER_POSITION": "42",
			"SECTION": "3",
			"SECTION_POSITION": "2",
			"PICTURE": "61"
		},
		{
			"ID": "28",
			"NAME": "Клык",
			"NUMBER_POSITION": "43",
			"SECTION": "3",
			"SECTION_POSITION": "3",
			"PICTURE": "62"
		},
		{
			"ID": "29",
			"NAME": "Премоляры",
			"NUMBER_POSITION": "44",
			"SECTION": "3",
			"SECTION_POSITION": "4",
			"PICTURE": "63"
		},
		{
			"ID": "30",
			"NAME": "Премоляры",
			"NUMBER_POSITION": "45",
			"SECTION": "3",
			"SECTION_POSITION": "5",
			"PICTURE": "60"
		},
		{
			"ID": "31",
			"NAME": "Моляры",
			"NUMBER_POSITION": "46",
			"SECTION": "3",
			"SECTION_POSITION": "6",
			"PICTURE": "61"
		},
		{
			"ID": "32",
			"NAME": "Моляры",
			"NUMBER_POSITION": "47",
			"SECTION": "3",
			"SECTION_POSITION": "7",
			"PICTURE": "62"
		},
		{
			"ID": "33",
			"NAME": "Моляры",
			"NUMBER_POSITION": "48",
			"SECTION": "3",
			"SECTION_POSITION": "8",
			"PICTURE": "63"
		}

	]

	// res.json({
	// 	"error": true,
	// 	"message": "Some error",
	// 	"data": [
	// 		{
	// 			message: "Error 1",
	// 			code: "TEST_ERROR",
	// 			customData: null
	// 		},
	// 		{
	// 			message: "Error 2",
	// 			code: "TEST_ERROR",
	// 			customData: null
	// 		}
	// 	]
	// })
	res.json({
		"error": false,
		"message": "some error",
		"data": result
	})
})
