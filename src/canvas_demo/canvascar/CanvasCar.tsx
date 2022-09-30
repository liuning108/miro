import Canvas from "../../components/canvas/Canvas";
import {FC} from "react";
import styles from './CanvasCar.module.scss'
const  CanvasCar:FC=()=>{
    const draw = (ctx:CanvasRenderingContext2D,frameCount :number,mousePos:{x:number,y:number})=>{
        ctx.clearRect(0,0,400,400);
        //grid
        ctx.beginPath()
        // ctx.fillStyle="rgba(255,255,255,0.09)";
        // ctx.rect(0,0,400,400);
        // ctx.fill()
        ctx.clearRect(0,0,400,400);
        ctx.fillStyle='black'
        for (let i = 0; i <10 ; i++) {
            let pos = i*50
            ctx.moveTo(pos,0)
            ctx.lineTo(pos,400)
            ctx.fillText(`${pos}`,pos,10)
            ctx.fillText(`${pos}`,10,pos)
            ctx.moveTo(0,pos)
            ctx.lineTo(400,pos)

        }
        ctx.strokeStyle="rgba(0,0,0,0.1)"
        ctx.stroke();
        ctx.closePath();

        //ground
        ctx.beginPath()
        ctx.moveTo(25,350)
        ctx.lineTo(375,350)
        ctx.lineWidth=2
        ctx.strokeStyle='black'
        ctx.stroke()
        ctx.closePath()

        //右側紅色方塊
        ctx.fillStyle="#f26248"
        ctx.fillRect(300,300,50,50)
        ctx.strokeRect(300,300,50,50)

        //黃色兩個方塊
        ctx.beginPath()
        ctx.rect(250,250,50,100)
        ctx.rect(50,300,50,50)
        ctx.fillStyle="#ffe14f"
        ctx.fill()
        ctx.stroke()

        //中間兩個橘色
        ctx.beginPath()
        ctx.rect(100,250,50,100)
        ctx.rect(200,250,50,100)
        ctx.fillStyle="#ff9f51"
        ctx.fill()
        ctx.stroke()


        ctx.beginPath()
        ctx.moveTo(100,200)
        ctx.lineTo(250,200)
        ctx.lineTo(250,250)
        ctx.lineTo(200,250)
        ctx.arc(175,250,25,Math.PI*2,Math.PI,true)
        // ctx.lineTo(200,250)
        ctx.lineTo(100,250)
        ctx.closePath()
        ctx.fillStyle="#fff"
        ctx.fill()
        ctx.stroke()
        // ctx.fill()

        //roof
        ctx.beginPath()
        ctx.moveTo(100,200)
        ctx.lineTo(175,150)
        ctx.lineTo(250,200)
        ctx.closePath()
        ctx.fillStyle="#f26248"
        ctx.fill()
        ctx.stroke()


        //Flag
        ctx.beginPath()
        ctx.moveTo(175,150)
        ctx.lineTo(175,100-mousePos.y/5)
        ctx.lineTo(200,110-frameCount%5-mousePos.y/5)
        ctx.lineTo(175,120-mousePos.y/5)
        ctx.fillStyle="hsl("+(mousePos.x%255)+",50%,50%)"
        ctx.fill()
        ctx.stroke()


        //car
        ctx.beginPath()
        ctx.fillStyle="#ffffff"
        let carx = 0+(frameCount%440)-40
        ctx.fillRect(carx,325,40,25)
        ctx.strokeRect(carx,325,40,25)
        ctx.beginPath()
        ctx.arc(carx+10,350,5,0,Math.PI*2)
        ctx.arc(carx+30,350,5,0,Math.PI*2)
        ctx.fillStyle="#222"
        ctx.fill()

        //mouse
        ctx.beginPath()
        ctx.arc(mousePos.x,mousePos.y,5,0,Math.PI*2)
        ctx.fillStyle="black"
        ctx.fill()



        console.log(styles)

    }

    return (<div >
        <Canvas className={styles.ccc} draw={draw} width={400} height={400}></Canvas>
    </div>)
}
export  default CanvasCar
