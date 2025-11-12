import Project from "./components/Project.jsx";

function App() {
  return (
    <>
      <Project 
        title = "Project 1"
        link = "GitHub Repo Link"
        techUsed = "Tech used"
        shortWriteUp = "A short write up"
      ></Project>
      <Project 
        title = "Project 2" 
        link = "GitHub Repo Link"
        techUsed = "Tech used"
        shortWriteUp = "A short write up"
      />
      <Project 
        title = "Project 3" 
        link = "GitHub Repo Link"
        techUsed = "Tech used"
        shortWriteUp = "A short write up"
      />
    </>
  )
}

export default App
