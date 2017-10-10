$(document).ready(function() {
    // Get the modal
    var modal = $('#myModal');

    // When the user clicks the button, open the modal

    $("#myBtn").on("click", function(event) {
        modal.css('display', 'block');

    });

    // When the user clicks on <span> (x), close the modal
    $(".modalClose").on("click", function(event) {
        modal.css('display', 'none');
    });


    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    $("#ageDropdown").on("click", function(event) {
        $("#myDropdown").toggle();
    });

    $(".ageDropdownElement").on("click", function(event){
        var text = $(this).attr('value');
        $("#ageDropdown").text(text);

        $("#myDropdown").toggle();
    });

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
});
