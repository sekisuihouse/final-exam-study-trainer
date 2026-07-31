/* 英語 Reading 対策。
   出典:
   - Unit 7 Thinking Outside the BOX (pp.118-119)
   - 0619授業資料 Journal of Business Standard
   - Unit 8 Growing Up: Then and Now (pp.134-135)
   リスニングは対象外。 */

const ENGLISH_READING_QUESTIONS = [
  {
    id: "e-read7-tf1",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READ7",
    groupTitle: "Reading Unit 7: Thinking Outside the BOX",
    prompt: "T/F: Bot2Karot is controlled by a smartphone app.",
    answer: "T",
    choices: ["T", "F"],
    explanation: "Bot2Karot is controlled by an app on a smartphone."
  },
  {
    id: "e-read7-tf2",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READ7",
    groupTitle: "Reading Unit 7: Thinking Outside the BOX",
    prompt: "T/F: Bot2Karot helps people take care of a vegetable garden.",
    answer: "T",
    choices: ["T", "F"],
    explanation: "It helps people grow and take care of vegetables."
  },
  {
    id: "e-read7-tf3",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READ7",
    groupTitle: "Reading Unit 7: Thinking Outside the BOX",
    prompt: "T/F: Brooke Martin was twenty when she invented iCPooch.",
    answer: "F",
    choices: ["T", "F"],
    explanation: "She invented iCPooch when she was just twelve years old."
  },
  {
    id: "e-read7-tf4",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READ7",
    groupTitle: "Reading Unit 7: Thinking Outside the BOX",
    prompt: "T/F: The only thing iCPooch can do is let owners look at their dog.",
    answer: "F",
    choices: ["T", "F"],
    explanation: "It lets owners video chat with pets and give them a treat."
  },
  {
    id: "e-read7-tf5",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READ7",
    groupTitle: "Reading Unit 7: Thinking Outside the BOX",
    prompt: "T/F: Robert Saunt liked playing video games.",
    answer: "T",
    choices: ["T", "F"],
    explanation: "He was tired of buying or borrowing different video-game controllers, so he invented Game Blox."
  },
  {
    id: "e-read7-tf6",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READ7",
    groupTitle: "Reading Unit 7: Thinking Outside the BOX",
    prompt: "T/F: Robert's gadget may be good for the environment.",
    answer: "T",
    choices: ["T", "F"],
    explanation: "Game Blox can save a large amount of materials every year."
  },
  {
    id: "e-read7-c1",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READ7",
    groupTitle: "Reading Unit 7: Thinking Outside the BOX",
    prompt: "What is the main idea of Thinking Outside the BOX?",
    answer: "Young inventors can solve problems and change how people do things.",
    choices: [
      "Young inventors can solve problems and change how people do things.",
      "Teenagers should stop using smartphones.",
      "Gardening is more important than technology.",
      "Video games always waste materials."
    ],
    explanation: "The passage introduces teenage inventors and their useful inventions."
  },
  {
    id: "e-read7-c2",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READ7",
    groupTitle: "Reading Unit 7: Thinking Outside the BOX",
    prompt: "Why did Brooke Martin invent iCPooch?",
    answer: "She missed her dog and knew her dog suffered from stress when owners left.",
    choices: [
      "She missed her dog and knew her dog suffered from stress when owners left.",
      "She wanted to make a garden robot.",
      "She wanted to save water and energy.",
      "She wanted to play games with her friends."
    ],
    explanation: "Brooke was an animal lover who missed her dog when she was away."
  },
  {
    id: "e-read7-c3",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READ7",
    groupTitle: "Reading Unit 7: Thinking Outside the BOX",
    prompt: "What is Game Blox used for?",
    answer: "It can be used with several popular game consoles.",
    choices: [
      "It can be used with several popular game consoles.",
      "It tracks animals with cameras.",
      "It gives pets treats remotely.",
      "It waters vegetable gardens automatically."
    ],
    explanation: "Robert Saunt invented a controller that can be used with four popular game consoles."
  },
  {
    id: "e-read7-ex1",
    subject: "english",
    part: "reading",
    type: "fill",
    group: "READ7",
    groupTitle: "Reading Unit 7: Thinking Outside the BOX",
    prompt: "抜き出し: Brooke Martinが発明した装置の名前を書いてください。",
    answer: "iCPooch",
    aliases: ["icpooch"],
    explanation: "Brooke Martin invented iCPooch."
  },
  {
    id: "e-read7-ex2",
    subject: "english",
    part: "reading",
    type: "fill",
    group: "READ7",
    groupTitle: "Reading Unit 7: Thinking Outside the BOX",
    prompt: "抜き出し: Eliott Sarreyが発明したロボットの名前を書いてください。",
    answer: "Bot2Karot",
    aliases: ["bot2karot"],
    explanation: "Eliott Sarrey invented Bot2Karot."
  },
  {
    id: "e-reads-c1",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READS",
    groupTitle: "Reading: Journal of Business Standard",
    prompt: "Who invented a device that let dog owners video chat with their pets?",
    answer: "Brooke Martin",
    choices: ["Brooke Martin", "Ann Miura-Ko", "Mike Maples", "Robert Saunt"],
    explanation: "The Standard article says Brooke Martin invented the device when she was 12."
  },
  {
    id: "e-reads-c2",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READS",
    groupTitle: "Reading: Journal of Business Standard",
    prompt: "What happened to iCPooch in 2017?",
    answer: "It was shut down.",
    choices: ["It was shut down.", "It was bought by Stanford.", "It became a school project.", "It changed into Patagonia."],
    explanation: "The article states that iCPooch was shut down in 2017."
  },
  {
    id: "e-reads-c3",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READS",
    groupTitle: "Reading: Journal of Business Standard",
    prompt: "Where did Brooke Martin earn a master's degree?",
    answer: "Stanford University",
    choices: ["Stanford University", "Floodgate Fund LP", "Patagonia", "Spokane Journal"],
    explanation: "She graduated from Stanford University with a master's degree."
  },
  {
    id: "e-reads-c4",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READS",
    groupTitle: "Reading: Journal of Business Standard",
    prompt: "What kind of company is Floodgate Fund LP?",
    answer: "A venture capital company",
    choices: ["A venture capital company", "A pet-food company", "A smartphone company", "A university department"],
    explanation: "The article describes Floodgate Fund LP as a venture capital company."
  },
  {
    id: "e-reads-tf1",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READS",
    groupTitle: "Reading: Journal of Business Standard",
    prompt: "T/F: Brooke Martin has completely ruled out entrepreneurship in her future.",
    answer: "F",
    choices: ["T", "F"],
    explanation: "The article says she has not ruled out entrepreneurship."
  },
  {
    id: "e-reads-tf2",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READS",
    groupTitle: "Reading: Journal of Business Standard",
    prompt: "T/F: Brooke Martin now works with younger founders.",
    answer: "T",
    choices: ["T", "F"],
    explanation: "Her current role includes supporting younger founders with resources and mentorship."
  },
  {
    id: "e-reads-ex1",
    subject: "english",
    part: "reading",
    type: "fill",
    group: "READS",
    groupTitle: "Reading: Journal of Business Standard",
    prompt: "抜き出し: Brooke Martinが作った会社・製品の名前を書いてください。",
    answer: "iCPooch",
    aliases: ["icpooch"],
    explanation: "The company was formed around iCPooch."
  },
  {
    id: "e-read8-tf1",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READ8",
    groupTitle: "Reading Unit 8: Growing Up: Then and Now",
    prompt: "T/F: Most children from 500 to 1500 went to school.",
    answer: "F",
    choices: ["T", "F"],
    explanation: "The passage says many children did not go to school because they helped at home or on the farm."
  },
  {
    id: "e-read8-tf2",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READ8",
    groupTitle: "Reading Unit 8: Growing Up: Then and Now",
    prompt: "T/F: The Aztecs believed education was important.",
    answer: "T",
    choices: ["T", "F"],
    explanation: "The Aztecs believed that education, or learning, was important."
  },
  {
    id: "e-read8-tf3",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READ8",
    groupTitle: "Reading Unit 8: Growing Up: Then and Now",
    prompt: "T/F: In both cultures mentioned, teenagers rarely chose who they married.",
    answer: "F",
    choices: ["T", "F"],
    explanation: "The passage says these teenagers rarely chose who they married."
  },
  {
    id: "e-read8-tf4",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READ8",
    groupTitle: "Reading Unit 8: Growing Up: Then and Now",
    prompt: "T/F: In the nineteenth century, many children worked in factories.",
    answer: "T",
    choices: ["T", "F"],
    explanation: "The passage says many people moved into cities and children worked in factories."
  },
  {
    id: "e-read8-tf5",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READ8",
    groupTitle: "Reading Unit 8: Growing Up: Then and Now",
    prompt: "T/F: Today most children go to school.",
    answer: "T",
    choices: ["T", "F"],
    explanation: "The passage contrasts the past with today: most children now go to school."
  },
  {
    id: "e-read8-c1",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READ8",
    groupTitle: "Reading Unit 8: Growing Up: Then and Now",
    prompt: "What is the main topic of Growing Up: Then and Now?",
    answer: "How children's lives have changed over the years",
    choices: [
      "How children's lives have changed over the years",
      "How to invent a smartphone gadget",
      "How to protect pets from stress",
      "How companies raise money"
    ],
    explanation: "The passage compares children's daily lives, school, work, and marriage in the past and now."
  },
  {
    id: "e-read8-c2",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READ8",
    groupTitle: "Reading Unit 8: Growing Up: Then and Now",
    prompt: "Why did many children in the past not go to school?",
    answer: "They had to help at home or on the farm.",
    choices: [
      "They had to help at home or on the farm.",
      "They all moved to universities.",
      "They were too busy inventing gadgets.",
      "They chose to travel alone."
    ],
    explanation: "The passage says they had to help all day at home or on the farm."
  },
  {
    id: "e-read8-c3",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READ8",
    groupTitle: "Reading Unit 8: Growing Up: Then and Now",
    prompt: "What was special about the Aztecs?",
    answer: "They believed education was important and every child went to school.",
    choices: [
      "They believed education was important and every child went to school.",
      "They invented iCPooch.",
      "They refused to teach boys.",
      "They did not allow children to learn."
    ],
    explanation: "The passage calls the Aztecs unique because every child went to school."
  },
  {
    id: "e-read8-c4",
    subject: "english",
    part: "reading",
    type: "choice",
    group: "READ8",
    groupTitle: "Reading Unit 8: Growing Up: Then and Now",
    prompt: "What did many children do with the money they earned in factories?",
    answer: "They gave it to their parents to help pay for the family's needs.",
    choices: [
      "They gave it to their parents to help pay for the family's needs.",
      "They used all of it for enjoyment.",
      "They saved it to buy Game Blox.",
      "They gave it to their teachers."
    ],
    explanation: "Children often gave all of their money to their parents to help pay for family needs."
  },
  {
    id: "e-read8-ex1",
    subject: "english",
    part: "reading",
    type: "fill",
    group: "READ8",
    groupTitle: "Reading Unit 8: Growing Up: Then and Now",
    prompt: "抜き出し: 現代の子どもが学校のほかにする簡単な家事を表す語を書いてください。",
    answer: "chores",
    aliases: ["chore"],
    explanation: "The passage mentions simple chores, like washing dishes or making your bed."
  },
  {
    id: "e-read8-ex2",
    subject: "english",
    part: "reading",
    type: "fill",
    group: "READ8",
    groupTitle: "Reading Unit 8: Growing Up: Then and Now",
    prompt: "抜き出し: 子どもが六日働いて得ることもあった非常に少ない金額を表す語句を書いてください。",
    answer: "as little as a penny",
    aliases: ["a penny", "as little as one penny"],
    explanation: "The passage says children sometimes worked long hours six days a week and earned as little as a penny a day."
  }
];

function normalizeEnglishDrillQuestion(question) {
  const next = { ...question };
  if (next.type === "vocabja") {
    next.type = "choice";
    next.prompt = `語彙: ${question.prompt} の意味として正しいものを選んでください。`;
    next.choices = question.choices || [question.answer];
  }
  if (next.type === "vocaben" || next.type === "vocabcloze") {
    next.type = "fill";
  }
  next.aliases = [next.answer, ...(next.aliases || [])];
  return next;
}

const ENGLISH_QUESTIONS = [
  ...ENGLISH_VOCAB_QUESTIONS.map(normalizeEnglishDrillQuestion),
  ...ENGLISH_GQ_QUESTIONS,
  ...ENGLISH_EVERGREEN_QUESTIONS,
  ...ENGLISH_MIDTERM_QUESTIONS,
  ...ENGLISH_READING_QUESTIONS.map((question) => ({
    ...question,
    aliases: [question.answer, ...(question.aliases || [])]
  }))
];
