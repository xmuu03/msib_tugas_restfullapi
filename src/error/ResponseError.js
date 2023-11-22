/**
 * Class to handle error response | custom error
 * @class ResponseError
 */
class ResponseError extends Error {
    /**
     * @param {number} status - status code
     * @param {string} message - error message
     */
    constructor(status, message) {
        super(message)
        this.status = status
    }
}

module.exports = ResponseError