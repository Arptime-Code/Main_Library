function boilerplate3D(inputCanvas)
{
    const canvas = document.getElementById(inputCanvas);

    if(!canvas)
    {
        console.error("No canvas found!");
        return;
    }


    const gl = canvas.getContext('webgl2');

    if(!gl)
    {
        console.error("No webgl2 found!");
        return;
    }


    return canvas, gl;
}



module.exports = {
    boilerplate3D
}