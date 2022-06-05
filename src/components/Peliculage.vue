<template>
  <div class="text">
    <div>
      <img class="img" :src="this.pelicula.imageUrl" />
    </div>
    <div style="margin: auto">
      {{ this.pelicula.name }}
    </div>
  </div>
</template>
<script>
export default {
  name: "Pelicula",
  data() {
    return {
      pelicula: {},
    };
  },
  components: {},
  props: {
    idPelicula: Number,
  },
  created() {
    fetch(`https://localhost:44326/api/Peliculas/${this.idPelicula}`, {})
      .then((result) => result.json())
      .then((data) => {
        this.pelicula = data;
      });
  },
};
</script>

<style>
.img {
  height: 50px;
  width: 60px;
}
.text {
  text-align: center;
  font-size: 10px;
  display: flex;
  flex-direction: column;
}
</style>