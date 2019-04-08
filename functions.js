var array = [0,1,2,3,4,1];
function check_if_number_in_array(input){
    var count = 0;
    for (i = 0; i < array.length; i++){
        if (input == parseInt(array[i])) {
            count ++
        }
    }
    if (count > 0) {
        alert ("so " + input + " xuat hien " + count + " lan trong chuoi");
    } else {
        alert (-1);
    }
}