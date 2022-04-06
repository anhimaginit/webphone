
function group(){}
group.NAME         = "group";
group.VERSION      = "1.2";
group.DESCRIPTION  = "Class group";

group.prototype.constructor = group;
group.prototype = {
    init:function(){
        select2_f.prototype.searchUser("#add-group #u-selected","Search User")
    },

 }
var gp = new group();
$(function(){
    gp.init();
});