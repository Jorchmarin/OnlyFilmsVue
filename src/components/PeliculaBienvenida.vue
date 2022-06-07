<template>
    <div style="display:flex">
        <div style="display:flex" @click="$router.push(`/peliculanl/${pelicula.id}`)">
        
        <img class="imgh" :src="this.pelicula.imageUrl"/>
    
</div>
<div class="body">
          <div style="display:flex">{{this.pelicula.name}}</div>

      <div style="display:flex;width: 30px;
        height: 30px;
        line-height: 30px;
        -moz-border-radius: 50%;
        border-radius: 50%;
        border: solid 2px black;
        color: red;
        text-align: center;
        display: block;">{{this.pelicula.valoration}}</div>
        
        </div>
    </div>
</template>
<script>

export default {
    name: 'Pelicula nl',
    data(){
        return{
            pelicula: {}
        }
       
    },
    components: {

    },
    props:{
        idPelicula: Number
    },
    created(){
        fetch(`https://localhost:44326/api/Peliculas/${this.idPelicula}` , {

        })
        .then((result) => result.json())
        .then((data) => {
            this.pelicula = data;
            
        })
        }
        
    }  

</script>

<style>
    .imgh{
        width: 140px;
        height: 220px;
    }
    .body{
        display:flex;
        flex-direction: column;
        margin:auto;
        align-items: center;
        gap: 2em;
    }

    
</style>