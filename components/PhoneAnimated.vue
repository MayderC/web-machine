<template>
  <div class="main">
    <div class="phone">
      <div class="layer-0"></div>
      <div class="layer-1">
        <div class="rabbit-1"></div>
      </div>
      <div class="layer-2">
        <div class="rabbit-2"></div>
      </div>
      <div class="layer-3"></div>
      <div class="layer-4">
        <div class="rabbit-3"></div>
      </div>
      <div class="layer-5"></div>
      <div class="layer-6">
        <div class="rabbit-4"></div>
      </div>
      <div class="layer-7"></div>
      <div class="layer-8"></div>
      <div class="layer-9"></div>
      <div class="layer-10"></div>
    </div>
  </div>
</template>

<style scoped>
.phone {
  position: relative;
}

.layer-0,
.layer-1,
.layer-2,
.layer-3,
.layer-4,
.layer-5,
.layer-6,
.layer-7,
.layer-8,
.layer-9,
.layer10,
.corner {
  position: absolute;
}

.main {
  height: 270px;
  width: 160px;
}

.phone {
  height: 270px;
  min-width: 160px;
  background: #702eaf;
  border: 5px solid rgb(45, 45, 45);
  border-radius: 20px;
  box-shadow: 15px 20px 28px rgba(0, 0, 0, 0.5),
    -0px 0px 20px rgba(0, 0, 0, 0.5);

  transition: 1s;
  overflow: hidden;
  z-index: -1;
}
.layer-0 {
  background: yellow;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  left: -10px;
  top: -10px;
  animation: 1s pulse-sun infinite;
  animation-direction: alternate;

  z-index: 0;
}

@keyframes pulse-sun {
  from {
    opacity: 0.1;
  }
  to {
    box-shadow: 10px 10px 80px yellow, -10px -10px 80px yellow;

    transform: translatez(10px);
  }
}

.layer-1 {
  position: absolute;
  width: 80px;
  height: 90px;
  left: 55%;
  bottom: 430px;
  z-index: 1;
}
.layer-2 {
  width: 80px;
  height: 90px;
  right: 55%;
  bottom: 430px;
  z-index: 2;
}
.layer-3 {
  background: #ae5621;
  width: 160px;
  height: 150px;
  left: 50%;
  transform: translate(-50%);
  bottom: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-shadow: inset 10px 0 20px rgba(0, 0, 0, 0.3),
    inset -10px 0 20px rgba(0, 0, 0, 0.3), inset 0 20px 1px rgba(19, 140, 36),
    10px 0 20px rgba(0, 0, 0, 0.4), -10px 0 20px rgba(0, 0, 0, 0.4);

  animation: 1s down infinite;
  animation-direction: alternate;
  z-index: 3;
}

@keyframes down {
  to {
    height: 105px;
  }
}

.layer-4 {
  width: 80px;
  height: 120px;
  left: 60px;
  bottom: 320px;
  z-index: 4;
}
.layer-5 {
  width: 100px;
  height: 105px;
  background: #ae5621;
  bottom: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  box-shadow: inset 10px 0 20px rgba(0, 0, 0, 0.3),
    inset -10px 0 20px rgba(0, 0, 0, 0.3), inset 0 20px 1px rgba(19, 140, 36),
    10px 0 20px rgba(0, 0, 0, 0.4), -10px 0 20px rgba(0, 0, 0, 0.4);
  animation: 1.5s move-2 infinite cubic-bezier(0.11, 0.01, 0.67, -0.11);
  animation-direction: alternate;
  z-index: 5;
}

@keyframes move-2 {
  to {
    transform: translatex(50%);
  }
}

.layer-6 {
  width: 80px;
  height: 90px;
  right: 60px;
  bottom: 210px;
  z-index: 6;
}
.layer-7 {
  background: #ae5621;
  width: 100px;
  height: 70px;
  right: -1px;
  bottom: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: inset 10px 0 20px rgba(0, 0, 0, 0.4),
    inset -10px 0 20px rgba(0, 0, 0, 0.4), inset 0 20px 1px rgba(19, 140, 36),
    10px 0 20px rgba(0, 0, 0, 0.4), -10px 0 20px rgba(0, 0, 0, 0.4);
  animation: 1.5s move-3 infinite cubic-bezier(0.11, 0.01, 0.67, -0.11);
  animation-direction: alternate;
  z-index: 7;
}

@keyframes move-3 {
  to {
    transform: translate(-50%);
  }
}

.layer-8 {
  background: white;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  box-shadow: inset 0 10px 10px rgba(0, 0, 0, 0.4);

  right: 70px;
  bottom: 60px;
  transform: translatex(30px) translatey(30px);
  z-index: 8;

  display: none;
}
.layer-8:after {
  position: absolute;
  content: "";
  background: white;
  width: 100px;
  height: 100px;
  left: 47px;
  top: 50px;
  border-radius: 50%;
  box-shadow: inset -10px 0px 10px rgba(0, 0, 0, 0.4);
}
.layer-8:before {
  position: absolute;
  content: "";
  background: white;
  width: 100px;
  height: 100px;
  left: -50px;
  top: 50px;
  border-radius: 50%;
  box-shadow: inset 10px 0px 10px rgba(0, 0, 0, 0.4);
}
.layer-9 {
  background: white;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  box-shadow: inset 0 10px 10px rgba(0, 0, 0, 0.4);

  left: 5px;
  bottom: 10px;
  z-index: 8;

  display: none;
}
.layer-9:after {
  position: absolute;
  content: "";
  background: white;
  width: 100px;
  height: 100px;
  left: 47px;
  top: 50px;
  border-radius: 50%;
  box-shadow: inset -10px 0px 10px rgba(0, 0, 0, 0.4);
}
.layer-9:before {
  position: absolute;
  content: "";
  background: white;
  width: 100px;
  height: 100px;
  left: -50px;
  top: 50px;
  border-radius: 50%;
  box-shadow: inset 10px 0px 10px rgba(0, 0, 0, 0.4);
}
.layer-10 {
  z-index: 10;
}
/*rabbits*/

.main {
  position: relative;
}

.phone {
  position: absolute;
  transform: perspective(1500px) rotateY(40deg) rotateX(30deg);
  transform-style: preserve-3d;
  transition: 0.5s;
}

.main:hover .phone {
  transform: perspective(1500px) rotateY(0deg) rotateX(0deg);
  overflow: hidden;
}
</style>
