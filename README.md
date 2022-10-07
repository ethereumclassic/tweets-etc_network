# ETC Twitter Together

This repo uses the [Twitter-Together](https://github.com/twitter-together/action/) GitHub Action to allow anyone to make a pull request in order to submit tweets to the [@ETC_Network](https://twitter.com/ETC_Network) Twitter Account.

## How to Tweet

1. Open the [tweets](./tweets/) folder.
1. Click "Add file" -> "Create new file".
1. Enter the contents of the tweet you want to submit. 
    - Make sure the content follows the [rules](#Rules).
    - Ensure the formatting matches one of the [tweet types](#Tweet-Types).
1. Make sure the filename is correct ("Name your file...").
    - It must end in `.tweet` and be inside the `tweets` folder. 
    - It must follow the format `YYYY_MM_DD-Your-Description.tweet`
1. Click "Propose new file", ensuring you are creating a new branch.
1. Click "Create pull request"
1. Your tweet will be reviewed for approval

## Rules

- [TBD](https://github.com/ethereumclassic/twitter-together/issues/15)

## Tweet Types

### [Simple Tweet](https://twitter.com/testing_tt_/status/1575821590381690881)

```tweet
Hello, world!!!
```

### Retweet (with no text)

```tweet
---
retweet: https://twitter.com/testing_tt_/status/1576500683087302656
---
```

### [Retweet (with text)](https://twitter.com/testing_tt_/status/1576502768604512256)

```tweet
---
retweet: https://twitter.com/testing_tt_/status/1576500683087302656
---

Whoops!
```

### [Reply](https://twitter.com/testing_tt_/status/1576500683087302656#m)

```tweet
---
reply: https://twitter.com/testing_tt_/status/1576496789741391872
---

You forgot about orange!
```

### [Media](https://twitter.com/testing_tt_/status/1576505043838181377#m)

You must upload the images you want to tweet into the `media` folder, which you can do by editing updating your PR's branch (open `media` folder and "Add file" -> "Upload file"). Make sure the filenames match your tweet content.

```tweet
---
media:
  - file: cat.jpg
    alt: A cat
  - file: dog.jpg
    alt: A dog
---

Here are some cute animals!
```

### [Poll](https://twitter.com/testing_tt_/status/1576496789741391872)

```tweet
---
poll:
  - Red
  - Blue
  - Green
---

What is your favorite color?
```

### [Threading](https://twitter.com/testing_tt_/status/1576508829965197314)

Threaded tweets are tweeted in series and separated by `---`.


```tweet
🧵 Here is a thread...

---
---
poll:
  - Banana
  - Mango
---

Which fruit is more delicious?

---
We hope you enjoyed this thread...
---
We certainly did.
```

## Maintainers

- TODO