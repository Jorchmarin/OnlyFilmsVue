<template>
  <div>
  <ul>
      <li v-for="pelicula in peliculas"
      :key="pelicula.idPelicula"> 
                      <div class="movie-cardwl">

        <Peliculawl :idPelicula="pelicula.idPelicula" />
        <button @click="eliminarDeWishlist(pelicula.idPelicula)">Eliminar de la wishlist</button>
      </div>  
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
import Peliculawl from '../components/Peliculawl.vue'
export default {
    name: "Home",
    data() {
        return {
            peliculas: [],
        };
    },
    created() {
        fetch("http://localhost:44326/userWishlist/" + this.user.id, {})
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
        "http://localhost:44326/getWishlistBy/" +
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
          fetch("http://localhost:44326/api/Wishlists/" + data[0].id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            
          });
        });
    },
    },

    components: { Peliculawl }
};
</script>

<style>
.img {
  width: 100px;
  height: 100px;
}
.movie-cardwl {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 300px;
  margin: 10px;
  border-radius: 10px;
  background-color: #f2f2f2;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;
}
.movie-cardwl img{
 
  width: 200px;
  height: 278px;

 }
 .movie-cardwl button{
 
  width: 200px;
  height: 278px;
  border: 0px;
  background-color: black;
  color: #f2f2f2;
  font-size: 15px;
  cursor: pointer;
  

 }
</style>