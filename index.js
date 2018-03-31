const request = require("request");

let url = process.env.SLACK_WEBHOOK_URL;
let channel = process.env.SLACK_CHANNEL;

exports.configure = options => {
  url = options.url;
  channel = options.channel;
};

exports.log = (message, body) => {
  if (!url) {
    console.log("Slack webhook url not configured!");
    return;
  }
  if (typeof message === "object") message = JSON.stringify(message);
  let text = message;
  if (body) {
    if (typeof body === "object") body = JSON.stringify(body);
    text += `\n\`\`\`${body}\`\`\``;
  }
  if (!text) {
    return;
  }
  const options = {
    method: "POST",
    url,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text,
      channel
    })
  };

  request(options, err => {
    if (err) console.log(err);
  });
};
