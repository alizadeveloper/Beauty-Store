import { Button } from "@/components/ui/button";
import { Star, Filter } from "lucide-react";

export default function Shop() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Shop All Products</h1>
          <p className="mt-2 text-gray-600">Discover our curated collection of beauty essentials</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-20">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <Filter className="h-5 w-5" />
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Categories</h3>
                  {categories.map((category) => (
                    <label key={category} className="flex items-center mb-2">
                      <input type="checkbox" className="rounded border-gray-300 text-pink-600 focus:ring-pink-500" />
                      <span className="ml-2">{category}</span>
                    </label>
                  ))}
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full px-2 py-1 border rounded"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full px-2 py-1 border rounded"
                    />
                  </div>
                </div>

                {/* Brands */}
                <div>
                  <h3 className="font-medium mb-2">Brands</h3>
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center mb-2">
                      <input type="checkbox" className="rounded border-gray-300 text-pink-600 focus:ring-pink-500" />
                      <span className="ml-2">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">Showing 1-12 of 48 products</p>
              <select className="border rounded-md px-4 py-2">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.name} className="group">
                  <div className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
                    />
                    <Button
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-pink-600 hover:bg-pink-600 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      Quick View
                    </Button>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">(120)</span>
                    </div>
                    <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center gap-2">
                <Button variant="outline" className="w-10 h-10 p-0">
                  1
                </Button>
                <Button variant="outline" className="w-10 h-10 p-0">
                  2
                </Button>
                <Button variant="outline" className="w-10 h-10 p-0">
                  3
                </Button>
                <Button variant="outline" className="w-10 h-10 p-0">
                  4
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const categories = [
  "Skincare",
  "Makeup",
  "Hair Care",
  "Body Care",
  "Fragrance",
  "Tools",
];

const brands = [
  "Glow & Grace",
  "Natural Beauty",
  "Pure Essence",
  "Luxury Skin",
  "Organic Touch",
];

const products = [
  {
    name: "Radiance Serum",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Hydrating Cream",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Matte Lipstick",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Eye Palette",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  // Repeat products to fill the grid
  {
    name: "Facial Cleanser",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: " Day & Night Cream",
    price: 44.99,
    image: "https://cdn.shopify.com/s/files/1/0570/3745/5528/collections/Day___night_Cream.png?v=1686641732",
  },

  {
    name: "Perfume",
    price: 60.99,
    image: "https://cdn.pixabay.com/photo/2023/06/01/06/21/perfume-8032808_1280.jpg",
  },


{
name: "Hair Care",
price: 70.99,
image: "https://www.texturedtalk.com/wp-content/uploads/2016/06/Ingredients-in-Natural-Hair-products-1440x1440.jpg"
},

{
  name: "Body Care Products",
  price: 80.99,
  image: "https://www.jacquardflower.uk/wp-content/uploads/2017/02/IMG_7531.jpg"
  },
  
  {
    name: "Pink Blush",
    price: 80.99,
    image: "https://i.pinimg.com/originals/8a/a7/58/8aa758aee07caa2be1bafc859a6433ca.jpg"
    },
  
    {
      name: "Foundation Makeup Base",
      price: 80.99,
      image: "https://tse2.mm.bing.net/th?id=OIP.Ttl_AOdtK-ViqHwGsExkngHaHa&pid=Api&P=0&h=220"
      },
  
      {
        name: "Liquid Bling Glitter Eyeliner Colorful pencils Waterproof colorful",
        price: 80.99,
        image: "https://tse4.mm.bing.net/th?id=OIP.aG9jLk3lwRp30f1BOUhDRAHaHa&pid=Api&P=0&h=220"
        },


];