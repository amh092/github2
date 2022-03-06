
import 'normalize.css'
import './App.css'
import SearchSection from './Components/SearchComponent/SearchSection'
import Header from './Components/Header/Header';
import Container from './Components/UI/Container';
import UserProfile from './Components/UserProfile/UserProfile';
import {useState} from 'react'

function App() {

  const [mode, setMode] = useState("light");
  const [image, setImage] = useState("");
  const [login, setLogin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [repos, setRepos] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [company, setCompany] = useState("");
  const [blog, setBlog] = useState("");
  const [location, setLocation] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [bio, setBio] = useState("");
  const [name, setName] = useState("");
  const [user, setUser] = useState("amh092");

  const setModeHandler = (mode) => {
    setMode(() => {
      return mode;
     
    });
  };

  const setUserHandler = (user) => {
    setUser (() =>{
      return user
    });
 
  }


  
 function fetchMoviesList(){
  


    fetch("https://api.github.com/users/"+user)
    .then((response) => {
      return response.json();
      })
    .then((data) => {
     setLogin(`@${data.login}`)
     setImage(data.avatar_url)
     setTwitter(data.twitter_username)
     setRepos(data.public_repos)
     setFollowers(data.followers)
     setFollowing(data.following)
     setCompany(data.company)
     setBlog(data.blog)
     setLocation(data.location)
     setJoinDate(`join date ${data.created_at}`)
     setBio(data.bio)
     setName(data.name)
    });
          
     
  }
        

  
  return (
    <div className="App">

      <Container mode={mode}>

        <Header changMode={setModeHandler}/>
        <SearchSection mode={mode} action={fetchMoviesList} setUser={setUserHandler}/>
        <UserProfile mode={mode} name={name === null ? ('no name'):(name)}
        image={image}
         userName={login}
          joinDate={joinDate.substring(0,20)} 
          brief={bio}
           repo={repos}
           followers={followers}
           following={following}
           location={location === null ? ('no data'):(location)}
           website={blog === null ? ('no data'):(blog)} 
           twitter={twitter === null ? ('no data'):(twitter)}
           company={company === null ? ('no data'):(company)}
           />

      </Container>
  
    </div>
  );
}

export default App;
