new Vue({
    el:"#box",
    data:{
        datas:[
            {
                title:"赵路"
            },
            {
                title:"李泽路"
            },
            {
                title:"高捷"
            }
        ],
        state:"false",
        title:"",
        color:"red"
    },
    methods:{
        aa(){
            this.state=true;
        },
        bb(val){
            this.title=val;
        }
    }
})