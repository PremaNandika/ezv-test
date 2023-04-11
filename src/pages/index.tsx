import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"


interface Product {
  id: number,
  title: string,
  description: string,
  price: number,
  thumbnail: string,
  brand: string,
  rating: number,
  category: string
}

interface Products {
  products: Product[]
}

const getContent = async (): Promise<Products> => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data: Products = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const HomePage = () => {
  const [content, setContent] = useState<Products | null>(null);
  const Router = useRouter()
  useEffect(() => {
     getContent().then((data) => setContent(data))
  }, [])

  useEffect(() => {
     console.log(content);
  }, [content])
  
  return (
    <>
      <nav className='w-full shadow-lg'>
        <div className='container flex justify-between items-center mx-auto h-[80px] px-6 md:px-0'>
          <p className='md:text-3xl font-semibold'>Our Product</p>
        </div>
      </nav>
      <main className='bg-magnolia'>
         <div className='container mx-auto space-y-6 px-6 md:px-0 py-10'>
          {
            content?.products?.map((product, index) => (
              <div className="py-5 px-6 md:py-10 md:px-12 flex flex-col md:flex-row bg-white shadow-md rounded-xl space-y-4 md:space-y-0 md:space-x-8 transition hover:scale-105 cursor-pointer" onClick={() => Router.push(`/product/${product?.id}`)}>
                <div className="w-[275px] md:w-[250px] h-[150px] relative">
                  <Image
                    alt="thumbnail"
                    fill
                    src={product?.thumbnail}
                    className="absolute object-contain w-full h-full mx-auto rounded-md"
                  />
                </div>
                <div className="flex flex-col w-full space-y-10">
                  <div className="flex justify-between items-start md:space-x-20 w-full">
                    <div className="w-3/4 md:w-full">
                      <h2 className="md:text-2xl font-semibold mb-4">
                        {product?.title} - {product?.brand}
                      </h2>
                      <p className="text-xs md:text-base">
                        {product?.description}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="md:text-xl">$ {product?.price}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start md:space-x-20 w-full">
                    <div>
                      <h2 className="md:text-lg mb-4 uppercase">
                        {product?.category}
                      </h2>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm md:text-xl">{product?.rating}/5</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
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
export default HomePage;

