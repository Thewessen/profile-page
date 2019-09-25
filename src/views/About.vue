<template>
  <article>
    <div class="personalia">
      <h1>Personalia</h1>
      <img
        src="@/assets/me.jpg"
        alt="Samuel Thewessen" />
      <ul>
        <li>Samuel Thewessen</li>
        <li>21 June 1987</li>
        <li>Amsterdam (The Netherlands)</li>
        <li>sthewessen@gmail.com</li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferer"
            href="https://github.com/users/Thewessen">
            GitHub
          </a>
        </li>
      </ul>
    </div>
    <h2>Introduction</h2>
    <p>
      Welcome to my profile page. My name is Samuel Thewessen. I am a math
      teacher for nearly six years now, working at different schools across the
      country. I studied math at the Higher Education College of Arnhem and
      Nijmegen, where I got my degree in 2016. Three years ago I moved to
      Amsterdam, because I really love the city. Here I live with my beautiful
      girlfriend, and an adorable little kitten.
    </p>
    <p>
      I have many friends who are programming professionally. Most of them are
      former costudents. Actually, I am the only one who went on to become a
      teacher.  Most of them stopped before graduating, or immediatly after. In
      my oppinion, they are a lot smarter then me, knowing they wouldn't be
      happy if they worked as a teacher at highschool. Maybe naive from me to
      keep going, but eventually I prepared, and are now ready, to follow their
      carreer path.
    </p>
    <p>
      Because most of <code class="main-title">this</code> website is about
      programming, on this page I'll describe some of my other passions. Maybe
      it will give the reader some understanding in what drives me to do what I
      like most: speaking an abstract language.
    </p>
    <h2>Ballet</h2>
    <p>
      What made me do ballet? I started ballet lessons when I was 4 years old.
      At the age of ten, I knew what I wanted to become: a ballet danser. Living in
      Winterswijk at that time, the closest place for studying ballet was
      Arnhem. So I did, for a short time, but also went to check out the
      National Ballet Academy in Amsterdam.
    </p>
    <p>
      Doing audition for a course where ballet lessons are mixed with lessons
      in Karate, specially focussed on boys, I made an impression. The National
      Ballet Academy wanted me as their student, studying ballet six days a
      week on the academy. And so I moved to Amsterdam, two weeks after the
      audition.  I needed foster parents, because my real parents lived too far
      away.
    </p>
    <p>
      At the academy I made it to the second year of highschool. The big
      selection was a year earlier and I made it through. It was at that time I
      realised becoming a danser means spending most of your time in studios
      practicing, practicing, practicing... It was not what I wanted. I wanted
      to enjoy life some more when I was still young, and I missed my parents
      very much. So I quited.
    </p>
    <p>
      At the age of twenty-two I started dancing again. This time at a
      balletschool in Arnhem, where they had balletclasses specially for male.
      Some of you might not know dansing ballet is really different between
      males and females. I dansed another two years, until the group fell apart.
      Most boys went to college in a different city. This was the last time I
      set foot in a balletroom.
    </p>
    <h2>Piano</h2>
    <p>
      Playing classical piano is one of the hobbies that stayed with me my
      entier life. I started when I was six years old, and had lessons
      off and on. At the age of twelve I dreamed about playing the
      <em>Kinderszenen</em> from Schumann. Bearly able to grasp the big chords
      with my tiny fingers, I did finished the first piece: <em>Von fremden
      Ländern und Menschen</em>.
    </p>
    <p>
      I also studied some Sonates from Beethoven and Mozart, some Etudes and
      Nocturnes from Chopin and <em>Pictures at an Exhibition</em> from
      Mussorgsky. As you can see, I really like playing classical music. In a
      strange way I feel freedom expressing myself when playing.
    </p>
    <p>
      Only just recently I finished studying all thirteen pieces of the
      <em>Kinderszenen</em> from Schuman, thereby completing a dream I had from
      childhood. Next up? Propably the <em>Goldberg Variations</em> from Bach.
      But I take it one step at a time.  
    </p>
  </article>
</template>

<script>
export default {
  name: "Contact",
}
</script>

<style lang="sass" scoped>
.personalia
  display: flex
  flex-flow: column wrap
  justify-content: space-between
  align-items: flex-start
  font-size: 1.3rem
  font-weight: 300
  width: 100%
  > img
    width: 256px
    margin-top: 0
    margin-bottom: 1rem
    border: 1px solid $black
    @include respond-to('extra-small')
      align-self: flex-end
      order: 3
      margin: 2rem 0
  > ul
    list-style-type: none
    padding: 0
    margin: 0
    > li
      margin-bottom: 1rem
      > h1
        margin: 2rem 0
  @include respond-to('extra-small')
    max-height: calc(256px + 4rem)
</style>
