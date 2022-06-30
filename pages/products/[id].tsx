import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router'
import React from 'react'

type ProductProps = {
    product: any;
}

const ProductDetail = ({ product }: ProductProps) => {
    // const router = useRouter();
    // const id = router.query.id;
    // console.log(id)
    if (!product) return null;
    return (
        <div>ProductDetail Name: {product.name}</div>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    const data = await (await fetch(`http://localhost:3001/products`)).json();
    const paths = data.map((item: { id: { toString: () => any; }; }) => {
        return { params: { id: item.id.toString() } }
    })
    return {
        paths,
        fallback: false
    }
}


export const getStaticProps: GetStaticProps<ProductProps> = async (
    context: GetStaticPropsContext
) => {
    console.log('context', context.params?.id);
    const data = await (await fetch(`http://localhost:3001/products/${context.params?.id}`)).json()
    if (!data) {
        notFound: true
    }
    return {
        props: {
            product: data,
        }
    }

}

export default ProductDetail