import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'recipe'
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  // get slug paths for all recipes and set fallback if not found
  return {
    paths,
    fallback: false
  }
}

// Get data for each individual page
export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'recipe',
    'fields.slug': params.slug
  })

  return {
    props: { recipe: items[0] }
  }
  
}

export default function RecipeDetails({ recipe }) {
  console.log(recipe)
  
  return (
    <div>
      Recipe Details
    </div>
  )
}