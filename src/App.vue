<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <h1 v-for="(item,index) in list" :key="index">{{item}}-{{index}}</h1>


    <input v-model="msg">
    <button @click = "changeMsg">click me</button>
    <hr/>
    firstname: <input v-model="firstname" /> <br/>
    lastname: <input v-model="lastname" /> <br/>
    fullname: {{firstname}}&nbsp;{{lastname}} <br/>
    fullname methods:{{getFullName()}} <br/>
    fullname computed: {{fullname}} <br/>
    fullname watch: {{fullnameWatch}} <br/>
    <hr/>
    <input v-model="name"/> <button @click="addUser">添加</button><br/>
    <ol>
      <li v-for="(item,index) in userList" :key="index">
        <span v-if="index % 3 == 0" class="red">{{item}} - {{index}}</span>
        <span v-else-if="index % 3 == 1" class="green">{{item}} - {{index}}</span>
        <span v-else class="blue">{{item}} - {{index}}</span>
      </li>
    </ol> -->
    <!-- <button-counter :prop-name="a">
    <span>A</span>
  </button-counter>
    <button-counter prop-name="c"><span>B</span></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter> -->


     app

     <router-link to="/foo">Go to Foo</router-link>
     <router-link to="/bar">Go to Bar</router-link>

    <button @click="gotoByurl('/foo')">Go to Foo</button>
    <button @click="gotoByurl('/bar')">Go to Bar</button>

     <router-view></router-view>


  </div>
</template>

<script>
import ButtonCounter from './components/ButtonCounter'
export default {
  name: 'app',
  components: {
    ButtonCounter
  },
  data () {
    return {
      flag: 0,
      msg: 'Welcome to Your Vue.js App',
      firstname:'fuyuhao',
      lastname:'zhengxiuyan',
      fullnameWatch:'fuyuhao zhengxiuyan',
      list:[111,222,333],
      name: '',
      userList:[],
      a:'A'
    }
  },

  methods:{

        gotoByurl(url){
          this.$router.push(url)
        }


  //   addUser(){
  //     this.userList.push(this.name)
  //     this.name = ''
  //   },
  //   changeMsg(){
  //     this.msg = "fyh"
  //   },
  //
  //   getFullName(){
  //     return this.firstname+' '+this.lastname
  //   }
  // },
  //
  // computed:{
  //   fullname:function(){
  //     return this.firstname+' '+this.lastname
  //   }
  // },
  //
  //
  // watch: {
  //   firstname: function(val){
  //     this.fullnameWatch = val + ' ' +this.lastname
  //   },
  //
  //   lastname: function(val){
  //     this.fullnameWatch = this.firstname+' '+val
  //   }
  }
}
</script>

<style lang="scss">
.red{
  background-color: red;

}
.green{
  background-color: green;

}
.blue{
  background-color: blue;

}

</style>
