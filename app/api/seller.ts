import { GraphQLClient, gql } from "graphql-request";

const GetSellersQuery = gql`
query Assets {
  sellers {
    id
    name
    description
    publishedAt
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
  
    const graphcms = new GraphQLClient(graphClientUrl, {
        headers: {
        authorization: `Bearer ${GRAPH_CMS_TOKEN}`,
        },
    });

    const { sellers } = await graphcms.request<{ sellers: Seller[]}>(GetSellersQuery);

    return sellers
}
