/**
 * Created by öÎ on 2016/4/9.
 */





var data = [];
var left_in = document.getElementById("left_in");
var left_out = document.getElementById("left_out");
var right_in = document.getElementById("right_in");
var right_out = document.getElementById("right_out");
var queue_block = document.getElementById("queue_block");
var input_text = document.getElementById("input_text");




function Check()
{
    var tmp_val = input_text.value;
    if( isNaN( tmp_val ) ){
        alert("Is not number!");
        input_text.value = "";
        return false;
    }
    else if( parseInt( tmp_val ) < 10 || parseInt( tmp_val ) > 100 ){
        alert("The number should be between 10 and 100!");
        return false;
    }
    else{
        return true;
    }

}

function render()
{
    var ht = "";
    var max_height = 200;

    for( var i in data ){
        var cur_height = data[ i ] * 1.0 / 100.0 * max_height;
        ht += ['<div1 index = ', i , ' style="height:',cur_height,'px"', 'class = "num_block" >',data[i],'</div1>'].join('');
    }
    queue_block.innerHTML = ht;
}
render();

function left_move_in()
{
    if( ! Check() ){
        return ;
    }

    if( data.length >= 60 ){
        alert( "The max number is 60 !" );
        return ;
    }

    var new_data = input_text.value;

    var tmp_array = [];
    tmp_array.push( new_data );
    for( var i in data )
    {
        tmp_array.push( data[ i ] );
    }
    data = [];

    for( var i in tmp_array ){
        data.push( tmp_array[ i ] );
    }
}

function right_move_in()
{
    if( ! Check() ){
        return ;
    }
    if( data.length >= 60 ){
        alert( "The max number is 60 !" );
        return ;
    }
    var new_data = input_text.value;
    data.push( new_data );
}


function left_move_out()
{
    if( ! Check() || data.length == 0 ){
        return ;
    }
    alert( data[ 0 ]);
    data = data.slice(1);

}


function right_move_out()
{
    if( ! Check() || data.length == 0 ){
        return ;
    }
    alert(data[ data.length - 1 ]);
    data = data.slice(0,-1);
}




left_in.addEventListener("click",function(){ left_move_in(); render(); }, "false");
left_out.addEventListener("click",function(){ left_move_out(); render(); }, "false");
right_in.addEventListener("click",function(){ right_move_in(); render(); }, "false");
right_out.addEventListener("click",function(){ right_move_out(); render(); }, "false");
queue_block.addEventListener("click",
    function(ev){

        if( ev.target.nodeName.toLowerCase() == 'div1' ){
            var index = ev.target.getAttribute("index");
            data.splice(index,1);
            render();
        }
    },
    false);