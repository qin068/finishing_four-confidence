function Hook() {
	base(this,LSprite,[]);
	this.init();
}
Hook.prototype.init = function() {
	var self = this;
	self.hookBitmapData = new LBitmapData(dataList["hook"],0,0,57,1100);
	self.hookBitmap = new LBitmap(self.hookBitmapData);
	self.hookBitmap.x = -27.5;
	self.hookBitmap.y = -822;
	self.x = LGlobal.width/2;
	self.y = 0;
	self.addChild(self.hookBitmap);

	// self.graphics.drawVertices(0,"#880088", [[26-26,194],[3-26,237],[4-26,264],[30-26,277],[50-26,268],[51-26,242],[40-26,196]], true, "#880088");
	self.addShape(LShape.VERTICES, [[26-26,194],[3-26,237],[4-26,264],[30-26,277],[50-26,268],[51-26,242],[40-26,196]])
	self.direction = -1;
	self.isShooting = false;
	self.addEventListener(LEvent.ENTER_FRAME, self.onframe);	
	self.addEventListener(LMouseEvent.MOUSE_DOWN, self.onmousedown);

	//正确答案列表
	self.rightAnswerList = ['A','B','C','D'];
	self.currentAnswerIndex = 0;
	
	//正确答案列表
	self.rightAnswerList = [ 
		'D','A','A','A','A',
        'C','A','C','C','B',
        'C','D','D','D','A',
        'A','C','C','A','D',
        'D','B','C','B','C',
	    'D','B','A','C','C',
    ];
	self.currentAnswerIndex = 0;

	self.problem = ['1.马克思主义中国化理论成果的精髓是',
	'2.马克思主义中国化第一次历史性飞跃发生在',
	'3.马克思主义中国化第二次历史性飞跃发生在',
    '4.马克思主义中国化第一次历史性飞跃产生的理论成果是',
    '5.实现中华民族伟大复兴中国梦的关键一步是',
    '6.当前中国生态文明建设的目标追求为',
    '7.总体国家安全观以（  ）为基础',
    '8.中国社会主义政治文明最为重要的制度载体是',
    '9.中国共产党领导的多党合作和政治协商制度是一种社会主义的新型政党制度。这一制度的首要提前和根本保证是',
    '10.（   ）是中国梦的主体，是中国梦的创造者和享有者',
    '11.中国新民主主义革命的开端是',
    '12.社会主义社会基本矛盾运动的特点是',
    '13.中国共产党的根本宗旨是',
    '14.中国共产党的根本组织原则是',
    '15.实现理论和实践相结合的关键是',
    '16.中国实行的人民民主专政是',
    '17.中国共产党思想建设的根本任务是',
    '18.以人为本中的“人”是指',
    '19.坚持党的基本路线一百年不动摇的关键是',
    '20.社会主义民主政治的本质是',
    '21.马克思主义新世界观创立的关键在于马克思确立了',
    '22.我国人民代表大会的组织原则是',
    '23.习近平新时代中国特色社会主义思想系统回答了',
    '24.判断国家性质的根本标志是',
    '25.中国特色社会主义文化建设的出发点和落脚点是',
    '26.第一次完整提出“社会主义和谐社会”科学命题的会议是',
    '27.改革开放是',
    '28.坚持党的基本路线一百年不动摇的关键是',
    '29.进入20世纪90年代以来，我国对外开放基本形成了',
    '30.四项基本原则是党在社会主义初级阶段基本路线的重要组成部分。坚持四项基本原则的核心是'
    ];
	self.choice = [['A.理论联系实际  ','B.一切从实际出发  ','C.在实践中检验和发展真理  ','D.实事求是  '],
	['A.新民主主义革命时期  ','B.旧民主主义革命时期  ','C.从新民主主义向社会主义过渡时期  ','D.社会主义建设时期  '],
	['A.改革开放时期  ','B.社会主义建设时期  ','C.过渡时期  ','D.新民主主义革命时期  '],
	['A.毛泽东思想  ','B.过渡时期总路线  ','C.新民主主义革命纲领  ','D.新民主主义革命总路线  '],
	['A.全面建成小康社会  ','B.全面深化改革  ','C.全面依法治国  ','D.全面从严治党  '],
	['A.乡村中国  ','B.和谐中国  ','C.美丽中国  ','D.生态中国  '],
	['A.经济安全  ','B.军事安全  ','C.人民安全  ','D.政治安全  '],
	['A.中国共产党领导的多党合作和政治协商制度  ','B.民主集中制  ','C.人民代表大会制度  ','D.基层群众自治制度  '],
	['A.长期共存  ','B.多党合作  ','C.中国共产党领导  ','D.互相监督  '],
	['A.工人  ','B.人民  ','C.农民  ','D.公民  '],
	['A太平天国运动  ','B义和团运动  ','C五四运动  ','D五卅运动  '],
	['A相适应  ','B相矛盾  ','C相一致  ','D既相适应又相矛盾  '],
	['A消灭私有制  ','B实现共产主义  ','C坚持无产阶级专政  ','D全心全意为人民服务'],
	['A集体领导  ','B群众路线  ','C领导与群众相结合  ','D民主集中制  '],
	['A克服主观主义  ','B克服骄傲自满情绪  ','C克服宗派主义  ','D克服官僚主义  '],
	['A人民代表大会制  ','B议会制  ','C政治协商制  ','D委员会制'],
	['A纯洁党的队伍，保持党的先进性  ','B确立党的领导地位，实现党的历史使命  ','C帮助党员不仅在组织上入党，而且要在思想上入党  ','D克服主观主义，保持理论联系实际的优良作风'],
	['A全体党员  ','B统治阶级集团  ','C最广大人民群众  ','D工人阶级  '],
	['A坚持以经济建设为中心不动摇  ','B坚持两手抓、两手都要硬的方针不动摇  ','C坚持四项基本原则不动摇  ','D坚持改革开放不动摇  '],
	['A党的领导  ','B民主集中制  ','C维护社会主义制度  ','D人民当家作主  '],
	['A.剩余价值论  ','B.阶级斗争理论  ','C.无产阶级历史使命学说  ','D.科学的实践观  '],
    ['A.民主与专政的结合  ','B.民主与集中的统一  ','C.民主与协商的结合  ','D.自由与纪律的统一  '],
    ['A.在新时期坚持和发展中国特色社会主义  ','B.在新的历史起点上坚持和发展中国特色社会主义  ','C.新时代怎样坚持和发展中国特色社会主义  ','D.马克思主义中国化最新成果是什么样的中国特色社会主义  '],
    ['A.人们在生产关系中所处的地位  ','B.国家政权掌握在哪个阶级手中，实行为哪个阶级服务的政策  ','C.社会各阶级在国家中的地位  ','D.社会各阶级的基本方向、根本任务和主要作用  '],
    ['A.培育和弘扬民族精神  ','B.培育有理想、有道德、有文化、有纪律的公民  ','C.提高整个中华民族的思想道德素质和科学文化素质  ','D.发展社会主义先进文化  '],
    ['A.党的十六大  ','B.党的十六届四中全会  ','C.党的十六届五中全会  ','D.党的十六届六中全会  '],
    ['A.彻底改变我国的基本制度  ','B.社会主义制度的自我完善和发展  ','C.对原有制度的修修补补  ','D.对社会主义制度的根本性变革  '],
    ['A.坚持以经济建设为中心不动摇  ','B.坚持两手抓、两手都要硬的方针不动摇  ','C.坚持四项基本原则不动摇  ','D.坚持改革开放不动摇  '],
    ['A.全方位、多形式、多层次的开放格局  ','B.全方位、多渠道、多层次的开放格局  ','C.全方位、多层次、宽领域的开放格局  ','D.全方位、多形式、宽领域的开放格局  '],
    ['A.坚持社会主义道路  ','B.坚持人民民主专政  ','C.坚持共产党的领导  ','D.坚持马列主义、毛泽东思想  ']
    ];
};
Hook.prototype.onframe = function(event) {
	var self = event.target;
	if(!self.isShooting) {
		self.rotate += self.direction * 1.5;
		if(Math.abs(self.rotate)>35) {
			self.direction = -self.direction;
		}
	} else {
		var r = self.rotate/180*Math.PI;
		var v = 20;
		self.x -= v*Math.sin(r)*self.shootDirection;
		self.y += v*Math.cos(r)*self.shootDirection;
		if(self.hitTestObject(self.parent.getChildByName("background"))) {
			self.shootDirection = -1;
		}
		if(!self.hasGotFish) {
			for(var i = 0; i < self.fishManager.childList.length; i++) {
				if(self.hitTestObject(self.fishManager.childList[i])) {
					self.fishOnHook = self.fishManager.childList[i];
					self.fishOnHook.beHooked();
					self.fishOnHook.rotate = self.rotate+90+(self.fishOnHook.motion.direction==0?0:180);
					self.shootDirection = -1;
					self.hasGotFish = true;
					//self.parent.getChildByName("score").addScore(self.fishOnHook.stype, self.fishOnHook);
					if(self.fishOnHook.answer == self.rightAnswerList[self.currentAnswerIndex])
					{
                        alert("恭喜你答对啦！");
						htmlProblem = "<div class='text-effect'><span1>"+self.problem[self.currentAnswerIndex+1]+"</span1></div><div class='text-effect'><span2>"+self.choice[self.currentAnswerIndex+1][0]  +"<img class='icon' src='l_1_1.png'><br><br>"+self.choice[self.currentAnswerIndex+1][1]  +"<img class='icon' src='l_2_2.png'><br><br>"+self.choice[self.currentAnswerIndex+1][2]  +"<img class='icon' src='l_3_3.png'><br><br>"+self.choice[self.currentAnswerIndex+1][3]  +"<img class='icon' src='l_4_4.png'></span2></div>"
						var currentProblem = document.getElementById("problem");
						currentProblem.innerHTML = htmlProblem;
                        self.currentAnswerIndex ++
					}
					else
					{
                        alert("很遗憾，答错啦，正确答案是："+self.rightAnswerList[self.currentAnswerIndex]);
						self.parent.getChildByName("score").addHook(-1);
						htmlProblem = "<div class='text-effect'><span1>"+self.problem[self.currentAnswerIndex+1]+"</span1></div><div class='text-effect'><span2>"+self.choice[self.currentAnswerIndex+1][0]  +"<img class='icon' src='l_1_1.png'><br><br>"+self.choice[self.currentAnswerIndex+1][1]  +"<img class='icon' src='l_2_2.png'><br><br>"+self.choice[self.currentAnswerIndex+1][2]  +"<img class='icon' src='l_3_3.png'><br><br>"+self.choice[self.currentAnswerIndex+1][3]  +"<img class='icon' src='l_4_4.png'></span2></div>"
						var currentProblem = document.getElementById("problem");
						currentProblem.innerHTML = htmlProblem;
                        self.currentAnswerIndex ++
					}
					break;
				}
			}
		} else {
			self.fishOnHook.x = self.x-270*Math.sin(r);
			self.fishOnHook.y = self.y+270*Math.cos(r);
		}
		if(self.y <= 0) {
			self.isShooting = false;
			self.x = LGlobal.width/2;
			self.y = 0;
			if(self.fishOnHook) {
				self.fishOnHook.remove();
				self.fishOnHook.die();
				self.fishOnHook = null;
			} else {
				self.parent.getChildByName("score").addHook(-1);
			}
		}
	}
}
Hook.prototype.onmousedown = function(event) {
	var self = event.target;
}
Hook.prototype.shoot = function() {
	var self = this;
	if(!self.isShooting) {
		self.isShooting = true;
		self.shootDirection = 1;
		self.fishManager = self.parent.getChildByName("fishManager");
		self.hasGotFish = false;
	}
}

