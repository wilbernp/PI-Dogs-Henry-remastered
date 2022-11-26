function convertImperialToMetric(...rest:number[]):number[]{
    const CONVERTION_FACTOR = 0.4536
    const valuesMetrics = rest.map(imperialValue =>{
        return Math.ceil(imperialValue * CONVERTION_FACTOR)
    })
    return valuesMetrics
}

function existNumber(str:string):boolean{
    return /\d{1,}/.test(str)
}

function getNumbers(str:string):number[]{
    // array of numbers
    const array = str.match(/\d{1,}\.\d{1,}|\d{1,}/g).map(e => Number(e))
    return array
}

function validateExtension(str:string, ext:string):boolean{
    const regex = new RegExp(`.${ext}$`)
    return regex.test(str)
}