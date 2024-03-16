// ----------------------------------Read Stories----------------------------------
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


    // ----------------------------------post Stories----------------------------------
    // postButton=$('#postStories')
    function postStories(){
        let title='My First Story post';
        let story='a person try to post story and he posted successfully';
        let image='https://images.pexels.com/photos/8058227/pexels-photo-8058227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
        let genres=['action','advanture','horror']
        let level=10
        let color='#1A6F45'
        $.ajax({
            url:'http://localhost:5000/books',
            method:'POST',
            data:{title, story, image, genres, level, color},
            success:function(){
                alert('Story posted successfully: '+ title)
            },
            error: function (error) {
                console.error("Error creating story:", error);
                alert("Failed to post story. Please try again.");
            }
        });
    }