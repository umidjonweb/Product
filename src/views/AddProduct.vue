<script setup> 
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { postProducts_API, editProducts_API, getProductType_API } from '../services/product'
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()

const product = ref({
      product_type_id : '',
      name_uz : '',
      cost : '',
      address : '',
      created_date : ''
})
const productName = ref()

const _items = ref([])
const options = ref([])

if (route.query.item) {
   product.value = JSON.parse(route.query.item)
   productName.value =  product.value.product_type_id.id

 }

async function submit() {
   productName.value =  product.value.product_type_id.id
   const [response, error] = await postProducts_API(product.value)

    if (error) return
   _items.value = response
   router.push('/')
}

async function editProduct() {
   
   const [response, error] = await editProducts_API(product.value)

   if (error) return
   _items.value = response
   router.push('/')
 }

 async function getProductType() {
   const [response, error] = await getProductType_API()
   if (error) return
    options.value = response.data
    options.value.filter((el) => { 
      if(el.id === JSON.parse(route.query.item)?.product_type_id){
         product.value.product_type_id = el
         console.log(product.value);
      }
    })
}
getProductType()

</script>
<template>
   <div class="post_info">
      <form @submit.prevent="route.query.item ? editProduct(): submit()" class="post">
         <q-select standout="bg-blue text-white"  v-model="product.product_type_id" :options="options" :option-label="(item)=>item.name_uz" :option-value="(item)=>item.id" label="Maxsulot Nomi" />
         <q-input required type="number" standout="bg-blue text-white" v-model="product.cost" label="Maxsulot Narxi" dense="false" />
         <q-input required standout="bg-blue text-white" v-model="product.address" label="Address" dense="false" />
       <VueDatePicker
         placeholder="Maxsulot Vaqti"
         class="picker"
         :allow-prevent-default="new Date()"
         :clearable="false"
         :enableTimePicker="false"
         v-model="product.created_date"
         auto-apply
      />
         <q-btn type="submit" color="primary">Saqlash</q-btn>
      </form>
   </div>
</template>


<style lang="scss" >

.dp__input_wrap, .dp__input{
   height: 55px!important;
}
 .post_info{
   display: flex;
   width: 50%;
   margin: auto;
   height: 100vh;
   justify-content: center;
   align-items: center;
 }
 .post{
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 20px;
   width: 100%;
 }
</style>