<template>
  <div class="unauth">
    <p>To use this extension, please authorize access your Twitch User ID</p>
    <div class="">
      <input @click="requestAuth" class="auth-button" type="button" value="Authorize" />
    </div>
  </div>
</template>

<script setup>
  import twitch from '@/utils/twitch'

  // methods
  function requestAuth() {
    twitch.actions.requestIdShare();
  }


</script>

<style scoped>
.unauth {
  display: flex;
  padding: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.unauth p {
  font-size: 24px;
}

.auth-button {
  height: 50px;
  width: 50%;
  background-color: #bf94ff;
  color: white;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
}

</style>
