import Vue from 'vue';
export default  {
    install(){
        Vue.component('jw-button',{
            render:(h)=>h('button','jw')
        })
    }
}