
var dataTable;

$(document).ready(function () {
    var url = window.location.search;
    if(url.indexOf("inprocess")!=-1){
        loadDataTable("inprocess");       
    }
    else if(url.indexOf("completed")!=-1){
        loadDataTable("completed");       
    }
    else if(url.indexOf("pending")!=-1){
        loadDataTable("pending");       
    }
    else if(url.indexOf("approved")!=-1){
        loadDataTable("approved");       
    }
    else{
        loadDataTable("all");       
    }
});


function loadDataTable(status){
    $('#tblData').DataTable({
        "ajax":{
            "url":"/Admin/Order/GetAll?status="+ status
        },
        "columns":[
            {"data":"id","width":"5%"},
            {"data":"name","width":"25%"},
            {"data":"phoneNumber","width":"15%"},            
            {"data":"applicationUser.email","width":"15%"},            
            {"data":"orderStatus","width":"15%"},
            {"data":"orderTotal","width":"10%"},
            {"data":"id",
            "render": function(data){
                return `
                <div class="w-75 btn-group" role="group">
                <a href="/Admin/Order/Details?orderId=${data}" class="btn btn-primary mx-2"><i class="bi bi-pencil-square"></i> </a>                
                </div>
                `    
            },                
            "width":"5%"},            
        ]
    });
}