<script setup>
import { date } from 'quasar'

const emit = defineEmits(['update', 'delete'])
const props = defineProps({
   items: {
      type: Object,
      required: true
   }
})
</script>

<template>
 <div class="product">
     <div v-for="(item,index) in props.items.data" :key="index" class="card">
      <div>
          <p><strong>id: </strong> {{ item.id  }}</p>
          <p><strong>Maxsulot idsi: </strong> {{ item.product_type_id  }}</p>
          <p><strong>Maxsulot Nomi: </strong> {{ item.name_uz  }}</p>
      </div>
      <div class="right">
         <p><strong>Maxsulot Narxi: </strong>{{ item.cost  }}</p>
         <p><strong>Address: </strong> {{ item.address  }}</p>
         <p><strong>Maxsulot Vaqti: </strong> {{ date.formatDate(item.created_date, 'MM-DD-YYYY') }}</p>
      </div>
      <div class="update">
         <img @click="emit('delete', item)" class="img" src="../assets/delete.svg" alt="">
         <img @click="emit('update', item)" class="img"  src="../assets/edit.svg" alt="">
      </div>
     </div>
   </div>
</template>

<style lang="scss" scoped>
.product{
   display: grid;
   grid-template-columns: repeat(2, minmax(0, 1fr));
   gap: 24px;
}
.right{
   padding-right: 45px;
}
  .card{
   display: flex;
   justify-content: space-between;
   border: 1px solid #ccc;
   border-radius: 10px;
   padding: 18px;
   position: relative;
   background-color: white;

   .update{
      display: flex;
      gap: 4px;
      position: absolute;
      top: 10px;
      right: 10px;
   }
   .img{
      cursor: pointer;
      width: 20px;
      height: 20px;
   }
  }
</style>
