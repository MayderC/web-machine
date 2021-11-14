<template>
  
<div class="container">
  
  <div class="item item-1"></div>
  <div class="item item-2"></div>
  <div class="item item-3"></div>
  <div class="item item-4"></div>
  
</div>
</template>

<style scoped>

body{
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5043A7;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
}

.container{
  display: flex;
  justify-content: center;
  align-items: center;
  /*background: #5D4EBC;*/
  width: 250px;
  height: 200px;
  border-radius: 15px;
  gap: 15px;
  /*
  transform-style: preserve-3d;
  transform: perspective(1500px) rotatey(40deg) rotatex(40deg);
  */
  
}

.item{
  background: black;
  width: 25px;
  height: 25px;
  transform: translatey(10px);
  border-radius: 50%;
  box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
}

.item-1{
  background-color: #FF3854;
  animation: 1.3s jump infinite cubic-bezier(.79,.06,.28,1);
}

.item-2{
  background-color: #FFF852;
    animation: 1.3s jump infinite cubic-bezier(.79,.06,.28,1);
  animation-delay: 100ms;
}

.item-3{
  background-color: #1FB8FF;
     animation: 1.3s jump infinite cubic-bezier(.79,.06,.28,1);
  animation-delay: 200ms;
}

.item-4{
  background-color: #1E84B3;
       animation: 1.3s jump infinite cubic-bezier(.79,.06,.28,1);
  animation-delay: 300ms;
}

@keyframes jump{

  40%{
    transform: translatey(-70px);
  }
  60%{
    transform: translatey(10px);
  }
  70%{
    transform: translatey(0px);
  }
  80%{
    transform: translatey(10px)
  }
  90%{
    transform: translatey(5px)
  }
  100%{
    transform: translatey(10px)
  }
}




</style>