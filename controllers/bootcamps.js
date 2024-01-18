
// decription Get all bootcamps
// add route Get /api/avi/bootcamps
// access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps'});
}

// decription Get one bootcamps
// add route Get /api/avi/bootcamps/:id
// access Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Show bootcamps ${req.params.id}` });
}

// decription Create one bootcamps
// add route Post /api/avi/bootcamps
// access Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamps'});
}

// decription Update one bootcamps
// add route PUT /api/avi/bootcamps/:id
// access Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamps ${req.params.id}` });
}

// decription Delete one bootcamps
// add route Post /api/avi/bootcamps/:id
// access Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete bootcamps ${req.params.id}` });
}
