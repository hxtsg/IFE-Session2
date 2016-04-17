$ = function(el) {
    return document.querySelector(el);
}
var validate_arr = [ false, false,false,false,false ];
var input_arr = [ $("#input_name"),$("#input_pass"),$("#input_passagain"),$("#input_mailbox"),$("#input_phone") ];
var hint_arr = [ $("#name_hint"),$("#pass_hint"),$("#passagain_hint"),$("#mailbox_hint"),$("#phone_hint")];
var hint_info = [ "�������ӦΪ4-16���ַ�","����������4-16λ","��������ͬ������","example@abc.com","�ֻ�����" ];
var check_box_arr = [ $("#name_check"), $("#pass_check"), $("#passagain_check"), $("#mailbox_check"), $("#phone_check") ];
var block_arr = [ $("#name_block"), $("#pass_block"), $("#passagain_block"), $("#mailbox_block"), $("#phone_block") ];
var generate_btn = $("#gen_form");
var radio_arr = document.getElementsByName("css_selected");

generate_btn.addEventListener("click",
    function()
    {
        var block_ele = document.getElementsByClassName("block");
        if( radio_arr[0].checked ){
            for( var i = 0 ; i < block_arr.length ; i ++ ){
                block_arr[ i].style.fontSize = "1em";
            }
        }
        else{
            for( var i = 0 ; i < block_arr.length ; i ++ ){
                block_arr[ i].style.fontSize = "2em";
            }

        }


        for( var i = 0 ; i < check_box_arr.length ; i ++ ){
            if( check_box_arr[ i].checked ){
                block_arr[i].style.display = "block";
            }
            else{
                block_arr[i].style.display = "none";
            }
        }
    }, false);




function OnFocusChange( ele )
{
    var index = parseInt( ele.getAttribute("index") );
    ele.style.borderColor = "blue";
    hint_arr[ index ].innerHTML = hint_info[ index ];
    hint_arr[ index].style.color = "gray";
}
function OnBlurHappens( ele )
{

    var index = parseInt( ele.getAttribute("index") );
    var sp = hint_arr[ index ];

    if( ele.value == "" ){
        ele.style.borderColor = "red";
        sp.innerHTML = "���벻��Ϊ��";
        sp.style.color = "red";
        return;
    }
    switch( index )
    {
        case 0:
            var len = CountLength( ele.value );
            if( len < 4 || len > 16 ){
                sp.innerHTML = "������ҪΪ4-16λ";
                sp.style.color = "red";
                ele.style.borderColor = "red";
                validate_arr[ 0 ] = false;
            }
            else{
                sp.innerHTML = "���ƿ���";
                sp.style.color = "green";
                ele.style.borderColor = "green";
                validate_arr[ 0 ] = true;
            }
            break;
        case 1:
            var len = CountLength( ele.value );
            if( len < 4 || len > 16 ){
                sp.innerHTML = "������ҪΪ4-16λ";
                sp.style.color = "red";
                ele.style.borderColor = "red";
                validate_arr[ 1 ] = false;
            }
            else{
                sp.innerHTML = "�������";
                sp.style.color = "green";
                ele.style.borderColor = "green";
                validate_arr[ 1 ] = true;
            }
            break;
        case 2:

            if( ele.value != input_arr[ 1].value ){
                sp.innerHTML = "���������������һ��";
                sp.style.color = "red";
                ele.style.borderColor = "red";
                validate_arr[ 2 ] = false;
            }
            else{
                sp.innerHTML = "�������";
                sp.style.color = "green";
                ele.style.borderColor = "green";
                validate_arr[ 2 ] = true;
            }

            break;

        case 3:
            var reg = new RegExp('^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$', 'i');
            if( ele.value.match( reg ) ){
                sp.innerHTML = "�����ʽ��ȷ";
                sp.style.color = "green";
                ele.style.borderColor = "green";
                validate_arr[ 3 ] = true;
            }
            else{
                sp.innerHTML = "�����ʽ����";
                sp.style.color = "red";
                ele.style.borderColor = "red";
                validate_arr[ 3 ] = false;
            }
            break;

        case 4:
            var reg = new RegExp(/^1\d{10}$/);
            if( ele.value.match( reg ) ){
                sp.innerHTML = "�ֻ���ʽ��ȷ";
                sp.style.color = "green";
                ele.style.borderColor = "green";
                validate_arr[ 4 ] = true;
            }
            else{
                sp.innerHTML = "�ֻ���ʽ����";
                sp.style.color = "red";
                ele.style.borderColor = "red";
                validate_arr[ 4 ] = false;
            }


            break;

    }

}


function CountLength( str )
{
    var rst = 0;
    for( var i in str ){
        if( str.charCodeAt( i ) >= 0 && str.charCodeAt( i ) <= 128 ){
            rst += 1;
        }
        else{
            rst += 2;
        }

    }
    return rst;
}


function CheckAll_checked()
{
    var rst = true;
    for( var i = 0 ; i < check_box_arr.length ; i ++ ){
        if( check_box_arr[ i].checked && ! validate_arr[ i ] ){
            rst = false;
        }
    }
    if( rst ){
        alert( "��ʽ��ȷ" );
    }
    else{
        alert("��ʽ����");
    }

}

for( var i in input_arr ){
    element = input_arr[ i ];
    element.addEventListener("focus",
        function( ev ){
            OnFocusChange( ev.target )
        }, false);

    element.addEventListener("blur",
        function(ev)
        {
            OnBlurHappens( ev.target );

        },false);


}

