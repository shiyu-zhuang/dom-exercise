//TASK 1
/*global console, alert*/
/*
Access HTML element with id tag-line.
Access all headings that belong to div with the class name bg-main-content.
Create the variable collect and assign it with content of tag-line.
Loop through the array of headings and append the content of each heading to variable collect
After the loop, use alert to print collect
*/

var tag = document.getElementById("tag-line");
var main_content = document.querySelector(".bg-main-content");
var headings = main_content.getElementsByTagName("h2");
var collect = tag.innerHTML + "\n----------------------------------------------\n";

for (var i = 0; i < headings.length; i += 1) {
    collect += headings[i].innerHTML + "\n";
}

alert(collect);

//TASK 2
/*
Access 13th div with class name box that belongs to div with the class name bg-main-content. 
You can name the variable when_to_launch.

Use property children to "scoop" in array all HTML elements that belong to that div.

Create the variable collect and assign it with content of heading that belongs to gotten array.

Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.

After the loop, use alert to print collect
*/


var items = main_content.querySelectorAll(".box");
var when_to_launch = items[12];

var scoop = when_to_launch.children;

var collect_1 = scoop[0].innerHTML + "\n-------------------\n";
console.log(collect_1);

for (var j = 1; j < scoop.length; j += 1) {
   collect_1 += scoop[j].innerHTML + "\n\n";
}

alert(collect_1);