
function branch(){}
branch.NAME         = "branch";
branch.VERSION      = "1.2";
branch.DESCRIPTION  = "Class branch";

branch.prototype.constructor = branch;
branch.prototype = {
    init:function(){
        branch.prototype.get_brand_uid(u_id_login);
        //event
        $('#branch-content #edit').unbind('click').bind('click',function(){
            $('#branch-content .view').attr("readonly",false);
            $('#branch-content').append('<div class="row m_b10" id="remove-btn-update">'+
                '<div class="col-2">'+
                '<button class="btn btn-danger form-control" id="btn-update">Update</button>'+
                '</div>'+
                '</div>')

            $('#branch-content #btn-update').unbind('click').bind('click',function(){

            })
        })

        $('#branch-content #view').unbind('click').bind('click',function(){
            $('#branch-content .view').attr("readonly",true);
            $('#branch-content #btn-update').unbind('click')
            $('#branch-content #remove-btn-update').remove()
        })
    },


    get_brand_uid:function(u_id){
        var _data ={u_id:u_id,token:_token}

        var link3 = link._branch_uid;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:_data,
            //contentType: 'application/json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                //console.log(res);
                if(res.response.length>0){
                    $('#branch-content #b_name').val(res.response[0].b_name)
                    $('#branch-content #b_street').val(res.response[0].b_street)
                    $('#branch-content #b_city').val(res.response[0].b_city)
                    $('#branch-content #b_state').val(res.response[0].b_state)
                    $('#branch-content #b_zip').val(res.response[0].b_zip)
                    $('#branch-content #u_phone').val(res.response[0].u_phone)
                    $('#branch-content #u_extension').val(res.response[0].u_extension)
                    $('#branch-content #u_email').val(res.response[0].u_email)
                    $('#branch-content #u_idContact').val(res.response[0].u_fname +' '+res.response[0].u_lname)
                    $('#branch-content #u_notes').val(res.response[0].u_notes)
                    if(res.response[0].b_active ==1){
                        $('#branch-content #b_active').attr("checked",true)
                    }else{
                        $('#branch-content #b_active').attr("checked",false)
                    }
                    //map
                    var lat=0;
                    var lng=0;
                    if(res.response[0].b_mapInfo !=''){
                        var temp_b_mapInfo = res.response[0].b_mapInfo.split(',');
                        lat = parseFloat(temp_b_mapInfo[0]);
                        lng = parseFloat(temp_b_mapInfo[1]);
                    }
                    //map
                    map.setCenter({
                        lat: lat,
                        lng: lng
                    });
                    var infowindow = new google.maps.InfoWindow();
                    var marker,

                        marker = new google.maps.Marker({
                            position: new google.maps.LatLng(lat, lng),
                            map: map
                        });
                    google.maps.event.addListener(marker, 'click', (function (marker) {
                        return function () {
                            infowindow.setContent(positions[i].content);
                            infowindow.open(map, marker);
                        }
                    }) (marker));
                    /////////////

                }

            }
        });}

 }
var brch = new branch();
$(function(){
    brch.init();
});