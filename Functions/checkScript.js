// netlify/functions/checkScript.js
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  const scriptPath = path.join(__dirname, 'path_to_your_script_file');

  try {
    if (fs.existsSync(scriptPath)) {
      return {
        statusCode: 200,
        body: JSON.stringify({ exists: true }),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ exists: false }),
      };
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
