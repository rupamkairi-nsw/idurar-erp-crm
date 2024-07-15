const create = async (Model, req, res) => {
  console.log('create guess 1');
  // Creating a new document in the collection
  req.body.removed = false;
  const result = await new Model({
    ...req.body,
  }).save();

  // Returning successfull response
  return res.status(200).json({
    success: true,
    result: null,
    message: 'Successfully Created the document in Model ',
  });
};

module.exports = create;
