<template>
  <div class="container mx-auto" v-if="post">
    <div>
      <h1 class="font-bold text-xl">{{ post.title }}</h1>
      <div v-html="post.content.html"></div>
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-request';

export default {
  async asyncData({ $graphcms, params }) {
    const { slug } = params;

    const { post } = await $graphcms.request(
      gql`
        query GetProduct($slug: String) {
          post(where: { slug: $slug }) {
            title
            slug
            date
            tags
            author{
              name
              title
              picture{
                url
              }
            }
            content {
              html
            }
          }
        }
      `,
      {
        slug,
      }
    );

    return { post };
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.content,
        },
      ],
    };
  },
};
</script>
