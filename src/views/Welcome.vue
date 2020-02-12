<template>
  <section class="welcome">
    <span class="welcome__logo">🍕</span>
    <h1 class="welcome__title">{{title}}</h1>
    <span class="welcome__invite" v-html="invite"></span>
    <button class="welcome__button">Start</button>
  </section>
</template>

<script>
export default {
  name: "welcome",
  data() {
    return {
      title: "",
      invite: ""
    };
  },
  async created() {
    let response = await fetch(
      "https://wp.recruitment.newfantastic.com/wp-json/wp/v2/pages?slug=welcome"
    );
    response = await response.json();
    console.log(response);
    let { title, content } = response[0];
    this.$data.title = title.rendered;
    this.$data.invite = content.rendered;
  }
};
</script>
<style lang="scss">
.welcome {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  &__logo {
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 70px;
  }
  &__title {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-transform: uppercase;
    margin: 40px 0;
  }
  &__invite {
    font-weight: 500;
    font-size: 26px;
    line-height: 32px;
    color: #7b7b7b;
  }
  &__button {
    width: 140px;
    height: 48px;
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
    background: black;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 40px;
  }
}
</style>
