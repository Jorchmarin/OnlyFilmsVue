<template>
    <div style="display:flex">
        <div style="display:flex" @click="$router.push(`/pelicula/${pelicula.id}`)">
        
        <img class="imgh" :src="this.pelicula.imageUrl"/>
    
</div>

    </div>
</template>
<script>

export default {
    name: 'Pelicula',
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