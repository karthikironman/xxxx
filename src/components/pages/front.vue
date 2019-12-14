<template>
 <div class="frontpage">
<h1>front</h1>
{{toilet}}
</div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            toilet:[
             null,
             null,
             null
            ],
            response:null
        }
    },
    created(){
       axios
      .get('https:diatoztoilet.herokuapp.com/')
      .then(response => {this.toilet= response.data; })
      .catch(err=> alert(err,"rascal you call pa"))
    }
}
</script>
<style scoped>
.frontpage{
    height:calc( 100vh - 12rem);
    background:black;
    color:white;
    width:95vw;
    margin: 0 auto;
    border-top-left-radius:20%;
    border-top-right-radius:20%;
     padding:5rem;
}
</style>