
function acl(){}
acl.NAME         = "acl";
acl.VERSION      = "1.2";
acl.DESCRIPTION  = "Class acl";

acl.prototype.constructor = acl;
acl.prototype = {
    init:function(){
        common_f.prototype.roles("#acl-view .role_id")
        //event
        $("#acl-view .role_id").change(function(){
            acl.prototype.getGrp_role($(this).val())
        })

        $("#acl-view #btn-search").unbind("click").bind("click",function(){
            acl.prototype.getGrp_role($("#acl-view .role_id").val())
        })

        $("#acl-view #g_id").change(function(){
            acl.prototype.getACL_gID($(this).val())
        })

    },

    getGrp_role:function(role){
        var _link =link._groups_role;
        var _data ={auth:_auth,g_role:role,g_name:$("#acl-view #g_name").val()}

        if(role =="") return;

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": _link,
            "method": "POST",
            dataType: 'json',
            data:_data,
            //contentType: 'application/json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                //console.log(res);
                var data =res.response;
                if(data.length >0){
                    $("#acl-view #g_id").html('<option value=""></option>')
                    var grps="";
                    data.forEach(function(item){
                        grps +='<option value= "'+item.g_id+'">'+item.g_name+'</option>'
                    })
                    $("#acl-view #g_id").append(grps)
                }
                //
            }
        });
    },

    getACL_gID:function(g_id){
        var _link =link._groups;
        var _data ={auth:_auth, limit:1,offset:0,g_id:g_id}

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": _link,
            "method": "POST",
            dataType: 'json',
            data:_data,
            //contentType: 'application/json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                if(res.response.row_cnt >0){
                    var data = res.response.results[0].acl;
                   // console.log(data.acl);
                    var li ="";
                    var div ="";
                    for (let key in data) {
                        console.log(key+"=");
                        //console.log(data[key]);
                        for(let k_field in data[key]){
                            console.log(k_field+"="+data[key][k_field]["add"]+",");
                        }
                    }
                }
                //
            }
        });
    },

    processACLFields:function(key,obj){
        var li='';
        var div ='';
        var tr="";
        var tbody="";
        switch(key){
            case "Permission":
                for(let k_field in obj){
                    tr +='<tr class="tr-permission">' +
                        '<td class="field"></td>'+
                        '<td class="field"></td>'
                        '</tr>';
                }
                break;
            case "Assigned_Integration":
                break;
            case "Branch":
                break;
            case "Company":
                break;
            case "Integration":
                break;
            case "User":
                break;
        }

        li +='<li class="nav-item">'+
            '<a class="nav-link active" data-toggle="tab" href="#'+key+'" role="tab">'+key+'</a>'+
            '</li>'

    }


}
var acl1 = new acl();
$(function(){
    acl1.init();
});