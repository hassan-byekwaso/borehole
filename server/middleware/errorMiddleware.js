function errorMiddleware(error, request, response, next) {
  if (response.headersSent) {
    return next(error)
  }

  const status =
    Number.isInteger(error.status) && error.status >= 400 && error.status < 600
      ? error.status
      : 500
  const messages = {
    400: 'Bad request.',
    403: 'Request origin is not allowed.',
    404: 'Route not found.',
    413: 'Request body is too large.',
    429: 'Too many requests. Please try again later.',
  }

  if (status >= 500) {
    console.error('Request failed with an internal server error.')
  }

  response.status(status).json({
    error: messages[status] || 'Request failed.',
  })
}

module.exports = errorMiddleware
