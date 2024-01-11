import Link from "next/link";

export async function getStaticProps() {
    const API_FAQ = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(API_FAQ)
    .then((responseServece) => {
        return responseServece.json();
    })
    .then((reponse) => {
        return (reponse);
    });

    return {
        props: {
            Teste:'Teste',
            faq
        }
    }

}

export default function FAQ({faq}) {
    // const [faq, setFaq] = useState([]);
    // useEffect(() => {
    // }, []);
    return(
        <div>
            <h1> Alura Case - FAQ </h1>
            <Link href="/">
                Home 
            </Link>
            <ul>
                {faq.map(({ answer, question }) => (
                    <li key={question}>
                        <article>
                            <h2> {question} </h2>
                            <p> {answer} </p>
                        </article>
                    </li>

                ))}
            </ul>
        </div>
    )
}