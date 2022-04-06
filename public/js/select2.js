
function select2_f(){}
select2_f.NAME         = "select2_f";
select2_f.VERSION      = "1.2";
select2_f.DESCRIPTION  = "Class select2_f";

select2_f.prototype.constructor = select2_f;
select2_f.prototype = {
     searchUser:function(elememt,text_holder){
        var link3 =link._users_search;

        $(elememt).select2({
            //dropdownParent: $(elememt),
            placeholder: text_holder,
            minimumInputLength: 1,
            language: {
                inputTooShort: function () {
                    return text_holder;
                },
            },
            ajax: {
                "async": true,
                "crossDomain": true,
                "url": link3,
                "method": "POST",
                dataType: 'json',
                delay: 300,
                contentType: 'application/json',
                data: function (params) {
                    var _data = {token:_token,u_name:params.term}
                    return _data;
                },
                processResults: function (data, params) {
                    if (data && data.response) {
                        data = data.response;
                    }

                    data1 = $.map(data, function (obj) {
                        return {
                            text: obj.user_name,
                            id: obj.u_id
                        };
                    });
                    console.log(data);
                    return { results: data1 }

                },
                cache: true
            },
            escapeMarkup: function (markup) { return markup; },
            templateResult: function (item) {

                return '<div class="padding-5">' +
                    '<div class="col-12">' + item.text + '</div>' +
                    '</div>';
            },
            templateSelection: function (item, container) {
                if (item.text) return item.text;
                else return item.id;
            }
        })
    }


}
