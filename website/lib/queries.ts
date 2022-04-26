const postFields = `
  _id,
  name,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, image},
`;

export const indexQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;

export const sponsorQuery = `
{
  "sponsors": *[_type == "sponsor"]{
    _id,
    name,
    logo,
    tier
  }
}
`;

export const recentPostsQuery = `
{
  "posts": *[_type == "post"] | order(date desc, publishedAt desc) [0...3]{
    _id,
    publishedAt,
    title,
    excerpt,
    coverImage,
    "slug": slug.current
  }
}
`;

export const queryDirettivo = `
{
  "direttivo": *[_type == "person" && stakeholder == true] | order(_createdAt asc, publishedAt asc){
    _id,
    name,
    surname,
    "role": role[0]->name,
    image
  }
}
`;

export const queryCollaboratori = `
{
  "collaboratori": *[_type == "person" && stakeholder == false] | order(_createdAt asc, publishedAt asc){
    _id,
    name,
    surname,
    "role": role[0]->name,
    image
  }
}
`;