/* 英語の反復ドリル。
   - Impact Vocabulary List 1（100行目 billion 以降）
   - Evergreen Essentials 141〜228
   どちらも試験範囲の「Vocabulary, Expressions and Grammar（30点）」の中核。 */

/* ---------------- Impact Vocabulary ----------------
   [語句, 品詞, 意味, 例文, 教科書ページ] */

const IMPACT_VOCAB = [
  ["billion", "名詞", "10億", "There are more than eight billion people in the world.", 118],
  ["mobile", "形容詞・名詞", "移動できる、携帯用の、携帯電話", "Many students use mobile devices every day.", 118],
  ["device", "名詞", "機器、装置", "This device helps you sleep better.", 118],
  ["gadget", "名詞", "道具、装置", "My favorite gadget is my smartwatch.", 118],
  ["incredible", "形容詞", "信じられない、すごい", "The view from the mountain was incredible.", 118],
  ["search for ~", "熟語・表現", "〜を探す", "I searched for information about robots online.", 118],
  ["look up", "熟語・表現", "調べる", "Please look up the word in a dictionary.", 118],
  ["text", "名詞・動詞", "テキストメッセージ、メッセージを送る", "I'll text you after school.", 118],
  ["typical", "形容詞", "典型的な、普通の", "This is a typical day for many teenagers.", 118],
  ["spend time on ~", "熟語・表現", "〜に時間を費やす", "Many people spend time on social media.", 118],
  ["let's see", "熟語・表現", "どうなるか見てみよう、ええと", "We changed the plan. Let's see how it goes.", 118],
  ["think outside the box", "熟語・表現", "既成概念にとらわれずに物事を考える", "We need to think outside the box to solve this problem.", 118],
  ["remarkable", "形容詞", "卓越した、目立った", "She made remarkable progress in English.", 118],
  ["take ~ for example", "熟語・表現", "〜を例にとる", "Take my sister for example. She studies abroad.", 118],
  ["fourteen-year-old", "形容詞", "14歳の", "He is a fourteen-year-old student.", 118],
  ["suffer from ~", "熟語・表現", "〜に苦しむ", "She suffers from headaches.", 118],
  ["award-winning", "形容詞", "賞をとった", "This is an award-winning movie.", 119],
  ["allow O to do ~", "熟語・表現", "Oが〜することを許可する、可能にする", "My parents allow me to use the computer after dinner.", 119],
  ["treat", "名詞", "ご褒美、おやつ（動詞では「扱う」）", "Owners can give their pet a treat.", 119],
  ["grateful", "形容詞", "感謝している", "I am grateful for your help.", 119],
  ["be tired of ~", "熟語・表現", "〜に飽きる", "I am tired of doing the same thing every day.", 119],
  ["come up with ~", "熟語・表現", "〜を思いつく", "She came up with a great idea.", 119],
  ["civilization", "名詞", "文明", "Ancient Egypt was an important civilization.", 136],
  ["archaeologist", "名詞", "考古学者", "The archaeologist found an old tomb.", 136],
  ["trade", "名詞・動詞", "貿易、取引する", "People used the river to trade goods.", 136],
  ["continue to do ~", "熟語・表現", "〜し続ける", "She continued to study after dinner.", 136],
  ["site", "名詞", "場所、遺跡", "This site was once an ancient city.", 136],
  ["track", "動詞", "追跡する", "Scientists tracked the animals with cameras.", 136],
  ["diet", "名詞", "食事、食生活", "Fish was an important part of their diet.", 136],
  ["artifact", "名詞", "遺物、工芸品", "The museum displays artifacts from the area.", 136],
  ["skeleton", "名詞", "骨格（全体）", "The team found a human skeleton.", 136],
  ["bury", "動詞", "埋める、埋葬する", "They buried the object under the ground.", 136],
  ["Türkiye", "名詞", "トルコ", "Türkiye is located between Europe and Asia.", 136],
  ["species", "名詞", "種", "This bird species lives near the sea.", 136],
  ["chore", "名詞", "（家庭内の）雑用、家事", "Doing the dishes is my least favorite chore.", 136],
  ["complain", "動詞", "不平を言う、苦情を言う", "He complained about the noisy room.", 136],
  ["throughout", "前置詞", "〜の至る所で、〜の間ずっと", "It rained throughout the day.", 136],
  ["few", "形容詞", "ほとんどない、少ししかない", "Few students came to school today.", 135],
  ["present-day", "形容詞", "現代の、現在の", "Present-day technology changes very quickly.", 135],
  ["as well", "熟語・表現", "〜もまた、さらに", "My brother can cook, and he can bake as well.", 135],
  ["rarely", "副詞", "めったに〜ない", "I rarely watch TV during the week.", 135],
  ["no longer", "熟語・表現", "もはや〜ない", "She no longer lives in Tokyo.", 135],
  ["instead", "副詞", "その代わりに", "I did not take the bus. I walked instead.", 135],
  ["as little as ~", "熟語・表現", "〜ほど少ない、たった〜", "This bag costs as little as 500 yen.", 135],
  ["penny", "名詞", "1ペニー硬貨、わずかなお金", "This old book cost only one penny.", 135],
  ["peer", "名詞", "同年代の人、仲間", "She worked with her peers on the project.", 135]
];

/* 例文から見出し語を伏せて空欄にする。語形が変化していても拾えるように語幹で照合する。 */
function blankOutHeadword(sentence, word) {
  const core = word.replace(/\s*~\s*$/, "").trim();
  const head = core.split(" ")[0].replace(/[^A-Za-zÀ-ÿ']/g, "");
  if (!head) return null;
  const stem = head.length > 4 ? head.slice(0, head.length - 1) : head;
  const pattern = new RegExp(`\\b${stem}[A-Za-z']*`, "i");
  return pattern.test(sentence) ? sentence.replace(pattern, "___") : null;
}

const VOCAB_UNIT = (page) => (page === 136 || page === 135 ? "Unit 8" : "Unit 7");

const ENGLISH_VOCAB_QUESTIONS = IMPACT_VOCAB.flatMap(([word, pos, meaning, example, page], index) => {
  const unit = VOCAB_UNIT(page);
  const key = String(index + 1).padStart(2, "0");
  const base = {
    subject: "english",
    part: "vocab",
    group: unit === "Unit 8" ? "VOC8" : "VOC7",
    groupTitle: `Impact 語彙 ${unit}（p.${page}）`,
    word,
    meaning
  };

  const questions = [
    {
      ...base,
      id: `e-voc-${key}-ja`,
      type: "vocabja",
      prompt: `${word}`,
      promptNote: pos,
      answer: meaning,
      explanation: `${word}（${pos}）＝ ${meaning}　例: ${example}`
    },
    {
      ...base,
      id: `e-voc-${key}-en`,
      type: "vocaben",
      prompt: `「${meaning}」を表す英語を書いてください。`,
      promptNote: pos,
      answer: word,
      aliases: [word, word.replace(/\s*~\s*$/, "").trim()],
      explanation: `${word}（${pos}）＝ ${meaning}　例: ${example}`
    }
  ];

  const cloze = blankOutHeadword(example, word);
  if (cloze) {
    questions.push({
      ...base,
      id: `e-voc-${key}-cz`,
      type: "vocabcloze",
      prompt: "空欄に入る語句を書いてください。",
      promptNote: `${pos} ／ ${meaning}`,
      sentence: cloze,
      answer: word,
      aliases: [word, word.replace(/\s*~\s*$/, "").trim()],
      full: example,
      explanation: `${word}（${pos}）＝ ${meaning}`
    });
  }
  return questions;
});

/* 意味の4択は、同じユニットの他の語の意味を誤答に使う。 */
ENGLISH_VOCAB_QUESTIONS.forEach((question) => {
  if (question.type !== "vocabja") return;
  const sameUnit = ENGLISH_VOCAB_QUESTIONS.filter(
    (other) => other.type === "vocabja" && other.group === question.group && other.id !== question.id
  );
  const others = ENGLISH_VOCAB_QUESTIONS.filter(
    (other) => other.type === "vocabja" && other.group !== question.group
  );
  const seen = new Set([question.answer]);
  const distractors = [];
  [...sameUnit, ...others].forEach((other) => {
    if (distractors.length >= 3 || seen.has(other.answer)) return;
    seen.add(other.answer);
    distractors.push(other.answer);
  });
  question.choices = [question.answer, ...distractors];
});

/* ---------------- Evergreen Essentials 141〜228 ----------------
   [番号, 英文, 和文, 文法ポイント] */

const EVERGREEN_SENTENCES = [
  [141, "The street lights were switched on at sunset.", "街灯は日没時に点灯された。", "群動詞の受動態。switch on を1つの動詞とみなし be switched on とする。"],
  [142, "The street lights were switched on.", "街灯は点灯されていた。", "動作主が不要なら by 〜 は省く。141との違いは「いつ」の情報だけ。"],
  [143, "My glasses got broken while I was playing soccer.", "サッカーをしていた時に、私のメガネが壊れた。", "get + 過去分詞で「〜される」。be より動作・変化の意味が強い。"],
  [144, "The top of the mountain is covered with snow.", "その山の頂上は雪で覆われている。", "be covered with 〜。材料・手段なので by ではなく with。"],
  [145, "The driver was killed in the accident.", "そのドライバーはその事故で亡くなった。", "be killed in 〜（事故・戦争で死ぬ）。出来事の「中で」なので in。"],
  [146, "She was shocked at the news.", "彼女はその知らせにショックを受けた。", "be shocked at 〜。感情が向かう一点なので at。surprised at も同じ。"],
  [147, "Our plan is to climb the mountain tomorrow.", "私たちの計画は、明日その山に登ることです。", "補語になる名詞的用法の不定詞。「〜すること」。"],
  [148, "It is useful to have a driver's license.", "運転免許を持っていると便利だ。", "形式主語の it。本当の主語は to have 以下。"],
  [149, "My son needs to see a dentist.", "私の息子は歯医者さんに診てもらう必要がある。", "need to do。「診てもらう」は see a doctor / dentist。"],
  [150, "Sam finds it easy to make friends.", "サムは友人をつくることは簡単だと思っている。", "find + it + 形容詞 + to do。この it が形式目的語。"],
  [151, "I'm looking for someone to help me with my work.", "私は、私の仕事を手伝ってくれる人を探しています。", "形容詞的用法。someone を後ろから to help が修飾する。"],
  [152, "I have a lot of homework to do.", "やらなければならない宿題がたっぷりある。", "homework to do で「やるべき宿題」。homework は不可算。"],
  [153, "Do you have anything to write with?", "何か書くものを持っていますか。", "書く道具なら write with、書く紙なら write on。前置詞が残る。"],
  [154, "We were surprised at her decision to become an actress.", "私たちは、女優になるという彼女の決心に驚いた。", "decision to do で「〜するという決心」。同格の不定詞。"],
  [155, "She is working hard to buy a car.", "彼女は車を買うために一生懸命働いている。", "目的を表す副詞的用法。「〜するために」。"],
  [156, "They came home to find that the window was broken.", "彼らが帰宅してみると、窓が割れていることがわかった。", "結果を表す不定詞。「〜して（その結果）…」。目的ではない。"],
  [157, "I'm very happy to meet you.", "あなたにお会いできてとてもうれしいです。", "感情の原因を表す副詞的用法。happy / glad / sad + to do。"],
  [158, "He must be a genius to understand the theory.", "その理論を理解しているとは、彼は天才に違いない。", "判断の根拠を表す不定詞。「〜するとは」。"],
  [159, "You were careless to make such a mistake.", "そんな間違いをするなんて、君は不注意だったね。", "人の性質を評価する不定詞。careless / kind / foolish と結びつく。"],
  [160, "It is kind of you to help me.", "手伝ってくださるなんて、どうもご親切に。", "人の性質を表す形容詞では of you。useful などは for you。"],
  [161, "I want you to be more careful.", "君にはもっと慎重になってもらいたい。", "want + 人 + to do。to の後ろは原形 be。"],
  [162, "My mother told me to eat more vegetables.", "母は私にもっと野菜を食べるようにと言った。", "tell + 人 + to do。make / see と違い to が必要。"],
  [163, "She went to the airport to meet her friends.", "彼女は友だちを出迎えるために空港に行った。", "目的の不定詞。in order to / so as to で言い換えられる。"],
  [164, "It is difficult to find a good job.", "よい仕事を見つけるのは難しい。", "形式主語 it。148と同じ型。"],
  [165, "His dream is to become a movie star.", "彼の夢は、映画スターになることだ。", "補語の不定詞。becoming でも可だが不定詞は「これから」の含み。"],
  [166, "It is necessary for you to see a doctor.", "君は、医者に診てもらうことが必要だ。", "不定詞の意味上の主語は for you。人の性質でないので of ではない。"],
  [167, "He promised not to be late again.", "彼は二度と遅刻しないと約束した。", "不定詞の否定は not to do。not は to の前。"],
  [168, "My mother made me wait outside the store.", "母は私をその店の外で待たせた。", "使役動詞 make + 人 + 原形。to は付けない。"],
  [169, "He had the doctor look at his leg.", "彼はその医者に脚を診てもらった。", "have + 人 + 原形で「〜してもらう」。make より依頼のニュアンス。"],
  [170, "I saw the boy fall down.", "私はその男の子が転ぶのを見た。", "知覚動詞 see + 人 + 原形。一部始終を見た意味。"],
  [171, "My dog seems to understand English.", "ぼくの犬は、英語を理解しているようだ。", "seem to do で「〜するようだ」。"],
  [172, "The children appeared to be happy.", "子どもたちはうれしそうだった。", "appear to be 〜。seem とほぼ同義。"],
  [173, "The Romans seem to have built this castle.", "ローマ人がこの城を建てたらしい。", "完了不定詞 to have 過去分詞。seem の時点より前のこと。"],
  [174, "The boy appeared to have been hurt in the accident.", "その男の子は事故でけがをしたようだった。", "受動の完了不定詞 to have been 過去分詞。"],
  [175, "The ship seems to be sinking!", "船が沈みかけているみたいだぞ！", "進行の不定詞 to be -ing。今まさに進行中。"],
  [176, "I want to be left alone.", "私をひとりにしておいてほしい。", "受動の不定詞 to be 過去分詞。"],
  [177, "I happened to see Jim in a bookstore.", "私は本屋で偶然ジムに会った。", "happen to do で「偶然〜する」。"],
  [178, "His story turned out to be true.", "彼の話は本当だとわかった。", "turn out to be 〜 で「〜だと判明する」。"],
  [179, "I came to like the small town.", "私はその小さな町が好きになった。", "come to do で「〜するようになる」。like / know など心の動詞と使う。"],
  [180, "The next meeting is to take place in Hong Kong.", "次の会合は香港で開催されることになっている。", "be to do の予定用法。"],
  [181, "You are to show your student card at the entrance.", "入口で学生証を見せなければなりません。", "be to do の義務用法。must に近い。"],
  [182, "Not a sound was to be heard.", "物音ひとつ聞こえなかった。", "be to do の可能用法。否定文で使われることが多い。"],
  [183, "Poetry is hard to translate.", "詩は翻訳するのが難しい。", "tough構文。translate の目的語が主語に来ているので it は付けない。"],
  [184, "Our teacher is easy to talk with.", "私たちの先生は話しやすい。", "tough構文。with が文末に残る点に注意。"],
  [185, "This curry is too spicy for me to eat.", "このカレーは私が食べるには辛すぎる。", "too ... for 人 to do で「…すぎて〜できない」。"],
  [186, "She was kind enough to carry my baggage.", "彼女は親切にも私の荷物を運んでくれた。", "形容詞 + enough + to do。enough は形容詞の後ろ。"],
  [187, "She was so kind as to carry my baggage.", "彼女は私の荷物を運んでくれるほど親切だった。", "so ... as to do。186の言い換え。"],
  [188, "I left early so as to avoid heavy traffic.", "渋滞を避けるために、私は早く出発した。", "so as to do で「〜するために」。"],
  [189, "I hurried in order not to miss the train.", "その電車に乗り遅れないように、私は急いだ。", "in order not to do。not は to の直前。"],
  [190, "You should teach your children how to swim.", "あなたは自分の子どもたちに泳ぎ方を教えるべきです。", "疑問詞 + to do は名詞のかたまり。how to swim で「泳ぎ方」。"],
  [191, "To tell the truth, that jacket doesn't suit you.", "本当のことを言えば、あのジャケットは君には似合わないよ。", "独立不定詞。To tell (you) the truth で「実を言うと」。"],
  [192, "Strange to say, the missing plane was never found.", "不思議な話なんだが、その行方不明の飛行機はついに見つからなかったんだ。", "独立不定詞 Strange to say（不思議な話だが）。"],
  [193, "Would you like to go to the movies?", "映画を見に行かない？", "Would you like to do? で丁寧な勧誘。答えは I'd love to.。"],
  [194, "My hobby is taking pictures.", "私の趣味は、写真を撮ることです。", "補語の動名詞。習慣的な行為なので -ing が自然。"],
  [195, "Remembering people's names is difficult.", "人の名前を覚えることは難しい。", "動名詞が主語。単数扱いなので is。"],
  [196, "My grandfather enjoys playing golf.", "私の祖父はゴルフをするのが好きだ。", "enjoy は動名詞のみをとる（× enjoy to play）。"],
  [197, "She is good at baking cookies.", "彼女はクッキーを焼くのが上手です。", "前置詞 at の後ろは動名詞。"],
  [198, "My brother doesn't like playing computer games.", "私の兄はコンピュータ・ゲームをするのが好きではない。", "like は動名詞・不定詞どちらも可。"],
  [199, "Seeing is believing.", "見ることは信じること。［百聞は一見にしかず］", "動名詞が主語にも補語にもなっている諺。"],
  [200, "My brother doesn't like my playing computer games.", "兄は、私がコンピュータ・ゲームをするのが好きではない。", "動名詞の意味上の主語は所有格（my）。198との違いは「誰がするか」。"],
  [201, "I'm sure of our team winning the game.", "私たちのチームがその試合で勝つことを、私は確信している。", "動名詞の意味上の主語。our team が winning の主語。"],
  [202, "Not saying \"thank you\" is rude.", "「ありがとう」と言わないのは失礼だ。", "動名詞の否定は not + -ing。not は前に置く。"],
  [203, "I don't like being treated like a child.", "私は子ども扱いされるのは好きではない。", "受動態の動名詞 being + 過去分詞。"],
  [204, "She is proud of having won a medal at the Olympics.", "彼女はオリンピックでメダルを獲得したことを誇りに思っている。", "完了動名詞 having + 過去分詞。文の時制より前のこと。"],
  [205, "The boy is used to making his own breakfast.", "その男の子は、自分で朝食を作ることに慣れている。", "be used to -ing は「慣れている」。to は前置詞。used to do（昔よく〜した）と区別。"],
  [206, "I'm looking forward to seeing you again.", "またお会いするのを楽しみにしています。", "look forward to の to も前置詞。後ろは -ing。"],
  [207, "There is no knowing what will happen in the future.", "将来何が起こるかはわからない。", "There is no -ing で「〜できない」。決まり文句。"],
  [208, "It is no use worrying about the past.", "過去のことをくよくよしてもむだだ。", "It is no use -ing で「〜してもむだだ」。"],
  [209, "You should avoid eating just before you go to bed.", "寝る直前に食べるのは避けるべきだ。", "avoid は動名詞のみ（× avoid to eat）。"],
  [210, "I've given up looking for the cat.", "私はそのネコを探すのをあきらめた。", "give up は動名詞のみ。「探す」は look for。"],
  [211, "Masako has decided to study abroad.", "マサコは留学することを決めた。", "decide は不定詞のみ（× decide studying）。"],
  [212, "I hope to go to Italy next year.", "私は来年イタリアに行きたいと思う。", "hope は不定詞のみ。これから先のこと。"],
  [213, "I'll never forget meeting her.", "彼女に会ったことは決して忘れません。", "forget -ing は「（過去に）〜したことを忘れる」。"],
  [214, "Don't forget to meet her.", "彼女に会うのを忘れないでね。", "forget to do は「これから〜するのを忘れる」。213と対で覚える。"],
  [215, "Do you remember locking the door?", "ドアのカギをかけたことを覚えていますか。", "remember -ing は「〜したのを覚えている」。過去向き。"],
  [216, "Please remember to lock the door.", "ドアのカギをかけるのを覚えておいてね。", "remember to do は「これから〜するのを覚えておく」。未来向き。"],
  [217, "I regret rejecting your offer.", "私はあなたの申し出を断ったことを後悔しています。", "regret -ing は過去にしたことへの後悔。"],
  [218, "I regret to say that we must reject your offer.", "残念ながら、あなたの申し出をお断りしなければなりません。", "regret to say は「残念ながら申し上げる」。これから言う内容。"],
  [219, "He tried lifting the rock, and found it was not very heavy.", "彼はその岩を持ち上げてみて、そんなに重くないことがわかった。", "try -ing は「試しに〜してみる」。実際にやっている。"],
  [220, "He tried to lift the rock, but he couldn't.", "彼はその岩を持ち上げてみようとしたが、できなかった。", "try to do は「〜しようと努力する」。できたとは限らない。"],
  [221, "Sue started crying when she heard the news.", "スーは、その知らせを聞いた時、泣きだした。", "start は動名詞・不定詞どちらも可。started to cry でも同じ意味。", ["Sue started to cry when she heard the news."]],
  [222, "Sue started to cry when she heard the news.", "スーは、その知らせを聞いた時、泣きだした。", "start to do は start -ing とほぼ同じ意味。221の言い換え。", ["Sue started crying when she heard the news."]],
  [223, "Tracy loves singing old folk songs.", "トレーシーは昔のフォークソングを歌うのが大好きだ。", "love も動名詞・不定詞どちらも可。loves to sing でも同じ意味。", ["Tracy loves to sing old folk songs."]],
  [224, "Tracy loves to sing old folk songs.", "トレーシーは昔のフォークソングを歌うのが大好きだ。", "love to do は love -ing とほぼ同じ意味。223の言い換え。", ["Tracy loves singing old folk songs."]],
  [225, "He stopped taking pictures.", "彼は写真を撮るのをやめた。", "stop -ing は「〜するのをやめる」。-ing が stop の目的語。"],
  [226, "He stopped to take pictures.", "彼は写真を撮るために立ち止まった。", "stop to do は「〜するために立ち止まる」。to do は目的の副詞的用法。225と対。"],
  [227, "I am anxious about traveling alone.", "私はひとりで旅行をすることを不安に思っている。", "be anxious about -ing は「〜を心配している」。"],
  [228, "I'm very anxious to travel alone.", "私はひとりで旅行に行きたいのです。", "be anxious to do は「〜したがっている」。227と意味が正反対なので注意。"]
];

function evergreenGroup(number) {
  if (number <= 146) return { key: "EV6", title: "Evergreen 第6章 態（141-146）" };
  if (number <= 193) return { key: "EV7", title: "Evergreen 第7章 不定詞（147-193）" };
  if (number <= 208) return { key: "EV8", title: "Evergreen 第8章 動名詞（194-208）" };
  return { key: "EV9", title: "Evergreen 動名詞と不定詞（209-228）" };
}

const ENGLISH_EVERGREEN_QUESTIONS = EVERGREEN_SENTENCES.map(([number, english, japanese, point, alts]) => {
  const group = evergreenGroup(number);
  return {
    id: `e-ev-${String(number).padStart(3, "0")}`,
    subject: "english",
    part: "evergreen",
    type: "compose",
    group: group.key,
    groupTitle: group.title,
    prompt: `例文 ${number}　英語にしてください。`,
    jp: japanese,
    answer: english,
    aliases: [english, ...(alts || [])],
    explanation: point
  };
});
