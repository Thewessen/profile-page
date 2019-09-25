<template>
  <article>
    <ArticleHeading
      title="OverTheWire"
      subtitle="Capture The Flag"
      github="https://github.com/Thewessen/CTF/tree/master/OverTheWire" />
    <p>
      <a href="https://www.overthewire.org" rel="noopener noreferer" target="_blank">
        OverTheWire.org
      </a>
      is considerd by many people as a great place to start venturing into the
      world of flags, capturing as many as you can. It's completely free, and
      you don't even need an account to start playing. Games found here are
      often rescued from other website, and hosted directly at there server.
    </p>
    <p>
      The wargames, as the games are called here, cover a big range of
      difficulty. Starting easy, while others seem almost undoable. Multiple
      categories of computer security are coverd: Cryptography, websecurity,
      Git, portscanning, shell, etc. I find the wargames more about learning
      the internals of the pc, rather then preparing you to become a hacker
      (which is often a dirty word).
    </p>
    <p>
      The snippits you see below are not always complete writeups. I wrote them
      for myself, so I could do a simple <code>grep -r</code> inside the
      directory if I would find myself struggeling with a problem I completed
      before.
    </p>
    <h2>All wargames</h2>
    <ButtonList
      :active="wargame"
      :graphql="require('../graphql/OverTheWireWargames.gql')"
      baseURL="/CTF/OverTheWire" />
    <CTFBandit v-if="wargame === 'Bandit'" />
    <CTFKrypton v-if="wargame === 'Krypton'" />
    <CTFLeviathan v-if="wargame === 'Leviathan'" />
    <CTFNatas v-if="wargame === 'Natas'" />
  </article>
</template>

<script>
import ButtonList from '@/components/ButtonList'
import ArticleHeading from '@/components/ArticleHeading'
import CTFBandit from '@/components/CTFBandit'
import CTFKrypton from '@/components/CTFKrypton'
import CTFLeviathan from '@/components/CTFLeviathan'
import CTFNatas from '@/components/CTFNatas'
export default {
  name: "OverTheWire",
  components: {
    ButtonList,
    ArticleHeading,
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
