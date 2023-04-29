function boardStart (anwser) {
    let result = ""
    if (anwser){
        result += "Wellcome To The Game, Play Me";
    } else {
        result += "You Will Back,right ?"
    }
    return result;
}

let chapNhan = confirm("Do You Want Play Game With me ?")
alert(boardStart(chapNhan));