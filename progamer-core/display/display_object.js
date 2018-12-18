class DObject{
	
	/*
	* @param _parent LDObject;
	*/
	constructor(_parent){
		this.__parent = _parent;
		if(_parent){
			_parent.tryAddChild(this);
		}
	}
	
	/*
	* @param LDObject;
	* @return LDObject;
	*/
	tryAddChild(_child){
		if(!_child || !(_child instanceof DObject)){
			// TODO: error log
			return;
		}
		
		if(!this._children){
			this._children = [];
		}
		
		this._children.push(_child);
		return this;
	}
	
}