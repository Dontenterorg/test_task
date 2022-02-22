$(function(){
$('.InputClassNumber').hide();
$('.ResultText').hide();
    
$( ".CheckBoxInputClass" ).click(function() 
{
    
  if ($('.CheckBoxInputClass').is(':checked'))
  {
	$('.InputClassNumber').show();
  } 
    else 
    {
	   $('.InputClassNumber').hide();
    }
});
    

    
$('.ButtonClass').click(function()
                        {
    
    var checker =0;
    if ($('.CheckBoxInputClass').is(':checked'))
  {
	checker=1;
  } 
    else 
    {
	   checker=0;
    }
    
    
    var selecter=1;
    if($('.SelectBox').val()=="month"){
       selecter=1;
       }
    else{
        selecter=12;
    }
   $.get(
  './calc.php',
  {startDate: $("input[name*='Date']").val(),
    sum: parseFloat($("input[name*='Summ']").val()),
    term: parseInt($("input[name*='term']").val()* selecter),
    percent: parseFloat($("input[name*='percent']").val())/100,
    sumAdd: parseFloat($("input[name*='adjunction']").val()*checker)
  }, 
  function(data) {              
      $(".ResultText").text("Сумма к выплате: "+JSON.parse(data).sum.toFixed(2)+" рублей");
      $(".ResultText").show();
  }
);

}); 
});