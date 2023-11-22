const ResponseError = require("../error/ResponseError")
/**
 * function for input or request validation using joi
 * @param {schema} schema - Joi Schema Validation
 * @param {Object} request - request object to validate
 * @returns {Object} request object
 */
const validate = (schema, request) => {
    const result = schema.validate(request)

    if (result.error) throw new ResponseError(400, result.error.message)

    return result.value
}

module.exports = validate