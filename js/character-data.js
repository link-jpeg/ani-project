// Jujupedia - Complete Character Data
// Contains summaries, techniques, domains, and voice actors for all 63 JJK characters

const characterDetails = {
    // ============================================
    // MAIN CHARACTERS (TRIO + GOJO)
    // ============================================
    
    "Itadori, Yuuji": {
        grade: "Grade 1 (Potential Special Grade)",
        technique: "Cursed Energy Manipulation, Black Flash, Shrine (Sukuna's)",
        domain: "Malevolent Shrine (Sukuna's)",
        bio: "Yuji Itadori is the main protagonist of Jujutsu Kaisen. A high school student with superhuman physical abilities, he becomes the vessel of Ryomen Sukuna after consuming one of the King of Curses' fingers. Despite sharing his body with the most dangerous curse in history, Yuji maintains control and joins Tokyo Jujutsu High to collect all of Sukuna's fingers and eventually consume them, ending the curse forever. He is kind-hearted, selfless, and values giving people a proper death.",
        voiceActors: "Junya Enoki (Japanese), Adam McArthur (English)"
    },
    
    "Fushiguro, Megumi": {
        grade: "Grade 2",
        technique: "Ten Shadows Technique",
        domain: "Chimera Shadow Garden (Incomplete)",
        bio: "Megumi Fushiguro is a first-year student at Tokyo Jujutsu High and the son of Toji Fushiguro, the 'Sorcerer Killer.' He is a quiet, analytical, and stoic sorcerer who uses the Ten Shadows Technique, allowing him to summon various shikigami from shadows including Divine Dogs, Nue, Toad, Great Serpent, Max Elephant, Rabbit Escape, and the powerful Mahoraga. Despite his calm demeanor, Megumi has a strong sense of justice and is willing to sacrifice himself to protect others, a trait Gojo considers his greatest weakness.",
        voiceActors: "Yuma Uchida (Japanese), Robbie Daymond (English)"
    },
    
    "Kugisaki, Nobara": {
        grade: "Grade 3",
        technique: "Straw Doll Technique, Resonance",
        domain: "None",
        bio: "Nobara Kugisaki is a first-year student at Tokyo Jujutsu High who comes from a small village in the countryside. She is confident, fierce, and unapologetically herself, with a strong sense of style and an even stronger will. Nobara uses a hammer, nails, and her Straw Doll Technique to exorcise curses, with her signature move Resonance allowing her to damage a curse through any part of its body. She values her friends deeply, refuses to die before living her best life, and never backs down from a fight.",
        voiceActors: "Asami Seto (Japanese), Anne Yatco (English)"
    },
    
    "Gojou, Satoru": {
        grade: "Special Grade",
        technique: "Limitless, Six Eyes",
        domain: "Unlimited Void (Muryoku Kuusho)",
        bio: "Satoru Gojo is widely recognized as the strongest jujutsu sorcerer in the world. Born with both the Limitless technique and the Six Eyes, he is virtually untouchable. Gojo works as a teacher at Tokyo Jujutsu High, where he mentors Yuji, Megumi, and Nobara with his unconventional and often eccentric methods. He is confident, playful, and deeply committed to reforming the jujutsu world from within, protecting the young and eliminating the corrupt elders who perpetuate the old ways.",
        voiceActors: "Yuichi Nakamura (Japanese), Kaiji Tang (English)"
    },
    
    // ============================================
    // TOKYO HIGH TEACHERS & STAFF
    // ============================================
    
    "Nanami, Kento": {
        grade: "Grade 1",
        technique: "Ratio Technique",
        domain: "None",
        bio: "Kento Nanami is a former salaryman who returned to being a jujutsu sorcerer after becoming disillusioned with corporate life. He is calm, methodical, and perpetually exhausted, simply wanting to complete his work and go home. Nanami uses the Ratio Technique to find weak points in his targets, delivering devastating critical hits. He serves as a mentor figure to Yuji Itadori and is one of the most reliable and respected sorcerers at Tokyo Jujutsu High.",
        voiceActors: "Kenjiro Tsuda (Japanese), David Vincent (English)"
    },
    
    "Ieiri, Shouko": {
        grade: "Grade Unknown",
        technique: "Reverse Cursed Technique",
        domain: "None",
        bio: "Shoko Ieiri is the doctor of Tokyo Jujutsu High, responsible for healing sorcerers who return from missions. She is one of the few people who can use Reverse Cursed Technique to heal others. Shoko was a classmate of Gojo and Geto during her student days, and she has witnessed the tragedy that tore her friends apart. She remains stoic and professional, using her abilities to keep the next generation of sorcerers alive.",
        voiceActors: "Aya Endo (Japanese), Ryan Bartley (English)"
    },
    
    "Yaga, Masamichi": {
        grade: "Grade 1",
        technique: "Cursed Corpse Creation",
        domain: "None",
        bio: "Masamichi Yaga is the principal of Tokyo Jujutsu High and a master of creating cursed corpses like Panda. He is a stern, imposing figure with a no-nonsense attitude, but he genuinely cares about his students. Yaga is one of the few people who can stand up to Gojo and has extensive knowledge of the jujutsu world's politics and history. His cursed corpse technique is considered revolutionary in the field of jujutsu.",
        voiceActors: "Takaya Kuroda (Japanese), Keith Silverstein (English)"
    },
    
    "Ijichi, Kiyotaka": {
        grade: "Grade Unknown (Assistant Manager)",
        technique: "Barrier Techniques",
        domain: "None",
        bio: "Kiyotaka Ijichi is the nervous and perpetually anxious assistant manager at Tokyo Jujutsu High. He handles logistics, transportation, and barrier deployment for sorcerers on missions. Despite his timid demeanor, Ijichi is highly competent and dedicated to his work. He often bears the brunt of Gojo's teasing but remains a reliable support for the students.",
        voiceActors: "Mitsuaki Kanuka (Japanese), Chris Cason (English)"
    },
    
    "Nitta, Arata": {
        grade: "Grade Unknown",
        technique: "Cursed Energy Manipulation",
        domain: "None",
        bio: "Arata Nitta is an assistant director at Tokyo Jujutsu High who oversees the Kyoto Sister School Exchange Event. He is a calm and professional figure who handles administrative and operational tasks. Nitta is also the older brother of Akari Nitta and works alongside Ijichi to support the sorcerers in the field.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    "Nitta, Akari": {
        grade: "Grade 3",
        technique: "Cursed Energy Manipulation",
        domain: "None",
        bio: "Akari Nitta is an assistant manager at Tokyo Jujutsu High and the younger sister of Arata Nitta. She is responsible for supporting sorcerers during missions, including the Kyoto exchange event. Akari is professional and dedicated, though she appears less frequently than her fellow assistant Ijichi.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    // ============================================
    // KYOTO HIGH STUDENTS
    // ============================================
    
    "Toudou, Aoi": {
        grade: "Grade 1",
        technique: "Boogie Woogie",
        domain: "None",
        bio: "Aoi Todo is a massive, eccentric, and incredibly powerful third-year student at Kyoto Jujutsu High. He considers Yuji Itadori his best friend based solely on their shared preference in women. Todo's Boogie Woogie technique allows him to swap positions with anything that has cursed energy, making him a brilliant tactician in combat. Despite his wild personality, he is one of the strongest grade 1 sorcerers and a formidable fighter.",
        voiceActors: "Yuichi Nakamura (Japanese), Xander Mobus (English)"
    },
    
    "Miwa, Kasumi": {
        grade: "Grade 3",
        technique: "New Shadow Style: Simple Domain",
        domain: "None",
        bio: "Kasumi Miwa is a first-year student at Kyoto Jujutsu High. She is kind-hearted, earnest, and often struggles with her own self-doubt. Miwa uses a katana and practices the New Shadow Style. She became a sorcerer primarily to support her younger brothers financially. Miwa looks up to Gojo and dreams of a peaceful future, though she often finds herself in difficult situations due to her loyalty.",
        voiceActors: "Chinatsu Akasaki (Japanese), Laura Post (English)"
    },
    
    "Kamo, Noritoshi": {
        grade: "Grade 1 (Semi)",
        technique: "Blood Manipulation",
        domain: "None",
        bio: "Noritoshi Kamo is a third-year student at Kyoto Jujutsu High and the heir to the Kamo clan, one of the Three Great Families. He is serious, prideful, and feels the weight of his family's legacy. Noritoshi uses Blood Manipulation, a technique that allows him to control his own blood as a weapon. Despite his initial rivalry with Megumi, he respects strength and has a strong sense of duty.",
        voiceActors: "Daisuke Namikawa (Japanese), Landon McDonald (English)"
    },
    
    "Zenin, Mai": {
        grade: "Grade 3",
        technique: "Construction",
        domain: "None",
        bio: "Mai Zenin is a first-year student at Kyoto Jujutsu High and the younger twin sister of Maki Zenin. Unlike her sister who rejected the clan, Mai feels trapped by her family and resents Maki for leaving her behind. She uses the Construction technique, which allows her to create objects from nothing, but it consumes a massive amount of cursed energy. Mai is cynical, sarcastic, and hides her deep pain behind a sharp tongue.",
        voiceActors: "Marina Inoue (Japanese), Jeannie Tirado (English)"
    },
    
    "Nishimiya, Momo": {
        grade: "Grade 3",
        technique: "Tool Manipulation",
        domain: "None",
        bio: "Momo Nishimiya is a second-year student at Kyoto Jujutsu High and the self-proclaimed 'queen' of her school. She uses a broom as a cursed tool and can manipulate it to fly and attack. Momo is loyal to her friends, especially Mai, and initially looks down on Tokyo students. However, she shows growth and maturity as the series progresses.",
        voiceActors: "Rie Kugimiya (Japanese), Suzie Yeung (English)"
    },
    
    "Muta, Koukichi": {
        grade: "Grade 2 (Semi)",
        technique: "Puppet Manipulation",
        domain: "None",
        bio: "Kokichi Muta, also known as Mechamaru, is a second-year student at Kyoto Jujutsu High. Due to a Heavenly Restriction, his body is incredibly weak and he cannot leave his classroom. Instead, he controls a series of mechanical puppets from afar to fight. Muta longs for a normal life and becomes a tragic figure when he is manipulated by the series' antagonists.",
        voiceActors: "Yoshitsugu Matsuoka (Japanese), Khoi Dao (English)"
    },
    
    "Todo's Classmate": {
        grade: "Grade Unknown",
        technique: "Unknown",
        domain: "None",
        bio: "This character is an unnamed student from Kyoto Jujutsu High who appears alongside Todo. They have minimal screen time and their abilities remain unknown.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    // ============================================
    // TOKYO HIGH STUDENTS (SECOND YEARS)
    // ============================================
    
    "Zenin, Maki": {
        grade: "Grade 4 (Semi-Grade 1 capability)",
        technique: "None (Cursed Tool User)",
        domain: "None",
        bio: "Maki Zenin is a second-year student at Tokyo Jujutsu High and the older twin sister of Mai Zenin. Born into the prestigious Zenin clan with almost no cursed energy, she was treated as a failure. Maki uses her immense physical strength and a variety of cursed tools to fight curses on equal footing with any sorcerer. Her goal is to become the head of the Zenin clan and prove that strength isn't determined by cursed energy alone.",
        voiceActors: "Mikako Komatsu (Japanese), Allegra Clark (English)"
    },
    
    "Inumaki, Toge": {
        grade: "Grade 2 (Semi-Grade 1)",
        technique: "Cursed Speech",
        domain: "None",
        bio: "Toge Inumaki is a second-year student at Tokyo Jujutsu High who comes from a clan known for Cursed Speech. This powerful technique forces anyone who hears his words to obey, but it severely damages his throat with each use. To avoid accidentally cursing others, he primarily speaks using rice ball ingredients like 'salmon,' 'tuna,' and 'mustard leaf.' Despite his limited vocabulary, Inumaki is a loyal friend and a skilled sorcerer.",
        voiceActors: "Koki Uchiyama (Japanese), Xander Mobus (English)"
    },
    
    "Panda": {
        grade: "Grade 2 (Grade 1 capability)",
        technique: "Gorilla Mode, Triceratops Mode",
        domain: "None",
        bio: "Panda is a second-year student at Tokyo Jujutsu High. Despite his name and appearance, Panda is neither a panda nor a cursed spirit. He is an 'Abrupt Mutated Cursed Corpse' created by Principal Yaga with three different cores that allow him to switch between fighting forms: the balanced Panda form, the powerful Gorilla form, and the defensive Triceratops form. Panda is wise, compassionate, and serves as a big brother figure to the first years.",
        voiceActors: "Tomokazu Seki (Japanese), Matthew David Rudd (English)"
    },
    
    "Okkotsu, Yuuta": {
        grade: "Special Grade",
        technique: "Copy, Cursed Speech, Rika",
        domain: "Authentic Mutual Love",
        bio: "Yuta Okkotsu is a special grade sorcerer and the protagonist of Jujutsu Kaisen 0: Jujutsu High. He is cursed by his childhood friend Rika Orimoto, who became a powerful vengeful spirit after her death. Yuta can copy any cursed technique he encounters and wields Rika's immense power. Despite his gentle and kind nature, he is one of the most powerful sorcerers in the world, feared and respected by both allies and enemies.",
        voiceActors: "Megumi Ogata (Japanese), Kayleigh McKee (English)"
    },
    
    "Orimoto, Rika": {
        grade: "Special Grade (Vengeful Spirit)",
        technique: "Cursed Energy Manipulation, Copy",
        domain: "Authentic Mutual Love",
        bio: "Rika Orimoto was a childhood friend of Yuta Okkotsu who died in a tragic accident. Her love for Yuta and regret over her death caused her to become a special grade vengeful spirit. Rika protects Yuta with overwhelming power, manifesting as a terrifying but fiercely loyal curse. At the end of Jujutsu Kaisen 0, Rika is released from her curse and passes on, though a remnant of her power remains with Yuta.",
        voiceActors: "Kana Hanazawa (Japanese), Anairis Quinones (English)"
    },
    
    // ============================================
    // CURSES & VILLAINS
    // ============================================
    
    "Ryoumen, Sukuna": {
        grade: "Special Grade",
        technique: "Shrine, Cleave, Dismantle",
        domain: "Malevolent Shrine",
        bio: "Ryomen Sukuna is the King of Curses, a legendary demon who terrorized the golden age of jujutsu over 1000 years ago. He is the most powerful curse in history, now residing within Yuji Itadori's body as a collection of 20 cursed fingers. Sukuna is arrogant, sadistic, and immensely powerful. He acts according to his own whims, interested only in his own pleasure and fighting strong opponents. Sukuna's domain, Malevolent Shrine, is considered a divine technique that doesn't require a barrier.",
        voiceActors: "Junichi Suwabe (Japanese), Ray Chase (English)"
    },
    
    "Mahito": {
        grade: "Special Grade",
        technique: "Idle Transfiguration",
        domain: "Self-Embodiment of Perfection",
        bio: "Mahito is a cursed spirit born from human fear and hatred of each other. He is one of the main antagonists of Jujutsu Kaisen and represents the evolution of curses. Mahito's Idle Transfiguration allows him to reshape human souls, making him incredibly dangerous and nearly impossible to permanently kill. He is childish, cruel, and views humans as nothing more than playthings. Mahito's domain, Self-Embodiment of Perfection, traps victims in a space where he can transfigure them instantly.",
        voiceActors: "Nobunaga Shimazaki (Japanese), Lucien Dodge (English)"
    },
    
    "Getou, Suguru": {
        grade: "Special Grade",
        technique: "Cursed Spirit Manipulation",
        domain: "Unknown",
        bio: "Suguru Geto is a former student of Gojo and one of the most dangerous curse users in history. He was once an idealistic sorcerer who wanted to protect the weak, but after a series of tragedies, he came to despise non-sorcerers whom he calls 'monkeys.' His goal is to create a world only for jujutsu sorcerers by eradicating all non-sorcerers. Geto's technique allows him to absorb and control any cursed spirit weaker than himself.",
        voiceActors: "Takahiro Sakurai (Japanese), Lex Lang (English)"
    },
    
    "Jougo": {
        grade: "Special Grade",
        technique: "Disaster Flames",
        domain: "Coffin of the Iron Mountain",
        bio: "Jogo is a special grade cursed spirit born from human fear of natural disasters, specifically volcanoes and the earth. He is a member of the Disaster Curses alongside Hanami, Dagon, and Mahito. Jogo is arrogant, hot-tempered, and incredibly powerful, capable of creating volcanic eruptions and manipulating magma. Despite his strength, he is humbled multiple times by Gojo and Sukuna, who mock his power as insufficient.",
        voiceActors: "Shigeru Chiba (Japanese), Michael Sorich (English)"
    },
    
    "Hanami": {
        grade: "Special Grade",
        technique: "Disaster Plants, Cursed Buds",
        domain: "Shining Sea of Flowers",
        bio: "Hanami is a special grade cursed spirit born from human fear of natural disasters, specifically the earth and forests. Hanami is a stoic and philosophical curse who believes humanity is destroying the planet and must be eliminated. Using plant-based techniques, Hanami can drain cursed energy, grow devastating roots, and fire beams of pure energy. Unlike other curses, Hanami doesn't seek conflict but fights out of a twisted sense of environmental duty.",
        voiceActors: "Aya Hisakawa (Japanese), Ryan Bartley (English)"
    },
    
    "Dagon": {
        grade: "Special Grade",
        technique: "Disaster Tides",
        domain: "Horizon of the Captivating Skandha",
        bio: "Dagon is a special grade cursed spirit born from human fear of natural disasters, specifically the ocean and water. He is the youngest of the Disaster Curses, appearing childlike but possessing immense power. Dagon's domain traps victims in an endless beach where he controls all aspects of the environment. He is loyal to the other Disaster Curses and fights to protect Mahito during their attack on the Shibuya incident.",
        voiceActors: "Kenta Miyake (Japanese), Kirk Thornton (English)"
    },
    
    "Chousou": {
        grade: "Special Grade (Cursed Womb)",
        technique: "Blood Manipulation, Piercing Blood",
        domain: "None",
        bio: "Choso is a cursed womb death painting, one of nine brothers created from the union of a human woman and a cursed spirit. He is the eldest of the three surviving brothers and serves as a major antagonist before later becoming an ally. Choso uses Blood Manipulation like his relative Noritoshi Kamo, with his signature move being Piercing Blood, a high-pressure jet of blood. He develops a brotherly bond with Yuji Itadori after learning they share the same father, Kenjaku.",
        voiceActors: "Daisuke Namikawa (Japanese), Landon McDonald (English)"
    },
    
    "Esou": {
        grade: "Cursed Womb",
        technique: "Blood Manipulation, Wing King",
        domain: "None",
        bio: "Eso is a cursed womb death painting, one of Choso's younger brothers. He appears alongside his brother Kechizu as antagonists during the Death Painting arc. Eso uses Blood Manipulation and can create 'Wing King,' a technique that launches blood projectiles. He is protective of his younger brother Kechizu and fights Yuji and Nobara in a desperate attempt to survive.",
        voiceActors: "Kouki Miyata (Japanese), Christopher Swindle (English)"
    },
    
    "Kechizu": {
        grade: "Cursed Womb",
        technique: "Blood Manipulation",
        domain: "None",
        bio: "Kechizu is a cursed womb death painting, the youngest of the three brothers that includes Choso and Eso. He has a childlike appearance and personality but is deadly in combat. Kechizu fights alongside Eso against Yuji and Nobara, using Blood Manipulation techniques. He shares a close bond with his brothers and is killed during the battle with Nobara, which triggers Choso's hatred for Yuji.",
        voiceActors: "Natsuki Hanae (Japanese), Ryan Bartley (English)"
    },
    
    "Uraume": {
        grade: "Grade 1 (estimated)",
        technique: "Ice Formation",
        domain: "None",
        bio: "Uraume is a loyal servant of Ryomen Sukuna, serving the King of Curses since the Heian era. They appear androgynous and speak with calm politeness while being utterly ruthless. Uraume uses an ice-based cursed technique that can freeze opponents and create structures of ice. After Sukuna incarnates into Yuji's body, Uraume works to revive their master fully and eliminate any threats to Sukuna.",
        voiceActors: "Mitsuki Saiga (Japanese), Erica Lindbeck (English)"
    },
    
    "Shigemo, Haruta": {
        grade: "Grade 2 (estimated)",
        technique: "Miracles",
        domain: "None",
        bio: "Haruta Shigemo is a curse user affiliated with Geto's group. He has a smug, arrogant personality and believes himself to be blessed with 'miracles' that allow him to survive attacks that should kill him. Shigemo's technique stores small miracles, which he can use to survive lethal blows. He plays a minor role in the Shibuya incident before being killed by Nanami.",
        voiceActors: "Kohei Amasaki (Japanese), Greg Chun (English)"
    },
    
    "Kenjaku": {
        grade: "Special Grade",
        technique: "Body Hopping",
        domain: "Unknown",
        bio: "Kenjaku is an ancient curse user who has lived for over 1000 years by possessing different bodies. They are the mastermind behind the Shibuya incident and the Culling Games, manipulating events from the shadows for centuries. Kenjaku currently inhabits the body of Suguru Geto. They are responsible for creating the cursed womb death paintings, including Choso, making them technically the father of many characters. Kenjaku's ultimate goal is to optimize cursed energy and evolve humanity.",
        voiceActors: "Takahiro Sakurai (Japanese), Lex Lang (English)"
    },
    
    // ============================================
    // SUPPORTING CHARACTERS & CIVILIANS
    // ============================================
    
    "Aida": {
        grade: "Non-Sorcerer",
        technique: "None",
        domain: "None",
        bio: "Aida is a civilian and classmate of Yuji Itadori at the high school he attended before joining Jujutsu High. She appears briefly in the early episodes and has no involvement in jujutsu affairs.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    "Finger Bearer": {
        grade: "Special Grade (Cursed Womb)",
        technique: "Cursed Energy Manipulation",
        domain: "None",
        bio: "The Finger Bearer is a cursed womb that hatches from a finger of Sukuna. It is one of the first special grade curses encountered in the series. The Finger Bearer is a massive, insectoid creature that possesses significant cursed energy and physical strength. It is defeated by Yuji and Nanami during a mission to retrieve another of Sukuna's fingers.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    "Fujinuma": {
        grade: "Non-Sorcerer",
        technique: "None",
        domain: "None",
        bio: "Fujinuma is a minor character who appears in the early episodes of Jujutsu Kaisen as a victim of a curse. He is rescued by Yuji and Megumi during their initial missions.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    "Fujinuma's Brother": {
        grade: "Non-Sorcerer",
        technique: "None",
        domain: "None",
        bio: "The brother of Fujinuma who appears briefly during the curse incident involving his sibling. He has no significant role in the main plot.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    "Fushiguro, Tsumiki": {
        grade: "Non-Sorcerer (Later becomes player)",
        technique: "None (Initially)",
        domain: "None",
        bio: "Tsumiki Fushiguro is Megumi Fushiguro's older step-sister. She was taken in by Gojo alongside Megumi after their father's death. Tsumiki is kind and gentle, serving as Megumi's motivation to protect others. She is cursed by Kenjaku and becomes a player in the Culling Games, which drives much of Megumi's actions in later arcs.",
        voiceActors: "Saori Hayami (Japanese), Laura Stahl (English)"
    },
    
    "Gakuganji, Yoshinobu": {
        grade: "Grade 1",
        technique: "Sound Amplification",
        domain: "None",
        bio: "Yoshinobu Gakuganji is the principal of Kyoto Jujutsu High. He is an elderly, conservative figure who represents the old guard of the jujutsu world. Gakuganji uses a cursed technique that amplifies sound from his guitar, creating devastating shockwaves. He initially opposes Gojo's reforms but shows a more complex side as the series progresses.",
        voiceActors: "Mugihito (Japanese), Paul St. Peter (English)"
    },
    
    "Iguchi, Takeshi": {
        grade: "Non-Sorcerer",
        technique: "None",
        domain: "None",
        bio: "Takeshi Iguchi is a minor civilian character who appears briefly in the series. He has no significant role in jujutsu affairs.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    "Ino, Takuma": {
        grade: "Grade 2",
        technique: "Auspicious Beast Summoning (Cursed Tool)",
        domain: "None",
        bio: "Takuma Ino is a semi-grade 1 sorcerer who works at Tokyo Jujutsu High. He is a fan of Nanami and looks up to him as a mentor. Ino uses a cursed tool called the 'Auspicious Beasts' that allows him to summon four mythical beasts: Kaichi (Reimu), Kirin (Kirin), Reiki (Reiki), and Baku (Baku). He plays a supporting role during the Shibuya incident.",
        voiceActors: "Subaru Kimura (Japanese), John Gremillion (English)"
    },
    
    "Iori, Utahime": {
        grade: "Grade 1 (Semi)",
        technique: "Unknown (Support-based)",
        domain: "None",
        bio: "Utahime Iori is a teacher at Kyoto Jujutsu High and the former classmate of Gojo and Geto. She has a scar on her face and often clashes with Gojo's attitude. Utahime's cursed technique appears to be support-based, enhancing the abilities of her allies. She is responsible for her students at Kyoto and takes her duties seriously despite Gojo's constant teasing.",
        voiceActors: "Yoko Hikasa (Japanese), Kate Bristol (English)"
    },
    
    "Itadori, Wasuke": {
        grade: "Non-Sorcerer",
        technique: "None",
        domain: "None",
        bio: "Wasuke Itadori is Yuji Itadori's grandfather. He raised Yuji after his parents' absence and was the one who taught Yuji about helping others. On his deathbed, Wasuke asked Yuji to 'help people' and to 'die surrounded by people,' which became Yuji's guiding philosophy. His death occurs just before Yuji encounters the Sukuna finger.",
        voiceActors: "Motoki Takagi (Japanese), Steve Kramer (English)"
    },
    
    "Itou, Shouta": {
        grade: "Non-Sorcerer",
        technique: "None",
        domain: "None",
        bio: "Shouta Itou is a minor civilian character who appears briefly in the series. He has no significant role in the main plot.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    "Kumiya, Juuzou": {
        grade: "Curse User",
        technique: "Unknown",
        domain: "None",
        bio: "Juuzou Kumiya is a curse user who works with Geto's group. He appears briefly and has minimal characterization in the series.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    "Mei Mei": {
        grade: "Grade 1",
        technique: "Black Bird Manipulation, Crow Manipulation",
        domain: "None",
        bio: "Mei Mei is a grade 1 sorcerer who works independently, primarily motivated by money. She is cold, calculating, and extremely pragmatic. Mei Mei uses bird-based techniques, allowing her to control crows and see through their eyes. She also wields a large axe in combat. Despite her mercenary nature, Mei Mei is incredibly skilled and plays a significant role during the Shibuya incident alongside her younger brother Ui Ui.",
        voiceActors: "Kotono Mitsuishi (Japanese), Amber Lee Connors (English)"
    },
    
    "Noritoshi's Mother": {
        grade: "Non-Sorcerer",
        technique: "None",
        domain: "None",
        bio: "The mother of Noritoshi Kamo, who appears briefly in flashbacks. She was a concubine of the Kamo clan head, and Noritoshi's birth was controversial within the family. She has minimal screen time and characterization.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    "Okazaki, Tadashi": {
        grade: "Non-Sorcerer",
        technique: "None",
        domain: "None",
        bio: "Tadashi Okazaki is a minor civilian character who appears briefly. He has no significant role in the jujutsu world.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    "Okazaki, Chisaki": {
        grade: "Non-Sorcerer",
        technique: "None",
        domain: "None",
        bio: "Chisaki Okazaki is a minor civilian character who appears briefly alongside Tadashi Okazaki.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    "Saitama School Delinquent": {
        grade: "Non-Sorcerer",
        technique: "None",
        domain: "None",
        bio: "An unnamed delinquent from Saitama who appears briefly in the series. He has no connection to jujutsu and serves as background flavor.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    "Saori": {
        grade: "Non-Sorcerer",
        technique: "None",
        domain: "None",
        bio: "Saori is a childhood friend of Nobara Kugisaki from her village. She moved away to Tokyo, leaving Nobara behind. Saori represents Nobara's desire to escape her small-town life and live in the city. She appears only in flashbacks and has no direct involvement in the plot.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    "Sasaki, Setsuko": {
        grade: "Non-Sorcerer",
        technique: "None",
        domain: "None",
        bio: "Setsuko Sasaki is a classmate of Yuji Itadori at his high school. She and her friend Iguchi are the first ones to witness the cursed fingers at their school. Sasaki is briefly affected by cursed energy but survives the incident.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    "Seito, Kaichou": {
        grade: "Non-Sorcerer",
        technique: "None",
        domain: "None",
        bio: "The student council president at Yuji's high school. He appears briefly during the cursed finger incident.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    "Sotomura": {
        grade: "Non-Sorcerer",
        technique: "None",
        domain: "None",
        bio: "Sotomura is a minor character who appears as a background civilian. He has no significant role.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    "Takada, Nobuko": {
        grade: "Non-Sorcerer",
        technique: "None",
        domain: "None",
        bio: "Nobuko Takada is a fictional idol singer that Todo is obsessed with. She never appears in person but is frequently referenced by Todo as the standard for his ideal woman. Takada is the reason Todo considers Yuji his best friend after discovering they share the same taste in women.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    "Takagi": {
        grade: "Non-Sorcerer",
        technique: "None",
        domain: "None",
        bio: "Takagi is a minor civilian character who appears briefly in the background.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    "Takashi": {
        grade: "Non-Sorcerer",
        technique: "None",
        domain: "None",
        bio: "Takashi is a minor civilian character with no significant role in the plot.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    "Takeda": {
        grade: "Non-Sorcerer",
        technique: "None",
        domain: "None",
        bio: "Takeda is a minor civilian character who appears briefly.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    "Tsubasa": {
        grade: "Non-Sorcerer",
        technique: "None",
        domain: "None",
        bio: "Tsubasa is a minor civilian character with no significant role in the jujutsu world.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    "Tsukumo, Yuki": {
        grade: "Special Grade",
        technique: "Unknown (Star Rage)",
        domain: "None",
        bio: "Yuki Tsukumo is one of only four special grade sorcerers in the world. She is a former student of Jujutsu High who now works independently, researching ways to eliminate curses permanently. Yuki is a free spirit who believes the best solution to cursed spirits is to eliminate cursed energy from humans entirely. She plays a crucial role in the later arcs, mentoring Aoi Todo and revealing key information about the series' history.",
        voiceActors: "Yoko Soumi (Japanese), Erin Yvette (English)"
    },
    
    "Yoshino, Junpei": {
        grade: "Grade 4 (estimated)",
        technique: "Moon Dregs",
        domain: "None",
        bio: "Junpei Yoshino is a tragic figure in Jujutsu Kaisen, a high school student who was bullied relentlessly. He is manipulated by Mahito, who gives him the ability to use cursed energy. Junpei's Moon Dregs technique summons a jellyfish-like shikigami that can poison and melt targets. He befriends Yuji and seems destined to become a sorcerer before Mahito's betrayal leads to his death, which deeply affects Yuji.",
        voiceActors: "Yoshiki Nakajima (Japanese), Micah Solusod (English)"
    },
    
    "Yoshino, Nagi": {
        grade: "Non-Sorcerer",
        technique: "None",
        domain: "None",
        bio: "Nagi Yoshino is the mother of Junpei Yoshino. She is a single mother who works hard to provide for her son. Nagi is kind and supportive of Junpei, unaware of his involvement with curses. She is killed during the events involving Mahito, adding to Junpei's tragedy.",
        voiceActors: "Unknown (Japanese), Unknown (English)"
    },
    
    "Zenin, Naobito": {
        grade: "Grade 1 (Special Grade 1)",
        technique: "Projection Sorcery",
        domain: "None",
        bio: "Naobito Zenin was the head of the Zenin clan and one of the most powerful grade 1 sorcerers. He is a strict, traditionalist leader who embodies the clan's elitist values. Naobito's Projection Sorcery allows him to move at incredible speeds and 'freeze' anyone who fails to move within a predetermined 24 frames per second. He is killed during the Shibuya incident while fighting Dagon and Jogo.",
        voiceActors: "Joji Nakata (Japanese), Jason Marnocha (English)"
    }
};

// Helper function to get character details with fuzzy matching
function getCharacterDetails(characterName) {
    // Clean up the name for matching
    const cleanName = characterName.trim();
    
    // Try exact match first
    if (characterDetails[cleanName]) {
        return characterDetails[cleanName];
    }
    
    // Try case-insensitive match
    const lowerName = cleanName.toLowerCase();
    for (const [key, value] of Object.entries(characterDetails)) {
        if (key.toLowerCase() === lowerName) {
            return value;
        }
    }
    
    // Try partial match for names that might have slight differences
    for (const [key, value] of Object.entries(characterDetails)) {
        if (lowerName.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerName)) {
            return value;
        }
    }
    
    // Handle specific known name variations
    const nameVariations = {
        "Gojou, Satoru": characterDetails["Gojou, Satoru"],
        "Gojo, Satoru": characterDetails["Gojou, Satoru"],
        "Ryoumen, Sukuna": characterDetails["Ryoumen, Sukuna"],
        "Ryomen Sukuna": characterDetails["Ryoumen, Sukuna"],
        "Getou, Suguru": characterDetails["Getou, Suguru"],
        "Geto, Suguru": characterDetails["Getou, Suguru"],
        "Jougo": characterDetails["Jougo"],
        "Jogo": characterDetails["Jougo"],
        "Toudou, Aoi": characterDetails["Toudou, Aoi"],
        "Todo, Aoi": characterDetails["Toudou, Aoi"],
        "Chousou": characterDetails["Chousou"],
        "Choso": characterDetails["Chousou"]
    };
    
    if (nameVariations[cleanName] || nameVariations[lowerName]) {
        return nameVariations[cleanName] || nameVariations[lowerName];
    }
    
    // Return default summary for characters without detailed entries
    return {
        grade: "Unknown",
        technique: "Information not yet available",
        domain: "Unknown",
        bio: `${characterName} appears in Jujutsu Kaisen as a supporting character. This character's detailed information is currently being added to Jujupedia. Check back soon for updates!`,
        voiceActors: "Information not yet available"
    };
}

// Export for use in other files
window.characterDetails = characterDetails;
window.getCharacterDetails = getCharacterDetails;

console.log(`character-data.js loaded with ${Object.keys(characterDetails).length} character entries`);