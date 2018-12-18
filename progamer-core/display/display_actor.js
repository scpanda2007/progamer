class DActor extends DObject{
	
	constructor(owner){
		if(owner && !(owner instanceof DActor)){
			owner = null;
		}
		super(owner);
		this._RootCompoent = new DActorComponent(this);
	}	
	
}