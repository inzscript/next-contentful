import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"


export default function NotFound(props) {
    const router = useRouter()

    // Set redirect after wait time
    useEffect(() => {
         setTimeout(() => {
             router.push('/')
         }, 5000)
    }, [])

    return (
        <div className="not-found">
            <h1>404</h1>
            <h3>Ooops! That page seems to have lost it's plate of goodies. :(</h3>
            <p>Redirecting to the <Link href="/">Homepage</Link> for more marmite goodness!</p>

            <style jsx> {`
                .not-found { 
                    background: #fff;
                    padding: 30px;
                    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                    transform: rotateZ(-1deg);
                }
                h1 {
                    font-size: 3em;
                }
                `}
            </style>
        </div>
    )
}
