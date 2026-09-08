import '../css/About.css'

export default function About() {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <p className="website-bio">I'm a Computer Science student at McGill University with a passion for learning.</p>
      <p className="website-bio">Outside of school, you'll find me boxing or playing volleyball.</p>

      <div className="block">
        <img className="journey-img" src="/img/McGill_photo-min.webp" alt="McGill" />
        <div className="journey-text-section">
          <a className="journey-block-title" target="_blank" rel="noreferrer" href="https://www.mcgill.ca/">
            McGill University
          </a>
          <p className="journey-role">B.S. in Computer Science, Expected May 2026</p>
          <p className="journey-location">Montreal, QC</p>
          <blockquote className="journey-testimony">
            Graduating high school was the most refreshing feeling of my life. However, what I did not expect, was the responsibilities and challenges that would come along with my newfound freedom.
          </blockquote>
          <blockquote className="journey-testimony">
            McGill University, one of Canada's prestigious post-secondary institutions. The biggest challenge of my life so far, yet I find the Montreal campus quite enjoyable. While I have admittedly struggled very much with the courses, I developed many skills through the McGill Computer Science Curriculum. My favourite class so far has still got to be Comp 202, even though Python is probably the most beginner-friendly course. It wasn't the language or the curriculum that made it so enjoyable, but the professor. I could tell that he enjoyed teaching, and even more programming. I realized through Comp 202, that programming can be gamified, interesting, and fun. Since I didn't start programming until university, I never thought that I would be able to enjoy sitting at a computer for several hours debugging small logical errors. The struggle was real sometimes but the reward was always worth it. To this day I still think about how that professor impacted my journey towards coding, and it always gives me hope to go back and debug that one annoying assignment. So when I think of McGill University, I think of how more often than not, there are good professors.
          </blockquote>
          <blockquote className="journey-testimony">
            McGill developed my interests further, honed my talents, and surrounded me with a variety of motivating peers.
          </blockquote>
        </div>
      </div>

      <div className="block">
        <img className="journey-img" src="/img/McGill_photo4-min.webp" alt="Boxing" />
        <div className="journey-text-section">
          <a className="journey-block-title" target="_blank" rel="noreferrer" href="https://mcgillstudentboxingclub.ca/">
            McGill SSMU Boxing Club
          </a>
          <p className="journey-role">VP Events</p>
          <p className="journey-location">Montreal, QC</p>
          <blockquote className="journey-testimony">
            As VP of Events for the McGill SSMU Boxing Club I plan, and manage events, as well as help out with managing equipment.
          </blockquote>
          <blockquote className="journey-testimony">
            When I was first looking at the list of clubs at McGill I could do for fun, there were a few that piqued my interest but one stood out from the rest. Boxing. Previously, I worked out and had experience in the weight room, but I never really applied myself to a sport or anything that required technique, or athleticism. "Boxing sounds cool," I thought, having always played with the idea of learning some form of martial art inside of my head, and so I gave it a shot. Since then, besides working out, boxing has become a huge therapeutic release for me. While I do seriously recommend seeking professional help when you feel seriously mentally ill and not take after my example, the time I spent boxing became my escape. When I had bad days, and anxious thoughts clouded my mind, getting into the spin room, and hitting pads, and sometimes other people always cleared my head. Nothing but the thought of improving my form filled my head. Sometimes fear of being hit prevented me from thinking about anything else. When I box, It's just me and my opponent, or partner rather, because if you know anything about sparring, you're not trying to hurt your partner. In my worst days, boxing was my release, my haven, my therapy.
          </blockquote>
        </div>
      </div>
    </section>
  )
}
