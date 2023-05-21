import axios from "axios"


export async function getProducts_API() {
   try {
       const response =  await axios.get(`http://94.158.54.194:9092/api/product?page=1&perPage=10`)

       return [response, null]
   }
   catch (error) {
       return [null, error]
   }
}
export async function getProductType_API() {
   try {
       const response =  await axios.get(`http://94.158.54.194:9092/api/product/get-product-types`)

       return [response, null]
   }
   catch (error) {
       return [null, error]
   }
}
export async function postProducts_API(product) {
   try {
      const response = await axios.post(`http://94.158.54.194:9092/api/product`, {
         ...product,
          name_uz: product.product_type_id.name_uz,
          product_type_id: product.product_type_id.id,
       })

       return [response, null]
   }
   catch (error) {
       return [null, error]
   }
}
export async function editProducts_API(product) {
   try {
      const response = await axios.put(`http://94.158.54.194:9092/api/product`, {
         ...product, 
          name_uz: product.product_type_id.name_uz,
          product_type_id: product.product_type_id.id,
        })

       return [response, null]
   }
   catch (error) {
       return [null, error]
   }
}
export async function deleteProducts_API(id) {
   try {
      const response = await axios.delete(`http://94.158.54.194:9092/api/product/${id}`, )

       return [response, null]
   }
   catch (error) {
       return [null, error]
   }
}