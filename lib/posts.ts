import graphqlRequest from "./graphqlReqest";
export  async function getAllPosts(){
    const query={
        query:`query NewQuery {
  posts {
    nodes {
      date
      slug
      title
      excerpt
      featuredImage {
        node {
          mediaDetails {
            file
            sizes {
              sourceUrl
              width
              height
            }
          }
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
    }
    pageInfo {
      hasNextPage
      endCursor
      hasPreviousPage
      startCursor
    }
  }
}`
    };
    const resJson= await graphqlRequest(query);
    const allPosts =resJson.data.posts;
    return allPosts;
}

export  async function getSinglePosts(slug:string){
  const query={
      query:`query getSinglePost {
  post(id: ${slug}, idType: SLUG) {
    content(format: RENDERED)
    date
    excerpt(format: RENDERED)
    modified
    slug
    title(format: RENDERED)
    featuredImage {
      node {
        mediaDetails {
          sizes {
            sourceUrl
            width
            height
          }
        }
      }
    }
    categories {
      nodes {
        name
        slug
      }
    }
  }
}`
  };
  const resJson= await graphqlRequest(query);
  const singlePost =resJson.data.posts;
  return singlePost;
}


export  async function getPostSlugs(){
  const query={
      query:`query getPostSlugs {
  posts {
    nodes {
      slug
    }
  }
}`
  };
  const resJson= await graphqlRequest(query);
  const slugs =resJson.data.posts;
  return slugs;
}