jQuery(document).ready(function ($) {
  $(".view_bio").each(function() {
    $(this).click(function() {
      var name = $(this).closest(".member_info").find("h3").text()
      $(".modal_body .member_name").text(name)

      var role = $(this).closest(".member_info").find(".title").text()
      $(".modal_body .member_role").text(role)

      var bio = $(this).closest(".member_info").find(".bio").text()
      $(".modal_body .member_bio").text(bio)

      var photo = $(this).closest(".member").find(".profile_photo").attr("src")
      $(".modal_body .member_photo").attr("src", photo)
      $(".overlay").show()
      $(".modal").show()
    })
  })

  $(".close").click(function() {
    $(".overlay").hide()
    $(".modal").hide()
  })

  $(".toggle").click(function() {
    $("#desktop_menu").toggle()
  })
});