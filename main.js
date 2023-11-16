$(document).ready(function() {
    $('#calendar').fullCalendar({
        events: [
            {
                title: 'House Warming Ceremony',
                start: '2023-11-16T10:00:00',
                end: '2023-11-16T14:00:00',
                description: 'Join us for a house warming ceremony!'
            }
        ]
    });
});