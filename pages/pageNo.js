import { useRouter } from "next/router"


const pageNo = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    const pageNumber = router.query.pageNo

    return (
        <div>
            <h1>this is {pageNumber} Page</h1>
        </div>
    )
}

export default pageNo
