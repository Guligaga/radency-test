const yup = require("yup");

const noteSchema = yup.object({
  name: yup.string().trim().required(),
  category: yup.string().required(),
  content: yup.string().trim().required(),
});

const updateSchema = yup.object({
  name: yup.string().trim(),
  category: yup.string(),
  content: yup.string().trim(),
});

module.exports = {
  noteSchema,
  updateSchema,
};
