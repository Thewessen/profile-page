<template>
  <article>
    <h1>Dates</h1>
    <p>
      These are some of the projects I worked on since I fell in love with
      programming. Making the computer do exactly what you want it to do, by
      communicating in a strict and precise, abstract language. The projects
      are sorted by date, starting with my early days of programming, till now.
    </p>
    <ProjectBlockLayout
      title="Karel the robot"
      subtitle="2006"
      url=""
      :languages="['C++']">
      In my years of studying Mathematics at the Radboud University of
      Nijmegen, I followed a side course called Programming. The course used
      C++ as a language to teach different aspects of programming:
      call by value/ref, sorting algorithms, pattern matching, recursion, etc.
      Staring Karel the robot, who needed some A.I. for finding it's way
      through a maze.
    </ProjectBlockLayout>
    <ProjectBlockLayout
      title="Teaching calculation skills"
      subtitle="2016"
      url=""
      :languages="['HTML', 'CSS', 'JavaScript', 'jQuery']">
      While working as a math teacher at IJburg College, I created a website
      supporting my lessons in calculation skills. IJburg College, situated in
      Amsterdam, is the first school in the Netherlands working with iPads
      instead of books. Teachers working there are experienced in creating
      their own course material. A great opportunity for me to dive into
      web development.
    </ProjectBlockLayout>
    <ProjectBlockLayout
      title="Dreaming of ..."
      subtitle="2017"
      url=""
      :languages="['Angular', 'TypeScript', 'NodeJs']">
      Still working on my website teaching calculation skills, I dreamed about
      creating an interactive website teaching math based on
      self-explored learning and gamification. A friend of mine saw me
      struggeling in jQuery and advised me to use something more advanced when
      working with dynamic heavy content. This was my first step into using
      frameworks for creating a website.
    </ProjectBlockLayout>
    <ProjectBlockLayout
      title="Dotfiles"
      subtitle="Januari 2019"
      url=""
      :languages="['Linux', 'Vim', 'Tmux', 'Bash']">
      After a year without programming it felt the itch again. I decided to
      swap carreers after another year of teaching math. A proper toolset is
      key for any developer. And now I had some time to seriously work on my
      setup. Initially I used Vim with Tmux and Bash. Later I deviated from
      this idea, and now I'm using NeoVim, ZSH, with i3 as my window manager.
    </ProjectBlockLayout>
    <ProjectBlockLayout
      title="Iris van der Ende"
      subtitle="Januari 2019"
      url=""
      :languages="['JavaScript', 'HTML', 'CSS']">
      Iris van der Ende is a great harpist and theatre maker from Amsterdam. In
      search for a new minor project to work on, I decided to remake her
      excisting website. To make it responsive, and give it some additional
      features (like background image transition on scroll). Things that she
      found hard to do using Webydoo, the hosting server and CMS at that time. I
      decided to not use any existing frameworks, too consolidate myself in the
      basics of creating a website.
    </ProjectBlockLayout>
    <ProjectBlockLayout
      title="Capture the flag"
      subtitle="Februari 2019"
      url="/CTF/OverTheWire/Bandit"
      :languages="['Git', 'SSH', 'PHP', 'MySQL']">
      While learning different things about computer science, I came
      across CTF (Capture The Flag). This is a special kind of information
      security competitions. Special mentioning
      <a href="https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w">
        LiveOverflow</a>'s
      YouTube channel, who has some awesome research in computer security
      and CTF writeups. Together with some beginners wargames on
      <a href="https://www.overthewire.org">OverTheWire.org</a>,
      I learned a lot about different aspects in the world of programming.
      It also made me fall in love with the Python programming language.
    </ProjectBlockLayout>
    <ProjectBlockLayout
      title="Hello world"
      subtitle="April 2019"
      url=""
      :languages="['Python']">
      It was time to bundle all my scripts and idea's into one repo:
      hello-world! Initially this repository contained some tools I needed
      when solving some CTF challenges, in particular a (de)cipher tool. I
      also created a Python module for creating nested(!) tables and column
      printing them nicely. After it grew in size, Nested Tables got its own
      repository. It was a great way for me to learn the Python programming
      language, utilizing classes, modules, generators and custom decorators.
    </ProjectBlockLayout>
    <ProjectBlockLayout
      title="Exercism.io"
      subtitle="May 2019"
      url="/Exercism/JavaScript"
      :languages="['EcmaScript 6', 'Python', 'TypeScript']">
      While learning from a book called <em>Exploring ES6</em>, I also started
      some exercises on Exercism.io. This website contains exercises and tests
      in many different languages. Together with its wonderfull community,
      seeing how other people create really elegant solutions to simple
      problems, it was an awesome way for me to up my skills in EcmaScript 6.
      For diversity's sake, I also did some exercises in Python and TypeScript.
    </ProjectBlockLayout>
    <ProjectBlockLayout
      title="Beets genre tagger"
      subtitle="June 2019"
      url=""
      :languages="['React', 'Redux', 'Apollo', 'Graphene', 'Flask', 'SQLAlchemy']">
      Together with a friend of mine, who worked as a programmer at that time
      for nearly six years, we decided to do a project together: <em>Beets
      genre tagger</em>. Beets is a media library management system. The idea of
      this project is to create a web interface for manipulating the music
      genre tag in an already excisting beets database. We also liked to use
      different new exciting features, like functional React and the GraphQL
      query language. One could say this applicitation is a bit overenginered.
    </ProjectBlockLayout>
    <ProjectBlockLayout
      title="Content management system"
      subtitle="Juli 2019"
      url=""
      :languages="['Laravel']">
      Serena Kloet, a great graphical designer working at ITA (International
      Theater Amsterdam), became enthousiast about the remake of the website
      for Iris van der Ende. Having a programmer at her disposal, she wanted to
      create a new design for the website. Iris van der Ende, also
      enthousiastic, would like to have a custom CMS, specially designed for
      creating pages herself. This way, she didn't have to rely on another
      person updating her content. Challenge accepted! 
    </ProjectBlockLayout>
    <ProjectBlockLayout
      title="Tic-tac-toe"
      subtitle="September 2019"
      url=""
      :languages="['EmberJS', 'Ruby on Rails']">
      For a job opportunity, I've been asked to build a tic-tac-toe game in
      EmberJS, which also utilizes a Ruby on Rails backend. With only three
      day's to create the app, and no experience with Ruby on Rails or EmberJS,
      this was a real and awesome challenge!  The app did work, but not good
      enough by the job standards. I really liked the Ruby on Rails framework,
      and would love to use it again in some other of my projects.
    </ProjectBlockLayout>
    <ProjectBlockLayout
      title="this"
      subtitle="September 2019"
      url=""
      :languages="['Vue', 'Apollo', 'GraphQL', 'SASS', 'Git']">
      This profile page is created using the data available from the GitHub API
      v4. The data is fetched from my own public repositories and showcased
      here. This pages is made using the VueJS-framework. Which created another
      opportunity for me to learn a new webframework.
    </ProjectBlockLayout>
  </article>
</template>

<script>
import ProjectBlockLayout from '@/components/ProjectBlockLayout'
export default {
  name: 'ShowcaseProjects',
  components: {
    ProjectBlockLayout,
  }
}
</script>

<style lang="sass" scoped>
p
  max-width: 32rem
  margin-bottom: 2rem

</style>
