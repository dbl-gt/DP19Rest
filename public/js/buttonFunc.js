//
//
// link from editFunc to get(display), add, update, delete objects
// div declared in index.html
function editableDivHandler(){
    let ele=document.getElementById("editDiv"); // div :index.html
    let tbl=generateTable("editTable", "dynamicCells") //table in editDiv : index.html
    ele.style.display="block";
    ele.appendChild(tbl);
    generateButtons(ele); // dynamically generate buttons
}

//
// add button declared in index.html 
// generates object 
// sends to dynamic table 
function addFunc(){
    let a=OBJECT_ARRAY.length;
    let x=Math.round(Math.random()*400)+50;
    let y=Math.round(Math.random()*400)+50;
    let l=Math.round(Math.random()*50)+50;
    let w=Math.round(Math.random()*50)+50;
    let h=Math.round(Math.random()*10)+5;
    let re=Math.round(Math.random()*255);
    let gr=Math.round(Math.random()*255);
    let bl=Math.round(Math.random()*255);
    var obj = new DrawObj("name" + a, x,y,l,w,h,re,gr,bl);
    OBJECT_ARRAY.push(obj);

    // update for db 
    sendDB();
    
    generateTable("editTable", "dynamicCells"); // table id, cellname
}

//
// declared in index.html 
// parse table and update object2d data
// draw to 2d canvas
function updateFunc(){
    var delObj=false;
    let tbl=document.getElementById("editTable"); // table in index.html in editDiv
    // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
    for (i = 1; i < tbl.rows.length; i++) {
        var rows = tbl.rows.item(i).cells;
        let obj=OBJECT_ARRAY[i-1];
        let name=rows.item(0).innerHTML;
        obj.name=name;
        let x=rows.item(1).innerHTML;
        obj.x= parseFloat(x);
        let y=rows.item(2).innerHTML;
        obj.y=parseFloat(y);
        let length=rows.item(3).innerHTML;
        obj.length=parseFloat(length);
        let width=rows.item(4).innerHTML;
        obj.width=parseFloat(width);
        let height=rows.item(5).innerHTML;
        obj.height=parseFloat(height);
        
        let re=rows.item(6).innerHTML;
        obj.re=parseFloat(re);
        let gr=rows.item(7).innerHTML;
        obj.gr=parseFloat(gr);
        let bl=rows.item(8).innerHTML;
        obj.bl=parseFloat(bl);
        
        let val=rows.item(9).firstChild.checked;
        obj.delete=val;        
    }

    // remove the deletable object
    for(let i=0; i<OBJECT_ARRAY.length; i++){
        if(OBJECT_ARRAY[i].delete===true){
            delObj=true;
            OBJECT_ARRAY.splice(i,1);
            i--;
        }
    }

    // objects are now updated from table
 
    //remove object from table
    if(delObj===true){
        editableDivHandler();
    }

    // update for db 
    sendDB();

    // remove object from canvas
    update2dCanvas();
    return delObj;
}

//
// dynamically generate end button
// close the div 
function generateButtons(ele){
    // check for too many close buttons
    var delitems=document.getElementsByClassName("closeme");
    while(delitems.length > 0){
        delitems[0].parentNode.removeChild(delitems[0]);
    }
    //
    // add button
    var addButton=document.createElement("BUTTON");
    addButton.className="closeme";
    addButton.innerHTML="Add Object";
    addButton.style.marginTop="12px";
    ele.appendChild(addButton);
    addButton.addEventListener('click',addFunc,false);
    //
    // update button
    var updateButton=document.createElement("BUTTON");
    updateButton.className="closeme";
    updateButton.innerHTML="Update Objects";
    updateButton.style.marginTop="12px";
    ele.appendChild(updateButton);
    updateButton.addEventListener('click', updateFunc, false);
    //
    // add and handle the end button
    var endButton=document.createElement("BUTTON");
    endButton.className="closeme";
    endButton.innerHTML="CLOSE";
    endButton.style.marginTop="12px";
    ele.appendChild(endButton);
    endButton.addEventListener('click', function(){
        ele.style.display='none';
    });
    // ok
}

//
//
// declared in index.html display table 
// move objects in screen- 2d canvas
function init2dWorldFunc(){
    //suppress x=>not part of main.handlebars - inside div #"extContainer"
    document.getElementById("extContainer").style.diplay='none';
    // file : draw3dFunc.js //suppress 3d world 
    stop3dFunc(); 
    //expose 2d world
    document.getElementById("draw2dDiv").style.display='block';
}

//
//
function init3dWorldFunc(){
    //suppress x=>not part of main.handlebars - inside div #"extContainer"
    
    //suppress 2d world
    document.getElementById('draw2dDiv').style.display='none'; 
    //expose 3d world
    document.getElementById("draw3dDiv").style.display='block';
    init3dFunc(); // file: draw3dFunc.js
    mainLoop();
}

//
// display add, update, delete features
function showObjData(){
    editableDivHandler();
}
//
//
function sendDB(){
    // dont send to db if there is nothing
    if(OBJECT_ARRAY.length<1) return;
    else{
        var s="";
        for(let i=0; i<OBJECT_ARRAY.length; i++){
            s+=OBJECT_ARRAY[i].getString();
        }
        document.getElementById("dbDataTA").value=s;
    }
    
}
// end of button function file
//
//