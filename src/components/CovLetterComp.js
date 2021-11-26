

function CovLetterComp ({onClick, addr, covLetterText, motivText}) {

    return (
        <div className="container" id="grid">
            <button className="ExitBtn" onClick={() => (onClick())}>X</button>

            <div className="upper">
                <h2>Cover letter</h2>
                <p>{covLetterText}</p>
            </div>

            <div className="lower-left">
                <h3>Contact me through e-mail.</h3>
                <a href={addr}>Send e-mail</a>
            </div>
            <div className="lower-right">
                <h3>Why me?</h3>
                <p>{motivText}</p>
            </div>
        </div>
    );
}
export default CovLetterComp;