<template>
  <div class="container">
      <div class="item layer-0"></div>
      <div class="item layer-1"></div>
      <div class="item layer-2"></div>
      <div class="item layer-3"></div>
  </div>
</template>


<style scoped>
body{
  margin: 0;
  height: 100vh;
  background: #4B8FE6;
  display: flex; 
  align-items: center;
  justify-content: center;
}

.container{
  width: 200px;
  height: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 5px;
  padding: 20px;
}

.item{
 
}

.layer-0{
  width: 10px;
  height: 10px;
  background: #D1B347;
  border-radius: 50%;

  animation: 1s bar-anim infinite cubic-bezier(.25,.52,.8,.53) alternate;
  
}

.layer-1{
  width: 10px;
  height: 10px;
  background: #D13232;
  border-radius: 50%;

  animation: 1s bar-anim infinite cubic-bezier(.25,.52,.8,.53) alternate;
  animation-delay: 100ms;
  

}
.layer-2{
  width: 10px;
  height: 10px;
  background: #1DD150;
  border-radius: 50%;

  animation: .7s bar-anim infinite cubic-bezier(.25,.52,.8,.53) alternate;
    animation-delay: 200ms;
  
  

}
.layer-3{
  width: 10px;
  height: 10px;
  background: #2837D1;
  border-radius: 50%;

  animation: 1s bar-anim infinite cubic-bezier(.25,.52,.8,.53) alternate;
    animation-delay: 300ms;
  

}



@keyframes bar-anim{
  to{
    border-radius: 50px;
    height: 100px;
  }
}
</style>