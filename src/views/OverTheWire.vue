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
    <CTFLeviathan v-if="wargame === 'leviathan'" />
    <CTFNatas v-if="wargame === 'natas'" />
  </div>
</template>

<script>
import ListWargames from '../components/ListWargames'
import CTFBandit from '../components/CTFBandit'
import CTFKrypton from '../components/CTFKrypton'
import CTFLeviathan from '../components/CTFLeviathan'
import CTFNatas from '../components/CTFNatas'
export default {
  name: "OverTheWire",
  components: {
    ListWargames,
    CTFBandit,
    CTFKrypton,
    CTFLeviathan,
    CTFNatas,
  },
  props: {
    wargame: {
      type: String,
      default: 'bandit'
    }
  }
}
</script>
