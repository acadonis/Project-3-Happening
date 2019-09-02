# GA Project 4: Happening - A MERN stack app 

### Link

[Happening](https://project-3-happening.herokuapp.com/#/)

### Brief

Working in a group of 4, we were tasked with building a Mongoose, Express, React and Node.js (MERN) full-stack application from scratch. 

Key deliverables were as follows:

* Build a full-stack MERN application
* Use an Express API to serve data from a Mongo database
* Consume your API with a separate front-end built with React
* Be a complete product, requiring multiple relationships and Create Read Update and Delete (CRUD)  functionality for at least two models
* Have a visually impressive design
* Have automated tests for RESTful resources on the back-end

### Overview & concept of the project

Having been allocated our group, we spent several hours discussed what kind of app we wished to build, and who it would serve. Several of the group were not from London, and the topic of knowing where to go in London for particular interests, plus finding people who shared these interests, came up. 

While we were aware that apps such as Meetup and websites such as Time Out provide a similar service, we felt this type of app was a good opportunity to showcase our skills, given the function requirements for both events and users.

Once the idea had been settled upon, the name came quickly. Realising that "event" is a variable set by browsers when an event handler is called, we decided to come up with a new description for use in the code, and happening was agreed on. Given the double meaning, this was quickly adopted as the overall title of the app.

From the outset we wanted a stylish and attractive app which would draw users in and make them engage with the events, and as such visual design was given a high priority. 

### Technologies used

Mongoose, Express, React, Node.js, MongoDB, axios, Bulma, HTML5, ES6, CSS 3, SASS, Git, Github

### Approach taken

## Planning

After agreeing the concept of the project, we spent an afternoon planning the app using wireframes:

<img src="your image" style="transform:rotate(90deg);">

We also talked through the process of collaborative working on github, reminding ourselves to work on a new branch for each feature and merge this frequently (once tested), with the main development branch.

We then identified those features which were core MVP and those which we could cut out, setting up a Trello board with key tasks. We also identified the "foundation" tasks which had to be done before we would effectively work independently on key components. 

These tasks included agreeing the models for happenings and users, routing, and common Bulma card components we would use across the site to display event and user information. 

## Implementation

We commenced by working together as a group, building the models to be used, agreeing routing and other basic requirements for the app. Once completed, we built a barebones front-end to check that we had a full-stack application working. 

After this initial start, we split the building of the app into independent tasks and listed these on our Trello board, utilising a MoSCoW categorisation for must have, should have, could have and won't have. 

My main contribution to the build were the new happenings create page and the main index page displaying the happenings. 

### New happening create page

The new happening create page is a key part of the site, allowing users to create a new happenings. As we had decided a happening could belong to more than one category, I implemented a react-select input control to achieve this.


```Javascript
 <div className="field">
   <label className="label">Category</label>
   <Select
     value= {selectedCategories}
     options={categories}
     isMulti
     onChange={this.handleCategoryChange}
   />
   {this.state.errors.categories && <small className="help is-danger">{this.state.errors.categories}</small>}
 </div>
 
=========================================
                
handleCategoryChange(selectedCategories) {
    const formData = { ...this.state.formData, categories: selectedCategories ? selectedCategories.map(option => option.value) : [] }
    this.setState({ formData })
}
```

This resulted in a change to the category property of the happening model from a string to an array of strings to incorporate the { label: categories, value: categories } structure required by react-select. As this was a change to the underlying models I ensured I talked through this change with other members of the team so they were aware of it.  

Users are required to be logged into the site to create a happening, and a Toastify warning presents if they try to proceed when not logged in, together with a redirect to the login or register page:

```Javascript

<SecureRoute path="/happenings/new" component={HappeningNew} />
      
============================================
      
router.route('/happenings/')
  .get(happeningsController.index)
  .post(secureRoute, happeningsController.create)

============================================

const SecureRoute = (props) => {
  if(Auth.isAuthenticated()) return <Route {...props} />
  toast.error('You need to log in to perform this action')
  return <Redirect to="/login" />
}
```
## Happening Index Page

The Happening index page was required to have 5 sections of happenings grouped by categories, with two larger event placeholders and three smaller ones. The layout of the section was relatively straightforward, using components with Bulma card classes, however the challenge was to adhere to DRY principles and avoid duplication of code.

To this end I built an index section functional component, which was used by the main index classical component to generate the 5 sections. Firstly the intial axios get was sliced, to return results in 5 categories, and then these results were further sliced to return 5 happenings per category. 

Once set to state, the results are mapped over in the render and spread to the Happening index section, which produces the required layout per category. 

```Javascript

componentDidMount() {
    axios.get('/api/happenings')
      .then(res => {
        const results = categories.slice(0,5).map(category => {
          return {
            name: category.value,
            happenings: res.data.filter(happening => happening.categories.includes(category.value)).slice(0,5)
          }
        })
        this.setState({ results })
      })
  }



  render() {
    return (

      <section className="section">
        <div className="container">
          {!this.state.results && <h2 className="title is-2">Loading...</h2>}
          {this.state.results && this.state.results.map((result, i) =>
            <div key={i}>
              <HappeningIndexSection
                {...result}
              />
              <LazyHero
                ransitionTimingFunction="ease-in-out" isFixed={true}
                imageSrc="https://unsplash.it/2000/1000" minHeight="10vh">
                <h1>Happening</h1>
              </LazyHero>

            </div>
          )}

        </div>
      </section>
    )
  }
```

### Styling

Styling was achieved primarily though the use of a Bulma template, Lux from Bulmaswatch. This was introduced by agreement early on in the project, which meant that members of the group were able to style their components with the confidence that these would not deviate signifcantly from other people's styliny. 

At the end of the project minimal tweaks were required to the overall styling to give single visual identity to the app, and this was in a large part due to the use of the template at an early stage.

As with my second project, we felt that, although there was a signficant amount of information to display, an uncluttered apporach was still best. Given the subject matter of events and enjoying yourself, we gave images prominance on the site, as these often grab a user's interest more than text. 
 
Parallex effects were used where we felt it added to the visual appeal of the page, such as on the Index with React-lazy-hero:
```Javascript
<LazyHero
  ransitionTimingFunction="ease-in-out" isFixed={true}
  imageSrc="https://unsplash.it/2000/1000" minHeight="10vh">
  <h1>Happening</h1>
</LazyHero>
```
The styling of the site 




### Wins and Blockers

#### Wins:
* The search functionality works as intended, allowing the user a simple and effective way of searching for cocktails to make.

* Prior research on the API meant that the information available through requests was that required by the app.

* Strong design which puts the product at the heart of the user experience.

* Succinct and well structured code throughout.

#### Blockers:
* Each pre-populated search on the nav bar has it's own component, when ideally a single component would be used to load each search, with the ingredient passed in as a variable depending on the link clicked. I sucessfully tackled a more advanced version of this issue in Project 3 - Happenings, which is detailed in the project readme.

### Future features

* Introduce the ability to search by multiple ingredients 
* A comparison function to compare cocktails
* Making the prepopulated searches use a single component. 

### Learning points (tech & soft skills)

#### Methodology
The experience of working with a colleague pair programming was invaluable. Having a second person to come up with ideas, suggest alternatives, and check code as it is typed saves time and leads to a more rounded product. 

The hackathon format of the project meant that all time had to be used productively, and it was an interesting exercise to  balance when to start the technical development versus conducting sufficient preparation. I am happy that we struck this balance relatively well for our first such project. 

#### Technical
This project honed my skills with React, and advanced my understanding of the React set lifeycycle greatly. Understanding when render is called and React reconciliation overall I found key to this, combined with ensuring that all information to be displayed to the user is set by setState, and state is never modified directly. 

It also increased my knowledge of APIs, both in terms of using axios to retrieve information, and in researching the capabilities (and importantly) limitations of APIs prior to deciding to use them through their documentation. 






# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #4: A MERN Stack App
​
## Overview
​
**You’ve come a long way, and it's time to show it.** This will be your most advanced project to date. It is __IMPORTANT__ to note that when we say _advanced_, the project doesn't necessarily need to have lots more functionality.
​
**Remember:** simple code is stable code, so always favour refactoring and bug fixing over adding more functionality.
​
With this in mind, you need to be smart about how you plan, limit your project scope to be achievable (in terms of functionality) and focus on quality rather than quantity.
​
Make sure you review your project proposal with your instructor so you can make sure it's **something you can accomplish in the limited time we have**. You will have some time after the project to add extra functionality before your Meet & Hire!
​
---
​
## Technical Requirements
​
You must:
​
* **Build a full-stack application** by making your own backend and your own front-end
* **Use an Express API** to serve your data from a Mongo database
* **Consume your API with a separate front-end** built with React
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut
* **Have a visually impressive design** to kick your portfolio up a notch and have something to wow future clients & employers. **ALLOW** time for this.
* **Be deployed online** so it's publicly accessible.
* **Have automated tests** for _at least_ one RESTful resource on the back-end. Improve your employability by demonstrating a good understanding of testing principals.
​
---
​
## Necessary Deliverables
​
* A **working app** hosted on the internet
* A **link to your hosted working app** in the URL section of your Github repo
* A **git repository hosted on Github**, with a link to your hosted project, and frequent commits dating back to the _very beginning_ of the project
* **A `readme.md` file** with:
    * An embedded screenshot of the app
    * Explanations of the **technologies** used
    * A couple paragraphs about the **general approach you took**
    * **Installation instructions** for any dependencies
    * Link to your **user stories/wireframes** – sketches of major views / interfaces in your application
    * Link to your **pitch deck/presentation** – documentation of your wireframes, user stories, and proposed architecture
    * Descriptions of any **unsolved problems** or **major hurdles** you had to overcome
​
---
​
## Suggested Ways to Get Started
​
* **Don’t get too caught up in too many awesome features** – simple is always better. Build something impressive that does one thing well.
* **Design first.** Planning with user stories & wireframes before writing code means you won't get distracted changing your mind – you'll know what to build, and you can spend your time wisely by just building it.
* **Don’t hesitate to write throwaway code** to solve short term problems.
* **Read the docs for whatever technologies / frameworks / API’s you use**.
* **Write your code DRY** and **build your APIs RESTful**.
* **Be consistent with your code style.** You're working in teams, but you're only making one app per team. Make sure it looks like a unified effort.
* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.
* **Keep user stories small and well-defined**, and remember – user stories focus on what a user needs, not what development tasks need accomplishing.
* **Write code another developer wouldn't have to ask you about**. Do your naming conventions make sense? Would another developer be able to look at your app and understand what everything is?
* **Make it all well-formatted.** Are you indenting, consistently? Can we find the start and end of every div, curly brace, etc?
* **Comment your code.** Will someone understand what is going on in each block or function? Even if it's obvious, explaining the what & why means someone else can pick it up and get it.
* **Write pseudocode before you write actual code.** Thinking through the logic of something helps.
​
---
​
## Project Feedback + Evaluation
​
* __Project Workflow__: Did you complete the user stories, wireframes, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?
​
* __Technical Requirements__: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?
​
* __Creativity__: Did you added a personal spin or creative element into your project submission? Did you deliver something of value to the end user (not just a login button and an index page)?
​
* __Code Quality__: Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors as we have in class?
​
* __Problem Solving__: Are you able to defend why you implemented your solution in a certain way? Can you demonstrated that you thought through alternative implementations? _(Note that this part of your feedback evaluation will take place during your one-on-one code review with your instructors, after you've completed the project.)_
