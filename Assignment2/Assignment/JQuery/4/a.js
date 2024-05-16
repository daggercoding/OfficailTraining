$(document).ready(function(){
    function fetchData() {
        $.ajax({
            url: './sample.json',
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                if (response.data) {
                    $('#data').text(response.data);
                } else {
                    alert('There is no data.');
                }
            },
            error: function() {
                alert('Error fetching data.');
            }
        });
    }

    fetchData();

    setInterval(fetchData, 30000);
});