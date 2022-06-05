<template>
    <div>
      {{comentario.description}}
      {{comentario.idUsuario}}
      {{comentario.idPelicula}}
    </div>
</template>
<script>

export default {
    name: 'Comentario',
    data(){
        return{
            comentario: {}
        }
       
    },
    components: {

    },
    props:{
        idPelicula: Number
    },
    created(){
        fetch("https://localhost:44326/api/Comentarios" , {

        })
        .then((result) => result.json())
        .then((data) => {
            this.pelicula = data;
           
            
        })
        }
        
    }  

</script>

<style>
.listadodetail{
  margin: auto;
  height: 400px;
  border: 3px black solid;
  align-items: center;
  vertical-align: top;

}
</style>