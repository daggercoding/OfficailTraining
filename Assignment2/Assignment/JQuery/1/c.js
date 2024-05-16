$(document).ready(function() {
    // Function to update dimensions display
    function updateDimensions() {
      var screenHeight = $(window).height();
      var screenWidth = $(window).width();
      $('.dimensions').text('Height: ' + screenHeight + 'px, Width: ' + screenWidth + 'px');
    }
  
    // Initial call to update dimensions
    updateDimensions();
  
    // Update dimensions on window resize
    $(window).resize(function() {
      updateDimensions();
    });
  });