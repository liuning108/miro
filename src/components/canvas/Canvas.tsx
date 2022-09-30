import useCanvas from "./useCanvas";
const Canvas  = (props:any) => {
    const {init,draw,...rest}=props
    const canvasRef = useCanvas(init,draw);
    return (
        <canvas ref={canvasRef} {...rest}></canvas>
    )

}
export default  Canvas
