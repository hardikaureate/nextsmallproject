import React from 'react'
import Navbar from '../Components/Navbar'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    const paths = data.map((curElem) => {
        return {
            params: { pageno: curElem.id.toString() },
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.pageno
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}

const userData = ({ data }) => {
    const { id, title, body } = data
    return (
        <div>
            <Navbar />
            <div key={id} className="ssr-styles-inside">
                <h3>{id}</h3>
                <h2>{title}</h2>
                <p>{body}</p>

            </div>
        </div>
    )
}

export default userData
