import Link from 'next/link'

export default function Recipecard({ recipe }) {
    const { title, slug, cookingTime, thumbnail } = recipe.fields

    return (
        <div className="card">
            <div className="featured">
                {/* image - thunb */}
            </div>
            <div className="content">
                <div className="info">
                    <h4>{ title }</h4>
                    <p>Take approx { cookingTime } mins to make</p>
                </div>
                <div className="actions">
                    <Link href={'/recipes/' + slug}><a>Cook this</a></Link>
                </div>
            </div>
        </div>
    )
}
