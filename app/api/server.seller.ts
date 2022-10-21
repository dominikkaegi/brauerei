import { GraphQLClient, gql } from "graphql-request";

const GetSellersQuery = gql`
query GetSellers {
  sellers {
    name
    description
    id
  }
}
`;


export type Seller = {
   id: string;
   name: string;
   description: string; 
}

export const getSellers = async () => {
  const graphClientUrl = process.env.GRAPH_CMS_CLIENT_URL as string
  const GRAPH_CMS_TOKEN = process.env.GRAPH_CMS_TOKEN as string


  if(typeof graphClientUrl === 'undefined'  && typeof GRAPH_CMS_TOKEN === 'undefined') {
    throw new Error('Missing CMS Process Variables')
  }

    const graphcms = new GraphQLClient(graphClientUrl, {
        headers: {
        authorization: `Bearer ${GRAPH_CMS_TOKEN}`,
        },
    });

    const { sellers } = await graphcms.request<{ sellers: Seller[]}>(GetSellersQuery);

    return sellers
}