new Vue({
    el : "#app"
    ,data : {
        linkToNaver : "<a href='https://www.naver.com'>네이버로</a>"
        ,diceNum    : 0 //주사위 숫자
    }
    ,methods : {
        rollDice : function(){
            let num = Math.floor(Math.random() * 6) + 1;
            this.diceNum = num
        },addNum : function(num){
            this.diceNum = this.diceNum + num
        },minusNum : function(num){
            this.diceNum = this.diceNum - num
        },clearNum : function(){
            this.diceNum = 0
        },chkNm : function(){
            alert("확인")
        }
    }
})