function checkPassword(str){
    if(str.length <= 16 && str.length >= 6 && 
    ((str[0] >= 'a' && str[0] <= 'z') || (str[0] >= 'A' 
    && str[0] <= 'Z') || (str[0] == '_'))){
        var u = 0;
        var l = 0;
        var number = 0;
        var _num = 0;
        for(var i = 0;i < str.length; i++){
            if(str[i] >= 'a' && str[i] <= 'z'){
                u = 1;
            } 
            else if(str[i] >= 'A' && str[i] <= 'Z'){
                l = 1;
            } 
            else if(str[i] >= '0' && str[i] <= '9'){
                number = 1;
            } 
            else if(str[i] == '_'){
                _num = 1;
            }
            else{
                return false;
            }
        }
        if(u + l + number + _num >= 3){
            return true;
        }
        return false;
    }
    return false;
}
console.log(checkPassword('123Fj_1'))