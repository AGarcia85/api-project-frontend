# Breaking Bad API Frontend

----
## What is it?

> My Frontend API project consists of characters from the hit television serious "Breaking Bad" I created my own API and fetched the information from it to populate my frontend.

----
## What I Used
1. I used React with multiple dependencies
2. installed react- router and react-router-dom

----
## How to Install React
1. Open your terminal and go into your project folder. 
2. Once inside use terminal command

>

    npx create-react-app <my-app>


3. Then install dependencies 

>

    npm install react-router react-router-dom

4. Enjoy and start coding 

----
## Problems

> Some of the issues I encountered with this front end project is how to render single character data when a certain name is click. Before I added a function and methods to fix this it would render all the data from my API regardless of which name I clicked on. I created a function and binded it to the characterData route and used params to match up each name to render the character info properly

>

    code (<Route path="/characterData/:character"
          render={routerProps => (
          <CharacterData
            {...routerProps}
            {...this.state}
            singleChar={this.singleChar}
          />)

>

    code (const charInfo = this.props.characterData.filter(item => item.name === this.props.match.params.character))

**Home Page**

![alt text]("./src/image/screenshot1.png")

**Character Data Page**

![alt text]("./src/image/screenshot2.png")

**Original Breaking Bad API**

* list
[links](https://breakingbadapi.com/documentation)


**My Breaking Bad API**

* list
[links](https://alexg-api-backend.herokuapp.com/)
----
## Created 
* 01-Jan-2020 

----
## Licensing 
* I do not own any of these images. This is merely for educational purposes 