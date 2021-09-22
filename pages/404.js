import React,{useEffect} from 'react'
//import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Errorpage = () => {
    const router = useRouter()
    const handleInp = () => {
        router.push('/')
    }
    useEffect(() => {
        setTimeout(()=>{
            router.push('/')
        },2000)
    }, [])
    return (
        <div>
            <ul className="Linking">
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/"><a>About</a></Link></li>
                <li><Link href="/"><a>Portfolio</a></Link></li>
                <li><Link href="/"><a>Career</a></Link></li>
                <li><Link href="/"><a>Contact</a></Link></li>
            </ul>
            <div className="errorpage">
                <div className="error">
                    <h1>4<span>0</span>4</h1>
                </div>
                <h2>We are sorry, page not found!</h2>
                <button><Link href="/">Back to home</Link></button>
                <div><button onClick={handleInp}>Blog Using Function</button></div>
            </div>
        </div>
    )
}

export default Errorpage
