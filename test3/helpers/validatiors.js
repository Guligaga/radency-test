const yup = require("yup");

const noteSchema = yup.object({
  name: yup.string().trim().required(),
  category: yup.string().required(),
  content: yup.string().trim().required(),
});

const archivationSchema = yup.object({
  isArchived: yup.boolean().required(),
});

module.exports = {
  noteSchema,
  archivationSchema,
};
