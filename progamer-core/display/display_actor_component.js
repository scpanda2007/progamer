

class DActorComponent extends DObject{
	
	/*
	* @param owner LDActor;
	*/
	constructor(owner){
		if(!owner || (owner instanceof DActor)){
			//TODO: error log
			return;
		}
		super(owner);
	}
	
	attachToComponent(component){
		
	}
	
}

class DSceneComponent extends DActorComponent{
	
	constructor(owner){
		super(owner);
	}
	
}

class DPrimitiveComponent extends DSceneComponent{
	
	constructor(owner){
		super(owner);
	}
	
}