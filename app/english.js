/* 英語 Grammar Quiz 8〜11 の完全データ。
   期末では過去問と同じ問題が出るため、設問・解答は原文のまま。改変しない。
   type: fill = 空欄補充 / order = 並べ替え / compose = 和文英訳 */

const ENGLISH_QUIZZES = [
  {
    quiz: 8,
    title: "GQ 8",
    range: "Evergreen Essentials 141-160",
    date: "2026/06/22",
    theme: "前置詞・形式目的語 it・不定詞",
    questions: [
      {
        id: "e-gq08-a1",
        section: "A",
        type: "fill",
        prompt: "適切な前置詞を補ってください。",
        sentence: "The top of the mountain is covered ___ snow.",
        answer: "with",
        full: "The top of the mountain is covered with snow.",
        explanation: "be covered with 〜 で「〜で覆われている」。何で覆うかの「材料・手段」なので with。"
      },
      {
        id: "e-gq08-a2",
        section: "A",
        type: "fill",
        prompt: "適切な前置詞を補ってください。",
        sentence: "The driver was killed ___ the accident.",
        answer: "in",
        full: "The driver was killed in the accident.",
        explanation: "be killed in 〜 で「〜（事故・戦争）で死ぬ」。出来事の「中で」なので in。"
      },
      {
        id: "e-gq08-a3",
        section: "A",
        type: "fill",
        prompt: "適切な前置詞を補ってください。",
        sentence: "She was shocked ___ the news.",
        answer: "at",
        full: "She was shocked at the news.",
        explanation: "be shocked at 〜 で「〜にショックを受ける」。感情が向かう一点なので at。surprised at も同じ形。"
      },
      {
        id: "e-gq08-a4",
        section: "A",
        type: "fill",
        prompt: "適切な前置詞を補ってください。",
        sentence: "Do you have anything to write ___ ? - Yes. Here's a pen.",
        answer: "with",
        full: "Do you have anything to write with? - Yes. Here's a pen.",
        explanation: "答えがペン＝書く「道具」なので write with。紙を聞くなら write on。"
      },
      {
        id: "e-gq08-b1",
        section: "B",
        type: "order",
        prompt: "意味を成すように並べ替えてください。文頭の文字は大文字にします。",
        tokens: ["useful", "a driver's license", "it", "to", "is", "have"],
        answer: "It is useful to have a driver's license.",
        explanation: "形式目的語ではなく形式主語の it。It is 形容詞 to do 〜（〜するのは…だ）。本当の主語は to have 以下。"
      },
      {
        id: "e-gq08-b2",
        section: "B",
        type: "order",
        prompt: "意味を成すように並べ替えてください。",
        lead: "Sam",
        tail: ".",
        tokens: ["friends", "easy", "it", "to", "make", "finds"],
        answer: "Sam finds it easy to make friends.",
        explanation: "find + it + 形容詞 + to do で「〜するのが…だとわかる」。この it が形式目的語で、中身は to make friends。"
      },
      {
        id: "e-gq08-b3",
        section: "B",
        type: "order",
        prompt: "意味を成すように並べ替えてください。",
        lead: "They",
        tail: "broken.",
        tokens: ["home", "the window", "find", "was", "to", "came", "that"],
        answer: "They came home to find that the window was broken.",
        explanation: "結果を表す不定詞。came home to find 〜 で「帰宅して〜だとわかった」。to find は目的ではなく結果。"
      },
      {
        id: "e-gq08-c1",
        section: "C",
        type: "compose",
        prompt: "英語にしてください。",
        jp: "私の息子は歯医者さんに診てもらう必要がある。",
        answer: "My son needs to see a dentist.",
        explanation: "need to do で「〜する必要がある」。「診てもらう」は see a dentist（医者に会いに行く）で表す。"
      },
      {
        id: "e-gq08-c2",
        section: "C",
        type: "compose",
        prompt: "英語にしてください。",
        jp: "やらなければならない宿題がたっぷりある。",
        answer: "I have a lot of homework to do.",
        explanation: "名詞を後ろから修飾する不定詞。homework to do で「やるべき宿題」。homework は不可算なので a lot of。"
      },
      {
        id: "e-gq08-c3",
        section: "C",
        type: "compose",
        prompt: "英語にしてください。",
        jp: "手伝ってくださるなんて、どうもご親切に。",
        answer: "It is kind of you to help me.",
        aliases: ["It's kind of you to help me.", "It is very kind of you to help me."],
        explanation: "人の性質を表す形容詞（kind, nice, foolish）では of you。It is kind OF you。useful などは for。"
      }
    ]
  },
  {
    quiz: 9,
    title: "GQ 9",
    range: "Evergreen Essentials 161-180",
    date: "2026/06/29",
    theme: "seem/happen/turn out・使役・知覚動詞",
    questions: [
      {
        id: "e-gq09-a1",
        section: "A",
        type: "fill",
        prompt: "日本語の意味になるように、空欄に適語を補ってください（2語以上になることもあります）。",
        jp: "子どもたちは嬉しそうだった。",
        sentence: "The children ___ happy.",
        answer: "appeared to be",
        full: "The children appeared to be happy.",
        explanation: "appear to be 〜 で「〜のように見える」。seemed to be も同義だが、ここは appear を問う出題。"
      },
      {
        id: "e-gq09-a2",
        section: "A",
        type: "fill",
        prompt: "日本語の意味になるように、空欄に適語を補ってください（2語以上になることもあります）。",
        jp: "私は本屋で偶然ジムに会った。",
        sentence: "I ___ Jim in a bookstore.",
        answer: "happened to see",
        full: "I happened to see Jim in a bookstore.",
        explanation: "happen to do で「偶然〜する」。過去の話なので happened。"
      },
      {
        id: "e-gq09-a3",
        section: "A",
        type: "fill",
        prompt: "日本語の意味になるように、空欄に適語を補ってください（2語以上になることもあります）。",
        jp: "彼の話は本当だとわかった。",
        sentence: "His story ___ true.",
        answer: "turned out to be",
        full: "His story turned out to be true.",
        explanation: "turn out to be 〜 で「〜だと判明する」。happen（偶然）とセットで覚える。"
      },
      {
        id: "e-gq09-a4",
        section: "A",
        type: "fill",
        prompt: "日本語の意味になるように、空欄に適語を補ってください（2語以上になることもあります）。",
        jp: "私はその小さな街が好きになった。",
        sentence: "I ___ the small town.",
        answer: "came to like",
        full: "I came to like the small town.",
        explanation: "come to do で「〜するようになる」。like, know, love など心の動詞と結びつく（× come to can）。"
      },
      {
        id: "e-gq09-b1",
        section: "B",
        type: "order",
        prompt: "意味を成すように並べ替えてください。文頭の文字は大文字にします。",
        jp: "君にはもっと慎重になってもらいたい。",
        tokens: ["careful", "I", "you", "to", "more", "want", "be"],
        answer: "I want you to be more careful.",
        explanation: "want + 人 + to do で「人に〜してほしい」。to の後ろは原形 be。"
      },
      {
        id: "e-gq09-b2",
        section: "B",
        type: "order",
        prompt: "意味を成すように並べ替えてください。文頭の文字は大文字にします。",
        jp: "彼は二度と遅刻しないと約束した。",
        tokens: ["not", "again", "promised", "late", "to", "he", "be"],
        answer: "He promised not to be late again.",
        explanation: "不定詞の否定は not to do。to not do ではなく、not は to の前に置く。"
      },
      {
        id: "e-gq09-b3",
        section: "B",
        type: "order",
        prompt: "意味を成すように並べ替えてください。文頭の文字は大文字にします。",
        jp: "母は私をその店の外で待たせた。",
        tokens: ["wait", "outside", "made", "my mother", "the store", "me"],
        answer: "My mother made me wait outside the store.",
        explanation: "使役動詞 make + 人 + 原形。to は付けない（× made me to wait）。"
      },
      {
        id: "e-gq09-b4",
        section: "B",
        type: "order",
        prompt: "意味を成すように並べ替えてください。文頭の文字は大文字にします。",
        jp: "私はその男の子が転ぶのを見た。",
        tokens: ["the boy", "fall", "I", "down", "saw"],
        answer: "I saw the boy fall down.",
        explanation: "知覚動詞 see + 人 + 原形で、動作の一部始終を見た意味。to は付けない。"
      },
      {
        id: "e-gq09-c1",
        section: "C",
        type: "compose",
        prompt: "英語にしてください。",
        jp: "母は私にもっと野菜を食べるようにと言った。",
        answer: "My mother told me to eat more vegetables.",
        explanation: "tell + 人 + to do で「人に〜するように言う」。make/see と違い、tell は to が必要。"
      },
      {
        id: "e-gq09-c2",
        section: "C",
        type: "compose",
        prompt: "英語にしてください。",
        jp: "ローマ人がこの城を建てたらしい。",
        answer: "The Romans seem to have built this castle.",
        explanation: "seem より前の時制を表すには完了不定詞 to have 過去分詞。「建てた」のは今より前なので to have built。"
      }
    ]
  },
  {
    quiz: 10,
    title: "GQ 10",
    range: "Evergreen Essentials 181-200",
    date: "2026/07/06",
    theme: "独立不定詞・enough to・so as to・動名詞",
    questions: [
      {
        id: "e-gq10-a1",
        section: "A",
        type: "fill",
        prompt: "日本語の意味になるように、空欄に適語を補ってください（2語以上になることもあります）。",
        jp: "不思議な話なんだが、その行方不明の飛行機はついに見つからなかったんだ。",
        sentence: "___, the missing airplane was never found.",
        answer: "Strange to say",
        full: "Strange to say, the missing airplane was never found.",
        explanation: "独立不定詞。Strange to say（不思議な話だが）は文全体を修飾し、カンマで区切る。"
      },
      {
        id: "e-gq10-a2",
        section: "A",
        type: "fill",
        prompt: "日本語の意味になるように、空欄に適語を補ってください。enough を使うこと。",
        jp: "彼女は親切にも私の荷物を運んでくれた。",
        sentence: "She was ___ my baggage.",
        answer: "kind enough to carry",
        full: "She was kind enough to carry my baggage.",
        explanation: "enough は形容詞の後ろ。形容詞 + enough + to do の語順（× enough kind）。"
      },
      {
        id: "e-gq10-a3",
        section: "A",
        type: "fill",
        prompt: "日本語の意味になるように、空欄に適語を補ってください。as を使うこと。",
        jp: "私は交通渋滞を避けるために早く出発した。",
        sentence: "I left early ___ heavy traffic.",
        answer: "so as to avoid",
        full: "I left early so as to avoid heavy traffic.",
        explanation: "so as to do で「〜するために」。指定が in order なら in order to、as なら so as to。"
      },
      {
        id: "e-gq10-a4",
        section: "A",
        type: "fill",
        prompt: "日本語の意味になるように、空欄に適語を補ってください。",
        jp: "私の趣味は写真を撮ることです。",
        sentence: "My hobby is ___.",
        answer: "taking pictures",
        aliases: ["taking photos", "taking photographs"],
        explanation: "補語になる動名詞。趣味＝習慣的な行為なので動名詞 taking が自然。"
      },
      {
        id: "e-gq10-b1",
        section: "B",
        type: "order",
        prompt: "意味を成すように並べ替えてください。文頭の文字は大文字にします。",
        jp: "その電車に乗り遅れないように、私は急いだ。",
        tokens: ["hurried", "in", "I", "the train", "to", "not", "miss", "order"],
        answer: "I hurried in order not to miss the train.",
        explanation: "「〜しないように」は in order not to do。not は to の直前に入る。"
      },
      {
        id: "e-gq10-b2",
        section: "B",
        type: "order",
        prompt: "意味を成すように並べ替えてください。文頭の文字は大文字にします。",
        jp: "あなたは自分の子どもたちに泳ぎ方を教えるべきです。",
        tokens: ["teach", "how", "children", "you", "your", "to", "should", "swim"],
        answer: "You should teach your children how to swim.",
        explanation: "疑問詞 + to do は名詞のかたまり。how to swim（泳ぎ方）が teach の直接目的語。"
      },
      {
        id: "e-gq10-b3",
        section: "B",
        type: "order",
        prompt: "意味を成すように並べ替えてください。文頭の文字は大文字にします。",
        jp: "本当のことを言えば、あのジャケットは君には似合わないよ。",
        tokens: ["that jacket", "to", "you", "suit", "the truth,", "tell", "doesn't"],
        answer: "To tell the truth, that jacket doesn't suit you.",
        explanation: "独立不定詞 To tell the truth（実を言うと）を文頭に置く。suit は「（服が）似合う」。"
      },
      {
        id: "e-gq10-c1",
        section: "C",
        type: "compose",
        prompt: "英語にしてください。",
        jp: "このカレーは私が食べるには辛すぎる。",
        answer: "This curry is too spicy for me to eat.",
        aliases: ["This curry is too hot for me to eat."],
        explanation: "too ... for 人 to do で「人には…すぎて〜できない」。不定詞の意味上の主語は for me。"
      },
      {
        id: "e-gq10-c2",
        section: "C",
        type: "compose",
        prompt: "英語にしてください。",
        jp: "人の名前を覚えることは難しい。",
        answer: "Remembering people's names is difficult.",
        aliases: ["It is difficult to remember people's names."],
        explanation: "動名詞の主語。Remembering ... は単数扱いなので is。"
      },
      {
        id: "e-gq10-c3",
        section: "C",
        type: "compose",
        prompt: "英語にしてください。",
        jp: "映画を見に行かない？",
        answer: "Would you like to go to the movies?",
        explanation: "Would you like to do? で丁寧な勧誘。「映画を見に行く」は go to the movies。"
      }
    ]
  },
  {
    quiz: 11,
    title: "GQ 11",
    range: "Evergreen Essentials 201-220",
    date: "2026/07/13",
    theme: "動名詞と不定詞の使い分け",
    questions: [
      {
        id: "e-gq11-a1",
        section: "A",
        type: "fill",
        prompt: "日本語の意味になるように、空欄に適語を補ってください（2語以上になることもあります）。",
        jp: "私はあなたにまた会えるのを楽しみにしています。",
        sentence: "I'm ___ you again.",
        answer: "looking forward to seeing",
        full: "I'm looking forward to seeing you again.",
        explanation: "look forward to の to は前置詞。後ろは動名詞 seeing（× to see）。"
      },
      {
        id: "e-gq11-a2",
        section: "A",
        type: "fill",
        prompt: "日本語の意味になるように、空欄に適語を補ってください（2語以上になることもあります）。",
        jp: "私は来年イタリアへ行きたいと思っています。",
        sentence: "I ___ next year.",
        answer: "hope to go to Italy",
        full: "I hope to go to Italy next year.",
        explanation: "hope は不定詞をとる（hope to do）。これから先のことなので to 不定詞。"
      },
      {
        id: "e-gq11-a3",
        section: "A",
        type: "fill",
        prompt: "日本語の意味になるように、空欄に適語を補ってください（2語以上になることもあります）。",
        jp: "彼女に会ったことは決して忘れません。",
        sentence: "I'll never ___ her.",
        answer: "forget meeting",
        full: "I'll never forget meeting her.",
        explanation: "forget -ing は「（過去に）〜したことを忘れる」。forget to do は「〜し忘れる」で未来向き。"
      },
      {
        id: "e-gq11-a4",
        section: "A",
        type: "fill",
        prompt: "日本語の意味になるように、空欄に適語を補ってください（2語以上になることもあります）。",
        jp: "ドアの鍵をかけることを覚えておいてね。",
        sentence: "Please ___ the door.",
        answer: "remember to lock",
        full: "Please remember to lock the door.",
        explanation: "remember to do は「これから〜するのを覚えておく」。remember -ing は「〜したのを覚えている」。"
      },
      {
        id: "e-gq11-b1",
        section: "B",
        type: "order",
        prompt: "並べ替えてください。不要な単語が一つ入っています。文頭の文字は大文字にします。",
        jp: "その男の子は、自分で朝食を作ることに慣れている。",
        tail: "his own breakfast.",
        tokens: ["is", "making", "make", "used", "the boy", "to"],
        extra: "make",
        answer: "The boy is used to making his own breakfast.",
        explanation: "be used to -ing は「〜に慣れている」。to は前置詞なので making。不要語は make。used to do（昔よく〜した）と区別する。"
      },
      {
        id: "e-gq11-b2",
        section: "B",
        type: "order",
        prompt: "並べ替えてください。不要な単語が一つ入っています。文頭の文字は大文字にします。",
        jp: "寝る直前に食べるのは避けるべきです。",
        tokens: ["avoid", "before", "eating", "to eat", "you", "should", "just", "go to bed", "you"],
        extra: "to eat",
        answer: "You should avoid eating just before you go to bed.",
        explanation: "avoid は動名詞のみをとる（× avoid to eat）。不要語は to eat。"
      },
      {
        id: "e-gq11-b3",
        section: "B",
        type: "order",
        prompt: "並べ替えてください。不要な単語が一つ入っています。文頭の文字は大文字にします。",
        jp: "残念ながら、あなたの申し出をお断りしなければなりません。",
        tokens: ["regret", "that", "say", "saying", "must", "your offer", "I", "we", "to", "reject"],
        extra: "saying",
        answer: "I regret to say that we must reject your offer.",
        explanation: "regret to say は「残念ながら申し上げます」でこれから言う内容。regret -ing は過去にしたことへの後悔。不要語は saying。"
      },
      {
        id: "e-gq11-c1",
        section: "C",
        type: "compose",
        prompt: "英語にしてください。",
        jp: "私は子どものように扱われるのは好きではない。",
        answer: "I don't like being treated like a child.",
        explanation: "受動態の動名詞は being + 過去分詞。「扱われる」ので being treated。"
      },
      {
        id: "e-gq11-c2",
        section: "C",
        type: "compose",
        prompt: "英語にしてください。",
        jp: "将来何が起こるかはわからない。",
        answer: "There is no knowing what will happen in the future.",
        explanation: "There is no -ing で「〜することはできない」。決まり文句として丸暗記する。"
      },
      {
        id: "e-gq11-c3",
        section: "C",
        type: "compose",
        prompt: "英語にしてください。",
        jp: "私はそのネコを探すのをあきらめた。",
        answer: "I've given up looking for the cat.",
        aliases: ["I have given up looking for the cat.", "I gave up looking for the cat."],
        explanation: "give up は動名詞をとる。「探す」は look for。give up looking for 〜。"
      }
    ]
  }
];

const ENGLISH_GQ_QUESTIONS = ENGLISH_QUIZZES.flatMap((quiz) =>
  quiz.questions.map((question) => ({
    ...question,
    subject: "english",
    part: "gq",
    group: `GQ${quiz.quiz}`,
    groupTitle: `${quiz.title}（${quiz.range}）`,
    quiz: quiz.quiz,
    aliases: [question.answer, ...(question.aliases || [])]
  }))
);

/* ---------------- 前期中間テスト A〜C ----------------
   出典: english/20250602_前期中間テスト.docx (2).pdf と 解答.xlsx - Sheet1.pdf
   期末では「ちょっと応用させる」とのことなので、元になった Evergreen の例文番号を解説に入れている。 */

const MIDTERM_ITEMS = [
  {
    id: "e-mid-a1",
    section: "A",
    type: "fill",
    prompt: "日本語の意味になるように、空欄に適切な1単語を補ってください。",
    jp: "待ってよ！",
    sentence: "Wait ___ me!",
    answer: "for",
    full: "Wait for me!",
    explanation: "wait for 〜 で「〜を待つ」。wait は自動詞なので目的語の前に for が要る（Evergreen 009）。"
  },
  {
    id: "e-mid-a2",
    section: "A",
    type: "fill",
    prompt: "日本語の意味になるように、空欄に適切な語を補ってください（3語）。",
    jp: "お茶をいれましょうか？",
    sentence: "___ some tea?",
    answer: "Shall I make",
    full: "Shall I make some tea?",
    explanation: "Shall I 〜? で「（私が）〜しましょうか」と申し出る。Shall we 〜? なら「一緒に〜しませんか」（Evergreen 106）。"
  },
  {
    id: "e-mid-a3",
    section: "A",
    type: "fill",
    prompt: "日本語の意味になるように、空欄に適切な語を補ってください（4語）。",
    jp: "あなたは7時に起きるべきだったのに。",
    sentence: "You ___ at seven.",
    answer: "should have got up",
    aliases: ["should have gotten up"],
    full: "You should have got up at seven.",
    explanation: "should have 過去分詞で「〜すべきだったのに（しなかった）」という後悔・非難（Evergreen 116）。"
  },
  {
    id: "e-mid-a4",
    section: "A",
    type: "fill",
    prompt: "日本語の意味になるように、空欄に適切な語を補ってください（3語）。",
    jp: "明日晴れたら、泳ぎに行こうよ。",
    sentence: "___ fine tomorrow, let's go swimming.",
    answer: "If it is",
    full: "If it is fine tomorrow, let's go swimming.",
    explanation: "時・条件を表す副詞節の中では、未来のことでも現在形を使う。× If it will be（Evergreen 054）。"
  },
  {
    id: "e-mid-a5",
    section: "A",
    type: "fill",
    prompt: "日本語の意味になるように、空欄に適切な語を補ってください（2語）。",
    jp: "グレッグと私は知り合って20年になります。",
    sentence: "I ___ Greg for 20 years.",
    answer: "have known",
    full: "I have known Greg for 20 years.",
    explanation: "現在完了の継続。know は状態動詞なので進行形にせず have known（Evergreen 064）。"
  },
  {
    id: "e-mid-b1",
    section: "B",
    type: "choice",
    prompt: "適切な方を選んでください。",
    sentence: "[      ] this is!",
    jp: "これはなんて美しい石なんでしょう！",
    answer: "What a beautiful stone",
    choices: ["What a beautiful stone", "How a beautiful stone"],
    full: "What a beautiful stone this is!",
    explanation: "感嘆文は What + a + 形容詞 + 名詞、How + 形容詞/副詞。名詞が続くので What（Evergreen 013）。"
  },
  {
    id: "e-mid-b2",
    section: "B",
    type: "choice",
    prompt: "適切な方を選んでください。",
    sentence: "We [      ] his plan.",
    jp: "私たちは彼の計画について議論した。",
    answer: "discussed",
    choices: ["discussed", "discussed about"],
    full: "We discussed his plan.",
    explanation: "discuss は他動詞なので about は不要。同じ仲間に marry, enter, reach, mention（Evergreen 034）。"
  },
  {
    id: "e-mid-b3",
    section: "B",
    type: "choice",
    prompt: "適切な方を選んでください。",
    sentence: "The game [      ] when we arrived at the stadium.",
    jp: "私たちが競技場に着いた時、すでに試合は始まっていた。",
    answer: "had already begun",
    choices: ["had already begun", "has already begun"],
    full: "The game had already begun when we arrived at the stadium.",
    explanation: "過去のある時点より前に完了していたので過去完了 had begun。現在完了は過去の時点とは併用できない（Evergreen 067）。"
  },
  {
    id: "e-mid-b4",
    section: "B",
    type: "choice",
    prompt: "適切な方を選んでください。確信度は20%ぐらいのニュアンス。",
    sentence: "The light in the sky [      ] a plane.",
    jp: "空のあの光は飛行機かもしれない。",
    answer: "could be",
    choices: ["could be", "must be"],
    full: "The light in the sky could be a plane.",
    explanation: "must be は「〜に違いない」で確信度が高い。弱い推量は could be / may be（Evergreen 091）。"
  },
  {
    id: "e-mid-b5",
    section: "B",
    type: "choice",
    prompt: "適切な方を選んでください。",
    sentence: "You [      ] this joke before.",
    jp: "この冗談は前に聞いたことがあるかもしれませんね。",
    answer: "may have heard",
    choices: ["may have heard", "may heard"],
    full: "You may have heard this joke before.",
    explanation: "助動詞の後ろは原形。過去のことを推量するときは may have 過去分詞（Evergreen 111）。"
  },
  {
    id: "e-mid-c1",
    section: "C",
    type: "compose",
    prompt: "英語にしてください。",
    jp: "誰がこの絵を描いたのですか？",
    answer: "Who painted this picture?",
    explanation: "疑問詞が主語なので語順はそのまま。did を使わず Who painted 〜?（Evergreen 006）。"
  },
  {
    id: "e-mid-c2",
    section: "C",
    type: "compose",
    prompt: "英語にしてください。",
    jp: "昨日は頭痛がしました。",
    answer: "I had a headache yesterday.",
    explanation: "「頭痛がする」は have a headache。yesterday があるので過去形 had（Evergreen 021）。"
  },
  {
    id: "e-mid-c3",
    section: "C",
    type: "compose",
    prompt: "英語にしてください。「考えてばかりいる」というネガティブなニュアンスを出すこと。",
    jp: "トムはいつも他人のことを考えている。",
    answer: "Tom is always thinking of other people.",
    aliases: ["Tom is always thinking about other people."],
    explanation: "always + 進行形で「いつも〜してばかりいる」という非難・いらだちを表す（Evergreen 056）。"
  },
  {
    id: "e-mid-c4",
    section: "C",
    type: "compose",
    prompt: "英語にしてください。",
    jp: "あなたはすぐに泳げるようになるでしょう。",
    answer: "You will be able to swim soon.",
    explanation: "will can とは言えないので、can の代わりに be able to を使う（Evergreen 076）。"
  },
  {
    id: "e-mid-c5",
    section: "C",
    type: "compose",
    prompt: "英語にしてください。",
    jp: "誰にだって間違いはありうる。",
    answer: "Anybody can make mistakes.",
    aliases: ["Anyone can make mistakes."],
    explanation: "can は「〜がありうる」という可能性も表す。「間違いをする」は make a mistake（Evergreen 090）。"
  }
];

const SECTION_TITLES = {
  A: "中間テスト A（適語補充）",
  B: "中間テスト B（適切な方を選ぶ）",
  C: "中間テスト C（和文英訳）"
};

const ENGLISH_MIDTERM_QUESTIONS = MIDTERM_ITEMS.map((item) => ({
  ...item,
  subject: "english",
  part: "midterm",
  group: `MID${item.section}`,
  groupTitle: SECTION_TITLES[item.section],
  aliases: [item.answer, ...(item.aliases || [])]
}));
