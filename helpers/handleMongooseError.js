const handleMongoooseError = (error, data, next) => {
  error.status = 400;
  next();
};

export default handleMongoooseError;
