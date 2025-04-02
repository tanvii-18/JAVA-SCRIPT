
$("#addBtn").on("click",() => {
    toDo_check();
})

function toDo_check()
{

    let taskValue = $("#task").val();
    let invalid = false;

    if(taskValue === "")
    {
        $("#err1").text("Task should not be empty !");
        invalid = true;
    }

    if(!invalid)
    {
        let listItem = "<li><input type='checkbox'><span class='task-check'>"+ taskValue +"</span></li>";

        $("#list").prepend("<li>" +listItem + "</li>");
        $("#task").val("");
        $("#err1").text("");
    }

    $(document).on("click",".task-check",function()
    {
         $(this).next("taskText").toggleClass("completed");
    });

    // $(document).on("click", ".deleteBtn", function() {
    //     $(this).parent().remove(); 
    // });

}