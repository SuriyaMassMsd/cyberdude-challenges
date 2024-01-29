const data = [
  {
    id: 1,
    img: `https://static.hindutamil.in/hindu/uploads/news/2024/01/28/xlarge/1189843.jpg`,
    title: `
    West Indies Break Records, End 27-Year Drought with Historic Win at The Gabba`,
    logo: `data:image/jpeg;base64,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`,
    username: "cricket paithiyam",
    description: `In a historic turn of events, the West Indies, led by Kraigg Brathwaite, clinched a nail-biting 8-run victory against Pat Cummins' formidable Australian side in the second Test at the Gabba on January 28. This monumental triumph marked the West Indies' first Test victory on Australian soil in a staggering 27 years.

    Shamar Joseph emerged as the undisputed hero of the match, showcasing an extraordinary performance with a stellar 7-wicket haul in the second innings, effectively dismantling the formidable Australian batting lineup. As Australia aimed to chase down a target of 216 runs, they fell agonizingly short by just 8 runs, allowing the West Indies to avoid a series loss and etch their name in the annals of cricket history.
    
    Joseph, in a post-match reflection, expressed his elation and gratitude, acknowledging the unwavering support of his teammates. Overcoming a toe injury that nearly sidelined him, he commended the team's positivity and adherence to fundamental cricket principles.
    
    Notably, this victory brought an end to Australia's previously unblemished red-ball streak since their triumph in the World Test Championship final against India last year. Joseph's emotional revelation, stating that tears welled up in his eyes, underscored the depth of his commitment to the game. He emphasized that, despite physical challenges, he pledged to bowl until the last wicket fell, contributing significantly to the historic win that filled the West Indies camp with unbridled joy and celebration.`,

    viwes: "1m",
    upload: `Published on: 
      28 Jan 2024, 1:48 pm
      `,
    read: "1 min read",
  },
  {
    id: 2,
    username: "Ithaada Cinema",
    logo: "data:image/jpeg;base64,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",
    img: "https://media.assettype.com/newindianexpress%2F2024-01%2Fd2b7904d-1d0e-4c5a-828a-8c3604a26be8%2F09.jpg?rect=0%2C167%2C1727%2C971&w=640&auto=format%2Ccompress&fit=max",
    title:
      "Soori Takes Flight: Unveiling the Excitement Behind His New Movie 'Garudan",
    description: `On Friday, the makers of Soori's upcoming film "Garudan" unveiled the first look poster and a teaser video. Directed by RS Durai Senthilkumar, known for films like "Pattas," "Kodi," and "Ethir Neechal," the movie features Sasikumar and Unni Mukundan in lead roles.


      Durai revealed that the collaboration with director Vetrimaaran for the story of "Garudan" occurred during the wrapping of their previous project, Viduthalai. Vetrimaaran shared an intriguing real-life character, inspiring Durai to incorporate it into his film with Soori. While Vetrimaaran is credited for the story, Durai handled the screenplay.
      
      Describing "Garudan" as a rural action film, Durai emphasized its theme of loyalty, revolving around trust and faith in others. Despite being inspired by a real person, the storyline is entirely fictional.
      
      Explaining the casting choices, Durai mentioned that Unni Mukundan was chosen for a fresh and suitable look after the success of his recent film, "Maalikapuram."
      
      Regarding character dynamics, Durai clarified that the movie lacks a designated hero or villain. The screenplay shifts focus every half hour, portraying different characters as protagonists. Soori, Sasikumar, and Unni Mukundan play key roles, and the narrative is crafted from multiple perspectives.
      
      Apart from the lead trio, the film boasts a stellar cast including Samuthirakani, Sshivada Nair, Revathi Sharma, Mime Gopi, and Rajendran. Sshivada plays opposite Sasikumar, while Revathi Sharma portrays Soori's partner.
      
      The music for "Garudan" is composed by Yuvan Shankar Raja, with Arthur A Wilson as the cinematographer and Pradeep E Raghav handling editing. The majority of the filming took place in Theni, with a small portion shot in Kumbakonam. Produced by K Kumar of Lark Studios, the film is currently in post-production and is scheduled for a Summer release, likely hitting theaters in April.`,
    viwes: "123k",
    upload: `Published on: 
    20 Jan 2024, 10:33 am
    `,
    read: "2 min read",
  },

  {
    id: 3,
    username: "Political Sattai",
    logo: `data:image/png;base64,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`,
    img: `https://wallpapers.com/images/hd/master-vijay-4k-party-dance-xp1yrpiih4wr8aly.jpg`,
    title: "Will Vijay take a break from acting after 'Thalapathy 68'?",
    description: `Vijay, a luminary in South Indian cinema, boasts an impressive filmography that spans over 65 Tamil movies. Presently, he is immersed in the shooting of 'Leo,' directed by Lokesh Kanagaraj, and has enthusiastically embraced the challenges of 'Thalapathy 68' under the directorial guidance of Venkat Prabhu. However, recent reports circulating in the media have ignited speculation about Vijay's contemplation of a substantial hiatus from the silver screen, a break that may extend over three years after the conclusion of his 68th cinematic venture.

      This potential sabbatical, according to media sources, is rooted in Vijay's consideration of active involvement in the 2026 Tamil Nadu state assembly elections. The actor, renowned for his charismatic on-screen presence, is rumored to be exploring a temporary withdrawal from the film industry to dedicate his time and energy to political engagements. Such a move signifies a profound shift in Vijay's priorities, signaling a keen interest in contributing to the democratic process and public service.
      
      While Vijay has not officially confirmed these reports, the prospect of him venturing into the political arena has sparked widespread anticipation and discussions among fans and the public alike. His popularity extends beyond the realm of cinema, and his potential entry into politics could mark a significant development in Tamil Nadu's political landscape.
      
      Vijay's decision, if realized, would echo the footsteps of other actors who have transitioned from the entertainment industry to politics. His colossal fan base could play a crucial role in shaping public opinion, and his involvement may inject a new dynamic into the political discourse.
      
      As enthusiasts await further clarity on Vijay's future endeavors, the prospect of his temporary withdrawal from films and potential entry into politics adds a layer of complexity to his already multifaceted career. It showcases a dedication to civic responsibilities and underscores the actor's desire to contribute meaningfully to society beyond the silver screen.
      
      In the coming months, as developments unfold, Vijay's decision, whatever it may be, is sure to be closely watched by fans, political observers, and the wider public, making it a pivotal moment in the intersection of entertainment and politics in Tamil Nadu.`,

    viwes: "555k",
    upload: `Published on: 
    25 Jan 2024, 1:33 pm
    `,
    read: "3 min read",
  },
];

export default data;
