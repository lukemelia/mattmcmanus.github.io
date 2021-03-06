---
title: "#EmberJS2018: Improve the interoperability of the community and the framework"
category: dev
---
I am writing in response to the Ember core team's “Call for blog posts”. In it, they've asked members of the community to propose goals and direction for the remainder of 2018. Before I get started, it seems useful to give a bit of context about my relationship to Ember. This instructs how I came to the points below. I’m a user interface designer and full stack developer (with an unrepentant bent towards the front end). I’ve been developing apps with ember, full time, since version 1.11 (released early 2015). I came to it after several years of developing backbone & react. The frameworks component ergonomics and the promise of having models/routing/building that "just worked" are what drew me. At the end of the day though, what I care most about is building things that people will use, not so much how I will build it. I trust folks smarter than me to figure out the technical details. 

My hope is that Ember will continue to be an investment worth making. I see a growing, diverse community with lots of fresh faces as an essential part of that. So, for 2018 and beyond, I hope Ember will continue to improve its interoperability as a community and as a technology within the larger javascript ecosystem. This will make Ember easier and more successful for the new and curious, which benefits all of us. 

## Improving our interoperability as a community

It’s no secret, the view from the outside is that Ember is a declining framework and an insular community. This is not a surprise when we consider the signals that lead people to such a conclusion (StackOverflow, our forum, conference talks, etc). I'm not describing a new or unknown problem though. Since EmberConf in March, the community has started (or likely continued) the process of grappling with this in a concerted way.  I'm encouraged by the results. Jen Weber and NAME's work around StackOverflow questions, the discussion around our use of slack, and the community-driven effort around submitting talks to general JS conferences are a few initiatives. 

Even so, there is more work to do! One of the most unintentionally detrimental things the Ember community has done is making slack it’s primary tool for communication. There are several things at play here:

* Slack is a proprietary walled garden that you can't even access without an account.
* The signal to noise ratio in slack, like any chat room, is entirely inefficient. Simultaneous conversations, inconsistent use of threads, and poor asynchronous conversation attribute to this.
* Once you do get in, how do you find answers? There is no practical history. Even if an answer is still accessible, finding a single message in a sea of conversations takes a lot of work
* Slack can be intimidating for new users without any social capital in the community

Certainly, Slack is a well-made tool that makes many things simpler. The end result though is all our talent, knowledge, and experience is not present in public, searchable channels. Our back and forth and collective learning should generate useful artifacts. Our use of slack does not do that and it puts a burden on our guides that they can never fully bear. We should not settle for such a status quo.

My hope for the rest of 2018 is to see a continued embrace of truly public channels for communication. The Discourse forum is an excellent choice for that. It’s open source, completely public, encourages good community, and it has many features to increase signal (top posts, post summarization, useful activity emails). It is not a perfect solution, but I consider the tradeoffs worthwhile. Making that shift will require intentional actions on behalf of the leaders of the community and a whole lot of inertia. To make this a reality, several things need to happen:

* The core team members, along with everyone else, should redirect questions in slack to Discourse as much as possible
* One of the reasons slack is so popular is it’s not merely a support tool. Discussion, planning, and announcements make it feel more like a community, rather than a burden. The structure of Discourse should be set up to encourage those things as well. To that end, I’ve proposed a restructuring of the categories
* I know I'm asking a lot here, but the core teams should move their discussions, meetings notes, and plans into Discourse as well. This will increase its usefulness and generally add to the forums inertia

## Improving the interoperability of ember’s technology

Ember is a hard sell because it's a big ask. "Buy in completely to our way of thinking and you will be productive for a long time." The compete buy-in is part of the framework's strength and I don't want to lose that vision. I see ways we might work to reduce the risk of trying Ember and ease the transition to the framework. We can do so by increasing the surface area of shared knowledge within the larger JS ecosystem. 

The more potential inroads there are, the more we reduce friction for people experimenting with the framework. For example:

* Drop dead easy use of npm modules. Many have mentioned this and it would be a huge win.
* Increasing “official” awareness of other data layers like Redux, Orbit, Apollo. Though we should continue to be unrepentant about our preference toward ember-data, we should not implicitly communicate the exclusive use of it. We should provide cookbooks or clear guidelines about the availability and use of these other data layers.
* Proper WebComponent support would increase the potential ember developer base. This would encourage cross-pollination of ideas and make it easier to consider the framework.
* Support for widely used tools like Storybook.js could provide a less intimidating way for folks to explore component APIs while maintaining workflow continuity for parts of their team

There have been many great posts circling around and I hope my thoughts contribute productively to the conversation. I know many may not come to the same conclusions on Slack or the importance of technical interoperability. 

There have been many great words written in this "Call for Blog Posts." It gives me a lot of hope and excitement around Ember's future. Like all of us, I hope the continued success of this tool. Helping new developers succeed and making it easier to explore the framework are critical to a thriving community. The beautiful thing about that work is that everyone, new and old, benefit from it. I hope my thoughts contribute productively toward that end.
