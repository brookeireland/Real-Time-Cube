# Real-Time-Cube
A cube rendered in real time created for CSC305 Spring 2020 at the University of Victoria. Contains only the main file, header file, a vertex shader and a fragment shader. This code uses the [atlas](https://github.com/marovira/atlas) graphics framework, provided for the class.

Renders a cube using 12 triangles in real time with OpenGL. It uses an MVP matrix to project the position, and a white point light. Diffuse shading is implemented using a nomalized normal vector that is added to the vertices array. The fragment shader uses this value when calculating diffuse shading. It implements glossy specular reflection that can be turned on and off by pressing the space bar. The images withGlossy and withoutGlossy show the result. 

