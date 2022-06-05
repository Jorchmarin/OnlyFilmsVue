<template>
  <div>
  <ul>
      <li v-for="pelicula in peliculas"
      :key="pelicula.idPelicula"> 
        <Pelicula :idPelicula="pelicula.idPelicula" />
        <button @click="$router.push(`/pelicula/${pelicula.idPelicula}`)">Ver</button>
        <button @click="eliminarDeWishlist(pelicula.idPelicula)">Eliminar de la wishlist</button>

      </li>
  </ul>
  <div>
      <div id="nav">
      <router-link to="/home">Volver a la home</router-link>

    </div>
  </div>     
  </div>
</template>

<script>
import Pelicula from '../components/Pelicula.vue'
export default {
    name: "Home",
    data() {
        return {
            peliculas: [],
        };
    },
    created() {
        fetch("https://localhost:44326/userWishlist/" + this.user.id, {})
            .then((result) => result.json())
            .then((data) => {
            this.peliculas = data;
            
        });
    },
    //get user from store
    computed: {
        user() {
            return this.$store.getters.getCurrentUser;
        }
    },
    methods:{
        eliminarDeWishlist(id_Pelicula) {
      fetch(
        "https://localhost:44326/getWishlistBy/" +
          this.user.id +
          "/" +
          id_Pelicula,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((result) => result.json())
        .then((data) => {
          console.log(data);
          fetch("https://localhost:44326/api/Wishlists/" + data[0].id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            
          });
        });
    },
    },

    components: { Pelicula }
};
</script>

<style>
.img {
  width: 100px;
  height: 100px;
}
</style>