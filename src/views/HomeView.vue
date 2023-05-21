<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import Card from '../components/Card.vue'
import { getProducts_API, deleteProducts_API } from '../services/product'

const router = useRouter()

const _items = ref([])

async function getProducts() {
   const [response, error] = await getProducts_API()

   if (error) return
   _items.value = response
}


function editProduct(item) {
   router.push({name:'product',query:{item:JSON.stringify(item)}})
}

async function deleteProduct(item){
   const [response, error] = await deleteProducts_API(item.id)

    if (error) return
  

   getProducts()
}

getProducts()

</script>
<template>
   <div class="home">
      <div class="add">
         <RouterLink class="add_product" :to="{ name: 'product' }">Maxsulot qo'shish</RouterLink>
      </div>
      <Card :items="_items" @update="editProduct" @delete="deleteProduct" />
<!-- 
      <div class="q-pa-lg">
         <div class="q-gutter-md">
            <q-pagination v-model="current" max="5" direction-links />
         </div>
      </div> -->
   </div>
</template>


<style lang="scss" scoped>
.add {
   display: flex;
   justify-content: flex-end;
}

.add_product {
   margin-top: 20px;
   margin-bottom: 20px;
   text-decoration: none;
   padding: 10px 12px;
   background-color: blue;
   color: white;
   border-radius: 6px;

}
</style>