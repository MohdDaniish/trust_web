const multer = require('multer');
const path = require('path');

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 200000, // Limit file size to 200 KB
  },
  fileFilter: (req, file, cb) => {
    const allowedFileTypes = /jpeg|jpg|png/;
    const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedFileTypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      return res.status(200).json({ status: false, message: 'Invalid file type. Only JPEG, JPG, and PNG are allowed.' });
      //return cb(new Error('Invalid file type. Only JPEG, JPG, and PNG are allowed.'));
    }
  },
});

module.exports = {
    upload
}