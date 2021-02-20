$.ajax({
    url : '/index',
    type : 'GET',
    data : { id: 10 },
    dataType: 'json',
    contentType: "application/json;charset=utf-8"
    success : function(data) { // todo },
    error : function(request,error) { // todo }
});
