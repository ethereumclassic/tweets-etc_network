# The tweets/ folder

To create a new tweet create a new `*.tweet` file in this `tweets/` folder.

<kbd>[Create new tweet](../../../new/main/?filename=tweets/<your-path>.tweet)</kbd>

## Simple Tweets

For a simple text only tweet, create a new file `tweets/2022_01_31_Description.tweet` with the content

```
Hello, world!
```

For more advanced tweets such as retweets, meda and polls, see the [main readme](../README.md#advanced-tweeting) or the `$_sample_*.tweet` files.

## Notes

- Only newly created files are handled, deletions, updates or renames are ignored.
- `*.tweet` files will not be created for tweets you send out directly from twitter.com
- If you need to rename an existing tweet file, please do so locally using [`git mv old_filename new_filename`](https://help.github.com/en/articles/renaming-a-file-using-the-command-line), otherwise it may occur as deleted and added which would trigger a new tweet.
- your message must fit into a single tweet

## Questions?

If you have any further questions or suggestions, please create an issue at https://github.com/twitter-together/action/issues/new
