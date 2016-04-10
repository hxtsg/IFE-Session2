/**
 * aqiData���洢�û�����Ŀ���ָ������
 * ʾ����ʽ��
 * aqiData = {
 *    "����": 90,
 *    "�Ϻ�": 40
 * };
 */


/**
 * ���û������л�ȡ���ݣ���aqiData������һ������
 * Ȼ����Ⱦaqi-list�б���������������
 */
var aqiData = new Array();
var city = document.getElementById("aqi-city-input");
var quality = document.getElementById("aqi-value-input");
var add_btn = document.getElementById("add-btn");
var appendSuccessfully = false;
function trim(str){ //ɾ���������˵Ŀո�
    var rst = "";
    var s = 0;
    var t = str.length - 1;
    while( s < str.length && str.charAt( s ) == ' ' ){
        s ++;
    }
    while( t >= 0 && str.charAt( t ) == ' ' ){
        t --;
    }
    rst = str.substring( s, t + 1 );
    return rst;
}

function CheckQuality()
{
    var qualityValue = quality.value;
    qualityValue = trim( qualityValue );
    if( qualityValue.length == 0 ){
        return "";
    }
    var i = 0;

    for( i = 0 ; i < qualityValue.length ; i ++ ){
        if( !( qualityValue.charAt( i ) >= '0' && qualityValue.charAt( i ) <= '9' ) ){
            break;
        }
    }
    if( i == qualityValue.length ){
        return qualityValue;
    }
    else{
        return "";
    }
}


function CheckCityName()
{
    var city_name = city.value;

    city_name = trim( city_name );
    if( city_name.length == 0 ){
        return "";
    }
    var i = 0 ;
    for( i = 0 ; i < city_name.length ; i ++ ){
        if( !(city_name.charCodeAt( i ) > 255 || (city_name.charAt( i ) >= 'a' && city_name.charAt( i ) <='z' )
            || (city_name.charAt( i ) >= 'A' && city_name.charAt( i ) <='Z') || city_name.charAt( i ) == ' ' ) ){
            break;
        }
    }
    if( i == city_name.length ){
        return city_name;
    }
    else{
        return "";
    }
}


function addAqiData(){

    var city_result = CheckCityName();
    var quality_result = CheckQuality();
    appendSuccessfully = false;


    if(  city_result.length == 0 ){
        alert("������������Ӣ�Ļ�������");
        return ;
    }
    if( quality_result.length == 0 ){
        alert("������������������");
        return ;
    }
    aqiData.push( [ city_result, parseInt(quality_result) ] );

    alert("��ӳɹ�");
    appendSuccessfully = true;
}

/**
 * ��Ⱦaqi-table���
 */
function renderAqiList() {
    if( appendSuccessfully ){
        var area = document.getElementById("list");
        var ele = document.createElement("li");
        ele.innerHTML =  aqiData[ aqiData.length - 1];
        var appendEle = document.createElement("button");
        appendEle.addEventListener( "click",
            function(){ area.removeChild(ele) }, false );

        ele.appendChild( appendEle );
        area.appendChild( ele );
    }

}

/**
 * ���add-btnʱ�Ĵ����߼�
 * ��ȡ�û����룬�������ݣ�������ҳ����ֵĸ���
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * �������ɾ����ť��ʱ��Ĵ����߼�
 * ��ȡ�ĸ��������ݱ�ɾ��ɾ�����ݣ����±����ʾ
 */
function delBtnHandle() {
    // do sth.

    renderAqiList();
}

function init() {

    // ���������add-btn��һ������¼������ʱ����addBtnHandle����

    add_btn.addEventListener("click",addBtnHandle,false);

    // ��취��aqi-table�е�����ɾ����ť���¼�������delBtnHandle����
}
init();