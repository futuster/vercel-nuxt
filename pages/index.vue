<template>
  <div class="container mx-auto text-center">
    <div class="pt-4">
      <h2 class="text-xl">Nuxt with GraphCMS</h2>
      <div class="flex justify-center -mx-4 my-4">
        <router-link
          v-for="post in posts"
          :to="{ name: 'product-slug', params: { slug: post.slug } }"
          :key="post.slug"
        >
          <article class="border rounded-md p-6 mx-2">
            <h1 class="fopnt-bold text-xl">{{ post.title }}</h1>
          </article>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-request';

export default {
  async asyncData({ $graphcms }) {
    const { posts } = await $graphcms.request(
      gql`
        {
          posts {
            createdAt
            title
            tags
            slug
          }
        }
      `
    );

    return { posts };
  },
};
</script>
