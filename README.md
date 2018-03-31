# 📝 slack.log()
Simple util to log messages to Slack - slack.log()

## Configure

- Simply put a slack incoming webhook url in `SLACK_WEBHOOK_URL` environment variable (Recommended).
- Can also configure by using `slack.configure({url: 'SLACK_URL_HERE'})`.
- Can alsp override the slack channel (optional) the webhook posts to, by using `SLACK_CHANNEL` env variable or by passing `channel` field to slack.configure() method.

## Usage

- Simply use like a console.log statement - `slack.log("Yay! It works")`
- Can also post an object in the second variable which gets formatted and posted as a code block (useful for logging data). For example, `slack.log('HELLO!', {first_name: 'john', last_name: 'doe'})`
