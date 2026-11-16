export interface TimelineItem {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
  hiddenMessage: string;
}

export interface MemoryItem {
  id: number;
  image: string;
  caption: string;
  category: 'Our Favourite Moments' | 'Her Beautiful Pictures' | 'Our Cute Memories' | 'Silly & Funny Moments' | 'Traditional Looks' | 'Random Little Moments' | 'My Favourite Pictures of You';
  date: string;
}

export interface OpenWhenCard {
  id: string;
  title: string;
  subtitle: string;
  message: string;
  iconName: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const anniversaryConfig = {
  partnerName: "My Love", // Easily editable
  myName: "Your Partner",
  anniversaryDate: "2026-11-17T00:00:00", // 17 November 2026
  startDate: "2025-11-17T00:00:00",
  
  hero: {
    title: "One Year of Us ❤️",
    subtitle: "365 days of memories, laughter, little arguments, endless love, and a thousand reasons to choose you again.",
    dateDisplay: "17.11.2026",
    tagline: "Our first chapter, forever to go."
  },

  letter: {
    greeting: "MY BABY,",
    paragraphs: [
      "Ek pura saal finally. It really felt so great to spend this one full year with you. Pyar , jhagde sab kuch.",
      "From hospital talks to silly moments. From the best boyfriend to something which I am not.  But I am sorry .",
      "Every day can not be perfect. But I promise to keep choosing you every day, understanding you, making memories with you and finding new reasons to love you every single day.",
      "Agar ek saal pehele mai ja pata I would had fixed few mistakes. But abh jo bhi hai, jaisi bhi hai yahi leke age badhna hoga."
    ],
    closing: "HAPPY 1ST ANNIVERSARY, My Bachaa",
    signoff: "From YOUR......"
  },

  timeline: [
    {
      id: 1,
      date: "November 17, 2025",
      title: "The day we confessed our feelings",
      description: "The magical moment when two beating hearts finally spoke the truth, changing our lives forever.",
      image: "/photos/PHOTO_03.jpg",
      hiddenMessage: "Hearing you say how much you cared for me was the happiest moment of my life."
    },
    {
      id: 2,
      date: "Late November 2025",
      title: "Our First Real Conversation",
      description: "Talking for hours about everything and nothing, realizing how easily time flew by with you.",
      image: "/photos/PHOTO_01.jpg",
      hiddenMessage: "That was the night I realized I didn't want the conversation to ever end."
    },
    {
      id: 3,
      date: "December 2025",
      title: "Getting Closer",
      description: "Shared laughs, inside jokes, and discovering how wonderfully weird and sweet you are.",
      image: "/photos/PHOTO_02.jpg",
      hiddenMessage: "Every little smile of yours became my favourite sight."
    },
    {
      id: 4,
      date: "Early 2026",
      title: "Our Funniest Memories",
      description: "Silly faces, cute filter snaps, and laughing uncontrollably over the simplest things.",
      image: "/photos/PHOTO_04.jpg",
      hiddenMessage: "You can make me laugh even on my absolute toughest days."
    },
    {
      id: 5,
      date: "Spring & Summer 2026",
      title: "Our Sweetest Moments",
      description: "Quiet cuddles, holding hands, and feeling completely at peace just being near each other.",
      image: "/photos/PHOTO_05.jpg",
      hiddenMessage: "In your arms is my absolute favourite place in the entire universe."
    },
    {
      id: 6,
      date: "Throughout 2026",
      title: "Growing Together",
      description: "Supporting each other through busy days, celebrating wins, and overcoming every little hurdle.",
      image: "/photos/PHOTO_06.jpg",
      hiddenMessage: "We make such an unstoppable team, no matter what comes our way."
    },
    {
      id: 7,
      date: "November 17, 2026",
      title: "Our First Anniversary",
      description: "365 days of pure magic. Celebrating one year of beautiful love and looking forward to forever.",
      image: "/photos/OUR_FAVOURITE_PHOTO.jpg",
      hiddenMessage: "Happy 1st Anniversary! I love you more than words can ever say."
    }
  ] as TimelineItem[],

  memories: [
    {
      id: 1,
      image: "/photos/PHOTO_01.jpg",
      caption: "Radiant in yellow, absolute sunshine ❤️",
      category: "Traditional Looks",
      date: "Traditional Day"
    },
    {
      id: 2,
      image: "/photos/PHOTO_02.jpg",
      caption: "Gorgeous in vibrant pink with stunning details ✨",
      category: "Traditional Looks",
      date: "Special Celebration"
    },
    {
      id: 3,
      image: "/photos/PHOTO_03.jpg",
      caption: "Sunlit smiles and beautiful golden hour glow ☀️",
      category: "Our Favourite Moments",
      date: "Golden Hour"
    },
    {
      id: 4,
      image: "/photos/PHOTO_04.jpg",
      caption: "Monochrome magic and doggy filter cuteness 🐾",
      category: "Silly & Funny Moments",
      date: "Fun Filter Night"
    },
    {
      id: 5,
      image: "/photos/PHOTO_05.jpg",
      caption: "Graceful in blue with jhumkas that sparkle ✨",
      category: "Her Beautiful Pictures",
      date: "Evening Out"
    },
    {
      id: 6,
      image: "/photos/PHOTO_06.jpg",
      caption: "The cutest wink that stole my heart completely 😉",
      category: "My Favourite Pictures of You",
      date: "Sweet Candid"
    },
    {
      id: 7,
      image: "/photos/PHOTO_07.jpg",
      caption: "Side profile elegance by the window light 🌅",
      category: "Her Beautiful Pictures",
      date: "Calm Afternoon"
    },
    {
      id: 8,
      image: "/photos/PHOTO_08.jpg",
      caption: "Pretty floral print and the prettiest mirror reflection 🌸",
      category: "Our Cute Memories",
      date: "Mirror Selfie"
    },
    {
      id: 9,
      image: "/photos/PHOTO_09.jpg",
      caption: "Black suit charm and soulful warm vibes 🖤",
      category: "Her Beautiful Pictures",
      date: "Cozy Night"
    },
    {
      id: 10,
      image: "/photos/PHOTO_10.webp",
      caption: "Soft lighting and serene blue aesthetic 💙",
      category: "Our Favourite Moments",
      date: "Peaceful Moment"
    },
    {
      id: 11,
      image: "/photos/PHOTO_11.webp",
      caption: "Classic black and white grace 🤍",
      category: "Traditional Looks",
      date: "Timeless Portrait"
    },
    {
      id: 12,
      image: "/photos/PHOTO_12.webp",
      caption: "Alien stickers and silly giggles 😂",
      category: "Silly & Funny Moments",
      date: "Filter Fun"
    },
    {
      id: 13,
      image: "/photos/PHOTO_13.webp",
      caption: "Mehendi hand and thoughtful dreamy expression 🌿",
      category: "Random Little Moments",
      date: "Festive Vibes"
    },
    {
      id: 14,
      image: "/photos/PHOTO_14.webp",
      caption: "Soft floral curtain backdrop and delicate charm 🍃",
      category: "Her Beautiful Pictures",
      date: "Home Portrait"
    },
    {
      id: 15,
      image: "/photos/PHOTO_15.webp",
      caption: "Elegant white kurta with floral embroidery 🤍",
      category: "Traditional Looks",
      date: "Graceful Day"
    },
    {
      id: 16,
      image: "/photos/PHOTO_16.webp",
      caption: "Monochrome laughter and sparkling jhumkas ✨",
      category: "Our Cute Memories",
      date: "Black & White Love"
    },
    {
      id: 17,
      image: "/photos/PHOTO_17.webp",
      caption: "Smart glasses and alien sticker silliness 🤓👽",
      category: "Silly & Funny Moments",
      date: "Nerdy & Cute"
    },
    {
      id: 18,
      image: "/photos/PHOTO_18.webp",
      caption: "The adorable cheek poke and brightest smile 🤏",
      category: "My Favourite Pictures of You",
      date: "Cheeky Smile"
    },
    {
      id: 19,
      image: "/photos/PHOTO_19.webp",
      caption: "Wet hair, big expressive eyes, and pure beauty 💖",
      category: "My Favourite Pictures of You",
      date: "Morning Glow"
    },
    {
      id: 20,
      image: "/photos/PHOTO_20.webp",
      caption: "Dark classy vibes and vintage monochrome feel 🖤",
      category: "Random Little Moments",
      date: "Moody Elegance"
    }
  ] as MemoryItem[],

  reasons: [
    "The way your eyes light up when you talk about things you love.",
    "Your silly expressions when you're trying to act serious.",
    "The way you make even the most boring errands feel like an adventure.",
    "Your hugs that instantly make all my worries disappear.",
    "The cute way you wrinkle your nose when you laugh.",
    "How supportive and caring you are whenever I'm stressed.",
    "Your wonderful taste in music and how we jam out together.",
    "The little good morning and good night texts that brighten my day.",
    "How passionately you care about the people you love.",
    "Your funny voice impressions and random inside jokes.",
    "The way you look at me like I'm your entire world.",
    "Your patience when I take forever to pick what to eat.",
    "How effortlessly beautiful you are, inside and out.",
    "The way you hold my hand like you never want to let go.",
    "Your comforting presence when everything else feels chaotic.",
    "The cute sleepy messages you send late at night.",
    "How you celebrate my small victories like they're huge milestones.",
    "Your infectious laughter that echoes in my heart all day.",
    "The thoughtful little surprises and sweet gestures you do.",
    "Simply because you're you, my absolute favourite person."
  ],

  openWhen: [
    {
      id: 'miss',
      title: 'Open when you miss me',
      subtitle: 'For when we are apart',
      message: 'Close your eyes and take a deep breath. Even when we are miles apart, you are always in my thoughts and right here in my heart. I cannot wait until I can hold you again! ❤️',
      iconName: 'Heart'
    },
    {
      id: 'sad',
      title: "Open when you're sad",
      subtitle: 'To turn your frown upside down',
      message: 'Whatever is bringing you down right now cannot dim your gorgeous shine. Remember how strong, resilient, and deeply loved you are. I am always in your corner, rooting for you! 🌟',
      iconName: 'Smile'
    },
    {
      id: 'smile',
      title: 'Open when you need a smile',
      subtitle: 'Instant mood booster',
      message: 'Here is a reminder of your silly face when you laugh at my terrible jokes. You are the sunshine of my life, and your smile is my favourite sight in the whole world! 😄',
      iconName: 'Sun'
    },
    {
      id: 'sleep',
      title: "Open when you cannot sleep",
      subtitle: 'Late night comfort',
      message: 'Counting sheep? Try counting all the reasons why we are lucky to have each other instead. Rest easy, my love. Sweet dreams, and I will see you in the morning. 🌙✨',
      iconName: 'Moon'
    },
    {
      id: 'loved',
      title: 'Open when you want to feel loved',
      subtitle: 'A warm virtual hug',
      message: 'In case nobody told you today: you are cherished, adored, treasured, and loved beyond measure. You make my life infinitely better just by existing in it. Forever and always! 💕',
      iconName: 'Sparkles'
    }
  ] as OpenWhenCard[],

  quiz: [
    {
      id: 1,
      question: "Who said 'I love you' first?",
      options: ["You did", "I did", "We said it at the exact same time", "It was a mutual awkward blur"],
      correctIndex: 2,
      explanation: "Even if we debated who said it first, our hearts knew we fell at the exact same moment!"
    },
    {
      id: 2,
      question: "Who is more dramatic when they are hungry?",
      options: ["Definitely you", "Definitely me", "Both of us equally", "We turn into tiny monsters"],
      correctIndex: 3,
      explanation: "Hangry status is a shared emergency state that requires immediate snacks!"
    },
    {
      id: 3,
      question: "Who takes longer to get ready before going out?",
      options: ["You (looking flawless takes time)", "Me", "We are both surprisingly fast", "It's a tie of epic proportions"],
      correctIndex: 0,
      explanation: "Perfection takes time, and you always look breathtakingly stunning!"
    },
    {
      id: 4,
      question: "What is our absolute favourite activity together?",
      options: ["Trying delicious food & cafe hopping", "Late night talks & stargazing", "Binge-watching shows & cuddling", "All of the above ❤️"],
      correctIndex: 3,
      explanation: "Every single moment is our favourite as long as we are together!"
    },
    {
      id: 5,
      question: "Who misses the other person more during the day?",
      options: ["Me, obviously", "You, without a doubt", "We tie every single day", "Our phones miss us for heating up"],
      correctIndex: 2,
      explanation: "The mutual longing is real—we check our phones at the exact same second!"
    }
  ] as QuizQuestion[],

  finalMessage: "If I had to live this year a thousand times, I'd find you in every single one.\n\nHere's to us, to our story, and to everything that is yet to come.\n\nI love you. Always. ❤️\n\n17.11.2025 — 17.11.2026\n\nForever isn't long enough with you."
};
