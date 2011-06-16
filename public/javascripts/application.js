// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function ajax_input()
{
    $(document).ready(function(){
        $("#food_input").keyup(function()
        {
            refresh_list(this);
        });
    });
}


function refresh_list(x)
{
 $.post("ajax","q="+x.value,
  function(data){ $("#food_list").html(data);}, "html");
}

