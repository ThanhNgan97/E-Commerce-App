import Add from "@/components/Add"
import CustomizeProducts from "@/components/CustomizeProducts"
import ProductImage from "@/components/ProductImage"

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16"> 
      
      {/* Image */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImage />
      </div>

      {/* Texts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, 
          expedita. Ipsa quaerat architecto, iusto ratione nisi ipsum deserunt 
          sapiente id commodi, incidunt alias ipsam autem, itaque corrupti 
          possimus aliquam cumque?
        </p>

        {/* Divider */}
        <div className="h-[2px] bg-gray-100" />

        {/* Price */}
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>

        {/* Divider */}
        <div className="h-[2px] bg-gray-100" />

        {/* Options */}
        <CustomizeProducts />
        <Add />

        {/* Divider */}
        <div className="h-[2px] bg-gray-100" />
          <div className="text-sm">
              <h4 className="font-medium mb-4">Title</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignssimos nan, incdunt asperiores easum cupidiate esse nesiunt
                maiores, rerum, similique nijil. Nemo placeat accsantium
                consectetur sed dolores consequuntur adipisci reiciendis.
              </p>
          </div>

            <div className="text-sm">
              <h4 className="font-medium mb-4">Title</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignssimos nan, incdunt asperiores easum cupidiate esse nesiunt
                maiores, rerum, similique nijil. Nemo placeat accsantium
                consectetur sed dolores consequuntur adipisci reiciendis.
              </p>
          </div>

          <div className="text-sm">
              <h4 className="font-medium mb-4">Title</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignssimos nan, incdunt asperiores easum cupidiate esse nesiunt
                maiores, rerum, similique nijil. Nemo placeat accsantium
                consectetur sed dolores consequuntur adipisci reiciendis.
              </p>
          </div>
      </div>
    </div>
  )
}

export default SinglePage
