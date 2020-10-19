new Vue({
    el : "#app"
    ,data : {
        title : "v-once 에 대해 알아보자"
        ,nextLink : "https://medium.com/@hozacho/%EB%A7%A8%EB%95%85%EC%97%90-vuejs-005-vuejs-directive-v-html-f221dd096d6a"
    }
    ,methods : {
        fnHello : function(){
            this.title = "Vue instance와 binding이 되어 데이터가 전부 변경됩니다."
            return this.title
        }
    }
})