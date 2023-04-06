import Head from 'next/head';
import Link from 'next/link';

function Todo({ data }) {
    return (
        <div >
            <Head>
                <title>MICRO | Random | {data.title}</title>
            </Head>

            <main className="container mx-auto mt-12" >
                <h1 className='text-3xl'>{data.title}</h1>
                <p className='mt-2 mb-4'>please complete tour task</p>

                <Link href="/random">
                    <button className="rounded-md bg-indigo-500 text-white p-2">Random Page</button>
                </Link>
            </main>
        </div>
    )
}

Todo.getInitialProps = async (props) => {
    const { id } = props.query;
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(json => json);
        return { data };
    } catch (error) {

    }
}

export default Todo;
