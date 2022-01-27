canvas = document.getElementById("my_canvas");
console.log(canvas);
ctx = canvas.getContext("2d");
 rover_width = 100;
 rover_height = 90;
 mars_array=["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
 r_num = Math.floor(Math.random() * 4);
 console.log (r_num);
 background_image = mars_array[r_num];
 console.log (background_image);
 rover_image = "rover.png";
 rover_x = 10;
 rover_y = 10;

function add() {
    b_img = new Image();
    b_img.onload = uploadbackground;
    b_img.src = background_image;

    r_img = new Image();
    r_img.onload = uploadrover;
    r_img.src = rover_image;

}

function uploadbackground() {
    ctx.drawImage(b_img, 0, 0, canvas.width, canvas.height);

}

function uploadrover() {
    ctx.drawImage(r_img, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38") {
        up();
        console.log("up");
    }
    if (keyPressed == "40") {
        down();
        console.log("down");
    }
    if (keyPressed == "37") {
        left();
        console.log("left");
    }
if (keyPressed == "39") {
    right();
    console.log("right");
}
}
function up(){
    if (rover_y >= 0){
        rover_y=rover_y - 10;
        console.log("when up arrow is pressed, x= "+ rover_x + "y= " +rover_y);
        uploadbackground();
        uploadrover();
    }
}
function down(){
    if (rover_y <= 500){
        rover_y=rover_y + 10;
        console.log("when down arrow is pressed, x= "+ rover_x + "y= " +rover_y);
        uploadbackground();
        uploadrover();
    }
}
function left(){
    if (rover_x >= 0){
        rover_x=rover_x - 10;
        console.log("when left arrow is pressed, x= "+ rover_x + "y= " +rover_y);
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if (rover_x <= 700){
        rover_x=rover_x + 10;
        console.log("when right arrow is pressed, x= "+ rover_x + "y= " +rover_y);
        uploadbackground();
        uploadrover();
    }
}
