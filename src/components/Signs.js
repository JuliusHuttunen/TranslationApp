import { useEffect, useState } from "react";
import signA from "../resources/individial_signs/a.png";
import signB from "../resources/individial_signs/b.png";
import signC from "../resources/individial_signs/c.png"
import signD from "../resources/individial_signs/d.png"
import signE from "../resources/individial_signs/e.png"
import signF from "../resources/individial_signs/f.png"
import signG from "../resources/individial_signs/g.png"
import signH from "../resources/individial_signs/h.png"
import signI from "../resources/individial_signs/i.png"
import signJ from "../resources/individial_signs/j.png"
import signK from "../resources/individial_signs/k.png"
import signL from "../resources/individial_signs/l.png"
import signM from "../resources/individial_signs/m.png"
import signN from "../resources/individial_signs/n.png"
import signO from "../resources/individial_signs/o.png"
import signP from "../resources/individial_signs/p.png"
import signQ from "../resources/individial_signs/q.png"
import signR from "../resources/individial_signs/r.png"
import signS from "../resources/individial_signs/s.png"
import signT from "../resources/individial_signs/t.png"
import signU from "../resources/individial_signs/u.png"
import signV from "../resources/individial_signs/v.png"
import signW from "../resources/individial_signs/w.png"
import signX from "../resources/individial_signs/x.png"
import signY from "../resources/individial_signs/y.png"
import signZ from "../resources/individial_signs/z.png"

function Signs(props) {

    const signs = [

        {
            letter: "a",
            sign: signA
        },
        {
            letter: "b",
            sign: signB
        },
        {
            letter: "c",
            sign: signC
        },
        {
            letter: "d",
            sign: signD
        },
        {
            letter: "e",
            sign: signE
        },
        {
            letter: "f",
            sign: signF
        },
        {
            letter: "g",
            sign: signG
        },
        {
            letter: "h",
            sign: signH
        },
        {
            letter: "i",
            sign: signI
        },
        {
            letter: "j",
            sign: signJ
        },
        {
            letter: "k",
            sign: signK
        },
        {
            letter: "l",
            sign: signL
        },
        {
            letter: "m",
            sign: signM
        },
        {
            letter: "n",
            sign: signN
        },
        {
            letter: "o",
            sign: signO
        },
        {
            letter: "p",
            sign: signP
        },
        {
            letter: "q",
            sign: signQ
        },
        {
            letter: "r",
            sign: signR
        },
        {
            letter: "s",
            sign: signS
        },
        {
            letter: "t",
            sign: signT
        },
        {
            letter: "u",
            sign: signU
        },
        {
            letter: "v",
            sign: signV
        },
        {
            letter: "w",
            sign: signW
        },
        {
            letter: "x",
            sign: signX
        },
        {
            letter: "y",
            sign: signY
        },
        {
            letter: "z",
            sign: signZ
        }];

    const [convertedSigns, setConvertedSigns] = useState([]);

    useEffect(() => {
        if (props.string && props.string.length > 0) {
            setConvertedSigns(convertStringToSigns(props.string));
        }
    }, [props.string]);

    function convertStringToSigns(string) {
        const converted = []
        for (let i = 0; i < string.length; i++) {
            const letter = string[i].toLowerCase();

            if (signs.filter(x => x.letter === letter).length > 0) {
                const index = signs.findIndex(x => x.letter === letter);
                converted.push(signs[index]);
            }
        }
        return converted;
    }
    const translation = convertedSigns.map((sign, index) => {
        return (
            <img src={sign.sign} alt={"American sign language sing for " + sign.letter} key={index} />
        )
    })
    return (
        <>
            {translation}
        </>
    )
}

export default Signs;