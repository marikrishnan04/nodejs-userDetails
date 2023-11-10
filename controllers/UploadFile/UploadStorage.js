const multer = require('multer');
const File = require('../../models/uploadFile/uploadFile');


// Set up Multer for file uploads
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });



// Use the middleware before defining the route handler
const uploadMiddleware = upload.single('file');

exports.uploadFiles = async (req, res) => {
  try {
    // Call the middleware here to handle file upload
    uploadMiddleware(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: 'File upload failed' });
      }

      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      // Save file information to MongoDB
      const file = new File({
        name: req.file.originalname,
        path: req.file.path,
      });

      file.save()
        .then((savedFile) => {
          console.log(savedFile._id);
          res.json({ message: 'File uploaded successfully', id: savedFile._id });
        })
        .catch((error) => {
          console.error(error);
          res.status(500).send('File save process failed.');
        });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('File upload and save process failed.');
  }
};
