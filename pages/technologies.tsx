export default function Technologies({ data }) {

    console.log("data", data)
    return (
        <div>
            {
                data.map(e => (
                    <div key={e.name}>
                        { e.name }
                    </div>
                ))
            }
        </div>
    )

}

export async function getStaticProps(context) {

    const data = [
        { name: 'js' },
        { name: 'java' },
        { name: 'c#' },
    ]

    return {
        props: {
            data
        }, // will be passed to the page component as props
    }
}