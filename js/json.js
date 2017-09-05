let data={
    perPic:'images/head.jpg',
	show:false,
	hide:true,
	f_hide:true,
	bokcar:false,
	arr:[],
	newhisturys:[], // 存放 新的搜索
	book:'',					
//搜索历史
historys:[
	{		 
		txt:"爱夏了夏天",
	},
	{
		txt:"夏墅堰",
	},
	{
		txt:"陈迹·清欢",
	},
	{
		txt:"如果悲伤没有眼泪",
	},
	{
		txt:"偏爱",
	},
	{
		txt:"一个人的天光",
	},
	{
		txt:'首都周围的八大集团军',
	},
],
		//讲座
lectures:[
	{
		l_pic:'images/lecture/l_1.png',
		a_tt:'正在进行',
		l_txt:'文化讲堂——《滕王阁序》与骈体文（四）'

	},
	{
		l_pic:'images/lecture/l_2.png',
		a_tt:'已结束',
		l_txt:'文化讲堂——《滕王阁序》与骈体文（四）'

	},
	{
		l_pic:'images/lecture/l_3.png',
		a_tt:'已结束',
		l_txt:'文化讲堂——《滕王阁序》与骈体文（四）'

	},
	{
		l_pic:'images/lecture/l_4.png',
		a_tt:'已结束',
		l_txt:'文化讲堂——《滕王阁序》与骈体文（四）'

	},

],
Jectures:[
	{
		l_pic:'images/lecture/l_2.png',
		a_tt:'正在进行',
		l_txt:'文化讲堂——《滕王阁序》与骈体文（四）'

	},
	{
		l_pic:'images/lecture/l_1.png',
		a_tt:'已结束',
		l_txt:'文化讲堂——《滕王阁序》与骈体文（四）'

	},	

	{
		l_pic:'images/lecture/l_4.png',
		a_tt:'已结束',
		l_txt:'文化讲堂——《滕王阁序》与骈体文（四）'

	},
	{
		l_pic:'images/lecture/l_3.png',
		a_tt:'已结束',
		l_txt:'文化讲堂——《滕王阁序》与骈体文（四）'

	},

],
// 首页图书详情
Boookcars:[
	{
		title:"最后的精灵",
		icon:'http://103.235.234.147:6788/bookimg/I546.45104.jpg',
		isCheck: false,
	},
	{
		title:"贪心的女人更好命",
		icon:'http://103.235.234.147:6788/bookimg/I267199.jpg',
		isCheck: false,
	},
	{
		title:"想牵着你的手,在青山绿水间",
		icon:'http://103.235.234.147:6788/bookimg/I26628.jpg',
		isCheck: false,
	},
	{
		title:"皮囊",
		icon:'http://103.235.234.147:6788/bookimg/I26712832.jpg',
		isCheck: false,
	},
	{
		title:"博望志 :另一块砖",
		icon:'http://103.235.234.147:6788/bookimg/I254.jpg',
		isCheck: false,
	},
	{
		title:"魔鬼聊天术",
		icon:'http://103.235.234.147:6788/bookimg/I267.13641.jpg',
		isCheck: false,
	},
	{
		title:"蔷薇盛开过夏天",
		icon:'http://103.235.234.147:6788/bookimg/I247.5716289.jpg',
		isCheck: false,
	},
	{
		title:"奇特的一生∶柳比歇夫坚持56年的“时间统计法”",
		icon:'http://103.235.234.147:6788/bookimg/B848.44495.jpg',
		isCheck: false,
	},
	{
		title:"飞越地平线",
		icon:'http://103.235.234.147:6788/bookimg/I247.52868.jpg',
		isCheck: false,
	},
	{
		title:"一个人的天光",
		icon:'http://103.235.234.147:6788/bookimg/I247.5716790.jpg',
		isCheck: false,
	},
	{
		title:"偏爱",
		icon:'http://103.235.234.147:6788/bookimg/I247.5717698.jpg',
		isCheck: false,
	},
],
Hots:[
	{
		title:"别走，我的青春年少",
		team:'文学',
		leadr:'布莱恩·莫顿',
		borrow:'2017-4-5',
		still:'2017-8-16',
		state:'续借',
		icon:'http://103.235.234.147:6788/bookimg/I247.5717746.jpg',
	},
	{
		title:"首都周围的八大集团军",
		team:'军事',
		leadr:'布莱恩·莫顿',
		borrow:'2017-4-5',
		still:'2017-8-16',
		state:'续借',
		icon:'http://103.235.234.147:6788/bookimg/I253.2614.jpg',
	},
	{
		title:"那个夏季那个秋天",
		team:'文学',
		leadr:'布莱恩·莫顿',
		borrow:'2017-4-5',
		still:'2017-8-16',
		state:'续借',
		icon:'http://103.235.234.147:6788/bookimg/I247.5715906.jpg',
	},
	{
		title:"蔷薇盛开过夏天",
		team:'文学',
		leadr:'丁庆中',
		borrow:'2017-4-5',
		still:'2017-8-16',
		state:'续借',
		icon:'http://103.235.234.147:6788/bookimg/I247.5716289.jpg',
	},
	{
		title:"奇特的一生∶柳比歇夫坚持56年的“时间统计法”",
		team:'哲学',
		leadr:'未知',
		borrow:'2017-4-5',
		still:'2017-8-16',
		state:'续借',
		icon:'http://103.235.234.147:6788/bookimg/B848.44495.jpg',
	},
	{
		title:"飞越地平线",
		team:'文学',
		leadr:'丁庆中',
		borrow:'2017-4-5',
		still:'2017-8-16',
		state:'逾期',
		icon:'http://103.235.234.147:6788/bookimg/I247.52868.jpg',
	},
	{
		title:"一个人的天光",
		team:'文学',
		leadr:'未知',
		borrow:'2017-4-5',
		still:'2017-8-16',
		state:'逾期',
		icon:'http://103.235.234.147:6788/bookimg/I247.5716790.jpg',
	},
	{
		title:"偏爱",
		team:'文学',
		leadr:'未知',
		borrow:'2017-4-5',
		still:'2017-8-16',
		state:'逾期',
		icon:'http://103.235.234.147:6788/bookimg/I247.5717698.jpg',
	},
],

News:[
	{
		title:"会带人，才有高效团队",
		icon:'http://103.235.234.147:6788/bookimg/F272.9303.jpg',
	},

	{
		title:"一个人的天光",
		icon:'http://103.235.234.147:6788/bookimg/I247.5716790.jpg',
	},
	{
		title:"偏爱",
		icon:'http://103.235.234.147:6788/bookimg/I247.5717698.jpg',
	},
	{
		title:"奇特的一生∶柳比歇夫坚持56年的“时间统计法”",
		icon:'http://103.235.234.147:6788/bookimg/B848.44495.jpg',
	},
	{
		title:"一个海外华人讲的中国人的故事”",
		icon:'http://103.235.234.147:6788/bookimg/K2094316.jpg',
	},
],


Reads:[
	{
		title:"爱夏了夏天",
		icon:'http://103.235.234.147:6788/bookimg/I247.5716792.jpg',
	},

	{
		title:"夏墅堰",
		icon:'http://103.235.234.147:6788/bookimg/I247.5716802.jpg',
	},
	{
		title:"陈迹·清欢",
		icon:'http://103.235.234.147:6788/bookimg/I267.13872.jpg',
	},
	{
		title:"如果悲伤没有眼泪",
		icon:'http://103.235.234.147:6788/bookimg/I247.5713881.jpg',
	},
	{
		title:"华尔街继承者",
		icon:'http://103.235.234.147:6788/bookimg/I247.5716878.jpg',
	},
],

Banners:[
   {		 
	pic:'images/bg1.png',
   },
	{
	pic:'images/bg2.png',
   },
   {

	pic:'images/bg3.png',
   },
   {
	
	pic:'images/bg4.png',
   },
   {
	
	pic:'images/bg5.png',
   },
   {
	pic:'images/bg6.png',
   },
],
HotLists:[
   {
	title:"河对岸的窗",
	leadr:'布莱恩·莫顿',
    team:'文学',
	con:'诺拉和埃希克分手已经五年了。而这一夜，埃希克在电....',
	icon:'http://103.235.234.147:6788/bookimg/I712.453159.jpg',
   },
   {
	title:"牛郎织女",
	leadr:'成君忆',
				team:'文学',
	con:'"天上一条河汉，地上一条河汉。天上一位织女，地上一群...',
	icon:'http://103.235.234.147:6788/bookimg/I277.38262.jpg',
   },
   {
	title:"像羊那样叫唤",
	leadr:'丁庆中',
				team:'文学',
	con:'这是华北乡村当代生活最真实的风情画卷。作品着重地....',
	icon:'http://103.235.234.147:6788/bookimg/I247.5717688.jpg',
   },
			{
	title:"念你的时间比爱长",
	leadr:'暂无作者信息',
			   		team:'文学',
	con:'乔小池是一家咖啡屋的店员，美丽，忧郁。暖男陆....',
	icon:'http://103.235.234.147:6788/bookimg/I247.5716614.jpg',
   },
],

		//新闻资讯
newLists:[
	{
		n_pic:'images/newxq/tu-2.png',
		n_tit:'朝阳区24小时预借自取服务开通啦！',
		n_time:'2013-7-19 17:13',
		n_txt:'预借自取图书馆已覆盖所有朝阳区，再也不用为借不到好书发愁了! 8月31日，10台可供百姓自助借还图书的24小时自助图书馆亮相北京市朝阳区',
		n_eye:"630",
		n_shc:"324",
		n_share:"553"
	},
	{
		n_pic:'images/newxq/xx2.1.png',
		n_tit:'阅读零时差 全天不封馆',
		n_time:'2013-7-19 17:13',
		n_txt:'在朝阳区各个街道分布着40多个24小时自助图书馆。方便想读书的读者随时借书还书',
		n_eye:"630",
		n_shc:"324",
		n_share:"553"
	},
	{
		n_pic:'images/newxq/xx4.1.png',
		n_tit:'市民可“微信”点书图书馆就近配送！',
		n_time:'2015-6-24 15:13',
		n_txt:'只需要在自助借书机上轻轻一刷，借阅书籍的相关手续就会自动办理',
		n_eye:"630",
		n_shc:"324",
		n_share:"553"
	},
	{
		n_pic:'images/newxq/xx5.1.png',
		n_tit:'“我的小小采购家”主题亲子活动!',
		n_time:'2017-4-13 15:13',
		n_txt:'朝阳区图书馆于2016年4月10日周日成功举办了第2期“我的小小采购家”主题亲子系列活动',
		n_eye:"630",
		n_shc:"324",
		n_share:"553"
	},
	{
		n_pic:'images/newxq/6.3.png',
		n_tit:'“阅读与科技”--4•23朝阳区自助图书馆电子资源平台现场推广',
		n_time:'2017-4-13 15:13',
		n_txt:'4月23日正值第21个世界读书日，朝阳区自助图书馆运维保障中心的工作人员们经过精心筹备，于当天上午9点半在北小河公园029号设备前组织开展了“阅读与科技”',
		n_eye:"630",
		n_shc:"324",
		n_share:"553"
	},
	{
		n_pic:'images/newxq/xx2.2.png',
		n_tit:'“北京首个自助图书馆微信平台开通 手机上可查询借还书',
		n_time:'2014-5-27 15:13',
		n_txt:'人民网北京5月27日电（记者 高星） 记者今天从朝阳区图书馆了解到，北京首个自助图书馆微信平台开通。',
		n_eye:"630",
		n_shc:"324",
		n_share:"553"
	},
]
}