import React from 'react'
import Navbar from '../Components/Navbar'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}

const index = ({ data }) => {
    return (
        <div>
            <Navbar />
            <h1 style={{textAlign:'center'}}>Blog Page</h1>
            {
                data.slice(0, 10).map((ind) => {
                    return <div key={ind.id} className="ssr-styles">
                        <h3>{ind.id}</h3>
                        <Link href={`/blog/${ind.id}`}>
                            <h2>{ind.title}</h2>
                        </Link>

                    </div>
                })
            }
        </div>
    )
}

export default index
