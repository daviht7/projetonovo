export default function Tech({data}) {

    console.log("data", data)
    return (
        <div>
            Tech
        </div>
    )

}

export async function getStaticPaths() {
    return {
      paths: [
        { params: { slug: '1' } },
        { params: { slug: '2' } },
      ],
      fallback: true // false or 'blocking'
    };
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