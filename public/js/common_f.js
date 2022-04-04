
function common_f(){}
common_f.NAME         = "common_f";
common_f.VERSION      = "1.2";
common_f.DESCRIPTION  = "Class common_f";

common_f.prototype.constructor = common_f;
common_f.prototype = {
    user_info:function(id){
        if(id !=''){
            var link3 =link._user_swagger+'/'+id;
            var swagger_token = localStorage.getItemValue('swagger_token');

            return $.ajax({
                "async": true,
                "crossDomain": true,
                "url": link3,
                "method": "GET",
                dataType: 'json',
                contentType: 'application/json',
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Bearer " +swagger_token
                }
            });
        }else{
            return ''
        }
    },

    get_usermeta:function(user_id){

        var constr = JSON.stringify([
            {
                "key": "user_meta_user",
                "constraint_type": "equals",
                "value":user_id
            }
        ]);

        var _data ={limit:1,cursor:0,constraints:constr}
        if(user_id !=''){
            var link3 =link._usermeta_swagger;
            var swagger_token = localStorage.getItemValue('swagger_token');

            return $.ajax({
                "async": true,
                "crossDomain": true,
                "url": link3,
                data: _data,
                "method": "GET",
                dataType: 'json',
                contentType: 'application/json',
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Bearer " +swagger_token
                }
            });
        }else{
            return ''
        }
    },

    add_facility_sql:function(data){
        Object.assign(data,{ "token": _token});
        //console.log(data);
        var link3 =link._locationAdd_Update_sql;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:data,
            //contentType: 'application/json',
            error : function (status,xhr,error) {

            },
            success: function (res) {
                //console.log(res);
                // window.location.href = "dashboard.php?id="+data.UID_UniqueID;
                //
            }
        });
    },

    inv_info:function(id){
        if(id !=''){
            var link3 =link._inv_swagger+'/'+id;
            var swagger_token = localStorage.getItemValue('swagger_token');

            return $.ajax({
                "async": true,
                "crossDomain": true,
                "url": link3,
                "method": "GET",
                dataType: 'json',
                contentType: 'application/json',
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Bearer " +swagger_token
                }
            });
        }else{
            return ''
        }
    },

    payment_info:function(inv_id){
        if(inv_id !=''){
            var link3 =link._payment_swagger;
            var swagger_token = localStorage.getItemValue('swagger_token');

            var constr = JSON.stringify([
                {
                    "key": "invoice_custom_invoice",
                    "constraint_type": "equals",
                    "value": inv_id
                }
            ]);

            var _data ={constraints:constr,limit:100,cursor:0,sort_field:'Created Date',descending:true}

            return $.ajax({
                "async": true,
                "crossDomain": true,
                "url": link3,
                "method": "GET",
                data:_data,
                dataType: 'json',
                contentType: 'application/json',
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Bearer " +swagger_token
                }
            });
        }else{
            return ''
        }
    },

    invline_info:function(inv_id){
        if(inv_id !=''){
            var link3 =link._invline_swagger;
            var swagger_token = localStorage.getItemValue('swagger_token');

            var constr = JSON.stringify([
                {
                    "key": "invoice_custom_invoice",
                    "constraint_type": "equals",
                    "value": inv_id
                }
            ]);

            var _data ={constraints:constr,limit:100,cursor:0,sort_field:'Created Date',descending:false}

            return $.ajax({
                "async": true,
                "crossDomain": true,
                "url": link3,
                data:_data,
                "method": "GET",
                dataType: 'json',
                contentType: 'application/json',
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Bearer " +swagger_token
                }
            });
        }else{
            return ''
        }
    },

    lab_info:function(id){
        if(id !=''){
            var link3 =link._lab_swagger+'/'+id;
            var swagger_token = localStorage.getItemValue('swagger_token');

            return $.ajax({
                "async": true,
                "crossDomain": true,
                "url": link3,
                "method": "GET",
                dataType: 'json',
                contentType: 'application/json',
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Bearer " +swagger_token
                }
            });
        }else{
            return ''
        }
    },

    prescription_info:function(id){
        if(id !=''){
            var link3 =link._prescription_swagger+'/'+id;
            var swagger_token = localStorage.getItemValue('swagger_token');

            return $.ajax({
                "async": true,
                "crossDomain": true,
                "url": link3,
                "method": "GET",
                dataType: 'json',
                contentType: 'application/json',
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Bearer " +swagger_token
                }
            });
        }else{
            return ''
        }
    },

    apt_info:function(id){
        if(id !=''){
            var link3 =link._appointment+'/'+id;
            var swagger_token = localStorage.getItemValue('swagger_token');

            return $.ajax({
                "async": true,
                "crossDomain": true,
                "url": link3,
                "method": "GET",
                dataType: 'json',
                contentType: 'application/json',
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Bearer " +swagger_token
                }
            });
        }else{
            return ''
        }
    },

    send_email_apt:function(apt_id){
        var _link = link._send_email;
        var swagger_token = localStorage.getItemValue('swagger_token');
        var _data ={
            current_appointment:apt_id
        }
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": _link,
            "method": "POST",
            data:_data,
            dataType: 'json',
            contentType: 'application/json',
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " +swagger_token
            },

            error : function (status,xhr,error) {
            },
            success: function (res) {}
        })
    },

    send_notification_apt:function(apt_id){
        var _link = link._send_notification;
        var swagger_token = localStorage.getItemValue('swagger_token');
        var _data ={
            current_appointment:apt_id
        }
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": _link,
            "method": "POST",
            data:_data,
            dataType: 'json',
            contentType: 'application/json',
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " +swagger_token
            },

            error : function (status,xhr,error) {
            },
            success: function (res) {}
        })
    },

    send_email_doctor_assigned_apt:function(apt_id){
        var _link = link._send_email_assign_doctor;
        var swagger_token = localStorage.getItemValue('swagger_token');
        var _data ={
            current_appointment:apt_id
        }
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": _link,
            "method": "POST",
            data:_data,
            dataType: 'json',
            contentType: 'application/json',
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " +swagger_token
            },

            error : function (status,xhr,error) {
            },
            success: function (res) {}
        })
    },

    lab_send_email:function(lad_id,link_file){

        var _link = link._lab_send_email;
        var swagger_token = localStorage.getItemValue('swagger_token');
        var _data ={
            lad_id:lad_id,link_file:host2+"download_file/"+link_file
        }
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": _link,
            "method": "POST",
            data:_data,
            dataType: 'json',
            contentType: 'application/json',
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " +swagger_token
            },

            error : function (status,xhr,error) {
            },
            success: function (res) {}
        })
    }

/*
    createPdf2 :function() {
        var
            form = $('.form'),
            cache_width = form.width(),
            a4 = [595.28, 841.89]; // for a4 size paper width and height
        common_f.prototype.getCanvas(form,a4).then(function (canvas) {

        var
            img = canvas.toDataURL("image/jpg"),
            doc = new jsPDF({
                unit: 'px',
                format: 'a4'
            });
        doc.addImage(img, 'JPEG', 20, 20);
        doc.save('Bhavdip-html-to-pdf.pdf');
        form.width(cache_width);
    });
    },

    // create canvas object
    getCanvas:function (form,a4) {
        form.width((a4[0] * 1.33333) - 80).css('max-width', 'none');
        return html2canvas(form, {
        imageTimeout: 2000,
        removeContainer: true
    });
},
*/

}
