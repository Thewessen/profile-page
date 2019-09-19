<template>
  <div class="about">
    <b-navbar :sticky="true" type="dark" variant="info">
      <b-navbar-brand>OverTheWire</b-navbar-brand>

      <b-navbar-nav class="ml-auto mr-2">
        <ListWargames
          :wargame="wargame" />
      </b-navbar-nav>
    </b-navbar>
    <CTFBandit v-if="wargame === 'bandit'" />
    <CTFKrypton v-if="wargame === 'krypton'" />
  </div>
</template>

<script>
import ListWargames from '../components/ListWargames'
import CTFBandit from '../components/CTFBandit'
import CTFKrypton from '../components/CTFKrypton'
export default {
  name: "OverTheWire",
  components: {
    ListWargames,
    CTFBandit,
    CTFKrypton,
  },
  props: {
    wargame: {
      type: String,
      default: 'bandit'
    }
  }
}
</script>
