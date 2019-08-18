// this is not a class
// contains function to separate the table of objects


// called from file: button func
// generate the table 
function generateTable(tblName, tdclass){
    // tblName="editTable", 
    // tdclass = "dynamiCells", "floatingCells"
    let tbl = document.getElementById(tblName);
    //
    // remove all rows and cells
    while(tbl.hasChildNodes()){
        tbl.removeChild(tbl.firstChild);
    }
    // create header row and cells
    let tr0 = document.createElement("tr");
    let td00 = document.createElement("td");
    let td01 = document.createElement("td");
    let td02 = document.createElement("td");
    let td03 = document.createElement("td");
    let td04 = document.createElement("td");
    let td05 = document.createElement("td");
    let td06 = document.createElement("td");
    let td07 = document.createElement("td");
    let td08 = document.createElement("td");
    let td09 = document.createElement("td");

    // set the html content
    td00.innerHTML = "Name";    td00.className=tdclass;
    td01.innerHTML = "x-pos";   td01.className=tdclass;
    td02.innerHTML = "y-pos";   td02.className=tdclass;
    td03.innerHTML = "length";  td03.className=tdclass;
    td04.innerHTML = "width";   td04.className=tdclass;
    td05.innerHTML = "height";  td05.className=tdclass;
    td06.innerHTML = "red";     td06.className=tdclass;
    td07.innerHTML = "green";   td07.className=tdclass;
    td08.innerHTML = "blue";    td08.className=tdclass;
    td09.innerHTML = "delete";  td09.className=tdclass;
    // 
    tr0.appendChild(td00);
    tr0.appendChild(td01);
    tr0.appendChild(td02);
    tr0.appendChild(td03);
    tr0.appendChild(td04);
    tr0.appendChild(td05);
    tr0.appendChild(td06);
    tr0.appendChild(td07);
    tr0.appendChild(td08);
    tr0.appendChild(td09);
    //
    tbl.appendChild(tr0);
    //
    for (let i = 0; i < OBJECT_ARRAY.length; i++) {
        let tr = document.createElement("tr");
        let obj=OBJECT_ARRAY[i];
        //
        // create cells of table (columns)
        let tdN = document.createElement("td"); //create a cell - column
        tdN.innerHTML=obj.name; // get the object name
        tdN.className=tdclass; // class name for style
        //
        tdX= document.createElement("td");
        tdX.innerHTML=obj.x; // x coordinate of object
        tdX.className=tdclass; // class name for style
        //
        tdY= document.createElement("td"); //create a cell - column
        tdY.innerHTML=obj.y; // y coordinate of object
        tdY.className=tdclass; // class name for style
        //
        tdL= document.createElement("td");//create a cell - column
        tdL.innerHTML=obj.length; // length attribute of object
        tdL.className=tdclass; // class name for style
        //
        tdW= document.createElement("td");//create a cell - column
        tdW.innerHTML=obj.width; //width attribute of object
        tdW.className=tdclass; // class name for style
        //
        tdH= document.createElement("td");//create a cell - column
        tdH.innerHTML=obj.height; //height attribute of object
        tdH.className=tdclass; // class name for style
        //
        tdRe= document.createElement("td");//create a cell - column
        tdRe.innerHTML=obj.re; //red attribute of object
        tdRe.className=tdclass; // class name for style
        //
        tdGr= document.createElement("td");//create a cell - column
        tdGr.innerHTML=obj.gr; //green attribute of object
        tdGr.className=tdclass; // class name for style
        //
        tdBl= document.createElement("td");//create a cell - column
        tdBl.innerHTML=obj.bl; //blue attribute of object
        tdBl.className=tdclass; // class name for style
        
        //
        var checkbox = document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox");
        tdR=document.createElement("td");
        tdR.appendChild(checkbox);
        tdR.className=tdclass;
        //
        // append  cells to row of table
        tr.appendChild(tdN);
        tr.appendChild(tdX);
        tr.appendChild(tdY);
        tr.appendChild(tdL);
        tr.appendChild(tdW);
        tr.appendChild(tdH);
        tr.appendChild(tdRe);
        tr.appendChild(tdGr);
        tr.appendChild(tdBl);
        tr.appendChild(tdR);
        //
        // editable or not
        if(tdclass=== "dynamicCells"){
            tdN.contentEditable = 'true';
            tdX.contentEditable = 'true';
            tdY.contentEditable = 'true';
            tdL.contentEditable = 'true';
            tdW.contentEditable = 'true';
            tdH.contentEditable = 'true';
            tdRe.contentEditable = 'true';
            tdGr.contentEditable = 'true';
            tdBl.contentEditable = 'true';
            tdR.contentEditable = 'true';
            // bind eventlistener and get value
        }
        //
        // add row to table
        tbl.appendChild(tr);
    }
    return tbl;
}


