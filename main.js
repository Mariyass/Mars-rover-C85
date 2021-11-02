canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_heigth=90;

nasa_images_arry=["nasa1.jpg","nasa2.jpg","nasa3.jpg","nasa4.jpg","nasa5.jpg"];
random_number=Math.floor(Math.random()*5);

background_image=nasa_images_arry[random_number];
rover_image="rover.png";

rover_x=10;
rover_y=10;

function add(){
    background_imgtag= new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=background_image;

    rover_imgtag= new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_heigth);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;

    if(keyPressed=="37"){
        left ();
        console.log("left key is pressed")
    }
    if(keyPressed=="38"){
        up ();
        console.log("up key is pressed")
    }
    if(keyPressed=="39"){
        right ();
        console.log("right key is pressed")
    }
    if(keyPressed=="40"){
        down ();
        console.log("down key is pressed")
    }
}

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        //new=old-value
        console.log("when up arrow is pressed - " + rover_x + " , "+ rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when down arrow is pressed - " + rover_x + " , " + rover_y);
        uploadBackground();
        uploadrover();

    }
}

function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when left arrow is pressed - " + rover_x + " , " + rover_y);
        uploadBackground();
        uploadrover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("when right arrow is pressed - " + rover_x + " , " + rover_y);
        uploadBackground();
        uploadrover();
    }
}


