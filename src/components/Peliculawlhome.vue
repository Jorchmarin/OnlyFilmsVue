<template>
  <div style="display: flex">
    <div style="display: flex">
      <img class="img" :src="this.pelicula.imageUrl" />
    </div>
    <div style="display: flex; flex-direction: column; margin: auto">
      {{ this.pelicula.name }}
      <button
        style="width: 50px;border-radius: 5px;color: orangered; margin: auto"
        @click="$router.push(`/pelicula/${pelicula.id}`)"
      >
        Ver
      </button>
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
  width: 100px;
  height: 100px;
}
</style>