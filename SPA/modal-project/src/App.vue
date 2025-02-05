<template>
  <div>
      <h1>{{ title }}</h1>
      <Teleport to=".modals" v-if="showModal1">
        <Modal  theme="sale" @close="toggleModal(1)">
          <!-- inne i taggen er det en slot som blir sendt til komponenten. -->
          <template v-slot:links>
            <a href="#">sign up now</a>
            <a href="#">free merch</a>
          </template> 
          <h1>Ninja giveaway</h1>
          <p>Free stuff half off</p>
        </Modal>
      </Teleport>
      
      <teleport to=".modals" v-if="showModal2">
        <Modal theme='Ad' @close="toggleModal(2)">
          <template v-slot:links>
            <a href="#">read more</a>
            <a href="#">get the best apples here</a>
          </template>
          <h1>Buy apples!</h1>
          <p>Good for your health and wallet</p>
        </Modal>
      </teleport>

      <button @click.alt="toggleModal(1)">open modal(alt)</button>
      <button @click.shift="toggleModal(2)">show second modal(shift)</button>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My first vue app :)',
      showModal1: false,
      showModal2: false,
    }
  },
  methods: {
      toggleModal(modal){
        switch(modal){
          case 1:
            this.showModal1 = !this.showModal1
            break;
          case 2:
            this.showModal2 = !this.showModal2
            break;
        }
      },
  }
}
</script>

<style>
#app, .modals{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
