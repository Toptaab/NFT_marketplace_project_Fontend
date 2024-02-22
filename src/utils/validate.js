const validate = schema => input => {
    const { error } = schema.validate(input, { abortEarly: false });
  
    if (error) {
      const result = error.details.reduce((acc, el) => {
        console.log(error.details)
        acc[el.path[0]] = el.message;
        return acc;
      }, {});
      return result;
    }
  };
  
  export default validate;
  