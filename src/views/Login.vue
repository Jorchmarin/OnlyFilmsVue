<template>
<div class="box">
          <form @submit.prevent="loginUser">
            <h1>Login</h1>
            <input type="text" placeholder="Email" v-model="email" required />
            <input type="password" placeholder="Password" v-model="password" required/>
            <button type="submit" class="loginbtn"> Login Account</button>
    </form>
    <div>
            <a href="/">Volver al inicio</a>
           
            <a href="/register">Aun no tienes cuenta. prueba a registrarte</a>
            </div>
  </div>
  
</template>

 <script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
      
    };
  },
  methods: {
     loginUser() {
        fetch("https://localhost:44326/api/Usuarios/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      }).then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            this.$store.commit("setCurrentUser", data);
            this.$router.push("/home");
            console.log(this.$store.getters.getCurrentUser);
          });

          alert("Login correcto");

          this.$router.push("/home");
        } else {
          alert("Los datos son incorrectos o no existe el correo"); 
          //reject
        }
      });
    },
  },
};
</script>
<style>
.box {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 10px; ;
    padding: 16px;

}
* {box-sizing: border-box}
.loginbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}
</style>