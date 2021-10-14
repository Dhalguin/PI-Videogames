export const validate = (input) => {
  let errors = {};

  if (!input.title) errors.title = "Title is required.";
  if (!input.description) errors.description = "Description is required.";
  if (!input.released) errors.released = "Released is required.";
  if (!input.rating) {
    errors.rating = "Rating is required.";
  } else if (input.rating < 1 || input.rating > 5) {
    errors.rating = "Rating must be between 1 and 5.";
  }
  if (!input.platforms) errors.platforms = "Platforms are required.";

  return errors;
};
