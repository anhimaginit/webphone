
function profile(){}
profile.NAME         = "profile";
profile.VERSION      = "1.2";
profile.DESCRIPTION  = "Class profile";

profile.prototype.constructor = profile;
profile.prototype = {
    init: function(){
        $("#js-profile-btn").unbind('click').bind('click',function(e){
            if($('#guardian_user').val() !=''){
                prof.updateUserUniqueID_swagger(1);
            }else{
                if($('#patient-id').val() !=patient_login) return
                prof.updateUserUniqueID_swagger('');
            }
            //prof.updateUserByUniqueID();
            //prof.updateProfile(e);
        });
        //patient profile
        var id = getUrlParameter1('id');
        if(id !=undefined && user_login !=id){
            prof.get_user_profile_id(id);
        }

        history_lab.prototype.get_diagnostic_nane_select2()
        history_lab.prototype.get_diagnostic_code_select2();
        history_lab.prototype.get_location_service();
        history_lab.prototype.get_prouct_name();
        history_lab.prototype.get_complated_by();

        //prescription
        getDiagnosticNaneSelect2('#prescription-modal #prescription-diagnostic-name','#prescription-modal .modal-body');
        getDiagnosticCodeSelect2('#prescription-modal #prescription-diagnostic-code','#prescription-modal .modal-body');
        getLocationService('#prescription-modal #prescription-location','#prescription-modal .modal-body','#prescription-modal #prescription-location option','Nhập nơi chỉ định');
        getCompletedBy('#prescription-modal #prescription-completed-by','#prescription-modal .modal-body','Nhập tên người hoàn tất');
        getCompletedBy('#prescription-modal #prescription-delivered-by','#prescription-modal .modal-body','Nhập tên người giao hàng');

    },

    updateUserUniqueID_swagger:function(guardiant_update){
        var display_name_text =$('#profile #FamilyName').val() +' '+
            $('#profile #middle_name').val() + ' '+$('#profile #first_name').val();

        var birth_date=$('#profile #birthday').val() ;
        var check_Date = new Date(birth_date)

        var flag_birth_date =false
        if(check_Date !='Invalid Date'){
            flag_birth_date =true
        }else{
            birth_date='';
        }

        var data ={
           /* address_geographic_address:{
                address:$('#profile #address').val(),
                lat:$('#profile #lat').val(),
                lng:$('#profile #lng').val()
            },*/
            address_geographic_address:$('#profile #address').val(),
            //email:$('#profile #Email').val(),
            //avatar_image:$('#profile #lng').val(),
            city_text:$('#profile #city').val(),
            display_name_text:display_name_text,
            extension_number_text:'',
            facebook_text:$('#info_facebook').val(),
            family_name_text:$('#profile #FamilyName').val(),
            first_name_text:$('#profile #first_name').val(),
            identification_number_text:$('#profile #govement_id').val(),
            identification_type_option_identification_type:$('#profile #ID_Type option:selected').val(),
            insurance_number_text:$('#profile #number_BHYT').val(),
            language_text:$('#profile #langguage_id option:selected').val(),
            meeting_link_text:'',
            middle_name_text:$('#profile #middle_name').val(),
            nationality_option_nationality:$('#profile #Nationality option:selected').val(),
            country_option_nationality:$('#profile #Country option:selected').val(),
            postal_code_text:$('#profile #postal_code').val(),
            primary_phone_number_text:$('#profile #phone_number').val(),
            province_text:$('#profile #province').val(),
            residential_status_option_residential_status:$('#profile #Resident_Status option:selected').val(),
            sex_option_sex:$('input[name="customRadio"]:checked').val(),
            skype_text:$('#info_skype').val(),

            viber_text:$('#info_viber').val(),
            zalo_text:$('#info_zalo').val(),
            //user_type_option_user_type:$('#profile #User_Type option:selected').val()
        }

        Object.assign(data, flag_birth_date ? { "birth_date_date": birth_date} : null);

        var UniqueID =$('#profile #patient-id').val()

        var _link = link._user_swagger +"/"+UniqueID;
        var swagger_token = localStorage.getItemValue('swagger_token');
        var settings = {
            async: true,
            crossDomain: true,
            url: _link,
            type: "PATCH",
            data: data,
            dataType: 'json',
            contentType: 'application/json',
            accept: 'application/json',
            cache: false,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " +swagger_token
            }
        }
        $.ajax(settings).done(function (res) {
            $('#modal-success').modal("show")
            setTimeout(function(){
                $('#modal-success').modal("hide")
            },2000)

            //sql
            var data ={
                BirthDate:birth_date,
                City:$('#profile #city').val(),
                DisplayName:display_name_text,
                ExtensionNumber:'',
                Facebook:$('#info_facebook').val(),
                FamilyName:$('#profile #FamilyName').val(),
                FirstName:$('#profile #first_name').val(),
                MiddleName:$('#profile #middle_name').val(),
                IdentificationNumber:$('#profile #govement_id').val(),
                IdentificationTypeID:$('#profile #ID_Type option:selected').val(),
                InsuranceNumber:$('#profile #number_BHYT').val(),
                Language:$('#profile #langguage_id option:selected').val(),
                MeetingLink:'',

                NationalityID:$('#profile #Nationality option:selected').val(),
                Country:$('#profile #Country option:selected').val(),
                PostalCode:$('#profile #postal_code').val(),
                PrimaryPhoneNumber:$('#profile #phone_number').val(),
                ProvinceID:$('#profile #province').val(),
                ResidentialStatusID:$('#profile #Resident_Status option:selected').val(),
                Sex:$('input[name="customRadio"]:checked').val(),
                Skype:$('#info_skype').val(),

                Viber:$('#info_viber').val(),
                Zalo:$('#info_zalo').val(),
                UniqueID:UniqueID
            }

            profile.prototype.update_user_sql(data)

            if(user_login == $('#patient-id').val()){
                login.prototype.login_swagger(UniqueID);
            }
           /* if(guardiant_update !=1){
                login.prototype.login_swagger(UniqueID);
            }*/
            //ebd sql

        })
            .fail(function (jqXHR, textStatus) {
                //console.log(jqXHR);
                alert(jqXHR.responseJSON.translation);
            });

    },

    get_user_profile_id:function(user_id){
        var link3 =link._user_swagger+'/'+user_id;
        var swagger_token = localStorage.getItemValue('swagger_token');
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "GET",
            dataType: 'json',
            contentType: 'application/json',
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " +swagger_token
            },

            error : function (status,xhr,error) {
            },
            success: function (res) {
                //console.log(res);
                var data=res.response;
                var img ='<img src="'+data.avatar_image+'" class="rounded-circle shadow-2 fs-xl" alt="change img">'
                var name = data.user_type_option_user_type+" "+data.display_name_text;
                var address =""
                if(data.address_geographic_address!=undefined){
                    if(data.address_geographic_address.address!=undefined){
                        address = data.address_geographic_address.address
                    }
                }

                $("#profile-image").html(img);
                $("#profile-name").html(name);
                $("#profile-address").html(address);
                $("#FamilyName").val(data.family_name_text);

                var d = new Date(data.birth_date_date);
                var date_t = d.toLocaleString();
                var date_arr = date_t.split(',');
                var date1_arr = date_arr[0].split('/');
                var date=date1_arr[2]+"-"+("0"+date1_arr[0]).slice(-2)+"-"+("0"+date1_arr[1]).slice(-2);
                $("#birthday").val(date);
                $("#middle_name").val(data.middle_name_text);
                $("#first_name").val(data.first_name_text);
                $("#full_name").val(data.display_name_text);

                if(data.sex_option_sex =='Male'){
                    $("#radio_sex_male").prop("checked",true);
                }else if(data.sex_option_sex =='Female'){
                    $("#radio_sex_female").prop("checked",true);
                }else if(data.sex_option_sex =='Unknown'){
                    $("#radio_sex_other").prop("checked",true);
                }

                $('#langguage_id').find("option[value='"+data.language_text+"']").attr("selected", "selected");
                $("#number_BHYT").val(data.insurance_number_text);
                $("#govement_id").val(data.identification_number_text);


                $('#ID_Type').find("option[value='"+data.identification_type_option_identification_type+"']").attr("selected", "selected");


                $('#Resident_Status').find("option[value='"+data.residential_status_option_residential_status+"']").attr("selected", "selected");

                var Nationality='';
                if(data.nationality_option_nationality=='Vietnam'){
                    Nationality='Vietnam'
                }else if(data.nationality_option_nationality=='United States'){
                    Nationality='United States'
                }

                var Country='';
                if(data.country_option_nationality=='Vietnam'){
                    Country='Vietnam'
                }else if(data.country_option_nationality=='United States'){
                    Country='United States'
                }

                $('#Nationality').find("option[value='"+Nationality+"']").attr("selected", "selected");
                $('#Country').find("option[value='"+Country+"']").attr("selected", "selected");

                $("#phone_number").val(data.primary_phone_number_text);
                $("#Email").val(data.authentication.email.email);

                var address='';
                if(data.address_geographic_address!=undefined){
                    address=data.address_geographic_address.address
                }

                $("#address").val(address);
                $("#province").val(data.province_text);
                $("#city").val(data.city_text);
                $("#postal_code").val(data.postal_code_text);
                $('#User_Type').find("option[value='"+data.user_type_option_user_type+"']").attr("selected", "selected");
                $('#patient-id').val(data._id)

                if(data.guardian_user ==undefined){
                    data.guardian_user=''
                }else{
                    $('#app-modal-lg-center #show_dependent_patient').css({"display":"none"})
                }

                $('#guardian_user').val(data.guardian_user)
                $('#patient-type').val(data.user_type_option_user_type)

                $('#display-credential').css({"display":"none"});
                $('#relative-show').css({"display":"none"});
                $("#show-modal-apt #modal-open-appointment").unbind('click')
                $("#show-modal-apt .class-disable").addClass('opacity_disabled')
                //vital
                $("#show-modal-vital #vital-sign").unbind('click')
                $("#show-modal-vital .class-disable").addClass('opacity_disabled')

                if(data.guardian_user ==user_login ){
                    //console.log("admin aadmin")
                    $("#show-modal-apt .class-disable").removeClass('opacity_disabled')
                    $("#modal-open-appointment").unbind("click").bind("click",function(){
                        $('#app-modal-lg-center').modal('show');
                        $('.app_buoc2').addClass('disabled')
                        $('.app_buoc3').addClass('disabled')
                        $('.app_buoc4').addClass('disabled')
                        $(".app_buoc1 ").click();
                        modal_appointment.prototype.reset_modal_appointment()

                    })

                    //vital
                    $("#show-modal-vital .class-disable").removeClass('opacity_disabled')
                    $("#vital-sign").unbind("click").bind("click",function(){
                        $('#vitalsign-modal-center').modal('show')
                    });

                }

                var page_user_type = $('#patient-type').val()
                if((data.user_type_option_user_type =='Doctor' || data.user_type_option_user_type =='Admin') && (type_login =="Admin")){
                    $('#display-credential').css({"display":""});
                    $("#display-credential #show-credentials").bind('click')
                    $("#display-credential .class-disable").removeClass('opacity_disabled')
                }
                //remove modal apt
               /* //if((type_login =="Doctor" || type_login =="Admin") && (data.guardian_user =='' || data.guardian_user ==undefined)){
                if((type_login =="Doctor" || type_login =="Admin") && (data.guardian_user !=user_login || data.guardian_user =='' || data.guardian_user ==undefined)){
                    //apt
                    console.log("admin aadmin")
                    $("#show-modal-apt #modal-open-appointment").unbind('click')
                    $("#show-modal-apt .class-disable").addClass('opacity_disabled')
                    //bind event for guardian

                    //vital
                    $("#show-modal-vital #vital-sign").unbind('click')
                    $("#show-modal-vital .class-disable").addClass('opacity_disabled')


                    $('#relative-show').css({"display":""});
                    $("#relative-show #display-modal-relative").unbind('click')
                    $("#relative-show .class-disable").addClass('opacity_disabled')

                    var page_user_type = $('#patient-type').val()
                    if((page_user_type =='Doctor' || page_user_type =='Admin') && (type_login =="Admin")){
                        $('#display-credential').css({"display":""});
                        $("#display-credential #show-credentials").bind('click')
                        $("#display-credential .class-disable").removeClass('opacity_disabled')
                    }
                }*/
                //create appointment, that step2 add a relative
                var show_modal_apt_step2 =localStorage.getItemValue('show_modal_apt_step2');
                if(show_modal_apt_step2 =='yes'){
                    localStorage.setItemValue('show_modal_apt_step2', '');
                    $("#modal-open-appointment").click();
                    $("#app-modal-lg-center #confirm-n").click();
                }
                //not permit update if
                if($('#guardian_user').val() =='' && $('#patient-id').val() !=patient_login){
                    $("#js-profile-btn").attr("disabled",true)
                }
                //
            }
        });
    },
    //SQL
    update_user_sql:function(data){
        Object.assign(data,{ "token": _token});

        var link3 =link._profile_update;
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
                console.log(res);

                //
            }
        });
    },



}
var prof = new profile();
$(function(){
    prof.init();
});