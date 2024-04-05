const Validator = require("fastest-validator");

const validationInput = (inputToValidate, schema, res) => {
  const v = new Validator();
  const check = v.compile(schema);
  const validationResponse = check(inputToValidate);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed",
      errors: validationResponse,
    });
  }
};

module.exports = validationInput;
