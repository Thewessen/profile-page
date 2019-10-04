<template>
  <article>
    <ArticleHeading
      title="Iris van der Ende"
      subtitle="New design and content management system"
      github="https://github.com/Thewessen/IrisSite">
    </ArticleHeading>
    <p>
      After remaking the website for Iris van der Ende (<ext-link
        url="https://www.irisvanderende.nl"
        >www.irisvanderende.nl</ext-link>), the designer of the website, Serena
      Kloet, was really enthousiastic. The original website was 
      created using Webydoo. Webydoo is great for creating a website
      quick and easy, but makes it very though creating a design exactly the way
      you want it. Serena Kloet, now having a programmer to work with, really
      wanted to redesign the website. Creating a design exactly the way she
      liked.
    </p>
    <p>
      The first scetches of the new design can be found at the github link
      above, or viewed live
      <ext-link url="thewessen.github.io/IrisSite">here</ext-link>. Everything
      is build using plain HTML5 and CSS, with a little bit of JavaScript.
    </p>
    <p>
      Working with a designer building a website was a great learning
      experience. When creating a website on paper, almost everything is possible.
      But even a single diagonal line can opose many problems when working in
      plain HTML and CSS. This meant problems for me to solve, which I really
      like about programming in general.
    </p>
    <h3>Header</h3>
    <p>
      The header is a big part of giving the site its personal touch. The
      pattern has to match the strings on a harp, the main instrument of Iris
      van der Ende. The problem with using an image for this header is its
      scaling. If the image size is set to <code>100% width</code>, the image get's
      scaled depending on the window size. Which is not what we wanted.
      But when you use the initial <code>width</code>, some strings might be
      cut in half on the left and/or right edges of the window. Both solutions
      were not ideal.
    </p>
    <p>
      To make this header work on all browser window sizes, included rescaling
      the browser window, the strings had to be drawn on demand. This way,
      the header keeps the same appearance every time. Maybe some CSS-expert
      can make this happen using only CSS, but I could not. Hence, I used
      JavaScript for this feature.
    </p>
    <p v-if="$apollo.loading">
      Fetching 'drawingStringsSVG' code snippet from GitHub...
    </p>
    <CodeHighlight
      v-else :startLineNumbers="114">{{ getLines(header, 114, 149) }}</CodeHighlight>
    <p>
      <code>reCreateLines</code> is part of a big IIFE (immediately invoked function
      expression), getting imported on every static html page on the website
      through its <code>script</code> tag. The IIFE prevents pollution of the
      window object with used constants and functions. On a resize event,
      <code>reCreateLines</code> gets called, deleting all excisting strings
      (<em>line 130-136</em>) before creating new one. A bit overkill, but it
      gets the job done for this simple trail page.
    </p>
    <h3>Image Gallery</h3>
    <p>
      Every project has many images too showcase. For the design, we wanted
      all of them being displayed in an image gallery. The image gallery needed
      some auto-scroll features, besides being able to scroll through it
      manually. Again, this is where JavaScript comes in to play really nicely.
    </p>
    <p v-if="$apollo.loading">
      Fetching 'imageGallery' code snippet from GitHub...
    </p>
    <CodeHighlight
      v-else :startLineNumbers="155">{{ getLines(gallery, 155, 180) }}</CodeHighlight>
    <p>
      Because the bullets and images live in their own container, I needed some
      way to bind state between them. I decided to store a reference too the
      image directly on the bullet object. This way, the bullet is responsible
      for the scrolling behavior of the image container. Storing state this way
      is not advisable, and considered bad practise.
    </p>
    <p>
      The way to make a container scroll in Internet Explorer is different from
      most other browsers. Hence you see me use <code>scrollBy</code> or
      <code>scrollLeft</code> depending on their existence (<em>line 167-176</em>).
    </p>
    <p>
      Making the image gallery scalable was another challenge to overcome. To a
      certain extend, you don't want to scale the image any further. But it
      would be nice if the image gallery itself contained the full width of the
      page. This means the image had to be stretch without loosing its
      proportions.
    </p>
    <p>
      For seemingly scaling the image out of proportions I used the
      <code>background-image</code> style property of the image gallery
      container. This property is set to the displayed image, creating a copy
      of the image in the background. The background image is scaled to fifteen
      times its normal size, therefor only showing a part of the image. This
      creates the effect of a background color corresponding some colors of the
      image shown. I failed doing this with a <code>blur</code> effect, because of
      performance issues.
    </p>
    <h2>Laravel</h2>
    <p>
      Iris van der Ende had some desirements of her own. She wanted a way for
      creating pages on her own, not being depended on anyone technical enough
      to work with Webydoo (or any other CMS). Thus far, the page you see
      <ext-link url="thewessen.github.io/IrisSite">live</ext-link> is static,
      which means its content is contained directly inside its html-tags. For
      creating a custom CMS (content management system), the content has to
      come from somewhere else.
    </p>
    <p>
    </p>
  </article>
</template>

<script>
import getLines from '@/helpers/getLines'
import gql from 'graphql-tag'

export default {
  name: "Laravel",
  data() {
    return {
      header: '',
      gallery: '',
      faker: `
        $projects = factory('App\\Project', 4)->create();

        foreach($projects as $project) {
          collect([
            factory('App\\Image', rand(4, 8)),
            factory('App\\FlavorText', rand(3, 5)),
            factory('App\\PublicityText', rand(1, 4)),
            factory('App\\Video', rand(1, 2)),
            factory('App\\Sound', rand(1, 2))
          ])->each->create(['project_id' => $project->id]);
        };`,
      factory: `
        $factory->define(Image::class, function (Faker $faker) {
          return [
            'source' => $faker->image,
            'description' => $faker->sentence,
            'alt_text' => $faker->sentence,
            'project_id' => function () {
              return factory('App\\Project')->create()->id;
            }
          ];
        });`
    }
  },
  methods: {
    getLines,
  },
  apollo: {
    header: {
      query: gql`query {
        repository(owner: "Thewessen", name: "IrisSite") {
          header: object(expression: "master:js/drawingStringsSVG.js") {
            ... on Blob {
              text
            }
          }
        }
      }`,
      update: data => data.repository.header.text,
    },
    gallery: {
      query: gql`query {
        repository(owner: "Thewessen", name: "IrisSite") {
          gallery: object(expression: "master:js/imageGallery.js") {
            ... on Blob {
              text
            }
          }
        }
      }`,
      update: data => data.repository.gallery.text,
    },
  }
}
</script>
