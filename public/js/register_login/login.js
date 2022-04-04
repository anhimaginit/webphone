
function login(){}
login.NAME         = "login";
login.VERSION      = "1.2";
login.DESCRIPTION  = "Class login";

login.prototype.constructor = login;
login.prototype = {
    init: function(){
        $('.login-modal-show').unbind('click').bind('click',function(){
            $('#login-modal').modal('show')
        })

        $("#login-btn").unbind('click').bind('click',function(e){
            login.prototype.login(e);
        });

    },
    login:function(event){
        //verify empty input
        // Fetch form to apply custom Bootstrap validation
        var form = $("#js-login")

        if (form[0].checkValidity() === false)
        {
            event.preventDefault()
            event.stopPropagation()
        }

        form.addClass('was-validated');
        var u_email = $("#js-login #u_email").val();
        var u_password = $("#js-login #u_password").val();

        //verify form empty
        if(u_email.length==0 || u_password.length==0){
            return
        }

        var _data ={u_email:u_email,u_password:u_password,token:_token}

        var link3 = link._login;
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
                console.log(res);
                if(res.response.length>0){
                    login.prototype.saveSession(res.response[0]);
                }
            }
        });

    },

    saveSession: function (_data) {
        return $.ajax({
            url: link._saveSession,
            type: 'post',
            data: { data: _data },
            success: function (res) {
                //console.log(res)
                //console.log(_data.u_type)
                //return false
                var _path = host2 + 'dashboard.php'
                if(_data.u_type =='super_admin' || _data.u_type =='company_manager'){
                    _path = host2 + 'dashboard_admin.php'
                }else if(_data.u_type =='branch_manager'){
                    _path = host2 + 'branch.php'
                }

                document.location.href = _path;
            }
        });
    },

}

