var Live2D_ModelImpl;
var Live2d_ModelImpl_Resource;
var Live2D_Animation;
var Live2D_Animation_Resource;

(function(){
	
	Live2d_ModelImpl_Resource = function(){
		this.buf = null;
		this.textures = [];
		this.currentContext = {};
	};
	
	Live2D_ModelImpl = function(){
		this.model = null;
		this.delayLoad = {
			'images': []
		}
	}
		
	Live2D_ModelImpl.prototype.build = function(live2dmodel_resource){
		var buf = live2dmodel_resource.buf;
		var textures = resource.textures;
		
		this.model = Live2DModelWebGL.loadModel(buf);
		
		if(typeof textures === "function"){
			
		}
		
		for(var i=0; i<textures.length; i++){
			this.model.setTexture(i, textures[i]);
		}
	}
	
	Live2D_ModelImpl.prototype.render = function(gl) {
		this.model.update();
		this.model.draw(gl);
	}
	
	Live2D_ModelImpl.prototype.setDrag = function(x, y, z){
		this.model.setDrag(x, y);
	}
	
	Live2D_ModelImpl.prototype.destroy = function(){
		
	}
	
})();