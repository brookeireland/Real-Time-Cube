#version 450 core

uniform vec3 lightPosition;
uniform vec3 lightColour;
uniform float ks;
uniform float kd;

in vec3 vertexColour;
in vec3 vertexNormal;
in vec3 fragPosition;
out vec4 fragColour;

void main()
{
	//Diffuse Shading
	vec3 d = normalize(lightPosition - fragPosition);
	float lambertian = max(dot(vertexNormal, d), 0.0);
	vec3 diffuse = kd * lambertian * lightColour;
	
	//Specular reflection
	vec3 r = reflect(-d, vertexNormal);
	vec3 v = normalize( lightPosition/100000 - fragPosition);
	float glossy = max(dot(r, v), 0.0);
	vec3 specular = ks * pow(glossy, 8) * vertexColour;
	
	vec3 result = (diffuse + specular) * vertexColour;
	fragColour = vec4(result, 1.0);
}