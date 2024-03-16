
$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:5000/books',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            displayStories(data);
            console.log(data)
        },
    });
});

function displayStories(stories) {
    var container = $('#stories-container');
    
    $.each(stories, function(index, story) {
        var storyHtml = '<div class="story">';
        storyHtml += '<h2>' + story.title + '</h2>';
        storyHtml += '<p>' + story.story + '</p>';
        storyHtml += '</div>';
        
        container.append(storyHtml);
    });
}