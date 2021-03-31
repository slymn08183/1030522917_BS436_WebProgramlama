import {errorAccrued, setCards, shuffleArray} from "../src/game";

const {Game} = require("../src/game")
const {mount} = require("enzyme")
const React = require("react")
const {showCard} = require("../src/game");
const testState = {
    state : {
        img_0:"/images/card.jpg",
        img_1:"/images/card.jpg",
        img_2:"/images/card.jpg",
        visibility:"none",
        bottomTextIndex: 0,
        bottomTexts : [
            "Kedi kartını bulmak için kartın üzerine tıklamalısın.",
            "Kazandın!!! ",
            "Kaybettin!!!:( ",
            "Beklenmedik bir hata oluştu! "
        ],
        shownCards : 0,
        cards : ["dog.jpg","dog.jpg","cat.jpg"]
    }
}


test("Init", ()=>{
    const driver = mount(<Game/>)

    const card = driver.find(".card")

    expect(card.length).toEqual(3)

})

test("Click and text change", ()=>{
    const driver = mount(<Game/>)

    const first = driver.find(".card").at(1)

    const srcClosedCard = "/images/card.jpg"

    expect(first.prop('src')).toBe(srcClosedCard)

    first.simulate('click')

    expect(srcClosedCard).not.toBe(driver.find(".card").at(1).prop("src"))
    //
})

test("show card function", ()=>{
    const driver = mount(<Game/>)
    expect(()=>showCard("")).toThrow(Error)
    expect(()=>showCard("img",testState)).toThrow(Error)

    expect(()=>showCard("img",driver)).toThrow(Error)
    expect(()=>showCard("img_0",driver)).not.toThrow(Error)
    const a ="B"
})

test("shuffle array test", ()=>{
    expect(()=>shuffleArray("")).toThrow(Error)
    expect(()=>shuffleArray([0,1,2])).not.toThrow(Error)
})

test("error function", ()=>{
    expect(()=>errorAccrued("")).toThrow(Error)
})