import "./Thepopup.css"

function Thepopup({popupContent, onClose}) {
    
    return (
        <div className="backgroundThepopup" onClick={onClose}>
        <div className="Thepopup">
            <button onClick={onClose} className="close-buttonThepopup">x</button>
            {popupContent}
        </div>
        </div>
    )
}

export default Thepopup;

// bara stäng knapp i den här filen 
// öppnings knapp i portfolio 