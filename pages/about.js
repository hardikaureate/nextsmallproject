import React,{useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Navbar from './Components/Navbar'

const About = () => {
    const router = useRouter()
    const handleInp = () => {
        router.push('/About')
    }
    useEffect(() => {
        //router.push('/About')
        
    }, [])
    return (
        <div>
            <Navbar />
            <h1>About Page</h1>
            <div><button><Link href="/"><a> Go to Homepage using "Link"</a></Link></button></div>
            <Link href="contact">Go to Contact using Link without "a"</Link>
            <div><button onClick={handleInp}>Blog Using Function</button></div>
            <div><a onClick={()=>router.push("/contact")}>Contact using "a" onClick</a></div>
        </div>
    )
}

export default About
