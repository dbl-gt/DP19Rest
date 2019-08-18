class DrawObj{
    constructor(n_,x_,y_,l_,w_,h_,re_,gr_,bl_){
        this.name=n_;
        this.x=x_;
        this.y=y_;
        this.length=l_;
        this.width=w_;
        this.height=h_;
        //
        this.re=re_;
        this.gr=gr_;
        this.bl=bl_;
        //
        this.delete=false;
        //
        this.selected=false;
        this.selectedPt={x:this.x, y:this.y};
    }

    cen(){
        return c={
            x: (this.x+this.length)/2, 
            y: (this.y+this.width)/2
        };
    }

    print(){
        console.log(this.name, this.x, this.y, this.length, this.width, this.delete);
    }

    draw2d(ctx){
        ctx.fillStyle="rgba("+this.re+","+this.gr+","+this.bl+","+0.75+")";
        ctx.fillRect(this.x,this.y,this.length, this.width);
        if(this.selected==true){
            let t=10;
            ctx.lineWidth=t;
            ctx.strokeStyle="rgba("+this.re+","+this.gr+","+this.bl+","+0.25+")";
            ctx.strokeRect(this.x-t/2,this.y-t/2, this.length+t, this.width+t);
        }
        ctx.lineWidth=1;
    }
    getJson(){
        var obj={
            name:this.name,
            x:this.x,
            y:this.y,
            length:this.length,
            width:this.width,
            height:this.height,
            re:this.re,
            gr:this.gr,
            bl:this.bl
        }
        var json=JSON.stringify(obj);
        console.log(json);
        return json;
    }

    getString(){
        var s=this.name + "," + 
        this.x + "," + 
        this.y + ","+
        this.length + ","+
        this.width + ","+ 
        this.height + ","+ 
        this.re + "," +
        this.gr +","+ 
        this.bl +";";
        return s;
    }
    gen3dMesh(){
        var geox=new THREE.Shape();
        geox.moveTo(0,0);
        geox.lineTo(this.length,0);
        geox.lineTo(this.length, this.width);
        geox.lineTo(0,this.width);
        geox.autoClose=true;

        var color_=new THREE.Color("rgba("+this.re+","+this.gr+","+this.bl+")");
        var ext=this.height;
        var extsettings={
            steps: 1,
            depth: ext,
            bevelEnabled: false
        };
        var geo=new THREE.ExtrudeBufferGeometry(geox, extsettings);
        var mat=new THREE.MeshPhongMaterial({
            color: color_,
            specular: 0x000000,
            shininess:1,
            flatShading: true
        })
        var mesh=new THREE.Mesh(geo, mat);
        mesh.position.x=this.x-250;
        mesh.position.y=this.y-250;

        return mesh;
    }

}   //end of class






