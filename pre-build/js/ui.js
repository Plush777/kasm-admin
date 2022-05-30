$(document).ready(function(){

  /*input 캘린더*/
  if ($('.cal').length) {
    $('.cal').datepicker({
      dateFormat: "yy/mm/dd",
      monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
      showMonthAfterYear: true,
      yearSuffix: "년"
    });
  }

  /* 팝업 드래그 */
  $('.drag').draggable({
    //containment:'parent',
    scroll:false,
    cancel:'.popCont'
  }); 

  /*lnb dep2 */
  $('.dep1 li > p').on({
      "click":function (e){
          e.preventDefault();
          $(this).next('.dep2').slideToggle('fast');
          $(this).parent('li').toggleClass('active').siblings('li').removeClass('active').find('.dep2').slideUp('fast');
      }
  });

  $('.layerPopup .btnClose, .layerPopup .close').on({
    "click":function(){
      $(this).closest('.layerPopup').hide();
      $('#dimmed').remove();
    }
  });
  $(document).on('click','#dimmed',function(){
    $('.layerPopup').hide();
    $(this).remove();
  });

})
