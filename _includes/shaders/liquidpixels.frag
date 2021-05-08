uniform sampler2D texture;
uniform float time;
uniform float squarez;
uniform float speed;
uniform float fade;

void main()
{
    //Multiply color by texture
    gl_FragColor = vec4(vec3(1. - fade*.011),0.999) * texture2D(texture,gl_TexCoord[0].xy+speed*sin(gl_TexCoord[0].xy*(squarez)));
}