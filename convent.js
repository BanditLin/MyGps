var openlayerConvent={
  conventPoint:function(x,y,ox,oy,sx,sy,rd){
		  var d=rd*Math.PI/180;
		  var tx=(x-ox)*Math.cos(d)+(y-oy)*Math.sin(d)+ox;
		  var ty=-(x-ox)*Math.sin(d)+(y-oy)*Math.cos(d)+oy;
		  
		  var tw=(tx-ox)*sx;
		  var th=(ty-oy)*sy;
		  tx=(ox+tw);
		  ty=(oy+th);
		  var point=new OpenLayers.Geometry.Point(tx,ty);
		  return point;
	}
}