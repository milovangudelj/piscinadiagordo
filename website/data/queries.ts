const postFields = `
	_id,
	publishedAt,
	title,
	excerpt,
	body,
	coverImage,
	"slug": slug.current
`;

const pageSlugQuery = `
"href": select(
	page->_type == "homePage" => "",
	page->_type == "page" => page->slug.current,
)
`;

export const navbarQuery = `
{
	"navItems": *[_type == "headerSettings"].navItems[]{
		"text": title,
		${pageSlugQuery},
		"dropdown": dropdownItems[]{
			"text": title,
			${pageSlugQuery},
		},
	}
}
`;

export const indexQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc) {
	${postFields}
}`;

export const postQuery = `
{
	"post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
		${postFields}
	},
	"morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
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
		${postFields}
	}
}
`;

/**
 * @param startAt Index of the first element to take
 * @param take Number of elements to take
 */
export const postsQueryPaginated = `
{
	"posts": *[_type == "post"] | order(date desc, publishedAt desc) [$startAt...($startAt+$take)]{
		${postFields}
	}
}
`;

export const postCountQuery = `
{
	"count": count(*[_type == "post"])
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

export const queryCorsi = `
{
	"corsi": *[_type == "course"] | order(order asc) {
		_id,
		title,
		description,
		cover,
		frequenza[]->{_id, name}
	}
}
`;
