 // Write on keyup event of keyword input element
 $(document).ready(function(){
 $("#input-search").keyup(function(){
 _this = this;
 // Show only matching TR, hide rest of them
 $.each($("#table tbody tr"), function() {
 if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
 $(this).hide();
 else if($("#input-search").val() != ""){
 	 $(this).show();
 $(".content-search").fadeIn();
}

if($("#input-search").val() == ""){
    $(".content-search").fadeOut();
  }
 });
 });
});