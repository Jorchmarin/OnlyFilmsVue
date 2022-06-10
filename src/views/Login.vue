<template>
  <div>
     <header style="padding-bottom: 10px">
      <div>
        <router-link to="/" style="text-decoration: none">
          <img src="../assets/logo.png" style="width: 200px" /> </router-link
        >
      </div>
    </header>
    <div class="box">
      <form @submit.prevent="loginUser">
        <h1>Login</h1>
        <input type="text" placeholder="Email" v-model="email" required />
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          required
        />
        <button type="submit" class="loginbtn">Login Account</button>
      </form>
        <div style="margin-top: 10px">
          <a style="text-decoration: none" href="/register"
            >Aun no tienes cuenta. prueba a registrarte</a>
    
        
      </div>
    </div>
  </div>
</template>

 <script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
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
  border-radius: 10px;
  padding: 16px;
  margin-top: 15px;
}
* {
  box-sizing: border-box;
}
.loginbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}
</style>