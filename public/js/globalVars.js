//
//
const CANVAS = document.getElementById("canv");
const CTX = CANVAS.getContext("2d");
//
// objects for drawing
var OBJECT_ARRAY=[];
//
//
// canvas 2d animation variables
const FPS=100; // number of milliseconds elapsed before calling a function
//
//
// global variables used in 3d functions
var SCENE, CAMERA, RENDERER, CONTROLS;
const SCENE3d=document.getElementById("draw3dDiv");
var MESH=[];
//
//
