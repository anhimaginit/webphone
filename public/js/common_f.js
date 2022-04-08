
function common_f(){}
common_f.NAME         = "common_f";
common_f.VERSION      = "1.2";
common_f.DESCRIPTION  = "Class common_f";

common_f.prototype.constructor = common_f;
common_f.prototype = {
    roles:function(el){
        var _data ={auth:_auth}

        var link3 = link._roles;
        //console.log(link3)
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:_data,
            //contentType: 'application/json',//use when post a form
            error : function (status,xhr,error) {
            },
            success: function (res) {
                //console.log(res);
                var option='';
                if(res.response.length>0){
                    res.response.forEach(function(item){
                        option +='<option value="'+item.r_value+'">'+item.r_name+'</option> ';
                    })
                }

                $(el).append(option)
            }
        });
    },


}
