<template>
  <section class="main">
    <section class="section">
      <form id="form" class="form" action>
        <div class="item item--img">
          <div class="item__msg">
            <p>{{ statusForm }}</p>
          </div>
        </div>
        <div class="item item--form">
          <div class="form__body">
            <div class="form__email">
              <label for="email"></label>
              <input
                id="email"
                v-model="email"
                type="email"
                required
                placeholder="@Email"
              />
            </div>
            <div class="form__text">
              <textarea
                id="msg"
                v-model="msg"
                name=""
                required
                cols="45"
                rows="6"
                placeholder="Mensaje..."
              ></textarea>
            </div>
            <div class="form__footer">
              <span id="enviar" class="submit" @click="sendData">Enviar</span>
            </div>
          </div>
        </div>
      </form>
    </section>
  </section>
</template>

<script>
import { sendContactForm } from "../fetch-request";

export default {
  name: "MContact",
  data() {
    return {
      email: "",
      msg: "",
      statusForm: "",
    };
  },
  methods: {
    sendData() {
      const body = {
        contact: {
          email: this.email,
          msg: this.msg,
        },
      };

      if (this.checkInputs()) {
        sendContactForm(body)
          .then((res) => {
            if (res.error) {
              this.printMsg("Error al enviar");
              return;
            }
            this.printMsg("Enviado");
            this.clearInputs();
          })
          .catch();
      }
    },
    checkInputs() {
      if (this.isMSG() && this.isEmail()) {
        return true;
      } else {
        if (!this.isMSG()) {
          this.printMsg("El mensaje es muy corto");
        }
        if (!this.isEmail()) {
          this.printMsg("El email no es valido");
        }
        return false;
      }
    },
    isMSG() {
      if (this.msg.length > 5) {
        return true;
      } else {
        return false;
      }
    },
    isEmail() {
      if (!this.email.includes("@") || !this.email.includes(".")) {
        return false;
      } else {
        return true;
      }
    },
    printMsg(text) {
      this.statusForm = text;
      setTimeout(() => {
        this.statusForm = "";
      }, 2500);
    },
    clearInputs() {
      this.msg = "";
      this.email = "";
    },
  },
};
</script>

<style scoped>
h2,
p {
  margin: 0;
  color: white;
  text-align: center;
}
.main {
  display: flex;
  justify-content: center;
}
.form {
  border-radius: 10px;
  background: #f5f4fd;
  background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.5);
  width: 750px;
  display: flex;
  transition: 0.3s;
}

.form__body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.form__footer {
  position: relative;
}

.item {
  padding: 20px;
  transition: 0.3s;
}

.item--img {
  width: 45%;
  background-image: url(~/assets/img/contact.jpg);
  background-size: cover;
  background-position: -60px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  border-radius: 10px;
  height: 320px;
}

.item--form {
  width: 55%;
  height: 320px;
}

.item__msg > p {
  font-size: 16px;
  color: black;
  font-weight: bold;
}

.form__text {
  box-sizing: border-box;
}

textarea {
  max-width: 100%;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.4);
  background: #f5f4fd;
  font-size: 16px;
  color: #f5f4fd;
  color: black;
  padding: 10px;
  border: none;
  font-family: "Quicksand", sans-serif;
  border-radius: 10px;
  border: 0;
}

.submit {
  background: #228d73;
  padding: 8px 20px;
  border: 0;
  outline: 0;
  border-radius: 10px;
  display: block;
  text-align: center;
  color: #f5f4fd;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
}

.submit:hover {
  background: #2ab493;
}
textarea:focus {
  outline: none;
}

#email {
  outline: none;
  border: none;
  background: #f5f4fd;
  box-sizing: border-box;
  border: 0;
  padding: 10px 10px;
  border-radius: 10px;
  width: 100%;
  max-width: 100%;
  font-size: 16px;
}

.section:hover .form {
  transform: perspective(1500px) rotatex(0deg) rotatey(0deg);
}

.form__email,
.form__footer {
  padding: 20px 0;
}

@media (min-width: 900px) {
  .form {
    transform: perspective(1500px) rotatey(30deg) rotatex(20deg);
  }
}

@media (max-width: 900px) {
  .main {
    display: flex;
    justify-content: center;
  }

  .form {
    display: flex;
    flex-direction: column;
    width: 400px;
    transition: 0.3s;
  }

  .item {
    width: 100%;
    transition: 0.3s;
  }
}

@media (max-width: 520px) {
  .form {
    width: 300px;
    transition: 0.3s;
  }
}
</style>
