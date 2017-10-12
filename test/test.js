var chai = require('chai');
var assert = chai.assert;

describe('English Caps Inverse', function() {
	var PickBan = 'Violence solves everything!\n\rIs that fear I smell?\n\r'
	var Attacking = 'My pleasure.\n\rLet the bloodshed begin!\n\rLet\'s dance!\n\rBlood for Noxus!\n\rWithout mercy.\n\rIs that fear I smell?\n\rI can\'t wait.\n\r'
	var Movement = 'Ready for trouble?\n\rI\'ve made my choice.\n\rIntriguing.\n\rKeep friends close and enemies guessing.\n\rNever play fair.\n\rTo the point.\n\rWhy? Because I can.\n\rNo going back.\n\rI like it.\n\rOnly fools hesitate.\n\r'
	var Taunt = 'Better dead than dull.\n\rCome on, live a little... while you can!\n\r'
	var Joke = 'If you run, you won\'t see me stab you!\n\r'
	var PickBanInverse = 'vIOLENCE SOLVES EVERYTHING!\n\riS THAT FEAR i SMELL?\n\r'
	var AttackingInverse = 'mY PLEASURE.\n\rlET THE BLOODSHED BEGIN!\n\rlET\'S DANCE!\n\rbLOOD FOR nOXUS!\n\rwITHOUT MERCY.\n\riS THAT FEAR i SMELL?\n\ri CAN\'T WAIT.\n\r'
	var MovementInverse = 'rEADY FOR TROUBLE?\n\ri\'VE MADE MY CHOICE.\n\riNTRIGUING.\n\rkEEP FRIENDS CLOSE AND ENEMIES GUESSING.\n\rnEVER PLAY FAIR.\n\rtO THE POINT.\n\rwHY? bECAUSE i CAN.\n\rnO GOING BACK.\n\ri LIKE IT.\n\roNLY FOOLS HESITATE.\n\r'
	var TauntInverse = 'bETTER DEAD THAN DULL.\n\rcOME ON, LIVE A LITTLE... WHILE YOU CAN!\n\r'
	var JokeInverse = 'iF YOU RUN, YOU WON\'T SEE ME STAB YOU!\n\r'
	it('should be equal', function() {
		expect(ECI(PickBan)).to.deep.equal(PickBanInverse);
		expect(ECI(Attacking)).to.deep.equal(AttackingInverse);
		expect(ECI(Movement)).to.deep.equal(MovementInverse);
		expect(ECI(Taunt)).to.deep.equal(TauntInverse);
		expect(ECI(Joke)).to.deep.equal(JokeInverse);
	});
});