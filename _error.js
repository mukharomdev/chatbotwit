// _error.js

module.exports = async function HandleError(context, props) {
  console.error(props.error);
  // or you can choose not to reply any error messages
  await context.sendText(
    'There are some unexpected errors happened. Please try again later, sorry for the inconvenience.'
  );
  if (process.env.NODE_ENV === 'production') {
    // send your error to your error tracker, for example: Sentry
  }
  if (process.env.NODE_ENV === 'development') {
    await context.sendText(props.error.stack);
  }
};