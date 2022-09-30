import {FC} from "react";
import Canvas from "../../components/canvas/Canvas";
import './CanvasBlocks.module.scss'

let blockWidth:number = 200;
interface MyCanvasRenderingContext2D extends CanvasRenderingContext2D {
    fillCircle: (x:number,y:number,r:number)=>void
}
function init(ctx:MyCanvasRenderingContext2D){
     ctx.canvas.width = blockWidth * 3;
     ctx.canvas.height = blockWidth * 3;
     ctx.fillCircle= (x:number,y:number,r:number)=> {
         // @ts-ignore
         ctx.beginPath()
         ctx.arc(x, y, r, 0, Math.PI * 2)
         ctx.fill();
     }


}
var colors={
    red: "#F74456",
    white: "#fff",
    yellow: "#F1DA56",
    blue: "#1391dc",
    yellowLight: "#fffb87"
}



function draw(ctx:MyCanvasRenderingContext2D , frameCount:number,mousePos:{x:number,y:number}){
    let stime=parseInt(""+(frameCount/20));

    drawBlock(ctx,[0,0],colors.blue,()=>{
        ctx.beginPath()
        ctx.arc(0,0,30,0,2*Math.PI)
        ctx.strokeStyle = "white"
        ctx.lineWidth=15;
        ctx.stroke();

        for(let i= 0 ;i<8;i++){
            ctx.fillStyle=(stime%8==i)?'red':'white'
            if((i+stime)%4!=0){
                ctx.fillRect(60,-4,20,8)
            }

            ctx.rotate(Math.PI*2/8);
        }

    });

    drawBlock(ctx,[1,0],colors.red,()=>{
        ctx.scale(0.8,0.8);
        ctx.translate(-120,-120)
        for(let i =0 ; i <3;i++ ){
            ctx.translate(60,0)
            ctx.save();
            for(let o =0;o<3;o++){

                ctx.translate(0,60);
                ctx.beginPath()
                ctx.arc(0,0,20,0,Math.PI*2);
                ctx.fillStyle=colors.white
                if((i+o+stime)%6===0) {
                    ctx.fillStyle=colors.yellow
                }
                ctx.fill();
        }
            ctx.restore();

        }

    });
    drawBlock(ctx,[2,0],colors.yellow,()=>{
        ctx.scale(0.8,0.8)
        let n=10;
        for(let i =0;i<n;i++){

            ctx.beginPath()
            ctx.moveTo(0,0)
            ctx.lineTo(80,20)
            ctx.lineTo(80,80)
            ctx.closePath();
            ctx.fillStyle='white'
            ctx.fill()
            if(stime%n==i){
                ctx.beginPath()
                ctx.arc(60,40,6,0,Math.PI*2)
                ctx.fillStyle='red'
                ctx.fill()
            }


            ctx.rotate(Math.PI*2/n)

        }



    });

    drawBlock(ctx,[0,1],colors.yellow,()=>{
        ctx.translate(-60,-80+5*Math.sin(frameCount/20))
        ctx.fillStyle= 'white'
        ctx.fillRect(0,0,60,60)

        ctx.translate(30,30)
        ctx.rotate(-Math.PI*Math.cos(frameCount/40))
        ctx.beginPath()
            ctx.moveTo(0,0)
            ctx.lineTo(40,0)
            ctx.arc(40,40,40,-Math.PI/2,Math.PI/2)
            ctx.lineTo(0,80)
        ctx.closePath()
        ctx.fillStyle= colors.red
        ctx.fill()

        ctx.translate(-100+10*Math.sin(frameCount/5),60)
        ctx.beginPath()
            ctx.fillStyle=colors.yellowLight
            ctx.fillRect(0,0,100,40)

        ctx.translate(100+10*Math.cos(frameCount/10),40)
        ctx.beginPath()
            ctx.fillStyle=colors.white
            ctx.fillRect(0,0,50,20)
    });
    drawBlock(ctx,[1,1],colors.white,()=>{
        let scale=0.8+0.2*Math.sin(frameCount/20);
        ctx.scale(scale,scale);
        ctx.fillStyle=colors.red
        ctx.beginPath()
        ctx.moveTo(0,0)
        let angle1 = (frameCount%100)/100*Math.PI*2;
        let angle2 = (frameCount%50)/50*Math.PI*2;

        ctx.arc(0,0,80,angle1,angle2)
        ctx.fill()
        ctx.fillStyle=colors.yellow
        let scale2=1.0+0.4*Math.sin(frameCount/40);
        ctx.scale(scale2,scale2);
        ctx.fillCircle(60,60,30)
    });
    drawBlock(ctx,[2,1],colors.blue,()=>{
      ctx.fillStyle=colors.white
      ctx.fillCircle(0,0,80)
        ctx.rotate(frameCount/10)
        ctx.fillStyle=colors.red
        ctx.fillCircle(-30,0,20)
        ctx.rotate(frameCount/30)
        ctx.fillStyle=colors.yellow
        ctx.fillCircle(80,0,50)
    });


    drawBlock(ctx,[0,2],colors.red,()=>{
        ctx.rotate(frameCount/50)
        let n = 10;
        ctx.scale((stime%n)/n,(stime%n)/n)
        for(let i =0;i<8;i++){
            ctx.rotate(i*Math.PI*2/8)
            ctx.fillStyle=colors.white
            ctx.fillCircle(60,0,16)
            ctx.fillStyle=colors.blue
            ctx.fillCircle(30,5,5)

        }
    });
    drawBlock(ctx,[1,2],colors.yellow,()=>{
        ctx.fillStyle=colors.red
        ctx.arc(0,0,10,0,Math.PI*2)
        ctx.fill()
    });

    drawBlock(ctx,[2,2],colors.white,()=>{
        ctx.fillStyle=colors.red
        ctx.arc(0,0,10,0,Math.PI*2)
        ctx.fill()
    });





}

function drawBlock(ctx:CanvasRenderingContext2D,pos:[number,number],bgColor:string,draw:()=>void) {

    ctx.save()
        ctx.beginPath()
            ctx.translate(pos[0]*blockWidth,pos[1]*blockWidth)
            ctx.fillStyle= bgColor;
            ctx.fillRect(0,0,blockWidth,blockWidth)
            ctx.translate(100,100)
            if(draw)draw()
       ctx.closePath();

   ctx.restore();

}


const CanvasBlocks:FC =()=>{


    return (<div>
        <Canvas draw={draw} init={init}/>
    </div>)
}


export default CanvasBlocks
