
new Vue({
    el : "#app"
    ,data : {
        title : "안녕 VueJS!"
        ,link : "https://medium.com/@hozacho/%EB%A7%A8%EB%95%85%EC%97%90-vuejs-003-vuejs-directive-v-bind-a4844574e6ae"
    }
    ,methods: {
        fnHi : function(){
            return "반가워."
        }
        ,sayHello : function(){
            return this.title
        }
        ,moveLink : function(){
            return alert("이동합니다.")
        }
    }
})