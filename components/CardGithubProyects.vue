<template lang="pug">
a(:href="`https://github.com/MayderC/${repo.name}`" target="_blank").card__link
  section().card__repo
    .card__title
      h4 {{repo.name}}

    .card__body
      canvas(:id="repo.name" width="260" height="340")


</template>

<script>

import { Chart } from 'chart.js';





export default {
  name: 'CardGithubProyects',
  props: {repo : { type: Object, default : ()=>{}}},
  data(){
    return{
      colors : [],
    }
  },

  mounted(){
    this.printChart()
  },

  methods: {
    getColorFrom(n) {
      const simbolos = "0123456789ABCDEF"
      let color = "#"
      const colors = []
      for (let i = 0; i < n; i++) {
        color = "#"
        for (let j = 0; j < 6; j++) {color = color + simbolos[Math.floor(Math.random() * 16)]}
        colors.push(color)
      }
      return colors
    },

    printChart(){
      const values = Object.values(this.repo.data).length
      const colors = this.getColorFrom(values)
      this.colors = colors
      this.generateChart()
    },

    generateChart(){
      const ctx = document.getElementById(this.repo.name).getContext('2d');




      const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: Object.keys(this.repo.data),
          datasets: [{
            data: Object.values(this.repo.data),
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'],
            borderWidth: 1
          }]
        },
        options: {
          scales: {y: {beginAtZero: true}},
          plugins: {
            legend: {
              labels: {
                    // This more specific font property overrides the global property
                font: {
                  size: 20
                  }
              }
            },
            title: {
              text: "HOLLAA"
            }
          },        
        }
      })
        
        return myChart
    }
  }
}
</script>


<style>

.card__repo{
  background-color: #fff;
  min-width: 260px;
  height: 370px;
  background-image: linear-gradient(to top, #5f72bd 0%, #9b23ea 100%);
  background-image: linear-gradient(to top, #5f72bd 0%, #23eae1 100%);
  background-image: linear-gradient(to top, #1d557a 0%, #2c7eb6 100%);
  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.5);
  background: #ffffff;
  padding: 10px;
  border-radius: 5px;
  transition: .2s;
}

.card__repo  p, h4{
  color: rgb(36, 36, 36);
  text-align: center
}

.card__body{
    height: calc(100% - 50px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card__body canvas{
  max-height: 90%;
  max-width: 90%;
}

.card__title{
  height: 50px;
  display: grid;
  place-items: center;
}

.card__link{
  text-decoration: none
}

.card__link:hover .card__repo{
  transform: rotate(3deg);
  transition: .2s;
}

</style>