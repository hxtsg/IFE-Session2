/**
 * Created by öÎ on 2016/4/9.
 */


var input_string = document.getElementById("input_text");
var search_btn = document.getElementById("search");

var data = [];
var tmp_data = [];
var left_in = document.getElementById("left_in");
var left_out = document.getElementById("left_out");
var right_in = document.getElementById("right_in");
var right_out = document.getElementById("right_out");
var queue_block = document.getElementById("queue_block");


function Check()
{
    tmp_data = input_string.value.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function(d){return d != '';});
    for( var i in tmp_data ){
        console.log( tmp_data[ i ] );
    }

}

function render()
{
    var ht = "";
    for( var i in data ){
        ht += ['<div1 index = "', i , '" class = "num_block">',data[i],'</div1>'].join('');
    }
    queue_block.innerHTML = ht;

}

function left_move_in()
{
    Check();

    var tmp_array = [];
    for( var i in tmp_data ){
        tmp_array.push( tmp_data[ i ] );
    }

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
    Check();
    for( var i in tmp_data ){
        data.push( tmp_data[ i ] );
    }

}


function left_move_out()
{
    if( data.length == 0 ){
        return ;
    }
    alert( data[ 0 ]);
    data = data.slice(1);

}


function right_move_out()
{
    if( data.length == 0 ){
        return ;
    }
    alert(data[ data.length - 1 ]);
    data = data.slice(0,-1);
}

function Search()
{

    var ht = "";
    var mat = queue_block.innerHTML.match( input_string );
    if( mat != null && mat.length > 0 ){

        queue_block.innerHTML = queue_block.innerHTML.replace(new RegExp(mat, "g"), '<span class ="sel">' + mat + '</span>')
    }



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

search_btn.addEventListener("click", Search, false);


