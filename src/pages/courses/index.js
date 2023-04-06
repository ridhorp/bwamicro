import Head from 'next/head';
import Link from 'next/link';

function Random({ data }) {

    return (
        <div >
            <Head>
                <title>MICRO | Random</title>
            </Head>

            <main className="container mx-auto mt-12" >
                <h1 className='text-3xl'>fetching todos</h1>
                <ul>
                    {
                        data.map(todo => {
                            return <li key={todo.id} className="border border-indigo-100 p-4">
                                {todo?.title ?? "-"}
                                <Link href={`/random/${todo.id}`}>
                                    <button>Launch</button>
                                </Link>
                            </li>
                        })
                    }
                </ul>
            </main>
        </div>
    )
}

Random.getInitialProps = async () => {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => json);
        return { data };
    } catch (error) {

    }
}

export default Random;
