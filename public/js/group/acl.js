
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

        $('#acl-view #body-acl').on('click','.btnapdateacl',function(){
            //console.log("test");
            acl.prototype.update_acl()
        })

    },

    getGrp_role:function(role){
        var _link =link._groups_role;
        var _data ={auth:_auth,g_role:role,g_name:$("#acl-view #g_name").val(),all:1}

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
                $("#acl-view #g_id").html('<option value=""></option>')
                if(data.length >0){
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

        var _link =link._group_gID;
        var _data ={auth:_auth,g_id:g_id}

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
                if(res.response.results.length >0){
                    var data = res.response.results[0].acl;
                   // console.log(data.acl);
                    for (let key in data) {
                        //console.log("key="+key+"----");
                        //console.log(data+"----");
                        acl.prototype.processACLFields(key,data[key]);
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
            case "permission":
                active = "active";
                for(let k_field in obj){
                    var view = obj[k_field]["view"];
                    var add = obj[k_field]["add"];
                    var edit = obj[k_field]["edit"];
                    //console.log("view="+view+";add="+add+";edit="+edit)
                    tr +='<tr class="tr_acl">' +
                        '<td >'+k_field+'<input class="key" type="hidden" value="'+k_field+'"></td>'+
                        acl.prototype.td_acl(view,add,edit)+
                        '</tr>';
                }

                break;
            case "assigned_integration":
                for(let k_field in obj){
                    var k_field_t = k_field.split("_")
                    //console.log("k_field="+k_field+";");
                    //console.log("k_field_t="+k_field_t+";");
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
            case "branch":
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
            case "company":
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
            case "integrations":
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
            case "user":
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
            default:
                for(let k_field in obj){
                    var key_name = k_field;

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
            '<a class="nav-link f_uppercase '+active+'" data-toggle="tab" href="#'+key+'" role="tab">'+key+'</a>'+
            '</li>'

        tab ='<div class="tab-pane fade show acl '+active+'" id="'+key+'" role="tabpanel">' +
                '<div class="table-responsive-lg col-12">' +
                    '<table class="table table-bordered m-0 t-normal-l table-acl '+key+'">' +
                        '<thead>'+
                            '<tr>'+
                                '<th style="max-width: 300px">Filed Name</th>'+
                                '<th>Permission</th>'+
                            '</tr>'+
                        '</thead>'+
                        '<tbody>'+
                            tr +
                        '</tbody>' +
                    '</table>' +
                '</div>' +
                '<div class="col-12 mt10pb30">' +
                    '<button class="btn btn-danger btnapdateacl f-r w100px">Update</button> ' +
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
                    '<div class="custom-control custom-control-inline">' +
                        '<label class="custom-checkbox">' +
                            '<input type=checkbox class="custom-control-input view" '+view_v+'> ' +
                            '<span class="custom-label p_rl20">View</span>' +
                        '</label>' +
                    '</div>'+
                    '<div class="custom-control custom-control-inline">' +
                        '<label class="custom-checkbox">' +
                            '<input type=checkbox class="custom-control-input add" '+add_v+'> ' +
                            '<span class="custom-label p_rl20">Add</span>' +
                        '</label>' +
                    '</div>'+
                    '<div class="custom-control custom-control-inline">' +
                        '<label class="custom-checkbox">' +
                            '<input type=checkbox class="custom-control-input edit" '+edit_v+'> ' +
                            '<span class="custom-label p_rl20">Edit</span>' +
                        '</label>' +
                    '</div>'+
                '</div>' +
                '</td>';
        return td;
    },

    update_acl:function(){
        var acl = {};
        var acl_form ={};
        $("#acl-view table.table-acl").each(function(){
            acl_form ={}
            var key = $(this).closest('.tab-pane').attr("id")
            var $me = $(this)
            $me.find('tbody tr').each(function(){
                var key_field = $(this).find('.key').val();
                var view =$(this).find('.view').is(":checked");
                var add =$(this).find('.add').is(":checked");
                var edit =$(this).find('.edit').is(":checked");

                acl_form[key_field] = {view:view,add:add,edit:edit}
                //console.log(key_field +",")
            })

            acl[key] =acl_form;
            //console.log("--------------------------------")

        })

        //console.log(acl)
        var _link =link._acl_update;
        var _data ={auth:_auth, acl:acl,g_id:$('#acl-view #g_id').val() ,u_id:u_id_login}

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
                if(res.Update ==true){
                    $("#modal-success").modal("show")
                    setTimeout(function(){
                        $("#modal-success").modal("hide")
                    },2000)

                }else{
                    $("#modal-error #err-message").text(res.ERROR)
                    $("#modal-error").modal("show")
                    setTimeout(function(){
                        $("#modal-error").modal("hide")
                    },2000)
                }

                //
            }
        });

    }


}
var acl1 = new acl();
$(function(){
    acl1.init();
});