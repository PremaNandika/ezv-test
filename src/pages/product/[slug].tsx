import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from "next/image"
import { GetServerSideProps } from 'next';

interface Product {
  id: number,
  title: string,
  description: string,
  price: number,
  thumbnail: string,
  brand: string,
  rating: number,
  category: string,
  images: string[]
}
const ProductDetailPage = ({content }: any) => {
  const Router = useRouter()
  useEffect(() => {
     console.log(content);
  }, [])
  
  return (
   <>
    <nav className='w-full shadow-lg'>
      <div className='container flex justify-between items-center mx-auto h-[80px] px-6 md:px-0'>
        <p className='md:text-3xl font-semibold'>Our Product</p>
      </div>
    </nav>
    <main className='bg-magnolia py-10 px-6 md:px-0'>

      <div className='container mx-auto'>
        <p onClick={() => Router.back()} className='mb-6 cursor-pointer'>{'<'} Back</p>
        <div className='w-[300px] h-[150px] md:w-[1200px] md:h-[500px] mx-auto relative mb-8'>
          <Image
            alt="thumbnail"
            fill
            src={content?.thumbnail}
            className="absolute object-cover object-center w-full h-full rounded-md"
          />
        </div>
        <div className='flex flex-col space-y-10'>
          <div className='flex justify-between items-start'>
            <div>
              <h2 className="text-lg md:text-2xl font-semibold mb-4">
                {content?.title} - {content?.brand}
              </h2>
              <p className='md:w-1/2'>
                {content?.description}
              </p>
            </div>
            <p className="text-xl">$ {content?.price}</p>
          </div>
          <div className="flex justify-between items-start space-x-20 w-full">
            <div>
              <h2 className="text-xl mb-4 uppercase">
                {content?.category}
              </h2>
            </div>
            <div className="flex flex-col">
              <p className="text-xl">{content?.rating}/5</p>
            </div>
          </div>
          <div className='py-20 grid grid-cols-1 md:grid-cols-4 gap-4'>
            <h2 className='col-span-1 md:col-span-4 md:text-2xl font-semibold'>Preview: </h2>
            {
              content?.images?.map((image: any) => (
                <div key={image} className='w-[300px] h-[300px] relative mx-auto'>
                  <Image
                    alt='image detail'
                    fill
                    src={image}
                    className='object-cover object-center absolute'
                  />
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </main>
    <footer className="w-full">
      <div className="container mx-auto px-6 md:px-0 bg-white py-4">
        This is Footer
      </div>
    </footer>
   </>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.query.slug as string;
    const response = await fetch(`https://dummyjson.com/products/${slug}`);
    const data: Product = await response.json();
  return {
    props: {
      content: data,
    }, // will be passed to the page component as props
  };
}

export default ProductDetailPage;
