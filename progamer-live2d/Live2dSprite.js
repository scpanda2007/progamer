import DActor from 'progamer-core/display_actor.js';
import DPrimtiveComponent from 'progamer-core/display_component.js';

class Live2dSpriteActor extends DActor{
	
	constructor(owner){
		super(owner);
		this._RootComponent = new Live2dSpriteComponent(this);
	}
	
}

class Live2dSpriteComponent extends DPrimtiveComponent{
	
	constructor(owner){
		super(owner);
	}
	
	static render_function(context, target){
		if(context instanceof WebGL){
			//blablabla
		}
	}
	
}