// import { useState } from "react";
// import Testcomponent from "../components/Testcomponent";

// function Testpopup() {
//     const [popupInfo, setPopupInfo] = useState({
//         title: "This is window with information",
//         info: "this is the information",
//     });
//     const [isOpen, setIsOpen] = useState(false)
//     return (
//         <>
//             <button onClick={() => setIsOpen(true)}>Öppna mig</button>
//             <h1>detta är sidan innan öppnandet av componenten/popup</h1>
//             {/* alla tre project */}
//             {isOpen && (
//                 <Testcomponent title = {popupInfo.title} info = {popupInfo.info} />
//             )}
//         </>
//     )
// }

// export default Testpopup;