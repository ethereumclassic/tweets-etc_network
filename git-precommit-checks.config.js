module.exports = {
  display: {
    notifications: true,
    offendingContent: true,
    rulesSummary: false,
    shortStats: true,
    verbose: false,
  },
  rules: [
    {
      filter: /(?<!_reply|_retweet|_retweet_no_text)\.tweet$/gim,
      message: "Please check your Tweet length, it should be below 280 chars",
      regex: /^.{281,}$/,
    },
  ],
};
