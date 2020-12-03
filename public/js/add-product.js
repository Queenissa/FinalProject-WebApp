//Attach Image
$(".imgAdd").click(function () {
    $(this).closest(".row").find('.imgAdd').before('<div class="col-md-3 imgUp"><div class="imagePreview"></div><label class="btn btn-info">Upload Image<input type="file" class="uploadFile img uploadButton" value="Upload Photo"></label></div>');
});
$(document).on("click", "i.del", function () {
    $(this).parent().remove();
});
$(function () {
    $(document).on("change", ".uploadFile", function () {
        var uploadFile = $(this);
        var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return; // no file selected

        if (/^image/.test(files[0].type)) { // image ra ang ma upload
            var reader = new FileReader(); // instance ni sya sa file reader
            reader.readAsDataURL(files[0]); // read ang file nga gi upload

            reader.onloadend = function () { // e background sa div ang selected image
                uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url(" + this.result + ")");
            }
        }

    });
});

// Date Picker
$( function() {
    $( "#datepicker" ).datepicker();
  } );
