import {useEffect, useRef} from "react";

const useCanvas  = (init:(ctx:CanvasRenderingContext2D)=>void|null,draw: (ctx:CanvasRenderingContext2D,frameCount :number,mousePos:{x:number,y:number})=>void ) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(()=>{

        const canvas = canvasRef.current as HTMLCanvasElement;
        const context = canvas.getContext("2d")
        let frameCount = 0
        let animationFrameId =0;
        let mousePos = {
            x:0,
            y:0,
        }
        const redner=()=>{
            frameCount++;
            draw(context as CanvasRenderingContext2D,frameCount,mousePos)
            animationFrameId = window.requestAnimationFrame(redner)
        }
        if(init){
            init(context as CanvasRenderingContext2D);
        }
        redner();
        const onMouseMove =(evt:MouseEvent)=>{
            mousePos.x = evt.offsetX;
            mousePos.y = evt.offsetY;
        }
        canvas.addEventListener("mousemove",onMouseMove);
        return ()=>{
            canvas.removeEventListener("mousemove",onMouseMove);
            window.cancelAnimationFrame(animationFrameId)
        }



    },[draw]);
    return canvasRef

}
export default  useCanvas;
