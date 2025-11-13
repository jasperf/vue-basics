const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      tweet: ''
    }
  },
  computed: {
    tweetIsEmpty() {
      return this.tweet.length === 0;
    }
  }
});

app.mount('#twitterVue');