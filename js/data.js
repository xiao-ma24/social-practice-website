/**
 * 文化研学数据文件
 * 包含6省12+地点的美食、文化、非遗及实践感悟数据
 */
const cultureData = {
  gansu: {
    name: '甘肃',
    fullName: '甘肃省',
    navEng: 'GANSU',
    navSubtitle: '丝路咽喉 · 多元文化交汇地',
    description: '丝绸之路黄金段，黄河文化重要发源地',
    points: [
      {
        id: 'lanzhou',
        name: '兰州',
        navQuote: '黄河远上白云间',
        food: { title: '兰州牛肉面', description: '兰州牛肉面被誉为"中华第一面"...', image: 'https://picsum.photos/seed/lanzhou-beefnoodle/600/400' },
        culture: { title: '兰州太平鼓', description: '兰州太平鼓是国家级非物质文化遗产...', image: 'https://picsum.photos/seed/taiping-drum/600/400' },
        heritage: '太平鼓不仅是兰州的文化符号...',
        insight: '这一路的参观像一场跨越时空的对话。非遗陈列馆里，老兰州街头的鲜活风貌让历史不再是课本上的文字，而是有了温度、有了声音。岳云生的泥塑作品让我们最受触动——原来非遗不只是挂在墙上的“老古董”，它完全可以扎根当下，用传统技艺去表达今天的生活、今天的问题。秦腔的苍凉厚重、彩陶的古朴神秘，与这些鲜活的市井非遗交织在一起，让我们真切感受到兰州文化的深沉与灵动。这一天走下来，腿很酸，但心里很满。我们愈发明白，守护非遗，不是把它锁进玻璃柜，而是让它继续活在人们的目光和思考里。',
        heroImage: 'https://picsum.photos/seed/lanzhou-hero/1200/500',
        description: '黄河穿城而过，丝路明珠。一碗牛肉面，半部金城史。',
        surveyAreas: [
          { name: '中山桥周边', description: '黄河文化 · 城市记忆 · 百年铁桥', image: 'https://picsum.photos/seed/zhongshan-bridge/600/400' },
          { name: '正宁路夜市', description: '饮食文化 · 市井烟火 · 街市生活', image: 'https://picsum.photos/seed/zhengning-market/600/400' },
          { name: '甘肃省博物馆', description: '历史文物 · 丝路文明 · 彩陶文化', image: 'https://picsum.photos/seed/gansu-museum/600/400' }
        ],
        heritageItems: [
          { name: '牛肉面制作技艺', level: '国家级非遗', description: '一清二白三红四绿五黄，手工拉制七种面型，被誉为"中华第一面"。', image: 'https://picsum.photos/seed/heritage-beefnoodle/400/300', icon: '🍜' },
          { name: '兰州皮影戏', level: '省级非遗', description: '牛皮雕刻，灯影千姿，唱腔独特，是西北民间艺术的瑰宝。', image: 'https://picsum.photos/seed/heritage-piying/400/300', icon: '🎭' },
          { name: '兰州面塑', level: '市级非遗', description: '指尖揉捏百态，传统美术活化石，民俗节庆不可或缺的艺术形式。', image: 'https://picsum.photos/seed/heritage-miansu/400/300', icon: '🤲' },
          { name: '兰州刺绣', level: '市级非遗', description: '丝线穿梭古今，一针一线绣山河，色彩浓烈、图案质朴。', image: 'https://picsum.photos/seed/heritage-cixiu/400/300', icon: '🧵' }
        ],
        practicePhotos: [
          { label: '走访非遗传承人', image: 'https://picsum.photos/seed/practice-lanzhou1/600/400' },
          { label: '体验牛肉面制作', image: 'https://picsum.photos/seed/practice-lanzhou2/400/300' },
          { label: '观看皮影戏表演', image: 'https://picsum.photos/seed/practice-lanzhou3/400/300' },
          { label: '参观甘肃省博物馆', image: 'https://picsum.photos/seed/practice-lanzhou4/400/300' }
        ],
        practiceInfo: { province: '甘肃省', city: '兰州', date: '2026.5.10 — 5.12', teamSize: '6人团队' }
      },
      {
        id: 'linxia',
        name: '临夏',
        navQuote: '导河积石，至于龙门',
        food: { title: '临夏手抓羊肉', description: '临夏手抓羊肉以其鲜嫩无膻闻名...', image: 'https://picsum.photos/seed/linxia-mutton/600/400' },
        culture: { title: '临夏花儿', description: '花儿是流传于甘青宁地区的民歌...', image: 'https://picsum.photos/seed/linxia-huaer/600/400' },
        heritage: '临夏花儿是世界级非遗，需要代代传唱。',
        insight: '在临夏，花儿歌声穿透山谷，回族砖雕令人惊叹。多元文化在这里和谐共生，让我们深刻体会到"各美其美，美美与共"的真谛。',
        heroImage: 'https://picsum.photos/seed/linxia-hero/1200/500',
        description: '花儿之乡，彩陶故里，河州文化发源地',
        surveyAreas: [
          { name: '八坊十三巷', description: '回族民居 · 砖雕艺术 · 街巷文化', image: 'https://picsum.photos/seed/bafang-xiang/600/400' },
          { name: '炳灵寺石窟', description: '佛教艺术 · 石窟壁画 · 丝路遗迹', image: 'https://picsum.photos/seed/bingling-temple/600/400' },
          { name: '临夏州博物馆', description: '彩陶文化 · 马家窑遗址 · 历史脉络', image: 'https://picsum.photos/seed/linxia-museum/600/400' }
        ],
        heritageItems: [
          { name: '临夏花儿', level: '世界级非遗', description: '流传于甘青宁的民歌形式，高亢悠扬、即兴对唱。', image: 'https://picsum.photos/seed/heritage-huaer/400/300', icon: '🎵' },
          { name: '回族砖雕', level: '国家级非遗', description: '青砖上的艺术，图案繁复精美，多用于清真寺和民居装饰。', image: 'https://picsum.photos/seed/heritage-zhuandiao/400/300', icon: '🧱' },
          { name: '河州贤孝', level: '省级非遗', description: '传统说唱艺术，以劝善为主题，用河州方言表演。', image: 'https://picsum.photos/seed/heritage-xianxiao/400/300', icon: '📜' },
          { name: '临夏彩陶', level: '省级非遗', description: '传承马家窑文化彩陶制作技艺，纹样古朴、色彩浑厚。', image: 'https://picsum.photos/seed/heritage-caitao/400/300', icon: '🏺' }
        ],
        practicePhotos: [
          { label: '漫步八坊十三巷', image: 'https://picsum.photos/seed/practice-linxia1/600/400' },
          { label: '聆听花儿对唱', image: 'https://picsum.photos/seed/practice-linxia2/400/300' },
          { label: '观摩砖雕制作', image: 'https://picsum.photos/seed/practice-linxia3/400/300' },
          { label: '探访炳灵寺', image: 'https://picsum.photos/seed/practice-linxia4/400/300' }
        ],
        practiceInfo: { province: '甘肃省', city: '临夏', date: '2026.5.13 — 5.15', teamSize: '6人团队' }
      },
      {
        id: 'tianshui',
        name: '天水',
        navQuote: '龙城飞将，麦积烟霞',
        food: { title: '天水呱呱', description: '天水特色小吃，以荞麦淀粉制成...', image: 'https://picsum.photos/seed/tianshui-guagua/600/400' },
        culture: { title: '伏羲文化', description: '天水是伏羲故里，华夏文明发源地...', image: 'https://picsum.photos/seed/fuxi-temple/600/400' },
        heritage: '伏羲文化是中华民族精神的重要源头。',
        insight: '在天水，伏羲庙的古柏见证了千年沧桑，麦积山的微笑穿越时光。天水之行让我们理解：文化自信源于对自己文明源头的深刻认知。',
        heroImage: 'https://picsum.photos/seed/tianshui-hero/1200/500',
        description: '羲皇故里，麦积烟雨，石窟艺术走廊',
        surveyAreas: [
          { name: '伏羲庙', description: '人文始祖 · 祭祀圣地 · 古建筑群', image: 'https://picsum.photos/seed/fuxi-temple-area/600/400' },
          { name: '麦积山石窟', description: '石窟艺术 · 泥塑佛像 · 世界遗产', image: 'https://picsum.photos/seed/maiji-caves/600/400' },
          { name: '天水古城', description: '陇上江南 · 明清民居 · 历史街区', image: 'https://picsum.photos/seed/tianshui-oldtown/600/400' }
        ],
        heritageItems: [
          { name: '伏羲祭典', level: '国家级非遗', description: '每年农历正月十六，海内外华人共祭人文始祖伏羲。', image: 'https://picsum.photos/seed/heritage-fuxi/400/300', icon: '🏛' },
          { name: '天水雕漆', level: '国家级非遗', description: '以木胎为底，多层髹漆雕刻，器物精美绝伦。', image: 'https://picsum.photos/seed/heritage-diaoqi/400/300', icon: '🪑' },
          { name: '秦安小曲', level: '省级非遗', description: '曲调婉转悠扬的地方说唱，是陇原民间音乐的代表。', image: 'https://picsum.photos/seed/heritage-xiaoqu/400/300', icon: '🎶' },
          { name: '天水剪纸', level: '省级非遗', description: '一把剪刀一张纸，剪出陇原风土人情，质朴生动。', image: 'https://picsum.photos/seed/heritage-jianzhi/400/300', icon: '✂' }
        ],
        practicePhotos: [
          { label: '参观伏羲庙', image: 'https://picsum.photos/seed/practice-tianshui1/600/400' },
          { label: '登临麦积山', image: 'https://picsum.photos/seed/practice-tianshui2/400/300' },
          { label: '观摩雕漆工艺', image: 'https://picsum.photos/seed/practice-tianshui3/400/300' },
          { label: '走访古城民居', image: 'https://picsum.photos/seed/practice-tianshui4/400/300' }
        ],
        practiceInfo: { province: '甘肃省', city: '天水', date: '2026.5.16 — 5.18', teamSize: '6人团队' }
      }
    ]
  },
  hubei: {
    name: '湖北', fullName: '湖北省', navEng: 'HUBEI', navSubtitle: '荆楚文化 · 长江文明发祥地', description: '荆楚文化发祥地，长江文明的重要源头',
    points: [
      {
        id: 'wuhan', name: '武汉',
        navQuote: '晴川历历，芳草萋萋',
        food: { title: '武汉热干面', description: '...', image: 'https://picsum.photos/seed/wuhan-hotdry/600/400' },
        culture: { title: '汉剧', description: '...', image: 'https://picsum.photos/seed/han-opera/600/400' },
        heritage: '汉剧作为中国最古老的剧种之一...',
        insight: '在武汉的小剧场看了一场汉剧折子戏，演员的一招一式都透着几百年的功底。',
        heroImage: 'https://picsum.photos/seed/wuhan-hero/1200/500',
        description: '九省通衢，荆楚之魂，长江文明重镇',
        surveyAreas: [
          { name: '黄鹤楼', description: '天下名楼 · 诗词文化 · 江城地标', image: 'https://picsum.photos/seed/yellow-crane/600/400' },
          { name: '湖北省博物馆', description: '曾侯乙编钟 · 越王勾践剑 · 荆楚宝藏', image: 'https://picsum.photos/seed/hubei-museum/600/400' },
          { name: '户部巷', description: '汉味小吃 · 过早文化 · 市井烟火', image: 'https://picsum.photos/seed/hubu-xiang/600/400' }
        ],
        heritageItems: [
          { name: '汉剧', level: '国家级非遗', description: '京剧重要源头，唱腔以"西皮""二黄"为主。', image: 'https://picsum.photos/seed/han-opera-card/400/300', icon: '🎭' },
          { name: '汉绣', level: '国家级非遗', description: '以楚文化为根基的刺绣工艺，色彩浓艳、针法丰富。', image: 'https://picsum.photos/seed/han-xiu/400/300', icon: '🧵' },
          { name: '热干面技艺', level: '省级非遗', description: '武汉城市名片，芝麻酱香、面条筋道、萝卜脆爽。', image: 'https://picsum.photos/seed/heritage-regnoodles/400/300', icon: '🍜' },
          { name: '楚剧', level: '国家级非遗', description: '湖北主要地方剧种，通俗易懂，生活气息浓郁。', image: 'https://picsum.photos/seed/chu-opera/400/300', icon: '🎶' }
        ],
        practicePhotos: [
          { label: '登黄鹤楼', image: 'https://picsum.photos/seed/practice-wuhan1/600/400' },
          { label: '参观省博', image: 'https://picsum.photos/seed/practice-wuhan2/400/300' },
          { label: '体验过早文化', image: 'https://picsum.photos/seed/practice-wuhan3/400/300' },
          { label: '走访汉剧传承人', image: 'https://picsum.photos/seed/practice-wuhan4/400/300' }
        ],
        practiceInfo: { province: '湖北省', city: '武汉', date: '2026.6.3 — 6.5', teamSize: '6人团队' }
      },
      {
        id: 'enshi', name: '恩施',
        navQuote: '清江一曲抱村流',
        food: { title: '恩施合渣', description: '...', image: 'https://picsum.photos/seed/tujia-hezha/600/400' },
        culture: { title: '土家摆手舞', description: '...', image: 'https://picsum.photos/seed/tujia-dance/600/400' },
        heritage: '摆手舞是土家族集体记忆的活态载体...',
        insight: '和土家族老乡一起跳摆手舞，虽然动作笨拙但格外开心。',
        heroImage: 'https://picsum.photos/seed/enshi-hero/1200/500',
        description: '土苗风情，峡谷奇观，巴楚文化交汇地',
        surveyAreas: [
          { name: '恩施大峡谷', description: '喀斯特地貌 · 清江升白云 · 绝壁环峰丛', image: 'https://picsum.photos/seed/enshi-canyon/600/400' },
          { name: '土司城', description: '土家族历史 · 土司文化 · 建筑瑰宝', image: 'https://picsum.photos/seed/tusi-cheng/600/400' },
          { name: '女儿城', description: '土家民俗 · 非遗展示 · 文旅融合', image: 'https://picsum.photos/seed/nver-cheng/600/400' }
        ],
        heritageItems: [
          { name: '摆手舞', level: '国家级非遗', description: '土家族集体舞蹈，源于生产生活，舞姿粗犷豪放。', image: 'https://picsum.photos/seed/heritage-baishou/400/300', icon: '💃' },
          { name: '西兰卡普', level: '国家级非遗', description: '土家织锦技艺，色彩斑斓、图案丰富，被誉为土家之花。', image: 'https://picsum.photos/seed/heritage-xilan/400/300', icon: '🧶' },
          { name: '薅草锣鼓', level: '国家级非遗', description: '土家族田间劳作时的鼓舞形式，欢快热烈。', image: 'https://picsum.photos/seed/heritage-haocao/400/300', icon: '🥁' },
          { name: '恩施玉露', level: '省级非遗', description: '中国名茶制作技艺，蒸青工艺传承千年。', image: 'https://picsum.photos/seed/heritage-yulu/400/300', icon: '🍵' }
        ],
        practicePhotos: [
          { label: '峡谷徒步调研', image: 'https://picsum.photos/seed/practice-enshi1/600/400' },
          { label: '学跳摆手舞', image: 'https://picsum.photos/seed/practice-enshi2/400/300' },
          { label: '观摩织锦工艺', image: 'https://picsum.photos/seed/practice-enshi3/400/300' },
          { label: '品玉露茶', image: 'https://picsum.photos/seed/practice-enshi4/400/300' }
        ],
        practiceInfo: { province: '湖北省', city: '恩施', date: '2026.6.6 — 6.8', teamSize: '6人团队' }
      }
    ]
  },
  neimenggu: {
    name: '内蒙古', fullName: '内蒙古自治区', navEng: 'INNER MONGOLIA', navSubtitle: '草原文化 · 马背民族摇篮', description: '草原文化的摇篮，马背民族的故乡',
    points: [
      {
        id: 'huhehaote', name: '呼和浩特',
        navQuote: '风吹草低见牛羊',
        food: { title: '手把肉', description: '...', image: 'https://picsum.photos/seed/mongol-mutton/600/400' },
        culture: { title: '蒙古族长调民歌', description: '...', image: 'https://picsum.photos/seed/mongol-longsong/600/400' },
        heritage: '长调是游牧文明的音乐活化石...',
        insight: '在草原上听老艺人唱长调，那声音仿佛能穿透天际。',
        heroImage: 'https://picsum.photos/seed/huhehaote-hero/1200/500',
        description: '青城之下，草原之都，游牧文明的心脏',
        surveyAreas: [
          { name: '大召寺', description: '藏传佛教 · 壁画艺术 · 蒙藏文化交流', image: 'https://picsum.photos/seed/dazhao-temple/600/400' },
          { name: '内蒙古博物院', description: '草原文明 · 恐龙化石 · 民族文物', image: 'https://picsum.photos/seed/neimeng-museum/600/400' },
          { name: '希拉穆仁草原', description: '草原生态 · 牧民生活 · 游牧文化体验', image: 'https://picsum.photos/seed/grassland/600/400' }
        ],
        heritageItems: [
          { name: '蒙古族长调', level: '人类非遗', description: '旋律悠长、意境开阔，被誉为草原音乐的活化石。', image: 'https://picsum.photos/seed/heritage-changdiao/400/300', icon: '🎵' },
          { name: '马头琴', level: '国家级非遗', description: '琴身雕马头，琴声如马嘶，蒙古族最具代表性的乐器。', image: 'https://picsum.photos/seed/heritage-matouqin/400/300', icon: '🎻' },
          { name: '那达慕', level: '国家级非遗', description: '草原盛会，赛马摔跤射箭，尽显蒙古男儿豪情。', image: 'https://picsum.photos/seed/heritage-nadamu/400/300', icon: '🏇' },
          { name: '蒙古包营造', level: '国家级非遗', description: '游牧民族的智慧结晶，拆搭便利、冬暖夏凉。', image: 'https://picsum.photos/seed/heritage-menggubao/400/300', icon: '⛺' }
        ],
        practicePhotos: [
          { label: '草原调研走访', image: 'https://picsum.photos/seed/practice-huhehaote1/600/400' },
          { label: '聆听长调', image: 'https://picsum.photos/seed/practice-huhehaote2/400/300' },
          { label: '体验马头琴', image: 'https://picsum.photos/seed/practice-huhehaote3/400/300' },
          { label: '住蒙古包', image: 'https://picsum.photos/seed/practice-huhehaote4/400/300' }
        ],
        practiceInfo: { province: '内蒙古自治区', city: '呼和浩特', date: '2026.7.2 — 7.4', teamSize: '6人团队' }
      },
      {
        id: 'eerduosi', name: '鄂尔多斯',
        navQuote: '大漠孤烟，长河落日',
        food: { title: '烤全羊', description: '...', image: 'https://picsum.photos/seed/roast-lamb/600/400' },
        culture: { title: '鄂尔多斯婚礼', description: '...', image: 'https://picsum.photos/seed/mongol-wedding/600/400' },
        heritage: '鄂尔多斯婚礼集蒙古族诗歌、音乐、舞蹈于一体...',
        insight: '参与了一场模拟的鄂尔多斯婚礼体验，每一个仪式都有深厚的文化含义。',
        heroImage: 'https://picsum.photos/seed/eerduosi-hero/1200/500',
        description: '成陵圣地，歌舞之乡，蒙古族文化百科全书',
        surveyAreas: [
          { name: '成吉思汗陵', description: '守灵文化 · 祭祀传统 · 历史记忆', image: 'https://picsum.photos/seed/chengling/600/400' },
          { name: '响沙湾', description: '沙漠奇观 · 生态保护 · 自然遗产', image: 'https://picsum.photos/seed/xiangshawan/600/400' },
          { name: '康巴什', description: '现代草原城市 · 建筑艺术 · 城市规划', image: 'https://picsum.photos/seed/kangbashi/600/400' }
        ],
        heritageItems: [
          { name: '鄂尔多斯婚礼', level: '国家级非遗', description: '蒙古族民俗百科全书，持续数日的盛大仪式。', image: 'https://picsum.photos/seed/heritage-wedding/400/300', icon: '💒' },
          { name: '成陵祭祀', level: '国家级非遗', description: '延续八百年的守灵人传统，忠诚与信仰的象征。', image: 'https://picsum.photos/seed/heritage-chengling/400/300', icon: '🏛' },
          { name: '蒙古族服饰', level: '国家级非遗', description: '游牧生活的产物，华丽与实用完美结合。', image: 'https://picsum.photos/seed/heritage-mongolcloth/400/300', icon: '👗' },
          { name: '鄂尔多斯短调', level: '省级非遗', description: '节奏明快、旋律活泼的草原民歌形式。', image: 'https://picsum.photos/seed/heritage-duandiao/400/300', icon: '🎶' }
        ],
        practicePhotos: [
          { label: '参访成陵', image: 'https://picsum.photos/seed/practice-eerduosi1/600/400' },
          { label: '沙漠生态考察', image: 'https://picsum.photos/seed/practice-eerduosi2/400/300' },
          { label: '体验婚俗', image: 'https://picsum.photos/seed/practice-eerduosi3/400/300' },
          { label: '学蒙古族舞蹈', image: 'https://picsum.photos/seed/practice-eerduosi4/400/300' }
        ],
        practiceInfo: { province: '内蒙古自治区', city: '鄂尔多斯', date: '2026.7.5 — 7.7', teamSize: '6人团队' }
      }
    ]
  },
  xizang: {
    name: '西藏', fullName: '西藏自治区', navEng: 'TIBET', navSubtitle: '世界屋脊 · 雪域文化圣地', description: '世界屋脊，藏文化的圣洁之地',
    points: [
      {
        id: 'lasa', name: '拉萨',
        navQuote: '世间安得双全法',
        food: { title: '酥油茶', description: '...', image: 'https://picsum.photos/seed/tibet-butter-tea/600/400' },
        culture: { title: '藏戏', description: '...', image: 'https://picsum.photos/seed/tibet-opera/600/400' },
        heritage: '藏戏承载着藏族人民的宗教信仰...',
        insight: '在八廓街看到藏戏表演，蓝天白云下那鲜艳的面具格外夺目。',
        heroImage: 'https://picsum.photos/seed/lasa-hero/1200/500',
        description: '日光之城，雪域圣地，藏文化的璀璨明珠',
        surveyAreas: [
          { name: '布达拉宫', description: '世界文化遗产 · 藏式建筑巅峰 · 政教中心', image: 'https://picsum.photos/seed/potala/600/400' },
          { name: '大昭寺', description: '藏传佛教圣地 · 释迦牟尼等身像 · 朝圣中心', image: 'https://picsum.photos/seed/jokhang/600/400' },
          { name: '八廓街', description: '转经道 · 手工艺 · 老城生活', image: 'https://picsum.photos/seed/barkhor/600/400' }
        ],
        heritageItems: [
          { name: '藏戏', level: '人类非遗', description: '面具艺术、歌舞说唱融为一体的古老戏剧形式。', image: 'https://picsum.photos/seed/heritage-zangxi/400/300', icon: '🎭' },
          { name: '藏药浴', level: '人类非遗', description: '以五味甘露汤为基础的传统医学外治疗法。', image: 'https://picsum.photos/seed/heritage-zangyao/400/300', icon: '💊' },
          { name: '唐卡', level: '国家级非遗', description: '矿物颜料绘制的宗教卷轴画，色彩千年不褪。', image: 'https://picsum.photos/seed/heritage-thangka/400/300', icon: '🎨' },
          { name: '藏香制作', level: '国家级非遗', description: '数十味藏草药配制，香气醇厚、安神养心。', image: 'https://picsum.photos/seed/heritage-zangxiang/400/300', icon: '🕯' }
        ],
        practicePhotos: [
          { label: '参访布达拉宫', image: 'https://picsum.photos/seed/practice-lasa1/600/400' },
          { label: '观看藏戏', image: 'https://picsum.photos/seed/practice-lasa2/400/300' },
          { label: '学画唐卡', image: 'https://picsum.photos/seed/practice-lasa3/400/300' },
          { label: '制藏香体验', image: 'https://picsum.photos/seed/practice-lasa4/400/300' }
        ],
        practiceInfo: { province: '西藏自治区', city: '拉萨', date: '2026.7.20 — 7.22', teamSize: '6人团队' }
      },
      {
        id: 'rikaze', name: '日喀则',
        navQuote: '珠峰巍峨接天际',
        food: { title: '青稞酒', description: '...', image: 'https://picsum.photos/seed/qingke-wine/600/400' },
        culture: { title: '唐卡艺术', description: '...', image: 'https://picsum.photos/seed/thangka-art/600/400' },
        heritage: '唐卡是藏传佛教文化的重要载体...',
        insight: '在唐卡画室观摩画师作画，一笔一画都是修行。',
        heroImage: 'https://picsum.photos/seed/rikaze-hero/1200/500',
        description: '珠峰故里，后藏中心，青稞之乡',
        surveyAreas: [
          { name: '扎什伦布寺', description: '班禅驻锡地 · 藏传佛教名刹 · 建筑艺术', image: 'https://picsum.photos/seed/tashilhunpo/600/400' },
          { name: '珠峰大本营', description: '世界之巅 · 生态保护 · 登山文化', image: 'https://picsum.photos/seed/everest/600/400' },
          { name: '江孜宗山', description: '抗英遗址 · 古城堡 · 爱国主义教育基地', image: 'https://picsum.photos/seed/jiangzi/600/400' }
        ],
        heritageItems: [
          { name: '江孜卡垫', level: '国家级非遗', description: '手工织造的藏式地毯，图案精美、质地厚实。', image: 'https://picsum.photos/seed/heritage-kadian/400/300', icon: '🧶' },
          { name: '藏刀锻制', level: '国家级非遗', description: '拉孜藏刀以精钢反复折叠锻打，刃口锋利、装饰华美。', image: 'https://picsum.photos/seed/heritage-zangdao/400/300', icon: '🗡' },
          { name: '日喀则锅庄', level: '国家级非遗', description: '后藏地区最具代表性的集体舞蹈，动作奔放豪迈。', image: 'https://picsum.photos/seed/heritage-guozhuang/400/300', icon: '💃' },
          { name: '青稞酒酿造', level: '省级非遗', description: '高原特产青稞为原料，传统发酵工艺酿造。', image: 'https://picsum.photos/seed/heritage-qingke/400/300', icon: '🍶' }
        ],
        practicePhotos: [
          { label: '参访扎什伦布寺', image: 'https://picsum.photos/seed/practice-rikaze1/600/400' },
          { label: '远眺珠峰', image: 'https://picsum.photos/seed/practice-rikaze2/400/300' },
          { label: '观摩藏刀锻造', image: 'https://picsum.photos/seed/practice-rikaze3/400/300' },
          { label: '锅庄晚会', image: 'https://picsum.photos/seed/practice-rikaze4/400/300' }
        ],
        practiceInfo: { province: '西藏自治区', city: '日喀则', date: '2026.7.23 — 7.25', teamSize: '6人团队' }
      }
    ]
  },
  xinjiang: {
    name: '新疆', fullName: '新疆维吾尔自治区', navEng: 'XINJIANG', navSubtitle: '丝路核心 · 多元文化共生', description: '丝绸之路核心区，多元文化交汇之地',
    points: [
      {
        id: 'wulumuqi', name: '乌鲁木齐',
        navQuote: '千树万树梨花开',
        food: { title: '烤羊肉串', description: '...', image: 'https://picsum.photos/seed/xinjiang-kebab/600/400' },
        culture: { title: '十二木卡姆', description: '...', image: 'https://picsum.photos/seed/muqam-music/600/400' },
        heritage: '十二木卡姆曾一度面临失传...',
        insight: '聆听木卡姆音乐时，虽然语言不通，但那动人的旋律直击心灵。',
        heroImage: 'https://picsum.photos/seed/wulumuqi-hero/1200/500',
        description: '亚心之都，丝路枢纽，多元文化交融之城',
        surveyAreas: [
          { name: '新疆博物馆', description: '西域文明 · 楼兰干尸 · 民族文物', image: 'https://picsum.photos/seed/xinjiang-museum/600/400' },
          { name: '国际大巴扎', description: '中亚最大集市 · 手工艺品 · 干果香料', image: 'https://picsum.photos/seed/bazaar/600/400' },
          { name: '南山牧场', description: '天山北麓 · 哈萨克游牧 · 草原生态', image: 'https://picsum.photos/seed/nanshan/600/400' }
        ],
        heritageItems: [
          { name: '十二木卡姆', level: '人类非遗', description: '320首乐曲的宏大套曲，东方音乐的明珠。', image: 'https://picsum.photos/seed/heritage-muqam/400/300', icon: '🎵' },
          { name: '维吾尔族刺绣', level: '国家级非遗', description: '色彩艳丽、图案丰富，一针一线绣出丝路风情。', image: 'https://picsum.photos/seed/heritage-weiwucixiu/400/300', icon: '🧵' },
          { name: '维吾尔族歌舞', level: '国家级非遗', description: '赛乃姆、刀郎舞等，热情奔放、感染力强。', image: 'https://picsum.photos/seed/heritage-sainaimu/400/300', icon: '💃' },
          { name: '新疆花儿', level: '国家级非遗', description: '多民族共创共享的民歌形式，融合丝路多元文化。', image: 'https://picsum.photos/seed/heritage-xinjianghuaer/400/300', icon: '🌸' }
        ],
        practicePhotos: [
          { label: '参观博物馆', image: 'https://picsum.photos/seed/practice-wulumuqi1/600/400' },
          { label: '逛大巴扎', image: 'https://picsum.photos/seed/practice-wulumuqi2/400/300' },
          { label: '聆听木卡姆', image: 'https://picsum.photos/seed/practice-wulumuqi3/400/300' },
          { label: '南山草原走访', image: 'https://picsum.photos/seed/practice-wulumuqi4/400/300' }
        ],
        practiceInfo: { province: '新疆维吾尔自治区', city: '乌鲁木齐', date: '2026.8.5 — 8.7', teamSize: '6人团队' }
      },
      {
        id: 'kashi', name: '喀什',
        navQuote: '劝君更尽一杯酒',
        food: { title: '手抓饭', description: '...', image: 'https://picsum.photos/seed/pilaf-rice/600/400' },
        culture: { title: '艾德莱斯绸', description: '...', image: 'https://picsum.photos/seed/atlas-silk/600/400' },
        heritage: '艾德莱斯绸扎染技艺已传承千年...',
        insight: '在喀什老城手工艺作坊体验扎染，看似简单的捆扎却蕴含着丰富的经验智慧。',
        heroImage: 'https://picsum.photos/seed/kashi-hero/1200/500',
        description: '丝路重镇，风情古城，维吾尔文化的活态博物馆',
        surveyAreas: [
          { name: '喀什老城', description: '生土建筑 · 迷宫街巷 · 非遗工坊', image: 'https://picsum.photos/seed/kashgar-oldtown/600/400' },
          { name: '艾提尕尔清真寺', description: '新疆最大清真寺 · 伊斯兰建筑 · 宗教文化', image: 'https://picsum.photos/seed/idgar/600/400' },
          { name: '香妃园', description: '历史人物 · 陵墓建筑 · 民族记忆', image: 'https://picsum.photos/seed/xiangfei/600/400' }
        ],
        heritageItems: [
          { name: '艾德莱斯绸', level: '国家级非遗', description: '丝绸之路上绚丽的彩虹，纯手工扎染技艺。', image: 'https://picsum.photos/seed/heritage-atlas/400/300', icon: '🧣' },
          { name: '维吾尔族模制法', level: '国家级非遗', description: '土陶烧制技艺，传承千年丝路工艺。', image: 'https://picsum.photos/seed/heritage-tutao/400/300', icon: '🏺' },
          { name: '维吾尔族铜器', level: '省级非遗', description: '锻打雕刻的铜壶铜盘，丝路手工艺的杰作。', image: 'https://picsum.photos/seed/heritage-tongqi/400/300', icon: '🔔' },
          { name: '喀什木卡姆', level: '人类非遗', description: '刀郎木卡姆风格独特，气势磅礴、豪迈奔放。', image: 'https://picsum.photos/seed/heritage-daolang/400/300', icon: '🎶' }
        ],
        practicePhotos: [
          { label: '漫步老城', image: 'https://picsum.photos/seed/practice-kashi1/600/400' },
          { label: '参观艾提尕尔', image: 'https://picsum.photos/seed/practice-kashi2/400/300' },
          { label: '体验扎染', image: 'https://picsum.photos/seed/practice-kashi3/400/300' },
          { label: '观摩土陶制作', image: 'https://picsum.photos/seed/practice-kashi4/400/300' }
        ],
        practiceInfo: { province: '新疆维吾尔自治区', city: '喀什', date: '2026.8.8 — 8.10', teamSize: '6人团队' }
      }
    ]
  },
  guangxi: {
    name: '广西', fullName: '广西壮族自治区', navEng: 'GUANGXI', navSubtitle: '壮乡歌海 · 山水文化宝库', description: '壮乡歌海，山水甲天下的民族文化宝库',
    points: [
      {
        id: 'guilin', name: '桂林',
        navQuote: '江作青罗带',
        food: { title: '桂林米粉', description: '...', image: 'https://picsum.photos/seed/guilin-rice-noodle/600/400' },
        culture: { title: '壮族山歌', description: '...', image: 'https://picsum.photos/seed/zhuang-song/600/400' },
        heritage: '壮族山歌承载着壮族的历史记忆...',
        insight: '在漓江边听壮族阿姐唱山歌，群山环绕间那清脆的歌声仿佛来自山水之间。',
        heroImage: 'https://picsum.photos/seed/guilin-hero/1200/500',
        description: '山水甲天下，壮歌飘千里，自然与文化双遗产之地',
        surveyAreas: [
          { name: '漓江', description: '喀斯特地貌 · 山水画卷 · 世界遗产', image: 'https://picsum.photos/seed/lijiang/600/400' },
          { name: '龙脊梯田', description: '壮族农耕 · 梯田文化 · 生态智慧', image: 'https://picsum.photos/seed/longji/600/400' },
          { name: '阳朔西街', description: '中西文化交汇 · 古镇风情 · 文旅融合', image: 'https://picsum.photos/seed/yangshuo/600/400' }
        ],
        heritageItems: [
          { name: '壮族山歌', level: '国家级非遗', description: '三月三歌圩，以歌会友、以歌传情的民族传统。', image: 'https://picsum.photos/seed/heritage-shange/400/300', icon: '🎤' },
          { name: '桂林米粉', level: '省级非遗', description: '卤水秘方代代相传，酸辣鲜香回味无穷。', image: 'https://picsum.photos/seed/heritage-mifen/400/300', icon: '🍜' },
          { name: '壮锦', level: '国家级非遗', description: '中国四大名锦之一，图案精美、色彩绚丽。', image: 'https://picsum.photos/seed/heritage-zhuangjin/400/300', icon: '🧣' },
          { name: '彩调', level: '国家级非遗', description: '桂林地方戏曲，诙谐幽默、生活气息浓厚。', image: 'https://picsum.photos/seed/heritage-caidiao/400/300', icon: '🎭' }
        ],
        practicePhotos: [
          { label: '漓江生态考察', image: 'https://picsum.photos/seed/practice-guilin1/600/400' },
          { label: '龙脊梯田调研', image: 'https://picsum.photos/seed/practice-guilin2/400/300' },
          { label: '听壮族山歌', image: 'https://picsum.photos/seed/practice-guilin3/400/300' },
          { label: '学做桂林米粉', image: 'https://picsum.photos/seed/practice-guilin4/400/300' }
        ],
        practiceInfo: { province: '广西壮族自治区', city: '桂林', date: '2026.8.20 — 8.22', teamSize: '6人团队' }
      },
      {
        id: 'nanning', name: '南宁',
        navQuote: '红豆生南国',
        food: { title: '老友粉', description: '...', image: 'https://picsum.photos/seed/laoyou-noodle/600/400' },
        culture: { title: '邕剧', description: '...', image: 'https://picsum.photos/seed/yong-opera/600/400' },
        heritage: '邕剧作为广西特有的地方剧种...',
        insight: '在南宁老街上偶然听到邕剧的声腔，虽然听不太懂唱词，但那份韵味让人着迷。',
        heroImage: 'https://picsum.photos/seed/nanning-hero/1200/500',
        description: '绿城之都，邕江之畔，壮乡首府文化荟萃',
        surveyAreas: [
          { name: '广西民族博物馆', description: '民族文化 · 铜鼓文化 · 非遗展示', image: 'https://picsum.photos/seed/guangxi-museum/600/400' },
          { name: '三街两巷', description: '老南宁记忆 · 骑楼建筑 · 历史文化街区', image: 'https://picsum.photos/seed/sanjie/600/400' },
          { name: '青秀山', description: '城市绿肺 · 南疆风光 · 休闲文化', image: 'https://picsum.photos/seed/qingxiu/600/400' }
        ],
        heritageItems: [
          { name: '邕剧', level: '国家级非遗', description: '融合粤剧、山歌与小调，武打功架独树一帜。', image: 'https://picsum.photos/seed/heritage-yongju/400/300', icon: '🎭' },
          { name: '壮族三月三', level: '国家级非遗', description: '广西法定假日，壮族同胞以歌会友的盛大节日。', image: 'https://picsum.photos/seed/heritage-sanyuesan/400/300', icon: '🎉' },
          { name: '南宁老友粉', level: '省级非遗', description: '酸笋豆豉爆炒，一口酸辣鲜香，老友情谊在其中。', image: 'https://picsum.photos/seed/heritage-laoyou/400/300', icon: '🍲' },
          { name: '壮族天琴', level: '国家级非遗', description: '壮族古老的弹拨乐器，天籁之音连接天地。', image: 'https://picsum.photos/seed/heritage-tianqin/400/300', icon: '🪕' }
        ],
        practicePhotos: [
          { label: '参观民族博物馆', image: 'https://picsum.photos/seed/practice-nanning1/600/400' },
          { label: '漫步三街两巷', image: 'https://picsum.photos/seed/practice-nanning2/400/300' },
          { label: '看邕剧表演', image: 'https://picsum.photos/seed/practice-nanning3/400/300' },
          { label: '老友粉体验', image: 'https://picsum.photos/seed/practice-nanning4/400/300' }
        ],
        practiceInfo: { province: '广西壮族自治区', city: '南宁', date: '2026.8.23 — 8.25', teamSize: '6人团队' }
      }
    ]
  }
};
