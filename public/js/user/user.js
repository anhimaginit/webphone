
function user(){}
user.NAME         = "user";
user.VERSION      = "1.2";
user.DESCRIPTION  = "Class user";

user.prototype.constructor = user;
user.prototype = {
    init:function(){
        //event
        $('#profile-content #edit').unbind('click').bind('click',function(){
            $('#profile-content .view').attr("readonly",false);
            $('#profile-content .view').attr("disabled",false);

            $('#profile-content').append('<div class="row m_b10" id="remove-btn-update">'+
                '<div class="col-2">'+
                    '<button class="btn btn-danger form-control" id="btn-update">Update</button>'+
                '</div>'+
            '</div>')

            $('#profile-content #btn-update').unbind('click').bind('click',function(){

            })
        })

        $('#profile-content #view').unbind('click').bind('click',function(){
            $('#profile-content .view').attr("disabled",true);
            $('#profile-content #btn-update').unbind('click')
            $('#profile-content #remove-btn-update').remove()
        })
    },

 }
var usr = new user();
$(function(){
    usr.init();
});