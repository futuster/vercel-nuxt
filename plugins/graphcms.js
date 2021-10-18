import { GraphQLClient } from 'graphql-request';

const graphcmsClient = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/ckuvabjif1spu01z19z3zby5a/master'
);

export default (_, inject) => {
  inject('graphcms', graphcmsClient);
};
