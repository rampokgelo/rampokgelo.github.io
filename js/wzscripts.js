// $(document).ready(function () {
//     $("body").queryLoader2({
//         barColor: "#de6d45",
//         backgroundColor: "#fff",
//         percentage: true,
//         barHeight: 2,
//         completeAnimation: "grow",
//         minimumTime: 100
//     });
// });
window.addEventListener('DOMContentLoaded', function() {
    $("body").queryLoader2({
        barColor: "#de6d45",
        barHeight:"5px",
        backgroundColor: "#fff",
        percentage: true,
        barHeight: 2,
        completeAnimation: "grow",
        minimumTime: 100
    });
});
// $(function() {
//   $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
$(window).scroll(function() {
	var wzhead = $(document).scrollTop();
	if (wzhead >= 100 ) {
	  $('.bghead').addClass('change');
	  $('.navlogo').addClass('navlogochange');
	} else {
	  $('.bghead').removeClass('change');
	  $('.navlogo').removeClass('navlogochange');
	}
	event.preventDefault();
});
$('#modalcontainer').on('hidden.bs.modal', function () {
    $('#modalcontainer').removeData('bs.modal');
    $('#modalcontainer .modal-content').empty();
});
$('#modalcontainer').on('shown.bs.modal', function () {
    console.log('shown')
    $('.finalart').height($(window).height());
});
