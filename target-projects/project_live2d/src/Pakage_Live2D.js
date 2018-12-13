var Live2D_MeshComponent;
(function(){
	/*
	@para
	
	*/
	Live2D_MeshComponent = function(){
		this.model = null;	
	}
	
	Live2D_MeshComponent.prototype.render = function(gl) {
		this.model.draw(gl);
	}
})();