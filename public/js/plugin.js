
new Vue({
    el: "#app",
    data:{
       title: 'Add a comment',
      newItem: '',
      item: [],
    },
    methods:{
      addItem  (){
      this.item.push(this.newItem);
        this.newItem = "";
      }
  }
 
  });