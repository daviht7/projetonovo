export default function Posts({ data }) {

    console.log('data', data);
    return (
        <h1>Posts</h1>
    )

}

export async function getServerSideProps(context) {

    const data = [
        {  name: 'davi holanda', },
        {  name: 'kelcya', },
    ]

    return {
        props: {
            data
        }, // will be passed to the page component as props
    }
}
