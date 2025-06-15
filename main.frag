cvoid mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    //vec3 col = vec3(uv, 0.5 + 0.5 * sin(2.0 * iTime));
    fragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
