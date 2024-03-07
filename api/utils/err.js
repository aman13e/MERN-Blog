export const errorHandler = (stastusCode, message) => {
  const error = new Error(message);
  error.statusCode = stastusCode;
  return error;
};
