'use strict';

module.exports.hello = async (event) => {

  let message = "HELLO WORLD";
  const name = event.pathParameters && event.pathParameters.name;
  if (name !== null){
    message = `Hello ${name}`
  }
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: message,
        input: event,
      },
      null,
      2
    ),
  };
};
