import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import React from 'react'
import Footer from '../../components/footer';
import Header from '../../components/header';
// import NotFound from '../404';


type ProductProps = {
    products: any[];
}

const ProductPage = ({ products }: ProductProps) => {
    console.log("client")
    console.log("products", products)
    if (!products) return false;
    return (
        // <div>
        //     <Header />
        // </div>
        <div>
            {products.map((item) => (
                <div key={item.id}>
                    <Link href={`/products/${item.id}`}>
                        {item.name}
                    </Link>
                </div>
            ))}
        </div>
        // <div>
        //     <Footer />
        // </div>
    )
}


//? Server
export const getStaticProps: GetStaticProps<ProductProps> = async (
    context: GetStaticPropsContext
) => {
    const data = await (await fetch(`http://localhost:3001/products`)).json();
    console.log("server");
    console.log('data', data);
    if (!data) {
        notFound: true;
    }
    return {
        props: {
            products: data,
        }
    }

}
export default ProductPage