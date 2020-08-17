<template>
  <div class="card card-with-img">
    <div class="card-top">
      <div class="card-top-left" :style="`background-color: ${headColor}`">
        <img class="card-top-left-img"  :src="require(`@/assets/images/${imgSrc}`)" alt="" />
      </div>
      <div class="card-top-right">
        <h3 class="card-top-right-text">{{ title }}</h3>
      </div>
    </div>
    <div class="card-content">
      <table v-if="items.length" class="table-dark">
        <thead>
          <tr>
            <th scope="col"><div class="table-content">Amount</div></th>
            <th scope="col"><div class="table-content">Price</div></th>
            <th scope="col"><div class="table-content">Total</div></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>
              <div class="table-content">
                {{ parseFloat(item.quantity).toFixed(6) }}
              </div>
            </td>
            <td>
              <div class="table-content">
                {{ parseFloat(item.price).toFixed(6) }}
              </div>
            </td>
            <td>
              <div class="table-content">
                {{ (item.price*item.quantity).toFixed(6) }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="card-content-empty">
        <h3>No data for this ticker</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    headColor: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: false,
    }
  }
};
</script>
<style lang="scss" scoped>


</style>
