Vue.component("custom-input",{
    props:["title"],
    template:`<div class="select-input">
                    <input type="text" v-model="title" @click="focus">
              </div>`,
    methods:{
        focus(){
            this.$emit("customevent");
        }
    }
})

Vue.component("custom-list",{
    props:["listData","color","state"],
    template:`<ul class="select-list" :style="{color:color}" v-show="state==true">
                    <li v-for="item in listData" @click="click(item.title)">{{item.title}}</li>
                </ul>`,
    methods:{
        click(val){
            this.$emit("customevent",val);
        }
    }
})