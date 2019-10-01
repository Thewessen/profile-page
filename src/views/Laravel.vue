<template>
  <article>
    <ArticleHeading>
    </ArticleHeading>
  </article>
</template>

<script>
export default {
  name: "Laravel",
  data() {
    return {
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
  }
}
</script>
