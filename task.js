/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */


/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
var aqiData = new Array();
var city = document.getElementById("aqi-city-input");
var quality = document.getElementById("aqi-value-input");
var add_btn = document.getElementById("add-btn");
var appendSuccessfully = false;
function trim(str){ //删除左右两端的空格
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
        alert("城市名必须是英文或者中文");
        return ;
    }
    if( quality_result.length == 0 ){
        alert("空气质量必须是数字");
        return ;
    }
    aqiData.push( [ city_result, parseInt(quality_result) ] );

    alert("添加成功");
    appendSuccessfully = true;
}

/**
 * 渲染aqi-table表格
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
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
    // do sth.

    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

    add_btn.addEventListener("click",addBtnHandle,false);

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
}
init();