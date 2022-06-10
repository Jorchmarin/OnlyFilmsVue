<template>
  <div>
    <div id="nav">
       <header style="padding-bottom: 10px">
      <div>
        <router-link to="/" style="text-decoration: none">
          <img src="../assets/logo.png" style="width: 120px" /> </router-link
        >
      </div>
       
      </header>
    </div>
    <div style="display: flex; width: 20px; height: auto">
    <br></div>
    <div class="movie-card" v-bind:style="{  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,1)), url('${pelicula.imageUrl}')`}">
      <div class="movie-imgnl" >
        <div style="display:flex;height;:300px;"></div>
          </div>
      <div class="card-body">
        <div class="movie-title">{{ pelicula.name }}</div>
        <div class="movie-intro">
<div><p>Puntuacion de los usuarios {{ media }}</p>
        <p>Nota expertos {{ pelicula.valoration }}</p></div>
          <div class="div">{{ pelicula.description }}</div>
          <div class="div">{{ pelicula.description }}</div>
          
         
        </div>
      </div>
    </div>
       <div style="display:flex;margin-top: 20px;" ref="divcom"  class="Commentario">
         <button class="com" @click="goto('divcom')">Comentarios</button>
       </div>
    <div style="display:flex;marin:auto">
    <ul class="coments">
        <li class="individualcom" v-for="comentario in comentarios" :key="comentario.id">

          <div class="div">Usuario: <br>{{ comentario.usuario.nick }}</div>

          <div style="display:flex;justify-content: center;max-width: 300px;"><p style="overflow-wrap: anywhere;">{{ comentario.description }}</p></div>

          <div class="div">Fecha de publicación: <br>{{ comentario.fecha.substring(0, 10) }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Descripcion pelicula sin logear", 

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
    
  },

  created() {
    fetch("https://localhost:44326/api/Peliculas/" + this.$route.params.id)
      .then((result) => result.json())
      .then((data) => (this.pelicula = data));

    fetch("https://localhost:44326/comentariosPeli/" + this.$route.params.id)
      .then((result) => result.json())
      .then((data) => {
        this.comentarios = data;
      });
    //media puntuaciones
    fetch("https://localhost:44326/media/" + this.$route.params.id)
      .then((result) => result.json())
      .then((data) => {
        this.media = data;
      });
  },
  methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
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
.movie-imgnl {
  min-height: 275px;
  overflow: hidden;
  }
.movie-imgnl img {
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
.com{
  margin: auto;
  width: 100%;
  border: none;
  height: 50px;
}
.coments {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  list-style: none;
  gap: 2em;
  margin-top: 10px;
  padding-left: 0px !important;
  border: 2px black solid;
}
.individualcom{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 800px;
  list-style: none;
  gap: 2em;
  margin-top: 10px;
  padding-left: 0px !important;
}

</style>