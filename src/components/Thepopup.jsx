import "./Thepopup.css"

function Thepopup({popupContent, onClose}) {
    
    return (
        <div className="backgroundThepopup" onClick={onClose}>
            <div className="Thepopup" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="close-buttonThepopup">x</button>
                <h2>{popupContent.title}</h2>
                {/* <img src={popupContent.img} alt={popupContent.title} /> */}
                <p>{popupContent.popupInfo.shortWriteUp}</p>
                <p>{popupContent.popupInfo.info}</p>
                <a href={popupContent.popupInfo.link}>
                    View GitHub Repo
                </a>
            </div>
        </div> 
    )
}

export default Thepopup;

// bara stäng knapp i den här filen 
// öppnings knapp i portfolio 