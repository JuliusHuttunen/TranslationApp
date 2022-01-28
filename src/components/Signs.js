import signA from "../resources/individial_signs/a.png"
import signB from "../resources/individial_signs/b.png"
function Signs() {
    
    const signs = [signA, signB];
    const translation = signs.map((index, sign) => {
        return (
            <div key={index}>
                <img src={sign} alt={"test"}/>
            </div>
        )
    })
    return (
        <>
            {translation}
        </>
    )
}

export default Signs;