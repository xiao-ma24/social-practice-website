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
        heroImage: 'C:\\Users\\MECHREVO\\OneDrive\\Desktop\\社会实践网站\\image\\兰州.jpg',
        description: '黄河穿城而过，丝路明珠。一碗牛肉面，半部金城史。',
        surveyAreas: [
          { name: '兰州非物质文化遗产陈列馆', description: '兰州非遗集中展示地 · 太平鼓秦腔泥塑剪纸', image: 'C:\\Users\\MECHREVO\\OneDrive\\Desktop\\社会实践网站\\image\\兰州非物质.jpg',
            intro: '兰州非物质文化遗产陈列馆位于金城关文化博览园内，集中展示了兰州地区的国家级、省级、市级非物质文化遗产项目。馆内设有太平鼓、秦腔、泥塑、剪纸等多个主题展区，通过实物、图片、影像和互动体验等方式，让观众近距离感受兰州非遗的独特魅力。',
            process: '在讲解员的带领下，我们依次参观了各主题展区。太平鼓展区中鼓声震天的视频令人热血沸腾；秦腔展区里经典唱段的苍凉厚重直击心灵；泥塑和剪纸展区有传承人现场演示，一团泥巴在指尖变成鲜活人物，一张红纸在剪刀下化作精美图案。我们重点采访了陈列馆负责人，深入了解兰州非遗保护的现状与挑战.',
            feeling: '走进陈列馆，仿佛打开了一本立体的兰州文化百科全书。太平鼓的震撼、秦腔的苍凉、泥塑的鲜活、剪纸的灵巧——每一项非遗都散发着独特的生命力。最让我们感动的是，陈列馆不是冷冰冰的展柜，而是让非遗"活"起来的地方。传承人现场演示时眼中的光芒，比任何展品都更让人难忘。'
          }
        ],
        heritageItems: [
          { name: '兰州太平鼓', level: '国家级非遗', description: '鼓声震天响彻金城，兰州最具代表性的民间舞蹈与打击乐艺术。', image: 'C:\\Users\\MECHREVO\\OneDrive\\Desktop\\社会实践网站\\image\\太平鼓.jpg', icon: '🥁',
            intro: '兰州太平鼓是国家级非物质文化遗产，起源于明代军傩。鼓身以整段椿木挖空，鼓面蒙牛皮或马皮，鼓重可达数十斤。表演时鼓手将大鼓斜挎腰间，以双槌击打，伴以腾挪跳跃的身法，气势磅礴、震撼人心，被称为"黄河岸边的最强音"。',
            process: '在非遗陈列馆的太平鼓体验区，传承人老魏为我们演示了三种基本鼓点——"开山鼓"如春雷炸响、"滚雷鼓"似万马奔腾、"旋风鼓"若狂风骤起。我们每人尝试挎上大鼓击打，鼓重得几乎站不稳，更别提一边击鼓一边跳跃翻腾了。老魏笑着说，很多鼓手训练十几年才能登台。',
            feeling: '当鼓声在展厅里响起的那一刻，胸腔都在共振。太平鼓不只是一面鼓，它是黄河儿女的魂魄在擂动。我们笨拙地挥槌时，老魏在一旁打着拍子哼唱古老的鼓谣，那个画面让我们理解了什么叫"鼓中有魂"——这是一群人在用全身的力气守护一种声音。'
          },
          { name: '秦腔', level: '国家级非遗', description: '中国最古老的戏曲剧种之一，唱腔高亢激越、苍凉厚重。', image: 'C:\\Users\\MECHREVO\\OneDrive\\Desktop\\社会实践网站\\image\\秦腔.jpg', icon: '🎭',
            intro: '秦腔是中国最古老的戏曲剧种之一，起源于陕甘一带的民间歌舞，已有两千余年历史。秦腔唱腔以"板腔体"为主，音调高亢激越、苍凉厚重，表演风格粗犷豪放，被称为"吼秦腔"而非"唱秦腔"，是中国戏曲的"活化石"。',
            process: '在秦腔博物馆，我们观看了折子戏《铡美案》片段。演出后走进后台采访了主演赵老师，他展示了秦腔服饰和脸谱——红脸忠勇、黑脸刚正、白脸奸诈，每张脸谱都是一部道德教科书。我们还跟着赵老师学了最基本的甩袖和走步，看似简单的几步路，做标准却需要数年功底。',
            feeling: '第一次近距离听秦腔，那种高亢到近乎嘶吼的唱腔直冲脑门。赵老师说"秦腔不是唱给耳朵的，是唱给心的"——我们开始懂了。在这个软语轻歌盛行的时代，这种苍凉而有力的声音，恰是最珍贵的声音多样性。每一嗓子吼出来，都是西北人骨子里的倔强与深情。'
          },
          { name: '兰州泥塑', level: '省级非遗', description: '以黄河红胶泥为原料，捏塑市井百态，被誉为"立体的兰州老照片"。', image: 'image\\岳云生.jpg', icon: '🤲',
            intro: '兰州泥塑以本地黄河红胶泥为原料，经选泥、和泥、捏塑、阴干、上彩等多道工序制作。传承人岳云生独创"写意泥塑"风格，用夸张变形的造型表现兰州老街上的各色人物——卖牛肉面的、拉骆驼的、下棋的老汉，被誉为"立体的兰州老照片"。',
            process: '在泥塑工作室，岳云生老师展示了从揉泥到成型的完整过程——一团红泥在他手中不过二十分钟就变成了一个活灵活现的"卖灰豆子的老汉"。我们尝试捏制简单的茶壶，不是歪就是塌，最后只有一个人勉强捏出了形状。岳老师笑着说："手上有眼睛就行了，眼睛不用看手上。"',
            feeling: '岳老师的泥塑充满幽默感——拉面师傅的胳膊比腿还粗，小孩的脑袋占了半个身子。他说这不是技术问题，是"夸张里有真情"。我们忽然明白了，非遗的魅力不在于"完美"，而在于那些不完美的造型里藏着的生活温度和艺术家的真性情。'
          },
          { name: '兰州剪纸', level: '市级非遗', description: '一把剪刀一张纸，剪出兰州风土人情，质朴生动、民俗气息浓郁。', image: 'C:\\Users\\MECHREVO\\OneDrive\\Desktop\\社会实践网站\\image\\剪纸.png', icon: '✂️',
            intro: '兰州剪纸是兰州市级非物质文化遗产，以红纸为主要材料，用剪刀剪出花鸟、人物、吉祥纹样等图案。兰州剪纸融合了甘肃多民族的艺术特色，风格粗犷中见细腻，题材贴近日常生活，节日婚庆时家家户户贴剪纸是兰州人延续至今的传统习俗。',
            process: '在传承人的工作台上，我们每人领到一张红纸和一把小剪刀。传承人教我们剪最简单的"福"字团花——先折纸再画线，最后沿线条剪。看起来简单，我们剪了将近一个小时，剪出来的福字胖的胖瘦的瘦，没有一个是端正的。传承人逐一帮我们修整，剪刀在她手里像有了生命。',
            feeling: '剪刀在红纸上沙沙地响，整个房间安静得只能听到呼吸声。传承人今年72岁，手指仍然灵巧异常。她说"剪纸就是修心，急不得"。我们剪得满头大汗时，才真正理解了一个简单"福"字背后需要的沉静与耐心。那一刻我们明白：非遗传承，是一件需要慢下来才能做好的事。'
          }
        ],
        practicePhotos: [
          { label: '观看秦腔演出', image: 'C:\\Users\\MECHREVO\\OneDrive\\Desktop\\社会实践网站\\image\\秦腔演出.png' },
          { label: '世界上最大的太平鼓', image:'C:\\Users\\MECHREVO\\OneDrive\\Desktop\\社会实践网站\\image\\世纪太平鼓.png' },
          { label: '参观岳老师泥塑馆', image: 'C:\\Users\\MECHREVO\\OneDrive\\Desktop\\社会实践网站\\image\\泥塑.jpg' },
          { label: '参观文化遗产博物馆', image: 'C:\\Users\\MECHREVO\\OneDrive\\Desktop\\社会实践网站\\image\\兰州秦腔.jpg' }
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
        heroImage: 'image\\临夏.jpg',
        description: '花儿之乡，彩陶故里，河州文化发源地',
        surveyAreas: [
          { name: '临夏州博物馆', description: '马家窑彩陶 · 齐家玉器 · 黄河上游文明', image: 'C:\\Users\\MECHREVO\\OneDrive\\Desktop\\社会实践网站\\image\\临夏博物馆.jpg',
            intro: '临夏州博物馆以马家窑彩陶、齐家文化玉器著称，馆藏彩陶数量居全国地市级博物馆之首，集中展现了黄河上游先民的艺术创造力与智慧。',
            process: '我们参观了彩陶展、陶器展和玉器展，认真观察纹样细节，凑近玻璃柜想看清几千年前的笔触。随后采访副研究馆员马玲，交流博物馆发展与文化创新，初步达成合作——博物馆信息将接入我们的小程序。',
            feeling: '彩陶上的漩涡纹、水波纹是先民对黄河的理解与敬畏。马老师的分享让我们看到博物馆正主动走向年轻人。我们的小程序能参与其中，哪怕只是一小步，也让人觉得这趟实践有了实打实的意义。'
          },
          { name: '八坊十三巷', description: '4A景区 · 回族民居 · 非遗活态传承', image: 'image\\八分十三乡.jpg',
            intro: '八坊十三巷是临夏4A级景区，集中体现了回族传统民居建筑风格与非物质文化遗产的活态传承，砖雕、刺绣、盖碗茶等非遗项目在此有机融入日常生活。',
            process: '我们在巷子里分散行动，采访居民和游客。有人赶路不愿停，也有人很认真地聊。游客说盖碗茶"每一步都是文化"，老奶奶说看到年轻人关心刺绣心里高兴。但也遇到不少年轻人完全不了解非遗，让我们意识到传播还有很长的路要走。',
            feeling: '非遗就活在茶馆里、绣品店里、居民饭桌上。游客的好奇与居民的坚守，让这些古老技艺有了传承的温度。巷子里的每一块砖雕、每一碗盖碗茶，都在默默讲述着河州故事。'
          },
          { name: '红园', description: '传统园林 · 武术传承 · 八门拳活态基地', image: 'image\\红原.png',
            intro: '红园是临夏传统园林式公园，也是八门拳等传统武术的活态传承基地。八门拳以动作干脆利落、攻防兼备著称，是临夏"武术之乡"的重要文化遗产。',
            process: '采访多位八门拳老师傅。他们感叹临夏"武术之乡"的名头还在，但武术传承靠家族血脉，外人难学，现在的孩子都玩手机。随后观摩演练，动作干脆利落。我们决定以八门拳为基础创编一套简易武术操，老师傅们很支持。',
            feeling: '老师傅们的无奈让人触动。他们练了一辈子，不想让手艺断在自己手里。我们编的武术操虽然简单，但至少能让更多人先动起来、先感兴趣。传承不是守住老东西，是让老东西长出新的枝叶。'
          }
        ],
        heritageItems: [
          { name: '河州刺绣', level: '省级非遗', description: '针法细腻、色彩明快，承载回族妇女的生活情感与审美。', image: 'image\\刺绣.jpg', icon: '🧵',
            intro: '河州刺绣针法细腻、色彩明快，是临夏地区最具代表性的传统刺绣技艺之一，承载着回族妇女的生活情感与审美追求。',
            process: '在八坊民俗馆采访传承人马建新。他讲述刺绣历史与困境——会绣的人越来越老，年轻人坐不住。他现场演示平针绣、剁绣，并手把手教我们体验。我们捏针的手都在抖，绣得歪歪扭扭，他一直笑着说"不错不错"。',
            feeling: '马老师手指粗糙但捏针极稳，他说手艺是"从心里长出来的"。体验之后我们互相看着各自歪扭的"作品"，笑完之后是深深的敬佩。非遗传承不是喊口号，是一针一线熬出来的。'
          },
          { name: '临夏酿皮子', level: '省级非遗', description: '回族风味小吃，制作工艺讲究，料汁配方代代相传。', image: 'image\\酿皮子.png', icon: '🍜',
            intro: '临夏酿皮子是回族风味小吃，制作工艺讲究，从选料到调料都有严格门道，料汁配方代代相传，从不外传。',
            process: '跟随传承人马鸿儒来到老沙酿皮子店。他讲解选料、调料的门道，说料汁配方从不外传。介绍完后亲手做给我们品尝。我们埋头猛吃，连汤都没剩。',
            feeling: '马老师几十年如一日凌晨起来做皮子，从没觉得烦。他说"大家爱吃，我就高兴"。那一碗酿皮子，吃出的不只是香味，更是一份几十年如一日的坚守。'
          },
          { name: '蛋雕', level: '市级非遗', description: '在薄如蝉翼的蛋壳上雕刻，讲究极致的耐心与力度。', image: 'image\\蛋雕.jpg', icon: '🥚',
            intro: '蛋雕以蛋壳为载体，在薄如蝉翼的壳面上雕刻图案，讲究极致的耐心与力度掌控，稍一用力就会前功尽弃。',
            process: '参观蛋雕工艺馆，满墙作品精致得让人不敢大声说话。工作人员现场演示从勾线到镂刻的全过程，十分钟刻出一只小鸟，手稳得像机器。',
            feeling: '蛋壳稍用力就碎，师傅的手却稳得不可思议。问他练了多久，他说"十几年"。轻描淡写的一句话，背后是多少个日夜的冷板凳。有些东西，急不来，也快不了。'
          },
          { name: '临夏砖雕', level: '国家级非遗', description: '以青砖为材料，刀笔之下生花，西北独特的建筑语言。', image: 'image\\砖雕.jpg', icon: '🧱',
            intro: '临夏砖雕是国家级非物质文化遗产，以青砖为材料，工匠以刀为笔，在砖面上雕刻花鸟、山水、几何纹样，是西北地区独特的建筑装饰语言。',
            process: '来到青韵砖雕公司，工匠们伏案以刀为笔，粉末簌簌落下。参观成品展厅，圆形砖雕如满月，方形如天地。最后去了收藏阁，老砖雕构件和古物让人大饱眼福。',
            feeling: '工匠们不怎么说话，但手在说话。青砖原本灰扑扑的，经过他们的手突然有了生命。我们摸着一块刚刻好的砖雕，指尖能感觉到深浅不一的纹路。那一刻我们懂了什么叫"匠心"。'
          },
          { name: '河州包子', level: '市级非遗', description: '传统回族面点，皮薄馅大，三代传承纯手工制作。', image: 'image\\包子.jpg', icon: '🥟',
            intro: '河州包子是临夏传统回族面点，以皮薄馅大、纯手工制作为特色，黎尕松包子店已传承三代，是临夏人舌尖上的记忆。',
            process: '走访黎尕松包子店，蒸笼打开热气裹着肉香扑面而来。店主讲述三代传承的历史，带我们观摩和面、捏褶全过程。我们协助整理申遗材料，并受邀拍摄宣传视频。',
            feeling: '店主说"不想让这个味道在我这代没了"。那天我们吃了好几个包子，汤汁烫嘴也舍不得停。帮他整理材料时一字一句斟酌，觉得这不只是完成任务，而是在守护一种味道、一段记忆。'
          },
          { name: '八门拳', level: '省级非遗', description: '临夏传统武术，动作干脆利落、攻防兼备，传承百年。', image: 'image\\把门券.png', icon: '🥋',
            intro: '八门拳是临夏传统武术，以动作干脆利落、攻防兼备著称，传承已逾百年，是临夏"武术之乡"的核心文化遗产。',
            process: '在红园观摩八门拳传承人演练，一招一式干净利落。老师傅感叹现在练武的年轻人越来越少，家族传承模式难以为继。我们以八门拳动作为基础，创编了一套简易武术操，获得老师傅们的认可和支持。',
            feeling: '武术不只是打打杀杀，它是一套身体哲学。师傅演练时眼神里的那股精神气，让人肃然起敬。我们编的武术操虽然简化了许多，但师傅说"能把人带动起来就是好事"。传承的第一步，永远是让更多人先看见、先参与。'
          }
        ],
        practicePhotos: [
          { label: '参观临夏州博物馆', image: 'image\\临夏州博物馆.jpg' },
          { label: '采访临夏刺绣非遗传承人马老师', image: 'image\\采访2(1).jpg' },
          { label: '采访临夏博物馆老师', image: 'image\\采访1(1).jpg' },
          { label: '品尝酿皮子', image: 'image\\酿皮子.jpg' }
        ],
        practiceInfo: { province: '甘肃省', city: '临夏', date: '2026.5.13 — 5.15', teamSize: '6人团队' }
      },
      {
        id: 'tianshui',
        name: '天水',
        navQuote: '龙城飞将，麦积烟霞',
        food: { title: '天水呱呱', description: '天水特色小吃，以荞麦淀粉制成...', image: 'image\\天水.jpg' },
        culture: { title: '伏羲文化', description: '天水是伏羲故里，华夏文明发源地...', image: 'https://picsum.photos/seed/fuxi-temple/600/400' },
        heritage: '伏羲文化是中华民族精神的重要源头。',
        insight: '在天水，伏羲庙的古柏见证了千年沧桑，麦积山的微笑穿越时光。天水之行让我们理解：文化自信源于对自己文明源头的深刻认知。',
        heroImage: 'image\\天水.jpg',
        description: '羲皇故里，麦积烟雨，石窟艺术走廊',
        surveyAreas: [
          { name: '大地湾博物馆', description: '史前文明 · 彩陶源头 · 八千年前的辉煌', image: 'https://picsum.photos/seed/dadiwan-museum/600/400',
            intro: '大地湾遗址是中国新石器时代最重要的考古发现之一，距今约8000年。大地湾博物馆集中展示了大地湾遗址出土的彩陶、骨器、玉器等珍贵文物，是研究中华文明起源的重要基地。'
          }
        ],
        heritageItems: [
          { name: '彩陶（马家窑文化）', level: '国家级非遗', description: '马家窑文化彩陶巅峰之作，纹样精美被誉为史前艺术瑰宝。', image: 'https://picsum.photos/seed/majiayao-caitao/400/300', icon: '🏺',
            intro: '马家窑文化彩陶是中国新石器时代彩陶艺术的巅峰，以漩涡纹、网格纹、蛙纹等精美纹样著称。天水大地湾遗址出土的彩陶，将中国彩陶文化的历史向前推进了数千年。'
          }
        ],
        practicePhotos: [
          { label: '参观伏羲庙', image: 'https://picsum.photos/seed/practice-tianshui1/600/400' },
          { label: '登临麦积山', image: 'https://picsum.photos/seed/practice-tianshui2/400/300' },
          { label: '观摩雕漆工艺', image: 'https://picsum.photos/seed/practice-tianshui3/400/300' },
          { label: '走访古城民居', image: 'https://picsum.photos/seed/practice-tianshui4/400/300' }
        ],
        practiceInfo: { province: '甘肃省', city: '天水', date: '2026.5.16 — 5.18', teamSize: '6人团队' }
      },
      {
        id: 'zhijiao',
        name: '支教实践',
        navQuote: '以文化人，薪火相传',
        heroImage: 'image/支教.jpg',
        description: '秦安王尹镇中心小学 · 非遗文化支教课堂 · 让传统文化在孩子们心中生根发芽',
        isTeaching: true,
        teachingActivities: [
          { name: '砖雕与蛋雕文化宣传课', description: '用图片视频展示砖雕蛋雕工艺，带仿制品让孩子们近距离感受非遗之美。', image: 'image/支教1(1).jpg',
            process: '用图片和视频展示砖雕、蛋雕工艺，带仿制品和样品让孩子们传看。孩子们看到蛋壳上能刻出图案，都瞪大了眼睛。有个男孩拿到蛋雕手都在抖，旁边同学喊"你小心点别捏碎了"。提问环节他们争着举手，问"蛋壳不会破吗""砖雕要用什么刀"。',
            feeling: '不少孩子家里就有砖雕老房子，只是之前不知道那叫"非遗"。当看到他们小心翼翼捧着样品、眼睛里全是好奇的时候，我们觉得这堂课值了。我们要做的，就是帮他们认出它、记住它。'
          },
          { name: '八门拳武术操', description: '改编简易武术操，操场教学，孩子们从歪歪扭扭到整齐有力。', image: 'image/支教2(1).jpg',
            process: '在操场教孩子们我们改编的武术操。先完整打了一遍示范，有男生当场喊"好帅"。从歪歪扭扭到有模有样，练到第三遍整体已经整齐了。最后分组比赛，孩子们满头大汗但没人喊累。一个小女孩问"学了可以保护妈妈吗"，然后特别认真地继续练。',
            feeling: '孩子们对"打拳"有天生的热情。那套操在我们手里是健身，在她手里是一份力量。看着他们在操场上喊口号的样子，我们觉得八门拳真的在这里"活"了起来。'
          },
          { name: '泥塑彩陶体验课', description: '用橡皮泥代替陶泥，讲彩陶纹样后让孩子自由创作，脑洞大开。', image: 'image/支教3(1).jpg',
            process: '用橡皮泥代替陶泥，先讲彩陶纹样，然后让孩子们捏器型、刻纹样。孩子们脑洞大开，有人捏"彩陶心脏"，有人在碗底刻笑脸。一个小男孩把漩涡纹和奥特曼变身器结合，别人笑他，他很认真地说："古代人可以画漩涡，我为什么不能画奥特曼？"',
            feeling: '传统和童心之间没有墙。让孩子们用自己的方式重新表达，也许比复制粘贴更接近"活态传承"。那些歪歪扭扭的橡皮泥作品，拍出来五颜六色的，特别热闹。'
          },
          { name: '非遗文化大富翁游戏', description: '自主设计桌游，掷骰子抽知识问答和任务卡，寓教于乐学非遗。', image: 'image/支教4(1).jpg',
            process: '玩我们自主设计的桌游，掷骰子走格子，抽知识问答、任务挑战等卡片。知识问答考非遗知识，任务卡上有"模仿蛋雕师傅动作"之类的内容。抽到的人捏着空气认真"刻"，全班笑成一团。一节课下来，孩子们把非遗项目名字记得比我们还熟。',
            feeling: '有个小姑娘下课后跑来说"以后想去临夏看真的砖雕"。我们几个队员对视一眼——几十个通宵设计这个游戏，值了。寓教于乐不是空话，笑声里主动去了解，传承就已经发生了。'
          },
          { name: '河州刺绣与剪纸体验课', description: '一针一线学刺绣，一剪一纸做窗花，让孩子们亲手体验传统手工艺。', image: 'image/支教5(1).jpg',
            process: '用儿童刺绣材料包学刺绣。我们提前穿好针线，孩子们只需要在绣绷上绣简单线条。很多孩子不会拿针，我们一个一个手把手教。有个小男孩手指粗捏不住，急得脸都红了，换了大针才慢慢找到感觉。剪纸部分相对顺利，剪出的窗花贴在窗户上展示。',
            feeling: '针线活儿对很多孩子是陌生的，尤其是男孩子一开始各种抗拒。但当他们绣出一朵小花、一颗小星星时，脸上的成就感藏都藏不住。非遗的种子，就是在这样笨拙而认真的第一次尝试中种下的。'
          }
        ],
        practiceInfo: { province: '甘肃省', city: '秦安王尹镇', date: '2026.5.19 — 5.20', teamSize: '6人团队' }
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
