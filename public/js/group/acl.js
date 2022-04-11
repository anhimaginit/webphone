
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
        $('#acl-view #ul-acl').html("")
        $('#acl-view #body-acl').html("")

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
                    for (let key in data) {
                        acl.prototype.processACLFields(key,data);
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
        var tab='';
        var active ="";
        switch(key){
            case "Permission":
                active = "active";
                for(let k_field in obj){
                    var view = obj[k_field]["view"];
                    var add = obj[k_field]["add"];
                    var edit = obj[k_field]["edit"];

                    tr +='<tr class="tr_acl">' +
                        '<td >'+k_field+'<input class="key" type="hidden" value="'+k_field+'"></td>'+
                        acl.prototype.td_acl(view,add,edit)+
                        '</tr>';
                }

                break;
            case "Assigned_Integration":
                for(let k_field in obj){
                    var k_field_t = k_field.split("_")
                    var key_name = k_field;
                    if(k_field_t[0] =="i"){
                        key_name = "Integration"
                    }else if(k_field_t[0] =="u"){
                        key_name = "User"
                    }else{
                        key_name = "Assigned Integration "+ k_field_t[1]
                    }

                    var view = obj[k_field]["view"];
                    var add = obj[k_field]["add"];
                    var edit = obj[k_field]["edit"];

                    tr +='<tr class="tr_acl">' +
                        '<td >'+key_name+'<input class="key" type="hidden" value="'+k_field+'"></td>'+
                        acl.prototype.td_acl(view,add,edit)+
                        '</tr>';
                }
                break;
            case "Branch":
                for(let k_field in obj){
                    var k_field_t = k_field.split("_")
                    var key_name = k_field;
                    if(k_field_t[0] =="c"){
                        key_name = "Company"
                    }else{
                        key_name = "Branch "+ k_field_t[1]
                    }

                    var view = obj[k_field]["view"];
                    var add = obj[k_field]["add"];
                    var edit = obj[k_field]["edit"];

                    tr +='<tr class="tr_acl">' +
                        '<td >'+key_name+'<input class="key" type="hidden" value="'+k_field+'"></td>'+
                        acl.prototype.td_acl(view,add,edit)+
                        '</tr>';
                }
                break;
            case "Company":
                for(let k_field in obj){
                    var k_field_t = k_field.split("_")
                    //var key_name = k_field;

                    var key_name = "Company "+ k_field_t[1]

                    var view = obj[k_field]["view"];
                    var add = obj[k_field]["add"];
                    var edit = obj[k_field]["edit"];

                    tr +='<tr class="tr_acl">' +
                        '<td >'+key_name+'<input class="key" type="hidden" value="'+k_field+'"></td>'+
                        acl.prototype.td_acl(view,add,edit)+
                        '</tr>';
                }
                break;
            case "Integration":
                for(let k_field in obj){
                    var k_field_t = k_field.split("_")
                    var key_name = k_field;
                    if(k_field_t[0] =="c"){
                        key_name = "Company"
                    }else{
                        key_name = "Integration "+ k_field_t[1]
                    }

                    var view = obj[k_field]["view"];
                    var add = obj[k_field]["add"];
                    var edit = obj[k_field]["edit"];

                    tr +='<tr class="tr_acl">' +
                        '<td >'+key_name+'<input class="key" type="hidden" value="'+k_field+'"></td>'+
                        acl.prototype.td_acl(view,add,edit)+
                        '</tr>';
                }
                break;
            case "User":

                for(let k_field in obj){
                    var k_field_t = k_field.split("_")
                    var key_name = k_field;
                    if(k_field_t[0] =="b"){
                        key_name = "Branch"
                    }else{
                        key_name = "User "+ k_field_t[1]
                    }

                    var view = obj[k_field]["view"];
                    var add = obj[k_field]["add"];
                    var edit = obj[k_field]["edit"];

                    tr +='<tr class="tr_acl">' +
                        '<td >'+key_name+'<input class="key" type="hidden" value="'+k_field+'"></td>'+
                        acl.prototype.td_acl(view,add,edit)+
                        '</tr>';
                }
                break;
        }

        li +='<li class="nav-item ">'+
            '<a class="nav-link '+active+'" data-toggle="tab" href="#'+key+'" role="tab">'+key+'</a>'+
            '</li>'

        tab ='<div class="tab-pane fade show acl '+active+'" id="'+key+'" role="tabpanel">' +
                '<div class="table-responsive-lg col-12">' +
                    '<table class="table table-bordered m-0 t-normal-l table-acl">' +
                        '<thead>'+
                            '<tr>'+
                                '<th style="width: 150px">Filed Name</th>'+
                                '<th>Permission</th>'+
                            '</tr>'+
                        '</thead>'+
                        '<tbody>'+
                            tr
                        '</tbody>' +
                    '</table>' +
                '</div>' +
            '</div>'

        $('#acl-view #ul-acl').append(li)
        $('#acl-view #body-acl').append(tab)

    },

    td_acl:function(view,add,edit){
        var view_v =(view)?'checked="checked"':'';
        var add_v =(add)?'checked="checked"':'';
        var edit_v =(edit)?'checked="checked"':'';

        var td =
            '<td class="v-key">' +
                '<div class="row col-12">'+
                    '<div class="custom-control custom-checkbox custom-control-inline">'+
                        '<input type="checkbox" class="custom-control-input view" '+view_v+'>'+
                        '<label class="custom-control-label" for="view">View</label>'+
                    '</div>'+
                    '<div class="custom-control custom-checkbox custom-control-inline">'+
                        '<input type="checkbox" class="custom-control-input add" '+add_v+'>'+
                        '<label class="custom-control-label" for="add">Add</label>'+
                    '</div>'+
                    '<div class="custom-control custom-checkbox custom-control-inline">'+
                        '<input type="checkbox" class="custom-control-input edit" '+edit_v+'>'+
                        '<label class="custom-control-label" for="edit">Edit</label>'+
                    '</div>'+
                '</div>' +
            '</td>';

        return td;
    }


}
var acl1 = new acl();
$(function(){
    acl1.init();
});