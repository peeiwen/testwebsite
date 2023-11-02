// Vue.createApp({
//   data(){
//     return{
//       goals:[],
//       enteredValue:''
//     };
//   },

//   methods:{
//     addGoal() {
//       this.goal.push(this.enteredValue);
//       this.enteredValue=''
//     }
//   }

// }).mount('#app');


// const app= Vue.createApp({
//   data(){
//     return{
//       courseGoalA:'Finish the Course',
//       courseGoalB:'Master the Course',
//       vueLink: 'https://www.udemy.com'
//     };
//   },
//   methods:{
//     outPutGoal(){
//       const randomNumber=Math.random()
//       if( randomNumber > 0.5){
// return this.courseGoalA } else{
//   return this.courseGoalB
// }
//       }
//     }
// })
// app.mount('#user-goal');

const app= Vue.createApp({
  data(){
    return{
      counter: 100,
      name:'',
      confirmName:''
    }
  },
  computed:{
   fullPutName(){
    console.log('running again')
    if(this.name === ''){
      return ''
    } return this.name + '' + 'Yu'
    }
   },

  methods:{
    outputFullName(){
      if(this.name === ''){
        return ''
      } return this.name + '' + 'Yu'
      },
    
    confirmInput(){
     this.confirmName = this.name
    },
    setName(event,lastName){
      return this.name = event.target.value + ' ' + lastName},

     add(num){
      return this.counter=this.counter + num
     },

     reduce(num){
      return this.counter=this.counter - num
     },

     resetName(){
      this.name = '';
     },

     submitForm(){
      alert('Submitted!');
     }
  }
})

app.mount('#events')