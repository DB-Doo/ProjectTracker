var today = dayjs();
var reformatDate = today.format("dddd, MMMM D YYYY, h:mm:ss a");
$("#3a").text(reformatDate);

function updateTime() {
  var today = dayjs();
  var reformatDate = today.format("MMM D, YYYY at h:mm:ss A"); // Adjusted format
  $("#3a").text(reformatDate);
}
interval = setInterval(() => {
  updateTime();
}, 1000);

var projectModal = document.getElementById("projectModal");
var myInput = document.getElementById("myInput");

projectModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});

$('#projectForm').on('submit', function(e) {
    e.preventDefault(); // prevent default form submission i.e. reload page

    // retrieve form data
    var projectName = $('#projectName').val();
    var projectType = $('#projectType').val();
    var dueDate = $('#dueDate').val();

    // create a new row in the table
    $('.addRow').append(`
        <div class="row">
            <div class="col-4">${projectName}</div>
            <div class="col-4">${projectType}</div>
            <div class="col-3">${dueDate}</div>
            <div class="col-1"><button class="btn btn-danger btn-sm remove">Remove</button></div>
        </div>
    `);

    // clear the form fields
    $('#projectForm')[0].reset();

    // hide the modal
    $('#projectModal').modal('hide');
});

// remove a project row
$(document).on('click', '.remove', function() {
    $(this).closest('.row').remove();
});