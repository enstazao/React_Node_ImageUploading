const asyncHandler = require('express-async-handler');

// @desc       Save Image to Folder
// @route      POST /api/saveImage
// @access     Public
const saveImage = asyncHandler(async (req, res) => {
  console.log(req.body);
});

module.exports = { saveImage };
