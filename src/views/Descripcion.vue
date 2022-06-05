<template>
  <div>
    <div id="nav">
      <div><router-link to="/home">Volver a la home</router-link></div>
      <div><router-link to="/wishlist">Wishlist</router-link></div>
    </div>
    <div class="movie-card" v-bind:style="{  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,1)), url('${pelicula.imageUrl}')`}">
      <div class="movie-img" >
        <div style="display:flex;height;:300px;"></div>
          </div>
      <div class="card-body">
        <div class="movie-title">{{ pelicula.name }}</div>
        <div class="movie-intro">
          <div class="">{{ media }}</div>
          <div class="div">{{ pelicula.valoration }}</div>
          <div class="div">{{ pelicula.description }}</div>
          <button @click="addWishlist(pelicula.id)">Añadir wishlist</button>
          <form @submit.prevent="comentar">
            <input
              type="text"
              placeholder="Escribe tu comentario aqui"
              v-model="content"
              required
            />

            <button type="submit" @click="comentar(content)">Comentar</button>
          </form>
          <form @submit.prevent="puntuar">
            <input
              type="number"
              min="0"
              max="10"
              step=".01"
              placeholder=""
              v-model="puntos"
              required
            />

            <button type="submit" @click="puntuar(puntos)">Puntuar</button>
          </form>
        </div>
      </div>
    </div>

    <ul>
      <li v-for="comentario in comentarios" :key="comentario.id">
        <div class="div">{{ comentario.idUsuario }}</div>

        <div class="div">{{ comentario.usuario.nick }}</div>

        <div class="div">{{ comentario.description }}</div>

        <div class="div">{{ comentario.fecha }}</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Descripcion",

  components: {},
  data() {
    return {
      pelicula: {},
      comentarios: [],
      media: 0,
      idPut: 0,
    };
  },
  computed: {
    user() {
      return this.$store.getters.getCurrentUser;
    },
  },

  created() {
    fetch("https://localhost:44326/api/Peliculas/" + this.$route.params.id)
      .then((result) => result.json())
      .then((data) => (this.pelicula = data));

    fetch("https://localhost:44326/comentariosPeli/" + this.$route.params.id)
      .then((result) => result.json())
      .then((data) => {
        this.comentarios = data;
        console.log(data);
      });
    //media puntuaciones
    fetch("https://localhost:44326/media/" + this.$route.params.id)
      .then((result) => result.json())
      .then((data) => {
        this.media = data;
      });
  },
  methods: {
    addWishlist(id_Pelicula) {
      let item = JSON.stringify({
        idPelicula: id_Pelicula,
        idUsuario: this.user.id,
      });

      fetch("https://localhost:44326/api/Wishlists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: item,
      });
    },
    comentar(content) {
      let item = JSON.stringify({
        idPelicula: this.pelicula.id,
        idUsuario: this.user.id,
        description: content,
      });

      fetch("https://localhost:44326/api/Comentarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: item,
      });
    },
    puntuar(puntos) {
      let item2 = JSON.stringify({
        idPelicula: this.pelicula.id,
        idUsuario: this.user.id,
        Puntuacion1: puntos,
      });
      fetch("https://localhost:44326/api/Puntuacions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: item2,
      })
        .then((result) => result.json())
        .then((data) => {
          this.idPut = data;
          console.log(data);

          fetch("https://localhost:44326/api/Puntuacions/" + this.idPut, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: item2,
          });
        });
    },

    mounted() {
      this.id = this.$route.params.id;
    },
  },
};
</script>
<style>
.movie-card {
  background-color: #fff;
  max-width: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 5px 0px #888;
  margin: 0 auto;
  min-height: 320px;
  /*imageUrl as background-image*/ 
  background-repeat: no-repeat;
  background-size: 400px 650px;
    

}
.movie-img {
  min-height: 300px;
  overflow: hidden;
  }
.movie-img img {
  width: 100%;
  height: 500px;
}
.card-body {
  padding: 20px;
  color: white;
}
.movie-title {
  font-size: 20px;
}
.movie-intro {
  font-size: 16px;
}

</style>