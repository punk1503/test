import './App.css';
import CardBlock from './CardBlock/CardBlock.jsx';

// function TicketBlock({name}) {
//   return <h1 style={{'color': 'white'}}>{name}</h1>
// }

// function MiniNavBar({children}) {
//   const [currentTab, setCurrentTab] = useState(children[0])
//   return (
//   <>
//     <div className="mini_nav">
        
//         {children.map((object, index) => {
//           return(
//           <>
//             <input type="radio" name="mini_nav__tabs" id="mini_nav__tab_1" checked={(!currentTab && index === 0) || (object === currentTab) ? true : false}/>
//             <label onClick={() => {setCurrentTab(object)}} htmlFor="mini_nav__tab_1" className="tab">{object.props.name}</label>
//           </>
//           )
//         })}
//     </div>
//     <>
//         {currentTab}
//     </>
//   </>

//   )
// }

function App() {
  return (
    <>
      <div className="App">
        <CardBlock card_data={{
          name:"Andrey",
          age:19 ,
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eligendi necessitatibus autem! Laboriosam, voluptatibus, sunt ut assumenda vel, corrupti velit sed voluptas officia numquam officiis.", 
          photos:
            ["./static/images/img1.png", 
            "./static/images/img2.png", 
            "./static/images/img3.png"],
          technologies:
            [{name: "React", bg_color: "#006fe6"}, 
            {name: "JS", bg_color: "#ebd94e"}, 
            {name: "Angular", bg_color: "#e60000"}],
        }}/>
      </div>
    </>
  );
}
export default App;
