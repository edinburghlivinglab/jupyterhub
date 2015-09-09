// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

require(["jquery", "jhapi"], function ($, JHAPI) {
    "use strict";
    
    var base_url = window.jhdata.base_url;
    var user = window.jhdata.user;
    var api = new JHAPI(base_url);
    
    $("#stop").click(function () {
        api.stop_server(user, {
            success: function () {
                $("#stop").hide();
            }
        });
    });
    
});


/* Changes start here*/
var test = []

function set_test(val)
{   console.log("FIRST");
    console.log(val);
    console.log("jup");
    test=val;
}


function show_test2(str)
{   
    var e = document.getElementById("sl");
    var strUser = e.options[e.selectedIndex].text;

    $.ajax({
            type: 'POST',
            url: '/hub/home',
            data: {"test": strUser},
            success: function(){
                console.log(test);
            }});
    console.log(str);
    console.log("SECOND");
    // alert(test);
}

function randomArray(min, max) {
  return (new Array(max-min))
    .join(',').split(',')
    .map(function(v,i){ return [Math.random(), min + i]; })
    .sort().map(function(v) { return v[1]; });
}

function permute(arr){
    n = arr.length;
    indices = randomArray(0, n);
    x = []
    for(var i=0; i<n;i++){
        x.push(arr[indices[i]]);
    }
    return x
}

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');
    list.setAttribute("id", "list");

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

var options = [
    set0 = ['Option 1','Option 2'],
    set1 = ['First Option','Second Option','Third Option']
];

function sortUnorderedList(ul) {
    console.log("TEMP");
    console.log(ul);

    if(typeof(ul) == "string")
     $(document).ready(
        function()
        {
            ul = document.getElementById(ul);
        }
    );

    var lis = ul.getElementsByTagName("LI");
    var vals = [];

    for(var i = 0, l = lis.length; i < l; i++){
        vals.push(lis[i].innerHTML);
    }

    vals = permute(vals);

    for(var i = 0, l = lis.length; i < l; i++)
        lis[i].innerHTML = vals[i];
    }

window.onload = function() {
  var desc = false;
  document.getElementById("test").onclick = function() {
    sortUnorderedList("list");
    // show_test2("dog");
    return false;
  }
}

/* Changes end here */