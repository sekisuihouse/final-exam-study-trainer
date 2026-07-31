const HISTORY_LESSONS = [
  {
    "lesson": 1,
    "title": "理系と歴史の交差点",
    "questions": [
      {
        "number": 1,
        "actual": false,
        "prompt": "前期成績に占めるリフレクションシートの割合は何％か。",
        "answer": "20％",
        "source": "（p.3）",
        "aliases": [
          "20％"
        ]
      },
      {
        "number": 2,
        "actual": false,
        "prompt": "前期成績に占める中間レポートの割合は何％か。",
        "answer": "30％",
        "source": "（p.3）",
        "aliases": [
          "30％"
        ]
      },
      {
        "number": 3,
        "actual": false,
        "prompt": "前期成績に占める期末試験の割合は何％か。",
        "answer": "50％",
        "source": "（p.3）",
        "aliases": [
          "50％"
        ]
      },
      {
        "number": 4,
        "actual": false,
        "prompt": "この授業で、技術や表現は何の中で捉えるとされているか。",
        "answer": "社会の中",
        "source": "（p.4）",
        "aliases": [
          "社会の中"
        ]
      },
      {
        "number": 5,
        "actual": false,
        "prompt": "現在のテクノロジーを考える際に重視するものは何か。",
        "answer": "歴史的な背景",
        "source": "（p.4）",
        "aliases": [
          "歴史的な背景"
        ]
      },
      {
        "number": 6,
        "actual": false,
        "prompt": "DP4-②の名称は何か。",
        "answer": "構造的思考",
        "source": "（p.5）",
        "aliases": [
          "構造的思考"
        ]
      },
      {
        "number": 7,
        "actual": false,
        "prompt": "古代ギリシャ語で「技術」を意味する語は何か。",
        "answer": "テクネー",
        "source": "（p.6）",
        "aliases": [
          "テクネー"
        ]
      },
      {
        "number": 8,
        "actual": false,
        "prompt": "プラトンが『ゴルギアス』で示した技術の条件は何か。",
        "answer": "本質について理論的知識（ロゴス）を持つこと",
        "source": "（p.6）",
        "aliases": [
          "本質について理論的知識（ロゴス）を持つこと",
          "本質について理論的知識を持つこと"
        ]
      },
      {
        "number": 9,
        "actual": false,
        "prompt": "単に慣れて上手になることを、資料では何と区別しているか。",
        "answer": "仕組みを理解して応用できる技術",
        "source": "（p.6）",
        "aliases": [
          "仕組みを理解して応用できる技術"
        ]
      },
      {
        "number": 10,
        "actual": false,
        "prompt": "アリストテレスは技術をどのような能力と捉えたか。",
        "answer": "学問的かつ経験的で、普遍的・個別的な真理を認識する能力",
        "source": "（p.6）",
        "aliases": [
          "学問的かつ経験的で、普遍的・個別的な真理を認識する能力",
          "学問的かつ経験的で",
          "普遍的",
          "個別的な真理を認識する能力"
        ]
      },
      {
        "number": 11,
        "actual": false,
        "prompt": "ハイデガーは技術をどのような力と表現したか。",
        "answer": "真実を明らかにする力",
        "source": "（p.6）",
        "aliases": [
          "真実を明らかにする力"
        ]
      },
      {
        "number": 12,
        "actual": false,
        "prompt": "現代の技術観では、技術は主に何をするものと考えられやすいか。",
        "answer": "モノや仕組みを作るもの",
        "source": "（p.8）",
        "aliases": [
          "モノや仕組みを作るもの"
        ]
      },
      {
        "number": 13,
        "actual": false,
        "prompt": "古代ギリシャの技術観では、作る前に何を考えることが重視されたか。",
        "answer": "なぜ作るのか、どのように作るのか",
        "source": "（p.8）",
        "aliases": [
          "なぜ作るのか、どのように作るのか",
          "なぜ作るのか",
          "どのように作るのか"
        ]
      },
      {
        "number": 14,
        "actual": false,
        "prompt": "古代ギリシャの技術に含まれた三つの要素は何か。",
        "answer": "理論・経験・価値判断",
        "source": "（p.8）",
        "aliases": [
          "理論・経験・価値判断",
          "理論",
          "経験",
          "価値判断"
        ]
      },
      {
        "number": 15,
        "actual": false,
        "prompt": "古代の技術概念には工学以外にどのような分野が含まれたか。",
        "answer": "医術・建築・芸術",
        "source": "（p.8）",
        "aliases": [
          "医術・建築・芸術",
          "医術",
          "建築",
          "芸術"
        ]
      },
      {
        "number": 16,
        "actual": false,
        "prompt": "「テクノロジー」という学問的概念が生まれた大学はどこか。",
        "answer": "18世紀ドイツのゲッティンゲン大学",
        "source": "（p.9）",
        "aliases": [
          "18世紀ドイツのゲッティンゲン大学"
        ]
      },
      {
        "number": 17,
        "actual": false,
        "prompt": "ゲッティンゲン大学でテクノロジーの源流となった授業は何か。",
        "answer": "技芸史（アートの歴史）",
        "source": "（p.9）",
        "aliases": [
          "技芸史（アートの歴史）",
          "技芸史"
        ]
      },
      {
        "number": 18,
        "actual": false,
        "prompt": "テクノロジー成立に影響した二つの思想的背景は何か。",
        "answer": "啓蒙主義と機械論的自然観",
        "source": "（p.9）",
        "aliases": [
          "啓蒙主義と機械論的自然観"
        ]
      },
      {
        "number": 19,
        "actual": false,
        "prompt": "テクノロジーとエンジニアリングの基本的な違いは何か。",
        "answer": "テクノロジーは技術の歴史・意味・社会との関係を考え、エンジニアリングは実際にモノや仕組みを作り実用化する",
        "source": "（p.10）",
        "aliases": [
          "テクノロジーは技術の歴史・意味・社会との関係を考え、エンジニアリングは実際にモノや仕組みを作り実用化する",
          "テクノロジーは技術の歴史",
          "意味",
          "社会との関係を考え",
          "エンジニアリングは実際にモノや仕組みを作り実用化する"
        ]
      },
      {
        "number": 20,
        "actual": false,
        "prompt": "エンジニアリングの語源となったラテン語は何か。",
        "answer": "ingenium（発明・才能）",
        "source": "（p.10）",
        "aliases": [
          "ingenium（発明・才能）",
          "ingenium",
          "ingenium（発明",
          "才能）"
        ]
      },
      {
        "number": 21,
        "actual": false,
        "prompt": "技術は単なる便利な道具ではなく、何と結びついているか。",
        "answer": "社会の価値観や時代の制約",
        "source": "（p.11）",
        "aliases": [
          "社会の価値観や時代の制約"
        ]
      },
      {
        "number": 22,
        "actual": false,
        "prompt": "正しい科学理論でも受け入れられない背景を考える代表例は何か。",
        "answer": "天動説と地動説の対立",
        "source": "（p.13）",
        "aliases": [
          "天動説と地動説の対立"
        ]
      },
      {
        "number": 23,
        "actual": false,
        "prompt": "写真・映像技術は記録以外にどのように使われ得るか。",
        "answer": "記録を操作し、プロパガンダを行う手段",
        "source": "（p.14）",
        "aliases": [
          "記録を操作し、プロパガンダを行う手段",
          "記録を操作し",
          "プロパガンダを行う手段"
        ]
      },
      {
        "number": 24,
        "actual": false,
        "prompt": "UIやスマートフォンの「自然に使える」設計は人に何をする可能性があるか。",
        "answer": "人の行動を導く",
        "source": "（p.15）",
        "aliases": [
          "人の行動を導く"
        ]
      },
      {
        "number": 25,
        "actual": false,
        "prompt": "未来を作る立場の人に歴史が必要な理由を一言で答えよ。",
        "answer": "過去の技術と社会の関係を知り、同じ失敗を避けながら未来の影響を考えるため",
        "source": "（p.16）",
        "aliases": [
          "過去の技術と社会の関係を知り、同じ失敗を避けながら未来の影響を考えるため",
          "過去の技術と社会の関係を知り",
          "同じ失敗を避けながら未来の影響を考えるため"
        ]
      }
    ]
  },
  {
    "lesson": 2,
    "title": "古代文明と技術",
    "questions": [
      {
        "number": 1,
        "actual": false,
        "prompt": "古代の技術は自然への対処だけでなく、何と深く結びついていたか。",
        "answer": "社会の仕組みや権力のあり方",
        "source": "（p.6）",
        "aliases": [
          "社会の仕組みや権力のあり方"
        ]
      },
      {
        "number": 2,
        "actual": false,
        "prompt": "第2回で扱われた古代の三つの技術分野は何か。",
        "answer": "測量・天文・建築",
        "source": "（p.7）",
        "aliases": [
          "測量・天文・建築",
          "測量",
          "天文",
          "建築"
        ]
      },
      {
        "number": 3,
        "actual": false,
        "prompt": "「エジプトはナイルの賜物」と述べた人物は誰か。",
        "answer": "ヘロドトス",
        "source": "（p.8）",
        "aliases": [
          "ヘロドトス"
        ]
      },
      {
        "number": 4,
        "actual": false,
        "prompt": "ナイル川の氾濫によって土地に起きた問題は何か。",
        "answer": "土地の境界が消えた",
        "source": "（p.11）",
        "aliases": [
          "土地の境界が消えた"
        ]
      },
      {
        "number": 5,
        "actual": false,
        "prompt": "ナイル川の氾濫後に必要となった技術は何か。",
        "answer": "土地の再測量",
        "source": "（p.11）",
        "aliases": [
          "土地の再測量"
        ]
      },
      {
        "number": 6,
        "actual": false,
        "prompt": "測量技術の発達は、農業以外にどのような国家活動につながったか。",
        "answer": "課税と統治",
        "source": "（p.11）",
        "aliases": [
          "課税と統治"
        ]
      },
      {
        "number": 7,
        "actual": false,
        "prompt": "ナイル川流域で行われた代表的な農業は何か。",
        "answer": "灌漑農業",
        "source": "（p.12）",
        "aliases": [
          "灌漑農業"
        ]
      },
      {
        "number": 8,
        "actual": false,
        "prompt": "ナイル川流域で用いられた灌漑方式は何か。",
        "answer": "貯留式灌漑",
        "source": "（p.12）",
        "aliases": [
          "貯留式灌漑"
        ]
      },
      {
        "number": 9,
        "actual": false,
        "prompt": "貯留式灌漑にはどのような土壌上の利点があったか。",
        "answer": "塩害を防ぐこと",
        "source": "（p.12）",
        "aliases": [
          "塩害を防ぐこと"
        ]
      },
      {
        "number": 10,
        "actual": false,
        "prompt": "自然を測り予測する営みは、後のどの学問の発展につながったか。",
        "answer": "数学と天文学",
        "source": "（p.13）",
        "aliases": [
          "数学と天文学"
        ]
      },
      {
        "number": 11,
        "actual": false,
        "prompt": "関孝和とニュートン、ライプニッツに共通する数学上のテーマは何か。",
        "answer": "微分積分法",
        "source": "（p.15）",
        "aliases": [
          "微分積分法"
        ]
      },
      {
        "number": 12,
        "actual": false,
        "prompt": "ニュートンとは別に微積分法を発見し、現在も使われる記法を残した人物は誰か。",
        "answer": "ライプニッツ",
        "source": "（p.15）",
        "aliases": [
          "ライプニッツ"
        ]
      },
      {
        "number": 13,
        "actual": false,
        "prompt": "古代エジプトで暦が必要とされた最大の農業上の理由は何か。",
        "answer": "種まきと収穫の時期を判断するため",
        "source": "（p.16）",
        "aliases": [
          "種まきと収穫の時期を判断するため"
        ]
      },
      {
        "number": 14,
        "actual": false,
        "prompt": "古代エジプト暦の1年は何日だったか。",
        "answer": "365日",
        "source": "（p.16）",
        "aliases": [
          "365日"
        ]
      },
      {
        "number": 15,
        "actual": false,
        "prompt": "古代エジプト暦は何暦か。",
        "answer": "太陽暦",
        "source": "（p.16）",
        "aliases": [
          "太陽暦"
        ]
      },
      {
        "number": 16,
        "actual": false,
        "prompt": "ナイル川の氾濫の時期と動きが一致すると観察された恒星は何か。",
        "answer": "シリウス",
        "source": "（p.16）",
        "aliases": [
          "シリウス"
        ]
      },
      {
        "number": 17,
        "actual": false,
        "prompt": "天文観測から社会制度が形成される流れを三段階で答えよ。",
        "answer": "天文観測→自然現象の予測→社会制度の構築",
        "source": "（p.16）",
        "aliases": [
          "天文観測→自然現象の予測→社会制度の構築"
        ]
      },
      {
        "number": 18,
        "actual": false,
        "prompt": "暦の誕生は、測量・天文以外に何の基礎となったか。",
        "answer": "統治システム",
        "source": "（p.16）",
        "aliases": [
          "統治システム"
        ]
      },
      {
        "number": 19,
        "actual": false,
        "prompt": "江戸時代前期に天体観測や暦の改訂で知られる人物は誰か。",
        "answer": "渋川春海",
        "source": "（p.17）",
        "aliases": [
          "渋川春海"
        ]
      },
      {
        "number": 20,
        "actual": false,
        "prompt": "古代エジプトでは王の魂は死後何になると信じられていたか。",
        "answer": "星",
        "source": "（p.18）",
        "aliases": [
          "星"
        ]
      },
      {
        "number": 21,
        "actual": false,
        "prompt": "ファラオが死後に一体化すると信じられた神は誰か。",
        "answer": "オシリス神",
        "source": "（p.18）",
        "aliases": [
          "オシリス神"
        ]
      },
      {
        "number": 22,
        "actual": false,
        "prompt": "オシリス神が宿ると考えられた星座は何か。",
        "answer": "オリオン座",
        "source": "（p.18）",
        "aliases": [
          "オリオン座"
        ]
      },
      {
        "number": 23,
        "actual": false,
        "prompt": "ギザの大ピラミッドを建てた王は誰か。",
        "answer": "クフ王",
        "source": "（p.18）",
        "aliases": [
          "クフ王"
        ]
      },
      {
        "number": 24,
        "actual": false,
        "prompt": "クフ王のピラミッド南側の通気孔が向くとされる天体は何か。",
        "answer": "紀元前2500年頃のオリオン座",
        "source": "（p.18）",
        "aliases": [
          "紀元前2500年頃のオリオン座"
        ]
      },
      {
        "number": 25,
        "actual": false,
        "prompt": "ギザの三大ピラミッドを建てた三王は誰か。",
        "answer": "クフ王・カフラー王・メンカウラー王",
        "source": "（p.19）",
        "aliases": [
          "クフ王・カフラー王・メンカウラー王",
          "クフ王",
          "カフラー王",
          "メンカウラー王"
        ]
      },
      {
        "number": 26,
        "actual": false,
        "prompt": "ギザの三大ピラミッドの配置は何に似ると主張されたか。",
        "answer": "オリオン座の三つ星",
        "source": "（p.19）",
        "aliases": [
          "オリオン座の三つ星"
        ]
      },
      {
        "number": 27,
        "actual": false,
        "prompt": "ピラミッドとオリオン座の対応説を主張した人物は誰か。",
        "answer": "ロバート・ボーヴァル（Robert Bauval）ら",
        "source": "（p.19）",
        "aliases": [
          "ロバート・ボーヴァル（Robert Bauval）ら",
          "ロバート・ボーヴァルら",
          "ロバート",
          "ボーヴァル（Robert Bauval）ら"
        ]
      },
      {
        "number": 28,
        "actual": false,
        "prompt": "ピラミッドの星との対応説は学術的に確定しているか。",
        "answer": "確定しておらず、議論がある",
        "source": "（p.18-19）",
        "aliases": [
          "確定しておらず、議論がある",
          "確定しておらず",
          "議論がある"
        ]
      },
      {
        "number": 29,
        "actual": false,
        "prompt": "古代建築は自然の秩序と何を結びつける装置だったか。",
        "answer": "社会の秩序",
        "source": "（p.20）",
        "aliases": [
          "社会の秩序"
        ]
      },
      {
        "number": 30,
        "actual": false,
        "prompt": "古代都市で神殿や王宮が中心に置かれた理由は何か。",
        "answer": "宗教・政治・経済・学問が集まる中枢だったため",
        "source": "（p.21）",
        "aliases": [
          "宗教・政治・経済・学問が集まる中枢だったため",
          "宗教",
          "政治",
          "経済",
          "学問が集まる中枢だったため"
        ]
      },
      {
        "number": 31,
        "actual": false,
        "prompt": "古代都市の住宅地区は何によって分けられたか。",
        "answer": "地位や職業",
        "source": "（p.21-22）",
        "aliases": [
          "地位や職業"
        ]
      },
      {
        "number": 32,
        "actual": false,
        "prompt": "古代都市で王宮と神殿を近接させる配置は何を示したか。",
        "answer": "王が神の代理であること",
        "source": "（p.22）",
        "aliases": [
          "王が神の代理であること"
        ]
      },
      {
        "number": 33,
        "actual": false,
        "prompt": "古代エジプトの神殿は一般にどの方角を向いたか。",
        "answer": "東",
        "source": "（p.22）",
        "aliases": [
          "東"
        ]
      },
      {
        "number": 34,
        "actual": false,
        "prompt": "墓地やピラミッドはナイル川のどちら側に置かれたか。",
        "answer": "西岸",
        "source": "（p.22）",
        "aliases": [
          "西岸"
        ]
      },
      {
        "number": 35,
        "actual": false,
        "prompt": "古代都市の道は何と連動して設計されたか。",
        "answer": "儀式行列（プロセッション）",
        "source": "（p.22）",
        "aliases": [
          "儀式行列（プロセッション）",
          "儀式行列"
        ]
      },
      {
        "number": 36,
        "actual": true,
        "prompt": "古代の都市設計や建築が持っていた三つの意味は何か。",
        "answer": "神や宗教への信仰、社会の秩序や身分制度、自然との関係を表すこと",
        "source": "（第3回p.5）",
        "aliases": [
          "神や宗教への信仰、社会の秩序や身分制度、自然との関係を表すこと",
          "神や宗教への信仰",
          "社会の秩序や身分制度",
          "自然との関係を表すこと"
        ]
      },
      {
        "number": 37,
        "actual": false,
        "prompt": "古代技術の二つの主要な役割は何か。",
        "answer": "自然に対処することと、社会や権力を形づくること",
        "source": "（p.29）",
        "aliases": [
          "自然に対処することと、社会や権力を形づくること",
          "自然に対処することと",
          "社会や権力を形づくること"
        ]
      }
    ]
  },
  {
    "lesson": 3,
    "title": "中世の芸術と力",
    "questions": [
      {
        "number": 1,
        "actual": false,
        "prompt": "建築が「無言のメッセージ」と呼ばれる理由は何か。",
        "answer": "形・高さ・光・素材・場所によって社会の価値観や意図を伝えるから",
        "source": "（p.8）",
        "aliases": [
          "形・高さ・光・素材・場所によって社会の価値観や意図を伝えるから",
          "高さ",
          "素材",
          "場所によって社会の価値観や意図を伝えるから"
        ]
      },
      {
        "number": 2,
        "actual": false,
        "prompt": "中世の教会建築が見せる三つの力は何か。",
        "answer": "神の力・教会の権威・都市の誇り",
        "source": "（p.10）",
        "aliases": [
          "神の力・教会の権威・都市の誇り",
          "神の力",
          "教会の権威",
          "都市の誇り"
        ]
      },
      {
        "number": 3,
        "actual": true,
        "prompt": "ゴシック教会のガラスと空へ伸びる尖ったアーチは、見る人に何を感じさせたか。",
        "answer": "神の世界に近づく感覚や神聖さ",
        "source": "（第4回p.4）",
        "aliases": [
          "神の世界に近づく感覚や神聖さ"
        ]
      },
      {
        "number": 4,
        "actual": true,
        "prompt": "中世ヨーロッパ社会における教会と国王・領主の役割分担は何か。",
        "answer": "教会は信仰や救済の権威を持ち、国王・領主は土地・軍事・政治の力を持った",
        "source": "（第4回p.5）",
        "aliases": [
          "教会は信仰や救済の権威を持ち、国王・領主は土地・軍事・政治の力を持った",
          "教会は信仰や救済の権威を持ち",
          "国王",
          "領主は土地",
          "軍事",
          "政治の力を持った"
        ]
      },
      {
        "number": 5,
        "actual": false,
        "prompt": "国会議事堂の高さ・素材・左右対称は何を表現するか。",
        "answer": "国家の威厳と正当性",
        "source": "（p.12）",
        "aliases": [
          "国家の威厳と正当性"
        ]
      },
      {
        "number": 6,
        "actual": false,
        "prompt": "国会議事堂の二院制構造や開放的正面は何を表現するか。",
        "answer": "民主主義と議論の場",
        "source": "（p.12）",
        "aliases": [
          "民主主義と議論の場"
        ]
      },
      {
        "number": 7,
        "actual": false,
        "prompt": "中世ヨーロッパは一般にいつからいつまでか。",
        "answer": "5世紀後半から15世紀末",
        "source": "（p.16）",
        "aliases": [
          "5世紀後半から15世紀末"
        ]
      },
      {
        "number": 8,
        "actual": false,
        "prompt": "西ローマ帝国が滅亡した年は何年か。",
        "answer": "476年",
        "source": "（p.16）",
        "aliases": [
          "476年"
        ]
      },
      {
        "number": 9,
        "actual": false,
        "prompt": "初期中世は何世紀から何世紀までか。",
        "answer": "5世紀から10世紀",
        "source": "（p.16）",
        "aliases": [
          "5世紀から10世紀"
        ]
      },
      {
        "number": 10,
        "actual": false,
        "prompt": "盛期中世は何世紀から何世紀までか。",
        "answer": "11世紀から13世紀",
        "source": "（p.16）",
        "aliases": [
          "11世紀から13世紀"
        ]
      },
      {
        "number": 11,
        "actual": false,
        "prompt": "後期中世は何世紀から何世紀までか。",
        "answer": "14世紀から15世紀",
        "source": "（p.16）",
        "aliases": [
          "14世紀から15世紀"
        ]
      },
      {
        "number": 12,
        "actual": false,
        "prompt": "盛期中世の代表的な出来事を三つ答えよ。",
        "answer": "十字軍・大学の誕生・封建制度の発展",
        "source": "（p.16）",
        "aliases": [
          "十字軍・大学の誕生・封建制度の発展",
          "十字軍",
          "大学の誕生",
          "封建制度の発展"
        ]
      },
      {
        "number": 13,
        "actual": false,
        "prompt": "後期中世に教会の権威を低下させた代表的な災厄は何か。",
        "answer": "ペストの流行",
        "source": "（p.16）",
        "aliases": [
          "ペストの流行"
        ]
      },
      {
        "number": 14,
        "actual": false,
        "prompt": "中世の終わりを示す代表的な二つの年は何年か。",
        "answer": "1453年と1492年",
        "source": "（p.16）",
        "aliases": [
          "1453年と1492年"
        ]
      },
      {
        "number": 15,
        "actual": false,
        "prompt": "1453年に滅亡した帝国は何か。",
        "answer": "ビザンツ帝国",
        "source": "（p.16）",
        "aliases": [
          "ビザンツ帝国"
        ]
      },
      {
        "number": 16,
        "actual": false,
        "prompt": "1492年の世界史上の出来事は何か。",
        "answer": "コロンブスのアメリカ到達",
        "source": "（p.16）",
        "aliases": [
          "コロンブスのアメリカ到達"
        ]
      },
      {
        "number": 17,
        "actual": false,
        "prompt": "中世ヨーロッパ社会の中心となった宗教は何か。",
        "answer": "キリスト教",
        "source": "（p.17）",
        "aliases": [
          "キリスト教"
        ]
      },
      {
        "number": 18,
        "actual": false,
        "prompt": "中世社会で教会が人々に与えるとされたものは何か。",
        "answer": "魂の救済",
        "source": "（p.18）",
        "aliases": [
          "魂の救済"
        ]
      },
      {
        "number": 19,
        "actual": false,
        "prompt": "中世社会で世俗権力が担った三つの領域は何か。",
        "answer": "土地・軍事・政治",
        "source": "（p.18）",
        "aliases": [
          "土地・軍事・政治",
          "土地",
          "軍事",
          "政治"
        ]
      },
      {
        "number": 20,
        "actual": false,
        "prompt": "中世社会で土地を守り戦う階層は誰か。",
        "answer": "騎士・貴族",
        "source": "（p.18）",
        "aliases": [
          "騎士・貴族",
          "騎士",
          "貴族"
        ]
      },
      {
        "number": 21,
        "actual": false,
        "prompt": "中世社会で土地を耕し年貢を納めた階層は誰か。",
        "answer": "農民・農奴",
        "source": "（p.18）",
        "aliases": [
          "農民・農奴",
          "農民",
          "農奴"
        ]
      },
      {
        "number": 22,
        "actual": false,
        "prompt": "十字軍遠征の主目的は何だったか。",
        "answer": "聖地エルサレムの奪回",
        "source": "（p.19）",
        "aliases": [
          "聖地エルサレムの奪回"
        ]
      },
      {
        "number": 23,
        "actual": false,
        "prompt": "十字軍遠征はおよそどのくらい続いたか。",
        "answer": "11世紀末から約200年間",
        "source": "（p.19）",
        "aliases": [
          "11世紀末から約200年間"
        ]
      },
      {
        "number": 24,
        "actual": false,
        "prompt": "十字軍遠征が結果的に促進したものは何か。",
        "answer": "東方世界との交流と都市・商業・学問の発展",
        "source": "（p.19）",
        "aliases": [
          "東方世界との交流と都市・商業・学問の発展",
          "東方世界との交流と都市",
          "商業",
          "学問の発展"
        ]
      },
      {
        "number": 25,
        "actual": false,
        "prompt": "中世の教会や修道院が宗教以外に担った役割は何か。",
        "answer": "教育・医療・政治の拠点",
        "source": "（p.20）",
        "aliases": [
          "教育・医療・政治の拠点",
          "教育",
          "医療",
          "政治の拠点"
        ]
      },
      {
        "number": 26,
        "actual": false,
        "prompt": "中世の宗教画が「ビジュアル聖書」と呼ばれる理由は何か。",
        "answer": "文字を読めない人に聖書の教えを視覚的に伝えたから",
        "source": "（p.21）",
        "aliases": [
          "文字を読めない人に聖書の教えを視覚的に伝えたから"
        ]
      },
      {
        "number": 27,
        "actual": false,
        "prompt": "ビザンティン様式の絵画の特徴は何か。",
        "answer": "金色背景・平面的・象徴的",
        "source": "（p.23）",
        "aliases": [
          "金色背景・平面的・象徴的",
          "金色背景",
          "平面的",
          "象徴的"
        ]
      },
      {
        "number": 28,
        "actual": false,
        "prompt": "ゴシック様式の絵画の特徴は何か。",
        "answer": "装飾が豊かで、聖書の物語を丁寧に描く",
        "source": "（p.23）",
        "aliases": [
          "装飾が豊かで、聖書の物語を丁寧に描く",
          "装飾が豊かで",
          "聖書の物語を丁寧に描く"
        ]
      },
      {
        "number": 29,
        "actual": false,
        "prompt": "ルネサンス様式の絵画の特徴は何か。",
        "answer": "遠近法・写実的な人物表現・人間性の尊重",
        "source": "（p.23）",
        "aliases": [
          "遠近法・写実的な人物表現・人間性の尊重",
          "遠近法",
          "写実的な人物表現",
          "人間性の尊重"
        ]
      },
      {
        "number": 30,
        "actual": false,
        "prompt": "ルネサンスで再評価された文明は何か。",
        "answer": "古代ギリシャ・ローマ",
        "source": "（p.26）",
        "aliases": [
          "古代ギリシャ・ローマ",
          "古代ギリシャ",
          "ローマ"
        ]
      },
      {
        "number": 31,
        "actual": false,
        "prompt": "ルネサンス期に台頭した人間中心の思想を何というか。",
        "answer": "ヒューマニズム（人間中心主義）",
        "source": "（p.26）",
        "aliases": [
          "ヒューマニズム（人間中心主義）",
          "ヒューマニズム"
        ]
      },
      {
        "number": 32,
        "actual": false,
        "prompt": "ルネサンス期に芸術家の位置づけは「神の道具」から何へ変化したか。",
        "answer": "創造者",
        "source": "（p.26）",
        "aliases": [
          "創造者"
        ]
      },
      {
        "number": 33,
        "actual": false,
        "prompt": "ロマネスク様式が栄えた時期はいつ頃か。",
        "answer": "10〜12世紀頃",
        "source": "（p.27）",
        "aliases": [
          "10〜12世紀頃"
        ]
      },
      {
        "number": 34,
        "actual": false,
        "prompt": "ゴシック様式が栄えた時期はいつ頃か。",
        "answer": "12〜15世紀頃",
        "source": "（p.27）",
        "aliases": [
          "12〜15世紀頃"
        ]
      },
      {
        "number": 35,
        "actual": false,
        "prompt": "ロマネスク建築の三つの特徴は何か。",
        "answer": "半円アーチ・厚い壁・暗い内部",
        "source": "（p.27-28）",
        "aliases": [
          "半円アーチ・厚い壁・暗い内部",
          "半円アーチ",
          "厚い壁",
          "暗い内部"
        ]
      },
      {
        "number": 36,
        "actual": false,
        "prompt": "ゴシック建築の三つの特徴は何か。",
        "answer": "尖頭アーチ・高い壁・大きなステンドグラス",
        "source": "（p.27-28）",
        "aliases": [
          "尖頭アーチ・高い壁・大きなステンドグラス",
          "尖頭アーチ",
          "高い壁",
          "大きなステンドグラス"
        ]
      },
      {
        "number": 37,
        "actual": false,
        "prompt": "ゴシック建築で高い壁と大きな窓を可能にした構造は何か。",
        "answer": "飛び梁（フライング・バットレス）",
        "source": "（p.28）",
        "aliases": [
          "飛び梁（フライング・バットレス）",
          "飛び梁",
          "飛び梁（フライング",
          "バットレス）"
        ]
      },
      {
        "number": 38,
        "actual": false,
        "prompt": "ロマネスク建築の天井形式は何か。",
        "answer": "バレルヴォールト",
        "source": "（p.28）",
        "aliases": [
          "バレルヴォールト"
        ]
      },
      {
        "number": 39,
        "actual": false,
        "prompt": "ゴシック建築の天井形式は何か。",
        "answer": "リブヴォールト",
        "source": "（p.28）",
        "aliases": [
          "リブヴォールト"
        ]
      },
      {
        "number": 40,
        "actual": false,
        "prompt": "ロマネスク建築が象徴する神のイメージは何か。",
        "answer": "遠く厳格な神",
        "source": "（p.28）",
        "aliases": [
          "遠く厳格な神"
        ]
      },
      {
        "number": 41,
        "actual": false,
        "prompt": "ゴシック建築が象徴する神のイメージは何か。",
        "answer": "近く美しい神",
        "source": "（p.28）",
        "aliases": [
          "近く美しい神"
        ]
      },
      {
        "number": 42,
        "actual": false,
        "prompt": "シャルトル大聖堂の様式は何か。",
        "answer": "ゴシック様式",
        "source": "（p.36, 41）",
        "aliases": [
          "ゴシック様式"
        ]
      },
      {
        "number": 43,
        "actual": false,
        "prompt": "シャルトル大聖堂は高さと光によって何を伝えたか。",
        "answer": "神の栄光と天国の美しさ",
        "source": "（p.41）",
        "aliases": [
          "神の栄光と天国の美しさ"
        ]
      },
      {
        "number": 44,
        "actual": false,
        "prompt": "モン・サン・ミシェルの立地は何を象徴したか。",
        "answer": "神への道のりと試練",
        "source": "（p.42）",
        "aliases": [
          "神への道のりと試練"
        ]
      },
      {
        "number": 45,
        "actual": false,
        "prompt": "モン・サン・ミシェルの上下構造は何を表現したか。",
        "answer": "身分と神聖さの序列",
        "source": "（p.42）",
        "aliases": [
          "身分と神聖さの序列"
        ]
      },
      {
        "number": 46,
        "actual": false,
        "prompt": "ピサ大聖堂の様式は何か。",
        "answer": "ロマネスク様式",
        "source": "（p.38, 43）",
        "aliases": [
          "ロマネスク様式"
        ]
      },
      {
        "number": 47,
        "actual": false,
        "prompt": "ピサ大聖堂の厚い壁と丸いアーチは何を伝えたか。",
        "answer": "神の威厳と心の平安",
        "source": "（p.43）",
        "aliases": [
          "神の威厳と心の平安"
        ]
      },
      {
        "number": 48,
        "actual": false,
        "prompt": "ケルン大聖堂の建設には何年以上かかったか。",
        "answer": "600年以上",
        "source": "（p.44, 51）",
        "aliases": [
          "600年以上"
        ]
      },
      {
        "number": 49,
        "actual": false,
        "prompt": "ケルン大聖堂の圧倒的な高さは何を示したか。",
        "answer": "信仰と都市の力の結びつき",
        "source": "（p.44）",
        "aliases": [
          "信仰と都市の力の結びつき"
        ]
      },
      {
        "number": 50,
        "actual": false,
        "prompt": "サン・ピエトロ大聖堂の様式は何か。",
        "answer": "ルネサンス〜バロック様式",
        "source": "（p.40, 45）",
        "aliases": [
          "ルネサンス〜バロック様式"
        ]
      },
      {
        "number": 51,
        "actual": false,
        "prompt": "サン・ピエトロ大聖堂の巨大ドームと円形広場は何を表現したか。",
        "answer": "カトリック教会の包容力・権威・統一",
        "source": "（p.45）",
        "aliases": [
          "カトリック教会の包容力・権威・統一",
          "カトリック教会の包容力",
          "権威",
          "統一"
        ]
      },
      {
        "number": 52,
        "actual": false,
        "prompt": "建築様式の変化は何の変化を映すか。",
        "answer": "時代ごとの社会の価値観",
        "source": "（p.46）",
        "aliases": [
          "時代ごとの社会の価値観"
        ]
      }
    ]
  },
  {
    "lesson": 4,
    "title": "科学革命の衝撃",
    "questions": [
      {
        "number": 1,
        "actual": false,
        "prompt": "アリストテレスの宇宙観では、宇宙の中心にあるものは何か。",
        "answer": "静止した地球",
        "source": "（p.7）",
        "aliases": [
          "静止した地球"
        ]
      },
      {
        "number": 2,
        "actual": false,
        "prompt": "アリストテレスは完全な天体の運動を何運動と考えたか。",
        "answer": "円運動",
        "source": "（p.7）",
        "aliases": [
          "円運動"
        ]
      },
      {
        "number": 3,
        "actual": false,
        "prompt": "天動説を精密な体系としてまとめた人物は誰か。",
        "answer": "クラウディオス・プトレマイオス",
        "source": "（p.8-9）",
        "aliases": [
          "クラウディオス・プトレマイオス",
          "クラウディオス",
          "プトレマイオス"
        ]
      },
      {
        "number": 4,
        "actual": false,
        "prompt": "中世のプトレマイオス的宇宙観で、神は何の象徴だったか。",
        "answer": "秩序",
        "source": "（p.9）",
        "aliases": [
          "秩序"
        ]
      },
      {
        "number": 5,
        "actual": false,
        "prompt": "正確な星の位置が重要だった三つの実用分野は何か。",
        "answer": "占星術・航海術・暦の作成",
        "source": "（p.9）",
        "aliases": [
          "占星術・航海術・暦の作成",
          "占星術",
          "航海術",
          "暦の作成"
        ]
      },
      {
        "number": 6,
        "actual": false,
        "prompt": "コペルニクスが地動説を示した著書は何か。",
        "answer": "『天球の回転について』",
        "source": "（p.10）",
        "aliases": [
          "『天球の回転について』"
        ]
      },
      {
        "number": 7,
        "actual": false,
        "prompt": "『天球の回転について』が刊行された年は何年か。",
        "answer": "1543年",
        "source": "（p.10）",
        "aliases": [
          "1543年"
        ]
      },
      {
        "number": 8,
        "actual": false,
        "prompt": "コペルニクスが著書を死後に刊行した理由は何か。",
        "answer": "社会的波紋を避けるため",
        "source": "（p.10）",
        "aliases": [
          "社会的波紋を避けるため"
        ]
      },
      {
        "number": 9,
        "actual": false,
        "prompt": "ガリレオが望遠鏡で発見した、地球以外にも中心があることを示す証拠は何か。",
        "answer": "木星の衛星",
        "source": "（p.11）",
        "aliases": [
          "木星の衛星"
        ]
      },
      {
        "number": 10,
        "actual": false,
        "prompt": "ガリレオの月面観測は、天について何を示したか。",
        "answer": "月にはクレーターがあり、天は完全ではないこと",
        "source": "（p.11）",
        "aliases": [
          "月にはクレーターがあり、天は完全ではないこと",
          "月にはクレーターがあり",
          "天は完全ではないこと"
        ]
      },
      {
        "number": 11,
        "actual": true,
        "prompt": "ガリレオの観測が中世の宇宙観を揺るがした最大の理由は何か。",
        "answer": "地球以外にも「中心」が存在する可能性を示したから",
        "source": "（第5回p.3）",
        "aliases": [
          "地球以外にも「中心」が存在する可能性を示したから"
        ]
      },
      {
        "number": 12,
        "actual": false,
        "prompt": "16世紀半ばに「論争の時代」を形成した三人の天文学者は誰か。",
        "answer": "ティコ・ブラーエ、ヨハネス・ケプラー、ガリレオ・ガリレイ",
        "source": "（p.13）",
        "aliases": [
          "ティコ・ブラーエ、ヨハネス・ケプラー、ガリレオ・ガリレイ",
          "ティコ",
          "ブラーエ",
          "ヨハネス",
          "ケプラー",
          "ガリレオ",
          "ガリレイ"
        ]
      },
      {
        "number": 13,
        "actual": false,
        "prompt": "ティコ・ブラーエが重視したものは何か。",
        "answer": "精密な天体観測",
        "source": "（p.13）",
        "aliases": [
          "精密な天体観測"
        ]
      },
      {
        "number": 14,
        "actual": false,
        "prompt": "ケプラーが明らかにした惑星軌道の形は何か。",
        "answer": "楕円",
        "source": "（p.13のケプラー紹介）",
        "aliases": [
          "楕円"
        ]
      },
      {
        "number": 15,
        "actual": false,
        "prompt": "ガリレオが教会から批判された理由は何か。",
        "answer": "地動説が聖書に反すると考えられたため",
        "source": "（p.14）",
        "aliases": [
          "地動説が聖書に反すると考えられたため"
        ]
      },
      {
        "number": 16,
        "actual": false,
        "prompt": "ガリレオが学界から批判された理由は何か。",
        "answer": "理論が不完全だと考えられたため",
        "source": "（p.14）",
        "aliases": [
          "理論が不完全だと考えられたため"
        ]
      },
      {
        "number": 17,
        "actual": false,
        "prompt": "科学的な正しさと社会的に受け入れられることは同じか。",
        "answer": "同じではない",
        "source": "（p.14）",
        "aliases": [
          "同じではない"
        ]
      },
      {
        "number": 18,
        "actual": false,
        "prompt": "知識が受け入れられる際、内容以外に重視される二つの要素は何か。",
        "answer": "誰が語るか、どの文脈で語るか",
        "source": "（p.14）",
        "aliases": [
          "誰が語るか、どの文脈で語るか",
          "誰が語るか",
          "どの文脈で語るか"
        ]
      },
      {
        "number": 19,
        "actual": false,
        "prompt": "AIディープフェイクの時代に「見えること」と「真実」の関係はどう考えるべきか。",
        "answer": "見えることと真実であることは必ずしも同じではない",
        "source": "（p.15-16）",
        "aliases": [
          "見えることと真実であることは必ずしも同じではない"
        ]
      },
      {
        "number": 20,
        "actual": false,
        "prompt": "天動説は宗教的秩序と相性が良かったか。",
        "answer": "良かった",
        "source": "（p.17）",
        "aliases": [
          "良かった"
        ]
      },
      {
        "number": 21,
        "actual": false,
        "prompt": "地動説がもたらした社会的影響を一言で表すと何か。",
        "answer": "観念の革命",
        "source": "（p.17）",
        "aliases": [
          "観念の革命"
        ]
      },
      {
        "number": 22,
        "actual": false,
        "prompt": "フランシス・ベーコンの思想的立場は何か。",
        "answer": "経験主義",
        "source": "（p.18）",
        "aliases": [
          "経験主義"
        ]
      },
      {
        "number": 23,
        "actual": false,
        "prompt": "ベーコンが重視した科学的方法の循環は何か。",
        "answer": "観察→実験→再現",
        "source": "（p.18）",
        "aliases": [
          "観察→実験→再現"
        ]
      },
      {
        "number": 24,
        "actual": false,
        "prompt": "「知識は力」と述べた思想家は誰か。",
        "answer": "フランシス・ベーコン",
        "source": "（p.18）",
        "aliases": [
          "フランシス・ベーコン",
          "フランシス",
          "ベーコン"
        ]
      },
      {
        "number": 25,
        "actual": false,
        "prompt": "ルネ・デカルトの思想的立場は何か。",
        "answer": "合理主義",
        "source": "（p.18）",
        "aliases": [
          "合理主義"
        ]
      },
      {
        "number": 26,
        "actual": false,
        "prompt": "「我思う、ゆえに我あり」と述べた人物は誰か。",
        "answer": "ルネ・デカルト",
        "source": "（p.18）",
        "aliases": [
          "ルネ・デカルト",
          "ルネ",
          "デカルト"
        ]
      },
      {
        "number": 27,
        "actual": false,
        "prompt": "デカルトは世界を何によって理解できると考えたか。",
        "answer": "理性と論理",
        "source": "（p.18）",
        "aliases": [
          "理性と論理"
        ]
      },
      {
        "number": 28,
        "actual": false,
        "prompt": "アリストテレス学派が地球中心説を支持した主な根拠は何か。",
        "answer": "宇宙は神が設計した完全な球体構造だという考え",
        "source": "（p.22）",
        "aliases": [
          "宇宙は神が設計した完全な球体構造だという考え"
        ]
      },
      {
        "number": 29,
        "actual": false,
        "prompt": "ガリレオ派が地球中心説に反論した主な観測証拠は何か。",
        "answer": "木星に衛星があること",
        "source": "（p.22）",
        "aliases": [
          "木星に衛星があること"
        ]
      },
      {
        "number": 30,
        "actual": false,
        "prompt": "教会側が地動説を警戒した社会的理由は何か。",
        "answer": "秩序を乱し社会不安を招くと考えたため",
        "source": "（p.22）",
        "aliases": [
          "秩序を乱し社会不安を招くと考えたため"
        ]
      },
      {
        "number": 31,
        "actual": false,
        "prompt": "科学的知見が受け入れられるために、証拠以外に必要なものは何か。",
        "answer": "社会的な文脈と受容の仕組み",
        "source": "（p.25）",
        "aliases": [
          "社会的な文脈と受容の仕組み"
        ]
      },
      {
        "number": 32,
        "actual": true,
        "prompt": "科学の発展と社会・宗教の関係について最も適切な説明は何か。",
        "answer": "科学の発展には、社会や宗教との関係も影響する",
        "source": "（第5回p.4）",
        "aliases": [
          "科学の発展には、社会や宗教との関係も影響する",
          "科学の発展には",
          "社会や宗教との関係も影響する"
        ]
      },
      {
        "number": 33,
        "actual": true,
        "prompt": "AI時代の映像や音声について、授業に最も近い考え方は何か。",
        "answer": "「見えること」と「真実であること」は必ずしも同じではない",
        "source": "（第5回p.5）",
        "aliases": [
          "「見えること」と「真実であること」は必ずしも同じではない"
        ]
      }
    ]
  },
  {
    "lesson": 5,
    "title": "「科学的である」とは何か",
    "questions": [
      {
        "number": 1,
        "actual": false,
        "prompt": "近代科学は単なる発見ではなく、何によって社会に位置づけられたか。",
        "answer": "制度と文化",
        "source": "（p.6）",
        "aliases": [
          "制度と文化"
        ]
      },
      {
        "number": 2,
        "actual": false,
        "prompt": "スコラ学派を代表する神学者・哲学者は誰か。",
        "answer": "トマス・アクィナス",
        "source": "（p.8）",
        "aliases": [
          "トマス・アクィナス",
          "トマス",
          "アクィナス"
        ]
      },
      {
        "number": 3,
        "actual": false,
        "prompt": "トマス・アクィナスの代表的著作は何か。",
        "answer": "『神学大全』",
        "source": "（p.8）",
        "aliases": [
          "『神学大全』"
        ]
      },
      {
        "number": 4,
        "actual": false,
        "prompt": "スコラ学派は主に何世紀の大学で発展したか。",
        "answer": "12〜13世紀",
        "source": "（p.9）",
        "aliases": [
          "12〜13世紀"
        ]
      },
      {
        "number": 5,
        "actual": false,
        "prompt": "スコラ学派が特に発展した大学はどこか。",
        "answer": "パリ大学",
        "source": "（p.9）",
        "aliases": [
          "パリ大学"
        ]
      },
      {
        "number": 6,
        "actual": false,
        "prompt": "スコラ学派が融合させた二つの思想体系は何か。",
        "answer": "キリスト教神学とアリストテレス哲学",
        "source": "（p.9）",
        "aliases": [
          "キリスト教神学とアリストテレス哲学"
        ]
      },
      {
        "number": 7,
        "actual": true,
        "prompt": "スコラ学派を最も適切に説明すると何か。",
        "answer": "神学と理性を結びつけ、論理的に世界を理解しようとした学問",
        "source": "（第6回p.4）",
        "aliases": [
          "神学と理性を結びつけ、論理的に世界を理解しようとした学問",
          "神学と理性を結びつけ",
          "論理的に世界を理解しようとした学問"
        ]
      },
      {
        "number": 8,
        "actual": false,
        "prompt": "スコラ学派における理性は何と考えられたか。",
        "answer": "神から人間に与えられた知の光（lumen rationis）",
        "source": "（p.10）",
        "aliases": [
          "神から人間に与えられた知の光（lumen rationis）",
          "神から人間に与えられた知の光"
        ]
      },
      {
        "number": 9,
        "actual": false,
        "prompt": "スコラ学派が理性を使う最終目的は何だったか。",
        "answer": "神の真理へ接近すること",
        "source": "（p.10）",
        "aliases": [
          "神の真理へ接近すること"
        ]
      },
      {
        "number": 10,
        "actual": false,
        "prompt": "スコラ学派が重視した三つの議論方法は何か。",
        "answer": "論理・対比・弁証法",
        "source": "（p.11）",
        "aliases": [
          "論理・対比・弁証法",
          "論理",
          "対比",
          "弁証法"
        ]
      },
      {
        "number": 11,
        "actual": false,
        "prompt": "スコラ学派の教育制度上の貢献は何か。",
        "answer": "大学・講義・討論という学問の形を整えたこと",
        "source": "（p.11）",
        "aliases": [
          "大学・講義・討論という学問の形を整えたこと",
          "大学",
          "講義",
          "討論という学問の形を整えたこと"
        ]
      },
      {
        "number": 12,
        "actual": false,
        "prompt": "ルネサンス・宗教改革期にキリスト教世界観との違いを明らかにした実践分野を一つ答えよ。",
        "answer": "航海術・天文学・光学・弾道計算のいずれか",
        "source": "（p.13）",
        "aliases": [
          "航海術・天文学・光学・弾道計算のいずれか",
          "航海術",
          "天文学",
          "光学",
          "弾道計算のいずれか"
        ]
      },
      {
        "number": 13,
        "actual": false,
        "prompt": "ニュートンは宇宙を何によって動くものと考えたか。",
        "answer": "神の法則",
        "source": "（p.14）",
        "aliases": [
          "神の法則"
        ]
      },
      {
        "number": 14,
        "actual": false,
        "prompt": "ニュートンは科学によって神を消したのか。",
        "answer": "消したのではなく、創造主・法則の根源として再定義した",
        "source": "（p.14）",
        "aliases": [
          "消したのではなく、創造主・法則の根源として再定義した",
          "消したのではなく",
          "創造主",
          "法則の根源として再定義した"
        ]
      },
      {
        "number": 15,
        "actual": false,
        "prompt": "王立協会が設立された年は何年か。",
        "answer": "1660年",
        "source": "（p.15, 17）",
        "aliases": [
          "1660年"
        ]
      },
      {
        "number": 16,
        "actual": false,
        "prompt": "王立協会設立の思想的背景となった革命は何か。",
        "answer": "ピューリタン革命",
        "source": "（p.15）",
        "aliases": [
          "ピューリタン革命"
        ]
      },
      {
        "number": 17,
        "actual": false,
        "prompt": "ピューリタンが重視した宗教実践は何か。",
        "answer": "読まれる聖書と直接的な信仰",
        "source": "（p.16）",
        "aliases": [
          "読まれる聖書と直接的な信仰"
        ]
      },
      {
        "number": 18,
        "actual": false,
        "prompt": "ピューリタン革命後に高まったものは何か。",
        "answer": "個人の理解・理性と思想的自由",
        "source": "（p.15-16）",
        "aliases": [
          "個人の理解・理性と思想的自由",
          "個人の理解",
          "理性と思想的自由"
        ]
      },
      {
        "number": 19,
        "actual": true,
        "prompt": "王立協会の特徴は何か。",
        "answer": "観察・実験・再現性を重視し、知識を公開したこと",
        "source": "（第6回p.3）",
        "aliases": [
          "観察・実験・再現性を重視し、知識を公開したこと",
          "観察",
          "実験",
          "再現性を重視し",
          "知識を公開したこと"
        ]
      },
      {
        "number": 20,
        "actual": false,
        "prompt": "王立協会が誕生させた科学の性質は何か。",
        "answer": "科学の公共性",
        "source": "（p.17）",
        "aliases": [
          "科学の公共性"
        ]
      },
      {
        "number": 21,
        "actual": false,
        "prompt": "王立協会と関係が深い、ボイルの法則で知られる人物は誰か。",
        "answer": "ロバート・ボイル",
        "source": "（p.17）",
        "aliases": [
          "ロバート・ボイル",
          "ロバート",
          "ボイル"
        ]
      },
      {
        "number": 22,
        "actual": false,
        "prompt": "最初期のグレゴリー式望遠鏡を作った人物は誰か。",
        "answer": "ロバート・フック",
        "source": "（p.18）",
        "aliases": [
          "ロバート・フック",
          "ロバート",
          "フック"
        ]
      },
      {
        "number": 23,
        "actual": false,
        "prompt": "ぜんまいばねを使った懐中時計に関係する人物は誰か。",
        "answer": "クリスティアーン・ホイヘンス",
        "source": "（p.18）",
        "aliases": [
          "クリスティアーン・ホイヘンス",
          "クリスティアーン",
          "ホイヘンス"
        ]
      },
      {
        "number": 24,
        "actual": false,
        "prompt": "国家も人工物として構成できると考えた思想家は誰か。",
        "answer": "トマス・ホッブズ",
        "source": "（p.19）",
        "aliases": [
          "トマス・ホッブズ",
          "トマス",
          "ホッブズ"
        ]
      },
      {
        "number": 25,
        "actual": false,
        "prompt": "ヨーロッパ最古級の大学で、11世紀に法学校として活動した大学はどこか。",
        "answer": "ボローニャ大学",
        "source": "（p.20）",
        "aliases": [
          "ボローニャ大学"
        ]
      },
      {
        "number": 26,
        "actual": false,
        "prompt": "パリ大学の創設期の主要学部は何か。",
        "answer": "神学・法学・医学とリベラル・アーツ",
        "source": "（p.21）",
        "aliases": [
          "神学・法学・医学とリベラル・アーツ",
          "神学",
          "法学",
          "医学とリベラル",
          "アーツ"
        ]
      },
      {
        "number": 27,
        "actual": false,
        "prompt": "ヨーロッパ最古の医学部を持つ大学はどこか。",
        "answer": "モンペリエ大学",
        "source": "（p.22）",
        "aliases": [
          "モンペリエ大学"
        ]
      },
      {
        "number": 28,
        "actual": false,
        "prompt": "1229年に神学の高等教育機関として設立された大学はどこか。",
        "answer": "トゥールーズ大学",
        "source": "（p.22）",
        "aliases": [
          "トゥールーズ大学"
        ]
      },
      {
        "number": 29,
        "actual": false,
        "prompt": "オックスフォード大学で講義が行われた最古の記録は何年か。",
        "answer": "1096年",
        "source": "（p.23）",
        "aliases": [
          "1096年"
        ]
      },
      {
        "number": 30,
        "actual": false,
        "prompt": "ケンブリッジ大学が成立した年は何年か。",
        "answer": "1208年",
        "source": "（p.23）",
        "aliases": [
          "1208年"
        ]
      },
      {
        "number": 31,
        "actual": false,
        "prompt": "宗教と科学の関係は単純な対立ではなく、何の変化と説明されるか。",
        "answer": "世界をどう説明するかというモデルチェンジ",
        "source": "（p.24）",
        "aliases": [
          "世界をどう説明するかというモデルチェンジ"
        ]
      },
      {
        "number": 32,
        "actual": false,
        "prompt": "科学を信頼される知にした第一の条件は何か。",
        "answer": "再現性",
        "source": "（p.26）",
        "aliases": [
          "再現性"
        ]
      },
      {
        "number": 33,
        "actual": false,
        "prompt": "科学を信頼される知にした第二の条件は何か。",
        "answer": "公開性",
        "source": "（p.26）",
        "aliases": [
          "公開性"
        ]
      },
      {
        "number": 34,
        "actual": false,
        "prompt": "科学を信頼される知にした第三の条件は何か。",
        "answer": "制度的保証",
        "source": "（p.26）",
        "aliases": [
          "制度的保証"
        ]
      },
      {
        "number": 35,
        "actual": false,
        "prompt": "科学を信頼される知にした第四の条件は何か。",
        "answer": "実用性・成果",
        "source": "（p.26）",
        "aliases": [
          "実用性・成果",
          "実用性",
          "成果"
        ]
      },
      {
        "number": 36,
        "actual": true,
        "prompt": "科学が社会から信頼されるために必要なものは何か。",
        "answer": "制度や社会的な仕組み",
        "source": "（第6回p.5）",
        "aliases": [
          "制度や社会的な仕組み"
        ]
      },
      {
        "number": 37,
        "actual": false,
        "prompt": "中世から近代にかけて科学の語り手は誰から誰へ変化したか。",
        "answer": "神学者・聖職者から観察者・実験者へ",
        "source": "（p.27）",
        "aliases": [
          "神学者・聖職者から観察者・実験者へ",
          "神学者",
          "聖職者から観察者",
          "実験者へ"
        ]
      },
      {
        "number": 38,
        "actual": false,
        "prompt": "王立協会の標語「Nullius in verba」の意味は何か。",
        "answer": "誰の言葉にも頼るな",
        "source": "（p.28）",
        "aliases": [
          "誰の言葉にも頼るな"
        ]
      },
      {
        "number": 39,
        "actual": false,
        "prompt": "「Nullius in verba」が求める態度は何か。",
        "answer": "権威をうのみにせず、証拠を示し観察すること",
        "source": "（p.28）",
        "aliases": [
          "権威をうのみにせず、証拠を示し観察すること",
          "権威をうのみにせず",
          "証拠を示し観察すること"
        ]
      },
      {
        "number": 40,
        "actual": false,
        "prompt": "ルネサンス期に理性の対象は神から何へ移ったか。",
        "answer": "自然",
        "source": "（p.32）",
        "aliases": [
          "自然"
        ]
      },
      {
        "number": 41,
        "actual": false,
        "prompt": "科学革命で世界は神秘から何へ変化したか。",
        "answer": "数式で説明できるもの",
        "source": "（p.33）",
        "aliases": [
          "数式で説明できるもの"
        ]
      },
      {
        "number": 42,
        "actual": false,
        "prompt": "近代科学の制度化を象徴する組織を一つ答えよ。",
        "answer": "王立協会",
        "source": "（p.34）",
        "aliases": [
          "王立協会"
        ]
      },
      {
        "number": 43,
        "actual": false,
        "prompt": "科学は客観的真理の探究であると同時に、何の産物でもあるか。",
        "answer": "社会に信頼される仕組みの産物",
        "source": "（p.36）",
        "aliases": [
          "社会に信頼される仕組みの産物"
        ]
      }
    ]
  },
  {
    "lesson": 6,
    "title": "産業革命前夜",
    "questions": [
      {
        "number": 1,
        "actual": false,
        "prompt": "日本の世界最古級の印刷物として紹介されたものは何か。",
        "answer": "百万塔陀羅尼",
        "source": "（p.7）",
        "aliases": [
          "百万塔陀羅尼"
        ]
      },
      {
        "number": 2,
        "actual": false,
        "prompt": "百万塔陀羅尼の制作を命じた天皇は誰か。",
        "answer": "孝謙天皇",
        "source": "（p.7）",
        "aliases": [
          "孝謙天皇"
        ]
      },
      {
        "number": 3,
        "actual": false,
        "prompt": "百万塔陀羅尼の制作が始まった年は何年か。",
        "answer": "764年",
        "source": "（p.7）",
        "aliases": [
          "764年"
        ]
      },
      {
        "number": 4,
        "actual": false,
        "prompt": "百万塔陀羅尼が完成した年は何年か。",
        "answer": "770年",
        "source": "（p.7）",
        "aliases": [
          "770年"
        ]
      },
      {
        "number": 5,
        "actual": false,
        "prompt": "百万塔陀羅尼の国家事業に関わった技術者は何人と記録されるか。",
        "answer": "157人",
        "source": "（p.7）",
        "aliases": [
          "157人"
        ]
      },
      {
        "number": 6,
        "actual": false,
        "prompt": "活版印刷以前の本は主に何によって複製されたか。",
        "answer": "写本",
        "source": "（p.8）",
        "aliases": [
          "写本"
        ]
      },
      {
        "number": 7,
        "actual": false,
        "prompt": "写本に使われた代表的な素材は何か。",
        "answer": "羊皮紙",
        "source": "（p.8）",
        "aliases": [
          "羊皮紙"
        ]
      },
      {
        "number": 8,
        "actual": false,
        "prompt": "金属活字と印刷機を組み合わせて大量印刷を可能にした人物は誰か。",
        "answer": "ヨハネス・グーテンベルク",
        "source": "（p.9）",
        "aliases": [
          "ヨハネス・グーテンベルク",
          "ヨハネス",
          "グーテンベルク"
        ]
      },
      {
        "number": 9,
        "actual": false,
        "prompt": "グーテンベルクの改良はおよそ何年頃か。",
        "answer": "1450年頃",
        "source": "（p.9）",
        "aliases": [
          "1450年頃"
        ]
      },
      {
        "number": 10,
        "actual": false,
        "prompt": "グーテンベルク聖書が刊行されたのはおよそ何年頃か。",
        "answer": "1455年頃",
        "source": "（p.10）",
        "aliases": [
          "1455年頃"
        ]
      },
      {
        "number": 11,
        "actual": true,
        "prompt": "活版印刷がヨーロッパ社会に与えた最も重要な影響は何か。",
        "answer": "本の流通を広げ、宗教・科学・政治思想の伝達を後押ししたこと",
        "source": "（第7回p.3）",
        "aliases": [
          "本の流通を広げ、宗教・科学・政治思想の伝達を後押ししたこと",
          "本の流通を広げ",
          "宗教",
          "科学",
          "政治思想の伝達を後押ししたこと"
        ]
      },
      {
        "number": 12,
        "actual": false,
        "prompt": "活版印刷によって本はどのように変化したか。",
        "answer": "安く、速く、多く作られるようになった",
        "source": "（p.9, 12）",
        "aliases": [
          "安く、速く、多く作られるようになった",
          "安く",
          "速く",
          "多く作られるようになった"
        ]
      },
      {
        "number": 13,
        "actual": false,
        "prompt": "活版印刷が後押しした三つの歴史的運動は何か。",
        "answer": "宗教改革・科学革命・啓蒙思想",
        "source": "（p.9, 12）",
        "aliases": [
          "宗教改革・科学革命・啓蒙思想",
          "宗教改革",
          "科学革命",
          "啓蒙思想"
        ]
      },
      {
        "number": 14,
        "actual": false,
        "prompt": "印刷技術が最初に広がった都市はどこか。",
        "answer": "マインツ",
        "source": "（p.11）",
        "aliases": [
          "マインツ"
        ]
      },
      {
        "number": 15,
        "actual": false,
        "prompt": "印刷技術の普及によって本は何として扱われるようになったか。",
        "answer": "商品",
        "source": "（p.11）",
        "aliases": [
          "商品"
        ]
      },
      {
        "number": 16,
        "actual": false,
        "prompt": "近世ヨーロッパで知識や議論が集まった二つの場所は何か。",
        "answer": "サロンとコーヒーハウス",
        "source": "（p.13）",
        "aliases": [
          "サロンとコーヒーハウス"
        ]
      },
      {
        "number": 17,
        "actual": false,
        "prompt": "『君主論』を書いた政治思想家は誰か。",
        "answer": "ニッコロ・マキャヴェリ",
        "source": "（p.14-15）",
        "aliases": [
          "ニッコロ・マキャヴェリ",
          "ニッコロ",
          "マキャヴェリ"
        ]
      },
      {
        "number": 18,
        "actual": false,
        "prompt": "マキャヴェリの人間観はどのようなものか。",
        "answer": "人間は利己的で不安定であり、操作可能だという見方",
        "source": "（p.15）",
        "aliases": [
          "人間は利己的で不安定であり、操作可能だという見方",
          "人間は利己的で不安定であり",
          "操作可能だという見方"
        ]
      },
      {
        "number": 19,
        "actual": false,
        "prompt": "マキャヴェリが政治の目的としたものは何か。",
        "answer": "支配と安定の維持",
        "source": "（p.15）",
        "aliases": [
          "支配と安定の維持"
        ]
      },
      {
        "number": 20,
        "actual": false,
        "prompt": "『リヴァイアサン』を書いた思想家は誰か。",
        "answer": "トマス・ホッブズ",
        "source": "（p.15）",
        "aliases": [
          "トマス・ホッブズ",
          "トマス",
          "ホッブズ"
        ]
      },
      {
        "number": 21,
        "actual": false,
        "prompt": "ホッブズは人間を何に動かされる存在と考えたか。",
        "answer": "恐怖と自己保存",
        "source": "（p.15）",
        "aliases": [
          "恐怖と自己保存"
        ]
      },
      {
        "number": 22,
        "actual": false,
        "prompt": "ホッブズは秩序維持のために何を必要としたか。",
        "answer": "絶対主権",
        "source": "（p.15）",
        "aliases": [
          "絶対主権"
        ]
      },
      {
        "number": 23,
        "actual": false,
        "prompt": "『統治二論』を書いた思想家は誰か。",
        "answer": "ジョン・ロック",
        "source": "（p.15）",
        "aliases": [
          "ジョン・ロック",
          "ジョン",
          "ロック"
        ]
      },
      {
        "number": 24,
        "actual": false,
        "prompt": "ロックが政治の目的としたものは何か。",
        "answer": "自由と所有の保護",
        "source": "（p.15）",
        "aliases": [
          "自由と所有の保護"
        ]
      },
      {
        "number": 25,
        "actual": false,
        "prompt": "『社会契約論』を書いた思想家は誰か。",
        "answer": "ジャン＝ジャック・ルソー",
        "source": "（p.15）",
        "aliases": [
          "ジャン＝ジャック・ルソー",
          "ジャン＝ジャック",
          "ルソー"
        ]
      },
      {
        "number": 26,
        "actual": false,
        "prompt": "ルソーが自由な共同体の基礎としたものは何か。",
        "answer": "一般意志",
        "source": "（p.15）",
        "aliases": [
          "一般意志"
        ]
      },
      {
        "number": 27,
        "actual": false,
        "prompt": "重商主義では国家の富を何で測ったか。",
        "answer": "貴金属の蓄積",
        "source": "（p.18, 25）",
        "aliases": [
          "貴金属の蓄積"
        ]
      },
      {
        "number": 28,
        "actual": false,
        "prompt": "重商主義が重視した貿易政策は何か。",
        "answer": "輸出を増やし、輸入を抑える保護主義政策",
        "source": "（p.18, 25）",
        "aliases": [
          "輸出を増やし、輸入を抑える保護主義政策",
          "輸出を増やし",
          "輸入を抑える保護主義政策"
        ]
      },
      {
        "number": 29,
        "actual": false,
        "prompt": "重商主義の時代に貿易と強く結びついたものは何か。",
        "answer": "戦争",
        "source": "（p.18）",
        "aliases": [
          "戦争"
        ]
      },
      {
        "number": 30,
        "actual": false,
        "prompt": "産業革命前夜のグローバル経済を象徴する貿易は何か。",
        "answer": "植民地貿易と三角貿易",
        "source": "（p.19）",
        "aliases": [
          "植民地貿易と三角貿易"
        ]
      },
      {
        "number": 31,
        "actual": false,
        "prompt": "産業革命前夜に労働はギルドから何へ転換したか。",
        "answer": "賃金労働",
        "source": "（p.19）",
        "aliases": [
          "賃金労働"
        ]
      },
      {
        "number": 32,
        "actual": false,
        "prompt": "技術の進歩と制度が衝突した例として挙げられた運動は何か。",
        "answer": "囲い込み運動",
        "source": "（p.19）",
        "aliases": [
          "囲い込み運動"
        ]
      },
      {
        "number": 33,
        "actual": false,
        "prompt": "17世紀に地図ブームを支えたオランダの地図制作者一族は何家か。",
        "answer": "ブラウ家",
        "source": "（p.20-22）",
        "aliases": [
          "ブラウ家"
        ]
      },
      {
        "number": 34,
        "actual": false,
        "prompt": "『大地図帳（Atlas Maior）』を制作した人物は誰か。",
        "answer": "ヨアン・ブラウ",
        "source": "（p.21）",
        "aliases": [
          "ヨアン・ブラウ",
          "ヨアン",
          "ブラウ"
        ]
      },
      {
        "number": 35,
        "actual": false,
        "prompt": "ブラウ家のライバルとして紹介された地図制作者は誰か。",
        "answer": "ヨハネス・ヤンソニウス",
        "source": "（p.23）",
        "aliases": [
          "ヨハネス・ヤンソニウス",
          "ヨハネス",
          "ヤンソニウス"
        ]
      },
      {
        "number": 36,
        "actual": false,
        "prompt": "重農主義を代表する思想家は誰か。",
        "answer": "フランソワ・ケネー",
        "source": "（p.24）",
        "aliases": [
          "フランソワ・ケネー",
          "フランソワ",
          "ケネー"
        ]
      },
      {
        "number": 37,
        "actual": false,
        "prompt": "ケネーの代表的著作は何か。",
        "answer": "『経済表』",
        "source": "（p.24）",
        "aliases": [
          "『経済表』"
        ]
      },
      {
        "number": 38,
        "actual": false,
        "prompt": "重農主義が富を生み出す唯一の産業と考えたものは何か。",
        "answer": "農業",
        "source": "（p.24）",
        "aliases": [
          "農業"
        ]
      },
      {
        "number": 39,
        "actual": false,
        "prompt": "重農主義の主要な三つのキーワードは何か。",
        "answer": "自然秩序・自由放任・農業中心",
        "source": "（p.24）",
        "aliases": [
          "自然秩序・自由放任・農業中心",
          "自然秩序",
          "自由放任",
          "農業中心"
        ]
      },
      {
        "number": 40,
        "actual": false,
        "prompt": "重農主義では国家は経済にどう関わるべきだとされたか。",
        "answer": "自由放任的であるべきだとされた",
        "source": "（p.25）",
        "aliases": [
          "自由放任的であるべきだとされた"
        ]
      },
      {
        "number": 41,
        "actual": false,
        "prompt": "『国富論』を書いた人物は誰か。",
        "answer": "アダム・スミス",
        "source": "（p.26）",
        "aliases": [
          "アダム・スミス",
          "アダム",
          "スミス"
        ]
      },
      {
        "number": 42,
        "actual": false,
        "prompt": "『国富論』が刊行された年は何年か。",
        "answer": "1776年",
        "source": "（p.26）",
        "aliases": [
          "1776年"
        ]
      },
      {
        "number": 43,
        "actual": false,
        "prompt": "『道徳感情論』が刊行された年は何年か。",
        "answer": "1759年",
        "source": "（p.26）",
        "aliases": [
          "1759年"
        ]
      },
      {
        "number": 44,
        "actual": false,
        "prompt": "アダム・スミスの「見えざる手」とは何か。",
        "answer": "個人の利益追求が意図せず社会全体の利益や市場調整につながる仕組み",
        "source": "（p.27, 29）",
        "aliases": [
          "個人の利益追求が意図せず社会全体の利益や市場調整につながる仕組み"
        ]
      },
      {
        "number": 45,
        "actual": false,
        "prompt": "スミスは政府の介入を完全に否定したか。",
        "answer": "否定せず、国防・治安・公共事業・法の支配などの役割を認めた",
        "source": "（p.27）",
        "aliases": [
          "否定せず、国防・治安・公共事業・法の支配などの役割を認めた",
          "否定せず",
          "国防",
          "治安",
          "公共事業",
          "法の支配などの役割を認めた"
        ]
      },
      {
        "number": 46,
        "actual": false,
        "prompt": "分業の効果を説明するためにスミスが用いた工場の例は何か。",
        "answer": "ピン工場",
        "source": "（p.28）",
        "aliases": [
          "ピン工場"
        ]
      },
      {
        "number": 47,
        "actual": true,
        "prompt": "アダム・スミスの市場観を最も適切に説明すると何か。",
        "answer": "市場は個人の利益追求だけでなく、共感や道徳感情によっても調整される",
        "source": "（第7回p.5）",
        "aliases": [
          "市場は個人の利益追求だけでなく、共感や道徳感情によっても調整される",
          "市場は個人の利益追求だけでなく",
          "共感や道徳感情によっても調整される"
        ]
      },
      {
        "number": 48,
        "actual": false,
        "prompt": "スミスが社会秩序を支えると考えた人間の能力は何か。",
        "answer": "sympathy（共感）",
        "source": "（p.30）",
        "aliases": [
          "sympathy（共感）",
          "sympathy"
        ]
      },
      {
        "number": 49,
        "actual": false,
        "prompt": "スミスにとって自己利益の追求を調整する感情は何か。",
        "answer": "他者にどう思われるかという感情",
        "source": "（p.31）",
        "aliases": [
          "他者にどう思われるかという感情"
        ]
      },
      {
        "number": 50,
        "actual": false,
        "prompt": "AI主導の市場で失われる危険があるものは何か。",
        "answer": "人間の共感や倫理的判断",
        "source": "（p.32, 37）",
        "aliases": [
          "人間の共感や倫理的判断"
        ]
      },
      {
        "number": 51,
        "actual": false,
        "prompt": "『大転換』を書いた思想家は誰か。",
        "answer": "カール・ポランニー",
        "source": "（p.33）",
        "aliases": [
          "カール・ポランニー",
          "カール",
          "ポランニー"
        ]
      },
      {
        "number": 52,
        "actual": false,
        "prompt": "ポランニーは市場社会を自然なものと考えたか。",
        "answer": "自然ではなく、制度として人工的に作られたものと考えた",
        "source": "（p.33）",
        "aliases": [
          "自然ではなく、制度として人工的に作られたものと考えた",
          "自然ではなく",
          "制度として人工的に作られたものと考えた"
        ]
      },
      {
        "number": 53,
        "actual": false,
        "prompt": "ポランニーが区別した二つの概念は何か。",
        "answer": "市場経済と市場社会",
        "source": "（p.33）",
        "aliases": [
          "市場経済と市場社会"
        ]
      },
      {
        "number": 54,
        "actual": false,
        "prompt": "ポランニーの「架空の商品」の例は何か。",
        "answer": "労働力",
        "source": "（p.33）",
        "aliases": [
          "労働力"
        ]
      },
      {
        "number": 55,
        "actual": false,
        "prompt": "ポランニーが懐疑的だった市場の形は何か。",
        "answer": "自己調整的市場",
        "source": "（p.33）",
        "aliases": [
          "自己調整的市場"
        ]
      },
      {
        "number": 56,
        "actual": true,
        "prompt": "「市場」について授業に最も近い説明は何か。",
        "answer": "市場は制度・思想・人々の関係の中で作られてきた",
        "source": "（第7回p.4）",
        "aliases": [
          "市場は制度・思想・人々の関係の中で作られてきた",
          "市場は制度",
          "思想",
          "人々の関係の中で作られてきた"
        ]
      },
      {
        "number": 57,
        "actual": false,
        "prompt": "ケネー・スミス・ポランニーの違いを一言ずつ答えよ。",
        "answer": "ケネーは自然秩序、スミスは見えざる手と道徳感情、ポランニーは制度設計を重視した",
        "source": "（p.35）",
        "aliases": [
          "ケネーは自然秩序、スミスは見えざる手と道徳感情、ポランニーは制度設計を重視した",
          "ケネーは自然秩序",
          "スミスは見えざる手と道徳感情",
          "ポランニーは制度設計を重視した"
        ]
      }
    ]
  },
  {
    "lesson": 7,
    "title": "産業革命と都市の変容",
    "questions": [
      {
        "number": 1,
        "actual": false,
        "prompt": "産業革命を支えた二つの技術分野は何か。",
        "answer": "蒸気機関と紡績機",
        "source": "（p.8-9）",
        "aliases": [
          "蒸気機関と紡績機"
        ]
      },
      {
        "number": 2,
        "actual": false,
        "prompt": "蒸気機関の改良で知られる人物は誰か。",
        "answer": "ジェームズ・ワット",
        "source": "（p.8）",
        "aliases": [
          "ジェームズ・ワット",
          "ジェームズ",
          "ワット"
        ]
      },
      {
        "number": 3,
        "actual": false,
        "prompt": "ワット以前に蒸気機関を開発した人物は誰か。",
        "answer": "トーマス・ニューコメン",
        "source": "（p.8）",
        "aliases": [
          "トーマス・ニューコメン",
          "トーマス",
          "ニューコメン"
        ]
      },
      {
        "number": 4,
        "actual": false,
        "prompt": "ジェニー紡績機を発明した人物は誰か。",
        "answer": "ジェームズ・ハーグリーブス",
        "source": "（p.9）",
        "aliases": [
          "ジェームズ・ハーグリーブス",
          "ジェームズ",
          "ハーグリーブス"
        ]
      },
      {
        "number": 5,
        "actual": false,
        "prompt": "ジェニー紡績機が発明されたのはおよそ何年頃か。",
        "answer": "1764年頃",
        "source": "（p.9）",
        "aliases": [
          "1764年頃"
        ]
      },
      {
        "number": 6,
        "actual": false,
        "prompt": "水力紡績機を発明した人物は誰か。",
        "answer": "リチャード・アークライト",
        "source": "（p.9）",
        "aliases": [
          "リチャード・アークライト",
          "リチャード",
          "アークライト"
        ]
      },
      {
        "number": 7,
        "actual": false,
        "prompt": "水力紡績機が発明された年は何年か。",
        "answer": "1769年",
        "source": "（p.9）",
        "aliases": [
          "1769年"
        ]
      },
      {
        "number": 8,
        "actual": false,
        "prompt": "ミュール紡績機を発明した人物は誰か。",
        "answer": "サミュエル・クロンプトン",
        "source": "（p.9）",
        "aliases": [
          "サミュエル・クロンプトン",
          "サミュエル",
          "クロンプトン"
        ]
      },
      {
        "number": 9,
        "actual": false,
        "prompt": "ミュール紡績機が発明された年は何年か。",
        "answer": "1779年",
        "source": "（p.9）",
        "aliases": [
          "1779年"
        ]
      },
      {
        "number": 10,
        "actual": false,
        "prompt": "産業革命前の代表的な生産方式は何か。",
        "answer": "家内制手工業",
        "source": "（p.10）",
        "aliases": [
          "家内制手工業"
        ]
      },
      {
        "number": 11,
        "actual": false,
        "prompt": "産業革命後の代表的な生産方式は何か。",
        "answer": "機械制大工業",
        "source": "（p.11）",
        "aliases": [
          "機械制大工業"
        ]
      },
      {
        "number": 12,
        "actual": true,
        "prompt": "産業革命によって起こった代表的な生産上の変化は何か。",
        "answer": "機械化が進み、大量生産が可能になった",
        "source": "（第8回p.2）",
        "aliases": [
          "機械化が進み、大量生産が可能になった",
          "機械化が進み",
          "大量生産が可能になった"
        ]
      },
      {
        "number": 13,
        "actual": false,
        "prompt": "機械制大工業で可能になった二つの生産上の特徴は何か。",
        "answer": "大量生産と標準化",
        "source": "（p.11）",
        "aliases": [
          "大量生産と標準化"
        ]
      },
      {
        "number": 14,
        "actual": false,
        "prompt": "分業の進展によって労働はどのように変化したか。",
        "answer": "単純化され、時間によって管理されるようになった",
        "source": "（p.11）",
        "aliases": [
          "単純化され、時間によって管理されるようになった",
          "単純化され",
          "時間によって管理されるようになった"
        ]
      },
      {
        "number": 15,
        "actual": false,
        "prompt": "生産性向上によって商品の価格はどうなったか。",
        "answer": "下がった",
        "source": "（p.11）",
        "aliases": [
          "下がった"
        ]
      },
      {
        "number": 16,
        "actual": false,
        "prompt": "大量生産と価格低下は何の萌芽を生んだか。",
        "answer": "消費社会",
        "source": "（p.11）",
        "aliases": [
          "消費社会"
        ]
      },
      {
        "number": 17,
        "actual": false,
        "prompt": "農村から都市への人口移動を何というか。",
        "answer": "都市化",
        "source": "（p.12）",
        "aliases": [
          "都市化"
        ]
      },
      {
        "number": 18,
        "actual": false,
        "prompt": "産業革命期の典型的な労働条件はどのようなものだったか。",
        "answer": "長時間・低賃金・過酷な労働",
        "source": "（p.12）",
        "aliases": [
          "長時間・低賃金・過酷な労働",
          "長時間",
          "低賃金",
          "過酷な労働"
        ]
      },
      {
        "number": 19,
        "actual": false,
        "prompt": "女性や子どもが工場労働に動員された理由を一つ答えよ。",
        "answer": "低賃金で雇えたため",
        "source": "（p.13）",
        "aliases": [
          "低賃金で雇えたため"
        ]
      },
      {
        "number": 20,
        "actual": false,
        "prompt": "女性や子どもが工場労働に動員された社会的背景は何か。",
        "answer": "家内労働からの転換、都市化、貧困",
        "source": "（p.13）",
        "aliases": [
          "家内労働からの転換、都市化、貧困",
          "家内労働からの転換",
          "都市化",
          "貧困"
        ]
      },
      {
        "number": 21,
        "actual": false,
        "prompt": "『子供の誕生』を書いた歴史家は誰か。",
        "answer": "フィリップ・アリエス",
        "source": "（p.14）",
        "aliases": [
          "フィリップ・アリエス",
          "フィリップ",
          "アリエス"
        ]
      },
      {
        "number": 22,
        "actual": false,
        "prompt": "アリエスによれば、中世の子どもはどのように捉えられたか。",
        "answer": "小さな大人",
        "source": "（p.14）",
        "aliases": [
          "小さな大人"
        ]
      },
      {
        "number": 23,
        "actual": false,
        "prompt": "中世の子どもはおよそ何歳から社会の一員として働いたか。",
        "answer": "7歳前後",
        "source": "（p.14）",
        "aliases": [
          "7歳前後"
        ]
      },
      {
        "number": 24,
        "actual": false,
        "prompt": "「子どもらしさ」が発明されたのはいつ頃からか。",
        "answer": "17世紀以降",
        "source": "（p.14）",
        "aliases": [
          "17世紀以降"
        ]
      },
      {
        "number": 25,
        "actual": false,
        "prompt": "近代に子どもが守られる存在となった背景は何か。",
        "answer": "家庭教育と学校の普及",
        "source": "（p.14）",
        "aliases": [
          "家庭教育と学校の普及"
        ]
      },
      {
        "number": 26,
        "actual": false,
        "prompt": "『イギリスにおける労働者階級の状態』を書いた人物は誰か。",
        "answer": "フリードリヒ・エンゲルス",
        "source": "（p.15）",
        "aliases": [
          "フリードリヒ・エンゲルス",
          "フリードリヒ",
          "エンゲルス"
        ]
      },
      {
        "number": 27,
        "actual": false,
        "prompt": "エンゲルスの著書が刊行された年は何年か。",
        "answer": "1845年",
        "source": "（p.15）",
        "aliases": [
          "1845年"
        ]
      },
      {
        "number": 28,
        "actual": false,
        "prompt": "産業革命期の児童労働では、9〜10歳の子どもが1日何時間以上働く例があったか。",
        "answer": "12時間以上",
        "source": "（p.15）",
        "aliases": [
          "12時間以上"
        ]
      },
      {
        "number": 29,
        "actual": false,
        "prompt": "ラッダイト運動は何年から何年に起きたか。",
        "answer": "1811〜1816年",
        "source": "（p.16）",
        "aliases": [
          "1811〜1816年"
        ]
      },
      {
        "number": 30,
        "actual": true,
        "prompt": "ラッダイト運動とはどのような運動か。",
        "answer": "機械化による失業を恐れた労働者・手工業者が機械を破壊した運動",
        "source": "（第8回p.3）",
        "aliases": [
          "機械化による失業を恐れた労働者・手工業者が機械を破壊した運動",
          "機械化による失業を恐れた労働者",
          "手工業者が機械を破壊した運動"
        ]
      },
      {
        "number": 31,
        "actual": false,
        "prompt": "産業都市に現れた代表的な三つの景観は何か。",
        "answer": "工場・煙突・鉄道",
        "source": "（p.17）",
        "aliases": [
          "工場・煙突・鉄道",
          "工場",
          "煙突",
          "鉄道"
        ]
      },
      {
        "number": 32,
        "actual": false,
        "prompt": "産業都市で深刻化した三つの環境問題は何か。",
        "answer": "大気汚染・水質悪化・劣悪な住宅環境",
        "source": "（p.17）",
        "aliases": [
          "大気汚染・水質悪化・劣悪な住宅環境",
          "大気汚染",
          "水質悪化",
          "劣悪な住宅環境"
        ]
      },
      {
        "number": 33,
        "actual": false,
        "prompt": "1858年にロンドンで起きた悪臭問題を何というか。",
        "answer": "The Great Stink（大悪臭）",
        "source": "（p.18）",
        "aliases": [
          "The Great Stink（大悪臭）",
          "The Great Stink"
        ]
      },
      {
        "number": 34,
        "actual": true,
        "prompt": "19世紀ロンドンで下水道整備が進められた直接の問題は何か。",
        "answer": "テムズ川の汚染と悪臭の深刻化",
        "source": "（第8回p.4）",
        "aliases": [
          "テムズ川の汚染と悪臭の深刻化"
        ]
      },
      {
        "number": 35,
        "actual": false,
        "prompt": "「下水道の父」と呼ばれたイギリスの土木技術者は誰か。",
        "answer": "ジョセフ・バザルジェット",
        "source": "（p.18）",
        "aliases": [
          "ジョセフ・バザルジェット",
          "ジョセフ",
          "バザルジェット"
        ]
      },
      {
        "number": 36,
        "actual": false,
        "prompt": "公衆衛生改革を提唱した人物は誰か。",
        "answer": "エドウィン・チャドウィック",
        "source": "（p.19）",
        "aliases": [
          "エドウィン・チャドウィック",
          "エドウィン",
          "チャドウィック"
        ]
      },
      {
        "number": 37,
        "actual": false,
        "prompt": "チャドウィックが1842年に出した報告書は何か。",
        "answer": "『労働者階級の衛生状態に関する報告書』",
        "source": "（p.19）",
        "aliases": [
          "『労働者階級の衛生状態に関する報告書』"
        ]
      },
      {
        "number": 38,
        "actual": false,
        "prompt": "チャドウィックは衛生を個人の問題ではなく何の問題と考えたか。",
        "answer": "社会全体の問題",
        "source": "（p.19）",
        "aliases": [
          "社会全体の問題"
        ]
      },
      {
        "number": 39,
        "actual": false,
        "prompt": "産業革命で形成された二つの対立階級は何か。",
        "answer": "資本家（ブルジョワジー）と労働者（プロレタリアート）",
        "source": "（p.21）",
        "aliases": [
          "資本家（ブルジョワジー）と労働者（プロレタリアート）",
          "資本家と労働者"
        ]
      },
      {
        "number": 40,
        "actual": false,
        "prompt": "産業社会で重視されるようになった三つの価値は何か。",
        "answer": "時間厳守・効率・生産性",
        "source": "（p.21）",
        "aliases": [
          "時間厳守・効率・生産性",
          "時間厳守",
          "効率",
          "生産性"
        ]
      },
      {
        "number": 41,
        "actual": false,
        "prompt": "産業革命が最初に本格化した国はどこか。",
        "answer": "イギリス",
        "source": "（p.22）",
        "aliases": [
          "イギリス"
        ]
      },
      {
        "number": 42,
        "actual": false,
        "prompt": "産業革命はイギリスからどの国々へ波及したか。",
        "answer": "フランス・ドイツ・アメリカ・日本",
        "source": "（p.22）",
        "aliases": [
          "フランス・ドイツ・アメリカ・日本",
          "フランス",
          "ドイツ",
          "アメリカ",
          "日本"
        ]
      },
      {
        "number": 43,
        "actual": false,
        "prompt": "イギリスは産業革命期に何と呼ばれたか。",
        "answer": "世界の工場",
        "source": "（p.22）",
        "aliases": [
          "世界の工場"
        ]
      },
      {
        "number": 44,
        "actual": false,
        "prompt": "産業革命と植民地支配はどのように関係したか。",
        "answer": "資源と市場の獲得競争を激化させ、帝国主義を加速した",
        "source": "（p.22）",
        "aliases": [
          "資源と市場の獲得競争を激化させ、帝国主義を加速した",
          "資源と市場の獲得競争を激化させ",
          "帝国主義を加速した"
        ]
      },
      {
        "number": 45,
        "actual": false,
        "prompt": "労働の変化を「家族労働→何」とまとめられるか。",
        "answer": "工場労働",
        "source": "（p.29）",
        "aliases": [
          "工場労働"
        ]
      },
      {
        "number": 46,
        "actual": false,
        "prompt": "産業革命期の風景の変化を「田園→何」とまとめられるか。",
        "answer": "工場都市",
        "source": "（p.29）",
        "aliases": [
          "工場都市"
        ]
      },
      {
        "number": 47,
        "actual": false,
        "prompt": "衛生の変化を「無秩序→何」とまとめられるか。",
        "answer": "計画的管理",
        "source": "（p.29）",
        "aliases": [
          "計画的管理"
        ]
      },
      {
        "number": 48,
        "actual": false,
        "prompt": "便利な都市が不衛生になった理由は何か。",
        "answer": "技術と都市の成長に制度・インフラが追いつかず、効率が健康より優先されたため",
        "source": "（p.30）",
        "aliases": [
          "技術と都市の成長に制度・インフラが追いつかず、効率が健康より優先されたため",
          "技術と都市の成長に制度",
          "インフラが追いつかず",
          "効率が健康より優先されたため"
        ]
      },
      {
        "number": 49,
        "actual": false,
        "prompt": "産業革命から得られる技術史上の重要な教訓は何か。",
        "answer": "技術の進歩は人間の幸福と必ずしも一致しない",
        "source": "（p.30）",
        "aliases": [
          "技術の進歩は人間の幸福と必ずしも一致しない"
        ]
      }
    ]
  },
  {
    "lesson": 8,
    "title": "中間レポート作成",
    "questions": [
      {
        "number": 1,
        "actual": false,
        "prompt": "労働者から巨大資本家になった事例として紹介された人物は誰か。",
        "answer": "アンドリュー・カーネギー",
        "source": "（p.5）",
        "aliases": [
          "アンドリュー・カーネギー",
          "アンドリュー",
          "カーネギー"
        ]
      },
      {
        "number": 2,
        "actual": false,
        "prompt": "カーネギーが成功した主要産業は何か。",
        "answer": "鉄鋼業",
        "source": "（p.5）",
        "aliases": [
          "鉄鋼業"
        ]
      },
      {
        "number": 3,
        "actual": false,
        "prompt": "USスチールが創設された年は何年か。",
        "answer": "1901年",
        "source": "（p.5）",
        "aliases": [
          "1901年"
        ]
      },
      {
        "number": 4,
        "actual": false,
        "prompt": "中間レポートの字数は何字か。",
        "answer": "2000字",
        "source": "（p.6）",
        "aliases": [
          "2000字"
        ]
      },
      {
        "number": 5,
        "actual": false,
        "prompt": "中間レポートの最大の目的は何か。",
        "answer": "自分なりの問いを立て、資料をもとに論理的に考察すること",
        "source": "（p.7）",
        "aliases": [
          "自分なりの問いを立て、資料をもとに論理的に考察すること",
          "自分なりの問いを立て",
          "資料をもとに論理的に考察すること"
        ]
      },
      {
        "number": 6,
        "actual": false,
        "prompt": "レポートでは自分の主張に何を添える必要があるか。",
        "answer": "根拠",
        "source": "（p.7）",
        "aliases": [
          "根拠"
        ]
      },
      {
        "number": 7,
        "actual": false,
        "prompt": "レポート評価で最も配点が高い項目は何か。",
        "answer": "論理的展開（30％）",
        "source": "（p.8）",
        "aliases": [
          "論理的展開（30％）",
          "論理的展開"
        ]
      },
      {
        "number": 8,
        "actual": false,
        "prompt": "問いの明確さの配点は何％か。",
        "answer": "20％",
        "source": "（p.8）",
        "aliases": [
          "20％"
        ]
      },
      {
        "number": 9,
        "actual": false,
        "prompt": "文献の活用の配点は何％か。",
        "answer": "20％",
        "source": "（p.8）",
        "aliases": [
          "20％"
        ]
      },
      {
        "number": 10,
        "actual": false,
        "prompt": "独自性・考察の深さの配点は何％か。",
        "answer": "20％",
        "source": "（p.8）",
        "aliases": [
          "20％"
        ]
      },
      {
        "number": 11,
        "actual": false,
        "prompt": "表現・構成の配点は何％か。",
        "answer": "10％",
        "source": "（p.8）",
        "aliases": [
          "10％"
        ]
      },
      {
        "number": 12,
        "actual": false,
        "prompt": "レポートテーマ案「見えるものは信じられるか」はどの授業内容と関係するか。",
        "answer": "科学革命・観測・AI映像と真実の問題",
        "source": "（p.9）",
        "aliases": [
          "科学革命・観測・AI映像と真実の問題",
          "科学革命",
          "観測",
          "AI映像と真実の問題"
        ]
      },
      {
        "number": 13,
        "actual": false,
        "prompt": "「子どもらしさはいつ生まれたか」は誰の議論と関係するか。",
        "answer": "フィリップ・アリエス",
        "source": "（p.9）",
        "aliases": [
          "フィリップ・アリエス",
          "フィリップ",
          "アリエス"
        ]
      },
      {
        "number": 14,
        "actual": false,
        "prompt": "「市場は自然なものか」はどの三思想と関係するか。",
        "answer": "重商主義・重農主義・アダム・スミスやポランニーの市場論",
        "source": "（p.9, 13）",
        "aliases": [
          "重商主義・重農主義・アダム・スミスやポランニーの市場論",
          "重商主義",
          "重農主義",
          "アダム",
          "スミスやポランニーの市場論"
        ]
      },
      {
        "number": 15,
        "actual": false,
        "prompt": "一つの問いを深掘りする構成スタイルは何型か。",
        "answer": "探究・分析型",
        "source": "（p.10）",
        "aliases": [
          "探究・分析型",
          "探究",
          "分析型"
        ]
      },
      {
        "number": 16,
        "actual": false,
        "prompt": "二つの対象を比較して違いから考察する構成スタイルは何型か。",
        "answer": "比較・考察型",
        "source": "（p.10）",
        "aliases": [
          "比較・考察型",
          "比較",
          "考察型"
        ]
      },
      {
        "number": 17,
        "actual": false,
        "prompt": "歴史をヒントに自分の提案を組み込む構成スタイルは何型か。",
        "answer": "創造・提案型",
        "source": "（p.10）",
        "aliases": [
          "創造・提案型",
          "創造",
          "提案型"
        ]
      },
      {
        "number": 18,
        "actual": false,
        "prompt": "レポートの基本構成を五つに分けると何か。",
        "answer": "導入・本論1・本論2・本論3・結論",
        "source": "（p.12）",
        "aliases": [
          "導入・本論1・本論2・本論3・結論",
          "導入",
          "本論1",
          "本論2",
          "本論3",
          "結論"
        ]
      },
      {
        "number": 19,
        "actual": false,
        "prompt": "導入で明示する中心的な問いを何というか。",
        "answer": "リサーチクエスチョン",
        "source": "（p.12）",
        "aliases": [
          "リサーチクエスチョン"
        ]
      },
      {
        "number": 20,
        "actual": false,
        "prompt": "本論1で行うことは何か。",
        "answer": "歴史的事実・資料・理論など背景知識を整理すること",
        "source": "（p.12）",
        "aliases": [
          "歴史的事実・資料・理論など背景知識を整理すること",
          "歴史的事実",
          "資料",
          "理論など背景知識を整理すること"
        ]
      },
      {
        "number": 21,
        "actual": false,
        "prompt": "本論2で行うことは何か。",
        "answer": "事例分析や比較",
        "source": "（p.12）",
        "aliases": [
          "事例分析や比較"
        ]
      },
      {
        "number": 22,
        "actual": false,
        "prompt": "本論3で行うことは何か。",
        "answer": "自分の考察・評価・提案",
        "source": "（p.12）",
        "aliases": [
          "自分の考察・評価・提案",
          "自分の考察",
          "評価",
          "提案"
        ]
      },
      {
        "number": 23,
        "actual": false,
        "prompt": "良いレポートの思考順序は何か。",
        "answer": "説明→分析→考察",
        "source": "（p.13）",
        "aliases": [
          "説明→分析→考察"
        ]
      },
      {
        "number": 24,
        "actual": false,
        "prompt": "「AIについて調べる」が不十分な理由は何か。",
        "answer": "テーマであって、答えるべき問いになっていないため",
        "source": "（p.14）",
        "aliases": [
          "テーマであって、答えるべき問いになっていないため",
          "テーマであって",
          "答えるべき問いになっていないため"
        ]
      },
      {
        "number": 25,
        "actual": false,
        "prompt": "原因や背景を探る問いの形は何か。",
        "answer": "「なぜ〜なのか」",
        "source": "（p.15）",
        "aliases": [
          "「なぜ〜なのか」"
        ]
      },
      {
        "number": 26,
        "actual": false,
        "prompt": "当たり前を問い直す問いの形は何か。",
        "answer": "「本当に〜なのか」",
        "source": "（p.15）",
        "aliases": [
          "「本当に〜なのか」"
        ]
      },
      {
        "number": 27,
        "actual": false,
        "prompt": "歴史的な変化と継続を考える問いの形は何か。",
        "answer": "「どのように変化したのか」",
        "source": "（p.15）",
        "aliases": [
          "「どのように変化したのか」"
        ]
      },
      {
        "number": 28,
        "actual": false,
        "prompt": "過去と現在を結びつける問いの形は何か。",
        "answer": "「現代とどうつながるのか」",
        "source": "（p.15）",
        "aliases": [
          "「現代とどうつながるのか」"
        ]
      }
    ]
  },
  {
    "lesson": 9,
    "title": "ウィリアム・モリスと「もうひとつの未来」",
    "questions": [
      {
        "number": 1,
        "actual": false,
        "prompt": "ウィリアム・モリスの生没年はいつか。",
        "answer": "1834〜1896年",
        "source": "（p.4）",
        "aliases": [
          "1834〜1896年"
        ]
      },
      {
        "number": 2,
        "actual": false,
        "prompt": "モリスの主な三つの肩書は何か。",
        "answer": "詩人・デザイナー・思想家",
        "source": "（p.4）",
        "aliases": [
          "詩人・デザイナー・思想家",
          "詩人",
          "デザイナー",
          "思想家"
        ]
      },
      {
        "number": 3,
        "actual": false,
        "prompt": "モリスが学んだ大学はどこか。",
        "answer": "オックスフォード大学",
        "source": "（p.4）",
        "aliases": [
          "オックスフォード大学"
        ]
      },
      {
        "number": 4,
        "actual": false,
        "prompt": "モリスが大学で親しんだ二つの分野は何か。",
        "answer": "中世文学と美術",
        "source": "（p.4）",
        "aliases": [
          "中世文学と美術"
        ]
      },
      {
        "number": 5,
        "actual": false,
        "prompt": "モリス商会が設立された年は何年か。",
        "answer": "1861年",
        "source": "（p.4）",
        "aliases": [
          "1861年"
        ]
      },
      {
        "number": 6,
        "actual": false,
        "prompt": "モリス商会が制作した代表的なものを三つ答えよ。",
        "answer": "家具・壁紙・織物",
        "source": "（p.4）",
        "aliases": [
          "家具・壁紙・織物",
          "家具",
          "壁紙",
          "織物"
        ]
      },
      {
        "number": 7,
        "actual": false,
        "prompt": "モリスが主導した芸術運動は何か。",
        "answer": "アーツ・アンド・クラフツ運動",
        "source": "（p.4）",
        "aliases": [
          "アーツ・アンド・クラフツ運動",
          "アーツ",
          "アンド",
          "クラフツ運動"
        ]
      },
      {
        "number": 8,
        "actual": true,
        "prompt": "モリスが批判したものは何か。",
        "answer": "産業革命による機械化と大量生産",
        "source": "（第10回p.3）",
        "aliases": [
          "産業革命による機械化と大量生産"
        ]
      },
      {
        "number": 9,
        "actual": false,
        "prompt": "モリスが機械化と都市化に対して取り戻そうとしたものは何か。",
        "answer": "美と労働の喜び",
        "source": "（p.4）",
        "aliases": [
          "美と労働の喜び"
        ]
      },
      {
        "number": 10,
        "actual": false,
        "prompt": "『ユートピアだより』が発表された年は何年か。",
        "answer": "1890年",
        "source": "（p.4, 13）",
        "aliases": [
          "1890年"
        ]
      },
      {
        "number": 11,
        "actual": false,
        "prompt": "モリスが問いかけた「便利さと引き換えに失ったもの」は何か。",
        "answer": "創造性・美・自然との調和・人間らしい労働",
        "source": "（p.6-8）",
        "aliases": [
          "創造性・美・自然との調和・人間らしい労働",
          "創造性",
          "自然との調和",
          "人間らしい労働"
        ]
      },
      {
        "number": 12,
        "actual": false,
        "prompt": "モリスはすべての人にどのような権利があると考えたか。",
        "answer": "美しく働く権利",
        "source": "（p.7）",
        "aliases": [
          "美しく働く権利"
        ]
      },
      {
        "number": 13,
        "actual": false,
        "prompt": "モリスは働くことを何と同じであるべきだと考えたか。",
        "answer": "芸術",
        "source": "（p.7）",
        "aliases": [
          "芸術"
        ]
      },
      {
        "number": 14,
        "actual": false,
        "prompt": "『ユートピアだより』で理想とされた1日の労働時間はおよそ何時間か。",
        "answer": "約4時間",
        "source": "（p.7）",
        "aliases": [
          "約4時間"
        ]
      },
      {
        "number": 15,
        "actual": false,
        "prompt": "モリスが理想とした自然環境を三つ答えよ。",
        "answer": "公共庭園・木造建築・水と緑のある暮らし",
        "source": "（p.8）",
        "aliases": [
          "公共庭園・木造建築・水と緑のある暮らし",
          "公共庭園",
          "木造建築",
          "水と緑のある暮らし"
        ]
      },
      {
        "number": 16,
        "actual": false,
        "prompt": "モリスの「芸術の民主化」とは何か。",
        "answer": "芸術を特権階級のものから日常生活の中へ広げること",
        "source": "（p.9）",
        "aliases": [
          "芸術を特権階級のものから日常生活の中へ広げること"
        ]
      },
      {
        "number": 17,
        "actual": false,
        "prompt": "モリスは教育を何の土台と考えたか。",
        "answer": "未来社会の土台",
        "source": "（p.10）",
        "aliases": [
          "未来社会の土台"
        ]
      },
      {
        "number": 18,
        "actual": false,
        "prompt": "モリスが教育で重視した三つの要素は何か。",
        "answer": "想像力・手仕事・倫理",
        "source": "（p.10）",
        "aliases": [
          "想像力・手仕事・倫理",
          "想像力",
          "手仕事",
          "倫理"
        ]
      },
      {
        "number": 19,
        "actual": false,
        "prompt": "モリスの社会主義が目指したものは何か。",
        "answer": "労働と創造が一致し、教育・自然・芸術が結びつく社会",
        "source": "（p.11）",
        "aliases": [
          "労働と創造が一致し、教育・自然・芸術が結びつく社会",
          "労働と創造が一致し",
          "教育",
          "自然",
          "芸術が結びつく社会"
        ]
      },
      {
        "number": 20,
        "actual": false,
        "prompt": "モリスにとって美しさは個人だけの問題か。",
        "answer": "いいえ、社会制度に関わる問題",
        "source": "（p.11）",
        "aliases": [
          "いいえ、社会制度に関わる問題",
          "いいえ",
          "社会制度に関わる問題"
        ]
      },
      {
        "number": 21,
        "actual": false,
        "prompt": "モリスは産業革命が個人から何を奪ったと批判したか。",
        "answer": "創造性",
        "source": "（p.12）",
        "aliases": [
          "創造性"
        ]
      },
      {
        "number": 22,
        "actual": false,
        "prompt": "『ユートピアだより』の英語題は何か。",
        "answer": "News from Nowhere, or An Epoch of Rest",
        "source": "（p.13）",
        "aliases": [
          "News from Nowhere, or An Epoch of Rest",
          "News from Nowhere",
          "or An Epoch of Rest"
        ]
      },
      {
        "number": 23,
        "actual": false,
        "prompt": "モリスの未来社会で重視される二つの社会原理は何か。",
        "answer": "共存と調和",
        "source": "（p.13）",
        "aliases": [
          "共存と調和"
        ]
      },
      {
        "number": 24,
        "actual": false,
        "prompt": "モリスが現代に投げかける仕事の問いは何か。",
        "answer": "働くことは苦役か、創造か",
        "source": "（p.15）",
        "aliases": [
          "働くことは苦役か、創造か",
          "働くことは苦役か",
          "創造か"
        ]
      },
      {
        "number": 25,
        "actual": false,
        "prompt": "モリスが現代に投げかける美の問いは何か。",
        "answer": "美しさは誰のものか",
        "source": "（p.16）",
        "aliases": [
          "美しさは誰のものか"
        ]
      },
      {
        "number": 26,
        "actual": false,
        "prompt": "モリスが現代に投げかける豊かさの問いは何か。",
        "answer": "便利さだけで豊かさを測れるか",
        "source": "（p.17）",
        "aliases": [
          "便利さだけで豊かさを測れるか"
        ]
      },
      {
        "number": 27,
        "actual": false,
        "prompt": "アーツ・アンド・クラフツ運動が始まった背景は何か。",
        "answer": "産業革命による大量生産への批判",
        "source": "（p.18）",
        "aliases": [
          "産業革命による大量生産への批判"
        ]
      },
      {
        "number": 28,
        "actual": false,
        "prompt": "アーツ・アンド・クラフツ運動が盛んだった時期はいつ頃か。",
        "answer": "1860年代から1910年代",
        "source": "（p.18）",
        "aliases": [
          "1860年代から1910年代"
        ]
      },
      {
        "number": 29,
        "actual": true,
        "prompt": "アーツ・アンド・クラフツ運動を最も適切に説明すると何か。",
        "answer": "手仕事や職人技の価値を見直し、労働の創造性を重視した運動",
        "source": "（第10回p.4）",
        "aliases": [
          "手仕事や職人技の価値を見直し、労働の創造性を重視した運動",
          "手仕事や職人技の価値を見直し",
          "労働の創造性を重視した運動"
        ]
      },
      {
        "number": 30,
        "actual": false,
        "prompt": "アーツ・アンド・クラフツ運動に影響を与えた思想家は誰か。",
        "answer": "ジョン・ラスキン",
        "source": "（p.18）",
        "aliases": [
          "ジョン・ラスキン",
          "ジョン",
          "ラスキン"
        ]
      },
      {
        "number": 31,
        "actual": false,
        "prompt": "アーツ・アンド・クラフツ運動は現代の何の思想的源流となったか。",
        "answer": "DIY文化やサステナブルデザイン",
        "source": "（p.18）",
        "aliases": [
          "DIY文化やサステナブルデザイン"
        ]
      },
      {
        "number": 32,
        "actual": false,
        "prompt": "モリスの未来社会に貨幣は存在するか。",
        "answer": "存在しない",
        "source": "（第10回p.7）",
        "aliases": [
          "存在しない"
        ]
      },
      {
        "number": 33,
        "actual": false,
        "prompt": "モリスの未来社会に賃金労働や商取引は存在するか。",
        "answer": "存在しない",
        "source": "（第10回p.7）",
        "aliases": [
          "存在しない"
        ]
      },
      {
        "number": 34,
        "actual": false,
        "prompt": "モリスの未来社会で階級はどう扱われるか。",
        "answer": "制度としては消滅しているが、過去の記憶として語られる",
        "source": "（第10回p.6）",
        "aliases": [
          "制度としては消滅しているが、過去の記憶として語られる",
          "制度としては消滅しているが",
          "過去の記憶として語られる"
        ]
      },
      {
        "number": 35,
        "actual": false,
        "prompt": "モリスが幸福の基盤としたものは何か。",
        "answer": "隷属がないこと",
        "source": "（p.23）",
        "aliases": [
          "隷属がないこと"
        ]
      },
      {
        "number": 36,
        "actual": true,
        "prompt": "『ユートピアだより』で重視された考え方は何か。",
        "answer": "労働の喜びと美しい暮らし",
        "source": "（第10回p.5）",
        "aliases": [
          "労働の喜びと美しい暮らし"
        ]
      }
    ]
  },
  {
    "lesson": 10,
    "title": "見る帝国―博覧会と「人類」の発明",
    "questions": [
      {
        "number": 1,
        "actual": false,
        "prompt": "近代の博覧会は何のショーケースだったか。",
        "answer": "産業技術と文化",
        "source": "（p.8-9）",
        "aliases": [
          "産業技術と文化"
        ]
      },
      {
        "number": 2,
        "actual": true,
        "prompt": "19世紀の万国博覧会の主要な役割は何か。",
        "answer": "各国の技術や産業を紹介し、国家の力を示すこと",
        "source": "（第11回p.3）",
        "aliases": [
          "各国の技術や産業を紹介し、国家の力を示すこと",
          "各国の技術や産業を紹介し",
          "国家の力を示すこと"
        ]
      },
      {
        "number": 3,
        "actual": false,
        "prompt": "最初の万国博覧会として扱われた博覧会は何か。",
        "answer": "1851年ロンドン万国博覧会",
        "source": "（p.9）",
        "aliases": [
          "1851年ロンドン万国博覧会"
        ]
      },
      {
        "number": 4,
        "actual": false,
        "prompt": "1851年ロンドン万国博覧会が開かれた公園はどこか。",
        "answer": "ハイド・パーク",
        "source": "（p.9）",
        "aliases": [
          "ハイド・パーク",
          "ハイド",
          "パーク"
        ]
      },
      {
        "number": 5,
        "actual": false,
        "prompt": "1851年ロンドン万国博覧会の象徴的建築は何か。",
        "answer": "クリスタル・パレス",
        "source": "（p.10）",
        "aliases": [
          "クリスタル・パレス",
          "クリスタル",
          "パレス"
        ]
      },
      {
        "number": 6,
        "actual": false,
        "prompt": "ロンドン万博を推進した王族は誰か。",
        "answer": "アルバート公",
        "source": "（p.9）",
        "aliases": [
          "アルバート公"
        ]
      },
      {
        "number": 7,
        "actual": false,
        "prompt": "博覧会の展示分類は何を線引きしたか。",
        "answer": "技術・国家・文明の序列や境界",
        "source": "（p.9）",
        "aliases": [
          "技術・国家・文明の序列や境界",
          "技術",
          "国家",
          "文明の序列や境界"
        ]
      },
      {
        "number": 8,
        "actual": false,
        "prompt": "1904年に人間展示が行われた万国博覧会は何か。",
        "answer": "セントルイス万国博覧会",
        "source": "（p.14）",
        "aliases": [
          "セントルイス万国博覧会"
        ]
      },
      {
        "number": 9,
        "actual": false,
        "prompt": "セントルイス万博の人間展示が示そうとしたものは何か。",
        "answer": "民族・人種・文化の型と、未開から文明への進化の序列",
        "source": "（p.14）",
        "aliases": [
          "民族・人種・文化の型と、未開から文明への進化の序列",
          "民族",
          "人種",
          "文化の型と",
          "未開から文明への進化の序列"
        ]
      },
      {
        "number": 10,
        "actual": false,
        "prompt": "人間展示の最大の問題は何か。",
        "answer": "人を研究・娯楽の対象として見せ物化し、序列化したこと",
        "source": "（p.14-15）",
        "aliases": [
          "人を研究・娯楽の対象として見せ物化し、序列化したこと",
          "人を研究",
          "娯楽の対象として見せ物化し",
          "序列化したこと"
        ]
      },
      {
        "number": 11,
        "actual": false,
        "prompt": "19世紀の見世物興行や人間動物園で知られる人物は誰か。",
        "answer": "P・T・バーナム",
        "source": "（p.15）",
        "aliases": [
          "P・T・バーナム",
          "バーナム"
        ]
      },
      {
        "number": 12,
        "actual": false,
        "prompt": "日本で人類館事件が起きた博覧会は何か。",
        "answer": "1903年の第5回内国勧業博覧会",
        "source": "（p.16-18）",
        "aliases": [
          "1903年の第5回内国勧業博覧会"
        ]
      },
      {
        "number": 13,
        "actual": false,
        "prompt": "人類館事件で展示された日本国内の人々を二つ答えよ。",
        "answer": "アイヌと琉球の人々",
        "source": "（p.18）",
        "aliases": [
          "アイヌと琉球の人々"
        ]
      },
      {
        "number": 14,
        "actual": false,
        "prompt": "人類館事件はなぜ国際問題になったか。",
        "answer": "多様な民族を過度に演出し、見世物として展示したため",
        "source": "（p.18）",
        "aliases": [
          "多様な民族を過度に演出し、見世物として展示したため",
          "多様な民族を過度に演出し",
          "見世物として展示したため"
        ]
      },
      {
        "number": 15,
        "actual": false,
        "prompt": "人類館展示に関わった東京大学の人類学者は誰か。",
        "answer": "坪井正五郎",
        "source": "（p.18）",
        "aliases": [
          "坪井正五郎"
        ]
      },
      {
        "number": 16,
        "actual": true,
        "prompt": "民族展示や人類館事件に共通する問題は何か。",
        "answer": "人々が「見る側」と「見られる側」に分けられ、一方的に分類・定義されたこと",
        "source": "（第11回p.4）",
        "aliases": [
          "人々が「見る側」と「見られる側」に分けられ、一方的に分類・定義されたこと",
          "人々が「見る側」と「見られる側」に分けられ",
          "一方的に分類",
          "定義されたこと"
        ]
      },
      {
        "number": 17,
        "actual": false,
        "prompt": "徳島市出身の人類学者・考古学者・民族学者は誰か。",
        "answer": "鳥居龍蔵",
        "source": "（p.19）",
        "aliases": [
          "鳥居龍蔵"
        ]
      },
      {
        "number": 18,
        "actual": false,
        "prompt": "鳥居龍蔵の生没年はいつか。",
        "answer": "1870〜1953年",
        "source": "（p.19）",
        "aliases": [
          "1870〜1953年"
        ]
      },
      {
        "number": 19,
        "actual": false,
        "prompt": "鳥居龍蔵が調査した地域を二つ答えよ。",
        "answer": "台湾・沖縄・朝鮮半島・中国東北部のいずれか",
        "source": "（p.19）",
        "aliases": [
          "台湾・沖縄・朝鮮半島・中国東北部のいずれか",
          "台湾",
          "沖縄",
          "朝鮮半島",
          "中国東北部のいずれか"
        ]
      },
      {
        "number": 20,
        "actual": false,
        "prompt": "鳥居龍蔵が記録に用いた主要な技術は何か。",
        "answer": "写真、特に乾板写真術",
        "source": "（p.19, 21）",
        "aliases": [
          "写真、特に乾板写真術",
          "写真",
          "特に乾板写真術"
        ]
      },
      {
        "number": 21,
        "actual": false,
        "prompt": "近代人類学は他者を知る学問であると同時に何をする学問だったか。",
        "answer": "分類・比較・位置づけを行う学問",
        "source": "（p.19）",
        "aliases": [
          "分類・比較・位置づけを行う学問",
          "分類",
          "比較",
          "位置づけを行う学問"
        ]
      },
      {
        "number": 22,
        "actual": false,
        "prompt": "ダーウィンの進化論で、進化の出発点となるものは何か。",
        "answer": "個体ごとの違い（個体差）",
        "source": "（p.22）",
        "aliases": [
          "個体ごとの違い（個体差）",
          "個体ごとの違い"
        ]
      },
      {
        "number": 23,
        "actual": false,
        "prompt": "環境に適した特徴を持つ個体が多く子孫を残す仕組みを何というか。",
        "answer": "自然選択",
        "source": "（p.22）",
        "aliases": [
          "自然選択"
        ]
      },
      {
        "number": 24,
        "actual": false,
        "prompt": "進化は「より上等になること」を意味するか。",
        "answer": "意味せず、環境との関係で多様に変化することを意味する",
        "source": "（p.22）",
        "aliases": [
          "意味せず、環境との関係で多様に変化することを意味する",
          "意味せず",
          "環境との関係で多様に変化することを意味する"
        ]
      },
      {
        "number": 25,
        "actual": true,
        "prompt": "ダーウィンの進化論が人間の序列化に利用された際の問題は何か。",
        "answer": "生物の変化を、人間の価値や民族の優劣の序列に置き換えたこと",
        "source": "（第11回p.5）",
        "aliases": [
          "生物の変化を、人間の価値や民族の優劣の序列に置き換えたこと",
          "生物の変化を",
          "人間の価値や民族の優劣の序列に置き換えたこと"
        ]
      },
      {
        "number": 26,
        "actual": false,
        "prompt": "進化論の誤用は何を正当化するために使われたか。",
        "answer": "科学的人種主義・優生学・植民地主義",
        "source": "（p.23）",
        "aliases": [
          "科学的人種主義・優生学・植民地主義",
          "科学的人種主義",
          "優生学",
          "植民地主義"
        ]
      },
      {
        "number": 27,
        "actual": false,
        "prompt": "頭蓋骨の大きさや形から人種や知能を説明しようとした学問は何か。",
        "answer": "頭蓋骨計測学",
        "source": "（p.24）",
        "aliases": [
          "頭蓋骨計測学"
        ]
      },
      {
        "number": 28,
        "actual": false,
        "prompt": "顔つきや頭部の形から性格や犯罪傾向を判断しようとしたものは何か。",
        "answer": "人相学・骨相学",
        "source": "（p.24）",
        "aliases": [
          "人相学・骨相学",
          "人相学",
          "骨相学"
        ]
      },
      {
        "number": 29,
        "actual": false,
        "prompt": "頭蓋骨計測の何が問題だったのか。",
        "answer": "測定結果から人間の能力や価値の序列まで決めようとしたこと",
        "source": "（p.24）",
        "aliases": [
          "測定結果から人間の能力や価値の序列まで決めようとしたこと"
        ]
      },
      {
        "number": 30,
        "actual": false,
        "prompt": "大英博物館が設立された年は何年か。",
        "answer": "1753年",
        "source": "（p.25）",
        "aliases": [
          "1753年"
        ]
      },
      {
        "number": 31,
        "actual": false,
        "prompt": "ロンドン自然史博物館が開館した年は何年か。",
        "answer": "1881年",
        "source": "（p.25）",
        "aliases": [
          "1881年"
        ]
      },
      {
        "number": 32,
        "actual": false,
        "prompt": "パリ国立自然史博物館が設立された年は何年か。",
        "answer": "1793年",
        "source": "（p.25）",
        "aliases": [
          "1793年"
        ]
      },
      {
        "number": 33,
        "actual": false,
        "prompt": "スミソニアン協会が設立された年は何年か。",
        "answer": "1846年",
        "source": "（p.26）",
        "aliases": [
          "1846年"
        ]
      },
      {
        "number": 34,
        "actual": false,
        "prompt": "研究と教育の統合を目指す近代大学モデルを何というか。",
        "answer": "フンボルト理念",
        "source": "（p.26）",
        "aliases": [
          "フンボルト理念"
        ]
      },
      {
        "number": 35,
        "actual": false,
        "prompt": "『創られた伝統』を書いた歴史家は誰か。",
        "answer": "エリック・ホブズボウム",
        "source": "（p.27）",
        "aliases": [
          "エリック・ホブズボウム",
          "エリック",
          "ホブズボウム"
        ]
      },
      {
        "number": 36,
        "actual": false,
        "prompt": "古代ギリシャで『動物誌』を書いた人物は誰か。",
        "answer": "アリストテレス",
        "source": "（p.28）",
        "aliases": [
          "アリストテレス"
        ]
      },
      {
        "number": 37,
        "actual": false,
        "prompt": "19世紀に成立した生命を扱う学問領域は何か。",
        "answer": "biology（生物学）",
        "source": "（p.29）",
        "aliases": [
          "biology（生物学）",
          "biology"
        ]
      },
      {
        "number": 38,
        "actual": false,
        "prompt": "ダーウィン以前に種の変化を論じたフランスの博物学者は誰か。",
        "answer": "ラマルク",
        "source": "（p.29）",
        "aliases": [
          "ラマルク"
        ]
      },
      {
        "number": 39,
        "actual": false,
        "prompt": "ロンドン動物園が開園した年は何年か。",
        "answer": "1828年",
        "source": "（p.30）",
        "aliases": [
          "1828年"
        ]
      },
      {
        "number": 40,
        "actual": false,
        "prompt": "ロンドン動物園の当初の目的は何か。",
        "answer": "科学的研究のために動物を収集すること",
        "source": "（p.30）",
        "aliases": [
          "科学的研究のために動物を収集すること"
        ]
      },
      {
        "number": 41,
        "actual": false,
        "prompt": "ロンドン動物園が一般公開された年は何年か。",
        "answer": "1847年",
        "source": "（p.30）",
        "aliases": [
          "1847年"
        ]
      },
      {
        "number": 42,
        "actual": false,
        "prompt": "フーコーの「視線の権力」とは何か。",
        "answer": "見る・分類する・記録する行為が、対象を知ると同時に支配する仕組み",
        "source": "（p.31）",
        "aliases": [
          "見る・分類する・記録する行為が、対象を知ると同時に支配する仕組み",
          "見る",
          "分類する",
          "記録する行為が",
          "対象を知ると同時に支配する仕組み"
        ]
      },
      {
        "number": 43,
        "actual": false,
        "prompt": "知識と権力をつなぐ「目」の仕組みを何というか。",
        "answer": "gaze（まなざし・視線）",
        "source": "（p.31）",
        "aliases": [
          "gaze（まなざし・視線）",
          "gaze",
          "gaze（まなざし",
          "視線）"
        ]
      },
      {
        "number": 44,
        "actual": false,
        "prompt": "フーコーが共通構造を見いだした近代施設を四つ答えよ。",
        "answer": "博物館・病院・学校・監獄",
        "source": "（p.31）",
        "aliases": [
          "博物館・病院・学校・監獄",
          "博物館",
          "病院",
          "学校",
          "監獄"
        ]
      },
      {
        "number": 45,
        "actual": false,
        "prompt": "展示が持つ政治性とは何か。",
        "answer": "内容・順序・語りを構成する側が、見せたい世界を作る力を持つこと",
        "source": "（p.33）",
        "aliases": [
          "内容・順序・語りを構成する側が、見せたい世界を作る力を持つこと",
          "内容",
          "順序",
          "語りを構成する側が",
          "見せたい世界を作る力を持つこと"
        ]
      },
      {
        "number": 46,
        "actual": false,
        "prompt": "展示空間が「知の監獄」となり得る理由は何か。",
        "answer": "他者を固定化し、分類・比較・序列化するから",
        "source": "（p.34）",
        "aliases": [
          "他者を固定化し、分類・比較・序列化するから",
          "他者を固定化し",
          "分類",
          "比較",
          "序列化するから"
        ]
      },
      {
        "number": 47,
        "actual": false,
        "prompt": "現代のSNSや報道を見る際に必要とされる想像力は何か。",
        "answer": "見えないものや展示されなかった沈黙の声を想像する力",
        "source": "（p.35）",
        "aliases": [
          "見えないものや展示されなかった沈黙の声を想像する力"
        ]
      }
    ]
  },
  {
    "lesson": 11,
    "title": "百貨店は何を売ったのか",
    "questions": [
      {
        "number": 1,
        "actual": false,
        "prompt": "万博は国家や企業にとって何の場でもあったか。",
        "answer": "ブランディングの場",
        "source": "（p.6）",
        "aliases": [
          "ブランディングの場"
        ]
      },
      {
        "number": 2,
        "actual": false,
        "prompt": "19世紀後半は何の時代と呼べるか。",
        "answer": "博覧会の時代",
        "source": "（p.6）",
        "aliases": [
          "博覧会の時代"
        ]
      },
      {
        "number": 3,
        "actual": false,
        "prompt": "百貨店以前の代表的な商業形態を二つ答えよ。",
        "answer": "市・行商（振り売り、棒手振り）",
        "source": "（p.8）",
        "aliases": [
          "市・行商（振り売り、棒手振り）",
          "市・行商",
          "行商（振り売り",
          "棒手振り）"
        ]
      },
      {
        "number": 4,
        "actual": false,
        "prompt": "三越の前身となった店は何か。",
        "answer": "越後屋",
        "source": "（p.9）",
        "aliases": [
          "越後屋"
        ]
      },
      {
        "number": 5,
        "actual": false,
        "prompt": "越後屋が創業した年は何年か。",
        "answer": "1673年",
        "source": "（p.9, 15）",
        "aliases": [
          "1673年"
        ]
      },
      {
        "number": 6,
        "actual": false,
        "prompt": "越後屋が導入した革新的な販売方法は何か。",
        "answer": "現金掛け値なしの定価販売",
        "source": "（p.9）",
        "aliases": [
          "現金掛け値なしの定価販売"
        ]
      },
      {
        "number": 7,
        "actual": false,
        "prompt": "19世紀ヨーロッパのアーケード商店街を何というか。",
        "answer": "パサージュ",
        "source": "（p.10）",
        "aliases": [
          "パサージュ"
        ]
      },
      {
        "number": 8,
        "actual": false,
        "prompt": "パサージュを「夢の空間」と論じた思想家は誰か。",
        "answer": "ヴァルター・ベンヤミン",
        "source": "（p.10）",
        "aliases": [
          "ヴァルター・ベンヤミン",
          "ヴァルター",
          "ベンヤミン"
        ]
      },
      {
        "number": 9,
        "actual": false,
        "prompt": "世界初の百貨店として紹介された店は何か。",
        "answer": "ボン・マルシェ",
        "source": "（p.11, 14）",
        "aliases": [
          "ボン・マルシェ",
          "ボン",
          "マルシェ"
        ]
      },
      {
        "number": 10,
        "actual": false,
        "prompt": "ボン・マルシェが開業した都市と年は何か。",
        "answer": "1852年のパリ",
        "source": "（p.14）",
        "aliases": [
          "1852年のパリ"
        ]
      },
      {
        "number": 11,
        "actual": false,
        "prompt": "ボン・マルシェが導入した三つの販売制度は何か。",
        "answer": "定価販売・返品制度・カタログ通販",
        "source": "（p.14）",
        "aliases": [
          "定価販売・返品制度・カタログ通販",
          "定価販売",
          "返品制度",
          "カタログ通販"
        ]
      },
      {
        "number": 12,
        "actual": false,
        "prompt": "ボン・マルシェをモデルにしたゾラの小説は何か。",
        "answer": "『ボヌール・デ・ダム百貨店』",
        "source": "（p.14）",
        "aliases": [
          "『ボヌール・デ・ダム百貨店』",
          "『ボヌール",
          "ダム百貨店』"
        ]
      },
      {
        "number": 13,
        "actual": false,
        "prompt": "ロンドンの百貨店ハロッズは何を強みとしたか。",
        "answer": "「何でも手に入る」品ぞろえと王室御用達ブランド",
        "source": "（p.14）",
        "aliases": [
          "「何でも手に入る」品ぞろえと王室御用達ブランド"
        ]
      },
      {
        "number": 14,
        "actual": false,
        "prompt": "ニューヨークのメイシーズはどのような顧客層に向けて発展したか。",
        "answer": "移民社会を含む大衆",
        "source": "（p.14）",
        "aliases": [
          "移民社会を含む大衆"
        ]
      },
      {
        "number": 15,
        "actual": false,
        "prompt": "メイシーズが積極的に活用した二つの販売手法は何か。",
        "answer": "セールと大衆広告",
        "source": "（p.14）",
        "aliases": [
          "セールと大衆広告"
        ]
      },
      {
        "number": 16,
        "actual": true,
        "prompt": "近代的な百貨店の特徴は何か。",
        "answer": "定価販売・広い売り場・ショーウィンドウ・広告の活用",
        "source": "（第12回p.2）",
        "aliases": [
          "定価販売・広い売り場・ショーウィンドウ・広告の活用",
          "定価販売",
          "広い売り場",
          "ショーウィンドウ",
          "広告の活用"
        ]
      },
      {
        "number": 17,
        "actual": false,
        "prompt": "近代百貨店は何を売る空間として成立したか。",
        "answer": "商品だけでなく夢や憧れを売る空間",
        "source": "（p.14）",
        "aliases": [
          "商品だけでなく夢や憧れを売る空間"
        ]
      },
      {
        "number": 18,
        "actual": false,
        "prompt": "三越が「デパートメントストア宣言」を出した年は何年か。",
        "answer": "1904年",
        "source": "（p.15）",
        "aliases": [
          "1904年"
        ]
      },
      {
        "number": 19,
        "actual": false,
        "prompt": "三越の百貨店開業日はいつと紹介されたか。",
        "answer": "1904年12月21日",
        "source": "（p.16）",
        "aliases": [
          "1904年12月21日"
        ]
      },
      {
        "number": 20,
        "actual": true,
        "prompt": "三越が1910年代以降に力を入れたことは何か。",
        "answer": "都市的な暮らしや流行を提案すること",
        "source": "（第12回p.3）",
        "aliases": [
          "都市的な暮らしや流行を提案すること"
        ]
      },
      {
        "number": 21,
        "actual": false,
        "prompt": "「今日は帝劇、明日は三越」という言葉が示すものは何か。",
        "answer": "三越が買い物だけでなく都市的ライフスタイルを提案したこと",
        "source": "（p.15）",
        "aliases": [
          "三越が買い物だけでなく都市的ライフスタイルを提案したこと"
        ]
      },
      {
        "number": 22,
        "actual": false,
        "prompt": "三越が商品をアート作品のように見せるために活用したものは何か。",
        "answer": "ショーウィンドウと陳列の美学",
        "source": "（p.17）",
        "aliases": [
          "ショーウィンドウと陳列の美学"
        ]
      },
      {
        "number": 23,
        "actual": false,
        "prompt": "三越がエレベーターガールを導入した年は何年か。",
        "answer": "1914年",
        "source": "（p.17）",
        "aliases": [
          "1914年"
        ]
      },
      {
        "number": 24,
        "actual": false,
        "prompt": "三越のライオン像が設置された年は何年か。",
        "answer": "1914年",
        "source": "（p.17）",
        "aliases": [
          "1914年"
        ]
      },
      {
        "number": 25,
        "actual": false,
        "prompt": "三越のライオン像は都市で何の象徴になったか。",
        "answer": "待ち合わせ文化",
        "source": "（p.17）",
        "aliases": [
          "待ち合わせ文化"
        ]
      },
      {
        "number": 26,
        "actual": false,
        "prompt": "三越の広告ポスターで知られるデザイナーは誰か。",
        "answer": "杉浦非水",
        "source": "（p.17, 27）",
        "aliases": [
          "杉浦非水"
        ]
      },
      {
        "number": 27,
        "actual": false,
        "prompt": "杉浦非水は何のパイオニアとされるか。",
        "answer": "近代日本のグラフィックデザイン",
        "source": "（p.27）",
        "aliases": [
          "近代日本のグラフィックデザイン"
        ]
      },
      {
        "number": 28,
        "actual": false,
        "prompt": "高島屋が創業した年は何年か。",
        "answer": "1831年",
        "source": "（p.19）",
        "aliases": [
          "1831年"
        ]
      },
      {
        "number": 29,
        "actual": false,
        "prompt": "高島屋を創業した人物は誰か。",
        "answer": "飯田新七",
        "source": "（p.19）",
        "aliases": [
          "飯田新七"
        ]
      },
      {
        "number": 30,
        "actual": false,
        "prompt": "高島屋の創業時の商売は何か。",
        "answer": "古着・木綿商",
        "source": "（p.19）",
        "aliases": [
          "古着・木綿商",
          "古着",
          "木綿商"
        ]
      },
      {
        "number": 31,
        "actual": true,
        "prompt": "高島屋が1900年のパリ万博への出展で進めたことは何か。",
        "answer": "日本の美術工芸品を「美術」として見せ、海外に日本文化と企業ブランドを発信したこと",
        "source": "（第12回p.4）",
        "aliases": [
          "日本の美術工芸品を「美術」として見せ、海外に日本文化と企業ブランドを発信したこと",
          "日本の美術工芸品を「美術」として見せ",
          "海外に日本文化と企業ブランドを発信したこと"
        ]
      },
      {
        "number": 32,
        "actual": false,
        "prompt": "高島屋の経営哲学の背景にある近江商人の考えは何か。",
        "answer": "三方よし",
        "source": "（p.19）",
        "aliases": [
          "三方よし"
        ]
      },
      {
        "number": 33,
        "actual": false,
        "prompt": "三方よしの三者は誰か。",
        "answer": "売り手・買い手・世間",
        "source": "（p.19）",
        "aliases": [
          "売り手・買い手・世間",
          "売り手",
          "買い手",
          "世間"
        ]
      },
      {
        "number": 34,
        "actual": false,
        "prompt": "高島屋が万博に展示した代表的な工芸品を三つ答えよ。",
        "answer": "京友禅・染織・漆器",
        "source": "（p.22）",
        "aliases": [
          "京友禅・染織・漆器",
          "京友禅",
          "染織",
          "漆器"
        ]
      },
      {
        "number": 35,
        "actual": false,
        "prompt": "高島屋は西洋市場で何を商品化したか。",
        "answer": "日本趣味（ジャポニスム）",
        "source": "（p.22）",
        "aliases": [
          "日本趣味（ジャポニスム）",
          "日本趣味"
        ]
      },
      {
        "number": 36,
        "actual": false,
        "prompt": "三越と高島屋のブランド戦略の違いは何か。",
        "answer": "三越はライフスタイルと流行を創出し、高島屋は信頼と日本美の国際ブランドを構築した",
        "source": "（p.22）",
        "aliases": [
          "三越はライフスタイルと流行を創出し、高島屋は信頼と日本美の国際ブランドを構築した",
          "三越はライフスタイルと流行を創出し",
          "高島屋は信頼と日本美の国際ブランドを構築した"
        ]
      },
      {
        "number": 37,
        "actual": false,
        "prompt": "1920年代に登場した新しい都市女性像を何というか。",
        "answer": "モダンガール（モガ）",
        "source": "（p.23）",
        "aliases": [
          "モダンガール（モガ）",
          "モダンガール"
        ]
      },
      {
        "number": 38,
        "actual": false,
        "prompt": "モダンガールを象徴する外見を二つ答えよ。",
        "answer": "洋装と断髪",
        "source": "（p.23）",
        "aliases": [
          "洋装と断髪"
        ]
      },
      {
        "number": 39,
        "actual": false,
        "prompt": "百貨店がモダンガール文化で果たした役割は何か。",
        "answer": "都市的消費を体験する舞台装置",
        "source": "（p.23）",
        "aliases": [
          "都市的消費を体験する舞台装置"
        ]
      },
      {
        "number": 40,
        "actual": false,
        "prompt": "百貨店が商品以外に売った四つのものは何か。",
        "answer": "都市的ライフスタイル、おしゃれの基準、理想の家族像・女性像、日本らしさ",
        "source": "（p.24）",
        "aliases": [
          "都市的ライフスタイル、おしゃれの基準、理想の家族像・女性像、日本らしさ",
          "都市的ライフスタイル",
          "おしゃれの基準",
          "理想の家族像",
          "女性像",
          "日本らしさ"
        ]
      },
      {
        "number": 41,
        "actual": false,
        "prompt": "「誇示的消費」を論じた人物は誰か。",
        "answer": "ソースタイン・ヴェブレン",
        "source": "（p.25）",
        "aliases": [
          "ソースタイン・ヴェブレン",
          "ソースタイン",
          "ヴェブレン"
        ]
      },
      {
        "number": 42,
        "actual": false,
        "prompt": "誇示的消費とは何か。",
        "answer": "消費によって社会的地位や威信を示すこと",
        "source": "（p.25）",
        "aliases": [
          "消費によって社会的地位や威信を示すこと"
        ]
      },
      {
        "number": 43,
        "actual": false,
        "prompt": "広告や商品が価値観を帯びたメッセージになることを「神話作用」と論じた人物は誰か。",
        "answer": "ロラン・バルト",
        "source": "（p.25）",
        "aliases": [
          "ロラン・バルト",
          "ロラン",
          "バルト"
        ]
      },
      {
        "number": 44,
        "actual": false,
        "prompt": "『趣味の誕生』を書いた研究者は誰か。",
        "answer": "神野由紀",
        "source": "（p.25）",
        "aliases": [
          "神野由紀"
        ]
      },
      {
        "number": 45,
        "actual": false,
        "prompt": "百貨店が大衆化したものは何か。",
        "answer": "趣味文化と美意識",
        "source": "（p.25）",
        "aliases": [
          "趣味文化と美意識"
        ]
      },
      {
        "number": 46,
        "actual": false,
        "prompt": "2000年代以降、百貨店は「モノ」から何を売る戦略へ転換したか。",
        "answer": "体験",
        "source": "（p.29）",
        "aliases": [
          "体験"
        ]
      },
      {
        "number": 47,
        "actual": false,
        "prompt": "現代に「憧れを売る」機能を引き継いだメディアは何か。",
        "answer": "Instagram・TikTokなどのSNSとインフルエンサー",
        "source": "（p.29-30）",
        "aliases": [
          "Instagram・TikTokなどのSNSとインフルエンサー",
          "Instagram",
          "TikTokなどのSNSとインフルエンサー"
        ]
      },
      {
        "number": 48,
        "actual": false,
        "prompt": "百貨店の歴史から分かる広告・展示の力は何か。",
        "answer": "理想の消費者像や社会的価値観を形づくる力",
        "source": "（p.30）",
        "aliases": [
          "理想の消費者像や社会的価値観を形づくる力"
        ]
      }
    ]
  },
  {
    "lesson": 12,
    "title": "余暇はいつから当たり前になったのか",
    "questions": [
      {
        "number": 1,
        "actual": false,
        "prompt": "欧米の百貨店衰退を引き起こす三つの構造的要因は何か。",
        "answer": "ブランドの直営化・高額な家賃負担・体験消費への移行",
        "source": "（p.9）",
        "aliases": [
          "ブランドの直営化・高額な家賃負担・体験消費への移行",
          "ブランドの直営化",
          "高額な家賃負担",
          "体験消費への移行"
        ]
      },
      {
        "number": 2,
        "actual": false,
        "prompt": "2026年までにメイシーズが閉鎖予定とした不採算店舗数は何店か。",
        "answer": "150店",
        "source": "（p.8, 10）",
        "aliases": [
          "150店"
        ]
      },
      {
        "number": 3,
        "actual": false,
        "prompt": "日本の百貨店市場で進んでいる分断は何か。",
        "answer": "インバウンドと富裕層に支えられる都心店と、閉店が進む地方店の二極化",
        "source": "（p.11）",
        "aliases": [
          "インバウンドと富裕層に支えられる都心店と、閉店が進む地方店の二極化",
          "インバウンドと富裕層に支えられる都心店と",
          "閉店が進む地方店の二極化"
        ]
      },
      {
        "number": 4,
        "actual": false,
        "prompt": "余暇が広がる前提となった労働上の変化は何か。",
        "answer": "労働時間の短縮と休日の定着",
        "source": "（p.14-15, 第13回p.2）",
        "aliases": [
          "労働時間の短縮と休日の定着"
        ]
      },
      {
        "number": 5,
        "actual": true,
        "prompt": "19世紀以降、多くの人に余暇が広がる条件は何か。",
        "answer": "労働時間の短縮・休日の定着・鉄道網の発達",
        "source": "（第13回p.2）",
        "aliases": [
          "労働時間の短縮・休日の定着・鉄道網の発達",
          "労働時間の短縮",
          "休日の定着",
          "鉄道網の発達"
        ]
      },
      {
        "number": 6,
        "actual": false,
        "prompt": "産業革命期に余暇の必要性を高めた労働問題は何か。",
        "answer": "長時間労働・児童労働・劣悪な労働環境",
        "source": "（p.15）",
        "aliases": [
          "長時間労働・児童労働・劣悪な労働環境",
          "長時間労働",
          "児童労働",
          "劣悪な労働環境"
        ]
      },
      {
        "number": 7,
        "actual": false,
        "prompt": "労働者の理想郷として紹介された世界遺産の工場村はどこか。",
        "answer": "ニューラナーク",
        "source": "（p.16-19）",
        "aliases": [
          "ニューラナーク"
        ]
      },
      {
        "number": 8,
        "actual": false,
        "prompt": "ニューラナークに導入された紡績機は何か。",
        "answer": "アークライトの水力紡績機",
        "source": "（p.17）",
        "aliases": [
          "アークライトの水力紡績機"
        ]
      },
      {
        "number": 9,
        "actual": false,
        "prompt": "ニューラナークの創設者は誰か。",
        "answer": "デイヴィッド・デイル",
        "source": "（p.18）",
        "aliases": [
          "デイヴィッド・デイル",
          "デイヴィッド",
          "デイル"
        ]
      },
      {
        "number": 10,
        "actual": false,
        "prompt": "ニューラナークで労働・福祉改革を行った人物は誰か。",
        "answer": "ロバート・オーウェン",
        "source": "（p.18）",
        "aliases": [
          "ロバート・オーウェン",
          "ロバート",
          "オーウェン"
        ]
      },
      {
        "number": 11,
        "actual": false,
        "prompt": "オーウェンがニューラナークで進めた四つの改革は何か。",
        "answer": "労働時間短縮・児童労働の制限・教育・住宅や医療の提供",
        "source": "（p.18）",
        "aliases": [
          "労働時間短縮・児童労働の制限・教育・住宅や医療の提供",
          "労働時間短縮",
          "児童労働の制限",
          "教育",
          "住宅や医療の提供"
        ]
      },
      {
        "number": 12,
        "actual": false,
        "prompt": "ニューラナークに設けられた世界初の幼児教育施設は何か。",
        "answer": "性格形成学院",
        "source": "（p.21）",
        "aliases": [
          "性格形成学院"
        ]
      },
      {
        "number": 13,
        "actual": false,
        "prompt": "1819年の紡績工場法が目指したものは何か。",
        "answer": "労働時間短縮、児童労働の規制、教育の重視",
        "source": "（p.18）",
        "aliases": [
          "労働時間短縮、児童労働の規制、教育の重視",
          "労働時間短縮",
          "児童労働の規制",
          "教育の重視"
        ]
      },
      {
        "number": 14,
        "actual": false,
        "prompt": "1847年改正工場法は女性と18歳未満の労働を1日何時間以内に制限したか。",
        "answer": "10時間以内",
        "source": "（p.23）",
        "aliases": [
          "10時間以内"
        ]
      },
      {
        "number": 15,
        "actual": false,
        "prompt": "1874年改正工場法が導入した週労働時間は何時間か。",
        "answer": "週56時間",
        "source": "（p.23）",
        "aliases": [
          "週56時間"
        ]
      },
      {
        "number": 16,
        "actual": false,
        "prompt": "日本で労働組合の形成を促した団体は何か。",
        "answer": "労働組合期成会",
        "source": "（p.24）",
        "aliases": [
          "労働組合期成会"
        ]
      },
      {
        "number": 17,
        "actual": false,
        "prompt": "日本の社会改良運動の人物として紹介された二人は誰か。",
        "answer": "幸徳秋水と片山潜",
        "source": "（p.24）",
        "aliases": [
          "幸徳秋水と片山潜"
        ]
      },
      {
        "number": 18,
        "actual": false,
        "prompt": "日本で工場法が制定された年は何年か。",
        "answer": "1911年",
        "source": "（p.25）",
        "aliases": [
          "1911年"
        ]
      },
      {
        "number": 19,
        "actual": false,
        "prompt": "日本の工場法が施行された年は何年か。",
        "answer": "1916年",
        "source": "（p.25）",
        "aliases": [
          "1916年"
        ]
      },
      {
        "number": 20,
        "actual": false,
        "prompt": "1911年工場法は少年・女性の労働時間を何時間以内に制限したか。",
        "answer": "12時間以内",
        "source": "（p.25）",
        "aliases": [
          "12時間以内"
        ]
      },
      {
        "number": 21,
        "actual": false,
        "prompt": "1911年工場法の適用対象は何人以上の工場だったか。",
        "answer": "15人以上",
        "source": "（p.25）",
        "aliases": [
          "15人以上"
        ]
      },
      {
        "number": 22,
        "actual": false,
        "prompt": "1923年改正工場法は適用対象を何人以上に拡大したか。",
        "answer": "10人以上",
        "source": "（p.25）",
        "aliases": [
          "10人以上"
        ]
      },
      {
        "number": 23,
        "actual": false,
        "prompt": "ヴェブレンは「労働しないこと」を何の証と考えたか。",
        "answer": "特権の証",
        "source": "（p.26）",
        "aliases": [
          "特権の証"
        ]
      },
      {
        "number": 24,
        "actual": true,
        "prompt": "ヴェブレンの「誇示的余暇」とは何か。",
        "answer": "暇やぜいたくな活動を、地位や富の高さを示すために見せること",
        "source": "（第13回p.4）",
        "aliases": [
          "暇やぜいたくな活動を、地位や富の高さを示すために見せること",
          "暇やぜいたくな活動を",
          "地位や富の高さを示すために見せること"
        ]
      },
      {
        "number": 25,
        "actual": false,
        "prompt": "世界最古の日刊紙として紹介された新聞は何か。",
        "answer": "『アインコメンデ・ツァイトゥンゲン』",
        "source": "（p.29）",
        "aliases": [
          "『アインコメンデ・ツァイトゥンゲン』",
          "『アインコメンデ",
          "ツァイトゥンゲン』"
        ]
      },
      {
        "number": 26,
        "actual": false,
        "prompt": "世界最古の日刊紙が発行された国と年は何か。",
        "answer": "1650年のドイツ",
        "source": "（p.29）",
        "aliases": [
          "1650年のドイツ"
        ]
      },
      {
        "number": 27,
        "actual": false,
        "prompt": "イギリス初の日刊紙は何か。",
        "answer": "『ザ・デイリー・クーラント』",
        "source": "（p.30）",
        "aliases": [
          "『ザ・デイリー・クーラント』",
          "『ザ",
          "デイリー",
          "クーラント』"
        ]
      },
      {
        "number": 28,
        "actual": false,
        "prompt": "『ザ・デイリー・クーラント』が創刊された年は何年か。",
        "answer": "1702年",
        "source": "（p.30）",
        "aliases": [
          "1702年"
        ]
      },
      {
        "number": 29,
        "actual": false,
        "prompt": "『ザ・デイリー・クーラント』を創刊した人物は誰か。",
        "answer": "エリザベス・マレット",
        "source": "（p.30）",
        "aliases": [
          "エリザベス・マレット",
          "エリザベス",
          "マレット"
        ]
      },
      {
        "number": 30,
        "actual": false,
        "prompt": "印刷新聞以前の手書き情報伝達を何というか。",
        "answer": "ニューズレター",
        "source": "（p.31）",
        "aliases": [
          "ニューズレター"
        ]
      },
      {
        "number": 31,
        "actual": false,
        "prompt": "ニューズレターの主な読者層は誰だったか。",
        "answer": "地主・官僚・上流階級",
        "source": "（p.31）",
        "aliases": [
          "地主・官僚・上流階級",
          "地主",
          "官僚",
          "上流階級"
        ]
      },
      {
        "number": 32,
        "actual": false,
        "prompt": "初の週刊絵入り新聞は何か。",
        "answer": "Illustrated London News",
        "source": "（p.32）",
        "aliases": [
          "Illustrated London News"
        ]
      },
      {
        "number": 33,
        "actual": false,
        "prompt": "Illustrated London Newsが創刊された年は何年か。",
        "answer": "1842年",
        "source": "（p.32）",
        "aliases": [
          "1842年"
        ]
      },
      {
        "number": 34,
        "actual": false,
        "prompt": "Illustrated London Newsが確立した報道形式は何か。",
        "answer": "多数の図版によるビジュアル報道",
        "source": "（p.32）",
        "aliases": [
          "多数の図版によるビジュアル報道"
        ]
      },
      {
        "number": 35,
        "actual": false,
        "prompt": "18世紀後半から王侯貴族の海浜保養地として発展した都市はどこか。",
        "answer": "ブライトン",
        "source": "（p.37）",
        "aliases": [
          "ブライトン"
        ]
      },
      {
        "number": 36,
        "actual": false,
        "prompt": "ブライトンの発展を大衆化した交通手段は何か。",
        "answer": "鉄道",
        "source": "（p.37）",
        "aliases": [
          "鉄道"
        ]
      },
      {
        "number": 37,
        "actual": false,
        "prompt": "海水浴時の着替えや海への移動に使われた小屋付き車両を何というか。",
        "answer": "Bathing machine",
        "source": "（p.40）",
        "aliases": [
          "Bathing machine"
        ]
      },
      {
        "number": 38,
        "actual": false,
        "prompt": "19世紀後半に工場労働者向け大衆リゾートとして発展した都市はどこか。",
        "answer": "ブラックプール",
        "source": "（p.42）",
        "aliases": [
          "ブラックプール"
        ]
      },
      {
        "number": 39,
        "actual": true,
        "prompt": "ブラックプールが「レジャーの民主化」を象徴する理由は何か。",
        "answer": "鉄道で労働者も訪れられ、低価格の大衆娯楽が発展したため",
        "source": "（第13回p.3）",
        "aliases": [
          "鉄道で労働者も訪れられ、低価格の大衆娯楽が発展したため",
          "鉄道で労働者も訪れられ",
          "低価格の大衆娯楽が発展したため"
        ]
      },
      {
        "number": 40,
        "actual": false,
        "prompt": "ブラックプールの代表的な娯楽施設を三つ答えよ。",
        "answer": "プレジャー・ビーチ、ピア、観覧車・イルミネーション",
        "source": "（p.42）",
        "aliases": [
          "プレジャー・ビーチ、ピア、観覧車・イルミネーション",
          "プレジャー",
          "ビーチ",
          "ピア",
          "観覧車",
          "イルミネーション"
        ]
      },
      {
        "number": 41,
        "actual": false,
        "prompt": "産業社会の身体とレジャーの身体はどのように対比されたか。",
        "answer": "疲れた身体と快楽の身体",
        "source": "（p.43）",
        "aliases": [
          "疲れた身体と快楽の身体"
        ]
      },
      {
        "number": 42,
        "actual": false,
        "prompt": "レジャー空間の楽しさを作った三つの技術は何か。",
        "answer": "鉄道・照明・音響",
        "source": "（p.43）",
        "aliases": [
          "鉄道・照明・音響",
          "鉄道",
          "照明",
          "音響"
        ]
      },
      {
        "number": 43,
        "actual": false,
        "prompt": "労働の近代化は何の価値を生み出したか。",
        "answer": "遊ぶこと・余暇の価値",
        "source": "（p.51）",
        "aliases": [
          "遊ぶこと・余暇の価値",
          "遊ぶこと",
          "余暇の価値"
        ]
      },
      {
        "number": 44,
        "actual": false,
        "prompt": "技術は余暇に対して何を行ったか。",
        "answer": "楽しむことを制度化・可視化した",
        "source": "（p.51）",
        "aliases": [
          "楽しむことを制度化・可視化した",
          "楽しむことを制度化",
          "可視化した"
        ]
      }
    ]
  },
  {
    "lesson": 13,
    "title": "管理される身体",
    "questions": [
      {
        "number": 1,
        "actual": false,
        "prompt": "近代国家が身体を管理した代表的な四施設は何か。",
        "answer": "学校・工場・軍隊・病院",
        "source": "（p.6, 18）",
        "aliases": [
          "学校・工場・軍隊・病院",
          "学校",
          "工場",
          "軍隊",
          "病院"
        ]
      },
      {
        "number": 2,
        "actual": true,
        "prompt": "学校・工場・軍隊・病院に共通する管理の仕組みは何か。",
        "answer": "時間を区切り、空間に配置し、身体を測り、記録し、標準に近づけること",
        "source": "（第14回p.2）",
        "aliases": [
          "時間を区切り、空間に配置し、身体を測り、記録し、標準に近づけること",
          "時間を区切り",
          "空間に配置し",
          "身体を測り",
          "記録し",
          "標準に近づけること"
        ]
      },
      {
        "number": 3,
        "actual": false,
        "prompt": "日本で学制が頒布された年は何年か。",
        "answer": "1872年",
        "source": "（p.7）",
        "aliases": [
          "1872年"
        ]
      },
      {
        "number": 4,
        "actual": false,
        "prompt": "1872年の学制が参考にした教育思想は何か。",
        "answer": "フランス的自由主義",
        "source": "（p.7）",
        "aliases": [
          "フランス的自由主義"
        ]
      },
      {
        "number": 5,
        "actual": false,
        "prompt": "教育令が出された年は何年か。",
        "answer": "1879年",
        "source": "（p.7）",
        "aliases": [
          "1879年"
        ]
      },
      {
        "number": 6,
        "actual": false,
        "prompt": "1879年教育令が参考にした教育制度は何か。",
        "answer": "アメリカ式自由主義的教育制度",
        "source": "（p.7）",
        "aliases": [
          "アメリカ式自由主義的教育制度"
        ]
      },
      {
        "number": 7,
        "actual": false,
        "prompt": "学校令が出された年は何年か。",
        "answer": "1886年",
        "source": "（p.7）",
        "aliases": [
          "1886年"
        ]
      },
      {
        "number": 8,
        "actual": false,
        "prompt": "1886年学校令で義務教育は何年とされたか。",
        "answer": "4年",
        "source": "（p.7）",
        "aliases": [
          "4年"
        ]
      },
      {
        "number": 9,
        "actual": false,
        "prompt": "初代文部大臣として学校令を発令した人物は誰か。",
        "answer": "森有礼",
        "source": "（p.7）",
        "aliases": [
          "森有礼"
        ]
      },
      {
        "number": 10,
        "actual": false,
        "prompt": "教育勅語が出された年は何年か。",
        "answer": "1890年",
        "source": "（p.7）",
        "aliases": [
          "1890年"
        ]
      },
      {
        "number": 11,
        "actual": false,
        "prompt": "教育勅語の作成で中心となった人物は誰か。",
        "answer": "井上毅",
        "source": "（p.7）",
        "aliases": [
          "井上毅"
        ]
      },
      {
        "number": 12,
        "actual": false,
        "prompt": "学校で身体を管理する代表的な三つの仕組みは何か。",
        "answer": "時間割・号令・制服",
        "source": "（p.9）",
        "aliases": [
          "時間割・号令・制服",
          "時間割",
          "号令",
          "制服"
        ]
      },
      {
        "number": 13,
        "actual": false,
        "prompt": "軍隊で身体を管理する三つの方法は何か。",
        "answer": "訓練・検査・従属",
        "source": "（p.11-12）",
        "aliases": [
          "訓練・検査・従属",
          "訓練",
          "検査",
          "従属"
        ]
      },
      {
        "number": 14,
        "actual": false,
        "prompt": "病院における身体管理の三つの方法は何か。",
        "answer": "診断・入院・隔離",
        "source": "（p.13）",
        "aliases": [
          "診断・入院・隔離",
          "診断",
          "入院",
          "隔離"
        ]
      },
      {
        "number": 15,
        "actual": false,
        "prompt": "近代病院が病気の治療以外に行ったことは何か。",
        "answer": "身体や精神を観察・分類し、正常／異常を線引きすること",
        "source": "（p.13-14）",
        "aliases": [
          "身体や精神を観察・分類し、正常／異常を線引きすること",
          "身体や精神を観察",
          "分類し",
          "正常",
          "異常を線引きすること"
        ]
      },
      {
        "number": 16,
        "actual": false,
        "prompt": "精神医療と国家の知の例として扱われた病院はどこか。",
        "answer": "松沢病院",
        "source": "（p.14）",
        "aliases": [
          "松沢病院"
        ]
      },
      {
        "number": 17,
        "actual": false,
        "prompt": "松沢病院と研究・教育で結びついた機関はどこか。",
        "answer": "東京帝国大学医学部",
        "source": "（p.14）",
        "aliases": [
          "東京帝国大学医学部"
        ]
      },
      {
        "number": 18,
        "actual": false,
        "prompt": "医療・衛生管理の利点は何か。",
        "answer": "感染症対策・治療・生活環境の改善",
        "source": "（p.15）",
        "aliases": [
          "感染症対策・治療・生活環境の改善",
          "感染症対策",
          "治療",
          "生活環境の改善"
        ]
      },
      {
        "number": 19,
        "actual": true,
        "prompt": "医療・衛生管理について授業に最も合う説明は何か。",
        "answer": "感染症対策や治療に役立つ一方、排除や差別につながる場合もある",
        "source": "（第14回p.4）",
        "aliases": [
          "感染症対策や治療に役立つ一方、排除や差別につながる場合もある",
          "感染症対策や治療に役立つ一方",
          "排除や差別につながる場合もある"
        ]
      },
      {
        "number": 20,
        "actual": false,
        "prompt": "伝染病予防規則が制定された年は何年か。",
        "answer": "1879年",
        "source": "（p.16）",
        "aliases": [
          "1879年"
        ]
      },
      {
        "number": 21,
        "actual": false,
        "prompt": "隔離病舎が設けられた感染症を三つ答えよ。",
        "answer": "コレラ・天然痘・赤痢",
        "source": "（p.16）",
        "aliases": [
          "コレラ・天然痘・赤痢",
          "コレラ",
          "天然痘",
          "赤痢"
        ]
      },
      {
        "number": 22,
        "actual": false,
        "prompt": "長期療養・隔離の対象となった「亡国病」と呼ばれる病気は何か。",
        "answer": "結核",
        "source": "（p.16）",
        "aliases": [
          "結核"
        ]
      },
      {
        "number": 23,
        "actual": false,
        "prompt": "日本初のハンセン病法制「癩予防ニ関スル件」が公布された年は何年か。",
        "answer": "1897年",
        "source": "（p.17）",
        "aliases": [
          "1897年"
        ]
      },
      {
        "number": 24,
        "actual": false,
        "prompt": "公立のハンセン病療養所が設立された年は何年か。",
        "answer": "1909年",
        "source": "（p.17）",
        "aliases": [
          "1909年"
        ]
      },
      {
        "number": 25,
        "actual": false,
        "prompt": "ハンセン病強制隔離政策について国が謝罪・賠償を行った年は何年か。",
        "answer": "2001年",
        "source": "（p.17）",
        "aliases": [
          "2001年"
        ]
      },
      {
        "number": 26,
        "actual": false,
        "prompt": "ハンセン病患者救済に関わった二人の外国人女性は誰か。",
        "answer": "ハンナ・リデルとエダ・ライト",
        "source": "（p.17）",
        "aliases": [
          "ハンナ・リデルとエダ・ライト",
          "ハンナ",
          "リデルとエダ",
          "ライト"
        ]
      },
      {
        "number": 27,
        "actual": false,
        "prompt": "学校における記録・評価の例を三つ答えよ。",
        "answer": "出席・成績・身体測定",
        "source": "（p.18）",
        "aliases": [
          "出席・成績・身体測定",
          "出席",
          "成績",
          "身体測定"
        ]
      },
      {
        "number": 28,
        "actual": false,
        "prompt": "工場における管理の例を三つ答えよ。",
        "answer": "始業終業・作業工程・能率や安全管理",
        "source": "（p.18）",
        "aliases": [
          "始業終業・作業工程・能率や安全管理",
          "始業終業",
          "作業工程",
          "能率や安全管理"
        ]
      },
      {
        "number": 29,
        "actual": false,
        "prompt": "病院における記録の代表例は何か。",
        "answer": "カルテ",
        "source": "（p.18）",
        "aliases": [
          "カルテ"
        ]
      },
      {
        "number": 30,
        "actual": false,
        "prompt": "『監獄の誕生』を書いた思想家は誰か。",
        "answer": "ミシェル・フーコー",
        "source": "（p.19）",
        "aliases": [
          "ミシェル・フーコー",
          "ミシェル",
          "フーコー"
        ]
      },
      {
        "number": 31,
        "actual": true,
        "prompt": "フーコーの「規律訓練型社会」とは何か。",
        "answer": "学校・軍隊・病院などの制度や検査を通して、人が自分から規則に合わせて行動する社会",
        "source": "（第14回p.3）",
        "aliases": [
          "学校・軍隊・病院などの制度や検査を通して、人が自分から規則に合わせて行動する社会",
          "学校",
          "軍隊",
          "病院などの制度や検査を通して",
          "人が自分から規則に合わせて行動する社会"
        ]
      },
      {
        "number": 32,
        "actual": false,
        "prompt": "規律訓練型社会の三要素は何か。",
        "answer": "監視・規格化・訓練",
        "source": "（p.19）",
        "aliases": [
          "監視・規格化・訓練",
          "監視",
          "規格化",
          "訓練"
        ]
      },
      {
        "number": 33,
        "actual": false,
        "prompt": "規格化とは何か。",
        "answer": "人を平均・標準・正常に近づけること",
        "source": "（p.19）",
        "aliases": [
          "人を平均・標準・正常に近づけること",
          "人を平均",
          "標準",
          "正常に近づけること"
        ]
      },
      {
        "number": 34,
        "actual": false,
        "prompt": "近代都市で衛生政策として整備されたものを三つ答えよ。",
        "answer": "下水道・公園・隔離施設",
        "source": "（p.22）",
        "aliases": [
          "下水道・公園・隔離施設",
          "下水道",
          "公園",
          "隔離施設"
        ]
      },
      {
        "number": 35,
        "actual": false,
        "prompt": "衛生思想では健康が国家の何と結びつけられたか。",
        "answer": "生産性",
        "source": "（p.22）",
        "aliases": [
          "生産性"
        ]
      },
      {
        "number": 36,
        "actual": false,
        "prompt": "明治期の市区改正が目的とした三つのものは何か。",
        "answer": "感染症対策・火災対策・都市の秩序化",
        "source": "（p.24）",
        "aliases": [
          "感染症対策・火災対策・都市の秩序化",
          "感染症対策",
          "火災対策",
          "都市の秩序化"
        ]
      },
      {
        "number": 37,
        "actual": false,
        "prompt": "人間を管理しやすくするために用いられた数値化の例を四つ答えよ。",
        "answer": "体格測定・学力テスト・IQ・偏差値",
        "source": "（p.26）",
        "aliases": [
          "体格測定・学力テスト・IQ・偏差値",
          "体格測定",
          "学力テスト",
          "IQ",
          "偏差値"
        ]
      },
      {
        "number": 38,
        "actual": false,
        "prompt": "数値化が作り出す「ふつう」の基準は何か。",
        "answer": "平均値",
        "source": "（p.26）",
        "aliases": [
          "平均値"
        ]
      },
      {
        "number": 39,
        "actual": false,
        "prompt": "現代に続く身体管理の例を三つ答えよ。",
        "answer": "健康診断・監視カメラ・GPSやSNS記録",
        "source": "（p.27）",
        "aliases": [
          "健康診断・監視カメラ・GPSやSNS記録",
          "健康診断",
          "監視カメラ",
          "GPSやSNS記録"
        ]
      },
      {
        "number": 40,
        "actual": false,
        "prompt": "管理制度を評価するときに問うべき二つの視点は何か。",
        "answer": "誰を守るか、誰を苦しくするか",
        "source": "（p.28-32）",
        "aliases": [
          "誰を守るか、誰を苦しくするか",
          "誰を守るか",
          "誰を苦しくするか"
        ]
      },
      {
        "number": 41,
        "actual": false,
        "prompt": "管理による自由侵害を減らすためのルールを一つ答えよ。",
        "answer": "同意・データ削除・閲覧範囲制限・例外対応のいずれか",
        "source": "（p.30）",
        "aliases": [
          "同意・データ削除・閲覧範囲制限・例外対応のいずれか",
          "同意",
          "データ削除",
          "閲覧範囲制限",
          "例外対応のいずれか"
        ]
      },
      {
        "number": 42,
        "actual": false,
        "prompt": "近代社会の管理が持つ二面性は何か。",
        "answer": "安全・健康・教育・効率を支える一方、標準から外れた人を問題化する",
        "source": "（p.32）",
        "aliases": [
          "安全・健康・教育・効率を支える一方、標準から外れた人を問題化する",
          "安全",
          "健康",
          "教育",
          "効率を支える一方",
          "標準から外れた人を問題化する"
        ]
      }
    ]
  },
  {
    "lesson": 14,
    "title": "フランス革命と「理性の記述」",
    "questions": [
      {
        "number": 1,
        "actual": false,
        "prompt": "第14回の中心テーマは世界を何で記述し直すことか。",
        "answer": "言葉と数値",
        "source": "（p.5）",
        "aliases": [
          "言葉と数値"
        ]
      },
      {
        "number": 2,
        "actual": false,
        "prompt": "『百科全書』を編纂した中心人物は誰か。",
        "answer": "ディドロとダランベール",
        "source": "（p.6）",
        "aliases": [
          "ディドロとダランベール"
        ]
      },
      {
        "number": 3,
        "actual": false,
        "prompt": "『百科全書』の歴史的役割は何か。",
        "answer": "知識を体系化し、市民へ普及・公開したこと",
        "source": "（p.6, 13）",
        "aliases": [
          "知識を体系化し、市民へ普及・公開したこと",
          "知識を体系化し",
          "市民へ普及",
          "公開したこと"
        ]
      },
      {
        "number": 4,
        "actual": false,
        "prompt": "知識の普及がもたらした世界観の変化は何か。",
        "answer": "神や王の権威に依存せず、理性で世界を理解する見方",
        "source": "（p.7-9）",
        "aliases": [
          "神や王の権威に依存せず、理性で世界を理解する見方",
          "神や王の権威に依存せず",
          "理性で世界を理解する見方"
        ]
      },
      {
        "number": 5,
        "actual": false,
        "prompt": "1992年にガリレオ有罪判決を誤りと認めた教皇は誰か。",
        "answer": "ヨハネ・パウロ2世",
        "source": "（p.8）",
        "aliases": [
          "ヨハネ・パウロ2世",
          "ヨハネ",
          "パウロ2世"
        ]
      },
      {
        "number": 6,
        "actual": false,
        "prompt": "2008年にローマ大学での講演が抗議により中止となった教皇は誰か。",
        "answer": "ベネディクト16世",
        "source": "（p.8）",
        "aliases": [
          "ベネディクト16世"
        ]
      },
      {
        "number": 7,
        "actual": false,
        "prompt": "啓蒙思想の核心となった人間の能力は何か。",
        "answer": "理性",
        "source": "（p.9）",
        "aliases": [
          "理性"
        ]
      },
      {
        "number": 8,
        "actual": false,
        "prompt": "革命前フランス社会の特権は何によって決まったか。",
        "answer": "出生・血統や地域",
        "source": "（p.11）",
        "aliases": [
          "出生・血統や地域",
          "出生",
          "血統や地域"
        ]
      },
      {
        "number": 9,
        "actual": false,
        "prompt": "革命前フランスで精神的支配を担った組織は何か。",
        "answer": "教会",
        "source": "（p.11）",
        "aliases": [
          "教会"
        ]
      },
      {
        "number": 10,
        "actual": false,
        "prompt": "職人の技術が一般市民に開かれなかった仕組みは何か。",
        "answer": "ギルド内の秘伝・知識の独占",
        "source": "（p.12）",
        "aliases": [
          "ギルド内の秘伝・知識の独占",
          "ギルド内の秘伝",
          "知識の独占"
        ]
      },
      {
        "number": 11,
        "actual": false,
        "prompt": "職人の秘伝を解体した方法は何か。",
        "answer": "技術を文章化・図解化して公開すること",
        "source": "（p.13）",
        "aliases": [
          "技術を文章化・図解化して公開すること",
          "技術を文章化",
          "図解化して公開すること"
        ]
      },
      {
        "number": 12,
        "actual": false,
        "prompt": "フランス革命で打破された二つの政治社会制度は何か。",
        "answer": "王政と身分制",
        "source": "（p.14）",
        "aliases": [
          "王政と身分制"
        ]
      },
      {
        "number": 13,
        "actual": false,
        "prompt": "王や神という絶対基準が消えた後、革命政府は何を社会設計の基準にしたか。",
        "answer": "人間の理性",
        "source": "（p.15）",
        "aliases": [
          "人間の理性"
        ]
      },
      {
        "number": 14,
        "actual": false,
        "prompt": "理性による社会のゼロベース設計が目指したものは何か。",
        "answer": "伝統や慣習を排し、計測可能で合理的なシステムを作ること",
        "source": "（p.16）",
        "aliases": [
          "伝統や慣習を排し、計測可能で合理的なシステムを作ること",
          "伝統や慣習を排し",
          "計測可能で合理的なシステムを作ること"
        ]
      },
      {
        "number": 15,
        "actual": false,
        "prompt": "革命暦では1日は何時間とされたか。",
        "answer": "10時間",
        "source": "（p.17）",
        "aliases": [
          "10時間"
        ]
      },
      {
        "number": 16,
        "actual": false,
        "prompt": "革命暦では1時間は何分とされたか。",
        "answer": "100分",
        "source": "（p.17）",
        "aliases": [
          "100分"
        ]
      },
      {
        "number": 17,
        "actual": false,
        "prompt": "革命暦では1分は何秒とされたか。",
        "answer": "100秒",
        "source": "（p.17）",
        "aliases": [
          "100秒"
        ]
      },
      {
        "number": 18,
        "actual": false,
        "prompt": "革命暦では1週間は何日とされたか。",
        "answer": "10日",
        "source": "（p.18）",
        "aliases": [
          "10日"
        ]
      },
      {
        "number": 19,
        "actual": false,
        "prompt": "革命暦では1か月は何日とされたか。",
        "answer": "30日",
        "source": "（p.18）",
        "aliases": [
          "30日"
        ]
      },
      {
        "number": 20,
        "actual": false,
        "prompt": "フランス革命期に統一が進められた度量衡制度は何か。",
        "answer": "メートル法",
        "source": "（p.19-23）",
        "aliases": [
          "メートル法"
        ]
      },
      {
        "number": 21,
        "actual": false,
        "prompt": "革命前のフランス国内にはおよそ何種類の独自単位があったか。",
        "answer": "約800",
        "source": "（p.20）",
        "aliases": [
          "約800"
        ]
      },
      {
        "number": 22,
        "actual": false,
        "prompt": "地域ごとに異なる単位が領主の権力と結びついた理由は何か。",
        "answer": "領主が基準を勝手に決め、民衆から搾取できたため",
        "source": "（p.20）",
        "aliases": [
          "領主が基準を勝手に決め、民衆から搾取できたため",
          "領主が基準を勝手に決め",
          "民衆から搾取できたため"
        ]
      },
      {
        "number": 23,
        "actual": true,
        "prompt": "フランス革命期にメートル法が制定された背景は何か。",
        "answer": "領主ごとに異なる単位を廃し、地球の経線を基準とする普遍的な単位を作るため",
        "source": "（第15回p.2）",
        "aliases": [
          "領主ごとに異なる単位を廃し、地球の経線を基準とする普遍的な単位を作るため",
          "領主ごとに異なる単位を廃し",
          "地球の経線を基準とする普遍的な単位を作るため"
        ]
      },
      {
        "number": 24,
        "actual": false,
        "prompt": "日本がメートル条約に加盟した年は何年か。",
        "answer": "1885年",
        "source": "（p.21）",
        "aliases": [
          "1885年"
        ]
      },
      {
        "number": 25,
        "actual": false,
        "prompt": "メートル法統一を革命政府が決議した年は何年か。",
        "answer": "1790年",
        "source": "（p.22）",
        "aliases": [
          "1790年"
        ]
      },
      {
        "number": 26,
        "actual": false,
        "prompt": "メートル法が誕生した年は何年か。",
        "answer": "1795年",
        "source": "（p.23）",
        "aliases": [
          "1795年"
        ]
      },
      {
        "number": 27,
        "actual": false,
        "prompt": "メートル法制定に参加した数学者を二人答えよ。",
        "answer": "ラグランジュとラプラス",
        "source": "（p.23）",
        "aliases": [
          "ラグランジュとラプラス"
        ]
      },
      {
        "number": 28,
        "actual": false,
        "prompt": "1メートルは当時どのように定義されたか。",
        "answer": "地球の子午線（経線）の1000万分の1",
        "source": "（p.23）",
        "aliases": [
          "地球の子午線（経線）の1000万分の1",
          "地球の子午線の1000万分の1"
        ]
      },
      {
        "number": 29,
        "actual": false,
        "prompt": "単位の標準化が商業の便利さ以外にもたらした国家的効果は何か。",
        "answer": "土地・富・住民を一元的に把握し管理できるようにした",
        "source": "（p.24）",
        "aliases": [
          "土地・富・住民を一元的に把握し管理できるようにした",
          "土地",
          "住民を一元的に把握し管理できるようにした"
        ]
      },
      {
        "number": 30,
        "actual": false,
        "prompt": "statisticsの語源的意味として示されたものは何か。",
        "answer": "国家の学",
        "source": "（p.24）",
        "aliases": [
          "国家の学"
        ]
      },
      {
        "number": 31,
        "actual": false,
        "prompt": "近代統計学の祖とされる人物は誰か。",
        "answer": "アドルフ・ケトレー",
        "source": "（p.24）",
        "aliases": [
          "アドルフ・ケトレー",
          "アドルフ",
          "ケトレー"
        ]
      },
      {
        "number": 32,
        "actual": false,
        "prompt": "メートル法はフーコー的に見ると何のインフラか。",
        "answer": "近代的な管理社会のインフラ",
        "source": "（p.25）",
        "aliases": [
          "近代的な管理社会のインフラ"
        ]
      },
      {
        "number": 33,
        "actual": false,
        "prompt": "フランス革命を象徴する処刑器具は何か。",
        "answer": "ギロチン",
        "source": "（p.26）",
        "aliases": [
          "ギロチン"
        ]
      },
      {
        "number": 34,
        "actual": false,
        "prompt": "ギロチンが正式採用された年は何年か。",
        "answer": "1792年",
        "source": "（p.26）",
        "aliases": [
          "1792年"
        ]
      },
      {
        "number": 35,
        "actual": false,
        "prompt": "ギロチンを提案した医師は誰か。",
        "answer": "ジョゼフ・ギヨタン",
        "source": "（p.27）",
        "aliases": [
          "ジョゼフ・ギヨタン",
          "ジョゼフ",
          "ギヨタン"
        ]
      },
      {
        "number": 36,
        "actual": true,
        "prompt": "ギロチン導入の本来の目的は何か。",
        "answer": "身分に関係なく、平等で苦痛の少ない死を与える人道的な刑罰にすること",
        "source": "（第15回p.3）",
        "aliases": [
          "身分に関係なく、平等で苦痛の少ない死を与える人道的な刑罰にすること",
          "身分に関係なく",
          "平等で苦痛の少ない死を与える人道的な刑罰にすること"
        ]
      },
      {
        "number": 37,
        "actual": false,
        "prompt": "旧制度下では処刑方法にどのような身分差があったか。",
        "answer": "貴族は斬首、平民は拷問的で残酷な処刑を受けた",
        "source": "（p.27）",
        "aliases": [
          "貴族は斬首、平民は拷問的で残酷な処刑を受けた",
          "貴族は斬首",
          "平民は拷問的で残酷な処刑を受けた"
        ]
      },
      {
        "number": 38,
        "actual": false,
        "prompt": "ギロチンは処刑をどのようなプロセスに変えたか。",
        "answer": "感情を挟まない機械的・事務的・効率的なプロセス",
        "source": "（p.28）",
        "aliases": [
          "感情を挟まない機械的・事務的・効率的なプロセス",
          "感情を挟まない機械的",
          "事務的",
          "効率的なプロセス"
        ]
      },
      {
        "number": 39,
        "actual": false,
        "prompt": "ギロチンの人道的設計が生んだ逆説は何か。",
        "answer": "高い効率性が大量処刑を容易にしたこと",
        "source": "（p.29）",
        "aliases": [
          "高い効率性が大量処刑を容易にしたこと"
        ]
      },
      {
        "number": 40,
        "actual": false,
        "prompt": "ギロチンによる大量処刑を進めた政治勢力は何か。",
        "answer": "ジャコバン派",
        "source": "（p.29）",
        "aliases": [
          "ジャコバン派"
        ]
      },
      {
        "number": 41,
        "actual": true,
        "prompt": "フランス革命期の合理的再設計の例として不適切なものは何か。",
        "answer": "キリスト教の教会権力を強めるため、神の意志に基づく新しい暦を導入すること",
        "source": "（第15回p.4）",
        "aliases": [
          "キリスト教の教会権力を強めるため、神の意志に基づく新しい暦を導入すること",
          "キリスト教の教会権力を強めるため",
          "神の意志に基づく新しい暦を導入すること"
        ]
      },
      {
        "number": 42,
        "actual": false,
        "prompt": "革命期の標準化がもたらした「光」を三つ答えよ。",
        "answer": "人権宣言・メートル法・普遍的で平等なインフラ",
        "source": "（p.31）",
        "aliases": [
          "人権宣言・メートル法・普遍的で平等なインフラ",
          "人権宣言",
          "メートル法",
          "普遍的で平等なインフラ"
        ]
      },
      {
        "number": 43,
        "actual": false,
        "prompt": "革命期の標準化がもたらした「影」を二つ答えよ。",
        "answer": "効率的な大量処理と徹底的な人間管理",
        "source": "（p.31）",
        "aliases": [
          "効率的な大量処理と徹底的な人間管理"
        ]
      },
      {
        "number": 44,
        "actual": false,
        "prompt": "理性と標準化の中心的なトレードオフは何か。",
        "answer": "普遍的な公平性を生む一方、中央集権的な管理を強めること",
        "source": "（p.31-32）",
        "aliases": [
          "普遍的な公平性を生む一方、中央集権的な管理を強めること",
          "普遍的な公平性を生む一方",
          "中央集権的な管理を強めること"
        ]
      },
      {
        "number": 45,
        "actual": false,
        "prompt": "情報科学を学ぶ設計者に求められる倫理は何か。",
        "answer": "規格やシステムが生む利便性だけでなく、監視・排除・暴走という影にも自覚的であること",
        "source": "（p.33）",
        "aliases": [
          "規格やシステムが生む利便性だけでなく、監視・排除・暴走という影にも自覚的であること",
          "規格やシステムが生む利便性だけでなく",
          "監視",
          "排除",
          "暴走という影にも自覚的であること"
        ]
      },
      {
        "number": 46,
        "actual": false,
        "prompt": "フランス革命は政治ドラマだけでなく何と位置づけられたか。",
        "answer": "壮大な社会実験",
        "source": "（p.34）",
        "aliases": [
          "壮大な社会実験"
        ]
      },
      {
        "number": 47,
        "actual": false,
        "prompt": "百科全書からメートル法への流れを一言で表すと何か。",
        "answer": "知識の記述・公開から社会の標準化・再設計への展開",
        "source": "（p.34）",
        "aliases": [
          "知識の記述・公開から社会の標準化・再設計への展開",
          "知識の記述",
          "公開から社会の標準化",
          "再設計への展開"
        ]
      }
    ]
  },
  {
    "lesson": 15,
    "title": "アメリカの産業化とフィランソロピー",
    "questions": [
      {
        "number": 1,
        "actual": false,
        "prompt": "19世紀後半のアメリカ産業化を支えた三つの主要産業は何か。",
        "answer": "鉄道・石油・鉄鋼",
        "source": "（p.8）",
        "aliases": [
          "鉄道・石油・鉄鋼",
          "鉄道",
          "石油",
          "鉄鋼"
        ]
      },
      {
        "number": 2,
        "actual": false,
        "prompt": "アメリカの産業化によって形成された市場は何か。",
        "answer": "全国市場",
        "source": "（p.8）",
        "aliases": [
          "全国市場"
        ]
      },
      {
        "number": 3,
        "actual": false,
        "prompt": "産業化が生んだプラスの面を二つ答えよ。",
        "answer": "豊かさと巨大企業の成長",
        "source": "（p.9）",
        "aliases": [
          "豊かさと巨大企業の成長"
        ]
      },
      {
        "number": 4,
        "actual": false,
        "prompt": "産業化が生んだ影の面を三つ答えよ。",
        "answer": "富の集中・格差・労働問題",
        "source": "（p.9）",
        "aliases": [
          "富の集中・格差・労働問題",
          "富の集中",
          "格差",
          "労働問題"
        ]
      },
      {
        "number": 5,
        "actual": false,
        "prompt": "巨大企業家を肯定的に呼ぶ表現は何か。",
        "answer": "産業の英雄",
        "source": "（p.10）",
        "aliases": [
          "産業の英雄"
        ]
      },
      {
        "number": 6,
        "actual": false,
        "prompt": "巨大企業家を批判的に呼ぶ表現は何か。",
        "answer": "泥棒男爵（Robber Baron）",
        "source": "（p.10）",
        "aliases": [
          "泥棒男爵（Robber Baron）",
          "泥棒男爵"
        ]
      },
      {
        "number": 7,
        "actual": false,
        "prompt": "鉄鋼王と呼ばれた実業家は誰か。",
        "answer": "アンドリュー・カーネギー",
        "source": "（p.11）",
        "aliases": [
          "アンドリュー・カーネギー",
          "アンドリュー",
          "カーネギー"
        ]
      },
      {
        "number": 8,
        "actual": false,
        "prompt": "カーネギーの生没年はいつか。",
        "answer": "1835〜1919年",
        "source": "（p.11）",
        "aliases": [
          "1835〜1919年"
        ]
      },
      {
        "number": 9,
        "actual": false,
        "prompt": "カーネギーが著した富の社会的責任に関する文章は何か。",
        "answer": "「富の福音」",
        "source": "（p.11）",
        "aliases": [
          "「富の福音」"
        ]
      },
      {
        "number": 10,
        "actual": false,
        "prompt": "カーネギーは富裕層にどのような責任があると考えたか。",
        "answer": "富を社会へ還元する責任",
        "source": "（p.11）",
        "aliases": [
          "富を社会へ還元する責任"
        ]
      },
      {
        "number": 11,
        "actual": false,
        "prompt": "カーネギーが寄付した代表的な二分野は何か。",
        "answer": "図書館と教育機関",
        "source": "（p.11）",
        "aliases": [
          "図書館と教育機関"
        ]
      },
      {
        "number": 12,
        "actual": false,
        "prompt": "石油王と呼ばれた実業家は誰か。",
        "answer": "ジョン・D・ロックフェラー",
        "source": "（p.12）",
        "aliases": [
          "ジョン・D・ロックフェラー",
          "ジョン",
          "ロックフェラー"
        ]
      },
      {
        "number": 13,
        "actual": false,
        "prompt": "ロックフェラーの生没年はいつか。",
        "answer": "1839〜1937年",
        "source": "（p.12）",
        "aliases": [
          "1839〜1937年"
        ]
      },
      {
        "number": 14,
        "actual": false,
        "prompt": "ロックフェラーが支援した三分野は何か。",
        "answer": "教育・医療・研究",
        "source": "（p.12）",
        "aliases": [
          "教育・医療・研究",
          "教育",
          "医療",
          "研究"
        ]
      },
      {
        "number": 15,
        "actual": false,
        "prompt": "フィランソロピーとは単なる何にとどまらない活動か。",
        "answer": "寄付・慈善",
        "source": "（p.13）",
        "aliases": [
          "寄付・慈善",
          "寄付",
          "慈善"
        ]
      },
      {
        "number": 16,
        "actual": false,
        "prompt": "フィランソロピーとは何か。",
        "answer": "教育・研究・文化・医療などを支援し、社会課題そのものに関与する活動",
        "source": "（p.13）",
        "aliases": [
          "教育・研究・文化・医療などを支援し、社会課題そのものに関与する活動",
          "教育",
          "研究",
          "文化",
          "医療などを支援し",
          "社会課題そのものに関与する活動"
        ]
      },
      {
        "number": 17,
        "actual": false,
        "prompt": "フィランソロピーが国家より柔軟にできることは何か。",
        "answer": "国家が届きにくい課題や新しい試みを支援すること",
        "source": "（p.14）",
        "aliases": [
          "国家が届きにくい課題や新しい試みを支援すること"
        ]
      },
      {
        "number": 18,
        "actual": false,
        "prompt": "フィランソロピーの長期的な可能性は何か。",
        "answer": "社会に長く残る仕組みを作れること",
        "source": "（p.14）",
        "aliases": [
          "社会に長く残る仕組みを作れること"
        ]
      },
      {
        "number": 19,
        "actual": false,
        "prompt": "フィランソロピーが富の集中について生む問題は何か。",
        "answer": "富の集中を正当化する恐れ",
        "source": "（p.15）",
        "aliases": [
          "富の集中を正当化する恐れ"
        ]
      },
      {
        "number": 20,
        "actual": false,
        "prompt": "フィランソロピーで社会課題の優先順位を決める主体は誰になりやすいか。",
        "answer": "富裕層や企業・財団",
        "source": "（p.15）",
        "aliases": [
          "富裕層や企業・財団",
          "富裕層や企業",
          "財団"
        ]
      },
      {
        "number": 21,
        "actual": false,
        "prompt": "フィランソロピーと民主主義の間に生じる緊張は何か。",
        "answer": "私人の価値観が、民主的な決定を経ずに社会の優先順位を左右すること",
        "source": "（p.15）",
        "aliases": [
          "私人の価値観が、民主的な決定を経ずに社会の優先順位を左右すること",
          "私人の価値観が",
          "民主的な決定を経ずに社会の優先順位を左右すること"
        ]
      },
      {
        "number": 22,
        "actual": false,
        "prompt": "国家の社会課題対応における強みは何か。",
        "answer": "公平性と強制力",
        "source": "（p.16）",
        "aliases": [
          "公平性と強制力"
        ]
      },
      {
        "number": 23,
        "actual": false,
        "prompt": "国家の社会課題対応における限界は何か。",
        "answer": "対応が遅く、硬直的になりやすいこと",
        "source": "（p.16）",
        "aliases": [
          "対応が遅く、硬直的になりやすいこと",
          "対応が遅く",
          "硬直的になりやすいこと"
        ]
      },
      {
        "number": 24,
        "actual": false,
        "prompt": "企業の社会課題対応における強みは何か。",
        "answer": "資金・技術とスピード・実行力",
        "source": "（p.16）",
        "aliases": [
          "資金・技術とスピード・実行力",
          "資金",
          "技術とスピード",
          "実行力"
        ]
      },
      {
        "number": 25,
        "actual": false,
        "prompt": "企業の社会課題対応における限界は何か。",
        "answer": "利益との両立が必要なこと",
        "source": "（p.16）",
        "aliases": [
          "利益との両立が必要なこと"
        ]
      },
      {
        "number": 26,
        "actual": false,
        "prompt": "富裕層の社会課題対応における強みは何か。",
        "answer": "自由な発想と大きな資金力",
        "source": "（p.16）",
        "aliases": [
          "自由な発想と大きな資金力"
        ]
      },
      {
        "number": 27,
        "actual": false,
        "prompt": "富裕層の社会課題対応における限界は何か。",
        "answer": "個人の価値観に依存すること",
        "source": "（p.16）",
        "aliases": [
          "個人の価値観に依存すること"
        ]
      },
      {
        "number": 28,
        "actual": false,
        "prompt": "市民の社会課題対応における強みは何か。",
        "answer": "多様な視点を持ち、声を上げ選択できること",
        "source": "（p.16）",
        "aliases": [
          "多様な視点を持ち、声を上げ選択できること",
          "多様な視点を持ち",
          "声を上げ選択できること"
        ]
      },
      {
        "number": 29,
        "actual": false,
        "prompt": "市民の社会課題対応における限界は何か。",
        "answer": "力が分散しやすいこと",
        "source": "（p.16）",
        "aliases": [
          "力が分散しやすいこと"
        ]
      },
      {
        "number": 30,
        "actual": false,
        "prompt": "現代の企業・富裕層による社会貢献の代表的な形は何か。",
        "answer": "企業の社会貢献・財団・寄付",
        "source": "（p.17）",
        "aliases": [
          "企業の社会貢献・財団・寄付",
          "企業の社会貢献",
          "財団",
          "寄付"
        ]
      },
      {
        "number": 31,
        "actual": false,
        "prompt": "企業や富裕層に社会課題を任せきりにしてよいか。",
        "answer": "任せきりにせず、国家・企業・富裕層・市民の役割分担と監視が必要",
        "source": "（p.17, 23）",
        "aliases": [
          "任せきりにせず、国家・企業・富裕層・市民の役割分担と監視が必要",
          "任せきりにせず",
          "国家",
          "企業",
          "富裕層",
          "市民の役割分担と監視が必要"
        ]
      },
      {
        "number": 32,
        "actual": false,
        "prompt": "社会のために資金を使う際に最初に明確にすべきことは何か。",
        "answer": "何の課題に使うか",
        "source": "（p.18）",
        "aliases": [
          "何の課題に使うか"
        ]
      },
      {
        "number": 33,
        "actual": false,
        "prompt": "寄付先を決める際に問うべき受益者の視点は何か。",
        "answer": "誰が助かるか",
        "source": "（p.18）",
        "aliases": [
          "誰が助かるか"
        ]
      },
      {
        "number": 34,
        "actual": false,
        "prompt": "フィランソロピーの意思決定で最も重要な民主主義上の問いは何か。",
        "answer": "誰が決めるべきか",
        "source": "（p.18）",
        "aliases": [
          "誰が決めるべきか"
        ]
      },
      {
        "number": 35,
        "actual": false,
        "prompt": "期末試験の記述問題で求められる四つの内容は何か。",
        "answer": "歴史的事例、可能性、問題点、責任の所在についての考察",
        "source": "（p.20-22）",
        "aliases": [
          "歴史的事例、可能性、問題点、責任の所在についての考察",
          "歴史的事例",
          "可能性",
          "問題点",
          "責任の所在についての考察"
        ]
      },
      {
        "number": 36,
        "actual": false,
        "prompt": "記述問題の第1段落に書くべきものは何か。",
        "answer": "歴史的背景",
        "source": "（p.21）",
        "aliases": [
          "歴史的背景"
        ]
      },
      {
        "number": 37,
        "actual": false,
        "prompt": "記述問題の第2段落に書くべきものは何か。",
        "answer": "具体例",
        "source": "（p.21）",
        "aliases": [
          "具体例"
        ]
      },
      {
        "number": 38,
        "actual": false,
        "prompt": "記述問題の第3段落に書くべきものは何か。",
        "answer": "企業・富裕層が関わる可能性",
        "source": "（p.21）",
        "aliases": [
          "企業・富裕層が関わる可能性",
          "企業",
          "富裕層が関わる可能性"
        ]
      },
      {
        "number": 39,
        "actual": false,
        "prompt": "記述問題の第4段落に書くべきものは何か。",
        "answer": "問題点",
        "source": "（p.21）",
        "aliases": [
          "問題点"
        ]
      },
      {
        "number": 40,
        "actual": false,
        "prompt": "記述問題の第5段落に書くべきものは何か。",
        "answer": "自分の考え",
        "source": "（p.21）",
        "aliases": [
          "自分の考え"
        ]
      },
      {
        "number": 41,
        "actual": false,
        "prompt": "よい社会を作る責任は一つの主体だけで担えるか。",
        "answer": "担えず、国家・企業・富裕層・市民が分担する必要がある",
        "source": "（p.23）",
        "aliases": [
          "担えず、国家・企業・富裕層・市民が分担する必要がある",
          "担えず",
          "国家",
          "企業",
          "富裕層",
          "市民が分担する必要がある"
        ]
      },
      {
        "number": 42,
        "actual": false,
        "prompt": "第15回の最終的な問いは何か。",
        "answer": "巨大な富は誰のために使われるべきか、よい社会を作る責任は誰にあるか",
        "source": "（p.6, 23）",
        "aliases": [
          "巨大な富は誰のために使われるべきか、よい社会を作る責任は誰にあるか",
          "巨大な富は誰のために使われるべきか",
          "よい社会を作る責任は誰にあるか"
        ]
      }
    ]
  }
];

const HISTORY_QUESTIONS = HISTORY_LESSONS.flatMap((lesson) =>
  lesson.questions.map((question) => ({
    id: `h${String(lesson.lesson).padStart(2, "0")}-${String(question.number).padStart(3, "0")}`,
    subject: "history",
    lesson: lesson.lesson,
    lessonTitle: lesson.title,
    prompt: question.actual ? `★実出題: ${question.prompt}` : question.prompt,
    answer: question.answer,
    aliases: question.aliases,
    explanation: question.source ? `出典: ${question.source}` : "",
    actual: question.actual
  }))
);

const PROGRAMMING_QUESTIONS = [
  {
    id: "p-struct-001",
    topic: "構造体",
    type: "choice",
    prompt: "typedef struct を使う主な利点はどれか。",
    answer: "変数宣言で struct を毎回書かずに済む",
    choices: ["変数宣言で struct を毎回書かずに済む", "配列のサイズを自動で増やせる", "fopen の失敗を防げる", "文字列を = で代入できる"],
    explanation: "typedef struct により Character hero; のように型名だけで宣言できます。"
  },
  {
    id: "p-struct-002",
    topic: "構造体",
    type: "choice",
    prompt: "構造体変数 hero の hp メンバにアクセスする正しい式はどれか。",
    answer: "hero.hp",
    choices: ["hero.hp", "hero->hp", "hero::hp", "*hero.hp"],
    explanation: "構造体そのものは .、構造体ポインタは -> を使います。"
  },
  {
    id: "p-struct-003",
    topic: "構造体",
    type: "choice",
    prompt: "Character *p が構造体を指しているとき、hp にアクセスする正しい式はどれか。",
    answer: "p->hp",
    choices: ["p->hp", "p.hp", "&p.hp", "p[hp]"],
    explanation: "p はポインタなので p->hp。これは (*p).hp と同じ意味です。"
  },
  {
    id: "p-struct-004",
    topic: "構造体",
    type: "choice",
    prompt: "char name[50]; に \"神山四角子\" を代入する正しいコードはどれか。",
    answer: "strcpy(s1.name, \"神山四角子\");",
    choices: ["strcpy(s1.name, \"神山四角子\");", "s1.name = \"神山四角子\";", "s1->name = \"神山四角子\";", "s1.name[] = \"神山四角子\";"],
    explanation: "char 配列には = で文字列を丸ごと代入できないため strcpy を使います。"
  },
  {
    id: "p-struct-005",
    topic: "構造体",
    type: "choice",
    prompt: "関数内で構造体の中身を変更し、呼び出し元にも反映させたい。正しい渡し方はどれか。",
    answer: "構造体ポインタで渡す",
    choices: ["構造体ポインタで渡す", "構造体を値渡しする", "printf に渡す", "const char * に変換する"],
    explanation: "値渡しではコピーが変更されるだけです。呼び出し元を変えるにはポインタ渡しにします。"
  },
  {
    id: "p-struct-006",
    topic: "構造体",
    type: "fill",
    prompt: "空欄に入る演算子を答えなさい。",
    code: "void heal(Character *p) {\n    p[  ]hp += 10;\n}",
    answer: "->",
    aliases: ["->", "アロー"],
    explanation: "p は Character * なので p->hp と書きます。"
  },
  {
    id: "p-struct-007",
    topic: "構造体",
    type: "fill",
    prompt: "構造体変数 hero の hp に 100 を代入するコードの空欄を答えなさい。",
    code: "Character hero;\nhero[  ]hp = 100;",
    answer: ".",
    aliases: [".", "ドット"],
    explanation: "hero はポインタではなく構造体変数なので . を使います。"
  },
  {
    id: "p-malloc-001",
    topic: "malloc/free",
    type: "fill",
    prompt: "int を n 個ぶん動的確保する空欄を答えなさい。",
    code: "int *data = [  ](n * sizeof(int));",
    answer: "malloc",
    aliases: ["malloc"],
    explanation: "実行時に必要な個数を確保するには malloc を使います。"
  },
  {
    id: "p-malloc-002",
    topic: "malloc/free",
    type: "choice",
    prompt: "malloc が失敗したときに返す値はどれか。",
    answer: "NULL",
    choices: ["NULL", "EOF", "0", "-1"],
    explanation: "malloc 失敗時は NULL が返るため、直後に NULL チェックします。"
  },
  {
    id: "p-malloc-003",
    topic: "malloc/free",
    type: "fill",
    prompt: "malloc 失敗チェックの空欄を答えなさい。",
    code: "int *arr = malloc(n * sizeof(int));\nif (arr == [  ]) {\n    return 1;\n}",
    answer: "NULL",
    aliases: ["NULL", "null"],
    explanation: "確保失敗時の返り値は NULL です。"
  },
  {
    id: "p-malloc-004",
    topic: "malloc/free",
    type: "fill",
    prompt: "使い終わった動的メモリを解放する関数名を答えなさい。",
    code: "[  ](arr);\narr = NULL;",
    answer: "free",
    aliases: ["free"],
    explanation: "malloc で確保したメモリは free で解放します。"
  },
  {
    id: "p-malloc-005",
    topic: "malloc/free",
    type: "choice",
    prompt: "free を忘れると何が起きるか。",
    answer: "メモリリーク",
    choices: ["メモリリーク", "コンパイルエラー", "自動で fclose される", "GitHub に push される"],
    explanation: "解放忘れによりメモリが無駄に占有され続けます。"
  },
  {
    id: "p-malloc-006",
    topic: "malloc/free",
    type: "choice",
    prompt: "free(arr); のあと arr = NULL; とする主な理由はどれか。",
    answer: "ダングリングポインタを避けるため",
    choices: ["ダングリングポインタを避けるため", "配列の中身を並べ替えるため", "fgets の改行を消すため", "commit を取り消すため"],
    explanation: "解放済み領域を指し続ける危険を減らすため NULL を代入します。"
  },
  {
    id: "p-malloc-007",
    topic: "malloc/free",
    type: "bug",
    prompt: "このコードの危険なバグはどれか。",
    code: "int *arr = malloc(10 * sizeof(int));\narr[0] = 5;\nfree(arr);\nfree(arr);",
    answer: "二重 free",
    choices: ["二重 free", "NULL チェックが2回ある", "sizeof(int) が不要", "配列の添字が負"],
    explanation: "同じポインタを2回 free するとクラッシュなどの原因になります。"
  },
  {
    id: "p-malloc-008",
    topic: "malloc/free",
    type: "choice",
    prompt: "realloc の戻り値を直接元のポインタに代入しないほうがよい理由はどれか。",
    answer: "失敗時に元の領域を指すポインタを失う可能性がある",
    choices: ["失敗時に元の領域を指すポインタを失う可能性がある", "必ず配列が小さくなる", "必ずファイルが消える", "struct が使えなくなる"],
    explanation: "一時変数で受け取り、NULL チェック後に元のポインタへ代入します。"
  },
  {
    id: "p-file-001",
    topic: "ファイル操作",
    type: "choice",
    prompt: "fopen が失敗したとき返す値はどれか。",
    answer: "NULL",
    choices: ["NULL", "EOF", "0", "-1"],
    explanation: "fopen の直後は if (fp == NULL) で確認します。"
  },
  {
    id: "p-file-002",
    topic: "ファイル操作",
    type: "choice",
    prompt: "fopen の \"r\" モードで、ファイルが存在しない場合どうなるか。",
    answer: "NULL が返る",
    choices: ["NULL が返る", "新規作成される", "空文字が返る", "自動で追記モードになる"],
    explanation: "\"r\" は読み込み専用なので、存在しないファイルは開けません。"
  },
  {
    id: "p-file-003",
    topic: "ファイル操作",
    type: "choice",
    prompt: "fopen の \"w\" モードで、既存ファイルを開くとどうなるか。",
    answer: "中身を全消去して書き込む",
    choices: ["中身を全消去して書き込む", "末尾に追加する", "NULL が必ず返る", "読み込み専用になる"],
    explanation: "\"w\" は上書きモードです。既存内容は消えます。"
  },
  {
    id: "p-file-004",
    topic: "ファイル操作",
    type: "choice",
    prompt: "fopen の \"a\" モードの意味はどれか。",
    answer: "末尾に追記する",
    choices: ["末尾に追記する", "先頭から読む", "全消去して書く", "メモリを確保する"],
    explanation: "\"a\" は append、追記です。"
  },
  {
    id: "p-file-005",
    topic: "ファイル操作",
    type: "fill",
    prompt: "ファイルに書き込む関数名を答えなさい。",
    code: "FILE *fp = fopen(\"result.csv\", \"w\");\n[  ](fp, \"%s,%d\\n\", \"教室\", 25);",
    answer: "fprintf",
    aliases: ["fprintf"],
    explanation: "printf と違い、fprintf は第1引数に FILE * を指定します。"
  },
  {
    id: "p-file-006",
    topic: "ファイル操作",
    type: "fill",
    prompt: "float を小数1桁でCSVに書く書式を答えなさい。",
    code: "fprintf(fp, \"%s,%d,[  ]\\n\", \"教室\", 25, 60.5);",
    answer: "%.1f",
    aliases: ["%.1f", "% .1f"],
    explanation: "%f だと小数が6桁出るため、試験範囲では %.1f が重要です。"
  },
  {
    id: "p-file-007",
    topic: "ファイル操作",
    type: "fill",
    prompt: "使い終わったファイルを閉じる関数名を答えなさい。",
    code: "[  ](fp);\nfp = NULL;",
    answer: "fclose",
    aliases: ["fclose"],
    explanation: "書き込み内容を確実に反映するためにも fclose が必要です。"
  },
  {
    id: "p-file-008",
    topic: "ファイル操作",
    type: "bug",
    prompt: "このコードのバグを選びなさい。",
    code: "FILE *fp = fopen(\"sensor.csv\", \"w\");\nfprintf(fp, \"教室,25,60.5\\n\");\nfclose(fp);",
    answer: "fopen 直後の NULL チェックがない",
    choices: ["fopen 直後の NULL チェックがない", "fprintf ではなく printf を使うべき", "\"w\" ではファイルが作れない", "fclose は呼んではいけない"],
    explanation: "fopen 失敗時に fp == NULL のまま fprintf すると危険です。"
  },
  {
    id: "p-fgets-001",
    topic: "fgets/sscanf",
    type: "choice",
    prompt: "スペースや日本語を含む1行を丸ごと読むのに向く関数はどれか。",
    answer: "fgets",
    choices: ["fgets", "fscanf", "fprintf", "malloc"],
    explanation: "fscanf は空白で区切られやすいので、行単位では fgets が向きます。"
  },
  {
    id: "p-fgets-002",
    topic: "fgets/sscanf",
    type: "fill",
    prompt: "fgets の第2引数に入れる定番表現を答えなさい。",
    code: "char line[128];\nfgets(line, [  ], fp);",
    answer: "sizeof(line)",
    aliases: ["sizeof(line)", "sizeof line"],
    explanation: "バッファサイズを直接数値で書くより sizeof(line) が安全です。"
  },
  {
    id: "p-fgets-003",
    topic: "fgets/sscanf",
    type: "fill",
    prompt: "1行を読み続ける while 条件の空欄を答えなさい。",
    code: "while (fgets(line, sizeof(line), fp) != [  ]) {\n    puts(line);\n}",
    answer: "NULL",
    aliases: ["NULL", "null"],
    explanation: "fgets は読み込めなくなると NULL を返します。"
  },
  {
    id: "p-fgets-004",
    topic: "fgets/sscanf",
    type: "choice",
    prompt: "sscanf(line, \"%31[^,],%d,%f\", location, &temperature, &humidity); で & が不要なのはどれか。",
    answer: "location",
    choices: ["location", "temperature", "humidity", "すべて必要"],
    explanation: "char 配列名は先頭アドレスとして渡せるため & は不要です。"
  },
  {
    id: "p-fgets-005",
    topic: "fgets/sscanf",
    type: "choice",
    prompt: "%31[^,] の意味として近いものはどれか。",
    answer: "カンマまで最大31文字読む",
    choices: ["カンマまで最大31文字読む", "31行読み飛ばす", "31個の整数を読む", "小数第31位まで読む"],
    explanation: "[^,] はカンマ以外の文字列を読む指定です。"
  },
  {
    id: "p-fgets-006",
    topic: "fgets/sscanf",
    type: "bug",
    prompt: "この sscanf のバグはどれか。",
    code: "char location[32];\nint temperature;\nfloat humidity;\nsscanf(line, \"%31[^,],%d,%f\", &location, temperature, humidity);",
    answer: "char配列に & を付け、int/float に & を付けていない",
    choices: ["char配列に & を付け、int/float に & を付けていない", "sscanf では CSV を読めない", "%d は float 用である", "line は必ず malloc しないといけない"],
    explanation: "正しくは location, &temperature, &humidity です。"
  },
  {
    id: "p-git-001",
    topic: "GitHub",
    type: "choice",
    prompt: "git add の役割はどれか。",
    answer: "変更をステージングエリアに追加する",
    choices: ["変更をステージングエリアに追加する", "リモートに送信する", "他人のリポジトリをコピーする", "コンパイルする"],
    explanation: "add は次の commit に含める変更を選ぶ操作です。"
  },
  {
    id: "p-git-002",
    topic: "GitHub",
    type: "choice",
    prompt: "git commit の役割はどれか。",
    answer: "ローカルリポジトリに記録する",
    choices: ["ローカルリポジトリに記録する", "GitHub に送信する", "ファイルを削除する", "PR を承認する"],
    explanation: "commit は手元の履歴に記録します。"
  },
  {
    id: "p-git-003",
    topic: "GitHub",
    type: "choice",
    prompt: "git push の役割はどれか。",
    answer: "ローカルのコミットをリモートに送信する",
    choices: ["ローカルのコミットをリモートに送信する", "変更をステージングする", "C言語を実行する", "メモリを解放する"],
    explanation: "push して初めて GitHub 側に届きます。"
  },
  {
    id: "p-git-004",
    topic: "GitHub",
    type: "choice",
    prompt: "Fork の説明として正しいものはどれか。",
    answer: "他人のリポジトリを自分のGitHubアカウント上にコピーする",
    choices: ["他人のリポジトリを自分のGitHubアカウント上にコピーする", "リポジトリをPCにダウンロードする", "ファイルをコンパイルする", "メモリを動的確保する"],
    explanation: "clone はPCにダウンロード、Fork はGitHub上で自分用コピーを作る操作です。"
  },
  {
    id: "p-git-005",
    topic: "GitHub",
    type: "choice",
    prompt: "clone の説明として正しいものはどれか。",
    answer: "リポジトリを自分のローカルPCにダウンロードする",
    choices: ["リポジトリを自分のローカルPCにダウンロードする", "変更を元リポジトリへ提案する", "コードを自動修正する", "CSVを1行読む"],
    explanation: "clone はGitHubなどにあるリポジトリを手元に持ってくる操作です。"
  },
  {
    id: "p-git-006",
    topic: "GitHub",
    type: "choice",
    prompt: "Pull Request の説明として正しいものはどれか。",
    answer: "自分の変更を元のリポジトリへ取り込んでほしいと提案する",
    choices: ["自分の変更を元のリポジトリへ取り込んでほしいと提案する", "ローカルの変更を消す", "C言語の標準ライブラリ", "ファイルを追記モードで開く"],
    explanation: "PR は変更の取り込み提案です。"
  },
  {
    id: "p-output-001",
    topic: "実行結果",
    type: "choice",
    prompt: "このプログラムの出力はどれか。",
    code: "int x = 3;\nprintf(\"%d\\n\", x * 2 + 1);",
    answer: "7",
    choices: ["7", "6", "31", "8"],
    explanation: "3 * 2 + 1 なので 7 です。"
  },
  {
    id: "p-output-002",
    topic: "実行結果",
    type: "choice",
    prompt: "このプログラムの出力はどれか。",
    code: "int a[3] = {2, 4, 6};\nprintf(\"%d\\n\", a[0] + a[2]);",
    answer: "8",
    choices: ["8", "6", "10", "2"],
    explanation: "配列は0番から始まるので a[0] は2、a[2] は6です。"
  },
  {
    id: "p-output-003",
    topic: "実行結果",
    type: "choice",
    prompt: "このプログラムの出力はどれか。",
    code: "int count = 0;\nfor (int i = 1; i <= 3; i++) {\n    count += i;\n}\nprintf(\"%d\\n\", count);",
    answer: "6",
    choices: ["6", "3", "4", "5"],
    explanation: "1 + 2 + 3 = 6 です。"
  },
  {
    id: "p-output-004",
    topic: "実行結果",
    type: "choice",
    prompt: "このプログラムの出力はどれか。",
    code: "typedef struct { int hp; } Character;\nCharacter hero = {100};\nCharacter *p = &hero;\np->hp -= 30;\nprintf(\"%d\\n\", hero.hp);",
    answer: "70",
    choices: ["70", "100", "30", "コンパイルエラー"],
    explanation: "p は hero を指しているため p->hp の変更は hero.hp に反映されます。"
  },
  {
    id: "p-output-005",
    topic: "実行結果",
    type: "choice",
    prompt: "このコードで result.csv に書かれる内容はどれか。",
    code: "fprintf(fp, \"%s,%d,%.1f\\n\", \"教室\", 25, 60.5);",
    answer: "教室,25,60.5",
    choices: ["教室,25,60.5", "教室 25 60.500000", "%s,%d,%.1f", "25,教室,60.5"],
    explanation: "%.1f なので小数1桁で 60.5 と出ます。"
  },
  {
    id: "p-bug-001",
    topic: "バグ発見",
    type: "bug",
    prompt: "このコードのバグはどれか。",
    code: "char name[50];\nname = \"hero\";",
    answer: "char配列に = で文字列代入している",
    choices: ["char配列に = で文字列代入している", "name のサイズが大きすぎる", "文字列にダブルクォートを使っている", "struct がない"],
    explanation: "char 配列へのコピーには strcpy(name, \"hero\"); を使います。"
  },
  {
    id: "p-bug-002",
    topic: "バグ発見",
    type: "bug",
    prompt: "このコードのバグはどれか。",
    code: "FILE *fp = fopen(\"data.csv\", \"r\");\nfscanf(fp, \"%d\", &x);\nfclose(fp);",
    answer: "fopen 直後の NULL チェックがない",
    choices: ["fopen 直後の NULL チェックがない", "\"r\" では読み込めない", "fscanf には & を付けない", "fclose が不要"],
    explanation: "読み込みでも書き込みでも fopen 後は NULL チェックします。"
  },
  {
    id: "p-bug-003",
    topic: "バグ発見",
    type: "bug",
    prompt: "このコードのバグはどれか。",
    code: "int *arr = malloc(n * sizeof(int));\nif (arr == NULL) return 1;\narr[0] = 10;\nreturn 0;",
    answer: "free がない",
    choices: ["free がない", "malloc の引数が間違い", "NULL チェックがない", "arr[0] は使えない"],
    explanation: "malloc で確保したメモリは使い終わったら free します。"
  },
  {
    id: "p-bug-004",
    topic: "バグ発見",
    type: "bug",
    prompt: "このコードのバグはどれか。",
    code: "Student s = {80, \"山田\"};\n// typedef struct { char name[32]; int score; } Student;",
    answer: "構造体の初期化順が定義順と違う",
    choices: ["構造体の初期化順が定義順と違う", "typedef struct は初期化できない", "score は char である", "コメントがあると動かない"],
    explanation: "定義順は name, score なので {\"山田\", 80} が正しいです。"
  },
  {
    id: "p-bug-005",
    topic: "バグ発見",
    type: "bug",
    prompt: "このコードのバグはどれか。",
    code: "Character hero;\nhero->hp = 100;",
    answer: "構造体変数に -> を使っている",
    choices: ["構造体変数に -> を使っている", "hp に整数を入れている", "hero は必ず malloc が必要", "100 は大きすぎる"],
    explanation: "hero はポインタではないので hero.hp = 100; と書きます。"
  },
  {
    id: "p-bug-006",
    topic: "バグ発見",
    type: "bug",
    prompt: "このコードのバグはどれか。",
    code: "char line[128];\nfgets(line, 1000, fp);",
    answer: "バッファサイズより大きい数を指定している",
    choices: ["バッファサイズより大きい数を指定している", "fgets は第2引数が不要", "line は int 配列にすべき", "fp に & が必要"],
    explanation: "第2引数は sizeof(line) のように実際のバッファサイズに合わせます。"
  }
];
