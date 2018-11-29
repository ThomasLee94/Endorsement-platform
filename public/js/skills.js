$(document).ready(function() {
    $(".vote-up").submit(function(e) {
      e.preventDefault();
  
      var postId = $(this).data("id");
      $.ajax({
        type: "PUT",
        url: "skills/user/" + user.skillId + "/vote-up",
        success: function(data) {
          console.log("voted up!");
        },
        error: function(err) {
          console.log(err.messsage);
        }
      });
    });
}