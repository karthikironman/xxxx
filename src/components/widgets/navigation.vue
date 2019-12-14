<template>
  <div class="navigation">
    <b-nav tabs fill>
      <b-nav-item
        v-for="items in menu"
        :active="items.active"
        :style="items.style"
         v-b-tooltip.hover :title="items.hoverMessage"
        @click="clicked(items.routePath)"
        :key="items"
      >{{items.name}}</b-nav-item>
    </b-nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          name: "GET",
          hoverMessage: "Get client",
          routePath: "front",
          active: false,
        },
         {
          name: "POST",
          hoverMessage: "Post client",
          routePath: "back",
          active: false,
        },
         {
          name: "ABOUT",
          hoverMessage: "About karthik",
          routePath: "about",
          active: false,
        },
       
      ]
    };
  },
  mounted(){
    var data = this.$route.path;
    data = data.slice(1);
   this.clicked(data)
  },
  methods: {
    clicked(data) {
      this.$router.push(data);
      for (var a = 0; a < this.menu.length; a++) {
        if (this.menu[a].routePath == data) {
          this.menu[a].active = true;
        } else {
          this.menu[a].active = false;
        }
      }
    }
  }
};
</script>
<style scoped>
.navigation {
  width: fit-content;
  margin: 0 auto;
   height:2.65rem;
   opacity:1;
}
/deep/.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
    color: white;
    background-color: black;
    border-color:black;
     opacity:1;
}
/deep/.nav-tabs li:first-child a  {
    border-top-left-radius: 100%;
    padding-right:5px;
    padding-left:3rem;
     padding-bottom:1rem !important;
}
/deep/.nav-tabs li:last-child a  {
 
    border-top-right-radius: 100%;
    padding-left:5px;
     padding-right:2rem;
      padding-bottom:1rem !important;
}
/deep/.nav-tabs .nav-link, .nav-tabs .nav-item.show .nav-link {
    color: white;
    background-color:red;
    opacity:.3;
    border-color:white;
    width: 25vw;
    height:2.4rem;
    margin-bottom:1rem;

}


</style>

