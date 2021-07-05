const yup = require("yup");

const noteSchema = yup.object({
  name: yup.string().trim().required(),
  category: yup.string().required(),
  content: yup.string().trim().required(),
});

module.exports = {
  noteSchema,
};
